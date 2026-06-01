import './globals.css'

export const metadata = {
  title: 'BTP Compare - Comparateur de logiciels pour artisans',
  description: 'Analyses indépendantes et comparatifs détaillés de logiciels BTP pour artisans du bâtiment.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="bg-gray-50">{children}</body>
    </html>
  )
}
