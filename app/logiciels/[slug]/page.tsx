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

  // Schema.org SoftwareApplication
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: logiciel.nom,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    offers: {
      '@type': 'Offer',
      price: logiciel.tarification.formules[0].prix,
      priceCurrency: 'EUR',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: logiciel.avis.noteGlobale.split('/')[0],
      ratingCount: logiciel.avis.nombreAvis,
    },
  };

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
    robots: {
      index: true,
      follow: true,
    },
    other: {
      'script:ld+json': JSON.stringify(softwareSchema),
    },
  };
}

export default function LogicielPage({ params }: { params: { slug: string } }) {
  const logiciel = logiciels.find((l) => l.slug === params.slug);
  
  if (!logiciel) {
    notFound();
  }

  return <LogicielPageClient logicielSlug={params.slug} />;
}
