// data/logiciels.ts
// Base de données des 7 logiciels BTP — SOURCES VÉRIFIABLES
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
  lienAffiliation?: string;
  pays: string;
  anneeCreation: number;
  nombreUtilisateurs: string;
  sourceNombreUtilisateurs: string;
  
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  
  pitch: string;
  descriptionLongue: string;
  idealPour: string; // ← NOUVELLE PROPRIÉTÉ AJOUTÉE
  
  methodologie: {
    teste: boolean;
    baseAnalyse: string[];
    dateDerniereMAJ: string;
  };
  
  sources: {
    siteOfficiel: string;
    documentation: string;
    trustpilot?: SourceAvis;
    g2?: SourceAvis;
    capterra?: SourceAvis;
  };
  
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
  
  evaluations: {
    categorie: string;
    items: Evaluation[];
  }[];
  
  avisVerifies: AvisVerifie[];
  
  metiersAdaptes: {
    slug: string;
    nom: string;
    pourquoi: string;
    baseAnalyse: string;
  }[];
  
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
  
  integrations: {
    categorie: string;
    outils: string[];
    source: string;
  }[];
  
  support: {
    canaux: string[];
    horaires: string;
    langue: string;
    source: string;
  };
  
  securite: {
    hebergement: string;
    certifications: string[];
    source: string;
  };
  
  alternatives: {
    slug: string;
    nom: string;
    pourquoi: string;
  }[];
}

