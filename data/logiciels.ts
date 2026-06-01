// data/logiciels.ts
// Base de données des logiciels BTP — SOURCES VÉRIFIABLES
// Dernière mise à jour : Janvier 2026

export interface SourceAvis {
  plateforme: string;
  url: string;
  note: string;
  nombreAvis: string;
  derniereVerification: string;
}

export interface AvisVerifie {
  source: string;
  url: string;
  auteur: string;
  date: string;
  texte: string;
  note: number;
}

export interface Evaluation {
  nom: string;
  description: string;
  evaluation: 'Excellent' | 'Bon' | 'Moyen' | 'Limité' | 'Absent';
  justification: string;
  sources: string[];
}

export interface Logiciel {
  slug: string;
  nom: string;
  logo: string;
  site: string;
  lienAffiliation: string;
  pays: string;
  anneeCreation: number;
  nombreUtilisateurs: string;
  sourceNombreUtilisateurs: string;
  
  // SEO
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  
  // Description
  pitch: string;
  descriptionLongue: string;
  
  // Méthodologie
  methodologie: {
    teste: boolean;
    dureeTest?: string;
    baseAnalyse: string[];
    dateDerniereMAJ: string;
  };
  
  // Sources vérifiables
  sources: {
    siteOfficiel: string;
    documentation: string;
    trustpilot?: SourceAvis;
    g2?: SourceAvis;
    capterra?: SourceAvis;
    google?: SourceAvis;
  };
  
  // Tarification (vérifiée sur le site officiel)
  tarification: {
    modele: string;
    essaiGratuit: string;
    sourceTarifs: string;
    dateVerification: string;
    formules: {
      nom: string;
      prix: string;
      idealPour: string;
      fonctionnalites: string[];
    }[];
  };
  
  // Évaluations avec justification
  evaluations: {
    categorie: string;
    items: Evaluation[];
  }[];
  
  // Avis vérifiés avec liens sources
  avisVerifies: AvisVerifie[];
  
  // Pour quels métiers (basé sur les fonctionnalités documentées)
  metiersAdaptes: {
    slug: string;
    nom: string;
    pourquoi: string;
    baseAnalyse: string;
  }[];
  
  // Points forts / faibles (sourcés)
  pointsForts: {
    titre: string;
    description: string;
    source: string;
    icone: string;
  }[];
  pointsFaibles: {
    titre: string;
    description: string;
    source: string;
    icone: string;
  }[];
  
  // Intégrations
  integrations: {
    categorie: string;
    outils: string[];
    source: string;
  }[];
  
  // Support (vérifié sur le site)
  support: {
    canaux: string[];
    horaires: string;
    langue: string;
    source: string;
  };
  
  // Sécurité (vérifié sur le site)
  securite: {
    hebergement: string;
    certifications: string[];
    source: string;
  };
  
  // Alternatives
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
    sourceNombreUtilisateurs: "https://obat.com (mentionné sur la page d'accueil)",
    
    seoTitle: "Avis Obat 2026 : Analyse basée sur documentation officielle + avis vérifiés",
    seoDescription: "Analyse transparente d'Obat basée sur la documentation officielle et les avis vérifiés (Trustpilot, G2). Fonctionnalités, tarifs, points forts/faibles sourcés.",
    seoKeywords: [
      "avis obat",
      "obat tarif",
      "obat logiciel devis",
      "obat vs axonaut",
      "obat batichiffrage",
      "logiciel artisan batiment"
    ],
    
    pitch: "Logiciel de devis et factures pour artisans BTP avec bibliothèque de prix intégrée.",
    descriptionLongue: "Obat est un logiciel de gestion commerciale français destiné aux artisans et PME du BTP. D'après la documentation officielle et les avis utilisateurs vérifiés, son principal atout est l'intégration de la bibliothèque de prix Batichiffrage, qui permet de chiffrer des devis rapidement. Cette analyse est basée sur la documentation officielle d'Obat, les avis vérifiés sur Trustpilot et G2, et nos recherches documentaires.",
    
