import './globals.css';
import { ThemeProvider } from './theme-provider';

export const metadata = {
  title: 'BTP Compare — Le comparateur indépendant des logiciels pour artisans du bâtiment',
  description: 'Analyses indépendantes, comparatifs interactifs et recommandations personnalisées. Plus de 500 avis testés pour trouver le logiciel de devis parfait pour votre métier.',
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🏗️</text></svg>',
        type: 'image/svg+xml',
      },
    ],
    shortcut: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🏗️</text></svg>',
    apple: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🏗️</text></svg>',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#09090b" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
      </head>
      <body className="antialiased">
        <ThemeProvider defaultTheme="system" storageKey="btp-compare-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
