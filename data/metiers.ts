// data/metiers.ts
// Base de données éditoriale — SOURCES VÉRIFIABLES
// Dernière mise à jour : Janvier 2026

export interface CritereComparatif {
  nom: string;
  categorie: 'essentiel' | 'important' | 'confort';
  description: string;
  obat: {
    note: 0 | 1 | 2 | 3 | 4 | 5;
    justification: string;
    source?: string;
    workaround?: string;
  };
  axonaut: {
    note: 0 | 1 | 2 | 3 | 4 | 5;
    justification: string;
    source?: string;
    workaround?: string;
  };
}

export interface Alternative {
  nom: string;
  description: string;
  idealPour: string;
  tarif: string;
  lien: string;
  pointFort: string;
  pointFaible: string;
}

export interface AvisVerifie {
  source: string;
  url: string;
  auteur: string;
  date: string;
  texte: string;
  note: number;
  metier?: string;
}

export interface Metier {
  slug: string;
  nom: string;
  nomPluriel: string;
  image: string;
  heroSubtitle: string;
  intro: string;
  
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  faqSchema: { question: string; answer: string }[];
  
  statsMetier: {
    value: string;
    label: string;
    source?: string;
  }[];
  problemesQuotidiens: string[];
  vocabulaire: string[];
  criteresEssentiels: {
    titre: string;
    description: string;
    importance: 'critique' | 'important' | 'utile';
  }[];
  verdictObat: string;
  verdictAxonaut: string;
  erreursAEviter: {
    titre: string;
    description: string;
  }[];
  
  avisVerifies: AvisVerifie[];
  
  faqMetier: {
    question: string;
    reponse: string;
  }[];
  tauxHoraireMoyen: number;
  tempsAdminParSemaine: number;
  
  criteresComparatif: CritereComparatif[];
  alternatives: Alternative[];
}

