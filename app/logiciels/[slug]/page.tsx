import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { logiciels } from '../../../data/logiciels';
import { LogicielPageClient } from './LogicielPageClient';

export async function generateStaticParams() {
  return logiciels.map((logiciel) => ({ slug: logiciel.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const logiciel = logiciels.find((l) => l.slug === params.slug);
  if (!logiciel) return { title: 'Logiciel non trouvé' };

  return {
    title: logiciel.seoTitle,
    description: logiciel.seoDescription,
    keywords: logiciel.seoKeywords.join(', '),
    authors: [{ name: 'BTP-Compare', url: 'https://btp-compare.fr' }],
    metadataBase: new URL('https://btp-compare.fr'),
    alternates: {
      canonical: `https://btp-compare.fr/logiciels/${logiciel.slug}`,
    },
    openGraph: {
      title: logiciel.seoTitle,
      description: logiciel.seoDescription,
      url: `https://btp-compare.fr/logiciels/${logiciel.slug}`,
      siteName: 'BTP-Compare',
      locale: 'fr_FR',
      type: 'article',
    },
    robots: { index: true, follow: true },
  };
}

export default function LogicielPage({ params }: { params: { slug: string } }) {
  const logiciel = logiciels.find((l) => l.slug === params.slug);
  if (!logiciel) notFound();

  const sourcePrincipale = logiciel.sources?.trustpilot || logiciel.sources?.g2;

  // ── Schema.org SoftwareApplication + AggregateRating ──────────────────────
  // Déclenche les étoiles dans les résultats Google (rich snippets)
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: logiciel.nom,
    description: logiciel.pitch,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    url: `https://btp-compare.fr/logiciels/${logiciel.slug}`,
    ...(sourcePrincipale && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: sourcePrincipale.note.replace(',', '.').split('/')[0].trim(),
        ratingCount: sourcePrincipale.nombreAvis?.replace(/[^\d]/g, '') || '10',
        bestRating: '5',
        worstRating: '1',
      },
    }),
  };

  // ── Schema.org BreadcrumbList ──────────────────────────────────────────────
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://btp-compare.fr' },
      { '@type': 'ListItem', position: 2, name: 'Logiciels BTP', item: 'https://btp-compare.fr/logiciels' },
      { '@type': 'ListItem', position: 3, name: `Avis ${logiciel.nom}`, item: `https://btp-compare.fr/logiciels/${logiciel.slug}` },
    ],
  };

  // ── Schema.org Review (avis BTP-Compare sur le logiciel) ──────────────────
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'SoftwareApplication',
      name: logiciel.nom,
      applicationCategory: 'BusinessApplication',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: sourcePrincipale
        ? sourcePrincipale.note.replace(',', '.').split('/')[0].trim()
        : '4',
      bestRating: '5',
      worstRating: '1',
    },
    author: { '@type': 'Organization', name: 'BTP-Compare', url: 'https://btp-compare.fr' },
    publisher: { '@type': 'Organization', name: 'BTP-Compare' },
    datePublished: '2026-01-15',
    dateModified: new Date().toISOString().split('T')[0],
    reviewBody: logiciel.pitch,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <LogicielPageClient logicielSlug={params.slug} />
    </>
  );
}
