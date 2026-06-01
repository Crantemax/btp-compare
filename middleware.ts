import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Rate limiting basique (anti-bot)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();

export function middleware(request: NextRequest) {
  const ip = request.ip ?? '127.0.0.1';
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const maxRequests = 60; // 60 requêtes/minute max

  // Nettoyage des anciennes entrées
  for (const [key, value] of rateLimitMap.entries()) {
    if (now - value.timestamp > windowMs) {
      rateLimitMap.delete(key);
    }
  }

  // Vérification rate limit
  const current = rateLimitMap.get(ip) ?? { count: 0, timestamp: now };
  if (now - current.timestamp > windowMs) {
    current.count = 0;
    current.timestamp = now;
  }
  current.count++;
  rateLimitMap.set(ip, current);

  if (current.count > maxRequests) {
    return new NextResponse('Too Many Requests', {
      status: 429,
      headers: {
        'Retry-After': '60',
        'Content-Type': 'text/plain',
      },
    });
  }

  // Protection contre les user-agents suspects
  const userAgent = request.headers.get('user-agent') || '';
  const suspiciousAgents = ['sqlmap', 'nikto', 'nmap', 'masscan', 'zgrab'];
  if (suspiciousAgents.some(agent => userAgent.toLowerCase().includes(agent))) {
    return new NextResponse('Forbidden', { status: 403 });
  }

  // Bloquer les requêtes avec payloads suspects
  const url = request.nextUrl.href.toLowerCase();
  const suspiciousPatterns = ['../', 'select%20', 'union%20select', '<script', 'eval(', 'base64'];
  if (suspiciousPatterns.some(pattern => url.includes(pattern))) {
    return new NextResponse('Bad Request', { status: 400 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match tous les chemins sauf :
     * - _next/static (fichiers statiques)
     * - _next/image (optimisation images)
     * - favicon.ico
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