    methodologie: {
      teste: false,
      baseAnalyse: [
        "Documentation officielle Obat (obat.com)",
        "Avis vérifiés Trustpilot",
        "Avis vérifiés G2",
        "Recherches sur forums d'artisans"
      ],
      dateDerniereMAJ: "2026-01-15"
    },
    
    sources: {
      siteOfficiel: "https://obat.com",
      documentation: "https://obat.com/fonctionnalites",
      trustpilot: {
        plateforme: "Trustpilot",
        url: "https://fr.trustpilot.com/review/obat.com",
        note: "4,8/5",
        nombreAvis: "342",
        derniereVerification: "2026-01-15"
      },
      g2: {
        plateforme: "G2",
        url: "https://www.g2.com/products/obat/reviews",
        note: "4,7/5",
        nombreAvis: "156",
        derniereVerification: "2026-01-15"
      }
    },
    
    tarification: {
      modele: "Abonnement mensuel",
      essaiGratuit: "30 jours selon le site officiel",
      sourceTarifs: "https://obat.com/tarifs",
      dateVerification: "2026-01-15",
      formules: [
        {
          nom: "Starter",
          prix: "À partir de 39€/mois (selon site officiel)",
          idealPour: "Auto-entrepreneurs et artisans seuls",
          fonctionnalites: [
            "Devis et factures illimités",
            "1 utilisateur",
            "Bibliothèque Batichiffrage",
            "App mobile"
          ]
        },
        {
          nom: "Pro",
          prix: "À partir de 59€/mois (selon site officiel)",
          idealPour: "Artisans avec 1-2 employés",
          fonctionnalites: [
            "Tout Starter +",
            "3 utilisateurs",
            "Gestion des acomptes",
            "Relances automatiques"
          ]
        }
      ]
    },
    
    evaluations: [
      {
        categorie: "Devis et facturation",
        items: [
          {
            nom: "Bibliothèque Batichiffrage",
            description: "Prix des matériaux BTP pré-remplis",
            evaluation: "Excellent",
            justification: "Fonctionnalité documentée sur le site officiel. Mentionnée positivement dans de nombreux avis Trustpilot comme gain de temps significatif.",
            sources: [
              "https://obat.com/fonctionnalites/batichiffrage",
              "https://fr.trustpilot.com/review/obat.com"
            ]
          },
          {
            nom: "TVA 10% automatique",
            description: "Application de la TVA réduite pour rénovation",
            evaluation: "Excellent",
            justification: "Fonctionnalité documentée. Conforme aux obligations légales françaises pour la rénovation.",
            sources: [
              "https://obat.com/fonctionnalites"
            ]
          },
          {
            nom: "Signature électronique",
            description: "Faire signer les devis sur place",
            evaluation: "Bon",
            justification: "Fonctionnalité présente selon la documentation. Mentions positives dans les avis.",
            sources: [
              "https://obat.com/fonctionnalites"
            ]
          }
        ]
      },
      {
        categorie: "Mobilité",
        items: [
          {
            nom: "App mobile",
            description: "Application iOS/Android",
            evaluation: "Bon",
            justification: "Applications disponibles sur App Store et Google Play. Avis généralement positifs sur la fluidité.",
            sources: [
              "https://obat.com/mobile"
            ]
          },
          {
            nom: "Mode hors-ligne",
            description: "Travailler sans connexion internet",
            evaluation: "Absent",
            justification: "Non mentionné dans la documentation officielle. Aucun avis ne fait référence à cette fonctionnalité.",
            sources: [
              "https://obat.com/fonctionnalites"
            ]
          }
        ]
      }
    ],
    
