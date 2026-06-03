import { Metadata } from 'next';
import { comparaisons } from '../../data/comparaisons';
import { ComparerIndexClient } from './ComparerIndexClient';

const count = Object.keys(comparaisons).length;

export const metadata: Metadata = {
  title: 'Comparer les logiciels BTP côte à côte — Comparateur 2026',
  description: `Comparez les logiciels BTP en face à face : ${count} comparatifs détaillés (Obat, Axonaut, Tolteck, Batigest…) plus un outil pour créer votre propre comparaison sur mesure.`,
  keywords: ['comparer logiciel BTP', 'comparatif logiciel devis', 'obat vs axonaut', 'meilleur logiciel BTP comparaison'],
  alternates: { canonical: 'https://btp-compare.fr/comparer' },
  openGraph: {
    title: 'Comparer les logiciels BTP côte à côte',
    description: `${count} comparatifs détaillés + outil de comparaison sur mesure.`,
    url: 'https://btp-compare.fr/comparer',
    siteName: 'BTP-Compare',
    locale: 'fr_FR',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function ComparerIndexPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Comparatifs de logiciels BTP',
    numberOfItems: count,
    itemListElement: Object.entries(comparaisons).map(([slug, comp], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://btp-compare.fr/comparer/${slug}`,
      name: `${comp.nom1} vs ${comp.nom2}`,
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://btp-compare.fr' },
      { '@type': 'ListItem', position: 2, name: 'Comparer', item: 'https://btp-compare.fr/comparer' },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ComparerIndexClient />
    </>
  );
}
