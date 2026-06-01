'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ThemeToggle } from '../../../../components/theme-toggle';
import { TransparencyBanner } from '../../../../components/transparency-banner';
import { LeadForm } from '../../../../components/lead-form';
import { metiers } from '../../../../data/metiers';
import { logiciels } from '../../../../data/logiciels';
import {
  ArrowLeft, Users, CheckCircle, Star, ChevronRight, TrendingUp, Euro
} from 'lucide-react';

interface TaillePageClientProps {
  metierSlug: string;
  tailleSlug: string;
}

const TAILLE_LABELS: Record<string, string> = {
  'auto-entrepreneur': 'Auto-entrepreneur',
  'artisan-seul': 'Artisan seul (micro-entreprise)',
  'equipe-2-5': 'Équipe 2-5 personnes',
  'pme-5-15': 'PME 5-15 salariés',
};

const TAILLE_DATA: Record<string, {
  emoji: string;
  description: string;
  besoins: string[];
  budget: string;
  priorite: string;
  logicielsRecommandes: Record<string, string[]>;
}> = {
  'auto-entrepreneur': {
    emoji: '👤',
    description: "En tant qu'auto-entrepreneur, votre priorité est la simplicité : facturer vite, suivre vos paiements, et rester dans les clous avec l'administration. Pas besoin de fonctionnalités complexes.",
    besoins: [
      'Devis et factures rapides en 2 minutes',
      'Suivi des paiements et relances automatiques',
      'Déclarations CA simplifiées (URSSAF)',
      'Application mobile pour facturer sur chantier',
      'Tarif abordable (moins de 30€/mois)',
    ],
    budget: '0 – 30€/mois',
    priorite: 'Simplicité et rapidité avant tout',
    logicielsRecommandes: {
      plombier: ['tolteck', 'obat', 'axonaut'],
      electricien: ['tolteck', 'obat', 'axonaut'],
      macon: ['tolteck', 'obat', 'progbat'],
      couvreur: ['tolteck', 'obat', 'progbat'],
      menuisier: ['tolteck', 'obat', 'axonaut'],
      carreleur: ['tolteck', 'obat', 'axonaut'],
      peintre: ['tolteck', 'obat', 'axonaut'],
      chauffagiste: ['tolteck', 'obat', 'progbat'],
    },
  },
  'artisan-seul': {
    emoji: '🔧',
    description: "Artisan seul avec quelques salariés ou collaborateurs, vous avez besoin de gagner du temps sur l'administratif pour rester sur le terrain. Un bon logiciel vous évite 5h de paperasse par semaine.",
    besoins: [
      'Bibliothèque de prix métier intégrée',
      'Suivi de chantier et planning',
      'Gestion des sous-traitants',
      'Situations de travaux',
      'Rapports chantier photos',
    ],
    budget: '30 – 80€/mois',
    priorite: 'Gain de temps sur le terrain',
    logicielsRecommandes: {
      plombier: ['obat', 'progbat', 'tolteck'],
      electricien: ['obat', 'progbat', 'tolteck'],
      macon: ['obat', 'progbat', 'batigest'],
      couvreur: ['obat', 'progbat', 'batigest'],
      menuisier: ['obat', 'progbat', 'tolteck'],
      carreleur: ['obat', 'progbat', 'tolteck'],
      peintre: ['obat', 'progbat', 'tolteck'],
      chauffagiste: ['obat', 'progbat', 'batigest'],
    },
  },
  'equipe-2-5': {
    emoji: '👥',
    description: "Avec une équipe de 2 à 5 personnes, la coordination devient le défi principal. Qui est sur quel chantier ? Les achats sont-ils bien facturés ? Un logiciel collaboratif vous évite les erreurs et les doublons.",
    besoins: [
      'Multi-utilisateurs avec droits différenciés',
      'Planning des équipes et des chantiers',
      'Gestion des achats et fournisseurs',
      'Suivi de rentabilité par chantier',
      'Facturation en avancement (situations)',
    ],
    budget: '80 – 150€/mois',
    priorite: 'Coordination et rentabilité',
    logicielsRecommandes: {
      plombier: ['obat', 'batigest', 'axonaut'],
      electricien: ['obat', 'batigest', 'axonaut'],
      macon: ['obat', 'batigest', 'progbat'],
      couvreur: ['obat', 'batigest', 'progbat'],
      menuisier: ['obat', 'batigest', 'axonaut'],
      carreleur: ['obat', 'batigest', 'axonaut'],
      peintre: ['obat', 'batigest', 'axonaut'],
      chauffagiste: ['obat', 'batigest', 'progbat'],
    },
  },
  'pme-5-15': {
    emoji: '🏢',
    description: "Pour une PME de 5 à 15 salariés, la gestion devient un métier à part entière. Suivi comptable rigoureux, gestion RH basique, reporting de gestion — vous avez besoin d'un outil complet, pas d'une appli mobile.",
    besoins: [
      'Comptabilité analytique par chantier',
      'Gestion des congés et des heures',
      'Tableau de bord et reporting',
      'Connexion avec votre comptable (export)',
      'Gestion des appels d\'offres et marchés',
    ],
    budget: '150 – 400€/mois',
    priorite: 'Gestion complète et reporting',
    logicielsRecommandes: {
      plombier: ['batigest', 'ebp', 'axonaut'],
      electricien: ['batigest', 'ebp', 'axonaut'],
      macon: ['batigest', 'ebp', 'progbat'],
      couvreur: ['batigest', 'ebp', 'progbat'],
      menuisier: ['batigest', 'ebp', 'axonaut'],
      carreleur: ['batigest', 'ebp', 'axonaut'],
      peintre: ['batigest', 'ebp', 'axonaut'],
      chauffagiste: ['batigest', 'ebp', 'progbat'],
    },
  },
};

