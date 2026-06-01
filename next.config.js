/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // ═══════════════════════════════════════════════════════
  // SÉCURITÉ - Headers HTTP (OWASP Top 10 compliance)
  // ═══════════════════════════════════════════════════════
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Protection XSS
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          // Empêche le MIME type sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Empêche l'embedding dans iframes (anti-clickjacking)
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          // Contrôle du Referer (privacy)
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Force HTTPS (1 an)
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          // Permissions navigateur (désactive features non utilisées)
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          // Cross-Origin policies
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'same-origin',
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'credentialless',
          },
          // Content Security Policy (CSP) - Anti-XSS avancé
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://plausible.io https://*.vercel-insights.com https://va.vercel-scripts.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: https: blob:",
              "font-src 'self' https://fonts.gstatic.com data:",
              "connect-src 'self' https://plausible.io https://*.vercel-insights.com https://vitals.vercel-insights.com https://*.ingest.sentry.io",
              "frame-src 'none'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self' https://axonaut.com https://obat.com https://qonto.com https://shine.fr",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests",
            ].join('; '),
          },
        ],
      },
      // Cache statique agressif pour les assets
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache pour les images
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000',
          },
        ],
      },
    ];
  },

  // ═══════════════════════════════════════════════════════
  // PERFORMANCE - Image optimization
  // ═══════════════════════════════════════════════════════
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  // ═══════════════════════════════════════════════════════
  // SEO - Redirections propres
  // ═══════════════════════════════════════════════════════
  async redirects() {
    return [
      // Force www vers non-www (ou inverse, au choix)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.btp-compare.fr' }],
        destination: 'https://btp-compare.fr/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
