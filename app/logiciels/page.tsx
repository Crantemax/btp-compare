import { Metadata } from 'next';
import { logiciels } from '../../data/logiciels';
import { LogicielsIndexClient } from './LogicielsIndexClient';

export const metadata: Metadata = {
  title: 'Tous les logiciels BTP comparés en 2026 — Comparateur indépendant',
  description: `Comparatif indépendant de ${logiciels.length} logiciels de devis, facturation et gestion BTP. Prix réels, points forts, points faibles et avis vérifiés pour artisans du bâtiment.`,
  keywords: ['logiciel BTP', 'comparateur logiciel BTP', 'logiciel devis bâtiment', 'logiciel facturation artisan', 'meilleur logiciel BTP 2026'],
  alternates: { canonical: 'https://btp-compare.fr/logiciels' },
  openGraph: {
    title: 'Tous les logiciels BTP comparés en 2026',
    description: `Comparatif indépendant de ${logiciels.length} logiciels BTP. Prix, avis et analyses sans filtre.`,
    url: 'https://btp-compare.fr/logiciels',
    siteName: 'BTP-Compare',
    locale: 'fr_FR',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function LogicielsIndexPage() {
  // ── Schema.org ItemList (liste des logiciels) ──────────────────────────────
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Logiciels BTP comparés par BTP-Compare',
    numberOfItems: logiciels.length,
    itemListElement: logiciels.map((l, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://btp-compare.fr/logiciels/${l.slug}`,
      name: l.nom,
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://btp-compare.fr' },
      { '@type': 'ListItem', position: 2, name: 'Logiciels BTP', item: 'https://btp-compare.fr/logiciels' },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <LogicielsIndexClient />
    </>
  );
}
