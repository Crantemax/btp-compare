import './globals.css';
import { ThemeProvider } from './theme-provider';

export const metadata = {
  title: 'BTP Compare - Comparateur Premium de Logiciels BTP',
  description: 'Analyses indépendantes, comparatifs interactifs et recommandations personnalisées pour les artisans du bâtiment.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider defaultTheme="system" storageKey="btp-compare-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
