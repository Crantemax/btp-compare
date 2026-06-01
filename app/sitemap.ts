import { MetadataRoute } from 'next';
import { metiers } from '../data/metiers';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://btp-compare.fr';

  const metierUrls: MetadataRoute.Sitemap = metiers.map((metier) => ({
    url: `${baseUrl}/${metier.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...metierUrls,
  ];
}
