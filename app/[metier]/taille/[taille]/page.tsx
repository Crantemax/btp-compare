import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { metiers } from '../../../../data/metiers';
import { TaillePageClient } from './TaillePageClient';

const TAILLES = ['auto-entrepreneur', 'artisan-seul', 'equipe-2-5', 'pme-5-15'];

const METIERS_SLUGS = [
  'plombier', 'electricien', 'macon', 'couvreur',
  'menuisier', 'carreleur', 'peintre', 'chauffagiste'
];

const TAILLE_LABELS: Record<string, string> = {
  'auto-entrepreneur': 'auto-entrepreneur',
  'artisan-seul': 'artisan seul',
  'equipe-2-5': 'équipe 2-5 personnes',
  'pme-5-15': 'PME 5-15 salariés',
};

export async function generateStaticParams() {
  const params = [];
  for (const metier of METIERS_SLUGS) {
    for (const taille of TAILLES) {
      params.push({ metier, taille });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { metier: string; taille: string };
}): Promise<Metadata> {
  const metier = metiers.find(m => m.slug === params.metier);
  if (!metier || !TAILLES.includes(params.taille)) return { title: 'Page non trouvée' };

  const tailleLabel = TAILLE_LABELS[params.taille];

  return {
    title: `Meilleur logiciel ${metier.nom.toLowerCase()} ${tailleLabel} — Comparatif 2026`,
    description: `Quel logiciel choisir quand on est ${tailleLabel} dans le métier de ${metier.nom.toLowerCase()} ? Comparatif adapté à votre taille d'entreprise, tarifs et fonctionnalités essentielles.`,
    keywords: [
      `logiciel ${metier.nom.toLowerCase()} ${tailleLabel}`,
      `logiciel devis facture ${tailleLabel}`,
      `meilleur logiciel ${metier.nom.toLowerCase()}`,
    ],
  };
}

export default function TaillePage({
  params,
}: {
  params: { metier: string; taille: string };
}) {
  const metier = metiers.find(m => m.slug === params.metier);
  if (!metier || !TAILLES.includes(params.taille)) notFound();

  return <TaillePageClient metierSlug={params.metier} tailleSlug={params.taille} />;
}
