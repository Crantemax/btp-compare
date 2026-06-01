// app/api/leads/route.ts
// API endpoint pour capturer les leads via formulaire

import { NextRequest, NextResponse } from 'next/server';
import { captureLead, sendConfirmationEmail, triggerNurturingSequence } from '@/lib/brevo';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, firstName, metier, yearlySavings, source } = body;

    // Validation basique
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      );
    }

    // Capture du lead dans Brevo
    const leadResult = await captureLead({
      email,
      firstName: firstName || 'Artisan',
      metier,
      yearlySavings: Number(yearlySavings) || 0,
      source: source || 'website',
    });

    if (!leadResult?.success) {
      return NextResponse.json(
        { error: 'Erreur lors de la capture du lead' },
        { status: 500 }
      );
    }

    // Envoie email de confirmation
    await sendConfirmationEmail(email, firstName || 'Artisan');

    // Déclenche la séquence de nurturing (7 emails sur 14 jours)
    await triggerNurturingSequence(email, 'nurturing-btp-7days');

    // Log pour tracking
    console.log(`✓ Lead captured: ${email} from ${source}`);

    return NextResponse.json(
      {
        success: true,
        message: 'Lead capturé avec succès ! Vérifiez votre email.',
        contactId: leadResult.contactId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('❌ API error:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}

/**
 * GET pour vérifier la santé de l'API (healthcheck)
 */
export async function GET() {
  const hasApiKey = !!process.env.BREVO_API_KEY;
  return NextResponse.json(
    {
      status: hasApiKey ? 'ready' : 'not_configured',
      message: hasApiKey
        ? 'API leads ready'
        : 'Missing BREVO_API_KEY',
    },
    { status: hasApiKey ? 200 : 503 }
  );
}