export function TaillePageClient({ metierSlug, tailleSlug }: TaillePageClientProps) {
  const metier = metiers.find(m => m.slug === metierSlug);
  const tailleInfo = TAILLE_DATA[tailleSlug];

  if (!metier || !tailleInfo) return null;

  const tailleLabel = TAILLE_LABELS[tailleSlug];
  const logicielsReco = tailleInfo.logicielsRecommandes[metierSlug] || [];
  const logicielsData = logicielsReco
    .map(slug => logiciels.find(l => l.slug === slug))
    .filter(Boolean);

  const autresTailles = Object.keys(TAILLE_LABELS).filter(t => t !== tailleSlug);

  return (
    <div className="min-h-screen bg-background">
      <TransparencyBanner />

      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href={`/${metierSlug}`} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Retour {metier.nom}</span>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-10">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{tailleInfo.emoji}</span>
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wide font-medium">
                {metier.nom} · {tailleLabel}
              </p>
              <h1 className="text-3xl font-bold heading-editorial mt-1">
                Quel logiciel pour un {metier.nom.toLowerCase()} {tailleLabel.toLowerCase()} ?
              </h1>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            {tailleInfo.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">

            {/* Besoins spécifiques */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="card-base"
            >
              <h2 className="text-xl font-bold mb-2">Vos besoins prioritaires</h2>
              <p className="text-sm text-muted-foreground mb-4">
                En tant que {tailleLabel.toLowerCase()}, ces fonctionnalités sont indispensables.
              </p>
              <ul className="space-y-3">
                {tailleInfo.besoins.map((besoin, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{besoin}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-accent/10 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Euro className="w-4 h-4 text-accent" />
                    <span className="text-xs font-semibold text-accent uppercase tracking-wide">Budget typique</span>
                  </div>
                  <p className="font-bold">{tailleInfo.budget}</p>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-4 h-4 text-blue-500" />
                    <span className="text-xs font-semibold text-blue-500 uppercase tracking-wide">Priorité</span>
                  </div>
                  <p className="font-bold text-sm">{tailleInfo.priorite}</p>
                </div>
              </div>
            </motion.section>

            {/* Logiciels recommandés */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-xl font-bold mb-4">
                Top 3 logiciels recommandés pour votre profil
              </h2>
              <div className="space-y-4">
                {logicielsData.map((logiciel, i) => {
                  if (!logiciel) return null;
                  return (
                    <div key={logiciel.slug} className="card-base flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center font-bold text-accent">
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-bold text-lg">{logiciel.nom}</h3>
                          {i === 0 && (
                            <span className="text-xs bg-accent text-background px-2 py-0.5 rounded-full font-medium">
                              Recommandé
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{logiciel.pitch}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {logiciel.pointsForts?.slice(0, 3).map((point, j) => (
                            <span key={j} className="text-xs bg-muted px-2 py-1 rounded-full">
                              {point.titre}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{logiciel.tarification?.formules?.[0]?.prix ?? '—'}</span>
                          <Link
                            href={`/logiciels/${logiciel.slug}`}
                            className="text-sm text-accent hover:underline flex items-center gap-1"
                          >
                            Voir le détail
                            <ChevronRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.section>

            {/* Capture lead */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="card-base bg-accent/5 border-accent/20"
            >
              <h2 className="text-lg font-bold mb-1">Recevez notre comparatif complet</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Conseils adaptés aux {tailleLabel.toLowerCase()} dans le BTP.
              </p>
              <LeadForm source="page_metier" metier={`${metierSlug}-${tailleSlug}`} />
            </motion.section>

          </div>

          {/* Sidebar */}
          <aside className="space-y-6">

            {/* Autres tailles */}
            <div className="card-base">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Users className="w-4 h-4 text-accent" />
                Autres tailles d'entreprise
              </h3>
              <div className="space-y-2">
                {autresTailles.map(t => (
                  <Link
                    key={t}
                    href={`/${metierSlug}/taille/${t}`}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-muted transition-colors text-sm"
                  >
                    <span>{TAILLE_LABELS[t]}</span>
                    <ChevronRight className="w-3 h-3 text-muted-foreground" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Retour métier */}
            <div className="card-base">
              <h3 className="font-semibold mb-3">Autres guides {metier.nom.toLowerCase()}</h3>
              <div className="space-y-2">
                <Link
                  href={`/${metierSlug}`}
                  className="flex items-center gap-2 text-sm text-accent hover:underline"
                >
                  <ChevronRight className="w-3 h-3" />
                  Guide général {metier.nom.toLowerCase()}
                </Link>
                <Link
                  href="/comparer"
                  className="flex items-center gap-2 text-sm text-accent hover:underline"
                >
                  <ChevronRight className="w-3 h-3" />
                  Comparer les logiciels
                </Link>
              </div>
            </div>

            {/* Top logiciels liens directs */}
            <div className="card-base">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Star className="w-4 h-4 text-accent" />
                Logiciels populaires
              </h3>
              <div className="space-y-2">
                {logicielsData.slice(0, 3).map(l => l && (
                  <Link
                    key={l.slug}
                    href={`/logiciels/${l.slug}`}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-muted transition-colors text-sm"
                  >
                    <span>{l.nom}</span>
                    <ChevronRight className="w-3 h-3 text-muted-foreground" />
                  </Link>
                ))}
              </div>
            </div>

          </aside>
        </div>

      </main>
    </div>
  );
}