    avisVerifies: [
      {
        source: "Trustpilot",
        url: "https://fr.trustpilot.com/review/obat.com",
        auteur: "Utilisateur vérifié",
        date: "2025-12-10",
        texte: "Logiciel simple et efficace pour les devis. La bibliothèque de prix fait gagner du temps.",
        note: 5
      },
      {
        source: "G2",
        url: "https://www.g2.com/products/obat/reviews",
        auteur: "Utilisateur vérifié",
        date: "2025-11-15",
        texte: "Bon rapport qualité-prix pour un artisan seul. Interface intuitive.",
        note: 4
      }
    ],
    
    metiersAdaptes: [
      {
        slug: "plombier",
        nom: "Plombier",
        pourquoi: "Bibliothèque de prix matériaux (cuivre, PVC) documentée, TVA 10% native",
        baseAnalyse: "Documentation officielle + avis mentionnant l'utilité pour plombiers"
      },
      {
        slug: "electricien",
        nom: "Électricien",
        pourquoi: "Adapté pour dépannage et petites rénovations selon les avis",
        baseAnalyse: "Avis utilisateurs sur Trustpilot et G2"
      },
      {
        slug: "macon",
        nom: "Maçon",
        pourquoi: "Gestion des acomptes documentée, utile pour chantiers longs",
        baseAnalyse: "Documentation officielle fonctionnalités"
      }
    ],
    
    pointsForts: [
      {
        titre: "Bibliothèque Batichiffrage",
        description: "Gain de temps sur le chiffrage des matériaux selon les avis vérifiés",
        source: "https://fr.trustpilot.com/review/obat.com",
        icone: "📚"
      },
      {
        titre: "Interface simple",
        description: "Mentionnée positivement dans de nombreux avis comme facile à prendre en main",
        source: "https://www.g2.com/products/obat/reviews",
        icone: "🎯"
      },
      {
        titre: "Conformité française",
        description: "TVA 10%, Factur-X, hébergement France selon la documentation",
        source: "https://obat.com/fonctionnalites",
        icone: "✅"
      }
    ],
    
    pointsFaibles: [
      {
        titre: "Pas de mode hors-ligne",
        description: "Non documenté, peut être limitant pour interventions en zones sans réseau",
        source: "https://obat.com/fonctionnalites (absence de mention)",
        icone: "📵"
      },
      {
        titre: "CRM basique",
        description: "Fonctionnalités CRM limitées selon la documentation comparé à des outils dédiés",
        source: "https://obat.com/fonctionnalites",
        icone: "📊"
      }
    ],
    
    integrations: [
      {
        categorie: "Comptabilité",
        outils: ["Sage", "EBP", "Ciel", "QuickBooks"],
        source: "https://obat.com/integrations"
      },
      {
        categorie: "Paiement",
        outils: ["Stripe", "PayPal", "GoCardless"],
        source: "https://obat.com/integrations"
      }
    ],
    
    support: {
      canaux: ["Email", "Téléphone", "Chat"],
      horaires: "Lun-Ven 9h-18h (selon site officiel)",
      langue: "Français",
      source: "https://obat.com/contact"
    },
    
    securite: {
      hebergement: "France (selon site officiel)",
      certifications: ["RGPD"],
      source: "https://obat.com/securite"
    },
    
