import { MetadataRoute } from 'next';
import { metiers } from '../data/metiers';
import { logiciels } from '../data/logiciels';
import { comparaisons } from '../data/comparaisons';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://btp-compare.fr';

  const metierUrls: MetadataRoute.Sitemap = metiers.map((metier) => ({
    url: `${baseUrl}/${metier.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const logicielUrls: MetadataRoute.Sitemap = logiciels.map((logiciel) => ({
    url: `${baseUrl}/logiciels/${logiciel.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const comparaisonUrls: MetadataRoute.Sitemap = Object.keys(comparaisons).map((slug) => ({
    url: `${baseUrl}/comparer/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...metierUrls,
    ...logicielUrls,
    ...comparaisonUrls,
  ];
}
