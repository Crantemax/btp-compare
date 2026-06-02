import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { comparaisons } from '../../../data/comparaisons';
import { logiciels } from '../../../data/logiciels';
import { ComparaisonPageClient } from './ComparaisonPageClient';
import { TripleComparaisonPageClient } from './TripleComparaisonPageClient';

// Génère tous les slugs 1v1 ET tous les slugs 1v1v1 possibles
export async function generateStaticParams() {
  const paires = Object.keys(comparaisons).map((slug) => ({ slugs: slug }));

  // 3-way : toutes les combinaisons des 7 logiciels historiques
  const LOGICIELS_COMP = ['obat', 'axonaut', 'tolteck', 'progbat', 'batigest', 'ebp', 'sellsy'];
  const triples: { slugs: string }[] = [];
  for (let i = 0; i < LOGICIELS_COMP.length; i++) {
    for (let j = i + 1; j < LOGICIELS_COMP.length; j++) {
      for (let k = j + 1; k < LOGICIELS_COMP.length; k++) {
        triples.push({ slugs: `${LOGICIELS_COMP[i]}-vs-${LOGICIELS_COMP[j]}-vs-${LOGICIELS_COMP[k]}` });
      }
    }
  }

  return [...paires, ...triples];
}

// Détecte si c'est un slug 3-way (2 occurrences de "-vs-")
function parseTriple(slug: string): [string, string, string] | null {
  const parts = slug.split('-vs-');
  if (parts.length === 3) return [parts[0], parts[1], parts[2]];
  return null;
}

export async function generateMetadata({
  params,
}: {
  params: { slugs: string };
}): Promise<Metadata> {
  const triple = parseTriple(params.slugs);

  if (triple) {
    const [s1, s2, s3] = triple;
    const l1 = logiciels.find(l => l.slug === s1);
    const l2 = logiciels.find(l => l.slug === s2);
    const l3 = logiciels.find(l => l.slug === s3);
    if (!l1 || !l2 || !l3) return { title: 'Comparaison non trouvée' };
    return {
      title: `${l1.nom} vs ${l2.nom} vs ${l3.nom} — Comparatif 3 logiciels BTP 2026`,
      description: `Comparatif complet ${l1.nom}, ${l2.nom} et ${l3.nom} : prix, fonctionnalités, avis. Quel logiciel BTP choisir pour votre métier ?`,
      alternates: { canonical: `https://btp-compare.fr/comparer/${params.slugs}` },
    };
  }

  const comparaison = comparaisons[params.slugs];
  if (!comparaison) return { title: 'Comparaison non trouvée' };

  // ── Schema.org Article ──────────────────────────────────────────────────────
  const comparisonSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: comparaison.seoTitle,
    description: comparaison.seoDescription,
    author: { '@type': 'Organization', name: 'BTP-Compare' },
    datePublished: '2026-01-15',
    dateModified: new Date().toISOString().split('T')[0],
  };

  return {
    title: comparaison.seoTitle,
    description: comparaison.seoDescription,
    keywords: comparaison.seoKeywords.join(', '),
    authors: [{ name: 'BTP-Compare', url: 'https://btp-compare.fr' }],
    metadataBase: new URL('https://btp-compare.fr'),
    alternates: { canonical: `https://btp-compare.fr/comparer/${params.slugs}` },
    openGraph: {
      title: comparaison.seoTitle,
      description: comparaison.seoDescription,
      url: `https://btp-compare.fr/comparer/${params.slugs}`,
      siteName: 'BTP-Compare',
      locale: 'fr_FR',
      type: 'article',
    },
    robots: { index: true, follow: true },
    other: { _schema: JSON.stringify(comparisonSchema) }, // stockage temporaire
  };
}

export default function ComparaisonPage({ params }: { params: { slugs: string } }) {
  const triple = parseTriple(params.slugs);

  if (triple) {
    const [s1, s2, s3] = triple;
    const l1 = logiciels.find(l => l.slug === s1);
    const l2 = logiciels.find(l => l.slug === s2);
    const l3 = logiciels.find(l => l.slug === s3);
    if (!l1 || !l2 || !l3) notFound();

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://btp-compare.fr' },
        { '@type': 'ListItem', position: 2, name: 'Comparer', item: 'https://btp-compare.fr/comparer' },
        { '@type': 'ListItem', position: 3, name: `${l1.nom} vs ${l2.nom} vs ${l3.nom}`, item: `https://btp-compare.fr/comparer/${params.slugs}` },
      ],
    };

    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <TripleComparaisonPageClient slugs={[s1, s2, s3]} />
      </>
    );
  }

  const comparaison = comparaisons[params.slugs];
  if (!comparaison) notFound();

  const comparisonSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: comparaison.seoTitle,
    description: comparaison.seoDescription,
    author: { '@type': 'Organization', name: 'BTP-Compare', url: 'https://btp-compare.fr' },
    publisher: { '@type': 'Organization', name: 'BTP-Compare' },
    datePublished: '2026-01-15',
    dateModified: new Date().toISOString().split('T')[0],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://btp-compare.fr' },
      { '@type': 'ListItem', position: 2, name: 'Comparer', item: 'https://btp-compare.fr/comparer' },
      { '@type': 'ListItem', position: 3, name: `${comparaison.nom1} vs ${comparaison.nom2}`, item: `https://btp-compare.fr/comparer/${params.slugs}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ComparaisonPageClient comparaisonSlug={params.slugs} />
    </>
  );
}
