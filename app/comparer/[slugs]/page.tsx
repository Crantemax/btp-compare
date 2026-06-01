import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { comparaisons } from '../../../data/comparaisons';
import { ComparaisonPageClient } from './ComparaisonPageClient';

export async function generateStaticParams() {
  return Object.keys(comparaisons).map((slug) => ({ slugs: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slugs: string };
}): Promise<Metadata> {
  const comparaison = comparaisons[params.slugs];
  if (!comparaison) return { title: 'Comparaison non trouvée' };

  // Schema.org pour rich snippets
  const comparisonSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: comparaison.seoTitle,
    description: comparaison.seoDescription,
    author: {
      '@type': 'Organization',
      name: 'BTP-Compare',
    },
    datePublished: '2026-01-15',
    dateModified: new Date().toISOString().split('T')[0],
  };

  return {
    title: comparaison.seoTitle,
    description: comparaison.seoDescription,
    keywords: comparaison.seoKeywords.join(', '),
    authors: [{ name: 'BTP-Compare', url: 'https://btp-compare.fr' }],
    metadataBase: new URL('https://btp-compare.fr'),
    alternates: {
      canonical: `https://btp-compare.fr/comparer/${params.slugs}`,
    },
    openGraph: {
      title: comparaison.seoTitle,
      description: comparaison.seoDescription,
      url: `https://btp-compare.fr/comparer/${params.slugs}`,
      siteName: 'BTP-Compare',
      locale: 'fr_FR',
      type: 'article',
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      'script:ld+json': JSON.stringify(comparisonSchema),
    },
  };
}

export default function ComparaisonPage({ params }: { params: { slugs: string } }) {
  const comparaison = comparaisons[params.slugs];
  
  if (!comparaison) {
    notFound();
  }

  return <ComparaisonPageClient comparaisonSlug={params.slugs} />;
}
