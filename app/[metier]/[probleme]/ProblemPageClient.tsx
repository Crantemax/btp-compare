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
      criteres: ['Génération automatique situations mensuelles', 'Déduction automatique des acomptes', 'Envoi par email au client', 'Archivage et historique complet'],
      logicielsRecommandes: ['obat', 'progbat', 'tolteck']
    },
    'compte-prorata': {
      titre: 'Compte prorata',
      description: 'Sur les chantiers en copropriété ou avec plusieurs corps d\'état, le compte prorata répartit les frais communs (eau, électricité, nettoyage) au prorata du montant de chaque marché.',
      criteres: ['Gestion native du compte prorata', 'Répartition automatique des frais', 'Suivi des dépenses communes', 'Édition des décomptes prorata'],
      logicielsRecommandes: ['progbat', 'batigest', 'ebp']
    },
    'extensions': {
      titre: 'Extensions de maison',
      description: 'Les extensions nécessitent des devis détaillés avec terrassement, fondations, maçonnerie, charpente. Chaque poste doit être métré précisément avec une bibliothèque de prix bâtiment.',
      criteres: ['Bibliothèque de prix gros œuvre', 'Devis multi-postes détaillés', 'Métrés précis (parpaings, béton)', 'Suivi de chantier sur plusieurs mois'],
      logicielsRecommandes: ['progbat', 'tolteck', 'obat']
    },
    'murs-porteurs': {
      titre: 'Ouverture murs porteurs',
      description: 'Les ouvertures de murs porteurs nécessitent des devis techniques avec IPN, étais, et mentions spécifiques. Le chiffrage doit être précis pour éviter les surprises.',
      criteres: ['Ouvrages techniques personnalisables', 'Bibliothèque IPN et matériaux', 'Mentions techniques sur devis', 'Chiffrage précis au millimètre'],
      logicielsRecommandes: ['progbat', 'batigest', 'obat']
    }
  },
  couvreur: {
    'toitures-complexes': {
      titre: 'Toitures complexes',
      description: 'Les toitures à plusieurs pans, mansardes ou avec lucarnes nécessitent un chiffrage précis avec calcul de surface, quantités de tuiles et matériaux d\'étanchéité.',
      criteres: ['Calcul de surface automatique', 'Bibliothèque matériaux toiture (tuiles, ardoises, zinc)', 'Devis détaillés par pan de toit', 'Gestion des sous-traitants (zinguerie)'],
      logicielsRecommandes: ['obat', 'progbat', 'tolteck']
    },
    'zinguerie': {
      titre: 'Zinguerie et évacuations',
      description: 'La zinguerie (gouttières, chéneaux, noues, solins) nécessite un chiffrage au mètre linéaire avec bibliothèque de prix zinc, cuivre et acier galvanisé.',
      criteres: ['Bibliothèque prix zinc et cuivre (ml)', 'Ouvrages zinguerie personnalisables', 'Gestion des accessoires (crochets, joints)', 'Devis techniques avec métrés'],
      logicielsRecommandes: ['obat', 'ebp', 'progbat']
    },
    'decennale': {
      titre: 'Gestion garantie décennale',
      description: 'Les couvreurs sont soumis à la garantie décennale. Le logiciel doit intégrer les mentions légales obligatoires sur les devis et permettre le suivi des chantiers couverts.',
      criteres: ['Mentions décennale automatiques sur devis', 'Archivage des contrats et attestations', 'Suivi chantiers sous garantie', 'Rappels d\'échéances'],
      logicielsRecommandes: ['axonaut', 'progbat', 'obat']
    },
    'calculs-surface': {
      titre: 'Calculs de surface',
      description: 'Le métrés d\'une toiture (surface projetée vs inclinée) est complexe. Un logiciel avec calcul automatique de surface évite les erreurs et accélère la préparation des devis.',
      criteres: ['Calcul surface inclinée automatique', 'Gestion des pentes et coefficients', 'Bibliothèque par m²', 'Plans et croquis attachés au devis'],
      logicielsRecommandes: ['progbat', 'tolteck', 'obat']
    }
  },
  menuisier: {
    'sur-mesure': {
      titre: 'Menuiseries sur-mesure',
      description: 'Les menuiseries sur-mesure (cuisines, dressings, bibliothèques) nécessitent un chiffrage à la pièce avec dimensions précises et options multiples (essence de bois, finitions).',
      criteres: ['Devis configurable par dimensions', 'Bibliothèque essences et finitions', 'Gestion des variantes (couleur, poignée)', 'Suivi fabrication et pose'],
      logicielsRecommandes: ['axonaut', 'obat', 'tolteck']
    },
    'escaliers': {
      titre: 'Fabrication d\'escaliers',
      description: 'Les escaliers sur-mesure (droits, tournants, hélicoïdaux) impliquent un chiffrage précis marche par marche avec choix des matériaux et des finitions.',
      criteres: ['Ouvrages escaliers personnalisables', 'Bibliothèque bois et acier', 'Plans techniques attachés', 'Suivi fabrication atelier'],
      logicielsRecommandes: ['progbat', 'axonaut', 'obat']
    },
    'fenetres': {
      titre: 'Pose de fenêtres et portes',
      description: 'La pose de fenêtres (PVC, aluminium, bois) bénéficie souvent de la TVA réduite à 5,5% ou 10% selon le logement. Le logiciel doit gérer ces taux et les attestations.',
      criteres: ['Gestion TVA 5,5% et 10%', 'Bibliothèque fenêtres et portes', 'Attestations clients intégrées', 'Devis avec références fabricants'],
      logicielsRecommandes: ['obat', 'ebp', 'axonaut']
    },
    'agencement': {
      titre: 'Agencement et aménagement',
      description: 'Les chantiers d\'agencement (locaux commerciaux, bureaux) impliquent coordination entre corps de métier, situations de travaux et suivi de chantier précis.',
      criteres: ['Situations de travaux', 'Coordination sous-traitants', 'Planning de chantier', 'Suivi de chantier avec photos'],
      logicielsRecommandes: ['tolteck', 'progbat', 'axonaut']
    }
  },
  carreleur: {
    'motifs-complexes': {
      titre: 'Pose motifs complexes',
      description: 'Les motifs géométriques, mosaïques et carrelages décalés nécessitent un chiffrage précis avec calcul des pertes et référencement de chaque référence de carrelage.',
      criteres: ['Calcul surfaces et pertes automatique', 'Référencement par gamme de carrelage', 'Gestion des coupes et chutes', 'Devis détaillé par zone'],
      logicielsRecommandes: ['obat', 'progbat', 'ebp']
    },
    'preparation-supports': {
      titre: 'Préparation des supports',
      description: 'La préparation (ragréage, étanchéité, primaires) peut représenter 30 à 40% du coût total. Ces postes doivent être intégrés dans les devis pour éviter les litiges.',
      criteres: ['Ouvrages préparation personnalisables', 'Bibliothèque produits de ragréage', 'Postes étanchéité intégrés', 'Mentions techniques sur devis'],
      logicielsRecommandes: ['obat', 'tolteck', 'axonaut']
    },
    'salles-de-bain': {
      titre: 'Rénovation salles de bain',
      description: 'La rénovation complète d\'une salle de bain (dépose, étanchéité, carrelage, faïence) nécessite un devis multi-postes avec coordination entre plombier et carreleur.',
      criteres: ['Devis multi-corps d\'état', 'Bibliothèque faïence et carrelage', 'Coordination sous-traitants', 'Suivi chantier avec photos'],
      logicielsRecommandes: ['tolteck', 'obat', 'progbat']
    },
    'terrasses': {
      titre: 'Terrasses et extérieurs',
      description: 'Les terrasses extérieures (dallage, carrelage, béton désactivé) nécessitent un chiffrage au m² avec gestion des joints, du gel et des produits de traitement.',
      criteres: ['Bibliothèque carrelage extérieur', 'Calcul surfaces avec dégagement', 'Produits de traitement et joints', 'Mentions garantie décennale'],
      logicielsRecommandes: ['obat', 'progbat', 'ebp']
    }
  },
  peintre: {
    'calculs-surface': {
      titre: 'Calcul des surfaces',
      description: 'Le calcul des surfaces à peindre (murs, plafonds, déduction ouvertures) est chronophage. Un logiciel avec calcul automatique de surface évite les erreurs et accélère les devis.',
      criteres: ['Calcul surface automatique (longueur × hauteur)', 'Déduction portes et fenêtres', 'Gestion des couches (2 couches, 3 couches)', 'Bibliothèque peintures par m²'],
      logicielsRecommandes: ['obat', 'axonaut', 'ebp']
    },
    'preparation-murs': {
      titre: 'Préparation des supports',
      description: 'La préparation (rebouchage, ponçage, primaire, enduit) peut doubler le temps de chantier. Ces postes doivent être clairement chiffrés pour éviter les suppléments lors des travaux.',
      criteres: ['Postes préparation détaillés', 'Bibliothèque enduits et primaires', 'Gestion des degrés de finition (R1, R2, R3)', 'Devis avec photos avant/après'],
      logicielsRecommandes: ['obat', 'tolteck', 'progbat']
    },
    'ravalement': {
      titre: 'Ravalement de façade',
      description: 'Le ravalement (nettoyage, rebouchage, enduit, peinture) bénéficie souvent de la TVA à 10% pour les logements. Le chiffrage au m² de façade doit inclure l\'échafaudage.',
      criteres: ['Bibliothèque ravalement au m²', 'Gestion TVA 10% façades', 'Poste échafaudage intégré', 'Attestations TVA réduite'],
      logicielsRecommandes: ['obat', 'ebp', 'axonaut']
    },
    'decoration': {
      titre: 'Peinture décoration',
      description: 'La peinture décorative (effets, lasures, béton ciré) nécessite un chiffrage au produit avec gestion des références et quantités précises par teinte.',
      criteres: ['Gestion des références couleurs', 'Bibliothèque produits décoratifs', 'Devis avec nuancier référencé', 'Suivi commandes matériaux'],
      logicielsRecommandes: ['axonaut', 'obat', 'sellsy']
    }
  },
  chauffagiste: {
    'pompes-chaleur': {
      titre: 'Pompes à chaleur',
      description: 'Les PAC (air/air, air/eau, géothermique) bénéficient de la TVA à 5,5% et de nombreuses aides (MaPrimeRénov, CEE). Le logiciel doit gérer ces taux et faciliter le montage des dossiers.',
      criteres: ['Gestion TVA 5,5% PAC', 'Bibliothèque équipements PAC', 'Calcul aides MaPrimeRénov', 'Mentions RGE obligatoires'],
      logicielsRecommandes: ['obat', 'progbat', 'axonaut']
    },
    'chaudieres': {
      titre: 'Chaudières et remplacement',
      description: 'Le remplacement de chaudière (gaz, fioul, biomasse) bénéficie d\'aides sous conditions. Le chiffrage doit inclure dépose, fourniture, pose et mise en service.',
      criteres: ['Bibliothèque chaudières (gaz, PAC, biomasse)', 'Poste dépose et évacuation', 'Gestion des aides énergétiques', 'Mise en service et garanties'],
      logicielsRecommandes: ['obat', 'ebp', 'progbat']
    },
    'plancher-chauffant': {
      titre: 'Plancher chauffant',
      description: 'Le plancher chauffant (eau, électrique) nécessite un calcul de puissance précis et un chiffrage au m² avec gestion des zones et du régulateur.',
      criteres: ['Calcul puissance par m²', 'Bibliothèque composants plancher chauffant', 'Gestion des zones et régulateurs', 'Devis technique avec plans'],
      logicielsRecommandes: ['progbat', 'obat', 'tolteck']
    },
    'rge': {
      titre: 'Certification RGE',
      description: 'La qualification RGE est obligatoire pour que les clients bénéficient des aides énergétiques. Les devis doivent comporter les mentions RGE, le numéro de qualification et les informations sur les aides.',
      criteres: ['Mentions RGE automatiques sur devis', 'Numéro de qualification intégré', 'Information aides sur devis (MaPrimeRénov, CEE)', 'Archivage des attestations'],
      logicielsRecommandes: ['obat', 'axonaut', 'ebp']
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
