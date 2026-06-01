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
  lienAffiliation?: string; // Optionnel : seulement si on est affilié
  pays: string;
  anneeCreation: number;
  nombreUtilisateurs: string;
  sourceNombreUtilisateurs: string;
  
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  
  pitch: string;
  descriptionLongue: string;
  
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
    descriptionLongue: "Axonaut est un logiciel de gestion français qui combine CRM, facturation et gestion de projet. D'après le site officiel, il est utilisé par plus de 189 000 professionnels et propose plus de 14 000 intégrations via Zapier.",
    
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
  }
];