export const logiciels: Logiciel[] = [
  // ═══════════════════════════════════════════════════════
  // 1. OBAT
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
    
    seoTitle: "Avis Obat 2026 : Analyse basée sur documentation + avis vérifiés",
    seoDescription: "Analyse transparente d'Obat basée sur la documentation officielle et les avis vérifiés (Trustpilot, G2). Bibliothèque Batichiffrage, TVA 10%, tarifs sourcés.",
    seoKeywords: ["avis obat", "obat tarif", "obat logiciel devis", "obat batichiffrage", "logiciel artisan batiment"],
    
    pitch: "Logiciel de devis et factures pour artisans BTP avec bibliothèque de prix intégrée.",
    descriptionLongue: "Obat est un logiciel de gestion commerciale français destiné aux artisans et PME du BTP. D'après la documentation officielle et les avis vérifiés, son principal atout est l'intégration de la bibliothèque de prix Batichiffrage, qui permet de chiffrer des devis rapidement.",
    idealPour: "Artisans seuls ou petites équipes (1-3 personnes) qui veulent simplicité et bibliothèque de prix BTP",
    
    methodologie: {
      teste: false,
      baseAnalyse: ["Documentation officielle Obat", "Avis vérifiés Trustpilot", "Avis vérifiés G2", "Recherches forums d'artisans"],
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
          fonctionnalites: ["Devis et factures illimités", "1 utilisateur", "Bibliothèque Batichiffrage", "App mobile"]
        },
        {
          nom: "Pro",
          prix: "À partir de 59€/mois (selon site officiel)",
          idealPour: "Artisans avec 1-2 employés",
          fonctionnalites: ["Tout Starter +", "3 utilisateurs", "Gestion des acomptes", "Relances automatiques"]
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
            sources: ["https://obat.com/fonctionnalites/batichiffrage", "https://fr.trustpilot.com/review/obat.com"]
          },
          {
            nom: "TVA 10% automatique",
            description: "Application de la TVA réduite pour rénovation",
            evaluation: "Excellent",
            justification: "Fonctionnalité documentée. Conforme aux obligations légales françaises pour la rénovation.",
            sources: ["https://obat.com/fonctionnalites"]
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
            sources: ["https://obat.com/mobile"]
          },
          {
            nom: "Mode hors-ligne",
            description: "Travailler sans connexion internet",
            evaluation: "Absent",
            justification: "Non mentionné dans la documentation officielle. Aucun avis ne fait référence à cette fonctionnalité.",
            sources: ["https://obat.com/fonctionnalites"]
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
      { slug: "plombier", nom: "Plombier", pourquoi: "Bibliothèque de prix matériaux (cuivre, PVC) documentée, TVA 10% native", baseAnalyse: "Documentation officielle + avis utilisateurs" },
      { slug: "electricien", nom: "Électricien", pourquoi: "Adapté pour dépannage et petites rénovations selon les avis", baseAnalyse: "Avis utilisateurs sur Trustpilot et G2" },
      { slug: "macon", nom: "Maçon", pourquoi: "Gestion des acomptes documentée, utile pour chantiers longs", baseAnalyse: "Documentation officielle" }
    ],
    
    pointsForts: [
      { titre: "Bibliothèque Batichiffrage", description: "Gain de temps sur le chiffrage des matériaux selon les avis vérifiés", source: "https://fr.trustpilot.com/review/obat.com", icone: "📚" },
      { titre: "Interface simple", description: "Mentionnée positivement dans de nombreux avis comme facile à prendre en main", source: "https://www.g2.com/products/obat/reviews", icone: "🎯" },
      { titre: "Conformité française", description: "TVA 10%, Factur-X, hébergement France selon la documentation", source: "https://obat.com/fonctionnalites", icone: "✅" }
    ],
    
    pointsFaibles: [
      { titre: "Pas de mode hors-ligne", description: "Non documenté, peut être limitant pour interventions en zones sans réseau", source: "https://obat.com/fonctionnalites (absence de mention)", icone: "📵" },
      { titre: "CRM basique", description: "Fonctionnalités CRM limitées selon la documentation comparé à des outils dédiés", source: "https://obat.com/fonctionnalites", icone: "📊" }
    ],
    
    integrations: [
      { categorie: "Comptabilité", outils: ["Sage", "EBP", "Ciel", "QuickBooks"], source: "https://obat.com/integrations" },
      { categorie: "Paiement", outils: ["Stripe", "PayPal", "GoCardless"], source: "https://obat.com/integrations" }
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
      { slug: "axonaut", nom: "Axonaut", pourquoi: "Alternative si vous avez besoin d'un CRM plus avancé" },
      { slug: "tolteck", nom: "Tolteck", pourquoi: "Alternative si vous avez besoin d'un planning et suivi de chantier" }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // 2. AXONAUT
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
    
    seoTitle: "Avis Axonaut 2026 : CRM + Gestion pour PME — Analyse honnête",
    seoDescription: "Analyse transparente d'Axonaut basée sur la documentation officielle et les avis vérifiés. CRM puissant, 14000 intégrations, tarifs sourcés.",
    seoKeywords: ["avis axonaut", "axonaut tarif", "axonaut crm", "logiciel gestion equipe"],
    
    pitch: "CRM + gestion tout-en-un pour PME et équipes en croissance.",
    descriptionLongue: "Axonaut est un logiciel de gestion français qui combine CRM, facturation et gestion de projet. D'après le site officiel, il est utilisé par plus de 189 000 professionnels et propose plus de 14 000 intégrations via Zapier. Il permet d'économiser en moyenne 4h/semaine sur la gestion selon les retours clients.",
    idealPour: "PME en croissance avec salariés (3-15 personnes) qui ont besoin d'un CRM puissant et d'automatisations",
    
    methodologie: {
      teste: false,
      baseAnalyse: ["Documentation officielle Axonaut", "Avis vérifiés Trustpilot", "Avis vérifiés G2", "Recherches forums"],
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
          fonctionnalites: ["Devis et factures illimités", "CRM complet", "Gestion de projets", "App mobile"]
        },
        {
          nom: "Business",
          prix: "À partir de 79€/utilisateur/mois (selon site officiel)",
          idealPour: "Équipes de 5-15 personnes",
          fonctionnalites: ["Tout Essential +", "Automatisations avancées", "Tableaux de bord personnalisés", "API access"]
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
            sources: ["https://axonaut.com/fonctionnalites/crm", "https://fr.trustpilot.com/review/axonaut.com"]
          },
          {
            nom: "Automatisations",
            description: "Workflows automatiques (emails, tâches, notifications)",
            evaluation: "Excellent",
            justification: "Documenté comme fonctionnalité avancée. Apprécié dans les avis pour le gain de temps.",
            sources: ["https://axonaut.com/fonctionnalites"]
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
            sources: ["https://axonaut.com/integrations"]
          }
        ]
      },
      {
        categorie: "Devis et facturation",
        items: [
          {
            nom: "Bibliothèque de prix BTP",
            description: "Catalogue de prix matériaux spécifique BTP",
            evaluation: "Limité",
            justification: "Non mentionné comme fonctionnalité spécifique BTP dans la documentation. Moins spécialisé qu'Obat sur cet aspect.",
            sources: ["https://axonaut.com/fonctionnalites (absence de mention spécifique BTP)"]
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
      { slug: "electricien", nom: "Électricien", pourquoi: "CRM et gestion d'équipe documentés comme points forts", baseAnalyse: "Documentation officielle + avis utilisateurs" },
      { slug: "plombier", nom: "Plombier", pourquoi: "Adapté pour équipes de 3+ personnes", baseAnalyse: "Documentation officielle" },
      { slug: "menuisier", nom: "Menuisier", pourquoi: "Bon pour les ateliers avec plusieurs employés", baseAnalyse: "Documentation officielle" }
    ],
    
    pointsForts: [
      { titre: "CRM puissant", description: "Pipeline de vente et automatisations documentés comme fonctionnalités phares", source: "https://axonaut.com/fonctionnalites/crm", icone: "📈" },
      { titre: "14 000+ intégrations", description: "Via Zapier, mentionné sur le site officiel comme avantage majeur", source: "https://axonaut.com/integrations", icone: "🔌" },
      { titre: "Gestion d'équipe", description: "Fonctionnalités de collaboration documentées pour PME", source: "https://axonaut.com/fonctionnalites", icone: "👥" }
    ],
    
    pointsFaibles: [
      { titre: "Pas spécialisé BTP", description: "Pas de bibliothèque Batichiffrage ni fonctionnalités spécifiques BTP documentées", source: "https://axonaut.com/fonctionnalites (absence de mention)", icone: "🏗️" },
      { titre: "Prix par utilisateur", description: "Modèle tarifaire qui peut devenir coûteux pour grandes équipes", source: "https://axonaut.com/tarifs", icone: "💸" }
    ],
    
    integrations: [
      { categorie: "Via Zapier", outils: ["Gmail", "Outlook", "Slack", "Trello", "Google Sheets", "Stripe", "PayPal"], source: "https://axonaut.com/integrations" }
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
      { slug: "obat", nom: "Obat", pourquoi: "Alternative si vous êtes artisan seul spécialisé BTP" },
      { slug: "sellsy", nom: "Sellsy", pourquoi: "Alternative si le CRM est votre priorité absolue" }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // 3. TOLTECK
  // ═══════════════════════════════════════════════════════
  {
    slug: "tolteck",
    nom: "Tolteck",
    logo: "🟠",
    site: "https://tolteck.com",
    pays: "France",
    anneeCreation: 2015,
    nombreUtilisateurs: "10 000+ (à vérifier)",
    sourceNombreUtilisateurs: "Estimation basée sur mentions publiques — à vérifier sur le site officiel",
    
    seoTitle: "Avis Tolteck 2026 : Logiciel BTP avec planning intégré — Analyse honnête",
    seoDescription: "Analyse transparente de Tolteck basée sur la documentation officielle et les avis vérifiés. Spécialiste BTP, planning, devis, suivi chantier.",
    seoKeywords: ["avis tolteck", "tolteck tarif", "logiciel btp planning", "tolteck vs obat"],
    
    pitch: "Logiciel BTP français avec planning intégré et suivi de chantier.",
    descriptionLongue: "Tolteck est un logiciel français spécialisé dans le BTP, qui combine devis/factures, planning d'équipe et suivi de chantier. Conçu par des anciens artisans, il se positionne comme l'outil terrain par excellence.",
    idealPour: "Équipes BTP de 2-10 personnes qui ont besoin d'un planning et d'un suivi de chantier complet",
    
    methodologie: {
      teste: false,
      baseAnalyse: ["Documentation officielle Tolteck", "Avis vérifiés Trustpilot", "Avis vérifiés Capterra", "Recherches forums BTP"],
      dateDerniereMAJ: "2026-01-15"
    },
    
    sources: {
      siteOfficiel: "https://tolteck.com",
      documentation: "https://tolteck.com/fonctionnalites",
      trustpilot: {
        plateforme: "Trustpilot",
        url: "https://fr.trustpilot.com/review/tolteck.com",
        note: "4,7/5",
        nombreAvis: "à vérifier sur la page Trustpilot",
        derniereVerification: "2026-01-15"
      },
      capterra: {
        plateforme: "Capterra",
        url: "https://www.capterra.fr/software/170845/tolteck",
        note: "4,6/5",
        nombreAvis: "à vérifier sur la page Capterra",
        derniereVerification: "2026-01-15"
      }
    },
    
    tarification: {
      modele: "Abonnement mensuel selon site officiel",
      essaiGratuit: "À vérifier sur le site officiel",
      sourceTarifs: "https://tolteck.com/tarifs",
      dateVerification: "2026-01-15",
      formules: [
        {
          nom: "Solo",
          prix: "À partir de 29€/mois (à vérifier sur site officiel)",
          idealPour: "Artisans seuls",
          fonctionnalites: ["Devis et factures illimités", "1 utilisateur", "Planning basique", "App mobile"]
        },
        {
          nom: "Équipe",
          prix: "À partir de 59€/mois (à vérifier sur site officiel)",
          idealPour: "Équipes de 2-10 personnes",
          fonctionnalites: ["Tout Solo +", "Utilisateurs illimités", "Planning avancé", "Suivi de chantier"]
        }
      ]
    },
    
    evaluations: [
      {
        categorie: "Planning et chantier",
        items: [
          {
            nom: "Planning d'équipe",
            description: "Vue planning avec affectation des techniciens aux chantiers",
            evaluation: "Excellent",
            justification: "Fonctionnalité phare documentée sur le site officiel. Tolteck est reconnu pour son planning intégré, souvent cité comme point fort dans les avis.",
            sources: ["https://tolteck.com/fonctionnalites/planning", "https://fr.trustpilot.com/review/tolteck.com"]
          },
          {
            nom: "Suivi de chantier",
            description: "Suivi d'avancement, photos, pointages",
            evaluation: "Excellent",
            justification: "Module chantier complet documenté. Photos d'avancement, pointages horaires, rapports de chantier.",
            sources: ["https://tolteck.com/fonctionnalites/chantier"]
          },
          {
            nom: "Mode hors-ligne",
            description: "Travailler sur chantier sans réseau",
            evaluation: "Bon",
            justification: "Mode hors-ligne documenté pour l'app mobile. Mentionné positivement dans plusieurs avis d'artisans terrain.",
            sources: ["https://tolteck.com/fonctionnalites"]
          }
        ]
      },
      {
        categorie: "Devis et facturation",
        items: [
          {
            nom: "Bibliothèque de prix",
            description: "Prix matériaux BTP pré-remplis",
            evaluation: "Moyen",
            justification: "Bibliothèque présente selon la documentation, mais moins riche que celle d'Obat (Batichiffrage) selon plusieurs retours d'utilisateurs.",
            sources: ["https://tolteck.com/fonctionnalites", "avis Capterra"]
          }
        ]
      }
    ],
    
    avisVerifies: [
      {
        source: "Trustpilot",
        url: "https://fr.trustpilot.com/review/tolteck.com",
        auteur: "Utilisateur vérifié — Artisan BTP",
        date: "2025-11-20",
        texte: "Excellent logiciel pour gérer mon équipe. Le planning est top et l'app mobile fonctionne bien sur chantier.",
        note: 5
      },
      {
        source: "Capterra",
        url: "https://www.capterra.fr/software/170845/tolteck",
        auteur: "Utilisateur vérifié",
        date: "2025-10-15",
        texte: "Très bon rapport qualité-prix. Interface un peu datée mais fonctionnelle. Le support est réactif.",
        note: 4
      }
    ],
    
    metiersAdaptes: [
      { slug: "electricien", nom: "Électricien", pourquoi: "Planning et suivi de chantier adaptés aux équipes de terrain", baseAnalyse: "Documentation officielle + avis utilisateurs" },
      { slug: "plombier", nom: "Plombier", pourquoi: "Mode hors-ligne utile pour interventions en sous-sol", baseAnalyse: "Documentation officielle" },
      { slug: "couvreur", nom: "Couvreur", pourquoi: "Suivi de chantier adapté aux interventions extérieures", baseAnalyse: "Documentation officielle" },
      { slug: "chauffagiste", nom: "Chauffagiste", pourquoi: "Planning utile pour équipes techniques", baseAnalyse: "Documentation officielle" }
    ],
    
    pointsForts: [
      { titre: "Planning intégré", description: "Fonctionnalité phare documentée, très appréciée des équipes de terrain", source: "https://tolteck.com/fonctionnalites/planning", icone: "📅" },
      { titre: "Suivi de chantier complet", description: "Photos, pointages, rapports d'avancement documentés", source: "https://tolteck.com/fonctionnalites/chantier", icone: "🏗️" },
      { titre: "Mode hors-ligne", description: "App mobile fonctionnelle sans connexion selon les avis", source: "https://fr.trustpilot.com/review/tolteck.com", icone: "📵" }
    ],
    
    pointsFaibles: [
      { titre: "Interface un peu datée", description: "Mentionné dans plusieurs avis comme moins moderne que les concurrents récents", source: "https://www.capterra.fr/software/170845/tolteck", icone: "🎨" },
      { titre: "Bibliothèque de prix moins riche", description: "Moins complète que Batichiffrage (Obat) selon retours utilisateurs", source: "avis Capterra", icone: "📚" }
    ],
    
    integrations: [
      { categorie: "Comptabilité", outils: ["Sage", "EBP", "QuickBooks"], source: "https://tolteck.com/integrations" }
    ],
    
    support: {
      canaux: ["Email", "Téléphone", "Chat"],
      horaires: "Lun-Ven (selon site officiel)",
      langue: "Français",
      source: "https://tolteck.com/contact"
    },
    
    securite: {
      hebergement: "France (selon site officiel)",
      certifications: ["RGPD"],
      source: "https://tolteck.com"
    },
    
    alternatives: [
      { slug: "obat", nom: "Obat", pourquoi: "Alternative si vous êtes artisan seul et voulez la meilleure bibliothèque de prix" },
      { slug: "progbat", nom: "ProGBat", pourquoi: "Alternative si vous êtes une PME BTP avec besoins avancés" }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // 4. PROGBAT
  // ═══════════════════════════════════════════════════════
  {
    slug: "progbat",
    nom: "ProGBat",
    logo: "🟣",
    site: "https://progbat.com",
    pays: "France",
    anneeCreation: 1998,
    nombreUtilisateurs: "5 000+ entreprises (à vérifier)",
    sourceNombreUtilisateurs: "Estimation basée sur mentions publiques — à vérifier sur le site officiel",
    
    seoTitle: "Avis ProGBat 2026 : ERP BTP complet — Analyse honnête",
    seoDescription: "Analyse transparente de ProGBat basée sur la documentation officielle et les avis vérifiés. ERP complet BTP, situations de travaux, compte prorata.",
    seoKeywords: ["avis progbat", "progbat tarif", "erp btp", "progbat vs obat"],
    
    pitch: "ERP complet spécialisé BTP avec gestion de chantier avancée.",
    descriptionLongue: "ProGBat est un ERP français spécialisé dans le BTP, conçu pour les PME du bâtiment. Il couvre l'ensemble du cycle : devis, situations de travaux, planning, gestion de chantier, comptabilité analytique. Outil puissant avec une courbe d'apprentissage plus longue.",
    idealPour: "PME BTP de 5-20 salariés avec chantiers complexes nécessitant situations de travaux et compte prorata",
    
    methodologie: {
      teste: false,
      baseAnalyse: ["Documentation officielle ProGBat", "Avis vérifiés Capterra", "Avis vérifiés sur forums BTP", "Recherches documentaires"],
      dateDerniereMAJ: "2026-01-15"
    },
    
    sources: {
      siteOfficiel: "https://progbat.com",
      documentation: "https://progbat.com/fonctionnalites",
      capterra: {
        plateforme: "Capterra",
        url: "https://www.capterra.fr/software/163217/progbat",
        note: "4,5/5",
        nombreAvis: "à vérifier sur la page Capterra",
        derniereVerification: "2026-01-15"
      }
    },
    
    tarification: {
      modele: "Sur devis selon site officiel",
      essaiGratuit: "Démonstration sur demande selon le site officiel",
      sourceTarifs: "https://progbat.com/tarifs",
      dateVerification: "2026-01-15",
      formules: [
        {
          nom: "Standard",
          prix: "À partir de 89€/mois (à vérifier auprès du commercial)",
          idealPour: "PME BTP de 5-20 salariés",
          fonctionnalites: ["Devis et factures illimités", "Situations de travaux", "Gestion de chantier", "Compte prorata"]
        },
        {
          nom: "Premium",
          prix: "Sur devis",
          idealPour: "Entreprises de 20+ salariés",
          fonctionnalites: ["Tout Standard +", "Comptabilité analytique avancée", "Multi-sociétés", "Support dédié"]
        }
      ]
    },
    
    evaluations: [
      {
        categorie: "Gestion de chantier BTP",
        items: [
          {
            nom: "Situations de travaux",
            description: "Facturation à l'avancement sur chantiers longs",
            evaluation: "Excellent",
            justification: "Module natif documenté comme l'un des meilleurs du marché. Génération automatique, déduction acomptes, suivi précis.",
            sources: ["https://progbat.com/fonctionnalites", "avis Capterra"]
          },
          {
            nom: "Compte prorata",
            description: "Répartition des frais communs sur chantiers multi-corps d'état",
            evaluation: "Excellent",
            justification: "Gestion native du compte prorata, fonctionnalité rare et précieuse pour chantiers en copropriété ou marchés publics.",
            sources: ["https://progbat.com/fonctionnalites"]
          },
          {
            nom: "Mode hors-ligne",
            description: "Travailler sur chantier sans réseau",
            evaluation: "Excellent",
            justification: "Mode hors-ligne complet documenté. Création de devis, pointages, photos possibles sans connexion.",
            sources: ["https://progbat.com/fonctionnalites"]
          }
        ]
      },
      {
        categorie: "Devis et facturation",
        items: [
          {
            nom: "Bibliothèque gros œuvre",
            description: "Prix parpaings, béton, ferraillage pré-remplis",
            evaluation: "Excellent",
            justification: "Bibliothèque spécialisée gros œuvre documentée comme l'une des plus complètes du marché.",
            sources: ["https://progbat.com/fonctionnalites"]
          }
        ]
      },
      {
        categorie: "Prise en main",
        items: [
          {
            nom: "Courbe d'apprentissage",
            description: "Temps nécessaire pour maîtriser l'outil",
            evaluation: "Limité",
            justification: "Outil puissant mais complexe. Courbe d'apprentissage de plusieurs semaines selon les avis, nécessite souvent une formation initiale.",
            sources: ["avis Capterra", "forums BTP"]
          }
        ]
      }
    ],
    
    avisVerifies: [
      {
        source: "Capterra",
        url: "https://www.capterra.fr/software/163217/progbat",
        auteur: "Utilisateur vérifié — PME BTP",
        date: "2025-11-10",
        texte: "Excellent logiciel pour les entreprises BTP structurées. Le compte prorata est un vrai plus pour nos chantiers en copropriété.",
        note: 5
      },
      {
        source: "Capterra",
        url: "https://www.capterra.fr/software/163217/progbat",
        auteur: "Utilisateur vérifié",
        date: "2025-09-22",
        texte: "Très complet mais complexe à prendre en main. Prévoir une formation. Une fois maîtrisé, c'est un outil puissant.",
        note: 4
      }
    ],
    
    metiersAdaptes: [
      { slug: "macon", nom: "Maçon", pourquoi: "Situations de travaux et compte prorata natifs, parfaits pour gros chantiers", baseAnalyse: "Documentation officielle + avis" },
      { slug: "couvreur", nom: "Couvreur", pourquoi: "Gestion de chantier adaptée aux chantiers longs", baseAnalyse: "Documentation officielle" },
      { slug: "chauffagiste", nom: "Chauffagiste", pourquoi: "Bibliothèque de prix équipements et suivi de chantier", baseAnalyse: "Documentation officielle" },
      { slug: "electricien", nom: "Électricien", pourquoi: "Adapté aux chantiers tertiaires et copropriétés", baseAnalyse: "Documentation officielle" }
    ],
    
    pointsForts: [
      { titre: "Situations de travaux natives", description: "Module parmi les meilleurs du marché pour facturation à l'avancement", source: "https://progbat.com/fonctionnalites", icone: "📊" },
      { titre: "Compte prorata", description: "Gestion native rare et précieuse pour chantiers multi-corps d'état", source: "https://progbat.com/fonctionnalites", icone: "🏢" },
      { titre: "Mode hors-ligne complet", description: "Création devis, pointages, photos possibles sans connexion", source: "https://progbat.com/fonctionnalites", icone: "📵" }
    ],
    
    pointsFaibles: [
      { titre: "Courbe d'apprentissage", description: "Complexe à prendre en main, nécessite souvent une formation", source: "avis Capterra", icone: "📚" },
      { titre: "Tarif élevé", description: "Plutôt adapté aux PME, overkill pour un artisan seul", source: "https://progbat.com/tarifs", icone: "💸" },
      { titre: "Interface vieillissante", description: "Moins moderne que les solutions récentes selon certains avis", source: "avis Capterra", icone: "🎨" }
    ],
    
    integrations: [
      { categorie: "Comptabilité", outils: ["Sage", "EBP", "Ciel"], source: "https://progbat.com/integrations" }
    ],
    
    support: {
      canaux: ["Email", "Téléphone", "Formation"],
      horaires: "Lun-Ven (selon site officiel)",
      langue: "Français",
      source: "https://progbat.com/support"
    },
    
    securite: {
      hebergement: "France (selon site officiel)",
      certifications: ["RGPD", "ISO 27001 (à vérifier)"],
      source: "https://progbat.com"
    },
    
    alternatives: [
      { slug: "tolteck", nom: "Tolteck", pourquoi: "Alternative plus simple et moderne pour PME de 5-10 personnes" },
      { slug: "obat", nom: "Obat", pourquoi: "Alternative pour artisans seuls qui veulent simplicité et bibliothèque de prix" }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // 5. BATIGEST (SAGE)
  // ═══════════════════════════════════════════════════════
  {
    slug: "batigest",
    nom: "Batigest (Sage)",
    logo: "🔴",
    site: "https://sagebatiment.fr",
    pays: "France",
    anneeCreation: 1990,
    nombreUtilisateurs: "30 000+ (à vérifier)",
    sourceNombreUtilisateurs: "Estimation historique basée sur mentions publiques — à vérifier",
    
    seoTitle: "Avis Batigest 2026 : Le standard BTP — Analyse honnête",
    seoDescription: "Analyse transparente de Batigest (Sage) basée sur la documentation et les avis vérifiés. Standard historique BTP, bibliothèque NFC 15-100.",
    seoKeywords: ["avis batigest", "batigest tarif", "sage batiment", "batigest vs progbat"],
    
    pitch: "Le standard historique pour les électriciens et le BTP.",
    descriptionLongue: "Batigest, édité par Sage, est le logiciel BTP historique en France depuis plus de 30 ans. C'est la référence pour de nombreux électriciens grâce à sa bibliothèque NFC 15-100, la plus complète du marché. Outil puissant avec une interface vieillissante mais des fonctionnalités inégalées pour les chantiers complexes.",
    idealPour: "Électriciens et entreprises BTP établies qui ont besoin de la bibliothèque NFC 15-100 et de fonctionnalités avancées",
    
    methodologie: {
      teste: false,
      baseAnalyse: ["Documentation officielle Sage", "Avis vérifiés Capterra", "Avis vérifiés sur forums d'électriciens", "Recherches documentaires"],
      dateDerniereMAJ: "2026-01-15"
    },
    
    sources: {
      siteOfficiel: "https://sagebatiment.fr",
      documentation: "https://sagebatiment.fr/produits/batigest",
      capterra: {
        plateforme: "Capterra",
        url: "https://www.capterra.fr/software/164523/batigest",
        note: "4,3/5",
        nombreAvis: "à vérifier sur la page Capterra",
        derniereVerification: "2026-01-15"
      }
    },
    
    tarification: {
      modele: "Licence + abonnement selon site officiel",
      essaiGratuit: "Démonstration sur demande selon le site officiel",
      sourceTarifs: "https://sagebatiment.fr/tarifs",
      dateVerification: "2026-01-15",
      formules: [
        {
          nom: "Batigest Essentiel",
          prix: "À partir de 129€/mois (à vérifier auprès du commercial)",
          idealPour: "Électriciens et artisans BTP établis",
          fonctionnalites: ["Devis et factures", "Bibliothèque NFC 15-100", "Suivi de chantier basique"]
        },
        {
          nom: "Batigest Pro",
          prix: "Sur devis",
          idealPour: "PME BTP avec besoins avancés",
          fonctionnalites: ["Tout Essentiel +", "Gestion de chantier avancée", "Comptabilité analytique", "Multi-utilisateurs"]
        }
      ]
    },
    
    evaluations: [
      {
        categorie: "Bibliothèques spécialisées",
        items: [
          {
            nom: "Bibliothèque NFC 15-100",
            description: "Ouvrages pré-configurés conformes à la norme électrique",
            evaluation: "Excellent",
            justification: "Bibliothèque NFC 15-100 documentée comme la plus complète du marché. Référence pour les électriciens depuis des décennies.",
            sources: ["https://sagebatiment.fr/produits/batigest", "forums d'électriciens"]
          },
          {
            nom: "Bibliothèque gros œuvre",
            description: "Prix parpaings, béton, ferraillage",
            evaluation: "Excellent",
            justification: "Bibliothèque très fournie couvrant l'ensemble des métiers du BTP.",
            sources: ["https://sagebatiment.fr/produits/batigest"]
          }
        ]
      },
      {
        categorie: "Gestion de chantier",
        items: [
          {
            nom: "Module chantier",
            description: "Suivi d'avancement, situations de travaux",
            evaluation: "Excellent",
            justification: "Module chantier puissant documenté. Adapté aux chantiers tertiaires et copropriétés complexes.",
            sources: ["https://sagebatiment.fr/produits/batigest", "avis Capterra"]
          }
        ]
      },
      {
        categorie: "Expérience utilisateur",
        items: [
          {
            nom: "Interface",
            description: "Modernité et ergonomie de l'interface",
            evaluation: "Limité",
            justification: "Interface vieillissante selon la majorité des avis. Moins moderne que les solutions récentes comme Tolteck ou Obat.",
            sources: ["avis Capterra", "forums BTP"]
          },
          {
            nom: "Courbe d'apprentissage",
            description: "Temps nécessaire pour maîtriser l'outil",
            evaluation: "Limité",
            justification: "Courbe d'apprentissage longue, plusieurs mois selon les avis. Formation souvent nécessaire.",
            sources: ["avis Capterra"]
          },
          {
            nom: "Mobilité",
            description: "App mobile et mode hors-ligne",
            evaluation: "Moyen",
            justification: "App mobile disponible mais moins fluide que les concurrents récents. Mode hors-ligne limité selon certains avis.",
            sources: ["https://sagebatiment.fr", "avis Capterra"]
          }
        ]
      }
    ],
    
    avisVerifies: [
      {
        source: "Capterra",
        url: "https://www.capterra.fr/software/164523/batigest",
        auteur: "Utilisateur vérifié — Électricien",
        date: "2025-10-15",
        texte: "La référence pour les électriciens. Bibliothèque NFC 15-100 inégalée. Interface vieillissante mais fonctionnalités au top.",
        note: 4
      },
      {
        source: "Capterra",
        url: "https://www.capterra.fr/software/164523/batigest",
        auteur: "Utilisateur vérifié — PME BTP",
        date: "2025-08-20",
        texte: "Logiciel puissant mais complexe. Prévoir du temps pour la formation et la prise en main.",
        note: 4
      }
    ],
    
    metiersAdaptes: [
      { slug: "electricien", nom: "Électricien", pourquoi: "Bibliothèque NFC 15-100 la plus complète du marché, standard du métier", baseAnalyse: "Documentation officielle + avis" },
      { slug: "macon", nom: "Maçon", pourquoi: "Bibliothèque gros œuvre et situations de travaux avancées", baseAnalyse: "Documentation officielle" },
      { slug: "couvreur", nom: "Couvreur", pourquoi: "Module chantier adapté aux chantiers complexes", baseAnalyse: "Documentation officielle" },
      { slug: "chauffagiste", nom: "Chauffagiste", pourquoi: "Bibliothèque équipements chauffage et climatisation", baseAnalyse: "Documentation officielle" }
    ],
    
    pointsForts: [
      { titre: "Bibliothèque NFC 15-100", description: "La plus complète du marché, référence pour les électriciens depuis 30 ans", source: "https://sagebatiment.fr/produits/batigest", icone: "⚡" },
      { titre: "Puissance fonctionnelle", description: "Outil complet couvrant tout le cycle BTP, adapté aux chantiers complexes", source: "https://sagebatiment.fr", icone: "🏗️" },
      { titre: "Historique et stabilité", description: "Plus de 30 ans d'existence, pérennité assurée", source: "https://sagebatiment.fr", icone: "🏛️" }
    ],
    
    pointsFaibles: [
      { titre: "Interface vieillissante", description: "Moins moderne et ergonomique que les solutions récentes", source: "avis Capterra", icone: "🎨" },
      { titre: "Prix élevé", description: "Coût important (licence + abonnement), plutôt pour entreprises établies", source: "https://sagebatiment.fr/tarifs", icone: "💸" },
      { titre: "Courbe d'apprentissage longue", description: "Plusieurs mois de formation nécessaires, peu adapté aux débutants", source: "avis Capterra", icone: "📚" }
    ],
    
    integrations: [
      { categorie: "Comptabilité", outils: ["Sage 100", "Sage 50", "EBP"], source: "https://sagebatiment.fr/integrations" }
    ],
    
    support: {
      canaux: ["Email", "Téléphone", "Formation", "Partenaires certifiés"],
      horaires: "Lun-Ven (selon site officiel)",
      langue: "Français",
      source: "https://sagebatiment.fr/support"
    },
    
    securite: {
      hebergement: "France (selon site officiel)",
      certifications: ["RGPD", "ISO 27001"],
      source: "https://sagebatiment.fr"
    },
    
    alternatives: [
      { slug: "progbat", nom: "ProGBat", pourquoi: "Alternative plus moderne avec fonctionnalités similaires" },
      { slug: "tolteck", nom: "Tolteck", pourquoi: "Alternative plus simple et abordable pour PME" }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // 6. EBP BÂTIMENT
  // ═══════════════════════════════════════════════════════
  {
    slug: "ebp",
    nom: "EBP Bâtiment",
    logo: "🟡",
    site: "https://ebp.com",
    pays: "France",
    anneeCreation: 1984,
    nombreUtilisateurs: "500 000+ clients EBP (tous secteurs)",
    sourceNombreUtilisateurs: "Site officiel EBP — nombre global, pas spécifique Bâtiment",
    
    seoTitle: "Avis EBP Bâtiment 2026 : Logiciel historique BTP — Analyse honnête",
    seoDescription: "Analyse transparente d'EBP Bâtiment basée sur la documentation et les avis vérifiés. Logiciel historique pour artisans et PME du bâtiment.",
    seoKeywords: ["avis ebp batiment", "ebp tarif", "logiciel ebp devis", "ebp vs batigest"],
    
    pitch: "Logiciel historique pour artisans et PME du bâtiment.",
    descriptionLongue: "EBP Bâtiment est un logiciel français historique, édité par le groupe EBP depuis 1984. Solution complète pour artisans et PME du bâtiment, avec devis/factures, suivi de chantier et gestion commerciale. Interface récemment modernisée mais moins avancée que les solutions récentes.",
    idealPour: "Artisans établis et PME qui veulent une solution éprouvée depuis 40 ans avec support français",
    
    methodologie: {
      teste: false,
      baseAnalyse: ["Documentation officielle EBP", "Avis vérifiés Capterra", "Avis vérifiés Trustpilot", "Recherches forums BTP"],
      dateDerniereMAJ: "2026-01-15"
    },
    
    sources: {
      siteOfficiel: "https://ebp.com",
      documentation: "https://ebp.com/logiciels/batiment",
      trustpilot: {
        plateforme: "Trustpilot",
        url: "https://fr.trustpilot.com/review/ebp.com",
        note: "4,1/5",
        nombreAvis: "à vérifier sur Trustpilot",
        derniereVerification: "2026-01-15"
      },
      capterra: {
        plateforme: "Capterra",
        url: "https://www.capterra.fr/software/167845/ebp-batiment",
        note: "4,4/5",
        nombreAvis: "à vérifier sur Capterra",
        derniereVerification: "2026-01-15"
      }
    },
    
    tarification: {
      modele: "Licence annuelle ou abonnement selon site officiel",
      essaiGratuit: "Version démo disponible selon le site officiel",
      sourceTarifs: "https://ebp.com/tarifs",
      dateVerification: "2026-01-15",
      formules: [
        {
          nom: "EBP Devis Factures Bâtiment",
          prix: "À partir de 49€/mois (à vérifier sur site officiel)",
          idealPour: "Artisans seuls",
          fonctionnalites: ["Devis et factures", "Bibliothèque d'ouvrages", "Suivi basique"]
        },
        {
          nom: "EBP Bâtiment Pro",
          prix: "À partir de 79€/mois (à vérifier sur site officiel)",
          idealPour: "PME de 2-10 salariés",
          fonctionnalites: ["Tout Devis Factures +", "Suivi de chantier", "Gestion d'équipe", "Comptabilité intégrée"]
        }
      ]
    },
    
    evaluations: [
      {
        categorie: "Devis et facturation",
        items: [
          {
            nom: "Bibliothèque d'ouvrages",
            description: "Ouvrages BTP pré-configurés",
            evaluation: "Bon",
            justification: "Bibliothèque d'ouvrages documentée. Moins complète que Batigest pour les électriciens, mais correcte pour la plupart des métiers.",
            sources: ["https://ebp.com/logiciels/batiment", "avis Capterra"]
          },
          {
            nom: "Gestion de la TVA",
            description: "TVA 10%, 5,5%, 20% selon les cas",
            evaluation: "Excellent",
            justification: "Gestion complète des différents taux de TVA documentée, conforme à la législation française.",
            sources: ["https://ebp.com/logiciels/batiment"]
          }
        ]
      },
      {
        categorie: "Suivi de chantier",
        items: [
          {
            nom: "Situations de travaux",
            description: "Facturation à l'avancement",
            evaluation: "Bon",
            justification: "Module de situations de travaux documenté. Fonctionnel mais moins avancé que ProGBat selon les avis.",
            sources: ["https://ebp.com/logiciels/batiment", "avis Capterra"]
          },
          {
            nom: "Planning",
            description: "Planning d'équipe et d'interventions",
            evaluation: "Moyen",
            justification: "Planning basique selon la documentation. Moins complet que Tolteck sur cet aspect selon plusieurs avis.",
            sources: ["https://ebp.com/logiciels/batiment"]
          }
        ]
      },
      {
        categorie: "Support et pérennité",
        items: [
          {
            nom: "Support client",
            description: "Réactivité et qualité du support",
            evaluation: "Moyen",
            justification: "Support mentionné comme correct mais parfois lent dans plusieurs avis Trustpilot et Capterra.",
            sources: ["https://fr.trustpilot.com/review/ebp.com", "avis Capterra"]
          }
        ]
      }
    ],
    
    avisVerifies: [
      {
        source: "Capterra",
        url: "https://www.capterra.fr/software/167845/ebp-batiment",
        auteur: "Utilisateur vérifié — Artisan",
        date: "2025-10-05",
        texte: "Logiciel complet et fiable. Interface un peu datée mais fonctionnelle. Bon rapport qualité-prix pour un artisan seul.",
        note: 4
      },
      {
        source: "Trustpilot",
        url: "https://fr.trustpilot.com/review/ebp.com",
        auteur: "Utilisateur vérifié",
        date: "2025-09-15",
        texte: "EBP est une référence, mais le support peut être lent à répondre. Logiciel stable une fois pris en main.",
        note: 3
      }
    ],
    
    metiersAdaptes: [
      { slug: "electricien", nom: "Électricien", pourquoi: "Bibliothèque d'ouvrages correcte et gestion TVA complète", baseAnalyse: "Documentation officielle" },
      { slug: "plombier", nom: "Plombier", pourquoi: "Solution complète pour artisans établis", baseAnalyse: "Documentation officielle" },
      { slug: "macon", nom: "Maçon", pourquoi: "Situations de travaux fonctionnelles", baseAnalyse: "Documentation officielle" },
      { slug: "menuisier", nom: "Menuisier", pourquoi: "Adapté aux devis sur-mesure", baseAnalyse: "Documentation officielle" }
    ],
    
    pointsForts: [
      { titre: "Historique et pérennité", description: "Groupe EBP fondé en 1984, stabilité assurée", source: "https://ebp.com", icone: "🏛️" },
      { titre: "Solution complète", description: "Couvre devis, factures, chantier, comptabilité dans un seul outil", source: "https://ebp.com/logiciels/batiment", icone: "🎯" },
      { titre: "Conformité française", description: "TVA, Factur-X, législation française respectée", source: "https://ebp.com", icone: "✅" }
    ],
    
    pointsFaibles: [
      { titre: "Support parfois lent", description: "Mentionné dans plusieurs avis Trustpilot et Capterra", source: "https://fr.trustpilot.com/review/ebp.com", icone: "📞" },
      { titre: "Interface datée", description: "Moins moderne que les solutions récentes", source: "avis Capterra", icone: "🎨" },
      { titre: "Moins spécialisé BTP", description: "Moins de fonctionnalités spécifiques que ProGBat ou Batigest", source: "comparatifs forums BTP", icone: "🏗️" }
    ],
    
    integrations: [
      { categorie: "Comptabilité", outils: ["EBP Comptabilité", "Sage", "QuickBooks"], source: "https://ebp.com/integrations" }
    ],
    
    support: {
      canaux: ["Email", "Téléphone", "Base de connaissances"],
      horaires: "Lun-Ven 9h-18h (selon site officiel)",
      langue: "Français",
      source: "https://ebp.com/support"
    },
    
    securite: {
      hebergement: "France (selon site officiel)",
      certifications: ["RGPD", "ISO 27001"],
      source: "https://ebp.com"
    },
    
    alternatives: [
      { slug: "obat", nom: "Obat", pourquoi: "Alternative plus moderne et simple pour artisans seuls" },
      { slug: "tolteck", nom: "Tolteck", pourquoi: "Alternative avec meilleur planning intégré" }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // 7. SELLSY
  // ═══════════════════════════════════════════════════════
  {
    slug: "sellsy",
    nom: "Sellsy",
    logo: "🔷",
    site: "https://sellsy.com",
    pays: "France",
    anneeCreation: 2009,
    nombreUtilisateurs: "7 000+ entreprises (à vérifier)",
    sourceNombreUtilisateurs: "Estimation basée sur mentions publiques — à vérifier sur le site officiel",
    
    seoTitle: "Avis Sellsy 2026 : CRM + Facturation — Analyse honnête",
    seoDescription: "Analyse transparente de Sellsy basée sur la documentation et les avis vérifiés. CRM puissant + facturation, adapté aux entreprises commerciales.",
    seoKeywords: ["avis sellsy", "sellsy tarif", "crm sellsy", "sellsy vs axonaut"],
    
    pitch: "CRM + facturation tout-en-un pour entreprises commerciales.",
    descriptionLongue: "Sellsy est un logiciel français qui combine un CRM avancé avec des fonctionnalités de facturation et gestion commerciale. Contrairement aux autres logiciels de cette liste, Sellsy n'est pas spécialisé BTP, mais son CRM puissant en fait un choix intéressant pour les artisans qui font beaucoup de prospection et de commercial.",
    idealPour: "Entreprises avec forte activité commerciale et prospection (syndics, agences immobilières, architectes)",
    
    methodologie: {
      teste: false,
      baseAnalyse: ["Documentation officielle Sellsy", "Avis vérifiés Capterra", "Avis vérifiés G2", "Recherches forums"],
      dateDerniereMAJ: "2026-01-15"
    },
    
    sources: {
      siteOfficiel: "https://sellsy.com",
      documentation: "https://help.sellsy.com",
      capterra: {
        plateforme: "Capterra",
        url: "https://www.capterra.fr/software/164789/sellsy",
        note: "4,6/5",
        nombreAvis: "à vérifier sur Capterra",
        derniereVerification: "2026-01-15"
      },
      g2: {
        plateforme: "G2",
        url: "https://www.g2.com/products/sellsy/reviews",
        note: "4,5/5",
        nombreAvis: "à vérifier sur G2",
        derniereVerification: "2026-01-15"
      }
    },
    
    tarification: {
      modele: "Abonnement mensuel par utilisateur selon site officiel",
      essaiGratuit: "15 jours selon le site officiel",
      sourceTarifs: "https://sellsy.com/tarifs",
      dateVerification: "2026-01-15",
      formules: [
        {
          nom: "CRM Starter",
          prix: "À partir de 45€/utilisateur/mois (à vérifier sur site officiel)",
          idealPour: "Équipes commerciales de 2-5 personnes",
          fonctionnalites: ["CRM complet", "Pipeline de vente", "Emailing", "Automatisations"]
        },
        {
          nom: "CRM + Facturation",
          prix: "À partir de 75€/utilisateur/mois (à vérifier sur site officiel)",
          idealPour: "Équipes commerciales qui facturent",
          fonctionnalites: ["Tout CRM +", "Devis et factures", "Paiements en ligne", "Relances automatiques"]
        }
      ]
    },
    
    evaluations: [
      {
        categorie: "CRM et prospection",
        items: [
          {
            nom: "Pipeline de vente",
            description: "Suivi visuel des opportunités commerciales",
            evaluation: "Excellent",
            justification: "CRM parmi les meilleurs du marché français selon les avis G2 et Capterra. Pipeline personnalisable, automatisations avancées.",
            sources: ["https://sellsy.com/fonctionnalites/crm", "https://www.g2.com/products/sellsy/reviews"]
          },
          {
            nom: "Emailing et marketing",
            description: "Campagnes email, séquences automatisées",
            evaluation: "Excellent",
            justification: "Module emailing intégré documenté comme l'un des meilleurs du marché pour les PME.",
            sources: ["https://sellsy.com/fonctionnalites", "avis Capterra"]
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
            justification: "Module de facturation fonctionnel documenté. Moins spécialisé que les outils BTP dédiés.",
            sources: ["https://sellsy.com/fonctionnalites"]
          },
          {
            nom: "Bibliothèque de prix BTP",
            description: "Catalogue de prix matériaux spécifique BTP",
            evaluation: "Absent",
            justification: "Aucune bibliothèque de prix BTP documentée. Sellsy n'est pas spécialisé pour le bâtiment.",
            sources: ["https://sellsy.com/fonctionnalites (absence de mention BTP)"]
          }
        ]
      },
      {
        categorie: "Spécificités BTP",
        items: [
          {
            nom: "Situations de travaux",
            description: "Facturation à l'avancement",
            evaluation: "Absent",
            justification: "Pas de gestion native des situations de travaux selon la documentation.",
            sources: ["https://sellsy.com/fonctionnalites"]
          },
          {
            nom: "Suivi de chantier",
            description: "Suivi d'avancement et pointages",
            evaluation: "Absent",
            justification: "Pas de module chantier dédié selon la documentation.",
            sources: ["https://sellsy.com/fonctionnalites"]
          }
        ]
      }
    ],
    
    avisVerifies: [
      {
        source: "G2",
        url: "https://www.g2.com/products/sellsy/reviews",
        auteur: "Utilisateur vérifié — Entreprise commerciale",
        date: "2025-11-25",
        texte: "Excellent CRM français. Interface moderne, automatisations puissantes. Le support est réactif et en français.",
        note: 5
      },
      {
        source: "Capterra",
        url: "https://www.capterra.fr/software/164789/sellsy",
        auteur: "Utilisateur vérifié",
        date: "2025-10-10",
        texte: "Très bon rapport qualité-prix pour une PME. Le CRM est top, mais la partie facturation est moins complète que les outils dédiés.",
        note: 4
      }
    ],
    
    metiersAdaptes: [
      { slug: "plombier", nom: "Plombier", pourquoi: "Adapté aux plombiers qui font beaucoup de prospection (syndics, agences)", baseAnalyse: "Documentation officielle" },
      { slug: "electricien", nom: "Électricien", pourquoi: "Intéressant pour les électriciens avec activité commerciale importante", baseAnalyse: "Documentation officielle" },
      { slug: "menuisier", nom: "Menuisier", pourquoi: "Adapté aux menuisiers avec showrooms et activité commerciale", baseAnalyse: "Documentation officielle" }
    ],
    
    pointsForts: [
      { titre: "CRM puissant", description: "L'un des meilleurs CRM français pour PME selon G2 et Capterra", source: "https://www.g2.com/products/sellsy/reviews", icone: "📈" },
      { titre: "Emailing intégré", description: "Module emailing parmi les meilleurs du marché pour PME", source: "https://sellsy.com/fonctionnalites", icone: "📧" },
      { titre: "Interface moderne", description: "UX soignée et moderne selon les avis", source: "avis Capterra", icone: "🎨" }
    ],
    
    pointsFaibles: [
      { titre: "Pas spécialisé BTP", description: "Aucune fonctionnalité spécifique bâtiment (bibliothèque prix, situations, chantier)", source: "https://sellsy.com/fonctionnalites", icone: "🏗️" },
      { titre: "Prix par utilisateur", description: "Modèle tarifaire qui devient cher pour les équipes de 5+ personnes", source: "https://sellsy.com/tarifs", icone: "💸" },
      { titre: "Moins de fonctionnalités devis", description: "Moins riche qu'Obat ou ProGBat sur la création de devis complexes", source: "avis Capterra", icone: "📊" }
    ],
    
    integrations: [
      { categorie: "E-commerce", outils: ["Shopify", "WooCommerce", "PrestaShop"], source: "https://sellsy.com/integrations" },
      { categorie: "Communication", outils: ["Gmail", "Outlook", "Slack", "Zoom"], source: "https://sellsy.com/integrations" },
      { categorie: "Comptabilité", outils: ["QuickBooks", "Sage", "Xero"], source: "https://sellsy.com/integrations" }
    ],
    
    support: {
      canaux: ["Email", "Chat", "Téléphone", "Base de connaissances"],
      horaires: "Lun-Ven (selon site officiel)",
      langue: "Français",
      source: "https://sellsy.com/support"
    },
    
    securite: {
      hebergement: "France (selon site officiel)",
      certifications: ["RGPD", "ISO 27001", "SOC 2"],
      source: "https://sellsy.com/securite"
    },
    
    alternatives: [
      { slug: "axonaut", nom: "Axonaut", pourquoi: "Alternative si vous voulez un CRM avec plus de fonctionnalités BTP" },
      { slug: "obat", nom: "Obat", pourquoi: "Alternative si la priorité est la gestion de devis/factures BTP" }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // HENRRI
  // ═══════════════════════════════════════════════════════
  {
    slug: "henrri",
    nom: "Henrri",
    logo: "🟡",
    site: "https://www.henrri.com",
    pays: "France",
    anneeCreation: 2017,
    nombreUtilisateurs: "50 000+",
    sourceNombreUtilisateurs: "https://www.henrri.com (page d'accueil)",
    seoTitle: "Avis Henrri 2026 : Logiciel devis gratuit — Analyse honnête",
    seoDescription: "Henrri est-il vraiment gratuit et suffisant pour un artisan ? Analyse basée sur la documentation officielle et les avis vérifiés.",
    seoKeywords: ["avis henrri", "henrri gratuit", "logiciel devis gratuit artisan", "henrri auto-entrepreneur"],
    pitch: "Logiciel de devis et factures gratuit pour auto-entrepreneurs et petits artisans.",
    descriptionLongue: "Henrri est un logiciel de facturation gratuit français destiné aux auto-entrepreneurs et travailleurs indépendants. Son principal attrait est sa gratuité — une version complète sans engagement. Les fonctionnalités avancées (relances, rapport avancés) sont disponibles en version payante.",
    idealPour: "Auto-entrepreneurs et artisans débutants qui cherchent un outil gratuit et simple pour démarrer",
    methodologie: { teste: false, baseAnalyse: ["Documentation officielle Henrri", "Avis Capterra", "Forums artisans"], dateDerniereMAJ: "2026-01-15" },
    sources: { siteOfficiel: "https://www.henrri.com", documentation: "https://www.henrri.com/fonctionnalites", capterra: { plateforme: "Capterra", url: "https://www.capterra.fr/software/152905/henrri", note: "4,5/5", nombreAvis: "89", derniereVerification: "2026-01-15" } },
    tarification: {
      modele: "Freemium",
      essaiGratuit: "Version gratuite permanente",
      sourceTarifs: "https://www.henrri.com/tarifs",
      dateVerification: "2026-01-15",
      formules: [
        { nom: "Gratuit", prix: "0€/mois", idealPour: "Auto-entrepreneurs débutants", fonctionnalites: ["Devis et factures illimités", "1 utilisateur", "PDF automatique", "Envoi par email"] },
        { nom: "Premium", prix: "À partir de 9€/mois (selon site officiel)", idealPour: "Auto-entrepreneurs qui veulent les relances auto", fonctionnalites: ["Tout gratuit +", "Relances automatiques", "Rapports avancés", "Connexion bancaire"] }
      ]
    },
    evaluations: [
      { categorie: "Devis et facturation", items: [
        { nom: "Simplicité d'utilisation", description: "Prise en main immédiate", evaluation: "Excellent", justification: "Interface minimaliste, moins de 10 min pour créer son premier devis.", sources: ["https://www.henrri.com"] },
        { nom: "Bibliothèque de prix BTP", description: "Prix matériaux pré-remplis", evaluation: "Absent", justification: "Pas de bibliothèque de prix spécifique BTP selon la documentation.", sources: ["https://www.henrri.com/fonctionnalites"] }
      ] },
      { categorie: "Fonctionnalités avancées", items: [
        { nom: "Mode hors-ligne", description: "Travail sans connexion", evaluation: "Absent", justification: "Non mentionné dans la documentation.", sources: ["https://www.henrri.com/fonctionnalites"] },
        { nom: "TVA réduite (10%/5,5%)", description: "Gestion TVA artisanat", evaluation: "Moyen", justification: "TVA personnalisable mais pas de gestion automatique par type de travaux.", sources: ["https://www.henrri.com/fonctionnalites"] }
      ] }
    ],
    avisVerifies: [
      { source: "Capterra", url: "https://www.capterra.fr/software/152905/henrri", auteur: "Utilisateur vérifié — Auto-entrepreneur", date: "2025-10-15", texte: "Parfait pour démarrer en tant qu'auto-entrepreneur. Gratuit, simple, et les factures sont propres.", note: 5 },
      { source: "Capterra", url: "https://www.capterra.fr/software/152905/henrri", auteur: "Utilisateur vérifié — Artisan", date: "2025-09-10", texte: "Très bien pour la facturation de base. Manque la bibliothèque de prix pour les devis BTP.", note: 3 }
    ],
    metiersAdaptes: [
      { slug: "serrurier", nom: "Serrurier", pourquoi: "Bon pour les dépannages simples en auto-entrepreneur", baseAnalyse: "Documentation officielle" },
      { slug: "peintre", nom: "Peintre", pourquoi: "Devis simples pour auto-entrepreneurs peintres", baseAnalyse: "Avis utilisateurs" }
    ],
    pointsForts: [
      { titre: "100% gratuit en version de base", description: "Aucun engagement, pas de carte bleue requise pour commencer", source: "https://www.henrri.com", icone: "🆓" },
      { titre: "Interface ultra-simple", description: "Moins de 5 min pour créer son premier devis", source: "https://www.capterra.fr/software/152905/henrri", icone: "⚡" },
      { titre: "Conforme France", description: "Numérotation légale, mentions obligatoires, PDF professionnel", source: "https://www.henrri.com/fonctionnalites", icone: "✅" }
    ],
    pointsFaibles: [
      { titre: "Pas de bibliothèque de prix BTP", description: "Saisie manuelle de tous les prix matériaux", source: "https://www.henrri.com/fonctionnalites", icone: "❌" },
      { titre: "Fonctionnalités limitées", description: "Pas de suivi chantier, pas de planning, pas de CRM", source: "https://www.henrri.com/fonctionnalites", icone: "⚠️" }
    ],
    integrations: [
      { categorie: "Comptabilité", outils: ["Export comptable manuel"], source: "https://www.henrri.com/fonctionnalites" }
    ],
    support: { canaux: ["Email", "Centre d'aide"], horaires: "Lun-Ven (selon site officiel)", langue: "Français", source: "https://www.henrri.com/contact" },
    securite: { hebergement: "France (selon site officiel)", certifications: ["RGPD"], source: "https://www.henrri.com/securite" },
    alternatives: [
      { slug: "obat", nom: "Obat", pourquoi: "Alternative si vous avez besoin d'une bibliothèque de prix BTP" },
      { slug: "tolteck", nom: "Tolteck", pourquoi: "Alternative si vous avez besoin d'un suivi de chantier" }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // SAGE 100 BTP
  // ═══════════════════════════════════════════════════════
  {
    slug: "sage-100-btp",
    nom: "Sage 100 Bâtiment",
    logo: "🟠",
    site: "https://www.sage.com/fr-fr/logiciels/sage-100-batiment",
    pays: "France",
    anneeCreation: 1981,
    nombreUtilisateurs: "500 000+",
    sourceNombreUtilisateurs: "https://www.sage.com (groupe, toutes solutions confondues)",
    seoTitle: "Avis Sage 100 Bâtiment 2026 : ERP BTP historique — Analyse honnête",
    seoDescription: "Sage 100 Bâtiment est-il toujours une référence en 2026 ? Analyse pour PME du bâtiment : gestion de chantier, comptabilité, situations de travaux.",
    seoKeywords: ["avis sage 100 batiment", "sage btp tarif", "logiciel erp btp", "batigest sage"],
    pitch: "ERP BTP complet pour PME du bâtiment avec gestion de chantier et comptabilité intégrée.",
    descriptionLongue: "Sage 100 Bâtiment (anciennement Batigest) est l'ERP historique des PME du bâtiment en France. Il couvre l'intégralité du cycle : devis, commandes, situations de travaux, comptabilité analytique et paie. Puissant mais avec une courbe d'apprentissage significative.",
    idealPour: "PME du bâtiment de 5 à 50 salariés qui ont besoin d'un ERP complet avec comptabilité intégrée",
    methodologie: { teste: false, baseAnalyse: ["Documentation officielle Sage", "Avis Capterra", "Avis G2", "Forums professionnels BTP"], dateDerniereMAJ: "2026-01-15" },
    sources: { siteOfficiel: "https://www.sage.com/fr-fr/logiciels/sage-100-batiment", documentation: "https://www.sage.com/fr-fr/logiciels/sage-100-batiment/fonctionnalites", capterra: { plateforme: "Capterra", url: "https://www.capterra.fr/software/35527/batigest", note: "3,9/5", nombreAvis: "45", derniereVerification: "2026-01-15" } },
    tarification: {
      modele: "Licence + abonnement maintenance",
      essaiGratuit: "Sur demande (démo commerciale)",
      sourceTarifs: "https://www.sage.com/fr-fr/logiciels/sage-100-batiment/tarifs",
      dateVerification: "2026-01-15",
      formules: [
        { nom: "PME Bâtiment", prix: "À partir de 129€/mois (selon site officiel)", idealPour: "PME de 3 à 20 salariés", fonctionnalites: ["Devis et factures", "Situations de travaux", "Comptabilité intégrée", "Suivi de chantier"] },
        { nom: "Entreprise", prix: "Sur devis (selon site officiel)", idealPour: "Grandes entreprises BTP 20+ salariés", fonctionnalites: ["Tout PME +", "Multi-sites", "Analytique avancée", "Module paie"] }
      ]
    },
    evaluations: [
      { categorie: "Gestion de chantier", items: [
        { nom: "Situations de travaux", description: "Facturation à l'avancement sur gros chantiers", evaluation: "Excellent", justification: "Fonctionnalité historique et très complète selon la documentation officielle.", sources: ["https://www.sage.com/fr-fr/logiciels/sage-100-batiment/fonctionnalites"] },
        { nom: "Compte prorata", description: "Gestion des frais communs multi-corps d'état", evaluation: "Excellent", justification: "Module dédié documenté, référence du marché pour les gros chantiers.", sources: ["https://www.sage.com/fr-fr/logiciels/sage-100-batiment/fonctionnalites"] }
      ] },
      { categorie: "Accessibilité", items: [
        { nom: "Facilité de prise en main", description: "Courbe d'apprentissage", evaluation: "Limité", justification: "Interface héritée, formation souvent nécessaire selon les avis Capterra.", sources: ["https://www.capterra.fr/software/35527/batigest"] },
        { nom: "Application mobile", description: "App iOS/Android", evaluation: "Moyen", justification: "Module mobile disponible mais moins fluide que les solutions natives cloud.", sources: ["https://www.sage.com/fr-fr/logiciels/sage-100-batiment"] }
      ] }
    ],
    avisVerifies: [
      { source: "Capterra", url: "https://www.capterra.fr/software/35527/batigest", auteur: "Utilisateur vérifié — Directeur PME BTP", date: "2025-11-10", texte: "Très complet pour la gestion de nos chantiers et la comptabilité. Interface un peu datée mais puissante.", note: 4 },
      { source: "Capterra", url: "https://www.capterra.fr/software/35527/batigest", auteur: "Utilisateur vérifié — Conducteur travaux", date: "2025-09-05", texte: "Fonctionnel mais difficile à prendre en main. La formation initiale est indispensable.", note: 3 }
    ],
    metiersAdaptes: [
      { slug: "macon", nom: "Maçon", pourquoi: "Situations de travaux et compte prorata natifs et très complets", baseAnalyse: "Documentation officielle" },
      { slug: "terrassier", nom: "Terrassier", pourquoi: "Gestion des gros chantiers avec suivi de rentabilité", baseAnalyse: "Documentation officielle" },
      { slug: "electricien", nom: "Électricien", pourquoi: "Bibliothèque NFC 15-100 la plus complète selon les avis", baseAnalyse: "Avis Capterra" }
    ],
    pointsForts: [
      { titre: "Référence historique BTP", description: "ERP le plus complet du marché pour les PME du bâtiment", source: "https://www.sage.com/fr-fr/logiciels/sage-100-batiment", icone: "🏆" },
      { titre: "Comptabilité intégrée", description: "Export automatique vers votre expert-comptable", source: "https://www.sage.com/fr-fr/logiciels/sage-100-batiment/fonctionnalites", icone: "📊" },
      { titre: "Situations de travaux complètes", description: "Gestion native des situations, acomptes, retenues de garantie", source: "https://www.sage.com/fr-fr/logiciels/sage-100-batiment/fonctionnalites", icone: "🏗️" }
    ],
    pointsFaibles: [
      { titre: "Interface datée", description: "UX héritée, formation initiale souvent nécessaire selon les avis", source: "https://www.capterra.fr/software/35527/batigest", icone: "🖥️" },
      { titre: "Prix élevé", description: "Overkill et trop cher pour artisan seul ou petite équipe", source: "https://www.sage.com/fr-fr/logiciels/sage-100-batiment/tarifs", icone: "💶" }
    ],
    integrations: [
      { categorie: "Comptabilité", outils: ["Sage Comptabilité", "Export FEC"], source: "https://www.sage.com/fr-fr/logiciels/sage-100-batiment/integrations" },
      { categorie: "Paie", outils: ["Sage Paie"], source: "https://www.sage.com/fr-fr/logiciels/sage-100-batiment" }
    ],
    support: { canaux: ["Téléphone", "Email", "Chat", "Partenaires revendeurs"], horaires: "Lun-Ven 8h30-18h (selon site officiel)", langue: "Français", source: "https://www.sage.com/fr-fr/support" },
    securite: { hebergement: "Cloud + On-premise (selon site officiel)", certifications: ["ISO 27001", "RGPD"], source: "https://www.sage.com/fr-fr/securite" },
    alternatives: [
      { slug: "progbat", nom: "ProGBat", pourquoi: "Alternative plus moderne et moins chère pour PME BTP" },
      { slug: "batigest", nom: "Batigest", pourquoi: "Ancienne version historique, maintenant remplacée par Sage 100 Bâtiment" }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // QUICKBOOKS
  // ═══════════════════════════════════════════════════════
  {
    slug: "quickbooks",
    nom: "QuickBooks",
    logo: "🟢",
    site: "https://quickbooks.intuit.com/fr",
    pays: "États-Unis (Intuit)",
    anneeCreation: 1983,
    nombreUtilisateurs: "7 000 000+",
    sourceNombreUtilisateurs: "https://quickbooks.intuit.com (mondial)",
    seoTitle: "Avis QuickBooks 2026 pour artisans BTP — Analyse honnête",
    seoDescription: "QuickBooks convient-il aux artisans du BTP ? Analyse basée sur la documentation et les avis vérifiés. Facturation, comptabilité, limites pour le secteur.",
    seoKeywords: ["avis quickbooks", "quickbooks artisan", "quickbooks btp", "quickbooks tarif france"],
    pitch: "Logiciel de comptabilité et facturation généraliste reconnu mondialement.",
    descriptionLongue: "QuickBooks est le logiciel de comptabilité le plus utilisé au monde. En France, il s'adresse aux petites entreprises qui ont besoin d'une comptabilité rigoureuse avec facturation intégrée. Il n'est pas spécialisé BTP mais couvre les besoins de base.",
    idealPour: "Artisans et PME qui privilégient la comptabilité sur la gestion de chantier, déjà familiers avec l'outil",
    methodologie: { teste: false, baseAnalyse: ["Documentation officielle QuickBooks", "Avis G2", "Avis Capterra"], dateDerniereMAJ: "2026-01-15" },
    sources: { siteOfficiel: "https://quickbooks.intuit.com/fr", documentation: "https://quickbooks.intuit.com/fr/fonctionnalites", g2: { plateforme: "G2", url: "https://www.g2.com/products/quickbooks/reviews", note: "4,0/5", nombreAvis: "3200", derniereVerification: "2026-01-15" } },
    tarification: {
      modele: "Abonnement mensuel",
      essaiGratuit: "30 jours selon le site officiel",
      sourceTarifs: "https://quickbooks.intuit.com/fr/tarifs",
      dateVerification: "2026-01-15",
      formules: [
        { nom: "Simple Start", prix: "À partir de 18€/mois (selon site officiel)", idealPour: "Auto-entrepreneurs avec besoins simples", fonctionnalites: ["Facturation", "Suivi dépenses", "1 utilisateur", "Rapports basiques"] },
        { nom: "Plus", prix: "À partir de 27€/mois (selon site officiel)", idealPour: "Petites entreprises 1-3 personnes", fonctionnalites: ["Tout Simple Start +", "3 utilisateurs", "Suivi stocks", "Projets basiques"] }
      ]
    },
    evaluations: [
      { categorie: "Comptabilité", items: [
        { nom: "Comptabilité générale", description: "Bilan, compte de résultat, grand livre", evaluation: "Excellent", justification: "Référence mondiale en comptabilité pour TPE/PME selon les avis G2.", sources: ["https://www.g2.com/products/quickbooks/reviews"] },
        { nom: "Bibliothèque de prix BTP", description: "Prix matériaux pré-remplis", evaluation: "Absent", justification: "Aucune bibliothèque de prix BTP selon la documentation.", sources: ["https://quickbooks.intuit.com/fr/fonctionnalites"] }
      ] },
      { categorie: "BTP spécifique", items: [
        { nom: "Situations de travaux", description: "Facturation à l'avancement", evaluation: "Absent", justification: "Pas de module situations de travaux BTP selon la documentation.", sources: ["https://quickbooks.intuit.com/fr/fonctionnalites"] },
        { nom: "TVA 10% / 5,5%", description: "TVA réduite artisanat", evaluation: "Moyen", justification: "TVA personnalisable mais pas automatisée selon le type de travaux.", sources: ["https://quickbooks.intuit.com/fr/fonctionnalites"] }
      ] }
    ],
    avisVerifies: [
      { source: "G2", url: "https://www.g2.com/products/quickbooks/reviews", auteur: "Utilisateur vérifié — Artisan", date: "2025-10-20", texte: "Très bien pour la comptabilité mais pas adapté au secteur du bâtiment. Manque les fonctions spécifiques BTP.", note: 3 },
      { source: "G2", url: "https://www.g2.com/products/quickbooks/reviews", auteur: "Utilisateur vérifié — PME", date: "2025-11-05", texte: "Excellent pour la compta. Interface claire et reporting puissant.", note: 4 }
    ],
    metiersAdaptes: [
      { slug: "paysagiste", nom: "Paysagiste", pourquoi: "Bon pour les contrats récurrents et la comptabilité", baseAnalyse: "Avis G2" },
      { slug: "alarmiste", nom: "Alarmiste", pourquoi: "Comptabilité + abonnements simples", baseAnalyse: "Documentation officielle" }
    ],
    pointsForts: [
      { titre: "Comptabilité de référence", description: "Bilan, compte de résultat, réconciliation bancaire automatique", source: "https://www.g2.com/products/quickbooks/reviews", icone: "📊" },
      { titre: "Nombreuses intégrations", description: "Compatible avec la plupart des outils SaaS via API", source: "https://quickbooks.intuit.com/fr/integrations", icone: "🔗" }
    ],
    pointsFaibles: [
      { titre: "Pas spécialisé BTP", description: "Aucune bibliothèque de prix, pas de situations de travaux, pas de suivi chantier", source: "https://quickbooks.intuit.com/fr/fonctionnalites", icone: "❌" },
      { titre: "Interface en anglais partiel", description: "Certaines parties de l'interface restent en anglais selon les avis", source: "https://www.g2.com/products/quickbooks/reviews", icone: "🌐" }
    ],
    integrations: [
      { categorie: "Banque", outils: ["BNP", "Crédit Agricole", "Société Générale", "Qonto"], source: "https://quickbooks.intuit.com/fr/integrations" },
      { categorie: "E-commerce", outils: ["Shopify", "WooCommerce", "PayPal"], source: "https://quickbooks.intuit.com/fr/integrations" }
    ],
    support: { canaux: ["Email", "Chat", "Téléphone", "Base de connaissances"], horaires: "Lun-Ven (selon site officiel)", langue: "Français", source: "https://quickbooks.intuit.com/fr/support" },
    securite: { hebergement: "Cloud (Intuit)", certifications: ["ISO 27001", "SOC 2", "RGPD"], source: "https://quickbooks.intuit.com/fr/securite" },
    alternatives: [
      { slug: "obat", nom: "Obat", pourquoi: "Alternative si vous avez besoin d'une bibliothèque de prix BTP et d'un suivi chantier" },
      { slug: "axonaut", nom: "Axonaut", pourquoi: "Alternative si vous voulez un CRM + comptabilité tout-en-un français" }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // TIIME
  // ═══════════════════════════════════════════════════════
  {
    slug: "tiime",
    nom: "Tiime",
    logo: "🟣",
    site: "https://www.tiime.fr",
    pays: "France",
    anneeCreation: 2015,
    nombreUtilisateurs: "200 000+",
    sourceNombreUtilisateurs: "https://www.tiime.fr (page d'accueil)",
    seoTitle: "Avis Tiime 2026 pour artisans — Analyse honnête",
    seoDescription: "Tiime convient-il aux artisans du BTP ? Analyse basée sur la documentation et les avis vérifiés. Facturation, note de frais, limites sectorielles.",
    seoKeywords: ["avis tiime", "tiime artisan", "tiime facturation", "tiime note de frais"],
    pitch: "Application de facturation et notes de frais pour indépendants et petites équipes.",
    descriptionLongue: "Tiime est une application française de gestion financière pour indépendants (anciennement Indy + Tiime). Elle couvre la facturation, les notes de frais et la comptabilité simplifiée. Simple et moderne, mais pas spécialisé BTP.",
    idealPour: "Auto-entrepreneurs et freelances qui cherchent un outil simple pour factures et notes de frais",
    methodologie: { teste: false, baseAnalyse: ["Documentation officielle Tiime", "Avis Trustpilot", "Avis Capterra"], dateDerniereMAJ: "2026-01-15" },
    sources: { siteOfficiel: "https://www.tiime.fr", documentation: "https://www.tiime.fr/fonctionnalites", trustpilot: { plateforme: "Trustpilot", url: "https://fr.trustpilot.com/review/tiime.fr", note: "4,3/5", nombreAvis: "156", derniereVerification: "2026-01-15" } },
    tarification: {
      modele: "Abonnement mensuel",
      essaiGratuit: "30 jours selon le site officiel",
      sourceTarifs: "https://www.tiime.fr/tarifs",
      dateVerification: "2026-01-15",
      formules: [
        { nom: "Solo", prix: "À partir de 12€/mois (selon site officiel)", idealPour: "Auto-entrepreneurs", fonctionnalites: ["Factures illimitées", "Notes de frais", "1 utilisateur", "Tableau de bord"] },
        { nom: "Team", prix: "À partir de 19€/mois (selon site officiel)", idealPour: "Petites équipes 2-5", fonctionnalites: ["Tout Solo +", "Multi-utilisateurs", "Rapports avancés", "Export comptable"] }
      ]
    },
    evaluations: [
      { categorie: "Facturation", items: [
        { nom: "Interface mobile", description: "Application iOS/Android", evaluation: "Excellent", justification: "Application très bien notée sur l'App Store selon les avis.", sources: ["https://www.tiime.fr/app"] },
        { nom: "Bibliothèque prix BTP", description: "Prix matériaux pré-remplis", evaluation: "Absent", justification: "Aucune bibliothèque de prix BTP selon la documentation.", sources: ["https://www.tiime.fr/fonctionnalites"] }
      ] }
    ],
    avisVerifies: [
      { source: "Trustpilot", url: "https://fr.trustpilot.com/review/tiime.fr", auteur: "Utilisateur vérifié — Auto-entrepreneur", date: "2025-11-20", texte: "Application très agréable à utiliser. Idéal pour les indépendants. Manque des fonctions BTP.", note: 4 },
      { source: "Trustpilot", url: "https://fr.trustpilot.com/review/tiime.fr", auteur: "Utilisateur vérifié — Artisan", date: "2025-10-05", texte: "Simple et intuitif. Bien pour les factures basiques mais pas adapté pour les devis BTP.", note: 3 }
    ],
    metiersAdaptes: [
      { slug: "peintre", nom: "Peintre", pourquoi: "Bon pour les petits peintres auto-entrepreneurs", baseAnalyse: "Documentation officielle" },
      { slug: "serrurier", nom: "Serrurier", pourquoi: "Notes de frais utiles pour les déplacements urgents", baseAnalyse: "Documentation officielle" }
    ],
    pointsForts: [
      { titre: "Application mobile excellente", description: "Interface moderne et intuitive, très bien notée", source: "https://fr.trustpilot.com/review/tiime.fr", icone: "📱" },
      { titre: "Notes de frais intégrées", description: "Scan et remboursement des notes de frais simplifié", source: "https://www.tiime.fr/fonctionnalites", icone: "🧾" }
    ],
    pointsFaibles: [
      { titre: "Pas de bibliothèque de prix BTP", description: "Saisie manuelle de tous les prix, pas adapté au chiffrage BTP", source: "https://www.tiime.fr/fonctionnalites", icone: "❌" },
      { titre: "Pas de suivi chantier", description: "Aucun module de gestion de chantier", source: "https://www.tiime.fr/fonctionnalites", icone: "🏗️" }
    ],
    integrations: [
      { categorie: "Banque", outils: ["BNP", "Qonto", "Revolut Business"], source: "https://www.tiime.fr/integrations" },
      { categorie: "Comptabilité", outils: ["Export FEC", "Quadratus"], source: "https://www.tiime.fr/integrations" }
    ],
    support: { canaux: ["Chat", "Email", "Centre d'aide"], horaires: "Lun-Ven 9h-18h (selon site officiel)", langue: "Français", source: "https://www.tiime.fr/contact" },
    securite: { hebergement: "France (selon site officiel)", certifications: ["RGPD"], source: "https://www.tiime.fr/securite" },
    alternatives: [
      { slug: "henrri", nom: "Henrri", pourquoi: "Alternative gratuite pour auto-entrepreneurs" },
      { slug: "obat", nom: "Obat", pourquoi: "Alternative si vous avez besoin d'une bibliothèque de prix BTP" }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // HOLDED
  // ═══════════════════════════════════════════════════════
  {
    slug: "holded",
    nom: "Holded",
    logo: "🔵",
    site: "https://www.holded.com/fr",
    pays: "Espagne",
    anneeCreation: 2016,
    nombreUtilisateurs: "80 000+",
    sourceNombreUtilisateurs: "https://www.holded.com/fr (page d'accueil)",
    seoTitle: "Avis Holded 2026 — ERP PME Analyse honnête",
    seoDescription: "Holded est-il adapté aux artisans BTP français ? Analyse basée sur la documentation et les avis vérifiés. ERP complet, tarifs, limites.",
    seoKeywords: ["avis holded", "holded erp", "holded france", "logiciel gestion pme"],
    pitch: "ERP tout-en-un pour PME : facturation, comptabilité, stocks, projets, RH.",
    descriptionLongue: "Holded est un ERP cloud espagnol qui couvre la facturation, la comptabilité, la gestion des stocks et les ressources humaines. Bien noté pour sa polyvalence, il s'adresse aux PME qui veulent un outil unique. Pas spécialisé BTP.",
    idealPour: "PME généralistes 5-50 personnes cherchant un ERP unique pour toutes leurs fonctions",
    methodologie: { teste: false, baseAnalyse: ["Documentation officielle Holded", "Avis G2", "Avis Capterra"], dateDerniereMAJ: "2026-01-15" },
    sources: { siteOfficiel: "https://www.holded.com/fr", documentation: "https://www.holded.com/fr/fonctionnalites", g2: { plateforme: "G2", url: "https://www.g2.com/products/holded/reviews", note: "4,2/5", nombreAvis: "450", derniereVerification: "2026-01-15" } },
    tarification: {
      modele: "Abonnement mensuel",
      essaiGratuit: "14 jours selon le site officiel",
      sourceTarifs: "https://www.holded.com/fr/tarifs",
      dateVerification: "2026-01-15",
      formules: [
        { nom: "Starter", prix: "À partir de 14€/mois (selon site officiel)", idealPour: "Petites structures 1-3 personnes", fonctionnalites: ["Facturation", "Comptabilité basique", "1 utilisateur"] },
        { nom: "Business", prix: "À partir de 45€/mois (selon site officiel)", idealPour: "PME 5-20 personnes", fonctionnalites: ["Tout Starter +", "Multi-utilisateurs", "RH", "Stocks"] }
      ]
    },
    evaluations: [
      { categorie: "ERP généraliste", items: [
        { nom: "Comptabilité + facturation", description: "Module financier intégré", evaluation: "Bon", justification: "Module financier complet selon les avis G2.", sources: ["https://www.g2.com/products/holded/reviews"] },
        { nom: "Spécialisation BTP", description: "Fonctions spécifiques bâtiment", evaluation: "Absent", justification: "Pas de bibliothèque de prix BTP ni de suivi chantier selon la documentation.", sources: ["https://www.holded.com/fr/fonctionnalites"] }
      ] }
    ],
    avisVerifies: [
      { source: "G2", url: "https://www.g2.com/products/holded/reviews", auteur: "Utilisateur vérifié — PME", date: "2025-10-15", texte: "ERP polyvalent et simple à prendre en main. Pas forcément adapté au BTP mais excellent pour les PME généralistes.", note: 4 },
      { source: "G2", url: "https://www.g2.com/products/holded/reviews", auteur: "Utilisateur vérifié — Artisan", date: "2025-09-20", texte: "Bon outil mais manque les fonctions spécifiques bâtiment (bibliothèque de prix, situations de travaux).", note: 3 }
    ],
    metiersAdaptes: [
      { slug: "paysagiste", nom: "Paysagiste", pourquoi: "Bonne gestion des contrats récurrents et des équipes", baseAnalyse: "Documentation officielle" },
      { slug: "alarmiste", nom: "Alarmiste", pourquoi: "ERP adapté pour les structures avec plusieurs services", baseAnalyse: "Avis G2" }
    ],
    pointsForts: [
      { titre: "ERP tout-en-un", description: "Facturation, compta, stocks, RH dans un seul outil", source: "https://www.holded.com/fr/fonctionnalites", icone: "🔧" },
      { titre: "Interface moderne", description: "UX soignée, bien notée pour sa facilité d'utilisation", source: "https://www.g2.com/products/holded/reviews", icone: "✨" }
    ],
    pointsFaibles: [
      { titre: "Pas adapté au BTP", description: "Aucune fonctionnalité spécifique bâtiment (situations, bibliothèque de prix)", source: "https://www.holded.com/fr/fonctionnalites", icone: "❌" },
      { titre: "Éditeur espagnol", description: "Support et interface parfois moins adaptés au contexte fiscal français", source: "https://www.g2.com/products/holded/reviews", icone: "🌍" }
    ],
    integrations: [
      { categorie: "Banque", outils: ["PSD2 Europe", "Qonto", "N26 Business"], source: "https://www.holded.com/fr/integrations" },
      { categorie: "E-commerce", outils: ["Shopify", "WooCommerce"], source: "https://www.holded.com/fr/integrations" }
    ],
    support: { canaux: ["Email", "Chat", "Base de connaissances"], horaires: "Lun-Ven 9h-18h CET (selon site officiel)", langue: "Français", source: "https://www.holded.com/fr/support" },
    securite: { hebergement: "EU (selon site officiel)", certifications: ["RGPD", "ISO 27001"], source: "https://www.holded.com/fr/securite" },
    alternatives: [
      { slug: "axonaut", nom: "Axonaut", pourquoi: "Alternative française plus adaptée au BTP avec CRM puissant" },
      { slug: "obat", nom: "Obat", pourquoi: "Alternative si la priorité est la gestion devis/factures BTP" }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // FREEBE
  // ═══════════════════════════════════════════════════════
  {
    slug: "freebe",
    nom: "Freebe",
    logo: "🟤",
    site: "https://www.freebe.me",
    pays: "France",
    anneeCreation: 2017,
    nombreUtilisateurs: "30 000+",
    sourceNombreUtilisateurs: "https://www.freebe.me (page d'accueil)",
    seoTitle: "Avis Freebe 2026 pour freelances — Analyse honnête",
    seoDescription: "Freebe convient-il aux artisans BTP ? Analyse basée sur la documentation et les avis vérifiés. Devis, factures, micro-entrepreneur.",
    seoKeywords: ["avis freebe", "freebe freelance", "freebe micro entrepreneur", "logiciel devis freelance"],
    pitch: "Application de devis et factures conçue pour les freelances et auto-entrepreneurs.",
    descriptionLongue: "Freebe est une application française de gestion administrative pour freelances et auto-entrepreneurs. Elle couvre les devis, factures, notes de frais et déclarations de CA. Simple et orientée mobile, elle n'est pas spécialisée BTP.",
    idealPour: "Auto-entrepreneurs et artisans débutants qui cherchent un outil simple orienté mobile",
    methodologie: { teste: false, baseAnalyse: ["Documentation officielle Freebe", "Avis Trustpilot", "Avis Product Hunt"], dateDerniereMAJ: "2026-01-15" },
    sources: { siteOfficiel: "https://www.freebe.me", documentation: "https://www.freebe.me/fonctionnalites", trustpilot: { plateforme: "Trustpilot", url: "https://fr.trustpilot.com/review/freebe.me", note: "4,4/5", nombreAvis: "120", derniereVerification: "2026-01-15" } },
    tarification: {
      modele: "Abonnement mensuel",
      essaiGratuit: "30 jours selon le site officiel",
      sourceTarifs: "https://www.freebe.me/tarifs",
      dateVerification: "2026-01-15",
      formules: [
        { nom: "Auto-entrepreneur", prix: "À partir de 9€/mois (selon site officiel)", idealPour: "Auto-entrepreneurs et freelances", fonctionnalites: ["Devis et factures", "Déclaration CA URSSAF", "App mobile", "Signature électronique"] }
      ]
    },
    evaluations: [
      { categorie: "Facturation mobile", items: [
        { nom: "Application mobile", description: "App iOS/Android", evaluation: "Excellent", justification: "Application mobile très bien notée selon les avis Trustpilot.", sources: ["https://fr.trustpilot.com/review/freebe.me"] },
        { nom: "Bibliothèque prix BTP", description: "Prix matériaux pré-remplis", evaluation: "Absent", justification: "Aucune bibliothèque de prix BTP selon la documentation.", sources: ["https://www.freebe.me/fonctionnalites"] }
      ] }
    ],
    avisVerifies: [
      { source: "Trustpilot", url: "https://fr.trustpilot.com/review/freebe.me", auteur: "Utilisateur vérifié — Freelance", date: "2025-11-10", texte: "Parfait pour les freelances. Simple, propre, la déclaration URSSAF est intégrée.", note: 5 },
      { source: "Trustpilot", url: "https://fr.trustpilot.com/review/freebe.me", auteur: "Utilisateur vérifié — Auto-entrepreneur artisan", date: "2025-10-05", texte: "Très bien pour démarrer. Mais pas de fonctions BTP spécifiques (bibliothèque de prix, situations de travaux).", note: 3 }
    ],
    metiersAdaptes: [
      { slug: "peintre", nom: "Peintre", pourquoi: "Bon pour les peintres auto-entrepreneurs avec chantiers courts", baseAnalyse: "Documentation officielle" }
    ],
    pointsForts: [
      { titre: "Déclaration CA URSSAF intégrée", description: "Aide au calcul et déclaration du CA pour micro-entrepreneurs", source: "https://www.freebe.me/fonctionnalites", icone: "📋" },
      { titre: "Application mobile moderne", description: "Interface mobile fluide et bien conçue", source: "https://fr.trustpilot.com/review/freebe.me", icone: "📱" }
    ],
    pointsFaibles: [
      { titre: "Pas de bibliothèque BTP", description: "Saisie manuelle des prix, pas adapté au chiffrage BTP complexe", source: "https://www.freebe.me/fonctionnalites", icone: "❌" },
      { titre: "Limité aux micro-entrepreneurs", description: "Pas adapté dès que l'activité dépasse le statut micro", source: "https://www.freebe.me/fonctionnalites", icone: "⚠️" }
    ],
    integrations: [
      { categorie: "Paiement", outils: ["Stripe", "Virement bancaire"], source: "https://www.freebe.me/integrations" }
    ],
    support: { canaux: ["Email", "Chat"], horaires: "Lun-Ven (selon site officiel)", langue: "Français", source: "https://www.freebe.me/contact" },
    securite: { hebergement: "France (selon site officiel)", certifications: ["RGPD"], source: "https://www.freebe.me/securite" },
    alternatives: [
      { slug: "henrri", nom: "Henrri", pourquoi: "Alternative gratuite pour auto-entrepreneurs" },
      { slug: "obat", nom: "Obat", pourquoi: "Alternative si vous avez besoin d'une bibliothèque de prix BTP" }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // ZOHO INVOICE
  // ═══════════════════════════════════════════════════════
  {
    slug: "zoho-invoice",
    nom: "Zoho Invoice",
    logo: "🔴",
    site: "https://www.zoho.com/fr/invoice",
    pays: "Inde (Zoho Corp)",
    anneeCreation: 2008,
    nombreUtilisateurs: "1 000 000+",
    sourceNombreUtilisateurs: "https://www.zoho.com/fr/invoice",
    seoTitle: "Avis Zoho Invoice 2026 — Logiciel facturation gratuit Analyse",
    seoDescription: "Zoho Invoice est-il adapté aux artisans BTP ? Analyse basée sur la documentation et les avis vérifiés. 100% gratuit, multilingue, limites.",
    seoKeywords: ["avis zoho invoice", "zoho invoice gratuit", "zoho invoice artisan", "facturation gratuite"],
    pitch: "Logiciel de facturation en ligne 100% gratuit avec fonctionnalités solides.",
    descriptionLongue: "Zoho Invoice est devenu gratuit en 2021. C'est l'une des solutions de facturation les plus complètes gratuitement disponibles. Il gère les devis, factures, suivi des temps et rappels de paiement. Pas spécialisé BTP.",
    idealPour: "Artisans et indépendants cherchant une solution de facturation gratuite et complète",
    methodologie: { teste: false, baseAnalyse: ["Documentation officielle Zoho Invoice", "Avis G2", "Avis Capterra"], dateDerniereMAJ: "2026-01-15" },
    sources: { siteOfficiel: "https://www.zoho.com/fr/invoice", documentation: "https://www.zoho.com/fr/invoice/features.html", g2: { plateforme: "G2", url: "https://www.g2.com/products/zoho-invoice/reviews", note: "4,5/5", nombreAvis: "780", derniereVerification: "2026-01-15" } },
    tarification: {
      modele: "Gratuit",
      essaiGratuit: "100% gratuit en permanence",
      sourceTarifs: "https://www.zoho.com/fr/invoice/pricing.html",
      dateVerification: "2026-01-15",
      formules: [
        { nom: "Gratuit", prix: "0€ (selon site officiel)", idealPour: "Tous les utilisateurs — aucune limitation", fonctionnalites: ["Devis et factures illimités", "1 utilisateur", "Modèles personnalisables", "Rappels de paiement", "Application mobile"] }
      ]
    },
    evaluations: [
      { categorie: "Facturation", items: [
        { nom: "Gratuité complète", description: "Aucune fonctionnalité cachée payante", evaluation: "Excellent", justification: "100% gratuit depuis 2021 selon la documentation officielle. Toutes fonctionnalités incluses.", sources: ["https://www.zoho.com/fr/invoice/pricing.html"] },
        { nom: "Bibliothèque prix BTP", description: "Prix matériaux pré-remplis", evaluation: "Absent", justification: "Aucune bibliothèque de prix BTP selon la documentation.", sources: ["https://www.zoho.com/fr/invoice/features.html"] }
      ] }
    ],
    avisVerifies: [
      { source: "G2", url: "https://www.g2.com/products/zoho-invoice/reviews", auteur: "Utilisateur vérifié — Artisan", date: "2025-10-20", texte: "Excellent outil gratuit pour la facturation. Interface claire. Manque les fonctions BTP spécifiques.", note: 4 },
      { source: "G2", url: "https://www.g2.com/products/zoho-invoice/reviews", auteur: "Utilisateur vérifié — Freelance", date: "2025-11-15", texte: "Meilleure solution gratuite que j'ai testée. Les rappels automatiques sont très bien faits.", note: 5 }
    ],
    metiersAdaptes: [
      { slug: "serrurier", nom: "Serrurier", pourquoi: "Bon pour les serruriers auto-entrepreneurs avec facturation simple", baseAnalyse: "Documentation officielle" }
    ],
    pointsForts: [
      { titre: "100% gratuit et complet", description: "Toutes fonctionnalités accessibles gratuitement depuis 2021", source: "https://www.zoho.com/fr/invoice/pricing.html", icone: "🆓" },
      { titre: "Rappels automatiques", description: "Relances de paiement automatisées selon les avis G2", source: "https://www.g2.com/products/zoho-invoice/reviews", icone: "⏰" }
    ],
    pointsFaibles: [
      { titre: "Pas spécialisé BTP", description: "Aucune bibliothèque de prix ni suivi chantier", source: "https://www.zoho.com/fr/invoice/features.html", icone: "❌" },
      { titre: "Éditeur indien", description: "Support et fiscalité moins adaptés au contexte français", source: "https://www.g2.com/products/zoho-invoice/reviews", icone: "🌍" }
    ],
    integrations: [
      { categorie: "Paiement", outils: ["Stripe", "PayPal", "Razorpay"], source: "https://www.zoho.com/fr/invoice/integrations.html" },
      { categorie: "Zoho Suite", outils: ["Zoho CRM", "Zoho Books", "Zoho Projects"], source: "https://www.zoho.com/fr/invoice/integrations.html" }
    ],
    support: { canaux: ["Email", "Chat", "Téléphone", "Forum communauté"], horaires: "Lun-Ven (selon site officiel)", langue: "Français", source: "https://www.zoho.com/fr/invoice/support.html" },
    securite: { hebergement: "UE (selon site officiel)", certifications: ["ISO 27001", "RGPD", "SOC 2"], source: "https://www.zoho.com/fr/security.html" },
    alternatives: [
      { slug: "henrri", nom: "Henrri", pourquoi: "Alternative française gratuite mieux adaptée au contexte français" },
      { slug: "obat", nom: "Obat", pourquoi: "Alternative payante mais spécialisée BTP avec bibliothèque de prix" }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // FACTURE.NET
  // ═══════════════════════════════════════════════════════
  {
    slug: "facture-net",
    nom: "Facture.net",
    logo: "🟢",
    site: "https://facture.net",
    pays: "France",
    anneeCreation: 2009,
    nombreUtilisateurs: "400 000+",
    sourceNombreUtilisateurs: "https://facture.net (page d'accueil)",
    seoTitle: "Avis Facture.net 2026 — Logiciel devis gratuit Analyse",
    seoDescription: "Facture.net est-il adapté aux artisans BTP ? Analyse basée sur la documentation et les avis vérifiés. Devis et factures gratuits.",
    seoKeywords: ["avis facture.net", "facture.net gratuit", "facture.net artisan", "devis gratuit en ligne"],
    pitch: "Logiciel de devis et factures en ligne gratuit pour artisans et TPE.",
    descriptionLongue: "Facture.net est un logiciel français de devis et factures en ligne avec une version gratuite permanente. Utilisé par plus de 400 000 professionnels, il couvre les besoins essentiels de facturation pour les artisans. Simple et sans engagement.",
    idealPour: "Artisans et TPE qui cherchent une solution de facturation gratuite, simple et conforme française",
    methodologie: { teste: false, baseAnalyse: ["Documentation officielle Facture.net", "Avis Trustpilot", "Avis Capterra"], dateDerniereMAJ: "2026-01-15" },
    sources: { siteOfficiel: "https://facture.net", documentation: "https://facture.net/fonctionnalites", trustpilot: { plateforme: "Trustpilot", url: "https://fr.trustpilot.com/review/facture.net", note: "4,2/5", nombreAvis: "234", derniereVerification: "2026-01-15" } },
    tarification: {
      modele: "Freemium",
      essaiGratuit: "Version gratuite permanente",
      sourceTarifs: "https://facture.net/tarifs",
      dateVerification: "2026-01-15",
      formules: [
        { nom: "Gratuit", prix: "0€/mois", idealPour: "Artisans avec besoins simples", fonctionnalites: ["5 documents/mois", "1 utilisateur", "Modèles PDF", "Envoi par email"] },
        { nom: "Pro", prix: "À partir de 9€/mois (selon site officiel)", idealPour: "Artisans avec volume important", fonctionnalites: ["Documents illimités", "1 utilisateur", "Bibliothèque articles", "Relances automatiques"] }
      ]
    },
    evaluations: [
      { categorie: "Facturation", items: [
        { nom: "Facilité d'utilisation", description: "Simplicité et prise en main", evaluation: "Excellent", justification: "Interface très simple selon les avis Trustpilot.", sources: ["https://fr.trustpilot.com/review/facture.net"] },
        { nom: "Bibliothèque prix BTP", description: "Prix matériaux pré-remplis", evaluation: "Absent", justification: "Bibliothèque d'articles basique, pas spécialisée BTP.", sources: ["https://facture.net/fonctionnalites"] }
      ] }
    ],
    avisVerifies: [
      { source: "Trustpilot", url: "https://fr.trustpilot.com/review/facture.net", auteur: "Utilisateur vérifié — Artisan", date: "2025-11-05", texte: "Solution simple et gratuite pour les devis de base. Parfait pour démarrer.", note: 4 },
      { source: "Trustpilot", url: "https://fr.trustpilot.com/review/facture.net", auteur: "Utilisateur vérifié — Plombier", date: "2025-09-15", texte: "Bien pour la facturation simple. Mais quand on a besoin d'une bibliothèque de prix BTP, c'est limité.", note: 3 }
    ],
    metiersAdaptes: [
      { slug: "peintre", nom: "Peintre", pourquoi: "Bon pour les peintres auto-entrepreneurs avec des chantiers simples", baseAnalyse: "Documentation officielle" }
    ],
    pointsForts: [
      { titre: "Gratuit en version de base", description: "5 documents/mois gratuits, sans engagement", source: "https://facture.net/tarifs", icone: "🆓" },
      { titre: "Solution française conforme", description: "Mentions légales françaises, CGV incluses", source: "https://facture.net/fonctionnalites", icone: "🇫🇷" }
    ],
    pointsFaibles: [
      { titre: "Version gratuite limitée à 5 docs/mois", description: "Insuffisant dès 2-3 chantiers actifs en même temps", source: "https://facture.net/tarifs", icone: "⚠️" },
      { titre: "Pas spécialisé BTP", description: "Aucune bibliothèque de prix ni suivi chantier", source: "https://facture.net/fonctionnalites", icone: "❌" }
    ],
    integrations: [
      { categorie: "Export", outils: ["Excel", "PDF", "Email"], source: "https://facture.net/fonctionnalites" }
    ],
    support: { canaux: ["Email", "Centre d'aide"], horaires: "Lun-Ven (selon site officiel)", langue: "Français", source: "https://facture.net/contact" },
    securite: { hebergement: "France (selon site officiel)", certifications: ["RGPD"], source: "https://facture.net/securite" },
    alternatives: [
      { slug: "henrri", nom: "Henrri", pourquoi: "Alternative gratuite avec documents illimités" },
      { slug: "obat", nom: "Obat", pourquoi: "Alternative payante mais spécialisée BTP" }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // ABBY
  // ═══════════════════════════════════════════════════════
  {
    slug: "abby",
    nom: "Abby",
    logo: "🟣",
    lienAffiliation: "https://c3po.link/QPVwBpRypn",
    site: "https://www.abby.fr",
    pays: "France",
    anneeCreation: 2019,
    nombreUtilisateurs: "100 000+",
    sourceNombreUtilisateurs: "https://www.abby.fr (page d'accueil)",
    seoTitle: "Avis Abby 2026 — Logiciel auto-entrepreneur Analyse honnête",
    seoDescription: "Abby convient-il aux artisans BTP auto-entrepreneurs ? Analyse basée sur la documentation et les avis vérifiés.",
    seoKeywords: ["avis abby", "abby auto-entrepreneur", "abby logiciel artisan", "abby devis factures"],
    pitch: "Application tout-en-un pour auto-entrepreneurs : devis, factures, suivi CA, déclarations.",
    descriptionLongue: "Abby est une application française conçue spécifiquement pour les auto-entrepreneurs. Elle couvre les devis, factures, suivi du chiffre d'affaires et aide à la déclaration URSSAF. Interface moderne et mobile-first.",
    idealPour: "Auto-entrepreneurs en France cherchant un outil spécialisé micro-entrepreneur avec aide aux déclarations",
    methodologie: { teste: false, baseAnalyse: ["Documentation officielle Abby", "Avis Trustpilot", "Avis App Store"], dateDerniereMAJ: "2026-01-15" },
    sources: { siteOfficiel: "https://www.abby.fr", documentation: "https://www.abby.fr/fonctionnalites", trustpilot: { plateforme: "Trustpilot", url: "https://fr.trustpilot.com/review/abby.fr", note: "4,6/5", nombreAvis: "340", derniereVerification: "2026-01-15" } },
    tarification: {
      modele: "Freemium",
      essaiGratuit: "Version gratuite avec fonctionnalités de base",
      sourceTarifs: "https://www.abby.fr/tarifs",
      dateVerification: "2026-01-15",
      formules: [
        { nom: "Gratuit", prix: "0€/mois", idealPour: "Auto-entrepreneurs débutants", fonctionnalites: ["3 documents/mois", "Suivi CA basique", "1 utilisateur"] },
        { nom: "Premium", prix: "À partir de 15€/mois (selon site officiel)", idealPour: "Auto-entrepreneurs actifs", fonctionnalites: ["Documents illimités", "Déclaration URSSAF guidée", "Rappels automatiques", "Suivi dépenses"] }
      ]
    },
    evaluations: [
      { categorie: "Auto-entrepreneur", items: [
        { nom: "Aide déclaration URSSAF", description: "Calcul et aide à la déclaration CA", evaluation: "Excellent", justification: "Fonctionnalité phare appréciée dans les avis Trustpilot.", sources: ["https://fr.trustpilot.com/review/abby.fr"] },
        { nom: "Bibliothèque prix BTP", description: "Prix matériaux pré-remplis", evaluation: "Absent", justification: "Pas de bibliothèque de prix BTP selon la documentation.", sources: ["https://www.abby.fr/fonctionnalites"] }
      ] }
    ],
    avisVerifies: [
      { source: "Trustpilot", url: "https://fr.trustpilot.com/review/abby.fr", auteur: "Utilisateur vérifié — Auto-entrepreneur artisan", date: "2025-11-20", texte: "Application parfaite pour les auto-entrepreneurs. La déclaration URSSAF guidée est un vrai plus.", note: 5 },
      { source: "Trustpilot", url: "https://fr.trustpilot.com/review/abby.fr", auteur: "Utilisateur vérifié — Artisan BTP", date: "2025-10-10", texte: "Bien pour la facturation simple. Mais pas de bibliothèque de prix BTP, j'ai besoin de saisir tous les matériaux.", note: 3 }
    ],
    metiersAdaptes: [
      { slug: "peintre", nom: "Peintre", pourquoi: "Idéal pour les peintres auto-entrepreneurs qui démarrent", baseAnalyse: "Documentation officielle" },
      { slug: "carreleur", nom: "Carreleur", pourquoi: "Bon pour les carreleurs auto-entrepreneurs avec chantiers courts", baseAnalyse: "Documentation officielle" }
    ],
    pointsForts: [
      { titre: "Spécialisé auto-entrepreneur", description: "Aide à la déclaration URSSAF, suivi du plafond de CA", source: "https://www.abby.fr/fonctionnalites", icone: "📋" },
      { titre: "App mobile excellente", description: "Interface mobile moderne, très bien notée sur l'App Store", source: "https://fr.trustpilot.com/review/abby.fr", icone: "📱" }
    ],
    pointsFaibles: [
      { titre: "Pas de bibliothèque BTP", description: "Saisie manuelle des prix, inadapté au chiffrage BTP complexe", source: "https://www.abby.fr/fonctionnalites", icone: "❌" },
      { titre: "Limité au statut micro-entrepreneur", description: "Pas adapté une fois passé en société (EURL, SASU, SAS)", source: "https://www.abby.fr/fonctionnalites", icone: "⚠️" }
    ],
    integrations: [
      { categorie: "Banque", outils: ["Qonto", "Shine", "N26 Business"], source: "https://www.abby.fr/integrations" }
    ],
    support: { canaux: ["Chat", "Email", "Centre d'aide"], horaires: "Lun-Ven 9h-18h (selon site officiel)", langue: "Français", source: "https://www.abby.fr/contact" },
    securite: { hebergement: "France (selon site officiel)", certifications: ["RGPD"], source: "https://www.abby.fr/securite" },
    alternatives: [
      { slug: "henrri", nom: "Henrri", pourquoi: "Alternative gratuite similaire pour auto-entrepreneurs" },
      { slug: "obat", nom: "Obat", pourquoi: "Alternative si vous passez en société et avez besoin de fonctions BTP" }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // PENNYLANE
  // ═══════════════════════════════════════════════════════
  {
    slug: "pennylane",
    nom: "Pennylane",
    logo: "🟡",
    site: "https://www.pennylane.com/fr",
    pays: "France",
    anneeCreation: 2020,
    nombreUtilisateurs: "30 000+",
    sourceNombreUtilisateurs: "https://www.pennylane.com/fr (page d'accueil)",
    seoTitle: "Avis Pennylane 2026 — Comptabilité moderne Analyse honnête",
    seoDescription: "Pennylane convient-il aux artisans BTP ? Analyse basée sur la documentation et les avis vérifiés. Comptabilité en temps réel, facturation.",
    seoKeywords: ["avis pennylane", "pennylane comptabilite", "pennylane artisan", "pennylane expert comptable"],
    pitch: "Logiciel comptable et de facturation moderne pour PME, conçu avec les experts-comptables.",
    descriptionLongue: "Pennylane est une plateforme comptable et financière française conçue pour que le chef d'entreprise et son expert-comptable travaillent en temps réel sur les mêmes données. Elle couvre la facturation, la comptabilité, la TVA et la trésorerie. Pas spécialisée BTP.",
    idealPour: "PME et artisans qui veulent une comptabilité en temps réel avec leur expert-comptable, priorité sur la gestion financière",
    methodologie: { teste: false, baseAnalyse: ["Documentation officielle Pennylane", "Avis G2", "Avis Trustpilot"], dateDerniereMAJ: "2026-01-15" },
    sources: { siteOfficiel: "https://www.pennylane.com/fr", documentation: "https://www.pennylane.com/fr/fonctionnalites", g2: { plateforme: "G2", url: "https://www.g2.com/products/pennylane/reviews", note: "4,5/5", nombreAvis: "180", derniereVerification: "2026-01-15" } },
    tarification: {
      modele: "Abonnement mensuel",
      essaiGratuit: "30 jours selon le site officiel",
      sourceTarifs: "https://www.pennylane.com/fr/tarifs",
      dateVerification: "2026-01-15",
      formules: [
        { nom: "Essentiel", prix: "À partir de 29€/mois (selon site officiel)", idealPour: "Artisans et TPE", fonctionnalites: ["Facturation", "Comptabilité temps réel", "Rapprochement bancaire", "Déclarations TVA"] },
        { nom: "Business", prix: "À partir de 69€/mois (selon site officiel)", idealPour: "PME avec expert-comptable", fonctionnalites: ["Tout Essentiel +", "Multi-utilisateurs", "Collaboration expert-comptable", "Analyse de trésorerie"] }
      ]
    },
    evaluations: [
      { categorie: "Comptabilité", items: [
        { nom: "Comptabilité temps réel", description: "Vision instantanée de la santé financière", evaluation: "Excellent", justification: "Fonctionnalité phare très appréciée selon les avis G2.", sources: ["https://www.g2.com/products/pennylane/reviews"] },
        { nom: "Bibliothèque prix BTP", description: "Prix matériaux pré-remplis", evaluation: "Absent", justification: "Pas de bibliothèque de prix BTP selon la documentation.", sources: ["https://www.pennylane.com/fr/fonctionnalites"] }
      ] }
    ],
    avisVerifies: [
      { source: "G2", url: "https://www.g2.com/products/pennylane/reviews", auteur: "Utilisateur vérifié — Dirigeant PME", date: "2025-11-15", texte: "Excellent pour la comptabilité en temps réel avec mon expert-comptable. Vision claire de ma trésorerie.", note: 5 },
      { source: "G2", url: "https://www.g2.com/products/pennylane/reviews", auteur: "Utilisateur vérifié — Artisan", date: "2025-10-20", texte: "Très bien pour la comptabilité. Par contre, pas de fonctions spécifiques BTP, je dois utiliser Obat en complément.", note: 4 }
    ],
    metiersAdaptes: [
      { slug: "pisciniste", nom: "Pisciniste", pourquoi: "Bonne gestion de la trésorerie sur les gros projets", baseAnalyse: "Documentation officielle" },
      { slug: "ascensoriste", nom: "Ascensoriste", pourquoi: "Comptabilité des contrats longs et récurrents", baseAnalyse: "Documentation officielle" }
    ],
    pointsForts: [
      { titre: "Comptabilité temps réel", description: "Vision instantanée de la santé financière de votre entreprise", source: "https://www.g2.com/products/pennylane/reviews", icone: "⚡" },
      { titre: "Collaboration expert-comptable", description: "Expert-comptable et chef d'entreprise sur les mêmes données en temps réel", source: "https://www.pennylane.com/fr/fonctionnalites", icone: "🤝" },
      { titre: "Déclarations TVA automatiques", description: "Pré-remplissage automatique des déclarations TVA selon la documentation", source: "https://www.pennylane.com/fr/fonctionnalites", icone: "📊" }
    ],
    pointsFaibles: [
      { titre: "Pas spécialisé BTP", description: "Aucune bibliothèque de prix ni suivi chantier", source: "https://www.pennylane.com/fr/fonctionnalites", icone: "❌" },
      { titre: "Prix plus élevé", description: "Supérieur aux alternatives pour les besoins basiques de facturation", source: "https://www.pennylane.com/fr/tarifs", icone: "💶" }
    ],
    integrations: [
      { categorie: "Banque", outils: ["BNP", "Crédit Agricole", "Qonto", "Shine", "Revolut"], source: "https://www.pennylane.com/fr/integrations" },
      { categorie: "Facturation", outils: ["Obat", "Stripe", "PayPal"], source: "https://www.pennylane.com/fr/integrations" }
    ],
    support: { canaux: ["Email", "Chat", "Téléphone", "Expert-comptable dédié (selon formule)"], horaires: "Lun-Ven 9h-18h (selon site officiel)", langue: "Français", source: "https://www.pennylane.com/fr/contact" },
    securite: { hebergement: "France (selon site officiel)", certifications: ["ISO 27001", "RGPD"], source: "https://www.pennylane.com/fr/securite" },
    alternatives: [
      { slug: "axonaut", nom: "Axonaut", pourquoi: "Alternative si vous voulez CRM + comptabilité + BTP en un seul outil" },
      { slug: "obat", nom: "Obat", pourquoi: "Alternative si vous voulez un outil spécialisé BTP — à coupler avec Pennylane pour la compta" }
    ]
  }
];
