'use client';

import Script from 'next/script';

export function Analytics() {
  // Désactivé en développement
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <>
      {/* Plausible Analytics (respectueux RGPD) */}
      <Script
        defer
        data-domain="btp-compare.fr"
        data-api="https://plausible.io/api/event"
        src="https://plausible.io/js/script.outbound-links.pageview-props.js"
      />
      
      {/* Tracking des clics affiliés en custom events */}
      <Script id="plausible-events" strategy="afterInteractive">
        {`
          window.plausible = window.plausible || function() { 
            (window.plausible.q = window.plausible.q || []).push(arguments) 
          };
          
          // Track les clics sur les liens affiliés
          document.addEventListener('click', function(e) {
            const link = e.target.closest('a[href*="obat.com"], a[href*="axonaut.com"], a[href*="qonto.com"]');
            if (link) {
              const url = new URL(link.href);
              plausible('Affiliate Click', {
                props: {
                  partner: url.hostname,
                  path: window.location.pathname
                }
              });
            }
          });
        `}
      </Script>
    </>
  );
}
