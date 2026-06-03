import { MetadataRoute } from 'next';
import { metiers } from '../data/metiers';
import { logiciels } from '../data/logiciels';
import { comparaisons } from '../data/comparaisons';
import { articles } from '../data/articles';

const BASE_URL = 'https://btp-compare.fr';

const TAILLES = ['auto-entrepreneur', 'artisan-seul', 'equipe-2-5', 'pme-5-15'];

const VILLES = ['paris', 'lyon', 'marseille', 'toulouse', 'bordeaux', 'nantes', 'lille', 'strasbourg', 'nice', 'rennes'];

const PROBLEMES_PAR_METIER: Record<string, string[]> = {
  plombier:      ['depannage-urgent', 'salle-de-bain', 'chauffage', 'tva-10-pourcent'],
  electricien:   ['nfc-15-100', 'domotique', 'bornes-irve', 'tableaux-electriques'],
  macon:         ['situations-travaux', 'compte-prorata', 'extensions', 'murs-porteurs'],
  couvreur:      ['toitures-complexes', 'zinguerie', 'decennale', 'calculs-surface'],
  menuisier:     ['sur-mesure', 'escaliers', 'fenetres', 'agencement'],
  carreleur:     ['carrelage-grand-format', 'devis-metrage', 'sous-traitance', 'salle-de-bain'],
  peintre:       ['devis-colorimetrie', 'multi-corps', 'ravalement', 'sous-traitants'],
  chauffagiste:  ['pac-chaudiere', 'maintenance-contrats', 'qualification-rge', 'subventions'],
  serrurier:     ['depannage-urgent', 'serrures-haute-securite', 'coffres-forts', 'controle-acces'],
  plaquiste:     ['cloisons', 'faux-plafonds', 'isolation', 'enduits'],
  vitrier:       ['vitrages-doubles', 'miroirs', 'urgences-casse', 'stores'],
  etancheur:     ['toitures-terrasses', 'fondations', 'parkings', 'diagnostics'],
  charpentier:   ['charpentes-traditionnelles', 'ossature-bois', 'renovation', 'calculs-structure'],
  zingueur:      ['gouttieres', 'descentes-ep', 'couvertines', 'zinguerie-ornementale'],
  terrassier:    ['vrd', 'fondations', 'assainissement', 'terrains-en-pente'],
  paysagiste:    ['jardins-creation', 'terrasses-exterieur', 'irrigation', 'contrats-entretien'],
  pisciniste:    ['construction-piscine', 'renovation-liner', 'equipements', 'maintenance'],
  alarmiste:     ['alarmes-intrusion', 'videoprotection', 'controle-acces', 'domotique'],
  ascensoriste:  ['installation', 'maintenance', 'modernisation', 'conformite-reglementaire'],
  facadier:      ['ravalement', 'isolation-exterieure', 'peinture-exterieure', 'nettoyage'],
};

export default function sitemap(): MetadataRoute.Sitemap {
  // Homepage + pages index
  const staticUrls: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/logiciels`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/comparer`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
  ];

  // Articles blog (5 articles)
  const articleUrls: MetadataRoute.Sitemap = articles.map(article => ({
    url: `${BASE_URL}/blog/${article.slug}`,
    lastModified: new Date(article.dateModification),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Pages métiers (20)
  const metierUrls: MetadataRoute.Sitemap = metiers.map((metier) => ({
    url: `${BASE_URL}/${metier.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // Pages problèmes (20 × 4 = 80)
  const problemeUrls: MetadataRoute.Sitemap = Object.entries(PROBLEMES_PAR_METIER).flatMap(
    ([metier, problemes]) =>
      problemes.map((probleme) => ({
        url: `${BASE_URL}/${metier}/${probleme}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      }))
  );

  // Pages taille entreprise (20 × 4 = 80)
  const tailleUrls: MetadataRoute.Sitemap = metiers.flatMap((metier) =>
    TAILLES.map((taille) => ({
      url: `${BASE_URL}/${metier.slug}/taille/${taille}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  );

  // Pages villes (20 métiers × 10 villes = 200)
  const villeUrls: MetadataRoute.Sitemap = metiers.flatMap((metier) =>
    VILLES.map((ville) => ({
      url: `${BASE_URL}/${metier.slug}/ville/${ville}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  );

  // Pages logiciels (17)
  const logicielUrls: MetadataRoute.Sitemap = logiciels.map((logiciel) => ({
    url: `${BASE_URL}/logiciels/${logiciel.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // Pages comparaisons 1v1 (21)
  const comparaisonUrls: MetadataRoute.Sitemap = Object.keys(comparaisons).map((slug) => ({
    url: `${BASE_URL}/comparer/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    ...staticUrls,
    ...articleUrls,
    ...metierUrls,
    ...problemeUrls,
    ...tailleUrls,
    ...villeUrls,
    ...logicielUrls,
    ...comparaisonUrls,
  ];
}
