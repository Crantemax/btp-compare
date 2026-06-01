'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ThemeToggle } from '../../../components/theme-toggle';
import { TransparencyBanner } from '../../../components/transparency-banner';
import { metiers } from '../../../data/metiers';
import { logiciels } from '../../../data/logiciels';
import { 
  ArrowLeft, Target, Check, X, Star, 
  ChevronRight, AlertCircle
} from 'lucide-react';

interface ProblemPageClientProps {
  metierSlug: string;
  problemeSlug: string;
}

// Données des problèmes par métier
const PROBLEMES_DATA: Record<string, Record<string, {
  titre: string;
  description: string;
  criteres: string[];
  logicielsRecommandes: string[];
}>> = {
  plombier: {
    'depannage-urgent': {
      titre: 'Dépannage urgent',
      description: 'Les plombiers qui font du dépannage urgent ont besoin de faire des devis rapidement, souvent directement chez le client, avec une bibliothèque de prix à jour pour justifier les tarifs des matériaux.',
      criteres: [
        'App mobile rapide et intuitive',
        'Bibliothèque de prix matériaux (cuivre, PER, raccords)',
        'Signature électronique sur place',
        'Modèles de devis pré-remplis pour interventions fréquentes'
      ],
      logicielsRecommandes: ['obat', 'tolteck', 'ebp']
    },
    'salle-de-bain': {
      titre: 'Rénovation salle de bain',
      description: 'Les chantiers de rénovation de salle de bain nécessitent des devis détaillés avec de nombreux postes (plomberie, carrelage, électricité) et une gestion des acomptes pour les chantiers de plusieurs semaines.',
      criteres: [
        'Devis détaillés avec plusieurs postes',
        'Gestion des acomptes et situations de travaux',
        'Bibliothèque de prix complète',
        'Suivi de chantier basique'
      ],
      logicielsRecommandes: ['obat', 'progbat', 'tolteck']
    },
    'chauffage': {
      titre: 'Installation chauffage',
      description: 'Les installations de chauffage (chaudières, radiateurs) nécessitent des devis techniques avec dimensionnement et gestion de la TVA 5,5% pour les équipements éligibles.',
      criteres: [
        'Bibliothèque de prix équipements chauffage',
        'Gestion de la TVA 5,5%',
        'Mentions RGE sur devis',
        'Devis techniques détaillés'
      ],
      logicielsRecommandes: ['obat', 'progbat', 'axonaut']
    },
    'tva-10-pourcent': {
      titre: 'Gestion TVA 10%',
      description: 'La rénovation dans les logements de plus de 2 ans bénéficie de la TVA réduite à 10%. Le logiciel doit gérer automatiquement ce taux et générer les attestations obligatoires.',
      criteres: [
        'Application automatique TVA 10%',
        'Génération attestations clients',
        'Archivage automatique des attestations',
        'Conformité fiscale garantie'
      ],
      logicielsRecommandes: ['obat', 'axonaut', 'ebp']
    }
  },
  electricien: {
    'nfc-15-100': {
      titre: 'Norme NFC 15-100',
      description: 'La norme NFC 15-100 impose des obligations précises pour les installations électriques. Un logiciel avec bibliothèque NFC 15-100 intégrée évite les oublis coûteux et les refus du Consuel.',
      criteres: [
        'Bibliothèque NFC 15-100 pré-configurée',
        'Ouvrages conformes à la norme',
        'Mentions de conformité sur devis',
        'Mise à jour régulière de la bibliothèque'
      ],
      logicielsRecommandes: ['batigest', 'progbat', 'ebp']
    },
    'domotique': {
      titre: 'Domotique et smart home',
      description: 'Les installations domotiques (KNX, Zigbee, scénarios) nécessitent un chiffrage spécifique avec temps de programmation et équipements spécialisés.',
      criteres: [
        'Ouvrages domotique personnalisables',
        'Gestion du temps de programmation',
        'Bibliothèque équipements domotique',
        'Devis techniques détaillés'
      ],
      logicielsRecommandes: ['axonaut', 'progbat', 'batigest']
    },
    'bornes-irve': {
      titre: 'Bornes de recharge IRVE',
      description: 'L\'installation de bornes de recharge pour véhicules électriques nécessite des mentions légales spécifiques et un chiffrage détaillé (câble, protection, qualification IRVE).',
      criteres: [
        'Ouvrages IRVE personnalisables',
        'Mentions légales obligatoires',
        'Chiffrage détaillé (câble, protection)',
        'Gestion qualification IRVE'
      ],
      logicielsRecommandes: ['progbat', 'axonaut', 'batigest']
    },
    'tableaux-electriques': {
      titre: 'Tableaux électriques complexes',
      description: 'Les tableaux électriques se décomposent en dizaines de lignes (différentiels, disjoncteurs, câbles). Le logiciel doit permettre des ouvrages à plusieurs niveaux sans perdre la lisibilité.',
      criteres: [
        'Ouvrages complexes avec sous-détails',
        'Hiérarchisation des lignes',
        'Lisibilité du devis maintenue',
        'Bibliothèque composants électriques'
      ],
      logicielsRecommandes: ['batigest', 'progbat', 'ebp']
    }
  },
  macon: {
    'situations-travaux': {
      titre: 'Situations de travaux',
      description: 'Les chantiers de maçonnerie se facturent à l\'avancement avec des situations mensuelles. Le logiciel doit générer automatiquement ces situations et déduire les acomptes déjà versés.',
      criteres: [
        'Génération automatique situations mensuelles',
        'Déduction automatique des acomptes',
        'Envoi par email au client',
        'Archivage et historique complet'
      ],
      logicielsRecommandes: ['obat', 'progbat', 'tolteck']
    },
    'compte-prorata': {
      titre: 'Compte prorata',
      description: 'Sur les chantiers en copropriété ou avec plusieurs corps d\'état, le compte prorata répartit les frais communs (eau, électricité, nettoyage) au prorata du montant de chaque marché.',
      criteres: [
        'Gestion native du compte prorata',
        'Répartition automatique des frais',
        'Suivi des dépenses communes',
        'Édition des décomptes prorata'
      ],
      logicielsRecommandes: ['progbat', 'batigest', 'ebp']
    },
    'extensions': {
      titre: 'Extensions de maison',
      description: 'Les extensions nécessitent des devis détaillés avec terrassement, fondations, maçonnerie, charpente. Chaque poste doit être métré précisément avec une bibliothèque de prix bâtiment.',
      criteres: [
        'Bibliothèque de prix gros œuvre',
        'Devis multi-postes détaillés',
        'Métrés précis (parpaings, béton)',
        'Suivi de chantier sur plusieurs mois'
      ],
      logicielsRecommandes: ['progbat', 'tolteck', 'obat']
    },
    'murs-porteurs': {
      titre: 'Ouverture murs porteurs',
      description: 'Les ouvertures de murs porteurs nécessitent des devis techniques avec IPN, étais, et mentions spécifiques. Le chiffrage doit être précis pour éviter les surprises.',
      criteres: [
        'Ouvrages techniques personnalisables',
        'Bibliothèque IPN et matériaux',
        'Mentions techniques sur devis',
        'Chiffrage précis au millimètre'
      ],
      logicielsRecommandes: ['progbat', 'batigest', 'obat']
    }
  }
};

