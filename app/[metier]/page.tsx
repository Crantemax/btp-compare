import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { metiers } from '../../data/metiers';
import { MetierPageClient } from './MetierPageClient';

// ═══════════════════════════════════════════════════════
// SEO DYNAMIQUE + SCHEMA.ORG (côté serveur uniquement)
// ═══════════════════════════════════════════════════════
export async function generateMetadata({ 
  params 
}: { 
  params: { metier: string } 
}): Promise<Metadata> {
  const data = metiers.find(m => m.slug === params.metier);
  
  if (!data) {
    return { 
      title: 'Métier non trouvé — BTP-Compare',
      description: 'Cette page n\'existe pas.',
      robots: { index: false, follow: false },
    };
  }

  // Schema.org Article
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.seoTitle,
    description: data.seoDescription,
    image: data.image,
    author: {
      '@type': 'Organization',
      name: 'BTP-Compare',
      url: 'https://btp-compare.fr',
    },
    publisher: {
      '@type': 'Organization',
      name: 'BTP-Compare',
      logo: {
        '@type': 'ImageObject',
        url: 'https://btp-compare.fr/logo.png',
      },
    },
    datePublished: '2026-06-01',
    dateModified: new Date().toISOString().split('T')[0],
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://btp-compare.fr/${data.slug}`,
    },
  };

  // Schema.org FAQ (apparaît dans "People also ask" de Google)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqSchema.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  // Schema.org Review (étoiles dans Google)
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'SoftwareApplication',
      name: `Logiciels pour ${data.nomPluriel}`,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, iOS, Android',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '4.8',
      bestRating: '5',
      worstRating: '1',
    },
    author: {
      '@type': 'Organization',
      name: 'BTP-Compare',
    },
    reviewBody: data.intro,
    datePublished: new Date().toISOString().split('T')[0],
  };

  // Schema.org Breadcrumb
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://btp-compare.fr',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: `Logiciel ${data.nom}`,
        item: `https://btp-compare.fr/${data.slug}`,
      },
    ],
  };

  return {
    title: data.seoTitle,
    description: data.seoDescription,
    keywords: data.seoKeywords.join(', '),
    authors: [{ name: 'BTP-Compare', url: 'https://btp-compare.fr' }],
    creator: 'BTP-Compare',
    publisher: 'BTP-Compare',
    metadataBase: new URL('https://btp-compare.fr'),
    alternates: {
      canonical: `https://btp-compare.fr/${data.slug}`,
    },
    openGraph: {
      title: data.seoTitle,
      description: data.seoDescription,
      url: `https://btp-compare.fr/${data.slug}`,
      siteName: 'BTP-Compare',
      locale: 'fr_FR',
      type: 'article',
      images: [
        {
          url: data.image,
          width: 1200,
          height: 800,
          alt: `Comparatif logiciel ${data.nom} 2026`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.seoTitle,
      description: data.seoDescription,
      images: [data.image],
      creator: '@btpcompare',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      'script:ld+json': JSON.stringify([articleSchema, faqSchema, reviewSchema, breadcrumbSchema]),
    },
  };
}

// ═══════════════════════════════════════════════════════
// PAGE SERVER - Délègue le rendu au Client Component
// ═══════════════════════════════════════════════════════
export default function MetierPage({ params }: { params: { metier: string } }) {
  const data = metiers.find(m => m.slug === params.metier);
  
  if (!data) {
    notFound();
  }

  return <MetierPageClient metierSlug={params.metier} />;
}