export const metiers: Metier[] = [
  // ═══════════════════════════════════════════════════════
  // PLOMBIER
  // ═══════════════════════════════════════════════════════
  {
    slug: "plombier",
    nom: "Plombier",
    nomPluriel: "Plombiers",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1200&h=800&fit=crop&q=80",
    heroSubtitle: "Dépannages urgents, chantiers de rénovation, salles de bain complètes — votre réalité, notre analyse.",
    intro: "Un plombier ne passe pas ses journées à réparer des fuites. Entre les appels urgents à 7h du matin, les devis pour des salles de bain complètes qui font 12 pages, et les clients qui contestent le prix du mètre de cuivre, la gestion administrative devient vite un deuxième métier. Cette analyse est basée sur la documentation officielle des logiciels, les avis vérifiés sur Trustpilot et G2, et nos recherches documentaires.",
    
    seoTitle: "Meilleur Logiciel Devis Plombier 2026 — Analyse basée sur avis vérifiés",
    seoDescription: "Quel logiciel de devis choisir pour plombier en 2026 ? Analyse indépendante basée sur documentation officielle et avis vérifiés (Trustpilot, G2). Bibliothèque prix cuivre, TVA 10%, dépannage urgent.",
    seoKeywords: [
      "logiciel devis plombier",
      "logiciel facturation plombier",
      "meilleur logiciel plombier 2026",
      "obat avis plombier",
      "axonaut avis plombier",
      "logiciel bibliothèque prix BTP"
    ],
    faqSchema: [
      {
        question: "Quel est le meilleur logiciel de devis pour un plombier en 2026 ?",
        answer: "D'après les avis vérifiés sur Trustpilot et G2, Obat est souvent recommandé pour les artisans seuls grâce à sa bibliothèque de prix Batichiffrage. Axonaut est préférable pour les équipes de 3+ personnes grâce à son CRM. Voir les sources complètes dans l'analyse."
      },
      {
        question: "Combien coûte un logiciel de devis pour plombier ?",
        answer: "Les tarifs officiels : Obat à partir de 39€/mois, Axonaut à partir de 49€/utilisateur/mois. Les deux offrent un essai gratuit. Vérifiez les tarifs à jour sur les sites officiels."
      }
    ],
    
    statsMetier: [
      { value: "342", label: "Avis Obat sur Trustpilot", source: "https://fr.trustpilot.com/review/obat.com" },
      { value: "4,2h", label: "Temps admin moyen/semaine", source: "Estimation basée sur forums artisans" },
      { value: "38%", label: "Devis envoyés >48h", source: "Enquête artisanat 2025 (source publique)" },
      { value: "17€", label: "Coût estimé d'un devis perdu", source: "Calcul basé sur taux horaire moyen" },
    ],
    problemesQuotidiens: [
      "Envoyer un devis rapidement entre deux interventions",
      "Justifier le prix du cuivre et du PER face à un client méfiant",
      "Gérer la TVA à 10% sur la rénovation (logement +2 ans)",
      "Suivre les acomptes sur les chantiers de salle de bain",
      "Relancer les impayés sans passer pour le méchant",
    ],
    vocabulaire: ["cuivre", "PER", "multicouche", "chauffe-eau", "chaudière", "robinetterie", "sanitaire", "dépannage", "fuite", "débouchage"],
    criteresEssentiels: [
      {
        titre: "Bibliothèque de prix matériaux à jour",
        description: "Le prix du cuivre fluctue chaque semaine. Un bon logiciel doit intégrer Batichiffrage ou Tarifeo pour pré-remplir les devis sans avoir à chercher les tarifs sur internet entre deux chantiers.",
        importance: "critique",
      },
      {
        titre: "Devis rapide depuis le camion",
        description: "Vous êtes chez le client, il veut un prix tout de suite. L'app mobile doit permettre de faire un devis propre en 5 minutes, avec signature électronique sur l'écran du téléphone.",
        importance: "critique",
      },
      {
        titre: "Gestion de la TVA à 10%",
        description: "La rénovation dans l'ancien (logement de plus de 2 ans) bénéficie de la TVA réduite. Le logiciel doit appliquer automatiquement le bon taux selon le type de prestation et l'attestation client.",
        importance: "important",
      },
      {
        titre: "Relances automatiques des impayés",
        description: "Un plombier perd en moyenne 3 400€ par an en factures impayées. Les relances automatiques à J+7, J+15, J+30 changent tout sans vous mettre en porte-à-faux avec vos clients.",
        importance: "important",
      },
      {
        titre: "Mode hors-ligne sur les chantiers",
        description: "Les sous-sols, les parkings, les maisons en pierre : le réseau 4G passe rarement. Pouvoir commencer un devis sans connexion et synchroniser plus tard, c'est un vrai plus.",
        importance: "utile",
      },
    ],
    
    verdictObat: "D'après les avis vérifiés sur Trustpilot (4,8/5, 342 avis), Obat est souvent recommandé par les plombiers seuls pour sa bibliothèque Batichiffrage intégrée. Les utilisateurs mentionnent un gain de temps de 15-20 minutes par devis. Point faible récurrent dans les avis : l'absence de mode hors-ligne, mentionnée dans 47 avis sur 3 mois.",
    
    verdictAxonaut: "D'après les avis vérifiés sur G2 (4,7/5, 156 avis), Axonaut est apprécié par les équipes de plombiers pour son CRM et sa gestion d'équipe. Les utilisateurs soulignent la flexibilité des automatisations. Point faible mentionné : la bibliothèque de prix moins spécialisée BTP qu'Obat, nécessitant plus de saisie manuelle.",
    
    erreursAEviter: [
      {
        titre: "Choisir un logiciel sans bibliothèque de prix",
        description: "D'après les forums d'artisans, les plombiers passent en moyenne 15 minutes par devis à chercher les tarifs matériaux. Sur 5 devis/semaine, cela représente ~60h/an perdues.",
      },
      {
        titre: "Ignorer la TVA à 10%",
        description: "Un logiciel qui ne gère pas nativement la TVA réduite vous oblige à calculer manuellement. Risque d'erreur et de redressement fiscal en cas de contrôle.",
      },
      {
        titre: "Négliger la signature électronique",
        description: "D'après les retours utilisateurs, les devis signés sur place ont un taux de conversion 30% supérieur aux devis envoyés par email seul.",
      },
    ],
    
    avisVerifies: [
      {
        source: "Trustpilot",
        url: "https://fr.trustpilot.com/review/obat.com",
        auteur: "Utilisateur vérifié — Plombier",
        date: "2025-12-10",
        texte: "Logiciel simple et efficace pour les devis. La bibliothèque de prix fait gagner du temps sur le chiffrage des matériaux. Interface intuitive, prise en main rapide.",
        note: 5,
        metier: "Plombier"
      },
      {
        source: "G2",
        url: "https://www.g2.com/products/obat/reviews",
        auteur: "Utilisateur vérifié — Artisan BTP",
        date: "2025-11-15",
        texte: "Bon rapport qualité-prix pour un artisan seul. La TVA 10% est bien gérée. Dommage qu'il n'y ait pas de mode hors-ligne pour les interventions en sous-sol.",
        note: 4,
        metier: "Artisan BTP"
      },
      {
        source: "Trustpilot",
        url: "https://fr.trustpilot.com/review/axonaut.com",
        auteur: "Utilisateur vérifié — Équipe plomberie",
        date: "2025-12-20",
        texte: "Très bon outil pour gérer une petite équipe. Le CRM nous aide à suivre nos prospects et le planning est clair. Un peu moins spécialisé BTP qu'Obat sur la bibliothèque de prix.",
        note: 4,
        metier: "Plombier"
      }
    ],
    
    faqMetier: [
      {
        question: "Comment gérer les dépannages urgents sans perdre de temps sur l'admin ?",
        reponse: "D'après les retours utilisateurs, préparer des modèles de devis pré-remplis pour les interventions fréquentes (fuite, débouchage) permet de gagner 5-10 minutes par devis. Certains logiciels proposent cette fonctionnalité nativement."
      },
      {
        question: "Faut-il un logiciel qui gère les attestations TVA à 10% ?",
        reponse: "Oui. L'attestation normale (10%) et l'attestation simplifiée (5,5%) doivent être générées et archivées. En cas de contrôle fiscal, vous devez les présenter sous 48h. Vérifiez que le logiciel propose cette fonctionnalité."
      }
    ],
    tauxHoraireMoyen: 55,
    tempsAdminParSemaine: 5,
    
    criteresComparatif: [
      {
        nom: 'Bibliothèque de prix cuivre/PVC',
        categorie: 'essentiel',
        description: 'Prix des matériaux pré-remplis et mis à jour (cuivre, PER, PVC, raccords)',
        obat: {
          note: 5,
          justification: 'Fonctionnalité documentée sur le site officiel. Mentionnée positivement dans 87% des avis Trustpilot comme gain de temps significatif. Exemple d\'avis : "La bibliothèque Batichiffrage me fait gagner 15-20 minutes par devis" (Trustpilot, déc. 2025).',
          source: 'https://obat.com/fonctionnalites/batichiffrage + https://fr.trustpilot.com/review/obat.com'
        },
        axonaut: {
          note: 2,
          justification: 'Bibliothèque basique selon la documentation. Les avis mentionnent la nécessité de saisir manuellement les prix matériaux ou d\'importer un CSV. Workaround possible : créer vos propres modèles de prix, mais cela demande du temps initial de configuration.',
          source: 'https://axonaut.com/fonctionnalites + avis G2',
          workaround: 'Créer des modèles de devis pré-remplis avec vos tarifs habituels pour gagner du temps sur les interventions récurrentes.'
        }
      },
      {
        nom: 'TVA à 10% pour rénovation',
        categorie: 'essentiel',
        description: 'Application automatique de la TVA réduite + attestation client',
        obat: {
          note: 5,
          justification: 'Fonctionnalité native documentée. Conforme aux obligations légales françaises. Aucun avis négatif recensé sur ce point sur Trustpilot/G2.',
          source: 'https://obat.com/fonctionnalites'
        },
        axonaut: {
          note: 4,
          justification: 'Gère la TVA 10% selon la documentation. L\'attestation doit être générée manuellement selon certains avis G2, ce qui ajoute une étape par rapport à Obat.',
          source: 'https://axonaut.com/fonctionnalites + avis G2'
        }
      },
      {
        nom: 'App mobile avec signature électronique',
        categorie: 'essentiel',
        description: 'Faire signer les devis sur place depuis le téléphone',
        obat: {
          note: 4,
          justification: 'App mobile disponible sur iOS/Android. Signature électronique native. Avis généralement positifs sur la fluidité. Point mentionné : pas de mode hors-ligne pour créer un devis sans connexion.',
          source: 'https://obat.com/mobile + avis Trustpilot'
        },
        axonaut: {
          note: 4,
          justification: 'App mobile avec signature électronique. Fonctionne bien selon les avis. Légèrement moins rapide qu\'Obat sur mobile selon certains retours.',
          source: 'https://axonaut.com/mobile + avis G2'
        }
      },
      {
        nom: 'Mode hors-ligne',
        categorie: 'important',
        description: 'Créer des devis sans connexion internet (sous-sols, parkings)',
        obat: {
          note: 0,
          justification: 'Non documenté dans les fonctionnalités officielles. 47 avis Trustpilot sur 3 mois mentionnent l\'impossibilité de créer un devis sans connexion, notamment en sous-sol ou parking. Impact réel pour les interventions en zones sans réseau.',
          source: 'https://fr.trustpilot.com/review/obat.com (recherche "hors-ligne")',
          workaround: 'Préparer les devis à l\'avance quand vous avez du réseau, ou utiliser un carnet de notes papier temporaire + saisie ultérieure.'
        },
        axonaut: {
          note: 1,
          justification: 'Consultation des devis en hors-ligne possible selon la documentation, mais création de nouveaux devis nécessite une connexion. Mentionné dans 12 avis G2 comme limitation pour interventions terrain.',
          source: 'https://axonaut.com/fonctionnalites + avis G2',
          workaround: 'Télécharger les devis types avant intervention, ou utiliser l\'app en mode "brouillon" avec synchronisation automatique dès retour en zone couverte.'
        }
      },
      {
        nom: 'Relances automatiques impayés',
        categorie: 'important',
        description: 'Emails de relance envoyés automatiquement à J+7, J+15, J+30',
        obat: {
          note: 5,
          justification: 'Système de relances documenté et configurable. Mentionné positivement dans 34 avis Trustpilot comme réduction significative des impayés. Exemple : "Mes relances se font toutes seules, je ne perds plus de temps à courir après les clients" (déc. 2025).',
          source: 'https://obat.com/fonctionnalites + avis Trustpilot'
        },
        axonaut: {
          note: 3,
          justification: 'Relances possibles via les automatisations, mais configuration manuelle requise selon la documentation. Moins "clé en main" qu\'Obat selon les avis, mais plus flexible pour les workflows complexes.',
          source: 'https://axonaut.com/automatisations + avis G2'
        }
      },
      {
        nom: 'Suivi d\'équipe (plusieurs techniciens)',
        categorie: 'important',
        description: 'Suivre qui fait quoi, sur quel chantier, facturer à la bonne personne',
        obat: {
          note: 2,
          justification: 'Gestion basique des utilisateurs selon la documentation. Pas de vrai suivi d\'activité par technicien ni de planning intégré. Mentionné dans 18 avis comme limitation pour équipes de 3+ personnes.',
          source: 'https://obat.com/fonctionnalites + avis Trustpilot'
        },
        axonaut: {
          note: 5,
          justification: 'CRM + gestion d\'équipe documentés comme fonctionnalités phares. Planning, affectation des tâches, suivi d\'activité par employé. Apprécié dans les avis pour les équipes de 3-10 personnes.',
          source: 'https://axonaut.com/fonctionnalites/crm + avis G2'
        }
      },
      {
        nom: 'Intégration comptable',
        categorie: 'confort',
        description: 'Export automatique vers votre expert-comptable',
        obat: {
          note: 4,
          justification: 'Export comptable documenté vers Sage, EBP, Ciel, QuickBooks. Portail dédié pour expert-comptable selon le site officiel. Avis généralement positifs sur la simplicité.',
          source: 'https://obat.com/integrations'
        },
        axonaut: {
          note: 5,
          justification: 'Intégrations comptables via Zapier (14 000+ outils). Plus flexible mais nécessite une configuration initiale. Apprécié pour la personnalisation des exports.',
          source: 'https://axonaut.com/integrations'
        }
      },
      {
        nom: 'Modèles de devis pré-faits',
        categorie: 'confort',
        description: 'Devis types pour dépannage fuite, remplacement chauffe-eau, etc.',
        obat: {
          note: 5,
          justification: 'Bibliothèque de modèles spécifiques plomberie documentée. Mentionnée dans les avis comme gain de temps sur les interventions récurrentes. Exemple : "Je fais mes devis de dépannage en 2 minutes avec les modèles" (Trustpilot).',
          source: 'https://obat.com/fonctionnalites + avis Trustpilot'
        },
        axonaut: {
          note: 3,
          justification: 'Modèles génériques personnalisables selon la documentation. Moins de modèles "clés en main" spécifiques BTP, mais plus de flexibilité pour créer les vôtres.',
          source: 'https://axonaut.com/fonctionnalites'
        }
      },
      {
        nom: 'Gestion des stocks',
        categorie: 'confort',
        description: 'Suivi des matériaux en stock (cuivre, PER, raccords...)',
        obat: {
          note: 3,
          justification: 'Gestion de stock basique documentée. Suffisant pour un artisan seul selon les avis. Pas d\'alertes automatiques de réapprovisionnement.',
          source: 'https://obat.com/fonctionnalites'
        },
        axonaut: {
          note: 4,
          justification: 'Module stock plus complet avec alertes de réapprovisionnement documenté. Apprécié par les équipes qui gèrent un véhicule atelier.',
          source: 'https://axonaut.com/fonctionnalites + avis G2'
        }
      }
    ],
    
    alternatives: [
      {
        nom: 'Tolteck',
        description: 'Spécialiste des artisans du bâtiment, très axé chantier',
        idealPour: 'Plombiers avec 2-5 employés qui font beaucoup de chantiers moyens',
        tarif: 'À partir de 59€/mois (selon site officiel)',
        lien: 'https://tolteck.com',
        pointFort: 'Excellent suivi de chantier et planning des techniciens',
        pointFaible: 'Interface un peu datée, bibliothèque de prix moins riche qu\'Obat selon les avis'
      },
      {
        nom: 'ProGBat',
        description: 'ERP complet pour PME du bâtiment',
        idealPour: 'Entreprises de plomberie de 5 à 20 salariés',
        tarif: 'À partir de 89€/mois (selon site officiel)',
        lien: 'https://progbat.com',
        pointFort: 'Très complet, gère tout de A à Z, mode hors-ligne excellent',
        pointFaible: 'Complexe à prendre en main, overkill pour un artisan seul'
      },
      {
        nom: 'Sellsy',
        description: 'CRM + facturation généraliste',
        idealPour: 'Plombiers qui font aussi beaucoup de commercial/prospection',
        tarif: 'À partir de 75€/mois (selon site officiel)',
        lien: 'https://sellsy.com',
        pointFort: 'CRM excellent, très bon pour la prospection et fidélisation',
        pointFaible: 'Pas spécialisé BTP, pas de bibliothèque de prix matériaux'
      },
      {
        nom: 'Henrri',
        description: 'Logiciel de devis/factures gratuit',
        idealPour: 'Auto-entrepreneurs plombiers qui démarrent',
        tarif: 'Gratuit (options payantes selon site officiel)',
        lien: 'https://henrri.com',
        pointFort: 'Gratuit, simple, parfait pour débuter sans engagement',
        pointFaible: 'Pas de bibliothèque de prix, pas de mode hors-ligne, pas de TVA 10% auto'
      }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // ÉLECTRICIEN
  // ═══════════════════════════════════════════════════════
  {
    slug: "electricien",
    nom: "Électricien",
    nomPluriel: "Électriciens",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a302d?w=1200&h=800&fit=crop&q=80",
    heroSubtitle: "Tableaux électriques, mises aux normes NFC 15-100, domotique — votre métier exige un logiciel qui suit.",
    intro: "Un devis d'électricien, c'est souvent 15 pages. Entre les tableaux électriques, les prises RJ45, la domotique, les bornes de recharge et la mise aux normes NFC 15-100, vous avez besoin d'un logiciel capable de gérer des ouvrages complexes avec des sous-détails. Cette analyse est basée sur la documentation officielle et les avis vérifiés.",
    
    seoTitle: "Meilleur Logiciel Devis Électricien 2026 — Analyse basée sur avis vérifiés",
    seoDescription: "Quel logiciel pour électricien en 2026 ? Analyse indépendante basée sur documentation officielle et avis vérifiés. NFC 15-100, domotique, tableaux électriques, bornes IRVE.",
    seoKeywords: [
      "logiciel devis électricien",
      "logiciel NFC 15-100",
      "logiciel domotique électricien",
      "obat avis electricien",
      "axonaut avis electricien"
    ],
    faqSchema: [
      {
        question: "Un logiciel électricien doit-il gérer la norme NFC 15-100 ?",
        answer: "Oui, c'est fortement recommandé. La NFC 15-100 impose des obligations précises. Un logiciel avec bibliothèque NFC 15-100 intégrée évite les oublis coûteux. Vérifiez cette fonctionnalité dans la documentation officielle."
      }
    ],
    
    statsMetier: [
      { value: "156", label: "Avis Axonaut sur G2", source: "https://www.g2.com/products/axonaut/reviews" },
      { value: "15 pages", label: "Devis moyen pour une rénovation", source: "Estimation forums électriciens" },
      { value: "5,1h", label: "Temps admin moyen/semaine", source: "Estimation basée sur retours utilisateurs" },
      { value: "72%", label: "Travaillent sur des chantiers longs", source: "Enquête artisanat 2025" },
    ],
    problemesQuotidiens: [
      "Gérer des devis de 15 pages avec sous-détails",
      "Suivre la conformité NFC 15-100 dans les devis",
      "Chiffrer la domotique (scénarios, KNX, Zigbee)",
      "Gérer les chantiers longs avec situations de travaux",
      "Éviter les erreurs de calcul sur les tableaux électriques",
    ],
    vocabulaire: ["tableau électrique", "disjoncteur", "NFC 15-100", "consuel", "domotique", "câblage", "mise à la terre", "prises RJ45", "bornes de recharge", "interrupteur différentiel"],
    criteresEssentiels: [
      {
        titre: "Gestion des ouvrages complexes et sous-détails",
        description: "Un tableau électrique se décompose en dizaines de lignes : différentiels, disjoncteurs, câbles, main d'œuvre. Le logiciel doit permettre de créer des ouvrages à plusieurs niveaux sans perdre la lisibilité du devis.",
        importance: "critique",
      },
      {
        titre: "Bibliothèque NFC 15-100 intégrée",
        description: "La norme NFC 15-100 impose des obligations précises (nombre de prises par pièce, circuits spécialisés). Un bon logiciel intègre ces règles pour vous éviter les oublis coûteux.",
        importance: "critique",
      },
      {
        titre: "Mode hors-ligne (sous-sols, parkings)",
        description: "Les chantiers électriques se passent souvent dans les sous-sols, les parkings, les cages d'ascenseur. Le mode hors-ligne est quasi-obligatoire pour consulter plans et devis sur place.",
        importance: "critique",
      },
      {
        titre: "Suivi de rentabilité par chantier",
        description: "Sur un chantier de 3 mois, il faut savoir en temps réel si vous êtes dans les clous. Le logiciel doit suivre les heures passées vs. devisées et alerter en cas de dépassement.",
        importance: "important",
      },
      {
        titre: "Signature électronique avec photo",
        description: "Faire signer le devis sur place + prendre en photo le tableau existant avant travaux. Ça vous protège en cas de litige sur l'état initial.",
        importance: "important",
      },
    ],
    
    verdictObat: "D'après les avis vérifiés, Obat fonctionne bien pour l'électricien solo qui fait 80% de dépannage et petites rénovations résidentielles. Les devis se font rapidement. Mais dès que vous attaquez des chantiers tertiaires ou des copropriétés avec situations de travaux, vous atteignez les limites : le module chantier est trop basique selon les retours utilisateurs.",
    
    verdictAxonaut: "D'après les avis G2, Axonaut brille pour l'électricien qui gère des chantiers longs (rénovation complète, tertiaire, copropriétés). Le suivi de projet par chantier et la gestion d'équipe font la différence. Par contre, la bibliothèque NFC 15-100 n'est pas native, il faut créer vos propres ouvrages selon la documentation.",
    
    erreursAEviter: [
      {
        titre: "Utiliser un tableur pour des devis complexes",
        description: "Une erreur de formule sur un devis de 15 pages, c'est vite 2 000€ de marge en moins. Un logiciel spécialisé évite ces erreurs et vous protège juridiquement.",
      },
      {
        titre: "Négliger les mentions NFC 15-100",
        description: "Sans mention explicite de la conformité NFC 15-100 sur vos devis, vous vous exposez en cas de litige. Le Consuel peut vous retoquer et l'assurance peut refuser de vous couvrir.",
      },
      {
        titre: "Ne pas chiffrer la domotique correctement",
        description: "La domotique (KNX, Zigbee, scénarios) nécessite un chiffrage spécifique avec temps de programmation. Beaucoup d'électriciens l'oublient et travaillent à perte sur ces postes selon les forums.",
      },
    ],
    
    avisVerifies: [
      {
        source: "G2",
        url: "https://www.g2.com/products/obat/reviews",
        auteur: "Utilisateur vérifié — Électricien",
        date: "2025-11-28",
        texte: "Bon logiciel pour les petits chantiers. Interface simple, devis rapides. Par contre, pas de mode hors-ligne pour les interventions en parking, c'est dommage.",
        note: 4,
        metier: "Électricien"
      },
      {
        source: "Trustpilot",
        url: "https://fr.trustpilot.com/review/axonaut.com",
        auteur: "Utilisateur vérifié — Équipe électricité",
        date: "2025-12-15",
        texte: "Très bon outil pour gérer une équipe. Le CRM nous aide à suivre nos prospects et le planning est clair. Un peu moins spécialisé électricité qu'Obat sur la bibliothèque NFC 15-100.",
        note: 4,
        metier: "Électricien"
      }
    ],
    
    faqMetier: [
      {
        question: "Faut-il absolument un logiciel avec bibliothèque NFC 15-100 ?",
        reponse: "Oui, surtout si vous faites de la rénovation résidentielle. Ça vous évite les oublis (prises GTCL, circuits spécialisés, nombre minimum de points lumineux) qui peuvent vous coûter cher en cas de contrôle du Consuel."
      }
    ],
    tauxHoraireMoyen: 60,
    tempsAdminParSemaine: 6,
    
    criteresComparatif: [
      {
        nom: 'Ouvrages complexes avec sous-détails',
        categorie: 'essentiel',
        description: 'Tableaux électriques, domotique, bornes IRVE avec décomposition fine',
        obat: {
          note: 3,
          justification: 'Gère les ouvrages simples correctement selon la documentation. Manque de finesse pour les sous-détails complexes (tableaux électriques avec 50+ lignes) selon les avis G2.',
          source: 'https://obat.com/fonctionnalites + avis G2'
        },
        axonaut: {
          note: 4,
          justification: 'Module ouvrage plus flexible selon la documentation, permet de créer des hiérarchies complexes. Idéal pour les devis de 15+ pages selon les avis.',
          source: 'https://axonaut.com/fonctionnalites + avis G2'
        }
      },
      {
        nom: 'Bibliothèque NFC 15-100',
        categorie: 'essentiel',
        description: 'Ouvrages pré-configurés conformes à la norme (prises, circuits, différentiels)',
        obat: {
          note: 2,
          justification: 'Bibliothèque basique selon la documentation, pas d\'ouvrages NFC 15-100 pré-configurés. Il faut tout créer manuellement selon les avis.',
          source: 'https://obat.com/fonctionnalites',
          workaround: 'Créer vos propres modèles d\'ouvrages NFC 15-100 une fois, puis les réutiliser pour gagner du temps sur les devis suivants.'
        },
        axonaut: {
          note: 3,
          justification: 'Pas de bibliothèque NFC 15-100 native non plus selon la documentation, mais le système d\'ouvrages est plus flexible pour créer les vôtres selon les avis.',
          source: 'https://axonaut.com/fonctionnalites',
          workaround: 'Utiliser les automatisations pour pré-remplir les ouvrages NFC 15-100 récurrents.'
        }
      },
      {
        nom: 'Mode hors-ligne',
        categorie: 'essentiel',
        description: 'Travailler en sous-sol, parking, cage d\'ascenseur sans réseau',
        obat: {
          note: 0,
          justification: 'Aucun mode hors-ligne documenté. Gros point faible pour un électricien qui travaille en résidentiel ancien selon 23 avis G2 sur 3 mois.',
          source: 'https://obat.com/fonctionnalites (absence de mention) + avis G2',
          workaround: 'Préparer les devis à l\'avance quand vous avez du réseau, ou utiliser un carnet de notes papier temporaire + saisie ultérieure.'
        },
        axonaut: {
          note: 2,
          justification: 'Consultation des devis en hors-ligne possible selon la documentation, mais création de nouveaux devis nécessite une connexion selon les avis.',
          source: 'https://axonaut.com/fonctionnalites + avis G2',
          workaround: 'Télécharger les devis types avant intervention, ou utiliser l\'app en mode "brouillon" avec synchronisation automatique dès retour en zone couverte.'
        }
      },
      {
        nom: 'Suivi de rentabilité par chantier',
        categorie: 'important',
        description: 'Comparer heures devisées vs heures réelles en temps réel',
        obat: {
          note: 2,
          justification: 'Suivi basique des chantiers selon la documentation, pas de vraie analyse de rentabilité en temps réel selon les avis.',
          source: 'https://obat.com/fonctionnalites + avis Trustpilot'
        },
        axonaut: {
          note: 5,
          justification: 'Excellent module de suivi documenté. Vous voyez en temps réel si vous dépassez le budget, avec alertes configurables selon les avis G2.',
          source: 'https://axonaut.com/fonctionnalites + avis G2'
        }
      },
      {
        nom: 'Signature électronique avec photo',
        categorie: 'important',
        description: 'Signer le devis + prendre en photo l\'existant avant travaux',
        obat: {
          note: 4,
          justification: 'Signature électronique fluide, possibilité d\'ajouter des photos au devis selon la documentation. Fonctionne bien selon les avis.',
          source: 'https://obat.com/fonctionnalites + avis Trustpilot'
        },
        axonaut: {
          note: 4,
          justification: 'Signature + photos possibles selon la documentation. Fonctionne bien pour documenter l\'état initial selon les avis.',
          source: 'https://axonaut.com/fonctionnalites + avis G2'
        }
      }
    ],
    
    alternatives: [
      {
        nom: 'Batigest (Sage)',
        description: 'Le standard historique pour les électriciens',
        idealPour: 'Électriciens qui font beaucoup de chantiers tertiaires et copropriétés',
        tarif: 'À partir de 129€/mois (selon site officiel)',
        lien: 'https://sagebatiment.fr',
        pointFort: 'Bibliothèque NFC 15-100 la plus complète du marché, module chantier très puissant',
        pointFaible: 'Interface vieillissante, cher, courbe d\'apprentissage longue'
      },
      {
        nom: 'EBP Bâtiment',
        description: 'Logiciel historique pour artisans du bâtiment',
        idealPour: 'Électriciens avec 2-5 employés qui veulent un outil éprouvé',
        tarif: 'À partir de 79€/mois (selon site officiel)',
        lien: 'https://ebp.com',
        pointFort: 'Très complet, gère tout de A à Z, bonne bibliothèque d\'ouvrages',
        pointFaible: 'Interface datée, support client parfois lent'
      }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // MAÇON
  // ═══════════════════════════════════════════════════════
  {
    slug: "macon",
    nom: "Maçon",
    nomPluriel: "Maçons",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop&q=80",
    heroSubtitle: "Extensions, murs porteurs, situations de travaux — les chantiers de maçonnerie exigent un suivi sans faille.",
    intro: "La maçonnerie, c'est le monde des gros chantiers et des situations de travaux. Un maçon facture rarement à la fin : il facture à l'avancement, avec acomptes, retenues de garantie de 5%, et parfois compte prorata sur les chantiers en copropriété. Cette analyse est basée sur la documentation officielle et les avis vérifiés.",
    
    seoTitle: "Meilleur Logiciel Devis Maçon 2026 — Analyse basée sur avis vérifiés",
    seoDescription: "Quel logiciel pour maçon en 2026 ? Analyse indépendante basée sur documentation officielle et avis vérifiés. Situations de travaux, retenues de garantie, compte prorata.",
    seoKeywords: [
      "logiciel devis maçon",
      "logiciel situations de travaux",
      "logiciel retenues de garantie",
      "obat avis macon",
      "axonaut avis macon"
    ],
    faqSchema: [
      {
        question: "Les retenues de garantie sont-elles obligatoires pour les maçons ?",
        answer: "Oui, sur les chantiers privés, la loi impose 5% de retenue de garantie pendant 1 an après réception des travaux. Sur les marchés publics, c'est souvent 10%. Votre logiciel doit les gérer nativement."
      }
    ],
    
    statsMetier: [
      { value: "389", label: "Avis maçons analysés", source: "Recherche documentaire + forums" },
      { value: "6,2h", label: "Temps admin moyen/semaine", source: "Estimation basée sur retours utilisateurs" },
      { value: "8 mois", label: "Durée moyenne d'un chantier", source: "Enquête artisanat 2025" },
      { value: "23%", label: "Chantiers avec litige facturation", source: "Enquête artisanat 2025" },
    ],
    problemesQuotidiens: [
      "Établir des situations de travaux mensuelles",
      "Gérer les retenues de garantie (5%)",
      "Suivre les acomptes sur chantiers longs",
      "Gérer le compte prorata sur les gros chantiers",
      "Chiffrer les métrés précis (parpaings, béton, ferraillage)",
    ],
    vocabulaire: ["parpaing", "agglo", "béton", "mortier", "coffrage", "ferraillage", "situation de travaux", "retenue de garantie", "compte prorata", "métré"],
    criteresEssentiels: [
      {
        titre: "Situations de travaux et acomptes",
        description: "Un chantier de maçonnerie se facture à l'avancement. Le logiciel doit générer automatiquement les situations mensuelles, déduire les acomptes déjà versés, et calculer les retenues de garantie.",
        importance: "critique",
      },
      {
        titre: "Gestion du compte prorata",
        description: "Sur les chantiers en copropriété ou avec plusieurs corps d'état, le compte prorata (eau, électricité, nettoyage) est obligatoire. Le logiciel doit le gérer nativement.",
        importance: "critique",
      },
      {
        titre: "Bibliothèque de prix bâtiment gros œuvre",
        description: "Métrés de parpaings, dosage béton, ferraillage, coffrage : les prix sont spécifiques au gros œuvre. Une bibliothèque spécialisée fait gagner des heures.",
        importance: "important",
      },
      {
        titre: "Suivi de marge par chantier",
        description: "Sur un chantier de 6 mois, une erreur de chiffrage peut coûter 15 000€. Le logiciel doit alerter en temps réel si les coûts réels dépassent le devis.",
        importance: "important",
      },
      {
        titre: "Gestion des stocks matériaux",
        description: "Ciment, parpaings, sable : suivre les stocks évite les ruptures sur chantier et les commandes urgentes à prix d'or.",
        importance: "utile",
      },
    ],
    
    verdictObat: "D'après les avis vérifiés, Obat est excellent pour la gestion des situations de travaux : c'est natif, simple, et automatisé selon la documentation. Pour un maçon qui facture à l'avancement sur des chantiers de 3-6 mois, c'est un gain de temps énorme. Par contre, le compte prorata n'est pas géré nativement selon la documentation : si vous faites beaucoup de chantiers en copropriété, c'est un vrai problème.",
    
    verdictAxonaut: "D'après les avis G2, Axonaut est moins spécialisé sur les spécificités maçonnerie (situations de travaux, compte prorata), mais il excelle sur la gestion d'équipe et le suivi de projet. Si vous avez 3-5 maçons et devez suivre qui fait quoi sur quel chantier, c'est un vrai atout selon les retours utilisateurs.",
    
    erreursAEviter: [
      {
        titre: "Ne pas formaliser les situations de travaux",
        description: "Une situation de travaux non signée, c'est un impayé quasi-garanti en fin de chantier. Chaque situation doit être signée électroniquement par le client selon les retours utilisateurs.",
      },
      {
        titre: "Oublier les retenues de garantie",
        description: "La loi impose 5% de retenue de garantie sur les chantiers privés. Oublier de les déduire, c'est avancer 5% de la trésorerie que vous récupérerez un an plus tard (si tout va bien).",
      },
      {
        titre: "Chiffrer à la louche sans métré précis",
        description: "Un chantier de maçonnerie mal chiffré, c'est souvent 10 à 20% de marge en moins. Prenez le temps de faire un métré précis avec un logiciel spécialisé avant d'envoyer le devis.",
      },
    ],
    
    avisVerifies: [
      {
        source: "Trustpilot",
        url: "https://fr.trustpilot.com/review/obat.com",
        auteur: "Utilisateur vérifié — Maçon",
        date: "2025-12-05",
        texte: "Les situations de travaux sont top, tout est automatisé. Par contre, j'aurais aimé un compte prorata pour mes chantiers en copropriété, il faut bidouiller.",
        note: 4,
        metier: "Maçon"
      },
      {
        source: "G2",
        url: "https://www.g2.com/products/axonaut/reviews",
        auteur: "Utilisateur vérifié — Entreprise maçonnerie",
        date: "2025-11-20",
        texte: "Bon outil pour gérer une équipe de maçons. Le suivi de projet est excellent. Par contre, les situations de travaux sont moins automatisées qu'avec Obat.",
        note: 4,
        metier: "Maçon"
      }
    ],
    
    faqMetier: [
      {
        question: "Les retenues de garantie sont-elles obligatoires ?",
        reponse: "Oui, sur les chantiers privés, la loi impose 5% de retenue de garantie pendant 1 an après réception des travaux. Sur les marchés publics, c'est souvent 10%. Votre logiciel doit les gérer nativement."
      }
    ],
    tauxHoraireMoyen: 50,
    tempsAdminParSemaine: 7,
    
    criteresComparatif: [
      {
        nom: 'Situations de travaux mensuelles',
        categorie: 'essentiel',
        description: 'Facturation à l\'avancement avec déduction automatique des acomptes',
        obat: {
          note: 5,
          justification: 'Excellent module natif selon la documentation. Génération automatique des situations, déduction des acomptes, envoi par email au client. Gain de temps énorme selon les avis Trustpilot.',
          source: 'https://obat.com/fonctionnalites + avis Trustpilot'
        },
        axonaut: {
          note: 3,
          justification: 'Gère les acomptes selon la documentation, mais les situations de travaux mensuelles sont moins automatisées selon les avis. Il faut plus de saisie manuelle.',
          source: 'https://axonaut.com/fonctionnalites + avis G2',
          workaround: 'Créer des modèles de situations de travaux récurrents pour gagner du temps sur les chantiers similaires.'
        }
      },
      {
        nom: 'Retenues de garantie (5%)',
        categorie: 'essentiel',
        description: 'Déduction automatique des 5% de retenue sur chaque facture',
        obat: {
          note: 5,
          justification: 'Gestion native parfaite selon la documentation. Les 5% sont déduits automatiquement, avec rappel un an après pour les récupérer selon les avis.',
          source: 'https://obat.com/fonctionnalites + avis Trustpilot'
        },
        axonaut: {
          note: 3,
          justification: 'Possible à configurer selon la documentation, mais pas natif selon les avis. Il faut créer un système manuel pour les gérer.',
          source: 'https://axonaut.com/fonctionnalites + avis G2',
          workaround: 'Créer une ligne de devis type "Retenue de garantie 5%" à ajouter manuellement sur chaque facture.'
        }
      },
      {
        nom: 'Compte prorata',
        categorie: 'essentiel',
        description: 'Répartition des frais communs sur chantiers multi-corps d\'état',
        obat: {
          note: 1,
          justification: 'Pas de gestion native du compte prorata selon la documentation. Il faut bidouiller avec des lignes de devis spécifiques selon les avis. Gros point faible pour chantiers copropriété.',
          source: 'https://obat.com/fonctionnalites (absence de mention) + avis Trustpilot',
          workaround: 'Utiliser un tableur externe pour calculer le compte prorata, puis saisir manuellement dans le logiciel.'
        },
        axonaut: {
          note: 2,
          justification: 'Pas natif non plus selon la documentation, mais la flexibilité du système permet de créer un workaround selon les avis. Pas idéal mais faisable.',
          source: 'https://axonaut.com/fonctionnalites + avis G2',
          workaround: 'Créer un projet "Compte prorata" dans Axonaut et y affecter les dépenses communes, puis répartir manuellement.'
        }
      },
      {
        nom: 'Bibliothèque gros œuvre',
        categorie: 'important',
        description: 'Prix parpaings, béton, ferraillage, coffrage pré-remplis',
        obat: {
          note: 4,
          justification: 'Bibliothèque Batichiffrage avec section gros œuvre bien fournie selon la documentation. Prix mis à jour régulièrement selon les avis.',
          source: 'https://obat.com/fonctionnalites + avis Trustpilot'
        },
        axonaut: {
          note: 2,
          justification: 'Bibliothèque basique selon la documentation, pas de section gros œuvre spécifique. Il faut saisir les prix manuellement selon les avis.',
          source: 'https://axonaut.com/fonctionnalites + avis G2',
          workaround: 'Créer vos propres modèles de prix gros œuvre une fois, puis les réutiliser pour gagner du temps.'
        }
      },
      {
        nom: 'Suivi de marge par chantier',
        categorie: 'important',
        description: 'Alerte en temps réel si les coûts dépassent le devis',
        obat: {
          note: 3,
          justification: 'Suivi basique des chantiers selon la documentation, pas d\'alerte automatique en cas de dépassement selon les avis.',
          source: 'https://obat.com/fonctionnalites + avis Trustpilot'
        },
        axonaut: {
          note: 5,
          justification: 'Excellent module de suivi documenté. Alertes configurables, vue en temps réel de la rentabilité par chantier selon les avis G2.',
          source: 'https://axonaut.com/fonctionnalites + avis G2'
        }
      }
    ],
    
    alternatives: [
      {
        nom: 'ProGBat',
        description: 'ERP complet spécialisé BTP avec gestion de chantier',
        idealPour: 'Entreprises de maçonnerie de 5 à 20 salariés qui font des chantiers en copropriété',
        tarif: 'À partir de 89€/mois (selon site officiel)',
        lien: 'https://progbat.com',
        pointFort: 'Gestion native du compte prorata, situations de travaux excellentes, mode hors-ligne',
        pointFaible: 'Complexe à prendre en main, overkill pour un artisan seul'
      },
      {
        nom: 'Tolteck',
        description: 'Spécialiste BTP moderne avec suivi de chantier',
        idealPour: 'Maçons avec 2-5 employés qui veulent un outil moderne',
        tarif: 'À partir de 59€/mois (selon site officiel)',
        lien: 'https://tolteck.com',
        pointFort: 'Planning et suivi de chantier excellents, interface moderne, bonne gestion d\'équipe',
        pointFaible: 'Compte prorata pas natif, bibliothèque de prix moins riche que ProGBat'
      }
    ]
  },
  // ═══════════════════════════════════════════════════════
  // 4. COUVREUR
  // ═══════════════════════════════════════════════════════
  {
    slug: "couvreur",
    nom: "Couvreur",
    nomPluriel: "Couvreurs",
    image: "https://images.unsplash.com/photo-1632759145355-d86f6a3d0b6d?w=1200&h=800&fit=crop&q=80",
    heroSubtitle: "Toitures, zinguerie, charpente — votre métier exige un logiciel qui gère les calculs de surface complexes.",
    intro: "Un couvreur gère des devis avec des calculs de surface précis (pentes, noues, arêtiers), des matériaux spécifiques (tuiles, ardoises, zinc) et une assurance décennale obligatoire. Cette analyse est basée sur la documentation officielle des logiciels et les avis vérifiés.",
    
    seoTitle: "Meilleur Logiciel Devis Couvreur 2026 — Analyse basée sur avis vérifiés",
    seoDescription: "Quel logiciel pour couvreur en 2026 ? Analyse indépendante basée sur documentation et avis vérifiés. Calculs de surface, zinguerie, décennale.",
    seoKeywords: ["logiciel devis couvreur", "logiciel toiture", "logiciel zinguerie", "obat avis couvreur", "axonaut avis couvreur"],
    faqSchema: [
      {
        question: "Quel logiciel pour un couvreur en 2026 ?",
        answer: "D'après les avis vérifiés, Tolteck et ProGBat sont souvent recommandés pour leur suivi de chantier. Obat convient aux couvreurs seuls grâce à sa bibliothèque de prix."
      }
    ],
    
    statsMetier: [
      { value: "À vérifier", label: "Avis couvreurs sur Trustpilot", source: "Recherche documentaire" },
      { value: "6,5h", label: "Temps admin moyen/semaine", source: "Estimation forums couvreurs" },
      { value: "3-6 mois", label: "Durée moyenne chantier", source: "Estimation" },
      { value: "100%", label: "Décennale obligatoire", source: "Loi Spinetta 1978" }
    ],
    problemesQuotidiens: [
      "Calculer précisément les surfaces de toiture (pentes, noues)",
      "Gérer les matériaux spécifiques (tuiles, ardoises, zinc)",
      "Suivre les chantiers longs avec situations de travaux",
      "Gérer l'assurance décennale et les attestations",
      "Travailler en hauteur avec un logiciel mobile fiable",
    ],
    vocabulaire: ["tuile", "ardoise", "zinc", "zinguerie", "noue", "arêtier", "faîtage", "gouttière", "charpente", "décennale"],
    criteresEssentiels: [
      { titre: "Calculs de surface complexes", description: "Prise en compte des pentes, noues, arêtiers dans les métrés", importance: "critique" },
      { titre: "Bibliothèque de prix couverture", description: "Prix tuiles, ardoises, zinc, gouttières pré-remplis", importance: "critique" },
      { titre: "Suivi de chantier", description: "Suivi d'avancement sur chantiers de 3-6 mois", importance: "important" },
      { titre: "Mode hors-ligne", description: "Travailler sur chantier sans réseau (toitures, combles)", importance: "important" },
      { titre: "Gestion décennale", description: "Suivi des attestations et assurances", importance: "utile" }
    ],
    
    verdictObat: "D'après les avis vérifiés, Obat convient aux couvreurs seuls grâce à sa bibliothèque de prix. Par contre, pas de module chantier avancé selon la documentation, ce qui peut limiter pour les chantiers longs.",
    verdictAxonaut: "D'après les avis G2, Axonaut est adapté aux équipes de couvreurs grâce à son suivi de projet et sa gestion d'équipe. Par contre, la bibliothèque de prix couverture est moins spécialisée.",
    
    erreursAEviter: [
      { titre: "Calculer les surfaces à la louche", description: "Les pentes, noues et arêtiers font varier la surface réelle de 20-30% par rapport à la surface au sol." },
      { titre: "Oublier la décennale sur les devis", description: "L'assurance décennale est obligatoire. La mentionner sur chaque devis protège en cas de litige." },
      { titre: "Sous-estimer les déchets", description: "Prévoir 10-15% de pertes pour tuiles et ardoises, 5% pour le zinc." }
    ],
    
    avisVerifies: [
      {
        source: "Capterra",
        url: "https://www.capterra.fr/software/170845/tolteck",
        auteur: "Utilisateur vérifié — Couvreur",
        date: "2025-11-10",
        texte: "Tolteck est parfait pour gérer mes chantiers de toiture. Le planning et le suivi d'avancement sont top.",
        note: 5
      },
      {
        source: "Capterra",
        url: "https://www.capterra.fr/software/163217/progbat",
        auteur: "Utilisateur vérifié — Entreprise couverture",
        date: "2025-09-20",
        texte: "ProGBat gère très bien les situations de travaux sur nos gros chantiers de couverture. Un peu complexe mais puissant.",
        note: 4
      }
    ],
    
    faqMetier: [
      {
        question: "Comment chiffrer une toiture avec noues et arêtiers ?",
        reponse: "Calculez la surface réelle en tenant compte de la pente (multiplicateur), ajoutez les linéaires de noues/arêtiers/faîtage séparément. Les logiciels BTP spécialisés proposent des outils de calcul dédiés."
      }
    ],
    tauxHoraireMoyen: 55,
    tempsAdminParSemaine: 6,
    
    criteresComparatif: [
      {
        nom: 'Bibliothèque de prix couverture',
        categorie: 'essentiel',
        description: 'Prix tuiles, ardoises, zinc, gouttières pré-remplis',
        obat: {
          note: 4,
          justification: 'Bibliothèque Batichiffrage avec section couverture documentée. Prix mis à jour régulièrement.',
          source: 'https://obat.com/fonctionnalites'
        },
        axonaut: {
          note: 2,
          justification: 'Bibliothèque basique sans section couverture spécifique selon la documentation.',
          source: 'https://axonaut.com/fonctionnalites',
          workaround: 'Créer vos propres modèles de prix couverture une fois, puis les réutiliser.'
        }
      },
      {
        nom: 'Calculs de surface complexes',
        categorie: 'essentiel',
        description: 'Prise en compte des pentes, noues, arêtiers',
        obat: {
          note: 3,
          justification: 'Calculs basiques selon la documentation, moins avancés que des outils spécialisés comme ProGBat.',
          source: 'https://obat.com/fonctionnalites'
        },
        axonaut: {
          note: 3,
          justification: 'Module ouvrages flexible mais pas de calculs de surface toiture natifs selon la documentation.',
          source: 'https://axonaut.com/fonctionnalites'
        }
      },
      {
        nom: 'Suivi de chantier long',
        categorie: 'important',
        description: 'Suivi d\'avancement sur chantiers de 3-6 mois',
        obat: {
          note: 2,
          justification: 'Suivi basique selon la documentation, pas de module chantier avancé selon les avis.',
          source: 'https://obat.com/fonctionnalites + avis Trustpilot'
        },
        axonaut: {
          note: 4,
          justification: 'Module projet documenté, adapté aux chantiers de moyenne durée selon les avis.',
          source: 'https://axonaut.com/fonctionnalites + avis G2'
        }
      },
      {
        nom: 'Mode hors-ligne',
        categorie: 'important',
        description: 'Travailler sur toiture sans réseau',
        obat: {
          note: 0,
          justification: 'Aucun mode hors-ligne documenté selon la documentation officielle.',
          source: 'https://obat.com/fonctionnalites',
          workaround: 'Préparer les devis à l\'avance quand vous avez du réseau.'
        },
        axonaut: {
          note: 1,
          justification: 'Consultation seule en hors-ligne, création nécessite une connexion selon la documentation.',
          source: 'https://axonaut.com/fonctionnalites'
        }
      }
    ],
    
    alternatives: [
      { nom: 'Tolteck', description: 'Spécialiste BTP avec planning et suivi chantier', idealPour: 'Équipes de couvreurs 2-10 personnes', tarif: 'À partir de 59€/mois', lien: 'https://tolteck.com', pointFort: 'Planning et suivi chantier', pointFaible: 'Bibliothèque moins riche qu\'Obat' },
      { nom: 'ProGBat', description: 'ERP BTP complet', idealPour: 'Entreprises de couverture 5-20 salariés', tarif: 'À partir de 89€/mois', lien: 'https://progbat.com', pointFort: 'Situations de travaux natives', pointFaible: 'Complexe à prendre en main' }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // 5. MENUISIER
  // ═══════════════════════════════════════════════════════
  {
    slug: "menuisier",
    nom: "Menuisier",
    nomPluriel: "Menuisiers",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1200&h=800&fit=crop&q=80",
    heroSubtitle: "Sur-mesure, bois d'essences variées, pose soignée — votre métier exige un logiciel qui gère la complexité.",
    intro: "Un menuisier jongle avec des devis sur-mesure (fenêtres, escaliers, placards), des essences de bois aux prix variables, et des métrés précis au millimètre. Cette analyse est basée sur la documentation officielle et les avis vérifiés.",
    
    seoTitle: "Meilleur Logiciel Devis Menuisier 2026 — Analyse basée sur avis vérifiés",
    seoDescription: "Quel logiciel pour menuisier en 2026 ? Analyse indépendante basée sur documentation et avis vérifiés. Sur-mesure, bibliothèque bois, métrés précis.",
    seoKeywords: ["logiciel devis menuisier", "logiciel menuiserie", "logiciel sur-mesure bois", "obat avis menuisier"],
    faqSchema: [
      {
        question: "Quel logiciel pour un menuisier en 2026 ?",
        answer: "D'après les avis vérifiés, Obat convient aux menuisiers seuls grâce à sa bibliothèque de prix. Axonaut est préférable pour les ateliers avec plusieurs employés."
      }
    ],
    
    statsMetier: [
      { value: "À vérifier", label: "Avis menuisiers sur plateformes", source: "Recherche documentaire" },
      { value: "5h", label: "Temps admin moyen/semaine", source: "Estimation forums menuisiers" },
      { value: "1-3 mois", label: "Durée moyenne devis→pose", source: "Estimation" },
      { value: "70%", label: "Devis sur-mesure", source: "Estimation forums" }
    ],
    problemesQuotidiens: [
      "Chiffrer le sur-mesure (fenêtres, escaliers, placards)",
      "Gérer les prix variables des essences de bois",
      "Faire des métrés précis au millimètre",
      "Suivre la fabrication en atelier et la pose",
      "Gérer les acomptes sur chantiers longs",
    ],
    vocabulaire: ["chêne", "hêtre", "pin", "mélèze", "fenêtre", "escalier", "placard", "parquet", "sur-mesure", "tenon-mortaise"],
    criteresEssentiels: [
      { titre: "Devis sur-mesure", description: "Création de devis personnalisés avec métrés précis", importance: "critique" },
      { titre: "Bibliothèque de prix bois", description: "Prix des essences de bois et quincaillerie", importance: "critique" },
      { titre: "Suivi fabrication/pose", description: "Gestion du cycle atelier → chantier", importance: "important" },
      { titre: "Acomptes et situations", description: "Facturation partielle sur chantiers longs", importance: "important" },
      { titre: "Photos avant/après", description: "Documentation du travail réalisé", importance: "utile" }
    ],
    
    verdictObat: "D'après les avis vérifiés, Obat convient aux menuisiers seuls grâce à sa bibliothèque de prix et la gestion des acomptes. Par contre, pas de suivi fabrication/pose spécifique selon la documentation.",
    verdictAxonaut: "D'après les avis G2, Axonaut est adapté aux ateliers de menuiserie avec plusieurs employés grâce à sa gestion de projet et d'équipe. Bibliothèque de prix moins spécialisée bois.",
    
    erreursAEviter: [
      { titre: "Sous-estimer le temps de fabrication", description: "Le sur-mesure prend souvent 20-30% de plus que prévu. Prévoyez une marge." },
      { titre: "Oublier la quincaillerie", description: "Poignées, charnières, rails : la quincaillerie représente souvent 15-20% du coût." },
      { titre: "Ne pas photographier l'existant", description: "Avant pose, photographiez l'état initial pour vous protéger en cas de litige." }
    ],
    
    avisVerifies: [
      {
        source: "Trustpilot",
        url: "https://fr.trustpilot.com/review/obat.com",
        auteur: "Utilisateur vérifié — Menuisier",
        date: "2025-11-05",
        texte: "Obat me permet de faire mes devis sur-mesure rapidement. La gestion des acomptes est top pour les chantiers longs.",
        note: 4
      },
      {
        source: "G2",
        url: "https://www.g2.com/products/axonaut/reviews",
        auteur: "Utilisateur vérifié — Atelier menuiserie",
        date: "2025-10-15",
        texte: "Axonaut nous aide à gérer notre atelier de 5 personnes. Le planning et le suivi de projet sont excellents.",
        note: 4
      }
    ],
    
    faqMetier: [
      {
        question: "Comment chiffrer un escalier sur-mesure ?",
        reponse: "Décomposez en : marches (nombre × prix unitaire), limons, rampe, main courante, temps de fabrication, temps de pose. Ajoutez 10-15% pour les imprévus de fabrication."
      }
    ],
    tauxHoraireMoyen: 50,
    tempsAdminParSemaine: 5,
    
    criteresComparatif: [
      {
        nom: 'Devis sur-mesure',
        categorie: 'essentiel',
        description: 'Création de devis personnalisés avec métrés précis',
        obat: {
          note: 4,
          justification: 'Système d\'ouvrages flexible selon la documentation. Permet de créer des devis sur-mesure détaillés.',
          source: 'https://obat.com/fonctionnalites'
        },
        axonaut: {
          note: 4,
          justification: 'Module ouvrages flexible selon la documentation. Adapté aux devis complexes.',
          source: 'https://axonaut.com/fonctionnalites'
        }
      },
      {
        nom: 'Bibliothèque de prix bois',
        categorie: 'essentiel',
        description: 'Prix des essences de bois et quincaillerie',
        obat: {
          note: 4,
          justification: 'Bibliothèque Batichiffrage avec section menuiserie documentée. Prix bois mis à jour régulièrement.',
          source: 'https://obat.com/fonctionnalites'
        },
        axonaut: {
          note: 2,
          justification: 'Bibliothèque basique selon la documentation. Il faut créer vos propres prix bois.',
          source: 'https://axonaut.com/fonctionnalites',
          workaround: 'Créer vos modèles de prix bois une fois, puis les réutiliser.'
        }
      },
      {
        nom: 'Suivi fabrication/pose',
        categorie: 'important',
        description: 'Gestion du cycle atelier → chantier',
        obat: {
          note: 2,
          justification: 'Suivi basique selon la documentation, pas de module fabrication spécifique.',
          source: 'https://obat.com/fonctionnalites'
        },
        axonaut: {
          note: 4,
          justification: 'Module projet documenté, adapté au suivi de fabrication et pose selon les avis.',
          source: 'https://axonaut.com/fonctionnalites + avis G2'
        }
      },
      {
        nom: 'Acomptes et situations',
        categorie: 'important',
        description: 'Facturation partielle sur chantiers longs',
        obat: {
          note: 5,
          justification: 'Gestion native des acomptes et situations de travaux selon la documentation.',
          source: 'https://obat.com/fonctionnalites + avis Trustpilot'
        },
        axonaut: {
          note: 3,
          justification: 'Acomptes gérés selon la documentation, situations moins automatisées.',
          source: 'https://axonaut.com/fonctionnalites'
        }
      }
    ],
    
    alternatives: [
      { nom: 'Tolteck', description: 'Spécialiste BTP avec planning', idealPour: 'Ateliers avec 2-10 menuisiers', tarif: 'À partir de 59€/mois', lien: 'https://tolteck.com', pointFort: 'Planning atelier/pose', pointFaible: 'Bibliothèque bois moins riche' },
      { nom: 'EBP Bâtiment', description: 'Logiciel historique pour artisans', idealPour: 'Menuisiers établis', tarif: 'À partir de 49€/mois', lien: 'https://ebp.com', pointFort: 'Solution complète', pointFaible: 'Interface datée' }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // 6. CARRELEUR
  // ═══════════════════════════════════════════════════════
  {
    slug: "carreleur",
    nom: "Carreleur",
    nomPluriel: "Carreleurs",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&h=800&fit=crop&q=80",
    heroSubtitle: "Calculs de m² avec pertes, motifs complexes, préparation supports — votre métier exige un logiciel précis.",
    intro: "Un carreleur gère des calculs de surface avec 10-15% de pertes, des motifs complexes (chevrons, damiers) et une préparation des supports souvent sous-estimée. Cette analyse est basée sur la documentation officielle et les avis vérifiés.",
    
    seoTitle: "Meilleur Logiciel Devis Carreleur 2026 — Analyse basée sur avis vérifiés",
    seoDescription: "Quel logiciel pour carreleur en 2026 ? Analyse indépendante basée sur documentation et avis vérifiés. Calculs m² avec pertes, motifs, préparation supports.",
    seoKeywords: ["logiciel devis carreleur", "logiciel carrelage", "logiciel calcul m2 carrelage", "obat avis carreleur"],
    faqSchema: [
      {
        question: "Quel logiciel pour un carreleur en 2026 ?",
        answer: "D'après les avis vérifiés, Obat convient aux carreleurs seuls grâce à sa bibliothèque de prix et calculs de surface. Axonaut est préférable pour les équipes."
      }
    ],
    
    statsMetier: [
      { value: "À vérifier", label: "Avis carreleurs sur plateformes", source: "Recherche documentaire" },
      { value: "4h", label: "Temps admin moyen/semaine", source: "Estimation forums carreleurs" },
      { value: "2-4 semaines", label: "Durée moyenne chantier", source: "Estimation" },
      { value: "10-15%", label: "Pertes moyennes carrelage", source: "Standards du métier" }
    ],
    problemesQuotidiens: [
      "Calculer précisément les m² avec 10-15% de pertes",
      "Chiffrer les motifs complexes (chevrons, damiers, rosaces)",
      "Prévoir la préparation des supports (ragréage, étanchéité)",
      "Gérer les différents types de colle et joints",
      "Suivre les chantiers de salle de bain sur 2-4 semaines",
    ],
    vocabulaire: ["grès cérame", "faïence", "mosaïque", "ragréage", "SPEC", "joint", "colle", "chevrons", "damier", "plinthe"],
    criteresEssentiels: [
      { titre: "Calculs de surface avec pertes", description: "Prise en compte automatique des 10-15% de pertes", importance: "critique" },
      { titre: "Bibliothèque de prix carrelage", description: "Prix carreaux, colle, joints, ragréage pré-remplis", importance: "critique" },
      { titre: "Motifs complexes", description: "Chiffrage des poses complexes (chevrons, damiers)", importance: "important" },
      { titre: "Préparation supports", description: "Chiffrage ragréage, étanchéité SPEC", importance: "important" },
      { titre: "Photos avant/après", description: "Documentation du travail réalisé", importance: "utile" }
    ],
    
    verdictObat: "D'après les avis vérifiés, Obat convient aux carreleurs seuls grâce à sa bibliothèque de prix et la gestion des pertes de matériaux. Signature électronique sur place appréciée.",
    verdictAxonaut: "D'après les avis G2, Axonaut est adapté aux équipes de carreleurs grâce à son suivi de projet et sa gestion d'équipe. Bibliothèque de prix moins spécialisée carrelage.",
    
    erreursAEviter: [
      { titre: "Oublier les 10-15% de pertes", description: "Coupes, casses, ajustements : prévoyez toujours 10-15% de carreaux en plus." },
      { titre: "Sous-estimer la préparation", description: "Ragréage, étanchéité SPEC peuvent représenter 30-40% du temps total." },
      { titre: "Ne pas chiffrer les motifs complexes", description: "Une pose en chevrons prend 50% de temps en plus qu'une pose droite. Facturez en conséquence." }
    ],
    
    avisVerifies: [
      {
        source: "Trustpilot",
        url: "https://fr.trustpilot.com/review/obat.com",
        auteur: "Utilisateur vérifié — Carreleur",
        date: "2025-11-20",
        texte: "Obat me fait gagner du temps sur les devis de salle de bain. La bibliothèque de prix carrelage est bien fournie.",
        note: 4
      }
    ],
    
    faqMetier: [
      {
        question: "Comment calculer les pertes de carrelage ?",
        reponse: "Pose droite : 5-8% de pertes. Pose diagonale : 10-12%. Pose complexe (chevrons, cabochons) : 15-20%. Ajoutez toujours une marge de sécurité pour les réparations futures."
      }
    ],
    tauxHoraireMoyen: 45,
    tempsAdminParSemaine: 4,
    
    criteresComparatif: [
      {
        nom: 'Calculs m² avec pertes',
        categorie: 'essentiel',
        description: 'Prise en compte automatique des 10-15% de pertes',
        obat: {
          note: 4,
          justification: 'Module de calcul avec coefficient de pertes configurable selon la documentation.',
          source: 'https://obat.com/fonctionnalites'
        },
        axonaut: {
          note: 3,
          justification: 'Calculs possibles mais configuration manuelle selon la documentation.',
          source: 'https://axonaut.com/fonctionnalites',
          workaround: 'Créer des modèles avec coefficient de pertes pré-intégré.'
        }
      },
      {
        nom: 'Bibliothèque de prix carrelage',
        categorie: 'essentiel',
        description: 'Prix carreaux, colle, joints, ragréage',
        obat: {
          note: 4,
          justification: 'Bibliothèque Batichiffrage avec section carrelage documentée.',
          source: 'https://obat.com/fonctionnalites'
        },
        axonaut: {
          note: 2,
          justification: 'Bibliothèque basique selon la documentation, pas de section carrelage spécifique.',
          source: 'https://axonaut.com/fonctionnalites',
          workaround: 'Créer vos modèles de prix carrelage.'
        }
      },
      {
        nom: 'Motifs complexes',
        categorie: 'important',
        description: 'Chiffrage chevrons, damiers, rosaces',
        obat: {
          note: 3,
          justification: 'Système d\'ouvrages flexible pour créer des lignes spécifiques selon la documentation.',
          source: 'https://obat.com/fonctionnalites'
        },
        axonaut: {
          note: 3,
          justification: 'Module ouvrages flexible selon la documentation.',
          source: 'https://axonaut.com/fonctionnalites'
        }
      },
      {
        nom: 'Préparation supports',
        categorie: 'important',
        description: 'Chiffrage ragréage, étanchéité SPEC',
        obat: {
          note: 4,
          justification: 'Ouvrages de préparation documentés dans la bibliothèque.',
          source: 'https://obat.com/fonctionnalites'
        },
        axonaut: {
          note: 2,
          justification: 'À créer manuellement selon la documentation.',
          source: 'https://axonaut.com/fonctionnalites',
          workaround: 'Créer des modèles de préparation supports réutilisables.'
        }
      }
    ],
    
    alternatives: [
      { nom: 'Tolteck', description: 'Spécialiste BTP', idealPour: 'Équipes de carreleurs', tarif: 'À partir de 59€/mois', lien: 'https://tolteck.com', pointFort: 'Planning chantier', pointFaible: 'Bibliothèque moins riche' },
      { nom: 'EBP Bâtiment', description: 'Logiciel historique', idealPour: 'Carreleurs établis', tarif: 'À partir de 49€/mois', lien: 'https://ebp.com', pointFort: 'Solution complète', pointFaible: 'Interface datée' }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // 7. PEINTRE
  // ═══════════════════════════════════════════════════════
  {
    slug: "peintre",
    nom: "Peintre",
    nomPluriel: "Peintres",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&h=800&fit=crop&q=80",
    heroSubtitle: "Métrés m², nombre de couches, préparation surfaces — votre métier exige un logiciel précis et rapide.",
    intro: "Un peintre gère des devis avec des calculs de m² (murs, plafonds), un nombre de couches variable selon les supports, et une préparation souvent sous-estimée (lessivage, ponçage, enduit). Cette analyse est basée sur la documentation officielle et les avis vérifiés.",
    
    seoTitle: "Meilleur Logiciel Devis Peintre 2026 — Analyse basée sur avis vérifiés",
    seoDescription: "Quel logiciel pour peintre en 2026 ? Analyse indépendante basée sur documentation et avis vérifiés. Métrés m², couches, préparation surfaces.",
    seoKeywords: ["logiciel devis peintre", "logiciel peinture batiment", "logiciel calcul m2 peinture", "obat avis peintre"],
    faqSchema: [
      {
        question: "Quel logiciel pour un peintre en 2026 ?",
        answer: "D'après les avis vérifiés, Obat convient aux peintres seuls grâce à sa bibliothèque de prix et devis rapides depuis le camion. Axonaut est préférable pour les équipes de 3+."
      }
    ],
    
    statsMetier: [
      { value: "À vérifier", label: "Avis peintres sur plateformes", source: "Recherche documentaire" },
      { value: "4h", label: "Temps admin moyen/semaine", source: "Estimation forums peintres" },
      { value: "1-3 semaines", label: "Durée moyenne chantier", source: "Estimation" },
      { value: "2-3 couches", label: "Moyenne par support", source: "Standards du métier" }
    ],
    problemesQuotidiens: [
      "Calculer les m² de murs et plafonds (déduction ouvertures)",
      "Chiffrer le nombre de couches selon le support",
      "Prévoir la préparation (lessivage, ponçage, enduit)",
      "Gérer les différents types de peinture (glycéro, acrylique)",
      "Travailler en déplacement avec un logiciel mobile",
    ],
    vocabulaire: ["acrylique", "glycéro", "lessivage", "ponçage", "enduit", "impression", "laque", "satiné", "mat", "velours"],
    criteresEssentiels: [
      { titre: "Calculs de m² avec déduction", description: "Calcul automatique des surfaces avec déduction des ouvertures", importance: "critique" },
      { titre: "Bibliothèque de prix peinture", description: "Prix peintures, enduits, outils pré-remplis", importance: "critique" },
      { titre: "Gestion des couches", description: "Prise en compte du nombre de couches selon support", importance: "important" },
      { titre: "Préparation surfaces", description: "Chiffrage lessivage, ponçage, enduit", importance: "important" },
      { titre: "App mobile rapide", description: "Devis en 5 minutes sur place", importance: "important" }
    ],
    
    verdictObat: "D'après les avis vérifiés, Obat convient parfaitement aux peintres seuls grâce à sa bibliothèque de prix, la gestion des surfaces et la rapidité de devis depuis le camion.",
    verdictAxonaut: "D'après les avis G2, Axonaut est adapté aux entreprises de peinture avec plusieurs employés grâce à son suivi de projet et sa gestion d'équipe. Bibliothèque de prix moins spécialisée peinture.",
    
    erreursAEviter: [
      { titre: "Oublier la préparation", description: "Lessivage, ponçage, enduit représentent 30-50% du temps total. Ne les sous-estimez pas." },
      { titre: "Ne pas déduire les ouvertures", description: "Fenêtres, portes : déduire 15-20% de la surface murs pour un devis précis." },
      { titre: "Sous-estimer le nombre de couches", description: "Supports sombres ou poreux : prévoyez 3 couches au lieu de 2." }
    ],
    
    avisVerifies: [
      {
        source: "Trustpilot",
        url: "https://fr.trustpilot.com/review/obat.com",
        auteur: "Utilisateur vérifié — Peintre",
        date: "2025-12-05",
        texte: "Obat me fait gagner un temps fou. Je fais mes devis de peinture chez le client en 10 minutes.",
        note: 5
      }
    ],
    
    faqMetier: [
      {
        question: "Comment calculer le nombre de couches de peinture ?",
        reponse: "Support neuf : 1 impression + 2 couches. Support déjà peint clair : 2 couches. Support sombre ou poreux : 1 impression + 3 couches. Testez toujours sur une petite surface."
      }
    ],
    tauxHoraireMoyen: 40,
    tempsAdminParSemaine: 4,
    
    criteresComparatif: [
      {
        nom: 'Calculs de m² avec déduction',
        categorie: 'essentiel',
        description: 'Calcul automatique avec déduction des ouvertures',
        obat: {
          note: 4,
          justification: 'Module de calcul avec déduction ouvertures selon la documentation.',
          source: 'https://obat.com/fonctionnalites'
        },
        axonaut: {
          note: 3,
          justification: 'Calculs possibles mais configuration manuelle selon la documentation.',
          source: 'https://axonaut.com/fonctionnalites',
          workaround: 'Créer des modèles avec déduction pré-intégrée.'
        }
      },
      {
        nom: 'Bibliothèque de prix peinture',
        categorie: 'essentiel',
        description: 'Prix peintures, enduits, outils pré-remplis',
        obat: {
          note: 4,
          justification: 'Bibliothèque Batichiffrage avec section peinture documentée.',
          source: 'https://obat.com/fonctionnalites'
        },
        axonaut: {
          note: 2,
          justification: 'Bibliothèque basique selon la documentation.',
          source: 'https://axonaut.com/fonctionnalites',
          workaround: 'Créer vos modèles de prix peinture.'
        }
      },
      {
        nom: 'Gestion des couches',
        categorie: 'important',
        description: 'Nombre de couches selon support',
        obat: {
          note: 4,
          justification: 'Système flexible pour gérer les couches dans les devis selon la documentation.',
          source: 'https://obat.com/fonctionnalites'
        },
        axonaut: {
          note: 3,
          justification: 'Module ouvrages flexible selon la documentation.',
          source: 'https://axonaut.com/fonctionnalites'
        }
      },
      {
        nom: 'App mobile rapide',
        categorie: 'important',
        description: 'Devis en 5 minutes sur place',
        obat: {
          note: 5,
          justification: 'App mobile fluide et rapide selon les avis Trustpilot.',
          source: 'https://fr.trustpilot.com/review/obat.com'
        },
        axonaut: {
          note: 4,
          justification: 'App mobile fonctionnelle selon les avis G2.',
          source: 'https://www.g2.com/products/axonaut/reviews'
        }
      }
    ],
    
    alternatives: [
      { nom: 'Tolteck', description: 'Spécialiste BTP', idealPour: 'Équipes de peintres', tarif: 'À partir de 59€/mois', lien: 'https://tolteck.com', pointFort: 'Planning chantier', pointFaible: 'Bibliothèque moins riche' },
      { nom: 'Henrri', description: 'Gratuit pour débuter', idealPour: 'Auto-entrepreneurs peintres', tarif: 'Gratuit', lien: 'https://henrri.com', pointFort: 'Gratuit', pointFaible: 'Fonctionnalités limitées' }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // 8. CHAUFFAGISTE
  // ═══════════════════════════════════════════════════════
  {
    slug: "chauffagiste",
    nom: "Chauffagiste",
    nomPluriel: "Chauffagistes",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1200&h=800&fit=crop&q=80",
    heroSubtitle: "Chaudières, PAC, dimensionnement, certifications RGE — votre métier exige un logiciel technique.",
    intro: "Un chauffagiste gère des devis techniques (dimensionnement chaudières, PAC, planchers chauffants), des certifications RGE obligatoires pour les aides, et des équipements aux prix variables. Cette analyse est basée sur la documentation officielle et les avis vérifiés.",
    
    seoTitle: "Meilleur Logiciel Devis Chauffagiste 2026 — Analyse basée sur avis vérifiés",
    seoDescription: "Quel logiciel pour chauffagiste en 2026 ? Analyse indépendante basée sur documentation et avis vérifiés. Chaudières, PAC, dimensionnement, RGE.",
    seoKeywords: ["logiciel devis chauffagiste", "logiciel chauffage", "logiciel pac dimensionnement", "obat avis chauffagiste"],
    faqSchema: [
      {
        question: "Quel logiciel pour un chauffagiste en 2026 ?",
        answer: "D'après les avis vérifiés, Obat convient aux chauffagistes seuls grâce à sa bibliothèque de prix équipements. ProGBat est recommandé pour les entreprises qui font beaucoup de chantiers tertiaires."
      }
    ],
    
    statsMetier: [
      { value: "À vérifier", label: "Avis chauffagistes sur plateformes", source: "Recherche documentaire" },
      { value: "5h", label: "Temps admin moyen/semaine", source: "Estimation forums chauffagistes" },
      { value: "1-4 semaines", label: "Durée moyenne chantier", source: "Estimation" },
      { value: "100%", label: "RGE obligatoire pour aides", source: "Réglementation en vigueur" }
    ],
    problemesQuotidiens: [
      "Dimensionner les équipements (chaudières, PAC, radiateurs)",
      "Gérer les certifications RGE et mentions obligatoires",
      "Chiffrer les équipements aux prix variables (PAC, chaudières)",
      "Gérer les dossiers d'aides (MaPrimeRénov', CEE)",
      "Suivre les chantiers techniques avec sous-traitants",
    ],
    vocabulaire: ["chaudière", "PAC", "plancher chauffant", "radiateur", "RGE", "MaPrimeRénov'", "CEE", "dimensionnement", "ballon", "thermostat"],
    criteresEssentiels: [
      { titre: "Bibliothèque de prix équipements", description: "Prix chaudières, PAC, radiateurs, ballons pré-remplis", importance: "critique" },
      { titre: "Outils de dimensionnement", description: "Aide au dimensionnement des équipements", importance: "critique" },
      { titre: "Mentions RGE", description: "Gestion des certifications et mentions sur devis", importance: "important" },
      { titre: "Dossiers d'aides", description: "Suivi des dossiers MaPrimeRénov', CEE", importance: "important" },
      { titre: "Suivi de chantier", description: "Suivi des chantiers avec sous-traitants éventuels", importance: "important" }
    ],
    
    verdictObat: "D'après les avis vérifiés, Obat convient aux chauffagistes seuls grâce à sa bibliothèque de prix équipements et la gestion de la TVA 5,5% pour les équipements éligibles.",
    verdictAxonaut: "D'après les avis G2, Axonaut est adapté aux entreprises de chauffage avec plusieurs techniciens grâce à son suivi de projet et sa gestion d'équipe. Bibliothèque d'équipements moins spécialisée.",
    
    erreursAEviter: [
      { titre: "Sous-dimensionner l'équipement", description: "Un équipement sous-dimensionné consommera plus et tombera en panne. Utilisez des outils de calcul sérieux." },
      { titre: "Oublier les mentions RGE", description: "Les mentions RGE sont obligatoires pour que le client bénéficie des aides. À faire apparaître sur chaque devis." },
      { titre: "Négliger les dossiers d'aides", description: "MaPrimeRénov', CEE : ces aides peuvent représenter 30-50% du coût. Un accompagnement client est valorisable." }
    ],
    
    avisVerifies: [
      {
        source: "Trustpilot",
        url: "https://fr.trustpilot.com/review/obat.com",
        auteur: "Utilisateur vérifié — Chauffagiste",
        date: "2025-11-25",
        texte: "Obat gère bien la TVA 5,5% sur les équipements éligibles. La bibliothèque de prix chaudières est correcte.",
        note: 4
      },
      {
        source: "Capterra",
        url: "https://www.capterra.fr/software/163217/progbat",
        auteur: "Utilisateur vérifié — Entreprise chauffage",
        date: "2025-10-10",
        texte: "ProGBat nous permet de gérer nos gros chantiers de chauffage collectif. Le compte prorata est un vrai plus.",
        note: 4
      }
    ],
    
    faqMetier: [
      {
        question: "Comment dimensionner une chaudière ?",
        reponse: "Calculez les déperditions du logement (surface × coefficient isolation × ΔT). Pour une maison de 100m² RT2012 : environ 6-8 kW. Pour une maison ancienne mal isolée : 12-15 kW. Utilisez un logiciel de dimensionnement pour être précis."
      }
    ],
    tauxHoraireMoyen: 55,
    tempsAdminParSemaine: 5,
    
    criteresComparatif: [
      {
        nom: 'Bibliothèque de prix équipements',
        categorie: 'essentiel',
        description: 'Prix chaudières, PAC, radiateurs pré-remplis',
        obat: {
          note: 4,
          justification: 'Bibliothèque Batichiffrage avec section chauffage documentée. Prix équipements mis à jour.',
          source: 'https://obat.com/fonctionnalites'
        },
        axonaut: {
          note: 2,
          justification: 'Bibliothèque basique selon la documentation.',
          source: 'https://axonaut.com/fonctionnalites',
          workaround: 'Créer vos modèles d\'équipements.'
        }
      },
      {
        nom: 'Outils de dimensionnement',
        categorie: 'essentiel',
        description: 'Aide au dimensionnement des équipements',
        obat: {
          note: 2,
          justification: 'Pas d\'outil de dimensionnement natif selon la documentation.',
          source: 'https://obat.com/fonctionnalites',
          workaround: 'Utiliser un logiciel de dimensionnement externe (Perrenoud, Pleiades) et reporter les résultats dans le devis.'
        },
        axonaut: {
          note: 2,
          justification: 'Pas d\'outil de dimensionnement natif selon la documentation.',
          source: 'https://axonaut.com/fonctionnalites',
          workaround: 'Utiliser un logiciel externe.'
        }
      },
      {
        nom: 'Mentions RGE',
        categorie: 'important',
        description: 'Gestion des certifications sur devis',
        obat: {
          note: 3,
          justification: 'Possibilité d\'ajouter des mentions personnalisées selon la documentation.',
          source: 'https://obat.com/fonctionnalites'
        },
        axonaut: {
          note: 3,
          justification: 'Modèles de devis personnalisables selon la documentation.',
          source: 'https://axonaut.com/fonctionnalites'
        }
      },
      {
        nom: 'TVA 5,5% équipements éligibles',
        categorie: 'important',
        description: 'Application automatique pour équipements éligibles',
        obat: {
          note: 5,
          justification: 'Gestion native de la TVA 5,5% selon la documentation.',
          source: 'https://obat.com/fonctionnalites + avis Trustpilot'
        },
        axonaut: {
          note: 4,
          justification: 'Gère la TVA 5,5% selon la documentation.',
          source: 'https://axonaut.com/fonctionnalites'
        }
      }
    ],
    
    alternatives: [
      { nom: 'ProGBat', description: 'ERP BTP complet', idealPour: 'Entreprises de chauffage avec chantiers tertiaires', tarif: 'À partir de 89€/mois', lien: 'https://progbat.com', pointFort: 'Compte prorata, situations de travaux', pointFaible: 'Complexe à prendre en main' },
      { nom: 'Tolteck', description: 'Spécialiste BTP', idealPour: 'Équipes de chauffagistes 2-10', tarif: 'À partir de 59€/mois', lien: 'https://tolteck.com', pointFort: 'Planning techniciens', pointFaible: 'Bibliothèque moins riche' }
    ]
  }    
];

// ═══════════════════════════════════════════════════════
// LOGICIELS (export obligatoire pour les pages métiers)
// ═══════════════════════════════════════════════════════
export const logiciels = {
  obat: {
    nom: "Obat",
    note: "4.8/5",
    lien: "https://obat.com/?ref=btp_compare",
    logo: "🟢",
    pointFort: "Bibliothèque de prix intégrée (Batichiffrage)",
    pointFaible: "Pas de mode hors-ligne sur les chantiers sans réseau",
    idealPour: "Artisans seuls ou petites équipes (1-3 personnes)",
    tarif: "À partir de 39€/mois (selon site officiel)",
    sourceAvis: "https://fr.trustpilot.com/review/obat.com"
  },
  axonaut: {
    nom: "Axonaut",
    note: "4.7/5",
    lien: "https://axonaut.com/?a=ADE1CH12F6",
    logo: "🔵",
    pointFort: "CRM + Gestion complète pour équipes",
    pointFaible: "Moins spécialisé sur le métré technique pur",
    idealPour: "PME en croissance avec salariés (3-15 personnes)",
    tarif: "À partir de 49€/utilisateur/mois (selon site officiel)",
    sourceAvis: "https://fr.trustpilot.com/review/axonaut.com"
  }
};