export function ProblemPageClient({ metierSlug, problemeSlug }: ProblemPageClientProps) {
  const metier = metiers.find(m => m.slug === metierSlug);
  const problemeData = PROBLEMES_DATA[metierSlug]?.[problemeSlug];
  
  if (!metier || !problemeData) {
    return (
      <div className="min-h-screen flex items-center justify-center gradient-subtle">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Page non trouvée</h1>
          <Link href="/" className="text-primary hover:underline">Retour à l'accueil</Link>
        </div>
      </div>
    );
  }

  const logicielsRecommandes = problemeData.logicielsRecommandes
    .map(slug => logiciels.find(l => l.slug === slug))
    .filter(Boolean);

  return (
    <div className="min-h-screen gradient-subtle">
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 w-full z-50 glass-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center text-background text-sm font-bold group-hover:scale-105 transition-transform">B</div>
              <div className="text-lg font-semibold text-foreground tracking-tight">BTP-Compare</div>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href={`/${metierSlug}`} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
                {metier.nom}
              </Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* HERO */}
      <div className="relative pt-32 pb-16 gradient-mesh">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <div className="inline-flex items-center space-x-2 glass-subtle px-4 py-2 rounded-full mb-6">
              <Target className="w-4 h-4 text-foreground" />
              <span className="text-sm font-medium text-foreground">Problème spécifique • {metier.nom}</span>
            </div>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            Quel logiciel pour
            <br />
            <span className="text-muted-foreground">{problemeData.titre} ?</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            {problemeData.description}
          </motion.p>
        </div>
      </div>

      <TransparencyBanner />

      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        
        {/* CRITÈRES IMPORTANTS */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">
            Critères importants pour {problemeData.titre.toLowerCase()}
          </h2>
          
          <div className="bg-card rounded-xl border border-border p-6">
            <ul className="space-y-3">
              {problemeData.criteres.map((critere, i) => (
                <li key={i} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{critere}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* LOGICIELS RECOMMANDÉS */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">
            Logiciels recommandés
          </h2>
          
          <div className="space-y-6">
            {logicielsRecommandes.map((logiciel, i) => (
              <motion.div
                key={logiciel.slug}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl border-2 border-border p-6 hover-lift"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-4xl">{logiciel.logo}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{logiciel.nom}</h3>
                      <p className="text-sm text-muted-foreground">{logiciel.idealPour}</p>
                    </div>
                  </div>
                  {i === 0 && (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      RECOMMANDÉ
                    </span>
                  )}
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {logiciel.pitch}
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 text-sm">Points forts</h4>
                    <ul className="space-y-1">
                      {logiciel.pointsForts.slice(0, 3).map((point, j) => (
                        <li key={j} className="flex items-start text-xs">
                          <Check className="w-3.5 h-3.5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{point.titre}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 text-sm">Points faibles</h4>
                    <ul className="space-y-1">
                      {logiciel.pointsFaibles.slice(0, 2).map((point, j) => (
                        <li key={j} className="flex items-start text-xs">
                          <X className="w-3.5 h-3.5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{point.titre}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    <strong className="text-foreground">{logiciel.tarification.formules[0]?.prix}</strong>
                  </div>
                  <Link
                    href={`/logiciels/${logiciel.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground text-background font-medium hover:opacity-90 transition-smooth text-sm"
                  >
                    Voir l'analyse complète
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* NOTE DE TRANSPARENCE */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="bg-accent rounded-xl p-6 border-l-4 border-primary">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Note de transparence :</strong> Ces recommandations sont basées sur la documentation officielle des logiciels et les avis vérifiés d'utilisateurs. 
                Nous vous recommandons de tester les essais gratuits proposés par chaque éditeur pour vérifier que le logiciel correspond bien à vos besoins spécifiques.
              </div>
            </div>
          </div>
        </motion.section>

        {/* RETOUR */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center">
          <Link href={`/${metierSlug}`} className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-smooth">
            <ArrowLeft className="w-4 h-4" />
            Retour à l'analyse {metier.nom}
          </Link>
        </motion.div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border mt-16 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="text-sm text-muted-foreground">© 2026 BTP-Compare.fr — Tous droits réservés</div>
        </div>
      </footer>
    </div>
  );
}
