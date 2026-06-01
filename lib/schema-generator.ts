// lib/schema-generator.ts
// Générateur de schema.org pour SEO (Product, Review, FAQ)

import { Logiciel } from '../data/logiciels';

export interface ProductSchema {
  '@context': 'https://schema.org';
  '@type': 'Product';
  name: string;
  description: string;
  image: string;
  url: string;
  offers: {
    '@type': 'Offer';
    price: string;
    priceCurrency: 'EUR';
    availability: 'https://schema.org/InStock';
    url?: string;
  };
  aggregateRating?: {
    '@type': 'AggregateRating';
    ratingValue: string;
    ratingCount: string;
    bestRating: '5';
    worstRating: '1';
  };
  review?: ReviewSchema[];
}

export interface ReviewSchema {
  '@type': 'Review';
  author: {
    '@type': 'Person';
    name: string;
  };
  reviewBody: string;
  reviewRating: {
    '@type': 'Rating';
    ratingValue: number;
    bestRating?: '5';
    worstRating?: '1';
  };
  datePublished: string;
}

export interface FAQSchema {
  '@context': 'https://schema.org';
  '@type': 'FAQPage';
  mainEntity: FAQItem[];
}

export interface FAQItem {
  '@type': 'Question';
  name: string;
  acceptedAnswer: {
    '@type': 'Answer';
    text: string;
  };
}

export interface ComparisonSchema {
  '@context': 'https://schema.org';
  '@type': 'ComparisonChart';
  name: string;
  description: string;
  itemReviewed: string[];
  comparesProduct?: string[];
  author: {
    '@type': 'Organization';
    name: 'BTP-Compare';
  };
}

/**
 * Génère un schema Product pour un logiciel
 */
export function generateProductSchema(
  logiciel: Logiciel,
  baseUrl: string = 'https://btp-compare.fr'
): ProductSchema {
  const url = `${baseUrl}/logiciels/${logiciel.slug}`;
  const firstPrice = logiciel.tarification.formules[0];
  const priceMatch = firstPrice.prix.match(/\d+/);
  const price = priceMatch?.[0] || '39';

  // Récupère les notes d'avis
  const trustpilotNote = logiciel.sources.trustpilot?.note;
  const trustpilotCount = logiciel.sources.trustpilot?.nombreAvis;

  const ratingValue = trustpilotNote?.split('/')[0] || '4.5';
  const ratingCount = trustpilotCount || '100';

  const schema: ProductSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: logiciel.nom,
    description: logiciel.seoDescription,
    image: `${baseUrl}/api/og?slug=${logiciel.slug}`,
    url,
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url,
    },
  };

  // Ajoute rating s'il existe
  if (trustpilotNote) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue,
      ratingCount,
      bestRating: '5',
      worstRating: '1',
    };
  }

  // Ajoute avis (max 5 pour limiter la taille du schema)
  if (logiciel.avisVerifies.length > 0) {
    schema.review = logiciel.avisVerifies.slice(0, 5).map((avis) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: avis.auteur || 'Utilisateur vérifié',
      },
      reviewBody: avis.texte,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: avis.note,
        bestRating: '5',
        worstRating: '1',
      },
      datePublished: avis.date,
    }));
  }

  return schema;
}

/**
 * Génère un schema FAQ pour les questions fréquentes
 */
export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
): FAQSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Génère un schema pour une page de comparaison
 */
export function generateComparisonSchema(
  logiciel1: string,
  logiciel2: string,
  baseUrl: string = 'https://btp-compare.fr'
): ComparisonSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'ComparisonChart',
    name: `${logiciel1} vs ${logiciel2}`,
    description: `Comparaison détaillée entre ${logiciel1} et ${logiciel2}`,
    itemReviewed: [logiciel1, logiciel2],
    comparesProduct: [logiciel1, logiciel2],
    author: {
      '@type': 'Organization',
      name: 'BTP-Compare',
    },
  };
}

/**
 * Génère un schema Organization pour la homepage
 */
export function generateOrganizationSchema(
  baseUrl: string = 'https://btp-compare.fr'
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BTP-Compare',
    description:
      'Comparateur indépendant de logiciels pour artisans du bâtiment',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    sameAs: [
      'https://twitter.com/btpcompare',
      'https://linkedin.com/company/btp-compare',
    ],
    contact: {
      '@type': 'ContactPoint',
      url: baseUrl,
      contactType: 'Customer Support',
      availableLanguage: 'fr',
    },
  };
}

/**
 * Génère un schema BreadcrumbList pour la navigation
 */
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Génère un schema Article pour les pages de contenu/blog
 */
export function generateArticleSchema(
  title: string,
  description: string,
  datePublished: string,
  author: string = 'BTP-Compare',
  url: string = 'https://btp-compare.fr'
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    author: {
      '@type': 'Person',
      name: author,
    },
    datePublished,
    dateModified: new Date().toISOString().split('T')[0],
    url,
  };
}
