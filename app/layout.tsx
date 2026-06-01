export const metadata = {
  title: 'BTP Compare - Quel logiciel de devis pour votre métier ?',
  description: 'Comparateur indépendant de logiciels BTP pour artisans. Avis testés et vérifiés.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
