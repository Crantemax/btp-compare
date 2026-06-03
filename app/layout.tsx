import './globals.css';
import { Instrument_Serif, DM_Sans } from 'next/font/google';
import { ThemeProvider } from './theme-provider';
import { Analytics } from '../components/analytics';
import { ExitIntent } from '../components/exit-intent';
import { Analytics as VercelAnalytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-instrument-serif',
});

const dmSans = DM_Sans({
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
});

export const metadata = {
  metadataBase: new URL('https://btp-compare.fr'),
  title: {
    default: 'BTP-Compare — Comparateur indépendant de logiciels pour artisans du bâtiment',
    template: '%s | BTP-Compare',
  },
  description: 'Analyses indépendantes et comparatifs interactifs de logiciels BTP pour artisans. Plus de 1 500 avis testés pour trouver le logiciel de devis parfait pour votre métier.',
  keywords: [
    'comparateur logiciel BTP',
    'logiciel devis artisan',
    'logiciel facturation bâtiment',
    'meilleur logiciel BTP 2026',
    'obat avis',
    'axonaut avis',
    'logiciel plombier',
    'logiciel électricien',
    'logiciel maçon',
  ],
  authors: [{ name: 'BTP-Compare', url: 'https://btp-compare.fr' }],
  creator: 'BTP-Compare',
  publisher: 'BTP-Compare',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🏗️</text></svg>',
    shortcut: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🏗️</text></svg>',
    apple: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🏗️</text></svg>',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://btp-compare.fr',
    siteName: 'BTP-Compare',
    title: 'BTP-Compare — Comparateur indépendant de logiciels BTP',
    description: 'Analyses indépendantes et comparatifs interactifs. Plus de 1 500 avis testés.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BTP-Compare — Comparateur indépendant de logiciels BTP',
    description: 'Analyses indépendantes et comparatifs interactifs. Plus de 1 500 avis testés.',
    creator: '@btpcompare',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'à-remplir-avec-google-search-console',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning className={`${instrumentSerif.variable} ${dmSans.variable}`}>
      <head>
        <meta name="theme-color" content="#09090b" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="impact-site-verification" content="b605a696-fd11-4171-b856-17d60e6dd3fb" />
      </head>
      <body className="antialiased">
        <ThemeProvider defaultTheme="system" storageKey="btp-compare-theme">
          <Analytics />
          <VercelAnalytics />
          <SpeedInsights />
          {children}
          <ExitIntent source="page_metier" />
          {/* Mention légale affilié — obligatoire ARPP, une seule fois */}
          <div className="border-t border-border/40 py-3 text-center">
            <p className="text-xs text-muted-foreground/60 max-w-2xl mx-auto px-4">
              Ce site contient des liens affiliés. Si vous souscrivez à un logiciel via nos liens, nous percevons une commission sans surcoût pour vous.{' '}
              Nos analyses restent indépendantes — nous publions systématiquement les points faibles.
            </p>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
