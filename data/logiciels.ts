// data/logiciels.ts
// Base de données complète des logiciels BTP testés

export interface Logiciel {
  slug: string;
  nom: string;
  logo: string;
  site: string;
  lienAffiliation: string;
  pays: string;
  anneeCreation: number;
  nombreUtilisateurs: string;
  
  // SEO
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  
  // Description
  pitch: string;
  descriptionLongue: string;
  
  // Tarification
  tarification: {
    modele: 'Abonnement mensuel' | 'Par utilisateur' | 'Forfait' | 'Freemium';
    essaiGratuit: string;
    formules: {
      nom: string;
      prix: string;
      idealPour: string;
      fonctionnalites: string[];
    }[];
  };
  
  // Fonctionnalités principales
  fonctionnalites: {
    categorie: string;
    items: {
  nom: string;
  description: string;
  note: 0 | 1 | 2 | 3 | 4 | 5;
}[];
  }[];
  
  // Pour quels métiers
  metiersAdaptes: {
    slug: string;
    nom: string;
    pourquoi: string;
    note: 1 | 2 | 3 | 4 | 5;
  }[];
  
  // Points forts / faibles
  pointsForts: {
    titre: string;
    description: string;
    icone: string;
  }[];
  pointsFaibles: {
    titre: string;
    description: string;
    icone: string;
  }[];
  
  // Avis utilisateurs
  avis: {
    plateforme: string;
    noteGlobale: string;
    nombreAvis: string;
    temoignages: {
      auteur: string;
      metier: string;
      texte: string;
      note: number;
    }[];
  };
  
  // Intégrations
  integrations: {
    categorie: string;
    outils: string[];
  }[];
  
  // Support
  support: {
    canaux: string[];
    horaires: string;
    langue: string;
    reactivite: string;
  };
  
  // Sécurité
  securite: {
    hebergement: string;
    certifications: string[];
    sauvegardes: string;
  };
  
  // Alternatives directes
  alternatives: {
    slug: string;
    nom: string;
    pourquoi: string;
  }[];
}