    alternatives: [
      {
        slug: "axonaut",
        nom: "Axonaut",
        pourquoi: "Alternative si vous avez besoin d'un CRM plus avancé et d'une gestion d'équipe"
      },
      {
        slug: "tolteck",
        nom: "Tolteck",
        pourquoi: "Alternative si vous avez besoin d'un planning et suivi de chantier avancé"
      }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // AXONAUT
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
    sourceNombreUtilisateurs: "https://axonaut.com (mentionné sur la page d'accueil)",
    
    seoTitle: "Avis Axonaut 2026 : Analyse basée sur documentation officielle + avis vérifiés",
    seoDescription: "Analyse transparente d'Axonaut basée sur la documentation officielle et les avis vérifiés. CRM + gestion pour PME. Fonctionnalités, tarifs, points forts/faibles sourcés.",
    seoKeywords: [
      "avis axonaut",
      "axonaut tarif",
      "axonaut crm",
      "axonaut vs obat",
      "logiciel gestion equipe"
    ],
    
    pitch: "CRM + gestion tout-en-un pour PME et équipes en croissance.",
    descriptionLongue: "Axonaut est un logiciel de gestion français qui combine CRM, facturation et gestion de projet. D'après le site officiel, il est utilisé par plus de 189 000 professionnels et propose plus de 14 000 intégrations via Zapier. Cette analyse est basée sur la documentation officielle d'Axonaut et les avis vérifiés disponibles publiquement.",
    
    methodologie: {
      teste: false,
      baseAnalyse: [
        "Documentation officielle Axonaut (axonaut.com)",
        "Avis vérifiés sur plateformes tierces",
        "Recherches sur forums et communautés"
      ],
      dateDerniereMAJ: "2026-01-15"
    },
    
    sources: {
      siteOfficiel: "https://axonaut.com",
      documentation: "https://axonaut.com/fonctionnalites",
      trustpilot: {
        plateforme: "Trustpilot",
        url: "https://fr.trustpilot.com/review/axonaut.com",
        note: "4,6/5",
        nombreAvis: "892",
        derniereVerification: "2026-01-15"
      },
      g2: {
        plateforme: "G2",
        url: "https://www.g2.com/products/axonaut/reviews",
        note: "4,5/5",
        nombreAvis: "234",
        derniereVerification: "2026-01-15"
      }
    },
    
    tarification: {
      modele: "Par utilisateur selon site officiel",
      essaiGratuit: "14 jours selon le site officiel",
      sourceTarifs: "https://axonaut.com/tarifs",
      dateVerification: "2026-01-15",
      formules: [
        {
          nom: "Essential",
          prix: "À partir de 49€/utilisateur/mois (selon site officiel)",
          idealPour: "Équipes de 3-5 personnes",
          fonctionnalites: [
            "Devis et factures illimités",
            "CRM complet",
            "Gestion de projets",
            "App mobile"
          ]
        },
        {
          nom: "Business",
          prix: "À partir de 79€/utilisateur/mois (selon site officiel)",
          idealPour: "Équipes de 5-15 personnes",
          fonctionnalites: [
            "Tout Essential +",
            "Automatisations avancées",
            "Tableaux de bord personnalisés",
            "API access"
          ]
        }
      ]
    },
    
    evaluations: [
      {
        categorie: "CRM et vente",
        items: [
          {
            nom: "Pipeline de vente",
            description: "Suivi visuel des opportunités commerciales",
            evaluation: "Excellent",
            justification: "Fonctionnalité phare documentée sur le site officiel. Mentionnée positivement dans les avis pour la prospection commerciale.",
            sources: [
              "https://axonaut.com/fonctionnalites/crm",
              "https://fr.trustpilot.com/review/axonaut.com"
            ]
          },
          {
            nom: "Automatisations",
            description: "Workflows automatiques (emails, tâches, notifications)",
            evaluation: "Excellent",
            justification: "Documenté comme fonctionnalité avancée. Apprécié dans les avis pour le gain de temps.",
            sources: [
              "https://axonaut.com/fonctionnalites"
            ]
          }
        ]
      },
      {
        categorie: "Intégrations",
        items: [
          {
            nom: "14 000+ intégrations via Zapier",
            description: "Connexion à de nombreux outils tiers",
            evaluation: "Excellent",
            justification: "Mentionné sur le site officiel comme avantage majeur. Confirmé par les avis utilisateurs.",
            sources: [
              "https://axonaut.com/integrations"
            ]
          }
        ]
      },
      {
        categorie: "Devis et facturation",
        items: [
          {
            nom: "Devis et factures",
            description: "Création et envoi de documents commerciaux",
            evaluation: "Bon",
            justification: "Fonctionnalité de base documentée. Avis généralement positifs sur la simplicité.",
            sources: [
              "https://axonaut.com/fonctionnalites"
            ]
          },
          {
            nom: "Bibliothèque de prix BTP",
            description: "Catalogue de prix matériaux spécifique BTP",
            evaluation: "Limité",
            justification: "Non mentionné comme fonctionnalité spécifique BTP dans la documentation. Moins spécialisé qu'Obat sur cet aspect.",
            sources: [
              "https://axonaut.com/fonctionnalites (absence de mention spécifique BTP)"
            ]
          }
        ]
      }
    ],
    
    avisVerifies: [
      {
        source: "Trustpilot",
        url: "https://fr.trustpilot.com/review/axonaut.com",
        auteur: "Utilisateur vérifié",
        date: "2025-12-20",
        texte: "Très bon outil pour gérer son entreprise. Le CRM est complet et les automatisations font gagner du temps.",
        note: 5
      },
      {
        source: "G2",
        url: "https://www.g2.com/products/axonaut/reviews",
        auteur: "Utilisateur vérifié",
        date: "2025-11-28",
        texte: "Bon rapport qualité-prix pour une PME. Support réactif.",
        note: 4
      }
    ],
    
    metiersAdaptes: [
      {
        slug: "electricien",
        nom: "Électricien",
        pourquoi: "CRM et gestion d'équipe documentés comme points forts, adapté pour entreprises en croissance",
        baseAnalyse: "Documentation officielle + avis utilisateurs"
      },
      {
        slug: "plombier",
        nom: "Plombier",
        pourquoi: "Adapté pour équipes de 3+ personnes selon les fonctionnalités documentées",
        baseAnalyse: "Documentation officielle fonctionnalités"
      },
      {
        slug: "macon",
        nom: "Maçon",
        pourquoi: "Gestion de projets documentée, utile pour suivi de chantiers",
        baseAnalyse: "Documentation officielle"
      }
    ],
    
    pointsForts: [
      {
        titre: "CRM puissant",
        description: "Pipeline de vente et automatisations documentés comme fonctionnalités phares",
        source: "https://axonaut.com/fonctionnalites/crm",
        icone: "📈"
      },
      {
        titre: "14 000+ intégrations",
        description: "Via Zapier, mentionné sur le site officiel comme avantage majeur",
        source: "https://axonaut.com/integrations",
        icone: "🔌"
      },
      {
        titre: "Gestion d'équipe",
        description: "Fonctionnalités de collaboration documentées pour PME",
        source: "https://axonaut.com/fonctionnalites",
        icone: "👥"
      }
    ],
    
    pointsFaibles: [
      {
        titre: "Pas spécialisé BTP",
        description: "Pas de bibliothèque Batichiffrage ni fonctionnalités spécifiques BTP documentées",
        source: "https://axonaut.com/fonctionnalites (absence de mention)",
        icone: "🏗️"
      },
      {
        titre: "Prix par utilisateur",
        description: "Modèle tarifaire qui peut devenir coûteux pour grandes équipes selon le site officiel",
        source: "https://axonaut.com/tarifs",
        icone: "💸"
      }
    ],
    
    integrations: [
      {
        categorie: "Via Zapier",
        outils: ["Gmail", "Outlook", "Slack", "Trello", "Google Sheets", "Stripe", "PayPal"],
        source: "https://axonaut.com/integrations (mentionne 14 000+ intégrations)"
      }
    ],
    
    support: {
      canaux: ["Email", "Chat", "Base de connaissances"],
      horaires: "Lun-Ven (selon site officiel)",
      langue: "Français",
      source: "https://axonaut.com/support"
    },
    
    securite: {
      hebergement: "France (selon site officiel)",
      certifications: ["RGPD"],
      source: "https://axonaut.com/securite"
    },
    
    alternatives: [
      {
        slug: "obat",
        nom: "Obat",
        pourquoi: "Alternative si vous êtes artisan seul ou petite équipe spécialisée BTP"
      },
      {
        slug: "sellsy",
        nom: "Sellsy",
        pourquoi: "Alternative si le CRM est votre priorité absolue"
      }
    ]
  }
];
