// app/api/leads/route.ts
// API endpoint pour capturer les leads via formulaire

import { NextRequest, NextResponse } from 'next/server';
import { captureLead, sendConfirmationEmail } from '@/lib/brevo';

// Rate limiting simple en mémoire (en prod, utiliser Redis/Upstash)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;       // max 5 requêtes
const RATE_WINDOW = 60_000; // par minute

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return true;
  }

  if (entry.count >= RATE_LIMIT) return false;

  entry.count++;
  return true;
}

// Validation email robuste
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) && email.length <= 254;
}

export async function POST(request: NextRequest) {
  // Rate limiting par IP
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    'unknown';

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Trop de requêtes. Réessayez dans une minute.' },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Corps de requête invalide' }, { status: 400 });
  }

  const { email, firstName, metier, yearlySavings, source, honeypot } = body as {
    email?: string;
    firstName?: string;
    metier?: string;
    yearlySavings?: number;
    source?: string;
    honeypot?: string; // champ caché anti-bot
  };

  // Anti-bot : si honeypot rempli, on simule un succès sans rien faire
  if (honeypot) {
    return NextResponse.json({ success: true }, { status: 201 });
  }

  // Validation email
  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: 'Email invalide' }, { status: 400 });
  }

  // Sanitisation légère
  const safeFirstName = String(firstName || 'Artisan').slice(0, 50).trim();
  const safeMetier = String(metier || 'Non spécifié').slice(0, 50).trim();
  const safeSource = String(source || 'website').slice(0, 50).trim();

  const leadResult = await captureLead({
    email,
    firstName: safeFirstName,
    metier: safeMetier,
    yearlySavings: Number(yearlySavings) || 0,
    source: safeSource,
  });

  if (!leadResult?.success) {
    return NextResponse.json(
      { error: 'Erreur lors de la capture du lead' },
      { status: 500 }
    );
  }

  // Confirmation email en arrière-plan (non bloquant)
  sendConfirmationEmail(email, safeFirstName).catch((err) =>
    console.error('Confirmation email failed:', err)
  );

  return NextResponse.json(
    { success: true, message: 'Merci ! Vérifiez votre email.' },
    { status: 201 }
  );
}

export async function GET() {
  const hasApiKey = !!process.env.BREVO_API_KEY;
  return NextResponse.json(
    { status: hasApiKey ? 'ready' : 'not_configured' },
    { status: hasApiKey ? 200 : 503 }
  );
}