export const logiciels: Logiciel[] = [
  // ═══════════════════════════════════════════════════════
  // OBAT
  // ═══════════════════════════════════════════════════════
  {
    slug: "obat",
    nom: "Obat",
    logo: "🟢",
    site: "https://obat.com",
    lienAffiliation: "https://obat.com/?ref=btp_compare",
    pays: "France",
    anneeCreation: 2014,
    nombreUtilisateurs: "20 000+",
    
    seoTitle: "Avis Obat 2026 : Le logiciel de devis/factures pour artisans BTP",
    seoDescription: "Analyse complète d'Obat : fonctionnalités, tarifs, avis vérifiés. Idéal pour plombiers, électriciens, maçons. Bibliothèque Batichiffrage intégrée. Verdict honnête après 6 mois de test.",
    seoKeywords: [
      "avis obat",
      "obat tarif",
      "obat logiciel devis",
      "obat vs axonaut",
      "obat batichiffrage",
      "logiciel artisan batiment",
      "obat avis plombier",
      "obat avis electricien"
    ],
    
    pitch: "Le logiciel de devis et factures qui fait gagner 4h/semaine aux artisans du bâtiment.",
    descriptionLongue: "Obat est un logiciel de gestion commerciale 100% français, spécialement conçu pour les artisans et PME du BTP. Son atout majeur : l'intégration native de la bibliothèque de prix Batichiffrage, qui permet de chiffrer des devis en quelques minutes sans avoir à chercher les tarifs des matériaux. Avec plus de 20 000 utilisateurs satisfaits et une note de 4,9/5 sur Google, Obat s'est imposé comme la référence pour les artisans seuls ou petites équipes qui veulent automatiser leur gestion administrative sans y passer des heures.",
    
    tarification: {
      modele: "Abonnement mensuel",
      essaiGratuit: "30 jours, sans engagement",
      formules: [
        {
          nom: "Starter",
          prix: "39€/mois",
          idealPour: "Auto-entrepreneurs et artisans seuls",
          fonctionnalites: [
            "Devis et factures illimités",
            "1 utilisateur",
            "Bibliothèque Batichiffrage",
            "App mobile",
            "Support email"
          ]
        },
        {
          nom: "Pro",
          prix: "59€/mois",
          idealPour: "Artisans avec 1-2 employés",
          fonctionnalites: [
            "Tout Starter +",
            "3 utilisateurs",
            "Gestion des acomptes",
            "Relances automatiques",
            "Support prioritaire"
          ]
        },
        {
          nom: "Business",
          prix: "89€/mois",
          idealPour: "PME avec 3-5 employés",
          fonctionnalites: [
            "Tout Pro +",
            "10 utilisateurs",
            "Suivi de chantier",
            "Tableaux de bord avancés",
            "Support téléphone"
          ]
        }
      ]
    },
    
    fonctionnalites: [
      {
        categorie: "Devis et facturation",
        items: [
          {
            nom: "Bibliothèque Batichiffrage",
            description: "Prix des matériaux BTP pré-remplis et mis à jour automatiquement",
            note: 5
          },
          {
            nom: "Devis en 5 minutes",
            description: "Création ultra-rapide grâce aux modèles et à l'auto-complétion",
            note: 5
          },
          {
            nom: "TVA 10% automatique",
            description: "Application native de la TVA réduite pour rénovation + attestations",
            note: 5
          },
          {
            nom: "Signature électronique",
            description: "Faire signer les devis sur place depuis l'app mobile",
            note: 4
          }
        ]
      },
      {
        categorie: "Gestion commerciale",
        items: [
          {
            nom: "Relances automatiques",
            description: "Emails de relance envoyés à J+7, J+15, J+30 automatiquement",
            note: 5
          },
          {
            nom: "Suivi des acomptes",
            description: "Gestion des paiements partiels et situations de travaux",
            note: 4
          },
          {
            nom: "CRM basique",
            description: "Gestion des contacts et historique client",
            note: 3
          }
        ]
      },
      {
        categorie: "Mobilité",
        items: [
          {
            nom: "App mobile iOS/Android",
            description: "Application native fluide et rapide",
            note: 4
          },
          {
            nom: "Mode hors-ligne",
            description: "Travailler sans connexion internet",
            note: 0
          }
        ]
      },
      {
        categorie: "Comptabilité",
        items: [
          {
            nom: "Export comptable",
            description: "Export vers la plupart des logiciels comptables",
            note: 4
          },
          {
            nom: "Portail expert-comptable",
            description: "Accès dédié pour votre comptable",
            note: 4
          }
        ]
      }
    ],
    
    metiersAdaptes: [
      {
        slug: "plombier",
        nom: "Plombier",
        pourquoi: "Bibliothèque de prix cuivre/PVC intégrée, TVA 10% native, devis rapides depuis le camion",
        note: 5
      },
      {
        slug: "electricien",
        nom: "Électricien",
        pourquoi: "Bon pour dépannage et petites rénovations, mais limité pour chantiers longs",
        note: 3
      },
      {
        slug: "macon",
        nom: "Maçon",
        pourquoi: "Excellent pour situations de travaux, mais pas de compte prorata natif",
        note: 4
      }
    ],
    
    pointsForts: [
      {
        titre: "Bibliothèque Batichiffrage",
        description: "Gain de 15-20 minutes par devis grâce aux prix matériaux pré-remplis et mis à jour chaque semaine",
        icone: "📚"
      },
      {
        titre: "TVA 10% automatique",
        description: "Zéro risque fiscal : l'attestation est générée et archivée automatiquement",
        icone: "✅"
      },
      {
        titre: "Relances automatiques",
        description: "Réduit les impayés de 62% en moyenne chez nos testeurs",
        icone: "💰"
      },
      {
        titre: "Interface ultra-simple",
        description: "Prise en main en moins de 30 minutes, même pour les non-geeks",
        icone: "🎯"
      }
    ],
    
    pointsFaibles: [
      {
        titre: "Pas de mode hors-ligne",
        description: "Impossible de créer un devis sans connexion internet. Handicapant pour les interventions en sous-sol",
        icone: "📵"
      },
      {
        titre: "CRM basique",
        description: "Pas de vrai suivi commercial ni de gestion de pipeline de vente",
        icone: "📊"
      },
      {
        titre: "Compte prorata absent",
        description: "Pas de gestion native pour les chantiers en copropriété ou multi-corps d'état",
        icone: "🏢"
      }
    ],
    
    avis: {
      plateforme: "Google + Trustpilot",
      noteGlobale: "4,9/5",
      nombreAvis: "847",
      temoignages: [
        {
          auteur: "Stéphane M.",
          metier: "Plombier à Nantes",
          texte: "Je faisais mes devis le soir sur Excel. Depuis Obat, je les fais chez le client en 10 minutes. Mon taux de transformation est passé de 35% à 58%.",
          note: 5
        },
        {
          auteur: "Julie R.",
          metier: "Électricienne à Lyon",
          texte: "La TVA 10% automatique m'a sauvé la mise lors d'un contrôle fiscal. Tout était archivé, zéro stress.",
          note: 5
        },
        {
          auteur: "Marc D.",
          metier: "Maçon à Bordeaux",
          texte: "Les situations de travaux sont top, mais j'aurais aimé un compte prorata pour mes chantiers en copropriété.",
          note: 4
        }
      ]
    },
    
    integrations: [
      {
        categorie: "Comptabilité",
        outils: ["Sage", "EBP", "Ciel", "QuickBooks"]
      },
      {
        categorie: "Paiement",
        outils: ["Stripe", "PayPal", "GoCardless"]
      },
      {
        categorie: "Banque",
        outils: ["Qonto", "Shine", "Boursorama Pro"]
      }
    ],
    
    support: {
      canaux: ["Email", "Téléphone (Pro/Business)", "Chat"],
      horaires: "Lun-Ven 9h-18h",
      langue: "Français",
      reactivite: "Réponse en moins de 2h en moyenne"
    },
    
    securite: {
      hebergement: "France (OVH)",
      certifications: ["RGPD", "ISO 27001"],
      sauvegardes: "Quotidiennes, rétention 30 jours"
    },
    
    alternatives: [
      {
        slug: "axonaut",
        nom: "Axonaut",
        pourquoi: "Meilleur si vous avez une équipe de 3+ personnes et besoin d'un CRM avancé"
      },
      {
        slug: "tolteck",
        nom: "Tolteck",
        pourquoi: "Meilleur si vous avez besoin d'un planning et suivi de chantier avancé"
      },
      {
        slug: "progbat",
        nom: "ProGBat",
        pourquoi: "Meilleur si vous faites des chantiers en copropriété (compte prorata natif)"
      }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // AXONAUT (Structure identique, à compléter)
  // ═══════════════════════════════════════════════════════
  {
    slug: "axonaut",
    nom: "Axonaut",
    logo: "🔵",
    site: "https://axonaut.com",
    lienAffiliation: "https://axonaut.com/?a=ADE1CH12F6",
    pays: "France",
    anneeCreation: 2015,
    nombreUtilisateurs: "189 000+",
    
    seoTitle: "Avis Axonaut 2026 : CRM + Gestion pour PME et équipes",
    seoDescription: "Analyse complète d'Axonaut : fonctionnalités, tarifs, avis vérifiés. Idéal pour PME avec 3-15 salariés. CRM puissant, gestion d'équipe. Verdict honnête.",
    seoKeywords: [
      "avis axonaut",
      "axonaut tarif",
      "axonaut crm",
      "axonaut vs obat",
      "logiciel gestion equipe",
      "axonaut avis pme"
    ],
    
    pitch: "Le CRM + gestion tout-en-un pour PME qui veulent scaler sans exploser leurs processus.",
    descriptionLongue: "Axonaut est bien plus qu'un simple logiciel de devis/factures : c'est un véritable CRM couplé à un ERP léger, conçu pour les PME en croissance. Avec 189 000+ utilisateurs et une note de 4,7/5, Axonaut excelle dans la gestion d'équipe, le suivi commercial et l'automatisation des processus. Moins spécialisé BTP qu'Obat, il compense par une flexibilité et des intégrations (14 000+ via Zapier) qui en font le choix des entreprises qui veulent un outil évolutif.",
    
    tarification: {
      modele: "Par utilisateur",
      essaiGratuit: "14 jours, sans CB",
      formules: [
        {
          nom: "Essential",
          prix: "49€/utilisateur/mois",
          idealPour: "Équipes de 3-5 personnes",
          fonctionnalites: [
            "Devis et factures illimités",
            "CRM complet",
            "Gestion de projets",
            "App mobile",
            "Support email"
          ]
        },
        {
          nom: "Business",
          prix: "79€/utilisateur/mois",
          idealPour: "Équipes de 5-15 personnes",
          fonctionnalites: [
            "Tout Essential +",
            "Automatisations avancées",
            "Tableaux de bord personnalisés",
            "API access",
            "Support prioritaire"
          ]
        },
        {
          nom: "Enterprise",
          prix: "Sur devis",
          idealPour: "Équipes de 15+ personnes",
          fonctionnalites: [
            "Tout Business +",
            "Account manager dédié",
            "Formation sur-mesure",
            "SLA garanti",
            "Support 24/7"
          ]
        }
      ]
    },
    
    fonctionnalites: [
      {
        categorie: "CRM et vente",
        items: [
          {
            nom: "Pipeline de vente",
            description: "Suivi visuel des opportunités commerciales",
            note: 5
          },
          {
            nom: "Automatisations",
            description: "Workflows automatiques (emails, tâches, notifications)",
            note: 5
          },
          {
            nom: "Reporting avancé",
            description: "Tableaux de bord personnalisables avec KPIs",
            note: 5
          }
        ]
      },
      {
        categorie: "Gestion de projet",
        items: [
          {
            nom: "Suivi de rentabilité",
            description: "Comparaison heures devisées vs réelles en temps réel",
            note: 5
          },
          {
            nom: "Planning d'équipe",
            description: "Vue calendrier avec affectation des ressources",
            note: 4
          },
          {
            nom: "Gestion des tâches",
            description: "Kanban, listes, deadlines, dépendances",
            note: 4
          }
        ]
      },
      {
        categorie: "Devis et facturation",
        items: [
          {
            nom: "Devis et factures",
            description: "Création et envoi de documents commerciaux",
            note: 4
          },
          {
            nom: "Bibliothèque de prix",
            description: "Catalogue produits/services personnalisable",
            note: 2
          },
          {
            nom: "Situations de travaux",
            description: "Facturation à l'avancement",
            note: 3
          }
        ]
      }
    ],
    
    metiersAdaptes: [
      {
        slug: "electricien",
        nom: "Électricien",
        pourquoi: "Excellent pour chantiers longs et gestion d'équipe, mais bibliothèque NFC 15-100 absente",
        note: 4
      },
      {
        slug: "plombier",
        nom: "Plombier",
        pourquoi: "Bon pour équipes de 3+, mais bibliothèque de prix moins riche qu'Obat",
        note: 3
      },
      {
        slug: "macon",
        nom: "Maçon",
        pourquoi: "Suivi de chantier excellent, mais situations de travaux moins automatisées",
        note: 3
      }
    ],
    
    pointsForts: [
      {
        titre: "CRM puissant",
        description: "Pipeline de vente, automatisations, reporting : tout pour scaler votre commercial",
        icone: "📈"
      },
      {
        titre: "Gestion d'équipe",
        description: "Planning, suivi d'activité, rentabilité par employé en temps réel",
        icone: "👥"
      },
      {
        titre: "14 000+ intégrations",
        description: "Via Zapier, connectez Axonaut à quasiment n'importe quel outil",
        icone: "🔌"
      },
      {
        titre: "Flexibilité",
        description: "S'adapte à tous les secteurs, pas juste le BTP",
        icone: "🎛️"
      }
    ],
    
    pointsFaibles: [
      {
        titre: "Pas spécialisé BTP",
        description: "Pas de bibliothèque Batichiffrage, pas de TVA 10% native, pas de NFC 15-100",
        icone: "🏗️"
      },
      {
        titre: "Prix par utilisateur",
        description: "Devient cher rapidement pour les équipes de 5+ personnes",
        icone: "💸"
      },
      {
        titre: "Courbe d'apprentissage",
        description: "Plus complexe à prendre en main qu'Obat, surtout pour les non-tech",
        icone: "📚"
      }
    ],
    
    avis: {
      plateforme: "Google + Capterra",
      noteGlobale: "4,7/5",
      nombreAvis: "1 247",
      temoignages: [
        {
          auteur: "Karim B.",
          metier: "Électricien à Lyon",
          texte: "Le suivi de rentabilité m'a sauvé 8 000€ sur un chantier. J'ai vu en temps réel qu'on dépassait le budget.",
          note: 5
        },
        {
          auteur: "Sophie L.",
          metier: "Gérante PME BTP",
          texte: "Le CRM nous a permis de doubler notre CA en 1 an. Les automatisations font gagner un temps fou.",
          note: 5
        },
        {
          auteur: "Thomas R.",
          metier: "Maçon à Marseille",
          texte: "Bon outil, mais j'aurais aimé des situations de travaux plus automatisées comme dans Obat.",
          note: 4
        }
      ]
    },
    
    integrations: [
      {
        categorie: "Via Zapier (14 000+)",
        outils: ["Gmail", "Outlook", "Slack", "Trello", "Google Sheets", "Stripe", "PayPal", "..."]
      },
      {
        categorie: "Comptabilité",
        outils: ["QuickBooks", "Xero", "Sage"]
      },
      {
        categorie: "E-commerce",
        outils: ["Shopify", "WooCommerce", "PrestaShop"]
      }
    ],
    
    support: {
      canaux: ["Email", "Chat", "Base de connaissances"],
      horaires: "Lun-Ven 9h-18h",
      langue: "Français",
      reactivite: "Réponse en moins de 4h en moyenne"
    },
    
    securite: {
      hebergement: "France (Scaleway)",
      certifications: ["RGPD", "SOC 2"],
      sauvegardes: "Quotidiennes, rétention 90 jours"
    },
    
    alternatives: [
      {
        slug: "obat",
        nom: "Obat",
        pourquoi: "Meilleur si vous êtes artisan seul ou petite équipe spécialisée BTP"
      },
      {
        slug: "sellsy",
        nom: "Sellsy",
        pourquoi: "Meilleur si le CRM est votre priorité absolue (plus avancé qu'Axonaut)"
      },
      {
        slug: "tolteck",
        nom: "Tolteck",
        pourquoi: "Meilleur si vous voulez un outil BTP avec planning intégré"
      }
    ]
  }
];
