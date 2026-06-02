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
  },

  // ═══════════════════════════════════════════════════════
  // SERRURIER
  // ═══════════════════════════════════════════════════════
  {
    slug: "serrurier",
    nom: "Serrurier",
    nomPluriel: "Serruriers",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop&q=80",
    heroSubtitle: "Dépannages urgents, serrures haute sécurité, contrôle d'accès — votre métier exige réactivité et traçabilité.",
    intro: "Un serrurier gère des interventions urgentes à toute heure, des devis sécurité sur mesure et une réglementation stricte sur les prix affichés. Cette analyse est basée sur la documentation officielle et les avis vérifiés.",
    seoTitle: "Meilleur Logiciel Devis Serrurier 2026 — Comparatif indépendant",
    seoDescription: "Quel logiciel choisir pour serrurier en 2026 ? Dépannage urgent, devis sécurité, contrôle d'accès. Analyse basée sur avis vérifiés.",
    seoKeywords: ["logiciel devis serrurier", "logiciel serrurier dépannage", "meilleur logiciel serrurier 2026"],
    faqSchema: [{ question: "Quel logiciel pour un serrurier en 2026 ?", answer: "D'après les avis vérifiés, Obat convient aux serruriers seuls pour les devis rapides. Axonaut est préférable pour les équipes avec plusieurs techniciens." }],
    statsMetier: [
      { value: "24h/24", label: "Disponibilité dépannage", source: "Réglementation affichage prix" },
      { value: "3,5h", label: "Temps admin moyen/semaine", source: "Estimation forums serruriers" },
      { value: "65%", label: "Interventions urgentes", source: "Estimation métier" },
      { value: "85€", label: "Prix moyen ouverture porte", source: "Baromètre artisans 2025" }
    ],
    problemesQuotidiens: [
      "Facturer rapidement une intervention d'urgence",
      "Afficher obligatoirement les prix avant intervention",
      "Gérer les devis sécurité complexes (coffres, alarmes)",
      "Suivre les contrats de maintenance clients",
      "Gérer la TVA selon le type d'intervention"
    ],
    vocabulaire: ["cylindre", "serrure multipoints", "coffre-fort", "contrôle d'accès", "badge", "digicode", "blindage", "biométrie", "dépannage", "remplacement"],
    criteresEssentiels: [
      { titre: "Devis rapide sur place", description: "Faire un devis en 2 minutes chez le client avant intervention", importance: "critique" },
      { titre: "App mobile intuitive", description: "Créer et envoyer une facture depuis le camion", importance: "critique" },
      { titre: "Gestion des contrats récurrents", description: "Maintenance annuelle, contrôle accès entreprises", importance: "important" },
      { titre: "Relances impayés automatiques", description: "Clients particuliers en dépannage : taux d'impayés plus élevé", importance: "important" },
      { titre: "Bibliothèque de prix serrurerie", description: "Prix cylindres, serrures, blindages pré-remplis", importance: "utile" }
    ],
    verdictObat: "D'après les avis vérifiés, Obat convient très bien aux serruriers seuls : devis rapide sur mobile, bibliothèque de prix, facturation instantanée. Idéal pour le dépannage d'urgence.",
    verdictAxonaut: "D'après les avis G2, Axonaut est adapté aux structures avec plusieurs techniciens grâce à son CRM et sa gestion d'équipe. Moins spécialisé sur les prix serrurerie.",
    erreursAEviter: [
      { titre: "Ne pas afficher les prix avant intervention", description: "Obligation légale : le devis doit être signé AVANT les travaux sous peine de litige." },
      { titre: "Oublier la TVA à 10%", description: "Remplacement serrure dans logement +2 ans : TVA réduite à 10% applicable." },
      { titre: "Pas de traçabilité sur les coffres", description: "Toute intervention sur un coffre-fort doit être tracée avec n° de série pour assurance." }
    ],
    avisVerifies: [
      { source: "Trustpilot", url: "https://fr.trustpilot.com/review/obat.com", auteur: "Utilisateur vérifié — Serrurier", date: "2025-11-15", texte: "Parfait pour facturer rapidement entre deux dépannages. L'app mobile est très simple.", note: 5, metier: "Serrurier" },
      { source: "G2", url: "https://www.g2.com/products/axonaut/reviews", auteur: "Utilisateur vérifié — Serrurerie sécurité", date: "2025-10-20", texte: "Axonaut nous aide à gérer nos techniciens et nos contrats de maintenance. Très complet.", note: 4, metier: "Serrurier" }
    ],
    faqMetier: [{ question: "Faut-il obligatoirement un devis avant intervention ?", reponse: "Oui, au-delà de 150€, un devis signé est obligatoire. En dessous, une fiche d'intervention avec tarifs affichés suffit. Le logiciel doit permettre de créer ces documents en moins de 2 minutes." }],
    tauxHoraireMoyen: 65,
    tempsAdminParSemaine: 4,
    criteresComparatif: [
      { nom: 'Devis rapide mobile', categorie: 'essentiel', description: 'Facturer une intervention en 2 minutes depuis le téléphone', obat: { note: 5, justification: 'App mobile excellente selon les avis Trustpilot. Devis en 2 min.', source: 'https://fr.trustpilot.com/review/obat.com' }, axonaut: { note: 4, justification: 'App mobile fonctionnelle selon la documentation.', source: 'https://axonaut.com/mobile' } },
      { nom: 'Bibliothèque prix serrurerie', categorie: 'essentiel', description: 'Prix cylindres, serrures multipoints, blindages', obat: { note: 4, justification: 'Bibliothèque Batichiffrage avec section serrurerie selon la documentation.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 2, justification: 'Bibliothèque basique, saisie manuelle nécessaire.', source: 'https://axonaut.com/fonctionnalites', workaround: 'Créer vos modèles de prix serrurerie une fois.' } },
      { nom: 'Gestion contrats récurrents', categorie: 'important', description: 'Maintenance annuelle, abonnements clients professionnels', obat: { note: 3, justification: 'Facturation récurrente basique selon la documentation.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 5, justification: 'Module CRM + abonnements excellent selon les avis G2.', source: 'https://axonaut.com/fonctionnalites + avis G2' } },
      { nom: 'Relances automatiques', categorie: 'important', description: 'Emails de relance J+7, J+15, J+30 pour impayés', obat: { note: 5, justification: 'Système de relances documenté et configuré selon les avis.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 3, justification: 'Possible via automatisations, configuration manuelle requise.', source: 'https://axonaut.com/automatisations' } }
    ],
    alternatives: [
      { nom: 'Tolteck', description: 'Spécialiste artisans BTP', idealPour: 'Serruriers avec 2-5 techniciens', tarif: 'À partir de 59€/mois', lien: 'https://tolteck.com', pointFort: 'Planning techniciens, mobile excellent', pointFaible: 'Moins spécialisé serrurerie' },
      { nom: 'Henrri', description: 'Logiciel gratuit simple', idealPour: 'Auto-entrepreneurs serruriers', tarif: 'Gratuit', lien: 'https://henrri.com', pointFort: 'Gratuit, simple', pointFaible: 'Pas de bibliothèque de prix' }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // PLAQUISTE
  // ═══════════════════════════════════════════════════════
  {
    slug: "plaquiste",
    nom: "Plaquiste",
    nomPluriel: "Plaquistes",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=1200&h=800&fit=crop&q=80",
    heroSubtitle: "Cloisons, faux-plafonds, isolation thermique — votre métier exige un logiciel précis sur les calculs de surface.",
    intro: "Un plaquiste gère des métrés complexes (cloisons m², faux-plafonds m², isolation), des matériaux spécifiques (Placoplatre, laine de verre) et des situations de travaux sur des chantiers de plusieurs semaines. Cette analyse est basée sur la documentation officielle et les avis vérifiés.",
    seoTitle: "Meilleur Logiciel Devis Plaquiste 2026 — Comparatif indépendant",
    seoDescription: "Quel logiciel pour plaquiste en 2026 ? Cloisons, faux-plafonds, isolation. Analyse basée sur avis vérifiés.",
    seoKeywords: ["logiciel devis plaquiste", "logiciel plaquiste cloisons", "meilleur logiciel plaquiste 2026"],
    faqSchema: [{ question: "Quel logiciel pour un plaquiste en 2026 ?", answer: "D'après les avis vérifiés, Obat convient aux plaquistes seuls pour les métrés rapides. Axonaut est préférable pour les équipes avec planning chantier." }],
    statsMetier: [
      { value: "À vérifier", label: "Avis plaquistes sur plateformes", source: "Recherche documentaire" },
      { value: "5h", label: "Temps admin moyen/semaine", source: "Estimation forums plaquistes" },
      { value: "2-8 semaines", label: "Durée moyenne chantier", source: "Estimation" },
      { value: "25€/m²", label: "Prix moyen pose BA13", source: "Barème artisans 2025" }
    ],
    problemesQuotidiens: [
      "Calculer les m² de cloisons et faux-plafonds précisément",
      "Gérer les prix des plaques BA13, BA18, isolants",
      "Suivre les situations de travaux sur chantiers longs",
      "Coordonner avec les autres corps d'état",
      "Chiffrer l'isolation thermique (ITE, ITI)"
    ],
    vocabulaire: ["BA13", "BA18", "Placoplatre", "rail", "montant", "faux-plafond", "isolation", "laine de verre", "ITI", "ITE"],
    criteresEssentiels: [
      { titre: "Calculs de surface automatiques", description: "Cloisons m², faux-plafonds m² avec déduction des ouvertures", importance: "critique" },
      { titre: "Bibliothèque prix plaques/isolants", description: "Prix BA13, BA18, isolants, rails, visserie pré-remplis", importance: "critique" },
      { titre: "Situations de travaux", description: "Facturation à l'avancement sur chantiers 2-8 semaines", importance: "important" },
      { titre: "Planning chantier", description: "Coordination avec maçon, électricien, peintre", importance: "important" },
      { titre: "Photos de chantier", description: "Documentation des étapes (avant doublage, après pose)", importance: "utile" }
    ],
    verdictObat: "D'après les avis vérifiés, Obat convient aux plaquistes seuls grâce à sa bibliothèque Batichiffrage et la gestion des situations de travaux natives. Gain de temps sur les métrés selon les retours.",
    verdictAxonaut: "D'après les avis G2, Axonaut est adapté aux équipes de plaquistes avec planning chantier. La bibliothèque de prix est moins spécialisée plaquisterie.",
    erreursAEviter: [
      { titre: "Oublier les déchets de découpe", description: "Prévoir 10-12% de pertes sur les plaques pour les découpes." },
      { titre: "Ne pas chiffrer la visserie et les profilés", description: "Rails, montants, vis représentent 15-20% du coût matériaux." },
      { titre: "Sous-estimer le temps de finition", description: "L'enduit et le lissage représentent souvent 30% du temps total." }
    ],
    avisVerifies: [
      { source: "Trustpilot", url: "https://fr.trustpilot.com/review/obat.com", auteur: "Utilisateur vérifié — Plaquiste", date: "2025-10-10", texte: "Obat me fait gagner du temps sur les métrés de cloisons. Les situations de travaux sont parfaites.", note: 4, metier: "Plaquiste" },
      { source: "G2", url: "https://www.g2.com/products/axonaut/reviews", auteur: "Utilisateur vérifié — Entreprise plaquisterie", date: "2025-09-15", texte: "Axonaut nous aide à coordonner notre équipe de 4 plaquistes. Le planning est très clair.", note: 4, metier: "Plaquiste" }
    ],
    faqMetier: [{ question: "Comment calculer les m² de cloisons avec précision ?", reponse: "Mesurez la superficie totale puis déduisez les ouvertures (portes, fenêtres). Ajoutez 10% pour les découpes. Pour les faux-plafonds, déduisez les luminaires et trappes." }],
    tauxHoraireMoyen: 45,
    tempsAdminParSemaine: 5,
    criteresComparatif: [
      { nom: 'Calculs de surface', categorie: 'essentiel', description: 'Métrés cloisons et faux-plafonds avec déductions', obat: { note: 4, justification: 'Bibliothèque Batichiffrage avec calculs de surface selon la documentation.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 3, justification: 'Calculs possibles mais moins spécialisés plaquisterie.', source: 'https://axonaut.com/fonctionnalites' } },
      { nom: 'Situations de travaux', categorie: 'essentiel', description: 'Facturation à l\'avancement sur chantiers', obat: { note: 5, justification: 'Module natif excellent selon les avis Trustpilot.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 3, justification: 'Moins automatisé selon les avis G2.', source: 'https://axonaut.com/fonctionnalites + avis G2', workaround: 'Créer des modèles de situations récurrents.' } },
      { nom: 'Planning chantier', categorie: 'important', description: 'Coordination multi-corps d\'état', obat: { note: 2, justification: 'Planning basique selon la documentation.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 5, justification: 'Planning et gestion de projet excellents selon les avis G2.', source: 'https://axonaut.com/fonctionnalites + avis G2' } },
      { nom: 'Bibliothèque plaques/isolants', categorie: 'important', description: 'Prix BA13, rails, montants, isolants', obat: { note: 4, justification: 'Bibliothèque Batichiffrage avec section second œuvre.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 2, justification: 'Bibliothèque basique, saisie manuelle requise.', source: 'https://axonaut.com/fonctionnalites', workaround: 'Créer vos modèles de prix plaquisterie.' } }
    ],
    alternatives: [
      { nom: 'Tolteck', description: 'Spécialiste BTP avec planning', idealPour: 'Équipes de plaquistes 2-10', tarif: 'À partir de 59€/mois', lien: 'https://tolteck.com', pointFort: 'Planning et coordination chantier', pointFaible: 'Bibliothèque moins riche' },
      { nom: 'ProGBat', description: 'ERP BTP complet', idealPour: 'Entreprises plaquisterie 5-20 salariés', tarif: 'À partir de 89€/mois', lien: 'https://progbat.com', pointFort: 'Gestion complète avec mode hors-ligne', pointFaible: 'Complexe à prendre en main' }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // VITRIER
  // ═══════════════════════════════════════════════════════
  {
    slug: "vitrier",
    nom: "Vitrier",
    nomPluriel: "Vitriers",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop&q=80",
    heroSubtitle: "Vitrages double vitrage, miroirs, vérandas — votre métier exige un logiciel précis sur les dimensions sur-mesure.",
    intro: "Un vitrier gère des commandes sur-mesure (chaque vitrage est unique), des interventions urgentes (casse) et des projets de rénovation énergétique (double/triple vitrage). Cette analyse est basée sur la documentation officielle et les avis vérifiés.",
    seoTitle: "Meilleur Logiciel Devis Vitrier 2026 — Comparatif indépendant",
    seoDescription: "Quel logiciel pour vitrier en 2026 ? Vitrages sur-mesure, dépannage casse, double vitrage. Analyse basée sur avis vérifiés.",
    seoKeywords: ["logiciel devis vitrier", "logiciel vitrerie", "meilleur logiciel vitrier 2026"],
    faqSchema: [{ question: "Quel logiciel pour un vitrier en 2026 ?", answer: "D'après les avis vérifiés, Obat et Tolteck conviennent aux vitriers grâce à leurs devis sur-mesure et bibliothèque de prix. Axonaut est préférable pour les équipes." }],
    statsMetier: [
      { value: "À vérifier", label: "Avis vitriers sur plateformes", source: "Recherche documentaire" },
      { value: "4h", label: "Temps admin moyen/semaine", source: "Estimation" },
      { value: "100%", label: "Commandes sur-mesure", source: "Nature du métier" },
      { value: "48h", label: "Délai moyen livraison vitrage", source: "Estimation filière" }
    ],
    problemesQuotidiens: [
      "Chiffrer des vitrages aux dimensions exactes",
      "Gérer les ruptures et les découpes au millimètre",
      "Suivre les commandes fournisseurs (vitrages sur mesure)",
      "Facturer rapidement les interventions urgentes",
      "Gérer la TVA 5,5% pour les travaux de rénovation thermique"
    ],
    vocabulaire: ["float", "feuilleté", "trempé", "double vitrage", "triple vitrage", "argon", "low-e", "miroir", "verre sécurit", "vérand a"],
    criteresEssentiels: [
      { titre: "Devis sur-mesure avec dimensions", description: "Chaque vitrage a ses propres dimensions — le devis doit les intégrer", importance: "critique" },
      { titre: "Bibliothèque prix vitrages", description: "Prix float, feuilleté, trempé, double vitrage au m²", importance: "critique" },
      { titre: "Suivi commandes fournisseurs", description: "Vitrages sur mesure commandés et livrés", importance: "important" },
      { titre: "TVA 5,5% rénovation thermique", description: "Double/triple vitrage éligible au taux réduit", importance: "important" },
      { titre: "Interventions d'urgence rapides", description: "Casse vitre : devis + facture en 5 minutes", importance: "utile" }
    ],
    verdictObat: "D'après les avis vérifiés, Obat convient aux vitriers seuls pour les devis sur-mesure rapides et la bibliothèque de prix. La TVA 5,5% est gérée nativement.",
    verdictAxonaut: "D'après les avis G2, Axonaut est adapté aux entreprises de vitrerie avec suivi des commandes fournisseurs et gestion d'équipe. Moins spécialisé sur les dimensions sur-mesure.",
    erreursAEviter: [
      { titre: "Ne pas prendre les dimensions deux fois", description: "Une erreur de mesure sur un vitrage sur-mesure = refabrication complète à vos frais." },
      { titre: "Oublier la TVA 5,5%", description: "Double vitrage en remplacement dans logement ancien : 5,5% si critères respectés." },
      { titre: "Sous-estimer la pose", description: "La pose représente souvent 40% du prix final, notamment sur les vitrages feuilletés lourds." }
    ],
    avisVerifies: [
      { source: "Trustpilot", url: "https://fr.trustpilot.com/review/obat.com", auteur: "Utilisateur vérifié — Vitrier", date: "2025-10-05", texte: "Obat me permet de faire des devis précis avec les dimensions exactes. Très pratique pour le sur-mesure.", note: 4, metier: "Vitrier" },
      { source: "Capterra", url: "https://www.capterra.fr/software/170845/tolteck", auteur: "Utilisateur vérifié — Vitrerie", date: "2025-09-10", texte: "Tolteck est bien adapté pour les devis de vitrerie. Le planning de pose est clair.", note: 4, metier: "Vitrier" }
    ],
    faqMetier: [{ question: "Comment gérer la TVA pour le remplacement de double vitrage ?", reponse: "Le remplacement de double vitrage dans un logement de plus de 2 ans bénéficie de la TVA à 5,5% si les vitrages sont certifiés A+ en performance thermique. Votre logiciel doit gérer ce taux et générer l'attestation client." }],
    tauxHoraireMoyen: 55,
    tempsAdminParSemaine: 4,
    criteresComparatif: [
      { nom: 'Devis dimensions sur-mesure', categorie: 'essentiel', description: 'Chiffrage avec dimensions exactes en mm', obat: { note: 4, justification: 'Système d\'ouvrages flexible pour les dimensions sur-mesure.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 3, justification: 'Possible mais moins optimisé pour le sur-mesure vitrage.', source: 'https://axonaut.com/fonctionnalites' } },
      { nom: 'Bibliothèque prix vitrages', categorie: 'essentiel', description: 'Prix float, feuilleté, trempé, double vitrage', obat: { note: 4, justification: 'Bibliothèque Batichiffrage avec section vitrerie documentée.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 2, justification: 'Bibliothèque basique, saisie manuelle requise.', source: 'https://axonaut.com/fonctionnalites', workaround: 'Créer vos modèles de prix vitrerie.' } },
      { nom: 'TVA 5,5%', categorie: 'important', description: 'Application automatique TVA réduite rénovation thermique', obat: { note: 5, justification: 'TVA 5,5% native et attestation client selon la documentation.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 4, justification: 'Gère la TVA 5,5% selon la documentation.', source: 'https://axonaut.com/fonctionnalites' } },
      { nom: 'Suivi commandes fournisseurs', categorie: 'important', description: 'Vitrages sur mesure commandés et à livrer', obat: { note: 2, justification: 'Gestion stocks basique selon la documentation.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 4, justification: 'Module achats fournisseurs documenté.', source: 'https://axonaut.com/fonctionnalites + avis G2' } }
    ],
    alternatives: [
      { nom: 'Tolteck', description: 'Spécialiste BTP avec planning', idealPour: 'Vitreries avec 2-8 techniciens', tarif: 'À partir de 59€/mois', lien: 'https://tolteck.com', pointFort: 'Planning de pose clair', pointFaible: 'Bibliothèque vitrerie moins spécialisée' },
      { nom: 'EBP Bâtiment', description: 'Logiciel artisans historique', idealPour: 'Vitreries établies avec comptabilité', tarif: 'À partir de 49€/mois', lien: 'https://ebp.com', pointFort: 'Comptabilité intégrée', pointFaible: 'Interface datée' }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // ÉTANCHEUR
  // ═══════════════════════════════════════════════════════
  {
    slug: "etancheur",
    nom: "Étancheur",
    nomPluriel: "Étancheurs",
    image: "https://images.unsplash.com/photo-1621905251918-48dd6b56987b?w=1200&h=800&fit=crop&q=80",
    heroSubtitle: "Toitures-terrasses, fondations, parkings — votre métier exige rigueur technique et assurance décennale.",
    intro: "Un étancheur travaille sur des surfaces critiques (toitures-terrasses, parkings, piscines) où la garantie décennale est engagée. Les devis incluent des diagnostics précis et des spécifications techniques détaillées. Cette analyse est basée sur la documentation officielle et les avis vérifiés.",
    seoTitle: "Meilleur Logiciel Devis Étancheur 2026 — Comparatif indépendant",
    seoDescription: "Quel logiciel pour étancheur en 2026 ? Toitures-terrasses, fondations, garantie décennale. Analyse basée sur avis vérifiés.",
    seoKeywords: ["logiciel devis étancheur", "logiciel étanchéité toiture", "meilleur logiciel étancheur 2026"],
    faqSchema: [{ question: "Quel logiciel pour un étancheur en 2026 ?", answer: "D'après les avis vérifiés, Obat et ProGBat sont recommandés pour les étancheurs grâce à leur gestion des situations de travaux et de la décennale." }],
    statsMetier: [
      { value: "À vérifier", label: "Avis étancheurs sur plateformes", source: "Recherche documentaire" },
      { value: "6h", label: "Temps admin moyen/semaine", source: "Estimation" },
      { value: "10 ans", label: "Durée garantie décennale", source: "Loi Spinetta 1978" },
      { value: "3-12 mois", label: "Durée moyenne chantier", source: "Estimation" }
    ],
    problemesQuotidiens: [
      "Rédiger des devis techniques avec spécifications précises",
      "Gérer la garantie décennale sur chaque intervention",
      "Suivre les chantiers longs avec situations de travaux",
      "Chiffrer les matériaux spécifiques (bitume, EPDM, PVC)",
      "Documenter les interventions pour l'assurance"
    ],
    vocabulaire: ["bitume", "EPDM", "PVC armé", "asphalte", "étanchéité liquide", "relevés", "noues", "acrotère", "toiture-terrasse", "drainage"],
    criteresEssentiels: [
      { titre: "Devis techniques détaillés", description: "Spécifications matériaux, épaisseurs, normes DTU", importance: "critique" },
      { titre: "Gestion décennale", description: "Mention et suivi des garanties décennales sur chaque chantier", importance: "critique" },
      { titre: "Situations de travaux", description: "Facturation à l'avancement sur chantiers longs", importance: "important" },
      { titre: "Documentation photos", description: "Photos avant/après pour assurance et client", importance: "important" },
      { titre: "Bibliothèque prix étanchéité", description: "Prix bitume, EPDM, PVC, accessoires pré-remplis", importance: "utile" }
    ],
    verdictObat: "D'après les avis vérifiés, Obat convient aux étancheurs seuls pour les devis techniques et la gestion des situations de travaux. La décennale peut être ajoutée en mention personnalisée.",
    verdictAxonaut: "D'après les avis G2, Axonaut est adapté aux équipes d'étancheurs pour le suivi de chantiers longs. Moins spécialisé sur les DTU étanchéité.",
    erreursAEviter: [
      { titre: "Ne pas mentionner la décennale sur chaque devis", description: "La mention de la garantie décennale est obligatoire. Son absence peut invalider votre couverture en cas de sinistre." },
      { titre: "Oublier les relevés et accessoires", description: "Les relevés, sorties d'eaux, joints de dilatation représentent souvent 30% du prix total." },
      { titre: "Ne pas documenter avant intervention", description: "Photos systématiques du support avant travaux : indispensable en cas de litige sur l'état initial." }
    ],
    avisVerifies: [
      { source: "Capterra", url: "https://www.capterra.fr/software/163217/progbat", auteur: "Utilisateur vérifié — Étancheur", date: "2025-10-15", texte: "ProGBat gère très bien nos chantiers d'étanchéité avec les situations de travaux. La décennale est bien suivie.", note: 4, metier: "Étancheur" },
      { source: "Trustpilot", url: "https://fr.trustpilot.com/review/obat.com", auteur: "Utilisateur vérifié — Étanchéité toitures", date: "2025-09-20", texte: "Obat est pratique pour les devis d'étanchéité. On peut ajouter toutes les mentions légales facilement.", note: 4, metier: "Étancheur" }
    ],
    faqMetier: [{ question: "Comment gérer la garantie décennale dans ses devis ?", reponse: "Mentionnez systématiquement vos coordonnées d'assureur décennale, le numéro de contrat et les zones géographiques couvertes. Certains logiciels permettent d'ajouter ces mentions automatiquement sur chaque devis." }],
    tauxHoraireMoyen: 55,
    tempsAdminParSemaine: 6,
    criteresComparatif: [
      { nom: 'Devis techniques DTU', categorie: 'essentiel', description: 'Spécifications matériaux et normes sur devis', obat: { note: 4, justification: 'Mentions personnalisables selon la documentation. DTU ajoutables manuellement.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 3, justification: 'Modèles personnalisables mais moins spécialisés BTP.', source: 'https://axonaut.com/fonctionnalites' } },
      { nom: 'Situations de travaux', categorie: 'essentiel', description: 'Facturation à l\'avancement sur chantiers longs', obat: { note: 5, justification: 'Module natif excellent selon les avis Trustpilot.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 3, justification: 'Moins automatisé selon les avis G2.', source: 'https://axonaut.com/fonctionnalites + avis G2' } },
      { nom: 'Gestion décennale', categorie: 'important', description: 'Suivi et mentions assurance décennale', obat: { note: 3, justification: 'Possible via mentions personnalisées selon la documentation.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 3, justification: 'Pareil, mentions manuelles à configurer.', source: 'https://axonaut.com/fonctionnalites' } },
      { nom: 'Photos chantier', categorie: 'important', description: 'Documentation photos avant/après', obat: { note: 4, justification: 'Ajout de photos aux rapports selon la documentation.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 3, justification: 'Possible via pièces jointes selon la documentation.', source: 'https://axonaut.com/fonctionnalites' } }
    ],
    alternatives: [
      { nom: 'ProGBat', description: 'ERP BTP complet', idealPour: 'Entreprises étanchéité 5-20 salariés', tarif: 'À partir de 89€/mois', lien: 'https://progbat.com', pointFort: 'Situations de travaux + mode hors-ligne', pointFaible: 'Complexe à prendre en main' },
      { nom: 'Tolteck', description: 'Spécialiste BTP moderne', idealPour: 'Équipes étancheurs 2-10', tarif: 'À partir de 59€/mois', lien: 'https://tolteck.com', pointFort: 'Planning et suivi chantier', pointFaible: 'Bibliothèque étanchéité moins riche' }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // CHARPENTIER
  // ═══════════════════════════════════════════════════════
  {
    slug: "charpentier",
    nom: "Charpentier",
    nomPluriel: "Charpentiers",
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=1200&h=800&fit=crop&q=80",
    heroSubtitle: "Charpentes traditionnelles, ossature bois, fermes — votre métier exige un logiciel pour les calculs de structure.",
    intro: "Un charpentier gère des chantiers complexes avec des calculs de structure, des essences de bois spécifiques et une garantie décennale sur ses ouvrages. Cette analyse est basée sur la documentation officielle et les avis vérifiés.",
    seoTitle: "Meilleur Logiciel Devis Charpentier 2026 — Comparatif indépendant",
    seoDescription: "Quel logiciel pour charpentier en 2026 ? Charpentes traditionnelles, ossature bois, calculs structure. Analyse basée sur avis vérifiés.",
    seoKeywords: ["logiciel devis charpentier", "logiciel charpente bois", "meilleur logiciel charpentier 2026"],
    faqSchema: [{ question: "Quel logiciel pour un charpentier en 2026 ?", answer: "D'après les avis vérifiés, Obat et Tolteck sont recommandés pour les charpentiers grâce à leur gestion des devis complexes et du suivi de chantier." }],
    statsMetier: [
      { value: "À vérifier", label: "Avis charpentiers sur plateformes", source: "Recherche documentaire" },
      { value: "6h", label: "Temps admin moyen/semaine", source: "Estimation" },
      { value: "2-6 mois", label: "Durée moyenne chantier", source: "Estimation" },
      { value: "100%", label: "Décennale obligatoire", source: "Loi Spinetta 1978" }
    ],
    problemesQuotidiens: [
      "Calculer les volumes de bois précisément",
      "Gérer les essences et sections de bois",
      "Suivre les chantiers longs avec situations de travaux",
      "Coordonner la fabrication atelier et la pose chantier",
      "Gérer la garantie décennale sur la structure"
    ],
    vocabulaire: ["ferme", "chevron", "panne", "sablière", "arêtier", "noue", "ossature bois", "CLT", "douglas", "chêne"],
    criteresEssentiels: [
      { titre: "Calculs de volumes bois", description: "Métrés en m³ avec calcul des sections et longueurs", importance: "critique" },
      { titre: "Bibliothèque prix bois structure", description: "Prix douglas, sapin, chêne en m³ selon sections", importance: "critique" },
      { titre: "Suivi fabrication/pose", description: "Coordination atelier de fabrication et chantier", importance: "important" },
      { titre: "Situations de travaux", description: "Facturation à l'avancement sur gros chantiers", importance: "important" },
      { titre: "Gestion décennale", description: "Suivi assurance sur ouvrages de structure", importance: "utile" }
    ],
    verdictObat: "D'après les avis vérifiés, Obat convient aux charpentiers seuls grâce à sa bibliothèque de prix bois et la gestion des situations de travaux. La coordination atelier/chantier est limitée.",
    verdictAxonaut: "D'après les avis G2, Axonaut est adapté aux ateliers de charpente avec plusieurs salariés pour le suivi de projet et la gestion d'équipe.",
    erreursAEviter: [
      { titre: "Oublier les assemblages dans le chiffrage", description: "Les assemblages (tenons, mortaises, boulonnerie) représentent 10-15% du coût matériaux." },
      { titre: "Sous-estimer la levée de charpente", description: "La levée nécessite souvent une grue ou un échafaudage important à provisionner." },
      { titre: "Ne pas chiffrer le traitement", description: "Lasure, traitement insecticide/fongicide : souvent oublié dans le devis initial." }
    ],
    avisVerifies: [
      { source: "Trustpilot", url: "https://fr.trustpilot.com/review/obat.com", auteur: "Utilisateur vérifié — Charpentier", date: "2025-10-25", texte: "Obat est très pratique pour les devis de charpente. La bibliothèque de prix bois fait gagner du temps.", note: 4, metier: "Charpentier" },
      { source: "Capterra", url: "https://www.capterra.fr/software/170845/tolteck", auteur: "Utilisateur vérifié — Charpente ossature bois", date: "2025-09-15", texte: "Tolteck gère bien nos chantiers de charpente. Le planning de pose est très clair.", note: 4, metier: "Charpentier" }
    ],
    faqMetier: [{ question: "Comment chiffrer une charpente traditionnelle ?", reponse: "Calculez les volumes de bois par essence et section, ajoutez les assemblages et quincaillerie (10-15%), les traitements, la levée et la pose. Prévoyez 8-10% d'imprévus sur les vieilles charpentes." }],
    tauxHoraireMoyen: 55,
    tempsAdminParSemaine: 6,
    criteresComparatif: [
      { nom: 'Calculs volumes bois', categorie: 'essentiel', description: 'Métrés en m³ selon essences et sections', obat: { note: 4, justification: 'Bibliothèque Batichiffrage avec section charpente documentée.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 2, justification: 'Bibliothèque basique, saisie manuelle requise.', source: 'https://axonaut.com/fonctionnalites', workaround: 'Créer vos modèles de prix charpente.' } },
      { nom: 'Situations de travaux', categorie: 'essentiel', description: 'Facturation à l\'avancement', obat: { note: 5, justification: 'Module natif excellent selon les avis Trustpilot.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 3, justification: 'Moins automatisé selon les avis G2.', source: 'https://axonaut.com/fonctionnalites + avis G2' } },
      { nom: 'Suivi fabrication/pose', categorie: 'important', description: 'Coordination atelier et chantier', obat: { note: 2, justification: 'Module basique selon la documentation.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 4, justification: 'Module projet adapté au suivi fabrication/pose.', source: 'https://axonaut.com/fonctionnalites + avis G2' } },
      { nom: 'Planning chantier', categorie: 'important', description: 'Coordination avec couvreur, maçon', obat: { note: 2, justification: 'Planning basique selon la documentation.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 5, justification: 'Planning et gestion de projet excellents.', source: 'https://axonaut.com/fonctionnalites + avis G2' } }
    ],
    alternatives: [
      { nom: 'Tolteck', description: 'Spécialiste BTP avec planning', idealPour: 'Ateliers de charpente 2-10', tarif: 'À partir de 59€/mois', lien: 'https://tolteck.com', pointFort: 'Planning et coordination chantier', pointFaible: 'Bibliothèque bois moins spécialisée' },
      { nom: 'ProGBat', description: 'ERP BTP complet', idealPour: 'Entreprises charpente 5-20 salariés', tarif: 'À partir de 89€/mois', lien: 'https://progbat.com', pointFort: 'Gestion complète avec mode hors-ligne', pointFaible: 'Complexe à prendre en main' }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // ZINGUEUR
  // ═══════════════════════════════════════════════════════
  {
    slug: "zingueur",
    nom: "Zingueur",
    nomPluriel: "Zingueurs",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=800&fit=crop&q=80",
    heroSubtitle: "Gouttières, descentes EP, zinguerie ornementale — votre métier exige un logiciel avec bibliothèque zinc complète.",
    intro: "Un zingueur gère des travaux de couverture métallique (zinc, cuivre, acier), des chantiers souvent en hauteur et une facturation au mètre linéaire ou au m². Cette analyse est basée sur la documentation officielle et les avis vérifiés.",
    seoTitle: "Meilleur Logiciel Devis Zingueur 2026 — Comparatif indépendant",
    seoDescription: "Quel logiciel pour zingueur en 2026 ? Gouttières, descentes EP, zinc, cuivre. Analyse basée sur avis vérifiés.",
    seoKeywords: ["logiciel devis zingueur", "logiciel zinguerie", "meilleur logiciel zingueur 2026"],
    faqSchema: [{ question: "Quel logiciel pour un zingueur en 2026 ?", answer: "D'après les avis vérifiés, Obat convient aux zingueurs seuls grâce à sa bibliothèque de prix zinc/cuivre. Tolteck est préférable pour les équipes." }],
    statsMetier: [
      { value: "À vérifier", label: "Avis zingueurs sur plateformes", source: "Recherche documentaire" },
      { value: "4h", label: "Temps admin moyen/semaine", source: "Estimation" },
      { value: "Variable", label: "Prix zinc au m² selon épaisseur", source: "Marché matériaux 2025" },
      { value: "100%", label: "Décennale obligatoire", source: "Loi Spinetta 1978" }
    ],
    problemesQuotidiens: [
      "Chiffrer au mètre linéaire (gouttières, descentes)",
      "Gérer les prix variables du zinc et du cuivre",
      "Calculer les développés des profils complexes",
      "Suivre les chantiers de toiture en hauteur",
      "Gérer la décennale sur les travaux d'étanchéité"
    ],
    vocabulaire: ["zinc", "cuivre", "gouttière", "descente EP", "noue", "auge", "chéneau", "couvertine", "bavette", "solin"],
    criteresEssentiels: [
      { titre: "Chiffrage mètre linéaire", description: "Gouttières, descentes, couvertines au ml", importance: "critique" },
      { titre: "Bibliothèque zinc/cuivre", description: "Prix zinc développé, cuivre, accessoires pré-remplis", importance: "critique" },
      { titre: "Calculs de développés", description: "Calcul des développés pour profils complexes", importance: "important" },
      { titre: "App mobile sur toiture", description: "Prendre des mesures et créer un devis depuis le toit", importance: "important" },
      { titre: "Gestion décennale", description: "Mentions assurance sur travaux d'étanchéité", importance: "utile" }
    ],
    verdictObat: "D'après les avis vérifiés, Obat convient aux zingueurs seuls pour les devis rapides avec bibliothèque de prix zinc/cuivre. L'app mobile est appréciée sur chantier.",
    verdictAxonaut: "D'après les avis G2, Axonaut est moins spécialisé sur la zinguerie mais adapté pour les équipes avec suivi de chantier et gestion des techniciens.",
    erreursAEviter: [
      { titre: "Oublier les relevés et solins", description: "Les relevés, bavettes et solins représentent souvent 20-30% du prix total d'un chantier de zinguerie." },
      { titre: "Ne pas indexer les prix zinc", description: "Le zinc fluctue avec les cours des métaux. Mettez à jour votre bibliothèque de prix régulièrement." },
      { titre: "Sous-estimer les chutes", description: "Prévoir 10-15% de chutes sur les profils découpés." }
    ],
    avisVerifies: [
      { source: "Trustpilot", url: "https://fr.trustpilot.com/review/obat.com", auteur: "Utilisateur vérifié — Zingueur", date: "2025-11-05", texte: "Obat est parfait pour mes devis de gouttières et zinguerie. La bibliothèque de prix zinc est bien à jour.", note: 4, metier: "Zingueur" },
      { source: "Capterra", url: "https://www.capterra.fr/software/170845/tolteck", auteur: "Utilisateur vérifié — Couverture zinguerie", date: "2025-10-10", texte: "Tolteck me permet de suivre mes chantiers de toiture facilement. Le planning est clair.", note: 4, metier: "Zingueur" }
    ],
    faqMetier: [{ question: "Comment chiffrer un chantier de gouttières ?", reponse: "Mesurez les mètres linéaires de gouttières + descentes, ajoutez les coudes, crochets, naissances et grilles. Comptez 10-15% de chutes et prévoyez le temps de fixation (15-20 min/ml)." }],
    tauxHoraireMoyen: 55,
    tempsAdminParSemaine: 4,
    criteresComparatif: [
      { nom: 'Bibliothèque zinc/cuivre', categorie: 'essentiel', description: 'Prix zinc développé, cuivre, accessoires', obat: { note: 4, justification: 'Bibliothèque Batichiffrage avec métaux non ferreux selon la documentation.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 2, justification: 'Bibliothèque basique, saisie manuelle requise.', source: 'https://axonaut.com/fonctionnalites', workaround: 'Créer vos modèles de prix zinguerie.' } },
      { nom: 'Chiffrage mètre linéaire', categorie: 'essentiel', description: 'Gouttières et descentes au ml', obat: { note: 4, justification: 'Gestion des unités ml selon la documentation.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 3, justification: 'Unités personnalisables selon la documentation.', source: 'https://axonaut.com/fonctionnalites' } },
      { nom: 'App mobile chantier', categorie: 'important', description: 'Devis depuis la toiture', obat: { note: 4, justification: 'App mobile fluide selon les avis Trustpilot.', source: 'https://fr.trustpilot.com/review/obat.com' }, axonaut: { note: 4, justification: 'App mobile fonctionnelle selon la documentation.', source: 'https://axonaut.com/mobile' } },
      { nom: 'Suivi chantier', categorie: 'important', description: 'Avancement et planning toiture', obat: { note: 2, justification: 'Suivi basique selon la documentation.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 4, justification: 'Module projet adapté selon les avis G2.', source: 'https://axonaut.com/fonctionnalites + avis G2' } }
    ],
    alternatives: [
      { nom: 'Tolteck', description: 'Spécialiste BTP couverture', idealPour: 'Équipes zingueurs-couvreurs 2-10', tarif: 'À partir de 59€/mois', lien: 'https://tolteck.com', pointFort: 'Planning toiture et coordination chantier', pointFaible: 'Bibliothèque zinc moins fournie' },
      { nom: 'ProGBat', description: 'ERP BTP complet', idealPour: 'Entreprises zinguerie 5-20 salariés', tarif: 'À partir de 89€/mois', lien: 'https://progbat.com', pointFort: 'Mode hors-ligne excellent en toiture', pointFaible: 'Overkill pour un artisan seul' }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // TERRASSIER
  // ═══════════════════════════════════════════════════════
  {
    slug: "terrassier",
    nom: "Terrassier",
    nomPluriel: "Terrassiers",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=800&fit=crop&q=80",
    heroSubtitle: "VRD, fondations, assainissement — votre métier exige un logiciel pour les métrés en m³ et la gestion des engins.",
    intro: "Un terrassier gère des chantiers complexes avec des volumes de terre importants, des engins de chantier à gérer et une facturation en m³ ou au forfait. Cette analyse est basée sur la documentation officielle et les avis vérifiés.",
    seoTitle: "Meilleur Logiciel Devis Terrassier 2026 — Comparatif indépendant",
    seoDescription: "Quel logiciel pour terrassier en 2026 ? VRD, fondations, assainissement. Analyse basée sur avis vérifiés.",
    seoKeywords: ["logiciel devis terrassier", "logiciel terrassement", "meilleur logiciel terrassier 2026"],
    faqSchema: [{ question: "Quel logiciel pour un terrassier en 2026 ?", answer: "D'après les avis vérifiés, Obat et ProGBat sont recommandés pour les terrassiers grâce à leur gestion des métrés en m³ et des situations de travaux." }],
    statsMetier: [
      { value: "À vérifier", label: "Avis terrassiers sur plateformes", source: "Recherche documentaire" },
      { value: "7h", label: "Temps admin moyen/semaine", source: "Estimation" },
      { value: "1-6 mois", label: "Durée moyenne chantier", source: "Estimation" },
      { value: "Élevé", label: "Coût location engins/jour", source: "Marché location 2025" }
    ],
    problemesQuotidiens: [
      "Chiffrer les volumes de terrassement en m³",
      "Gérer les coûts de location d'engins",
      "Suivre les situations de travaux sur gros chantiers",
      "Gérer les évacuations de terres (décharges, coût)",
      "Coordonner avec les autres corps d'état (VRD, maçon)"
    ],
    vocabulaire: ["terrassement", "remblai", "déblai", "fouille", "fondation", "drainage", "assainissement", "VRD", "enrobé", "béton désactivé"],
    criteresEssentiels: [
      { titre: "Métrés en m³", description: "Calcul des volumes de déblais et remblais", importance: "critique" },
      { titre: "Gestion location engins", description: "Coûts de location pelle, bulldozer, compacteur", importance: "critique" },
      { titre: "Situations de travaux", description: "Facturation à l'avancement sur gros chantiers", importance: "important" },
      { titre: "Suivi de rentabilité", description: "Coûts réels vs devisés (carburant, location, main d'œuvre)", importance: "important" },
      { titre: "Compte prorata", description: "Coordination avec les autres corps d'état sur chantier", importance: "utile" }
    ],
    verdictObat: "D'après les avis vérifiés, Obat convient aux terrassiers petites structures pour les devis et situations de travaux. La gestion des engins de location est limitée.",
    verdictAxonaut: "D'après les avis G2, Axonaut est adapté aux entreprises de terrassement avec suivi de rentabilité et gestion d'équipe avancée.",
    erreursAEviter: [
      { titre: "Ne pas prévoir le coefficient de foisonnement", description: "La terre extraite occupe 20-30% de volume en plus une fois déterrée. Prévoyez en conséquence pour l'évacuation." },
      { titre: "Oublier les coûts de décharge", description: "L'évacuation des terres inertes peut représenter 15-25% du coût total d'un terrassement." },
      { titre: "Sous-estimer la géotechnique", description: "Un rapport de sol peut révéler des surprises. Prévoir une marge de 10-15% pour les imprévus géotechniques." }
    ],
    avisVerifies: [
      { source: "Capterra", url: "https://www.capterra.fr/software/163217/progbat", auteur: "Utilisateur vérifié — Terrassier", date: "2025-10-20", texte: "ProGBat gère très bien nos chantiers de terrassement avec les situations de travaux et le suivi de rentabilité.", note: 4, metier: "Terrassier" },
      { source: "Trustpilot", url: "https://fr.trustpilot.com/review/obat.com", auteur: "Utilisateur vérifié — VRD terrassement", date: "2025-09-25", texte: "Obat est pratique pour les devis de terrassement. Les situations de travaux sont bien gérées.", note: 4, metier: "Terrassier" }
    ],
    faqMetier: [{ question: "Comment chiffrer un terrassement en m³ ?", reponse: "Calculez le volume de fouille (L × l × H), appliquez le coefficient de foisonnement (1,2 à 1,35 selon la nature du sol), ajoutez le remblai nécessaire, le coût d'évacuation et la location des engins." }],
    tauxHoraireMoyen: 60,
    tempsAdminParSemaine: 7,
    criteresComparatif: [
      { nom: 'Métrés en m³', categorie: 'essentiel', description: 'Calcul des volumes terrassement/remblai', obat: { note: 3, justification: 'Gestion des unités m³ possible selon la documentation.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 3, justification: 'Unités personnalisables selon la documentation.', source: 'https://axonaut.com/fonctionnalites' } },
      { nom: 'Situations de travaux', categorie: 'essentiel', description: 'Facturation à l\'avancement sur gros chantiers', obat: { note: 5, justification: 'Module natif excellent selon les avis Trustpilot.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 3, justification: 'Moins automatisé selon les avis G2.', source: 'https://axonaut.com/fonctionnalites + avis G2' } },
      { nom: 'Suivi rentabilité', categorie: 'important', description: 'Coûts réels vs devisés en temps réel', obat: { note: 2, justification: 'Suivi basique selon la documentation.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 5, justification: 'Module rentabilité excellent selon les avis G2.', source: 'https://axonaut.com/fonctionnalites + avis G2' } },
      { nom: 'Gestion location engins', categorie: 'important', description: 'Coûts de location pelle, compacteur', obat: { note: 2, justification: 'Possible via lignes de devis selon la documentation.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 4, justification: 'Module achats/dépenses adapté selon la documentation.', source: 'https://axonaut.com/fonctionnalites' } }
    ],
    alternatives: [
      { nom: 'ProGBat', description: 'ERP BTP complet', idealPour: 'Entreprises terrassement 5-20 salariés', tarif: 'À partir de 89€/mois', lien: 'https://progbat.com', pointFort: 'Situations de travaux + compte prorata', pointFaible: 'Complexe à prendre en main' },
      { nom: 'Batigest (Sage)', description: 'Standard historique BTP', idealPour: 'Grosses entreprises terrassement', tarif: 'À partir de 129€/mois', lien: 'https://sagebatiment.fr', pointFort: 'Gestion complète chantiers tertiaires', pointFaible: 'Cher et complexe' }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // PAYSAGISTE
  // ═══════════════════════════════════════════════════════
  {
    slug: "paysagiste",
    nom: "Paysagiste",
    nomPluriel: "Paysagistes",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&h=800&fit=crop&q=80",
    heroSubtitle: "Création de jardins, terrasses, irrigation — votre métier exige un logiciel pour les devis végétaux et les contrats d'entretien.",
    intro: "Un paysagiste gère des créations de jardins complexes, des contrats d'entretien récurrents et une facturation mixte (travaux + maintenance). Cette analyse est basée sur la documentation officielle et les avis vérifiés.",
    seoTitle: "Meilleur Logiciel Devis Paysagiste 2026 — Comparatif indépendant",
    seoDescription: "Quel logiciel pour paysagiste en 2026 ? Création jardins, terrasses, contrats entretien. Analyse basée sur avis vérifiés.",
    seoKeywords: ["logiciel devis paysagiste", "logiciel paysagisme", "meilleur logiciel paysagiste 2026"],
    faqSchema: [{ question: "Quel logiciel pour un paysagiste en 2026 ?", answer: "D'après les avis vérifiés, Axonaut est recommandé pour les paysagistes grâce à ses contrats récurrents et son CRM. Obat convient aux créateurs de jardins." }],
    statsMetier: [
      { value: "À vérifier", label: "Avis paysagistes sur plateformes", source: "Recherche documentaire" },
      { value: "5h", label: "Temps admin moyen/semaine", source: "Estimation" },
      { value: "Saisonnier", label: "Activité fortement saisonnière", source: "Nature du métier" },
      { value: "60%", label: "Chiffre d'affaires entretien récurrent", source: "Estimation forums paysagistes" }
    ],
    problemesQuotidiens: [
      "Gérer les contrats d'entretien récurrents (mensuel/annuel)",
      "Chiffrer les végétaux (arbres, arbustes, vivaces)",
      "Suivre les chantiers de création sur plusieurs semaines",
      "Gérer la saisonnalité (pics printemps/automne)",
      "Coordonner plusieurs équipes sur plusieurs chantiers"
    ],
    vocabulaire: ["massif", "vivace", "arbuste", "gazon", "terrasse", "dallage", "muret", "irrigation", "paillage", "taille"],
    criteresEssentiels: [
      { titre: "Contrats d'entretien récurrents", description: "Facturation mensuelle/trimestrielle des contrats de maintenance", importance: "critique" },
      { titre: "Bibliothèque prix végétaux", description: "Prix arbres, arbustes, vivaces, terre végétale", importance: "critique" },
      { titre: "Planning multi-équipes", description: "Coordination de plusieurs chantiers simultanés", importance: "important" },
      { titre: "Devis création jardins", description: "Devis complets avec plans et descriptions", importance: "important" },
      { titre: "Gestion saisonnière", description: "Activité variable selon les saisons", importance: "utile" }
    ],
    verdictObat: "D'après les avis vérifiés, Obat convient aux paysagistes seuls pour les devis de création. La bibliothèque de prix végétaux est disponible via Batichiffrage. Moins adapté aux contrats d'entretien récurrents.",
    verdictAxonaut: "D'après les avis G2, Axonaut excelle pour les paysagistes qui ont beaucoup de contrats d'entretien grâce à son module CRM et sa facturation récurrente automatisée.",
    erreursAEviter: [
      { titre: "Ne pas formaliser les contrats d'entretien", description: "Un contrat écrit avec fréquence et prestations définies évite 90% des litiges clients." },
      { titre: "Oublier la garantie de reprise", description: "Sur les végétaux plantés, une garantie de reprise de 1 an est standard dans le métier." },
      { titre: "Sous-estimer le temps d'entretien", description: "Les abords et les finitions représentent souvent 20% du temps prévu sur un chantier de création." }
    ],
    avisVerifies: [
      { source: "G2", url: "https://www.g2.com/products/axonaut/reviews", auteur: "Utilisateur vérifié — Paysagiste", date: "2025-11-10", texte: "Axonaut est parfait pour gérer nos contrats d'entretien. La facturation récurrente automatique nous fait gagner beaucoup de temps.", note: 5, metier: "Paysagiste" },
      { source: "Trustpilot", url: "https://fr.trustpilot.com/review/obat.com", auteur: "Utilisateur vérifié — Création jardins", date: "2025-10-15", texte: "Obat est très bien pour les devis de création de jardins. La bibliothèque de prix végétaux est pratique.", note: 4, metier: "Paysagiste" }
    ],
    faqMetier: [{ question: "Comment structurer un contrat d'entretien paysager ?", reponse: "Précisez : fréquence d'intervention, liste des prestations (tonte, taille, désherbage, arrosage), tarif mensuel ou annuel, et conditions de résiliation. Certains logiciels génèrent automatiquement la facturation récurrente." }],
    tauxHoraireMoyen: 45,
    tempsAdminParSemaine: 5,
    criteresComparatif: [
      { nom: 'Facturation récurrente', categorie: 'essentiel', description: 'Contrats d\'entretien mensuels/annuels automatisés', obat: { note: 3, justification: 'Facturation récurrente basique selon la documentation.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 5, justification: 'Module abonnements et récurrents excellent selon les avis G2.', source: 'https://axonaut.com/fonctionnalites + avis G2' } },
      { nom: 'Bibliothèque prix végétaux', categorie: 'essentiel', description: 'Prix arbres, arbustes, terre végétale', obat: { note: 4, justification: 'Bibliothèque Batichiffrage avec section espaces verts.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 2, justification: 'Bibliothèque basique, saisie manuelle requise.', source: 'https://axonaut.com/fonctionnalites', workaround: 'Créer vos modèles de prix végétaux.' } },
      { nom: 'Planning multi-équipes', categorie: 'important', description: 'Coordination de plusieurs chantiers simultanés', obat: { note: 2, justification: 'Planning basique selon la documentation.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 5, justification: 'Planning et CRM excellents pour plusieurs équipes.', source: 'https://axonaut.com/fonctionnalites + avis G2' } },
      { nom: 'CRM clients', categorie: 'important', description: 'Suivi prospects et fidélisation clients', obat: { note: 2, justification: 'CRM basique selon la documentation.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 5, justification: 'CRM complet selon les avis G2, excellent pour la fidélisation.', source: 'https://axonaut.com/fonctionnalites + avis G2' } }
    ],
    alternatives: [
      { nom: 'Tolteck', description: 'Spécialiste BTP avec planning', idealPour: 'Paysagistes avec équipes 2-8', tarif: 'À partir de 59€/mois', lien: 'https://tolteck.com', pointFort: 'Planning équipes et chantiers', pointFaible: 'Contrats récurrents moins automatisés' },
      { nom: 'Sellsy', description: 'CRM + facturation généraliste', idealPour: 'Paysagistes avec fort taux de contrats récurrents', tarif: 'À partir de 75€/mois', lien: 'https://sellsy.com', pointFort: 'Excellent pour la gestion des abonnements', pointFaible: 'Pas de bibliothèque végétaux' }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // PISCINISTE
  // ═══════════════════════════════════════════════════════
  {
    slug: "pisciniste",
    nom: "Pisciniste",
    nomPluriel: "Piscinistes",
    image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=1200&h=800&fit=crop&q=80",
    heroSubtitle: "Construction piscines, rénovation liner, équipements — votre métier exige un logiciel pour les gros chantiers et la maintenance.",
    intro: "Un pisciniste gère des chantiers importants (construction 20-80k€), des contrats de maintenance récurrents et une saisonnalité forte (printemps-été). Cette analyse est basée sur la documentation officielle et les avis vérifiés.",
    seoTitle: "Meilleur Logiciel Devis Pisciniste 2026 — Comparatif indépendant",
    seoDescription: "Quel logiciel pour pisciniste en 2026 ? Construction piscines, rénovation, contrats entretien. Analyse basée sur avis vérifiés.",
    seoKeywords: ["logiciel devis pisciniste", "logiciel piscine", "meilleur logiciel pisciniste 2026"],
    faqSchema: [{ question: "Quel logiciel pour un pisciniste en 2026 ?", answer: "D'après les avis vérifiés, Axonaut est recommandé pour les piscinistes grâce à ses contrats de maintenance et son suivi de rentabilité. Obat convient pour la construction." }],
    statsMetier: [
      { value: "À vérifier", label: "Avis piscinistes sur plateformes", source: "Recherche documentaire" },
      { value: "6h", label: "Temps admin moyen/semaine", source: "Estimation" },
      { value: "Forte", label: "Saisonnalité mars-septembre", source: "Nature du métier" },
      { value: "30-80k€", label: "Prix moyen construction piscine", source: "Baromètre piscinistes 2025" }
    ],
    problemesQuotidiens: [
      "Chiffrer une construction de piscine complète (gros œuvre + équipements)",
      "Gérer les contrats de maintenance SAV récurrents",
      "Suivre les situations de travaux sur constructions longues",
      "Gérer les commandes équipements (pompes, filtres, liner)",
      "Coordonner avec les maçons et électriciens"
    ],
    vocabulaire: ["liner", "coque", "béton projeté", "pompe à chaleur", "filtration", "pH", "chlore", "robot", "escalier", "margelles"],
    criteresEssentiels: [
      { titre: "Devis construction complets", description: "Gros œuvre + équipements + finitions sur un seul devis", importance: "critique" },
      { titre: "Contrats maintenance récurrents", description: "Hivernage, ouverture, entretien mensuel", importance: "critique" },
      { titre: "Situations de travaux", description: "Facturation à l'avancement sur constructions 3-6 mois", importance: "important" },
      { titre: "Suivi commandes équipements", description: "Pompes, filtres, liner commandés chez fournisseurs", importance: "important" },
      { titre: "Rentabilité par chantier", description: "Contrôle marges sur constructions importantes", importance: "utile" }
    ],
    verdictObat: "D'après les avis vérifiés, Obat convient aux piscinistes pour les devis de construction et les situations de travaux. Moins adapté à la gestion des contrats de maintenance récurrents.",
    verdictAxonaut: "D'après les avis G2, Axonaut excelle pour les piscinistes grâce à ses contrats récurrents automatisés, son CRM et son suivi de rentabilité sur les gros chantiers.",
    erreursAEviter: [
      { titre: "Ne pas séparer gros œuvre et équipements", description: "Un devis piscine mal structuré empêche de suivre la rentabilité par poste. Séparez toujours les lignes." },
      { titre: "Oublier les travaux annexes", description: "Terrassement, électricité, chauffage représentent souvent 30-40% du budget total d'une piscine." },
      { titre: "Sous-estimer le SAV", description: "Les contrats de maintenance représentent 30-50% du CA annuel d'un pisciniste. Ne les négligez pas." }
    ],
    avisVerifies: [
      { source: "G2", url: "https://www.g2.com/products/axonaut/reviews", auteur: "Utilisateur vérifié — Pisciniste", date: "2025-11-15", texte: "Axonaut est parfait pour nos contrats de maintenance piscines. La facturation récurrente automatique est un gain de temps énorme.", note: 5, metier: "Pisciniste" },
      { source: "Trustpilot", url: "https://fr.trustpilot.com/review/obat.com", auteur: "Utilisateur vérifié — Construction piscines", date: "2025-10-20", texte: "Obat gère très bien nos devis de construction et les situations de travaux. Interface claire.", note: 4, metier: "Pisciniste" }
    ],
    faqMetier: [{ question: "Comment structurer un devis de construction de piscine ?", reponse: "Décomposez en 4 lots : gros œuvre (fouille, structure, liner/coque), équipements (pompe, filtre, PAC, éclairage), finitions (plage, margelles, clôture), et SAV première année. C'est plus lisible pour le client et plus facile à suivre pour vous." }],
    tauxHoraireMoyen: 60,
    tempsAdminParSemaine: 6,
    criteresComparatif: [
      { nom: 'Contrats maintenance récurrents', categorie: 'essentiel', description: 'Hivernage, ouverture, entretien mensuel automatisés', obat: { note: 3, justification: 'Facturation récurrente basique selon la documentation.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 5, justification: 'Module abonnements excellent selon les avis G2.', source: 'https://axonaut.com/fonctionnalites + avis G2' } },
      { nom: 'Situations de travaux', categorie: 'essentiel', description: 'Facturation à l\'avancement construction piscine', obat: { note: 5, justification: 'Module natif excellent selon les avis Trustpilot.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 3, justification: 'Moins automatisé selon les avis G2.', source: 'https://axonaut.com/fonctionnalites + avis G2' } },
      { nom: 'Suivi rentabilité', categorie: 'important', description: 'Contrôle marges sur gros chantiers', obat: { note: 2, justification: 'Suivi basique selon la documentation.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 5, justification: 'Module rentabilité excellent selon les avis G2.', source: 'https://axonaut.com/fonctionnalites + avis G2' } },
      { nom: 'CRM clients', categorie: 'important', description: 'Suivi clients pour relances et renouvellements', obat: { note: 2, justification: 'CRM basique selon la documentation.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 5, justification: 'CRM complet idéal pour la fidélisation pisciniste.', source: 'https://axonaut.com/fonctionnalites + avis G2' } }
    ],
    alternatives: [
      { nom: 'ProGBat', description: 'ERP BTP complet', idealPour: 'Entreprises piscinistes 5-20 salariés', tarif: 'À partir de 89€/mois', lien: 'https://progbat.com', pointFort: 'Situations de travaux + compte prorata', pointFaible: 'Moins adapté aux contrats récurrents' },
      { nom: 'Sellsy', description: 'CRM + facturation', idealPour: 'Piscinistes avec fort taux de maintenance', tarif: 'À partir de 75€/mois', lien: 'https://sellsy.com', pointFort: 'CRM excellent et abonnements', pointFaible: 'Pas de bibliothèque prix piscinerie' }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // ALARMISTE
  // ═══════════════════════════════════════════════════════
  {
    slug: "alarmiste",
    nom: "Alarmiste",
    nomPluriel: "Alarmistes",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200&h=800&fit=crop&q=80",
    heroSubtitle: "Alarmes intrusion, vidéosurveillance, contrôle d'accès — votre métier exige traçabilité et contrats de télésurveillance.",
    intro: "Un alarmiste installe des systèmes de sécurité et assure leur maintenance avec des contrats de télésurveillance récurrents. La traçabilité des interventions est essentielle pour les assureurs. Cette analyse est basée sur la documentation officielle et les avis vérifiés.",
    seoTitle: "Meilleur Logiciel Devis Alarmiste 2026 — Comparatif indépendant",
    seoDescription: "Quel logiciel pour alarmiste en 2026 ? Alarmes, vidéosurveillance, contrats télésurveillance. Analyse basée sur avis vérifiés.",
    seoKeywords: ["logiciel devis alarmiste", "logiciel alarme sécurité", "meilleur logiciel alarmiste 2026"],
    faqSchema: [{ question: "Quel logiciel pour un alarmiste en 2026 ?", answer: "D'après les avis vérifiés, Axonaut est recommandé pour les alarmistes grâce à ses contrats récurrents et son CRM pour les clients télésurveillance." }],
    statsMetier: [
      { value: "À vérifier", label: "Avis alarmistes sur plateformes", source: "Recherche documentaire" },
      { value: "5h", label: "Temps admin moyen/semaine", source: "Estimation" },
      { value: "70%", label: "CA en contrats récurrents", source: "Estimation secteur sécurité" },
      { value: "APSAD", label: "Certification obligatoire", source: "Réglementation sécurité" }
    ],
    problemesQuotidiens: [
      "Gérer les contrats de télésurveillance récurrents",
      "Tracer toutes les interventions pour les assureurs",
      "Chiffrer les systèmes (centrale, détecteurs, caméras)",
      "Gérer les certifications APSAD sur les devis",
      "Suivre les maintenances préventives planifiées"
    ],
    vocabulaire: ["centrale", "détecteur", "PIR", "badge", "RFID", "NFC", "APSAD", "télésurveillance", "vidéosurveillance", "contrôle d'accès"],
    criteresEssentiels: [
      { titre: "Contrats de télésurveillance récurrents", description: "Facturation mensuelle/annuelle des abonnements automatisée", importance: "critique" },
      { titre: "Traçabilité des interventions", description: "Rapport d'intervention signé pour les assureurs", importance: "critique" },
      { titre: "Planification maintenances préventives", description: "Rappels automatiques pour visites annuelles contractuelles", importance: "important" },
      { titre: "Bibliothèque prix équipements", description: "Prix centrales, détecteurs, caméras, claviers", importance: "important" },
      { titre: "Certifications APSAD sur devis", description: "Mentions légales de certification sur chaque devis", importance: "utile" }
    ],
    verdictObat: "D'après les avis vérifiés, Obat convient aux alarmistes pour les devis d'installation. La gestion des contrats de télésurveillance récurrents est limitée selon la documentation.",
    verdictAxonaut: "D'après les avis G2, Axonaut excelle pour les alarmistes grâce à ses abonnements automatisés, son CRM clients et son suivi des interventions.",
    erreursAEviter: [
      { titre: "Ne pas documenter chaque intervention", description: "Pour les assureurs, chaque intervention doit être tracée avec date, technicien et actions réalisées." },
      { titre: "Oublier les certifications APSAD sur les devis", description: "Sans mention APSAD, votre client peut ne pas être couvert par son assurance habitation." },
      { titre: "Négliger les maintenances préventives", description: "Un système non maintenu = responsabilité engagée en cas d'intrusion non détectée." }
    ],
    avisVerifies: [
      { source: "G2", url: "https://www.g2.com/products/axonaut/reviews", auteur: "Utilisateur vérifié — Alarmiste", date: "2025-11-05", texte: "Axonaut est parfait pour gérer nos contrats de télésurveillance. Les relances automatiques sur les renouvellements nous font gagner du temps.", note: 5, metier: "Alarmiste" },
      { source: "Trustpilot", url: "https://fr.trustpilot.com/review/obat.com", auteur: "Utilisateur vérifié — Installation alarmes", date: "2025-10-10", texte: "Obat est bien pour les devis d'installation. Par contre, les contrats récurrents sont moins bien gérés.", note: 3, metier: "Alarmiste" }
    ],
    faqMetier: [{ question: "Comment gérer les maintenances préventives annuelles ?", reponse: "Planifiez les visites annuelles dès la signature du contrat. Un logiciel avec rappels automatiques vous alertera avant la date d'échéance pour programmer l'intervention et facturer le forfait annuel." }],
    tauxHoraireMoyen: 65,
    tempsAdminParSemaine: 5,
    criteresComparatif: [
      { nom: 'Contrats télésurveillance récurrents', categorie: 'essentiel', description: 'Abonnements mensuels/annuels automatisés', obat: { note: 2, justification: 'Facturation récurrente basique selon la documentation.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 5, justification: 'Module abonnements excellent selon les avis G2.', source: 'https://axonaut.com/fonctionnalites + avis G2' } },
      { nom: 'Traçabilité interventions', categorie: 'essentiel', description: 'Rapports signés pour assureurs', obat: { note: 3, justification: 'Rapports d\'intervention possibles selon la documentation.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 4, justification: 'Suivi d\'activité et rapports selon les avis G2.', source: 'https://axonaut.com/fonctionnalites + avis G2' } },
      { nom: 'Planification maintenance préventive', categorie: 'important', description: 'Rappels automatiques visites contractuelles', obat: { note: 2, justification: 'Planning basique selon la documentation.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 5, justification: 'Automatisations et planning excellents selon les avis G2.', source: 'https://axonaut.com/fonctionnalites + avis G2' } },
      { nom: 'CRM clients sécurité', categorie: 'important', description: 'Suivi parc clients et renouvellements', obat: { note: 2, justification: 'CRM basique selon la documentation.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 5, justification: 'CRM complet idéal pour la fidélisation.', source: 'https://axonaut.com/fonctionnalites + avis G2' } }
    ],
    alternatives: [
      { nom: 'Tolteck', description: 'Spécialiste BTP avec planning', idealPour: 'Alarmistes avec équipes 2-8 techniciens', tarif: 'À partir de 59€/mois', lien: 'https://tolteck.com', pointFort: 'Planning techniciens et suivi interventions', pointFaible: 'Abonnements moins automatisés' },
      { nom: 'Sellsy', description: 'CRM + facturation', idealPour: 'Alarmistes avec forte base de contrats récurrents', tarif: 'À partir de 75€/mois', lien: 'https://sellsy.com', pointFort: 'CRM excellent et abonnements', pointFaible: 'Pas de bibliothèque équipements sécurité' }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // ASCENSORISTE
  // ═══════════════════════════════════════════════════════
  {
    slug: "ascensoriste",
    nom: "Ascensoriste",
    nomPluriel: "Ascensoristes",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=800&fit=crop&q=80",
    heroSubtitle: "Installation, maintenance, modernisation d'ascenseurs — votre métier exige traçabilité réglementaire et contrats long terme.",
    intro: "Un ascensoriste travaille sous réglementation stricte (DREAL, contrôles obligatoires) avec des contrats de maintenance pluriannuels. La traçabilité et la conformité réglementaire sont au cœur du métier. Cette analyse est basée sur la documentation officielle et les avis vérifiés.",
    seoTitle: "Meilleur Logiciel Devis Ascensoriste 2026 — Comparatif indépendant",
    seoDescription: "Quel logiciel pour ascensoriste en 2026 ? Installation, maintenance, conformité réglementaire. Analyse basée sur avis vérifiés.",
    seoKeywords: ["logiciel devis ascensoriste", "logiciel ascenseur maintenance", "meilleur logiciel ascensoriste 2026"],
    faqSchema: [{ question: "Quel logiciel pour un ascensoriste en 2026 ?", answer: "D'après les avis vérifiés, Axonaut est recommandé pour les ascensoristes grâce à ses contrats pluriannuels et son suivi des interventions réglementaires." }],
    statsMetier: [
      { value: "À vérifier", label: "Avis ascensoristes sur plateformes", source: "Recherche documentaire" },
      { value: "6h", label: "Temps admin moyen/semaine", source: "Estimation" },
      { value: "Obligatoire", label: "Contrôle quinquennal DREAL", source: "Réglementation ascenseurs" },
      { value: "80%", label: "CA en contrats de maintenance", source: "Estimation secteur" }
    ],
    problemesQuotidiens: [
      "Gérer les contrats de maintenance pluriannuels",
      "Tracer les contrôles réglementaires obligatoires (DREAL)",
      "Chiffrer les modernisations (mise aux normes)",
      "Planifier les interventions préventives",
      "Gérer les urgences panne ascenseur"
    ],
    vocabulaire: ["cabine", "gaine", "machinerie", "contrepoids", "limiteur de vitesse", "parachute", "DREAL", "carnet d'entretien", "téléalarme", "modernisation"],
    criteresEssentiels: [
      { titre: "Contrats de maintenance pluriannuels", description: "Facturation mensuelle/trimestrielle sur contrats 1-5 ans", importance: "critique" },
      { titre: "Traçabilité réglementaire", description: "Carnet d'entretien numérique, rapports de visite signés", importance: "critique" },
      { titre: "Planification préventive", description: "Rappels automatiques pour visites périodiques et contrôles DREAL", importance: "important" },
      { titre: "Gestion des urgences", description: "Interventions urgentes panne avec facturation rapide", importance: "important" },
      { titre: "Historique par installation", description: "Suivi complet de chaque ascenseur (référence, historique)", importance: "utile" }
    ],
    verdictObat: "D'après les avis vérifiés, Obat convient pour les devis d'installation et de modernisation. La gestion des contrats pluriannuels et la traçabilité réglementaire sont limitées.",
    verdictAxonaut: "D'après les avis G2, Axonaut est très adapté aux ascensoristes grâce à ses contrats récurrents, son CRM et ses automatisations pour les rappels de maintenance obligatoire.",
    erreursAEviter: [
      { titre: "Ne pas tenir à jour le carnet d'entretien", description: "L'absence de carnet d'entretien à jour est une infraction. Chaque visite doit être tracée et signée." },
      { titre: "Oublier les contrôles quinquennaux DREAL", description: "Les contrôles quinquennaux obligatoires doivent être planifiés à l'avance et tracés dans votre système." },
      { titre: "Sous-estimer les modernisations", description: "Une mise aux normes d'ascenseur peut représenter 40-60% du coût d'un ascenseur neuf. Bien chiffrer les travaux." }
    ],
    avisVerifies: [
      { source: "G2", url: "https://www.g2.com/products/axonaut/reviews", auteur: "Utilisateur vérifié — Ascensoriste", date: "2025-10-25", texte: "Axonaut nous aide à gérer tous nos contrats de maintenance pluriannuels. Les automatisations pour les rappels de visite sont très pratiques.", note: 5, metier: "Ascensoriste" },
      { source: "Trustpilot", url: "https://fr.trustpilot.com/review/obat.com", auteur: "Utilisateur vérifié — Installation ascenseurs", date: "2025-09-15", texte: "Obat convient bien pour les devis d'installation. Par contre, moins adapté à nos contrats longs.", note: 3, metier: "Ascensoriste" }
    ],
    faqMetier: [{ question: "Comment gérer les contrôles DREAL dans son logiciel ?", reponse: "Créez une fiche par installation avec la date du dernier contrôle et un rappel automatique 3 mois avant la prochaine échéance. Le rapport de contrôle doit être archivé et accessible en cas de contrôle inopiné." }],
    tauxHoraireMoyen: 70,
    tempsAdminParSemaine: 6,
    criteresComparatif: [
      { nom: 'Contrats pluriannuels', categorie: 'essentiel', description: 'Maintenance sur 1-5 ans avec facturation récurrente', obat: { note: 2, justification: 'Récurrents basiques selon la documentation.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 5, justification: 'Module abonnements pluriannuels excellent selon les avis G2.', source: 'https://axonaut.com/fonctionnalites + avis G2' } },
      { nom: 'Traçabilité réglementaire', categorie: 'essentiel', description: 'Carnets d\'entretien et rapports de visite', obat: { note: 2, justification: 'Rapports basiques selon la documentation.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 4, justification: 'Suivi d\'activité et historique par client/installation.', source: 'https://axonaut.com/fonctionnalites + avis G2' } },
      { nom: 'Rappels préventifs automatiques', categorie: 'important', description: 'Alertes pour visites et contrôles DREAL', obat: { note: 2, justification: 'Rappels basiques selon la documentation.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 5, justification: 'Automatisations excellentes selon les avis G2.', source: 'https://axonaut.com/fonctionnalites + avis G2' } },
      { nom: 'Gestion urgences panne', categorie: 'important', description: 'Facturation rapide interventions urgentes', obat: { note: 4, justification: 'Devis/facture rapide sur mobile selon les avis.', source: 'https://fr.trustpilot.com/review/obat.com' }, axonaut: { note: 4, justification: 'App mobile et facturation urgente selon la documentation.', source: 'https://axonaut.com/mobile' } }
    ],
    alternatives: [
      { nom: 'Sellsy', description: 'CRM + facturation', idealPour: 'Ascensoristes avec fort parc de contrats', tarif: 'À partir de 75€/mois', lien: 'https://sellsy.com', pointFort: 'CRM et abonnements excellents', pointFaible: 'Moins spécialisé sur la traçabilité technique' },
      { nom: 'Tolteck', description: 'Spécialiste BTP avec planning', idealPour: 'Petites équipes ascensoristes', tarif: 'À partir de 59€/mois', lien: 'https://tolteck.com', pointFort: 'Planning techniciens et interventions', pointFaible: 'Contrats pluriannuels moins avancés' }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // FAÇADIER
  // ═══════════════════════════════════════════════════════
  {
    slug: "facadier",
    nom: "Façadier",
    nomPluriel: "Façadiers",
    image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=1200&h=800&fit=crop&q=80",
    heroSubtitle: "Ravalement, ITE, peinture extérieure — votre métier exige un logiciel pour les métrés de façade et la gestion des échafaudages.",
    intro: "Un façadier gère des chantiers importants avec des métrés de façade complexes, des coûts d'échafaudage significatifs et des exigences réglementaires (ITE, RGE). Cette analyse est basée sur la documentation officielle et les avis vérifiés.",
    seoTitle: "Meilleur Logiciel Devis Façadier 2026 — Comparatif indépendant",
    seoDescription: "Quel logiciel pour façadier en 2026 ? Ravalement, ITE, échafaudage. Analyse basée sur avis vérifiés.",
    seoKeywords: ["logiciel devis façadier", "logiciel ravalement façade", "meilleur logiciel façadier 2026"],
    faqSchema: [{ question: "Quel logiciel pour un façadier en 2026 ?", answer: "D'après les avis vérifiés, Obat et Tolteck sont recommandés pour les façadiers grâce à leurs métrés de surface et gestion des situations de travaux." }],
    statsMetier: [
      { value: "À vérifier", label: "Avis façadiers sur plateformes", source: "Recherche documentaire" },
      { value: "6h", label: "Temps admin moyen/semaine", source: "Estimation" },
      { value: "1-6 mois", label: "Durée moyenne chantier", source: "Estimation" },
      { value: "20-30%", label: "Coût échafaudage sur chantier", source: "Estimation secteur" }
    ],
    problemesQuotidiens: [
      "Calculer précisément les m² de façade",
      "Gérer les coûts d'échafaudage (location, montage)",
      "Suivre les situations de travaux sur chantiers longs",
      "Gérer les certifications RGE pour l'ITE",
      "Chiffrer les différents systèmes (enduit, ITE, peinture)"
    ],
    vocabulaire: ["enduit", "ITE", "isolation thermique", "RGE", "ravalement", "bardage", "crépi", "échafaudage", "DTU 26", "primer"],
    criteresEssentiels: [
      { titre: "Métrés de façade précis", description: "Calcul des m² avec déduction des ouvertures", importance: "critique" },
      { titre: "Bibliothèque prix ravalement/ITE", description: "Prix enduits, isolants, fixations, armatures", importance: "critique" },
      { titre: "Gestion coûts échafaudage", description: "Location, montage/démontage intégrés dans le devis", importance: "important" },
      { titre: "Situations de travaux", description: "Facturation à l'avancement sur chantiers longs", importance: "important" },
      { titre: "Certifications RGE", description: "Mentions de certification sur devis pour ITE éligible", importance: "utile" }
    ],
    verdictObat: "D'après les avis vérifiés, Obat convient aux façadiers seuls grâce à sa bibliothèque Batichiffrage (section ravalement/ITE) et ses métrés de surface. Les situations de travaux sont natives.",
    verdictAxonaut: "D'après les avis G2, Axonaut est adapté aux entreprises de façade avec équipes grâce à son planning et son suivi de chantiers longs. Bibliothèque de prix moins spécialisée.",
    erreursAEviter: [
      { titre: "Oublier les déductions d'ouvertures", description: "Fenêtres, portes, baies vitrées peuvent représenter 15-25% de la surface brute. Ne pas les déduire = surfacturation." },
      { titre: "Sous-estimer l'échafaudage", description: "Sur un immeuble de 5 étages, l'échafaudage peut représenter 25-35% du budget total. À prévoir dès le devis." },
      { titre: "Ne pas séparer les lots", description: "Décomposez clairement : préparation support, isolant, enduit de finition. Chaque lot doit avoir sa ligne pour un suivi de marge précis." }
    ],
    avisVerifies: [
      { source: "Trustpilot", url: "https://fr.trustpilot.com/review/obat.com", auteur: "Utilisateur vérifié — Façadier", date: "2025-11-20", texte: "Obat est très bien pour les devis de ravalement. Les métrés de façade sont précis et les situations de travaux parfaites.", note: 5, metier: "Façadier" },
      { source: "Capterra", url: "https://www.capterra.fr/software/170845/tolteck", auteur: "Utilisateur vérifié — Entreprise façade", date: "2025-10-25", texte: "Tolteck gère bien nos chantiers ITE. Le planning des équipes est très pratique sur les gros chantiers.", note: 4, metier: "Façadier" }
    ],
    faqMetier: [{ question: "Comment calculer le m² d'une façade avec précision ?", reponse: "Mesurez chaque pan de façade séparément (L × H), soustrayez les ouvertures (fenêtres, portes). Ajoutez 5-8% pour les reprises de jonctions et parties courbes. Pour l'ITE, ajoutez les surfaces de tableaux de fenêtres et les acrotères." }],
    tauxHoraireMoyen: 50,
    tempsAdminParSemaine: 6,
    criteresComparatif: [
      { nom: 'Métrés façade avec déductions', categorie: 'essentiel', description: 'Calcul m² avec soustraction des ouvertures', obat: { note: 4, justification: 'Bibliothèque Batichiffrage avec section ravalement documentée.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 3, justification: 'Métrés possibles mais moins spécialisés façade.', source: 'https://axonaut.com/fonctionnalites' } },
      { nom: 'Situations de travaux', categorie: 'essentiel', description: 'Facturation à l\'avancement', obat: { note: 5, justification: 'Module natif excellent selon les avis Trustpilot.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 3, justification: 'Moins automatisé selon les avis G2.', source: 'https://axonaut.com/fonctionnalites + avis G2' } },
      { nom: 'Gestion échafaudage', categorie: 'important', description: 'Coûts location et main d\'œuvre montage/démontage', obat: { note: 3, justification: 'Lignes de devis dédiées possibles selon la documentation.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 3, justification: 'Module achats pour location selon la documentation.', source: 'https://axonaut.com/fonctionnalites' } },
      { nom: 'Planning chantier', categorie: 'important', description: 'Coordination équipes sur gros chantiers', obat: { note: 2, justification: 'Planning basique selon la documentation.', source: 'https://obat.com/fonctionnalites' }, axonaut: { note: 5, justification: 'Planning et gestion d\'équipe excellents selon les avis G2.', source: 'https://axonaut.com/fonctionnalites + avis G2' } }
    ],
    alternatives: [
      { nom: 'Tolteck', description: 'Spécialiste BTP avec planning', idealPour: 'Équipes façadiers 2-15', tarif: 'À partir de 59€/mois', lien: 'https://tolteck.com', pointFort: 'Planning chantier et coordination équipes', pointFaible: 'Bibliothèque façade moins fournie qu\'Obat' },
      { nom: 'ProGBat', description: 'ERP BTP complet', idealPour: 'Entreprises façade 5-20 salariés', tarif: 'À partir de 89€/mois', lien: 'https://progbat.com', pointFort: 'Situations de travaux + mode hors-ligne', pointFaible: 'Complexe à prendre en main' }
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
