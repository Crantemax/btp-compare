import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'BTP-Compare — Comparateur indépendant de logiciels BTP';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f0f12 0%, #1a1410 100%)',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 40 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: '#e0701c',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: 44,
              fontWeight: 700,
            }}
          >
            B
          </div>
          <div style={{ color: 'white', fontSize: 40, fontWeight: 600 }}>BTP-Compare</div>
        </div>

        {/* Titre */}
        <div style={{ color: 'white', fontSize: 64, fontWeight: 700, lineHeight: 1.1, maxWidth: 900 }}>
          Le comparateur indépendant
          <br />
          des logiciels{' '}
          <span style={{ color: '#e0701c' }}>BTP</span>
        </div>

        {/* Sous-titre */}
        <div style={{ color: '#a0a0a8', fontSize: 30, marginTop: 32, maxWidth: 850 }}>
          17 logiciels · 20 métiers · Analyses sourcées et vérifiables
        </div>

        {/* Pied */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginTop: 'auto',
            color: '#71717a',
            fontSize: 24,
          }}
        >
          btp-compare.fr
        </div>
      </div>
    ),
    { ...size }
  );
}
