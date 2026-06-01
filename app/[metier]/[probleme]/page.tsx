import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { metiers } from '../../../data/metiers';
import { ProblemPageClient } from './ProblemPageClient';

// Liste des problèmes par métier
const PROBLEMES_PAR_METIER = {
  plombier: ['depannage-urgent', 'salle-de-bain', 'chauffage', 'tva-10-pourcent'],
  electricien: ['nfc-15-100', 'domotique', 'bornes-irve', 'tableaux-electriques'],
  macon: ['situations-travaux', 'compte-prorata', 'extensions', 'murs-porteurs'],
  couvreur: ['toitures-complexes', 'zinguerie', 'decennale', 'calculs-surface'],
  menuisier: ['sur-mesure', 'escaliers', 'fenetres', 'agencement'],
  carreleur: ['motifs-complexes', 'preparation-supports', 'salles-de-bain', 'terrasses'],
  peintre: ['calculs-surface', 'preparation-murs', 'ravalement', 'decoration'],
  chauffagiste: ['pompes-chaleur', 'chaudieres', 'plancher-chauffant', 'rge'],
  serrurier: ['depannage-urgent', 'serrures-haute-securite', 'coffres-forts', 'controle-acces'],
  plaquiste: ['cloisons', 'faux-plafonds', 'isolation', 'enduits'],
  vitrier: ['vitrages-doubles', 'miroirs', 'urgences-casse', 'stores'],
  etancheur: ['toitures-terrasses', 'fondations', 'parkings', 'diagnostics'],
  charpentier: ['charpentes-traditionnelles', 'ossature-bois', 'renovation', 'calculs-structure'],
  zingueur: ['gouttières', 'descentes-ep', 'couvertines', 'zinguerie-ornementale'],
  terrassier: ['vrd', 'fondations', 'assainissement', 'terrains-en-pente'],
  paysagiste: ['jardins-creation', 'terrasses-exterieur', 'irrigation', 'contrats-entretien'],
  pisciniste: ['construction-piscine', 'renovation-liner', 'equipements', 'maintenance'],
  alarmiste: ['alarmes-intrusion', 'videoprotection', 'controle-acces', 'domotique'],
  ascensoriste: ['installation', 'maintenance', 'modernisation', 'conformite-reglementaire'],
  facadier: ['ravalement', 'isolation-exterieure', 'peinture-exterieure', 'nettoyage'],
};

export async function generateStaticParams() {
  const params = [];
  
  for (const [metier, problemes] of Object.entries(PROBLEMES_PAR_METIER)) {
    for (const probleme of problemes) {
      params.push({ metier, probleme });
    }
  }
  
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { metier: string; probleme: string };
}): Promise<Metadata> {
  const metier = metiers.find(m => m.slug === params.metier);
  if (!metier) return { title: 'Métier non trouvé' };
  
  const probleme = PROBLEMES_PAR_METIER[params.metier]?.find(p => p === params.probleme);
  if (!probleme) return { title: 'Problème non trouvé' };

  const problemeFormate = probleme.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return {
    title: `Quel logiciel pour ${problemeFormate} en ${metier.nom.toLowerCase()} ? — Guide 2026`,
    description: `Guide complet pour choisir un logiciel adapté aux ${problemeFormate.toLowerCase()} en ${metier.nom.toLowerCase()}. Comparatif basé sur documentation officielle et avis vérifiés.`,
    keywords: [
      `logiciel ${problemeFormate.toLowerCase()} ${metier.nom.toLowerCase()}`,
      `gestion ${problemeFormate.toLowerCase()} ${metier.nom.toLowerCase()}`,
      `meilleur logiciel ${metier.nom.toLowerCase()}`
    ],
  };
}

export default function ProblemPage({ params }: { params: { metier: string; probleme: string } }) {
  const metier = metiers.find(m => m.slug === params.metier);
  const probleme = PROBLEMES_PAR_METIER[params.metier]?.find(p => p === params.probleme);
  
  if (!metier || !probleme) {
    notFound();
  }

  return <ProblemPageClient metierSlug={params.metier} problemeSlug={params.probleme} />;
}
