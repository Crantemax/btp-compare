// data/comparaisons.ts
// Généré automatiquement le 2026-06-01 21:24:20
// NE PAS MODIFIER MANUELLEMENT — Utilisez le script Python pour régénérer

// Types inline pour éviter une dépendance externe
export interface CritereComparaison {
  nom: string;
  categorie: 'essentiel' | 'important' | 'confort';
  description: string;
  logiciel1: { note: 0|1|2|3|4|5; justification: string; source?: string };
  logiciel2: { note: 0|1|2|3|4|5; justification: string; source?: string };
}

export interface ComparaisonData {
  slug1: string; slug2: string;
  nom1: string; nom2: string;
  logo1: string; logo2: string;
  seoTitle: string; seoDescription: string; seoKeywords: string[];
  intro: string;
  verdict: { gagnant: 'logiciel1'|'logiciel2'|'egalite'; raison: string; pourQui1: string; pourQui2: string };
  criteres: CritereComparaison[];
  tableauRecap: { critere: string; logiciel1: string; logiciel2: string }[];
  couts3Ans: {
    logiciel1: { coutMensuel: number; coutAnnuel: number; cout3Ans: number; calcul: string };
    logiciel2: { coutMensuel: number; coutAnnuel: number; cout3Ans: number; calcul: string };
  };
  pointsFortsComparaison: { logiciel1: string[]; logiciel2: string[] };
  pointsFaiblesComparaison: { logiciel1: string[]; logiciel2: string[] };
  casUsage: { scenario: string; recommandation: 'logiciel1'|'logiciel2'|'egalite'; raison: string }[];
}

export const obat_vs_axonaut: ComparaisonData = {
  "slug1": "obat",
  "slug2": "axonaut",
  "nom1": "Obat",
  "nom2": "Axonaut",
  "logo1": "🟢",
  "logo2": "🔵",
  "seoTitle": "Obat vs Axonaut 2026 : Comparatif complet — Quel logiciel choisir ?",
  "seoDescription": "Comparaison détaillée Obat vs Axonaut basée sur documentation officielle et avis vérifiés. Prix, fonctionnalités, points forts/faibles.",
  "seoKeywords": [
    "obat vs axonaut",
    "comparatif obat axonaut",
    "obat ou axonaut"
  ],
  "intro": "Obat et Axonaut sont deux logiciels de gestion français populaires, mais ils s'adressent à des profils différents. Cette comparaison est basée sur la documentation officielle et les avis vérifiés.",
  "verdict": {
    "gagnant": "logiciel2",
    "raison": "Axonaut remporte cette comparaison grâce à ses forces sur les critères essentiels, mais Obat reste excellent pour certains profils.",
    "pourQui1": "Obat est idéal pour artisans seuls ou petites équipes (1-3 personnes).",
    "pourQui2": "Axonaut est idéal pour pme en croissance avec salariés (3-15 personnes)."
  },
  "criteres": [
    {
      "nom": "Bibliothèque de prix BTP",
      "categorie": "essentiel",
      "description": "Prix des matériaux pré-remplis et mis à jour automatiquement",
      "logiciel1": {
        "note": 5,
        "justification": "Bibliothèque de prix complète et mise à jour régulièrement selon la documentation officielle de Obat.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 2,
        "justification": "Bibliothèque de prix basique selon la documentation. Nécessite saisie manuelle des prix.",
        "source": "https://axonaut.com/fonctionnalites"
      }
    },
    {
      "nom": "CRM et prospection commerciale",
      "categorie": "essentiel",
      "description": "Gestion des contacts, pipeline de vente, automatisations commerciales",
      "logiciel1": {
        "note": 2,
        "justification": "CRM très basique selon la documentation de Obat. Pas de pipeline de vente.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 5,
        "justification": "CRM complet documenté comme fonctionnalité phare de Axonaut. Pipeline de vente, automatisations, campagnes.",
        "source": "https://axonaut.com/fonctionnalites"
      }
    },
    {
      "nom": "Mode hors-ligne",
      "categorie": "important",
      "description": "Capacité à travailler sans connexion internet (sous-sols, parkings, zones rurales)",
      "logiciel1": {
        "note": 0,
        "justification": "Aucun mode hors-ligne documenté sur le site officiel de Obat.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 1,
        "justification": "Consultation seule en hors-ligne selon la documentation. Création nécessite une connexion.",
        "source": "https://axonaut.com/fonctionnalites"
      }
    },
    {
      "nom": "Intégrations avec autres outils",
      "categorie": "important",
      "description": "Connexion à d'autres logiciels (comptabilité, paiement, e-commerce)",
      "logiciel1": {
        "note": 3,
        "justification": "Intégrations présentes selon la documentation. Nombre limité mais suffisant pour la plupart des besoins.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 5,
        "justification": "14 000+ intégrations via Zapier documentées sur le site officiel de Axonaut.",
        "source": "https://axonaut.com/fonctionnalites"
      }
    },
    {
      "nom": "Gestion de la TVA 10% rénovation",
      "categorie": "important",
      "description": "Application automatique de la TVA réduite avec attestations",
      "logiciel1": {
        "note": 5,
        "justification": "Gestion native de la TVA 10% documentée sur le site officiel de Obat. Conforme aux obligations légales.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 4,
        "justification": "Gère la TVA 10% selon la documentation de Axonaut.",
        "source": "https://axonaut.com/fonctionnalites"
      }
    },
    {
      "nom": "Simplicité de prise en main",
      "categorie": "confort",
      "description": "Temps nécessaire pour maîtriser l'outil et commencer à l'utiliser",
      "logiciel1": {
        "note": 5,
        "justification": "Interface intuitive et prise en main rapide selon les avis utilisateurs de Obat.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 4,
        "justification": "Interface moderne et relativement simple selon la documentation de Axonaut.",
        "source": "https://axonaut.com/fonctionnalites"
      }
    },
    {
      "nom": "Planning et gestion d'équipe",
      "categorie": "important",
      "description": "Planification des interventions et affectation des techniciens",
      "logiciel1": {
        "note": 2,
        "justification": "Planning très basique selon la documentation de Obat.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 4,
        "justification": "Planning fonctionnel selon la documentation de Axonaut.",
        "source": "https://axonaut.com/fonctionnalites"
      }
    },
    {
      "nom": "Suivi de chantier",
      "categorie": "important",
      "description": "Suivi d'avancement, photos, pointages, rapports de chantier",
      "logiciel1": {
        "note": 3,
        "justification": "Suivi de chantier basique selon la documentation. Fonctionnalités limitées.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 4,
        "justification": "Suivi de chantier fonctionnel selon la documentation de Axonaut.",
        "source": "https://axonaut.com/fonctionnalites"
      }
    }
  ],
  "tableauRecap": [
    {
      "critere": "Bibliothèque de prix BTP",
      "logiciel1": "★★★★★",
      "logiciel2": "★★☆☆☆"
    },
    {
      "critere": "CRM et prospection commerciale",
      "logiciel1": "★★☆☆☆",
      "logiciel2": "★★★★★"
    },
    {
      "critere": "Mode hors-ligne",
      "logiciel1": "☆☆☆☆☆",
      "logiciel2": "★☆☆☆☆"
    },
    {
      "critere": "Intégrations avec autres outils",
      "logiciel1": "★★★☆☆",
      "logiciel2": "★★★★★"
    },
    {
      "critere": "Gestion de la TVA 10% rénovation",
      "logiciel1": "★★★★★",
      "logiciel2": "★★★★☆"
    },
    {
      "critere": "Simplicité de prise en main",
      "logiciel1": "★★★★★",
      "logiciel2": "★★★★☆"
    },
    {
      "critere": "Planning et gestion d'équipe",
      "logiciel1": "★★☆☆☆",
      "logiciel2": "★★★★☆"
    },
    {
      "critere": "Suivi de chantier",
      "logiciel1": "★★★☆☆",
      "logiciel2": "★★★★☆"
    },
    {
      "critere": "Prix (artisan seul)",
      "logiciel1": "39€/mois",
      "logiciel2": "49€/mois"
    }
  ],
  "couts3Ans": {
    "logiciel1": {
      "coutMensuel": 39,
      "coutAnnuel": 468,
      "cout3Ans": 1404,
      "calcul": "39€/mois × 36 mois"
    },
    "logiciel2": {
      "coutMensuel": 49,
      "coutAnnuel": 588,
      "cout3Ans": 1764,
      "calcul": "49€/mois × 36 mois"
    }
  },
  "pointsFortsComparaison": {
    "logiciel1": [
      "Bibliothèque Batichiffrage intégrée",
      "TVA 10% native avec attestations",
      "Relances automatiques des impayés",
      "Interface simple et prise en main rapide"
    ],
    "logiciel2": [
      "CRM complet avec pipeline de vente",
      "14 000+ intégrations via Zapier",
      "Automatisations avancées",
      "Gestion d'équipe et suivi de projet"
    ]
  },
  "pointsFaiblesComparaison": {
    "logiciel1": [
      "Pas de mode hors-ligne",
      "CRM basique",
      "Intégrations limitées",
      "Pas adapté aux équipes de 5+ personnes"
    ],
    "logiciel2": [
      "Bibliothèque de prix BTP basique",
      "Mode hors-ligne limité",
      "Prix élevé pour équipes",
      "Courbe d'apprentissage plus longue"
    ]
  },
  "casUsage": [
    {
      "scenario": "Plombier seul qui fait du dépannage et de petites rénovations",
      "recommandation": "logiciel1",
      "raison": "Obat est adapté grâce à bibliothèque batichiffrage intégrée."
    },
    {
      "scenario": "Équipe de electriciens avec 3-5 employés et besoin de gestion d'équipe",
      "recommandation": "logiciel2",
      "raison": "Axonaut offre crm complet avec pipeline de vente."
    },
    {
      "scenario": "Artisan qui hésite entre les deux solutions",
      "recommandation": "egalite",
      "raison": "Les deux logiciels offrent des essais gratuits. Testez les deux et choisissez celui qui correspond le mieux à votre workflow."
    }
  ]
};

export const obat_vs_tolteck: ComparaisonData = {
  "slug1": "obat",
  "slug2": "tolteck",
  "nom1": "Obat",
  "nom2": "Tolteck",
  "logo1": "🟢",
  "logo2": "🟠",
  "seoTitle": "Obat vs Tolteck 2026 : Comparatif complet — Quel logiciel choisir ?",
  "seoDescription": "Comparaison détaillée Obat vs Tolteck basée sur documentation officielle et avis vérifiés. Prix, fonctionnalités, points forts/faibles.",
  "seoKeywords": [
    "obat vs tolteck",
    "comparatif obat tolteck",
    "obat ou tolteck"
  ],
  "intro": "Choisir entre Obat et Tolteck dépend de vos besoins spécifiques. Obat est artisans seuls ou petites équipes (1-3 personnes), tandis que Tolteck est équipes btp 2-10 personnes avec besoin de planning.",
  "verdict": {
    "gagnant": "logiciel2",
    "raison": "Tolteck remporte cette comparaison grâce à ses forces sur les critères essentiels, mais Obat reste excellent pour certains profils.",
    "pourQui1": "Obat est idéal pour artisans seuls ou petites équipes (1-3 personnes).",
    "pourQui2": "Tolteck est idéal pour équipes btp 2-10 personnes avec besoin de planning."
  },
  "criteres": [
    {
      "nom": "Bibliothèque de prix BTP",
      "categorie": "essentiel",
      "description": "Prix des matériaux pré-remplis et mis à jour automatiquement",
      "logiciel1": {
        "note": 5,
        "justification": "Bibliothèque de prix complète et mise à jour régulièrement selon la documentation officielle de Obat.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "Bibliothèque de prix présente mais moins spécialisée BTP selon la documentation de Tolteck.",
        "source": "https://tolteck.com/fonctionnalites"
      }
    },
    {
      "nom": "CRM et prospection commerciale",
      "categorie": "essentiel",
      "description": "Gestion des contacts, pipeline de vente, automatisations commerciales",
      "logiciel1": {
        "note": 2,
        "justification": "CRM très basique selon la documentation de Obat. Pas de pipeline de vente.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "CRM basique selon la documentation. Gestion des contacts sans fonctionnalités avancées.",
        "source": "https://tolteck.com/fonctionnalites"
      }
    },
    {
      "nom": "Mode hors-ligne",
      "categorie": "important",
      "description": "Capacité à travailler sans connexion internet (sous-sols, parkings, zones rurales)",
      "logiciel1": {
        "note": 0,
        "justification": "Aucun mode hors-ligne documenté sur le site officiel de Obat.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 4,
        "justification": "Mode hors-ligne fonctionnel selon la documentation de Tolteck.",
        "source": "https://tolteck.com/fonctionnalites"
      }
    },
    {
      "nom": "Intégrations avec autres outils",
      "categorie": "important",
      "description": "Connexion à d'autres logiciels (comptabilité, paiement, e-commerce)",
      "logiciel1": {
        "note": 3,
        "justification": "Intégrations présentes selon la documentation. Nombre limité mais suffisant pour la plupart des besoins.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "Intégrations présentes selon la documentation. Nombre limité mais suffisant pour la plupart des besoins.",
        "source": "https://tolteck.com/fonctionnalites"
      }
    },
    {
      "nom": "Gestion de la TVA 10% rénovation",
      "categorie": "important",
      "description": "Application automatique de la TVA réduite avec attestations",
      "logiciel1": {
        "note": 5,
        "justification": "Gestion native de la TVA 10% documentée sur le site officiel de Obat. Conforme aux obligations légales.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 4,
        "justification": "Gère la TVA 10% selon la documentation de Tolteck.",
        "source": "https://tolteck.com/fonctionnalites"
      }
    },
    {
      "nom": "Simplicité de prise en main",
      "categorie": "confort",
      "description": "Temps nécessaire pour maîtriser l'outil et commencer à l'utiliser",
      "logiciel1": {
        "note": 5,
        "justification": "Interface intuitive et prise en main rapide selon les avis utilisateurs de Obat.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 4,
        "justification": "Interface moderne et relativement simple selon la documentation de Tolteck.",
        "source": "https://tolteck.com/fonctionnalites"
      }
    },
    {
      "nom": "Planning et gestion d'équipe",
      "categorie": "important",
      "description": "Planification des interventions et affectation des techniciens",
      "logiciel1": {
        "note": 2,
        "justification": "Planning très basique selon la documentation de Obat.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 5,
        "justification": "Planning intégré documenté comme fonctionnalité phare de Tolteck. Très complet.",
        "source": "https://tolteck.com/fonctionnalites"
      }
    },
    {
      "nom": "Suivi de chantier",
      "categorie": "important",
      "description": "Suivi d'avancement, photos, pointages, rapports de chantier",
      "logiciel1": {
        "note": 3,
        "justification": "Suivi de chantier basique selon la documentation. Fonctionnalités limitées.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 5,
        "justification": "Module chantier complet documenté sur le site officiel de Tolteck. Photos, pointages, rapports.",
        "source": "https://tolteck.com/fonctionnalites"
      }
    }
  ],
  "tableauRecap": [
    {
      "critere": "Bibliothèque de prix BTP",
      "logiciel1": "★★★★★",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "CRM et prospection commerciale",
      "logiciel1": "★★☆☆☆",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Mode hors-ligne",
      "logiciel1": "☆☆☆☆☆",
      "logiciel2": "★★★★☆"
    },
    {
      "critere": "Intégrations avec autres outils",
      "logiciel1": "★★★☆☆",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Gestion de la TVA 10% rénovation",
      "logiciel1": "★★★★★",
      "logiciel2": "★★★★☆"
    },
    {
      "critere": "Simplicité de prise en main",
      "logiciel1": "★★★★★",
      "logiciel2": "★★★★☆"
    },
    {
      "critere": "Planning et gestion d'équipe",
      "logiciel1": "★★☆☆☆",
      "logiciel2": "★★★★★"
    },
    {
      "critere": "Suivi de chantier",
      "logiciel1": "★★★☆☆",
      "logiciel2": "★★★★★"
    },
    {
      "critere": "Prix (artisan seul)",
      "logiciel1": "39€/mois",
      "logiciel2": "59€/mois"
    }
  ],
  "couts3Ans": {
    "logiciel1": {
      "coutMensuel": 39,
      "coutAnnuel": 468,
      "cout3Ans": 1404,
      "calcul": "39€/mois × 36 mois"
    },
    "logiciel2": {
      "coutMensuel": 59,
      "coutAnnuel": 708,
      "cout3Ans": 2124,
      "calcul": "59€/mois × 36 mois"
    }
  },
  "pointsFortsComparaison": {
    "logiciel1": [
      "Bibliothèque Batichiffrage intégrée",
      "TVA 10% native avec attestations",
      "Relances automatiques des impayés",
      "Interface simple et prise en main rapide"
    ],
    "logiciel2": [
      "Planning intégré excellent",
      "Suivi de chantier complet",
      "Mode hors-ligne fonctionnel",
      "Gestion d'équipe"
    ]
  },
  "pointsFaiblesComparaison": {
    "logiciel1": [
      "Pas de mode hors-ligne",
      "CRM basique",
      "Intégrations limitées",
      "Pas adapté aux équipes de 5+ personnes"
    ],
    "logiciel2": [
      "Bibliothèque de prix moins riche",
      "Interface un peu datée",
      "Prix plus élevé qu'Obat"
    ]
  },
  "casUsage": [
    {
      "scenario": "Plombier seul qui fait du dépannage et de petites rénovations",
      "recommandation": "logiciel1",
      "raison": "Obat est adapté grâce à bibliothèque batichiffrage intégrée."
    },
    {
      "scenario": "Équipe de electriciens avec 3-5 employés et besoin de gestion d'équipe",
      "recommandation": "logiciel2",
      "raison": "Tolteck offre planning intégré excellent."
    },
    {
      "scenario": "Artisan qui hésite entre les deux solutions",
      "recommandation": "egalite",
      "raison": "Les deux logiciels offrent des essais gratuits. Testez les deux et choisissez celui qui correspond le mieux à votre workflow."
    }
  ]
};

export const obat_vs_progbat: ComparaisonData = {
  "slug1": "obat",
  "slug2": "progbat",
  "nom1": "Obat",
  "nom2": "ProGBat",
  "logo1": "🟢",
  "logo2": "🟣",
  "seoTitle": "Obat vs ProGBat 2026 : Comparatif complet — Quel logiciel choisir ?",
  "seoDescription": "Comparaison détaillée Obat vs ProGBat basée sur documentation officielle et avis vérifiés. Prix, fonctionnalités, points forts/faibles.",
  "seoKeywords": [
    "obat vs progbat",
    "comparatif obat progbat",
    "obat ou progbat"
  ],
  "intro": "Obat et ProGBat sont deux logiciels de gestion français populaires, mais ils s'adressent à des profils différents. Cette comparaison est basée sur la documentation officielle et les avis vérifiés.",
  "verdict": {
    "gagnant": "logiciel2",
    "raison": "ProGBat remporte cette comparaison grâce à ses forces sur les critères essentiels, mais Obat reste excellent pour certains profils.",
    "pourQui1": "Obat est idéal pour artisans seuls ou petites équipes (1-3 personnes).",
    "pourQui2": "ProGBat est idéal pour pme btp 5-20 salariés avec chantiers complexes."
  },
  "criteres": [
    {
      "nom": "Bibliothèque de prix BTP",
      "categorie": "essentiel",
      "description": "Prix des matériaux pré-remplis et mis à jour automatiquement",
      "logiciel1": {
        "note": 5,
        "justification": "Bibliothèque de prix complète et mise à jour régulièrement selon la documentation officielle de Obat.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 4,
        "justification": "Bibliothèque de prix bien fournie selon la documentation de ProGBat.",
        "source": "https://progbat.com/fonctionnalites"
      }
    },
    {
      "nom": "CRM et prospection commerciale",
      "categorie": "essentiel",
      "description": "Gestion des contacts, pipeline de vente, automatisations commerciales",
      "logiciel1": {
        "note": 2,
        "justification": "CRM très basique selon la documentation de Obat. Pas de pipeline de vente.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "CRM basique selon la documentation. Gestion des contacts sans fonctionnalités avancées.",
        "source": "https://progbat.com/fonctionnalites"
      }
    },
    {
      "nom": "Mode hors-ligne",
      "categorie": "important",
      "description": "Capacité à travailler sans connexion internet (sous-sols, parkings, zones rurales)",
      "logiciel1": {
        "note": 0,
        "justification": "Aucun mode hors-ligne documenté sur le site officiel de Obat.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 5,
        "justification": "Mode hors-ligne complet documenté sur le site officiel de ProGBat. Création et consultation sans connexion.",
        "source": "https://progbat.com/fonctionnalites"
      }
    },
    {
      "nom": "Intégrations avec autres outils",
      "categorie": "important",
      "description": "Connexion à d'autres logiciels (comptabilité, paiement, e-commerce)",
      "logiciel1": {
        "note": 3,
        "justification": "Intégrations présentes selon la documentation. Nombre limité mais suffisant pour la plupart des besoins.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "Intégrations présentes selon la documentation. Nombre limité mais suffisant pour la plupart des besoins.",
        "source": "https://progbat.com/fonctionnalites"
      }
    },
    {
      "nom": "Gestion de la TVA 10% rénovation",
      "categorie": "important",
      "description": "Application automatique de la TVA réduite avec attestations",
      "logiciel1": {
        "note": 5,
        "justification": "Gestion native de la TVA 10% documentée sur le site officiel de Obat. Conforme aux obligations légales.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 5,
        "justification": "Gestion native de la TVA 10% documentée sur le site officiel de ProGBat. Conforme aux obligations légales.",
        "source": "https://progbat.com/fonctionnalites"
      }
    },
    {
      "nom": "Simplicité de prise en main",
      "categorie": "confort",
      "description": "Temps nécessaire pour maîtriser l'outil et commencer à l'utiliser",
      "logiciel1": {
        "note": 5,
        "justification": "Interface intuitive et prise en main rapide selon les avis utilisateurs de Obat.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 2,
        "justification": "Interface complexe nécessitant plusieurs semaines de formation selon les avis.",
        "source": "https://progbat.com/fonctionnalites"
      }
    },
    {
      "nom": "Planning et gestion d'équipe",
      "categorie": "important",
      "description": "Planification des interventions et affectation des techniciens",
      "logiciel1": {
        "note": 2,
        "justification": "Planning très basique selon la documentation de Obat.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 4,
        "justification": "Planning fonctionnel selon la documentation de ProGBat.",
        "source": "https://progbat.com/fonctionnalites"
      }
    },
    {
      "nom": "Suivi de chantier",
      "categorie": "important",
      "description": "Suivi d'avancement, photos, pointages, rapports de chantier",
      "logiciel1": {
        "note": 3,
        "justification": "Suivi de chantier basique selon la documentation. Fonctionnalités limitées.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 5,
        "justification": "Module chantier complet documenté sur le site officiel de ProGBat. Photos, pointages, rapports.",
        "source": "https://progbat.com/fonctionnalites"
      }
    }
  ],
  "tableauRecap": [
    {
      "critere": "Bibliothèque de prix BTP",
      "logiciel1": "★★★★★",
      "logiciel2": "★★★★☆"
    },
    {
      "critere": "CRM et prospection commerciale",
      "logiciel1": "★★☆☆☆",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Mode hors-ligne",
      "logiciel1": "☆☆☆☆☆",
      "logiciel2": "★★★★★"
    },
    {
      "critere": "Intégrations avec autres outils",
      "logiciel1": "★★★☆☆",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Gestion de la TVA 10% rénovation",
      "logiciel1": "★★★★★",
      "logiciel2": "★★★★★"
    },
    {
      "critere": "Simplicité de prise en main",
      "logiciel1": "★★★★★",
      "logiciel2": "★★☆☆☆"
    },
    {
      "critere": "Planning et gestion d'équipe",
      "logiciel1": "★★☆☆☆",
      "logiciel2": "★★★★☆"
    },
    {
      "critere": "Suivi de chantier",
      "logiciel1": "★★★☆☆",
      "logiciel2": "★★★★★"
    },
    {
      "critere": "Prix (artisan seul)",
      "logiciel1": "39€/mois",
      "logiciel2": "89€/mois"
    }
  ],
  "couts3Ans": {
    "logiciel1": {
      "coutMensuel": 39,
      "coutAnnuel": 468,
      "cout3Ans": 1404,
      "calcul": "39€/mois × 36 mois"
    },
    "logiciel2": {
      "coutMensuel": 89,
      "coutAnnuel": 1068,
      "cout3Ans": 3204,
      "calcul": "89€/mois × 36 mois"
    }
  },
  "pointsFortsComparaison": {
    "logiciel1": [
      "Bibliothèque Batichiffrage intégrée",
      "TVA 10% native avec attestations",
      "Relances automatiques des impayés",
      "Interface simple et prise en main rapide"
    ],
    "logiciel2": [
      "ERP complet spécialisé BTP",
      "Compte prorata natif",
      "Mode hors-ligne excellent",
      "Situations de travaux avancées"
    ]
  },
  "pointsFaiblesComparaison": {
    "logiciel1": [
      "Pas de mode hors-ligne",
      "CRM basique",
      "Intégrations limitées",
      "Pas adapté aux équipes de 5+ personnes"
    ],
    "logiciel2": [
      "Complexe à prendre en main",
      "Prix élevé",
      "Overkill pour artisans seuls"
    ]
  },
  "casUsage": [
    {
      "scenario": "Plombier seul qui fait du dépannage et de petites rénovations",
      "recommandation": "logiciel1",
      "raison": "Obat est adapté grâce à bibliothèque batichiffrage intégrée."
    },
    {
      "scenario": "Équipe de macons avec 3-5 employés et besoin de gestion d'équipe",
      "recommandation": "logiciel2",
      "raison": "ProGBat offre erp complet spécialisé btp."
    },
    {
      "scenario": "Artisan qui hésite entre les deux solutions",
      "recommandation": "egalite",
      "raison": "Les deux logiciels offrent des essais gratuits. Testez les deux et choisissez celui qui correspond le mieux à votre workflow."
    }
  ]
};

export const obat_vs_batigest: ComparaisonData = {
  "slug1": "obat",
  "slug2": "batigest",
  "nom1": "Obat",
  "nom2": "Batigest (Sage)",
  "logo1": "🟢",
  "logo2": "🔴",
  "seoTitle": "Obat vs Batigest (Sage) 2026 : Comparatif complet — Quel logiciel choisir ?",
  "seoDescription": "Comparaison détaillée Obat vs Batigest (Sage) basée sur documentation officielle et avis vérifiés. Prix, fonctionnalités, points forts/faibles.",
  "seoKeywords": [
    "obat vs batigest",
    "comparatif obat batigest",
    "obat ou batigest"
  ],
  "intro": "Obat et Batigest (Sage) représentent deux approches différentes de la gestion d'entreprise. Voici une comparaison détaillée basée sur des sources vérifiables.",
  "verdict": {
    "gagnant": "logiciel2",
    "raison": "Batigest (Sage) remporte cette comparaison grâce à ses forces sur les critères essentiels, mais Obat reste excellent pour certains profils.",
    "pourQui1": "Obat est idéal pour artisans seuls ou petites équipes (1-3 personnes).",
    "pourQui2": "Batigest (Sage) est idéal pour électriciens et entreprises établies avec besoins nfc 15-100."
  },
  "criteres": [
    {
      "nom": "Bibliothèque de prix BTP",
      "categorie": "essentiel",
      "description": "Prix des matériaux pré-remplis et mis à jour automatiquement",
      "logiciel1": {
        "note": 5,
        "justification": "Bibliothèque de prix complète et mise à jour régulièrement selon la documentation officielle de Obat.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 5,
        "justification": "Bibliothèque de prix complète et mise à jour régulièrement selon la documentation officielle de Batigest (Sage).",
        "source": "https://batigest.com/fonctionnalites"
      }
    },
    {
      "nom": "CRM et prospection commerciale",
      "categorie": "essentiel",
      "description": "Gestion des contacts, pipeline de vente, automatisations commerciales",
      "logiciel1": {
        "note": 2,
        "justification": "CRM très basique selon la documentation de Obat. Pas de pipeline de vente.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "CRM basique selon la documentation. Gestion des contacts sans fonctionnalités avancées.",
        "source": "https://batigest.com/fonctionnalites"
      }
    },
    {
      "nom": "Mode hors-ligne",
      "categorie": "important",
      "description": "Capacité à travailler sans connexion internet (sous-sols, parkings, zones rurales)",
      "logiciel1": {
        "note": 0,
        "justification": "Aucun mode hors-ligne documenté sur le site officiel de Obat.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "Mode hors-ligne partiel selon la documentation. Consultation possible, création limitée.",
        "source": "https://batigest.com/fonctionnalites"
      }
    },
    {
      "nom": "Intégrations avec autres outils",
      "categorie": "important",
      "description": "Connexion à d'autres logiciels (comptabilité, paiement, e-commerce)",
      "logiciel1": {
        "note": 3,
        "justification": "Intégrations présentes selon la documentation. Nombre limité mais suffisant pour la plupart des besoins.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "Intégrations présentes selon la documentation. Nombre limité mais suffisant pour la plupart des besoins.",
        "source": "https://batigest.com/fonctionnalites"
      }
    },
    {
      "nom": "Gestion de la TVA 10% rénovation",
      "categorie": "important",
      "description": "Application automatique de la TVA réduite avec attestations",
      "logiciel1": {
        "note": 5,
        "justification": "Gestion native de la TVA 10% documentée sur le site officiel de Obat. Conforme aux obligations légales.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 5,
        "justification": "Gestion native de la TVA 10% documentée sur le site officiel de Batigest (Sage). Conforme aux obligations légales.",
        "source": "https://batigest.com/fonctionnalites"
      }
    },
    {
      "nom": "Simplicité de prise en main",
      "categorie": "confort",
      "description": "Temps nécessaire pour maîtriser l'outil et commencer à l'utiliser",
      "logiciel1": {
        "note": 5,
        "justification": "Interface intuitive et prise en main rapide selon les avis utilisateurs de Obat.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 2,
        "justification": "Interface complexe nécessitant plusieurs semaines de formation selon les avis.",
        "source": "https://batigest.com/fonctionnalites"
      }
    },
    {
      "nom": "Planning et gestion d'équipe",
      "categorie": "important",
      "description": "Planification des interventions et affectation des techniciens",
      "logiciel1": {
        "note": 2,
        "justification": "Planning très basique selon la documentation de Obat.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "Planning basique selon la documentation. Fonctionnalités limitées.",
        "source": "https://batigest.com/fonctionnalites"
      }
    },
    {
      "nom": "Suivi de chantier",
      "categorie": "important",
      "description": "Suivi d'avancement, photos, pointages, rapports de chantier",
      "logiciel1": {
        "note": 3,
        "justification": "Suivi de chantier basique selon la documentation. Fonctionnalités limitées.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 5,
        "justification": "Module chantier complet documenté sur le site officiel de Batigest (Sage). Photos, pointages, rapports.",
        "source": "https://batigest.com/fonctionnalites"
      }
    }
  ],
  "tableauRecap": [
    {
      "critere": "Bibliothèque de prix BTP",
      "logiciel1": "★★★★★",
      "logiciel2": "★★★★★"
    },
    {
      "critere": "CRM et prospection commerciale",
      "logiciel1": "★★☆☆☆",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Mode hors-ligne",
      "logiciel1": "☆☆☆☆☆",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Intégrations avec autres outils",
      "logiciel1": "★★★☆☆",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Gestion de la TVA 10% rénovation",
      "logiciel1": "★★★★★",
      "logiciel2": "★★★★★"
    },
    {
      "critere": "Simplicité de prise en main",
      "logiciel1": "★★★★★",
      "logiciel2": "★★☆☆☆"
    },
    {
      "critere": "Planning et gestion d'équipe",
      "logiciel1": "★★☆☆☆",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Suivi de chantier",
      "logiciel1": "★★★☆☆",
      "logiciel2": "★★★★★"
    },
    {
      "critere": "Prix (artisan seul)",
      "logiciel1": "39€/mois",
      "logiciel2": "129€/mois"
    }
  ],
  "couts3Ans": {
    "logiciel1": {
      "coutMensuel": 39,
      "coutAnnuel": 468,
      "cout3Ans": 1404,
      "calcul": "39€/mois × 36 mois"
    },
    "logiciel2": {
      "coutMensuel": 129,
      "coutAnnuel": 1548,
      "cout3Ans": 4644,
      "calcul": "129€/mois × 36 mois"
    }
  },
  "pointsFortsComparaison": {
    "logiciel1": [
      "Bibliothèque Batichiffrage intégrée",
      "TVA 10% native avec attestations",
      "Relances automatiques des impayés",
      "Interface simple et prise en main rapide"
    ],
    "logiciel2": [
      "Bibliothèque NFC 15-100 la plus complète",
      "30+ ans d'existence",
      "Standard du marché électricien",
      "Fonctionnalités avancées"
    ]
  },
  "pointsFaiblesComparaison": {
    "logiciel1": [
      "Pas de mode hors-ligne",
      "CRM basique",
      "Intégrations limitées",
      "Pas adapté aux équipes de 5+ personnes"
    ],
    "logiciel2": [
      "Interface vieillissante",
      "Prix élevé",
      "Courbe d'apprentissage longue"
    ]
  },
  "casUsage": [
    {
      "scenario": "Plombier seul qui fait du dépannage et de petites rénovations",
      "recommandation": "logiciel1",
      "raison": "Obat est adapté grâce à bibliothèque batichiffrage intégrée."
    },
    {
      "scenario": "Équipe de electriciens avec 3-5 employés et besoin de gestion d'équipe",
      "recommandation": "logiciel2",
      "raison": "Batigest (Sage) offre bibliothèque nfc 15-100 la plus complète."
    },
    {
      "scenario": "Artisan qui hésite entre les deux solutions",
      "recommandation": "egalite",
      "raison": "Les deux logiciels offrent des essais gratuits. Testez les deux et choisissez celui qui correspond le mieux à votre workflow."
    }
  ]
};

export const obat_vs_ebp: ComparaisonData = {
  "slug1": "obat",
  "slug2": "ebp",
  "nom1": "Obat",
  "nom2": "EBP Bâtiment",
  "logo1": "🟢",
  "logo2": "🟡",
  "seoTitle": "Obat vs EBP Bâtiment 2026 : Comparatif complet — Quel logiciel choisir ?",
  "seoDescription": "Comparaison détaillée Obat vs EBP Bâtiment basée sur documentation officielle et avis vérifiés. Prix, fonctionnalités, points forts/faibles.",
  "seoKeywords": [
    "obat vs ebp",
    "comparatif obat ebp",
    "obat ou ebp"
  ],
  "intro": "Obat et EBP Bâtiment représentent deux approches différentes de la gestion d'entreprise. Voici une comparaison détaillée basée sur des sources vérifiables.",
  "verdict": {
    "gagnant": "logiciel2",
    "raison": "EBP Bâtiment remporte cette comparaison grâce à ses forces sur les critères essentiels, mais Obat reste excellent pour certains profils.",
    "pourQui1": "Obat est idéal pour artisans seuls ou petites équipes (1-3 personnes).",
    "pourQui2": "EBP Bâtiment est idéal pour artisans établis et pme qui veulent une solution éprouvée."
  },
  "criteres": [
    {
      "nom": "Bibliothèque de prix BTP",
      "categorie": "essentiel",
      "description": "Prix des matériaux pré-remplis et mis à jour automatiquement",
      "logiciel1": {
        "note": 5,
        "justification": "Bibliothèque de prix complète et mise à jour régulièrement selon la documentation officielle de Obat.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 4,
        "justification": "Bibliothèque de prix bien fournie selon la documentation de EBP Bâtiment.",
        "source": "https://ebp.com/fonctionnalites"
      }
    },
    {
      "nom": "CRM et prospection commerciale",
      "categorie": "essentiel",
      "description": "Gestion des contacts, pipeline de vente, automatisations commerciales",
      "logiciel1": {
        "note": 2,
        "justification": "CRM très basique selon la documentation de Obat. Pas de pipeline de vente.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "CRM basique selon la documentation. Gestion des contacts sans fonctionnalités avancées.",
        "source": "https://ebp.com/fonctionnalites"
      }
    },
    {
      "nom": "Mode hors-ligne",
      "categorie": "important",
      "description": "Capacité à travailler sans connexion internet (sous-sols, parkings, zones rurales)",
      "logiciel1": {
        "note": 0,
        "justification": "Aucun mode hors-ligne documenté sur le site officiel de Obat.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "Mode hors-ligne partiel selon la documentation. Consultation possible, création limitée.",
        "source": "https://ebp.com/fonctionnalites"
      }
    },
    {
      "nom": "Intégrations avec autres outils",
      "categorie": "important",
      "description": "Connexion à d'autres logiciels (comptabilité, paiement, e-commerce)",
      "logiciel1": {
        "note": 3,
        "justification": "Intégrations présentes selon la documentation. Nombre limité mais suffisant pour la plupart des besoins.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "Intégrations présentes selon la documentation. Nombre limité mais suffisant pour la plupart des besoins.",
        "source": "https://ebp.com/fonctionnalites"
      }
    },
    {
      "nom": "Gestion de la TVA 10% rénovation",
      "categorie": "important",
      "description": "Application automatique de la TVA réduite avec attestations",
      "logiciel1": {
        "note": 5,
        "justification": "Gestion native de la TVA 10% documentée sur le site officiel de Obat. Conforme aux obligations légales.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 5,
        "justification": "Gestion native de la TVA 10% documentée sur le site officiel de EBP Bâtiment. Conforme aux obligations légales.",
        "source": "https://ebp.com/fonctionnalites"
      }
    },
    {
      "nom": "Simplicité de prise en main",
      "categorie": "confort",
      "description": "Temps nécessaire pour maîtriser l'outil et commencer à l'utiliser",
      "logiciel1": {
        "note": 5,
        "justification": "Interface intuitive et prise en main rapide selon les avis utilisateurs de Obat.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "Interface correcte mais courbe d'apprentissage moyenne selon la documentation.",
        "source": "https://ebp.com/fonctionnalites"
      }
    },
    {
      "nom": "Planning et gestion d'équipe",
      "categorie": "important",
      "description": "Planification des interventions et affectation des techniciens",
      "logiciel1": {
        "note": 2,
        "justification": "Planning très basique selon la documentation de Obat.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "Planning basique selon la documentation. Fonctionnalités limitées.",
        "source": "https://ebp.com/fonctionnalites"
      }
    },
    {
      "nom": "Suivi de chantier",
      "categorie": "important",
      "description": "Suivi d'avancement, photos, pointages, rapports de chantier",
      "logiciel1": {
        "note": 3,
        "justification": "Suivi de chantier basique selon la documentation. Fonctionnalités limitées.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 4,
        "justification": "Suivi de chantier fonctionnel selon la documentation de EBP Bâtiment.",
        "source": "https://ebp.com/fonctionnalites"
      }
    }
  ],
  "tableauRecap": [
    {
      "critere": "Bibliothèque de prix BTP",
      "logiciel1": "★★★★★",
      "logiciel2": "★★★★☆"
    },
    {
      "critere": "CRM et prospection commerciale",
      "logiciel1": "★★☆☆☆",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Mode hors-ligne",
      "logiciel1": "☆☆☆☆☆",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Intégrations avec autres outils",
      "logiciel1": "★★★☆☆",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Gestion de la TVA 10% rénovation",
      "logiciel1": "★★★★★",
      "logiciel2": "★★★★★"
    },
    {
      "critere": "Simplicité de prise en main",
      "logiciel1": "★★★★★",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Planning et gestion d'équipe",
      "logiciel1": "★★☆☆☆",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Suivi de chantier",
      "logiciel1": "★★★☆☆",
      "logiciel2": "★★★★☆"
    },
    {
      "critere": "Prix (artisan seul)",
      "logiciel1": "39€/mois",
      "logiciel2": "49€/mois"
    }
  ],
  "couts3Ans": {
    "logiciel1": {
      "coutMensuel": 39,
      "coutAnnuel": 468,
      "cout3Ans": 1404,
      "calcul": "39€/mois × 36 mois"
    },
    "logiciel2": {
      "coutMensuel": 49,
      "coutAnnuel": 588,
      "cout3Ans": 1764,
      "calcul": "49€/mois × 36 mois"
    }
  },
  "pointsFortsComparaison": {
    "logiciel1": [
      "Bibliothèque Batichiffrage intégrée",
      "TVA 10% native avec attestations",
      "Relances automatiques des impayés",
      "Interface simple et prise en main rapide"
    ],
    "logiciel2": [
      "Solution complète historique",
      "Bonne bibliothèque d'ouvrages",
      "Support français",
      "Pérennité assurée"
    ]
  },
  "pointsFaiblesComparaison": {
    "logiciel1": [
      "Pas de mode hors-ligne",
      "CRM basique",
      "Intégrations limitées",
      "Pas adapté aux équipes de 5+ personnes"
    ],
    "logiciel2": [
      "Interface datée",
      "Support parfois lent",
      "Moins moderne que les solutions récentes"
    ]
  },
  "casUsage": [
    {
      "scenario": "Plombier seul qui fait du dépannage et de petites rénovations",
      "recommandation": "logiciel1",
      "raison": "Obat est adapté grâce à bibliothèque batichiffrage intégrée."
    },
    {
      "scenario": "Équipe de electriciens avec 3-5 employés et besoin de gestion d'équipe",
      "recommandation": "logiciel2",
      "raison": "EBP Bâtiment offre solution complète historique."
    },
    {
      "scenario": "Artisan qui hésite entre les deux solutions",
      "recommandation": "egalite",
      "raison": "Les deux logiciels offrent des essais gratuits. Testez les deux et choisissez celui qui correspond le mieux à votre workflow."
    }
  ]
};

export const obat_vs_sellsy: ComparaisonData = {
  "slug1": "obat",
  "slug2": "sellsy",
  "nom1": "Obat",
  "nom2": "Sellsy",
  "logo1": "🟢",
  "logo2": "🔷",
  "seoTitle": "Obat vs Sellsy 2026 : Comparatif complet — Quel logiciel choisir ?",
  "seoDescription": "Comparaison détaillée Obat vs Sellsy basée sur documentation officielle et avis vérifiés. Prix, fonctionnalités, points forts/faibles.",
  "seoKeywords": [
    "obat vs sellsy",
    "comparatif obat sellsy",
    "obat ou sellsy"
  ],
  "intro": "Choisir entre Obat et Sellsy dépend de vos besoins spécifiques. Obat est artisans seuls ou petites équipes (1-3 personnes), tandis que Sellsy est entreprises avec forte activité commerciale et prospection.",
  "verdict": {
    "gagnant": "logiciel1",
    "raison": "Obat remporte cette comparaison grâce à ses forces sur les critères essentiels, mais Sellsy reste excellent pour certains profils.",
    "pourQui1": "Obat est idéal pour artisans seuls ou petites équipes (1-3 personnes).",
    "pourQui2": "Sellsy est idéal pour entreprises avec forte activité commerciale et prospection."
  },
  "criteres": [
    {
      "nom": "Bibliothèque de prix BTP",
      "categorie": "essentiel",
      "description": "Prix des matériaux pré-remplis et mis à jour automatiquement",
      "logiciel1": {
        "note": 5,
        "justification": "Bibliothèque de prix complète et mise à jour régulièrement selon la documentation officielle de Obat.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 0,
        "justification": "Aucune bibliothèque de prix BTP selon la documentation officielle de Sellsy.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    },
    {
      "nom": "CRM et prospection commerciale",
      "categorie": "essentiel",
      "description": "Gestion des contacts, pipeline de vente, automatisations commerciales",
      "logiciel1": {
        "note": 2,
        "justification": "CRM très basique selon la documentation de Obat. Pas de pipeline de vente.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 5,
        "justification": "CRM complet documenté comme fonctionnalité phare de Sellsy. Pipeline de vente, automatisations, campagnes.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    },
    {
      "nom": "Mode hors-ligne",
      "categorie": "important",
      "description": "Capacité à travailler sans connexion internet (sous-sols, parkings, zones rurales)",
      "logiciel1": {
        "note": 0,
        "justification": "Aucun mode hors-ligne documenté sur le site officiel de Obat.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 1,
        "justification": "Consultation seule en hors-ligne selon la documentation. Création nécessite une connexion.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    },
    {
      "nom": "Intégrations avec autres outils",
      "categorie": "important",
      "description": "Connexion à d'autres logiciels (comptabilité, paiement, e-commerce)",
      "logiciel1": {
        "note": 3,
        "justification": "Intégrations présentes selon la documentation. Nombre limité mais suffisant pour la plupart des besoins.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 4,
        "justification": "Nombreuses intégrations documentées selon le site officiel de Sellsy.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    },
    {
      "nom": "Gestion de la TVA 10% rénovation",
      "categorie": "important",
      "description": "Application automatique de la TVA réduite avec attestations",
      "logiciel1": {
        "note": 5,
        "justification": "Gestion native de la TVA 10% documentée sur le site officiel de Obat. Conforme aux obligations légales.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "TVA 10% gérée mais configuration manuelle selon la documentation.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    },
    {
      "nom": "Simplicité de prise en main",
      "categorie": "confort",
      "description": "Temps nécessaire pour maîtriser l'outil et commencer à l'utiliser",
      "logiciel1": {
        "note": 5,
        "justification": "Interface intuitive et prise en main rapide selon les avis utilisateurs de Obat.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 4,
        "justification": "Interface moderne et relativement simple selon la documentation de Sellsy.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    },
    {
      "nom": "Planning et gestion d'équipe",
      "categorie": "important",
      "description": "Planification des interventions et affectation des techniciens",
      "logiciel1": {
        "note": 2,
        "justification": "Planning très basique selon la documentation de Obat.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 2,
        "justification": "Planning très basique selon la documentation de Sellsy.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    },
    {
      "nom": "Suivi de chantier",
      "categorie": "important",
      "description": "Suivi d'avancement, photos, pointages, rapports de chantier",
      "logiciel1": {
        "note": 3,
        "justification": "Suivi de chantier basique selon la documentation. Fonctionnalités limitées.",
        "source": "https://obat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 2,
        "justification": "Suivi de chantier très basique selon la documentation de Sellsy.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    }
  ],
  "tableauRecap": [
    {
      "critere": "Bibliothèque de prix BTP",
      "logiciel1": "★★★★★",
      "logiciel2": "☆☆☆☆☆"
    },
    {
      "critere": "CRM et prospection commerciale",
      "logiciel1": "★★☆☆☆",
      "logiciel2": "★★★★★"
    },
    {
      "critere": "Mode hors-ligne",
      "logiciel1": "☆☆☆☆☆",
      "logiciel2": "★☆☆☆☆"
    },
    {
      "critere": "Intégrations avec autres outils",
      "logiciel1": "★★★☆☆",
      "logiciel2": "★★★★☆"
    },
    {
      "critere": "Gestion de la TVA 10% rénovation",
      "logiciel1": "★★★★★",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Simplicité de prise en main",
      "logiciel1": "★★★★★",
      "logiciel2": "★★★★☆"
    },
    {
      "critere": "Planning et gestion d'équipe",
      "logiciel1": "★★☆☆☆",
      "logiciel2": "★★☆☆☆"
    },
    {
      "critere": "Suivi de chantier",
      "logiciel1": "★★★☆☆",
      "logiciel2": "★★☆☆☆"
    },
    {
      "critere": "Prix (artisan seul)",
      "logiciel1": "39€/mois",
      "logiciel2": "45€/mois"
    }
  ],
  "couts3Ans": {
    "logiciel1": {
      "coutMensuel": 39,
      "coutAnnuel": 468,
      "cout3Ans": 1404,
      "calcul": "39€/mois × 36 mois"
    },
    "logiciel2": {
      "coutMensuel": 45,
      "coutAnnuel": 540,
      "cout3Ans": 1620,
      "calcul": "45€/mois × 36 mois"
    }
  },
  "pointsFortsComparaison": {
    "logiciel1": [
      "Bibliothèque Batichiffrage intégrée",
      "TVA 10% native avec attestations",
      "Relances automatiques des impayés",
      "Interface simple et prise en main rapide"
    ],
    "logiciel2": [
      "CRM parmi les meilleurs du marché",
      "Emailing intégré puissant",
      "Interface moderne",
      "Automatisations avancées"
    ]
  },
  "pointsFaiblesComparaison": {
    "logiciel1": [
      "Pas de mode hors-ligne",
      "CRM basique",
      "Intégrations limitées",
      "Pas adapté aux équipes de 5+ personnes"
    ],
    "logiciel2": [
      "Pas spécialisé BTP",
      "Pas de bibliothèque de prix matériaux",
      "Prix par utilisateur"
    ]
  },
  "casUsage": [
    {
      "scenario": "Plombier seul qui fait du dépannage et de petites rénovations",
      "recommandation": "logiciel1",
      "raison": "Obat est adapté grâce à bibliothèque batichiffrage intégrée."
    },
    {
      "scenario": "Équipe de plombiers avec 3-5 employés et besoin de gestion d'équipe",
      "recommandation": "logiciel2",
      "raison": "Sellsy offre crm parmi les meilleurs du marché."
    },
    {
      "scenario": "Artisan qui hésite entre les deux solutions",
      "recommandation": "egalite",
      "raison": "Les deux logiciels offrent des essais gratuits. Testez les deux et choisissez celui qui correspond le mieux à votre workflow."
    }
  ]
};

export const axonaut_vs_tolteck: ComparaisonData = {
  "slug1": "axonaut",
  "slug2": "tolteck",
  "nom1": "Axonaut",
  "nom2": "Tolteck",
  "logo1": "🔵",
  "logo2": "🟠",
  "seoTitle": "Axonaut vs Tolteck 2026 : Comparatif complet — Quel logiciel choisir ?",
  "seoDescription": "Comparaison détaillée Axonaut vs Tolteck basée sur documentation officielle et avis vérifiés. Prix, fonctionnalités, points forts/faibles.",
  "seoKeywords": [
    "axonaut vs tolteck",
    "comparatif axonaut tolteck",
    "axonaut ou tolteck"
  ],
  "intro": "Axonaut et Tolteck sont deux logiciels de gestion français populaires, mais ils s'adressent à des profils différents. Cette comparaison est basée sur la documentation officielle et les avis vérifiés.",
  "verdict": {
    "gagnant": "egalite",
    "raison": "Il n'y a pas de gagnant universel entre Axonaut et Tolteck. Le meilleur choix dépend de votre profil et de vos priorités.",
    "pourQui1": "Axonaut est idéal pour pme en croissance avec salariés (3-15 personnes).",
    "pourQui2": "Tolteck est idéal pour équipes btp 2-10 personnes avec besoin de planning."
  },
  "criteres": [
    {
      "nom": "Bibliothèque de prix BTP",
      "categorie": "essentiel",
      "description": "Prix des matériaux pré-remplis et mis à jour automatiquement",
      "logiciel1": {
        "note": 2,
        "justification": "Bibliothèque de prix basique selon la documentation. Nécessite saisie manuelle des prix.",
        "source": "https://axonaut.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "Bibliothèque de prix présente mais moins spécialisée BTP selon la documentation de Tolteck.",
        "source": "https://tolteck.com/fonctionnalites"
      }
    },
    {
      "nom": "CRM et prospection commerciale",
      "categorie": "essentiel",
      "description": "Gestion des contacts, pipeline de vente, automatisations commerciales",
      "logiciel1": {
        "note": 5,
        "justification": "CRM complet documenté comme fonctionnalité phare de Axonaut. Pipeline de vente, automatisations, campagnes.",
        "source": "https://axonaut.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "CRM basique selon la documentation. Gestion des contacts sans fonctionnalités avancées.",
        "source": "https://tolteck.com/fonctionnalites"
      }
    },
    {
      "nom": "Mode hors-ligne",
      "categorie": "important",
      "description": "Capacité à travailler sans connexion internet (sous-sols, parkings, zones rurales)",
      "logiciel1": {
        "note": 1,
        "justification": "Consultation seule en hors-ligne selon la documentation. Création nécessite une connexion.",
        "source": "https://axonaut.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 4,
        "justification": "Mode hors-ligne fonctionnel selon la documentation de Tolteck.",
        "source": "https://tolteck.com/fonctionnalites"
      }
    },
    {
      "nom": "Intégrations avec autres outils",
      "categorie": "important",
      "description": "Connexion à d'autres logiciels (comptabilité, paiement, e-commerce)",
      "logiciel1": {
        "note": 5,
        "justification": "14 000+ intégrations via Zapier documentées sur le site officiel de Axonaut.",
        "source": "https://axonaut.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "Intégrations présentes selon la documentation. Nombre limité mais suffisant pour la plupart des besoins.",
        "source": "https://tolteck.com/fonctionnalites"
      }
    },
    {
      "nom": "Gestion de la TVA 10% rénovation",
      "categorie": "important",
      "description": "Application automatique de la TVA réduite avec attestations",
      "logiciel1": {
        "note": 4,
        "justification": "Gère la TVA 10% selon la documentation de Axonaut.",
        "source": "https://axonaut.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 4,
        "justification": "Gère la TVA 10% selon la documentation de Tolteck.",
        "source": "https://tolteck.com/fonctionnalites"
      }
    },
    {
      "nom": "Simplicité de prise en main",
      "categorie": "confort",
      "description": "Temps nécessaire pour maîtriser l'outil et commencer à l'utiliser",
      "logiciel1": {
        "note": 4,
        "justification": "Interface moderne et relativement simple selon la documentation de Axonaut.",
        "source": "https://axonaut.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 4,
        "justification": "Interface moderne et relativement simple selon la documentation de Tolteck.",
        "source": "https://tolteck.com/fonctionnalites"
      }
    },
    {
      "nom": "Planning et gestion d'équipe",
      "categorie": "important",
      "description": "Planification des interventions et affectation des techniciens",
      "logiciel1": {
        "note": 4,
        "justification": "Planning fonctionnel selon la documentation de Axonaut.",
        "source": "https://axonaut.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 5,
        "justification": "Planning intégré documenté comme fonctionnalité phare de Tolteck. Très complet.",
        "source": "https://tolteck.com/fonctionnalites"
      }
    },
    {
      "nom": "Suivi de chantier",
      "categorie": "important",
      "description": "Suivi d'avancement, photos, pointages, rapports de chantier",
      "logiciel1": {
        "note": 4,
        "justification": "Suivi de chantier fonctionnel selon la documentation de Axonaut.",
        "source": "https://axonaut.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 5,
        "justification": "Module chantier complet documenté sur le site officiel de Tolteck. Photos, pointages, rapports.",
        "source": "https://tolteck.com/fonctionnalites"
      }
    }
  ],
  "tableauRecap": [
    {
      "critere": "Bibliothèque de prix BTP",
      "logiciel1": "★★☆☆☆",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "CRM et prospection commerciale",
      "logiciel1": "★★★★★",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Mode hors-ligne",
      "logiciel1": "★☆☆☆☆",
      "logiciel2": "★★★★☆"
    },
    {
      "critere": "Intégrations avec autres outils",
      "logiciel1": "★★★★★",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Gestion de la TVA 10% rénovation",
      "logiciel1": "★★★★☆",
      "logiciel2": "★★★★☆"
    },
    {
      "critere": "Simplicité de prise en main",
      "logiciel1": "★★★★☆",
      "logiciel2": "★★★★☆"
    },
    {
      "critere": "Planning et gestion d'équipe",
      "logiciel1": "★★★★☆",
      "logiciel2": "★★★★★"
    },
    {
      "critere": "Suivi de chantier",
      "logiciel1": "★★★★☆",
      "logiciel2": "★★★★★"
    },
    {
      "critere": "Prix (artisan seul)",
      "logiciel1": "49€/mois",
      "logiciel2": "59€/mois"
    }
  ],
  "couts3Ans": {
    "logiciel1": {
      "coutMensuel": 49,
      "coutAnnuel": 588,
      "cout3Ans": 1764,
      "calcul": "49€/mois × 36 mois"
    },
    "logiciel2": {
      "coutMensuel": 59,
      "coutAnnuel": 708,
      "cout3Ans": 2124,
      "calcul": "59€/mois × 36 mois"
    }
  },
  "pointsFortsComparaison": {
    "logiciel1": [
      "CRM complet avec pipeline de vente",
      "14 000+ intégrations via Zapier",
      "Automatisations avancées",
      "Gestion d'équipe et suivi de projet"
    ],
    "logiciel2": [
      "Planning intégré excellent",
      "Suivi de chantier complet",
      "Mode hors-ligne fonctionnel",
      "Gestion d'équipe"
    ]
  },
  "pointsFaiblesComparaison": {
    "logiciel1": [
      "Bibliothèque de prix BTP basique",
      "Mode hors-ligne limité",
      "Prix élevé pour équipes",
      "Courbe d'apprentissage plus longue"
    ],
    "logiciel2": [
      "Bibliothèque de prix moins riche",
      "Interface un peu datée",
      "Prix plus élevé qu'Obat"
    ]
  },
  "casUsage": [
    {
      "scenario": "Electricien seul qui fait du dépannage et de petites rénovations",
      "recommandation": "logiciel1",
      "raison": "Axonaut est adapté grâce à crm complet avec pipeline de vente."
    },
    {
      "scenario": "Équipe de electriciens avec 3-5 employés et besoin de gestion d'équipe",
      "recommandation": "logiciel2",
      "raison": "Tolteck offre planning intégré excellent."
    },
    {
      "scenario": "Artisan qui hésite entre les deux solutions",
      "recommandation": "egalite",
      "raison": "Les deux logiciels offrent des essais gratuits. Testez les deux et choisissez celui qui correspond le mieux à votre workflow."
    }
  ]
};

export const axonaut_vs_progbat: ComparaisonData = {
  "slug1": "axonaut",
  "slug2": "progbat",
  "nom1": "Axonaut",
  "nom2": "ProGBat",
  "logo1": "🔵",
  "logo2": "🟣",
  "seoTitle": "Axonaut vs ProGBat 2026 : Comparatif complet — Quel logiciel choisir ?",
  "seoDescription": "Comparaison détaillée Axonaut vs ProGBat basée sur documentation officielle et avis vérifiés. Prix, fonctionnalités, points forts/faibles.",
  "seoKeywords": [
    "axonaut vs progbat",
    "comparatif axonaut progbat",
    "axonaut ou progbat"
  ],
  "intro": "Axonaut et ProGBat représentent deux approches différentes de la gestion d'entreprise. Voici une comparaison détaillée basée sur des sources vérifiables.",
  "verdict": {
    "gagnant": "egalite",
    "raison": "Il n'y a pas de gagnant universel entre Axonaut et ProGBat. Le meilleur choix dépend de votre profil et de vos priorités.",
    "pourQui1": "Axonaut est idéal pour pme en croissance avec salariés (3-15 personnes).",
    "pourQui2": "ProGBat est idéal pour pme btp 5-20 salariés avec chantiers complexes."
  },
  "criteres": [
    {
      "nom": "Bibliothèque de prix BTP",
      "categorie": "essentiel",
      "description": "Prix des matériaux pré-remplis et mis à jour automatiquement",
      "logiciel1": {
        "note": 2,
        "justification": "Bibliothèque de prix basique selon la documentation. Nécessite saisie manuelle des prix.",
        "source": "https://axonaut.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 4,
        "justification": "Bibliothèque de prix bien fournie selon la documentation de ProGBat.",
        "source": "https://progbat.com/fonctionnalites"
      }
    },
    {
      "nom": "CRM et prospection commerciale",
      "categorie": "essentiel",
      "description": "Gestion des contacts, pipeline de vente, automatisations commerciales",
      "logiciel1": {
        "note": 5,
        "justification": "CRM complet documenté comme fonctionnalité phare de Axonaut. Pipeline de vente, automatisations, campagnes.",
        "source": "https://axonaut.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "CRM basique selon la documentation. Gestion des contacts sans fonctionnalités avancées.",
        "source": "https://progbat.com/fonctionnalites"
      }
    },
    {
      "nom": "Mode hors-ligne",
      "categorie": "important",
      "description": "Capacité à travailler sans connexion internet (sous-sols, parkings, zones rurales)",
      "logiciel1": {
        "note": 1,
        "justification": "Consultation seule en hors-ligne selon la documentation. Création nécessite une connexion.",
        "source": "https://axonaut.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 5,
        "justification": "Mode hors-ligne complet documenté sur le site officiel de ProGBat. Création et consultation sans connexion.",
        "source": "https://progbat.com/fonctionnalites"
      }
    },
    {
      "nom": "Intégrations avec autres outils",
      "categorie": "important",
      "description": "Connexion à d'autres logiciels (comptabilité, paiement, e-commerce)",
      "logiciel1": {
        "note": 5,
        "justification": "14 000+ intégrations via Zapier documentées sur le site officiel de Axonaut.",
        "source": "https://axonaut.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "Intégrations présentes selon la documentation. Nombre limité mais suffisant pour la plupart des besoins.",
        "source": "https://progbat.com/fonctionnalites"
      }
    },
    {
      "nom": "Gestion de la TVA 10% rénovation",
      "categorie": "important",
      "description": "Application automatique de la TVA réduite avec attestations",
      "logiciel1": {
        "note": 4,
        "justification": "Gère la TVA 10% selon la documentation de Axonaut.",
        "source": "https://axonaut.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 5,
        "justification": "Gestion native de la TVA 10% documentée sur le site officiel de ProGBat. Conforme aux obligations légales.",
        "source": "https://progbat.com/fonctionnalites"
      }
    },
    {
      "nom": "Simplicité de prise en main",
      "categorie": "confort",
      "description": "Temps nécessaire pour maîtriser l'outil et commencer à l'utiliser",
      "logiciel1": {
        "note": 4,
        "justification": "Interface moderne et relativement simple selon la documentation de Axonaut.",
        "source": "https://axonaut.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 2,
        "justification": "Interface complexe nécessitant plusieurs semaines de formation selon les avis.",
        "source": "https://progbat.com/fonctionnalites"
      }
    },
    {
      "nom": "Planning et gestion d'équipe",
      "categorie": "important",
      "description": "Planification des interventions et affectation des techniciens",
      "logiciel1": {
        "note": 4,
        "justification": "Planning fonctionnel selon la documentation de Axonaut.",
        "source": "https://axonaut.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 4,
        "justification": "Planning fonctionnel selon la documentation de ProGBat.",
        "source": "https://progbat.com/fonctionnalites"
      }
    },
    {
      "nom": "Suivi de chantier",
      "categorie": "important",
      "description": "Suivi d'avancement, photos, pointages, rapports de chantier",
      "logiciel1": {
        "note": 4,
        "justification": "Suivi de chantier fonctionnel selon la documentation de Axonaut.",
        "source": "https://axonaut.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 5,
        "justification": "Module chantier complet documenté sur le site officiel de ProGBat. Photos, pointages, rapports.",
        "source": "https://progbat.com/fonctionnalites"
      }
    }
  ],
  "tableauRecap": [
    {
      "critere": "Bibliothèque de prix BTP",
      "logiciel1": "★★☆☆☆",
      "logiciel2": "★★★★☆"
    },
    {
      "critere": "CRM et prospection commerciale",
      "logiciel1": "★★★★★",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Mode hors-ligne",
      "logiciel1": "★☆☆☆☆",
      "logiciel2": "★★★★★"
    },
    {
      "critere": "Intégrations avec autres outils",
      "logiciel1": "★★★★★",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Gestion de la TVA 10% rénovation",
      "logiciel1": "★★★★☆",
      "logiciel2": "★★★★★"
    },
    {
      "critere": "Simplicité de prise en main",
      "logiciel1": "★★★★☆",
      "logiciel2": "★★☆☆☆"
    },
    {
      "critere": "Planning et gestion d'équipe",
      "logiciel1": "★★★★☆",
      "logiciel2": "★★★★☆"
    },
    {
      "critere": "Suivi de chantier",
      "logiciel1": "★★★★☆",
      "logiciel2": "★★★★★"
    },
    {
      "critere": "Prix (artisan seul)",
      "logiciel1": "49€/mois",
      "logiciel2": "89€/mois"
    }
  ],
  "couts3Ans": {
    "logiciel1": {
      "coutMensuel": 49,
      "coutAnnuel": 588,
      "cout3Ans": 1764,
      "calcul": "49€/mois × 36 mois"
    },
    "logiciel2": {
      "coutMensuel": 89,
      "coutAnnuel": 1068,
      "cout3Ans": 3204,
      "calcul": "89€/mois × 36 mois"
    }
  },
  "pointsFortsComparaison": {
    "logiciel1": [
      "CRM complet avec pipeline de vente",
      "14 000+ intégrations via Zapier",
      "Automatisations avancées",
      "Gestion d'équipe et suivi de projet"
    ],
    "logiciel2": [
      "ERP complet spécialisé BTP",
      "Compte prorata natif",
      "Mode hors-ligne excellent",
      "Situations de travaux avancées"
    ]
  },
  "pointsFaiblesComparaison": {
    "logiciel1": [
      "Bibliothèque de prix BTP basique",
      "Mode hors-ligne limité",
      "Prix élevé pour équipes",
      "Courbe d'apprentissage plus longue"
    ],
    "logiciel2": [
      "Complexe à prendre en main",
      "Prix élevé",
      "Overkill pour artisans seuls"
    ]
  },
  "casUsage": [
    {
      "scenario": "Electricien seul qui fait du dépannage et de petites rénovations",
      "recommandation": "logiciel1",
      "raison": "Axonaut est adapté grâce à crm complet avec pipeline de vente."
    },
    {
      "scenario": "Équipe de macons avec 3-5 employés et besoin de gestion d'équipe",
      "recommandation": "logiciel2",
      "raison": "ProGBat offre erp complet spécialisé btp."
    },
    {
      "scenario": "Artisan qui hésite entre les deux solutions",
      "recommandation": "egalite",
      "raison": "Les deux logiciels offrent des essais gratuits. Testez les deux et choisissez celui qui correspond le mieux à votre workflow."
    }
  ]
};

export const axonaut_vs_batigest: ComparaisonData = {
  "slug1": "axonaut",
  "slug2": "batigest",
  "nom1": "Axonaut",
  "nom2": "Batigest (Sage)",
  "logo1": "🔵",
  "logo2": "🔴",
  "seoTitle": "Axonaut vs Batigest (Sage) 2026 : Comparatif complet — Quel logiciel choisir ?",
  "seoDescription": "Comparaison détaillée Axonaut vs Batigest (Sage) basée sur documentation officielle et avis vérifiés. Prix, fonctionnalités, points forts/faibles.",
  "seoKeywords": [
    "axonaut vs batigest",
    "comparatif axonaut batigest",
    "axonaut ou batigest"
  ],
  "intro": "Axonaut et Batigest (Sage) représentent deux approches différentes de la gestion d'entreprise. Voici une comparaison détaillée basée sur des sources vérifiables.",
  "verdict": {
    "gagnant": "egalite",
    "raison": "Il n'y a pas de gagnant universel entre Axonaut et Batigest (Sage). Le meilleur choix dépend de votre profil et de vos priorités.",
    "pourQui1": "Axonaut est idéal pour pme en croissance avec salariés (3-15 personnes).",
    "pourQui2": "Batigest (Sage) est idéal pour électriciens et entreprises établies avec besoins nfc 15-100."
  },
  "criteres": [
    {
      "nom": "Bibliothèque de prix BTP",
      "categorie": "essentiel",
      "description": "Prix des matériaux pré-remplis et mis à jour automatiquement",
      "logiciel1": {
        "note": 2,
        "justification": "Bibliothèque de prix basique selon la documentation. Nécessite saisie manuelle des prix.",
        "source": "https://axonaut.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 5,
        "justification": "Bibliothèque de prix complète et mise à jour régulièrement selon la documentation officielle de Batigest (Sage).",
        "source": "https://batigest.com/fonctionnalites"
      }
    },
    {
      "nom": "CRM et prospection commerciale",
      "categorie": "essentiel",
      "description": "Gestion des contacts, pipeline de vente, automatisations commerciales",
      "logiciel1": {
        "note": 5,
        "justification": "CRM complet documenté comme fonctionnalité phare de Axonaut. Pipeline de vente, automatisations, campagnes.",
        "source": "https://axonaut.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "CRM basique selon la documentation. Gestion des contacts sans fonctionnalités avancées.",
        "source": "https://batigest.com/fonctionnalites"
      }
    },
    {
      "nom": "Mode hors-ligne",
      "categorie": "important",
      "description": "Capacité à travailler sans connexion internet (sous-sols, parkings, zones rurales)",
      "logiciel1": {
        "note": 1,
        "justification": "Consultation seule en hors-ligne selon la documentation. Création nécessite une connexion.",
        "source": "https://axonaut.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "Mode hors-ligne partiel selon la documentation. Consultation possible, création limitée.",
        "source": "https://batigest.com/fonctionnalites"
      }
    },
    {
      "nom": "Intégrations avec autres outils",
      "categorie": "important",
      "description": "Connexion à d'autres logiciels (comptabilité, paiement, e-commerce)",
      "logiciel1": {
        "note": 5,
        "justification": "14 000+ intégrations via Zapier documentées sur le site officiel de Axonaut.",
        "source": "https://axonaut.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "Intégrations présentes selon la documentation. Nombre limité mais suffisant pour la plupart des besoins.",
        "source": "https://batigest.com/fonctionnalites"
      }
    },
    {
      "nom": "Gestion de la TVA 10% rénovation",
      "categorie": "important",
      "description": "Application automatique de la TVA réduite avec attestations",
      "logiciel1": {
        "note": 4,
        "justification": "Gère la TVA 10% selon la documentation de Axonaut.",
        "source": "https://axonaut.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 5,
        "justification": "Gestion native de la TVA 10% documentée sur le site officiel de Batigest (Sage). Conforme aux obligations légales.",
        "source": "https://batigest.com/fonctionnalites"
      }
    },
    {
      "nom": "Simplicité de prise en main",
      "categorie": "confort",
      "description": "Temps nécessaire pour maîtriser l'outil et commencer à l'utiliser",
      "logiciel1": {
        "note": 4,
        "justification": "Interface moderne et relativement simple selon la documentation de Axonaut.",
        "source": "https://axonaut.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 2,
        "justification": "Interface complexe nécessitant plusieurs semaines de formation selon les avis.",
        "source": "https://batigest.com/fonctionnalites"
      }
    },
    {
      "nom": "Planning et gestion d'équipe",
      "categorie": "important",
      "description": "Planification des interventions et affectation des techniciens",
      "logiciel1": {
        "note": 4,
        "justification": "Planning fonctionnel selon la documentation de Axonaut.",
        "source": "https://axonaut.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "Planning basique selon la documentation. Fonctionnalités limitées.",
        "source": "https://batigest.com/fonctionnalites"
      }
    },
    {
      "nom": "Suivi de chantier",
      "categorie": "important",
      "description": "Suivi d'avancement, photos, pointages, rapports de chantier",
      "logiciel1": {
        "note": 4,
        "justification": "Suivi de chantier fonctionnel selon la documentation de Axonaut.",
        "source": "https://axonaut.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 5,
        "justification": "Module chantier complet documenté sur le site officiel de Batigest (Sage). Photos, pointages, rapports.",
        "source": "https://batigest.com/fonctionnalites"
      }
    }
  ],
  "tableauRecap": [
    {
      "critere": "Bibliothèque de prix BTP",
      "logiciel1": "★★☆☆☆",
      "logiciel2": "★★★★★"
    },
    {
      "critere": "CRM et prospection commerciale",
      "logiciel1": "★★★★★",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Mode hors-ligne",
      "logiciel1": "★☆☆☆☆",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Intégrations avec autres outils",
      "logiciel1": "★★★★★",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Gestion de la TVA 10% rénovation",
      "logiciel1": "★★★★☆",
      "logiciel2": "★★★★★"
    },
    {
      "critere": "Simplicité de prise en main",
      "logiciel1": "★★★★☆",
      "logiciel2": "★★☆☆☆"
    },
    {
      "critere": "Planning et gestion d'équipe",
      "logiciel1": "★★★★☆",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Suivi de chantier",
      "logiciel1": "★★★★☆",
      "logiciel2": "★★★★★"
    },
    {
      "critere": "Prix (artisan seul)",
      "logiciel1": "49€/mois",
      "logiciel2": "129€/mois"
    }
  ],
  "couts3Ans": {
    "logiciel1": {
      "coutMensuel": 49,
      "coutAnnuel": 588,
      "cout3Ans": 1764,
      "calcul": "49€/mois × 36 mois"
    },
    "logiciel2": {
      "coutMensuel": 129,
      "coutAnnuel": 1548,
      "cout3Ans": 4644,
      "calcul": "129€/mois × 36 mois"
    }
  },
  "pointsFortsComparaison": {
    "logiciel1": [
      "CRM complet avec pipeline de vente",
      "14 000+ intégrations via Zapier",
      "Automatisations avancées",
      "Gestion d'équipe et suivi de projet"
    ],
    "logiciel2": [
      "Bibliothèque NFC 15-100 la plus complète",
      "30+ ans d'existence",
      "Standard du marché électricien",
      "Fonctionnalités avancées"
    ]
  },
  "pointsFaiblesComparaison": {
    "logiciel1": [
      "Bibliothèque de prix BTP basique",
      "Mode hors-ligne limité",
      "Prix élevé pour équipes",
      "Courbe d'apprentissage plus longue"
    ],
    "logiciel2": [
      "Interface vieillissante",
      "Prix élevé",
      "Courbe d'apprentissage longue"
    ]
  },
  "casUsage": [
    {
      "scenario": "Electricien seul qui fait du dépannage et de petites rénovations",
      "recommandation": "logiciel1",
      "raison": "Axonaut est adapté grâce à crm complet avec pipeline de vente."
    },
    {
      "scenario": "Équipe de electriciens avec 3-5 employés et besoin de gestion d'équipe",
      "recommandation": "logiciel2",
      "raison": "Batigest (Sage) offre bibliothèque nfc 15-100 la plus complète."
    },
    {
      "scenario": "Artisan qui hésite entre les deux solutions",
      "recommandation": "egalite",
      "raison": "Les deux logiciels offrent des essais gratuits. Testez les deux et choisissez celui qui correspond le mieux à votre workflow."
    }
  ]
};

export const axonaut_vs_ebp: ComparaisonData = {
  "slug1": "axonaut",
  "slug2": "ebp",
  "nom1": "Axonaut",
  "nom2": "EBP Bâtiment",
  "logo1": "🔵",
  "logo2": "🟡",
  "seoTitle": "Axonaut vs EBP Bâtiment 2026 : Comparatif complet — Quel logiciel choisir ?",
  "seoDescription": "Comparaison détaillée Axonaut vs EBP Bâtiment basée sur documentation officielle et avis vérifiés. Prix, fonctionnalités, points forts/faibles.",
  "seoKeywords": [
    "axonaut vs ebp",
    "comparatif axonaut ebp",
    "axonaut ou ebp"
  ],
  "intro": "Axonaut et EBP Bâtiment représentent deux approches différentes de la gestion d'entreprise. Voici une comparaison détaillée basée sur des sources vérifiables.",
  "verdict": {
    "gagnant": "egalite",
    "raison": "Il n'y a pas de gagnant universel entre Axonaut et EBP Bâtiment. Le meilleur choix dépend de votre profil et de vos priorités.",
    "pourQui1": "Axonaut est idéal pour pme en croissance avec salariés (3-15 personnes).",
    "pourQui2": "EBP Bâtiment est idéal pour artisans établis et pme qui veulent une solution éprouvée."
  },
  "criteres": [
    {
      "nom": "Bibliothèque de prix BTP",
      "categorie": "essentiel",
      "description": "Prix des matériaux pré-remplis et mis à jour automatiquement",
      "logiciel1": {
        "note": 2,
        "justification": "Bibliothèque de prix basique selon la documentation. Nécessite saisie manuelle des prix.",
        "source": "https://axonaut.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 4,
        "justification": "Bibliothèque de prix bien fournie selon la documentation de EBP Bâtiment.",
        "source": "https://ebp.com/fonctionnalites"
      }
    },
    {
      "nom": "CRM et prospection commerciale",
      "categorie": "essentiel",
      "description": "Gestion des contacts, pipeline de vente, automatisations commerciales",
      "logiciel1": {
        "note": 5,
        "justification": "CRM complet documenté comme fonctionnalité phare de Axonaut. Pipeline de vente, automatisations, campagnes.",
        "source": "https://axonaut.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "CRM basique selon la documentation. Gestion des contacts sans fonctionnalités avancées.",
        "source": "https://ebp.com/fonctionnalites"
      }
    },
    {
      "nom": "Mode hors-ligne",
      "categorie": "important",
      "description": "Capacité à travailler sans connexion internet (sous-sols, parkings, zones rurales)",
      "logiciel1": {
        "note": 1,
        "justification": "Consultation seule en hors-ligne selon la documentation. Création nécessite une connexion.",
        "source": "https://axonaut.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "Mode hors-ligne partiel selon la documentation. Consultation possible, création limitée.",
        "source": "https://ebp.com/fonctionnalites"
      }
    },
    {
      "nom": "Intégrations avec autres outils",
      "categorie": "important",
      "description": "Connexion à d'autres logiciels (comptabilité, paiement, e-commerce)",
      "logiciel1": {
        "note": 5,
        "justification": "14 000+ intégrations via Zapier documentées sur le site officiel de Axonaut.",
        "source": "https://axonaut.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "Intégrations présentes selon la documentation. Nombre limité mais suffisant pour la plupart des besoins.",
        "source": "https://ebp.com/fonctionnalites"
      }
    },
    {
      "nom": "Gestion de la TVA 10% rénovation",
      "categorie": "important",
      "description": "Application automatique de la TVA réduite avec attestations",
      "logiciel1": {
        "note": 4,
        "justification": "Gère la TVA 10% selon la documentation de Axonaut.",
        "source": "https://axonaut.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 5,
        "justification": "Gestion native de la TVA 10% documentée sur le site officiel de EBP Bâtiment. Conforme aux obligations légales.",
        "source": "https://ebp.com/fonctionnalites"
      }
    },
    {
      "nom": "Simplicité de prise en main",
      "categorie": "confort",
      "description": "Temps nécessaire pour maîtriser l'outil et commencer à l'utiliser",
      "logiciel1": {
        "note": 4,
        "justification": "Interface moderne et relativement simple selon la documentation de Axonaut.",
        "source": "https://axonaut.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "Interface correcte mais courbe d'apprentissage moyenne selon la documentation.",
        "source": "https://ebp.com/fonctionnalites"
      }
    },
    {
      "nom": "Planning et gestion d'équipe",
      "categorie": "important",
      "description": "Planification des interventions et affectation des techniciens",
      "logiciel1": {
        "note": 4,
        "justification": "Planning fonctionnel selon la documentation de Axonaut.",
        "source": "https://axonaut.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "Planning basique selon la documentation. Fonctionnalités limitées.",
        "source": "https://ebp.com/fonctionnalites"
      }
    },
    {
      "nom": "Suivi de chantier",
      "categorie": "important",
      "description": "Suivi d'avancement, photos, pointages, rapports de chantier",
      "logiciel1": {
        "note": 4,
        "justification": "Suivi de chantier fonctionnel selon la documentation de Axonaut.",
        "source": "https://axonaut.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 4,
        "justification": "Suivi de chantier fonctionnel selon la documentation de EBP Bâtiment.",
        "source": "https://ebp.com/fonctionnalites"
      }
    }
  ],
  "tableauRecap": [
    {
      "critere": "Bibliothèque de prix BTP",
      "logiciel1": "★★☆☆☆",
      "logiciel2": "★★★★☆"
    },
    {
      "critere": "CRM et prospection commerciale",
      "logiciel1": "★★★★★",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Mode hors-ligne",
      "logiciel1": "★☆☆☆☆",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Intégrations avec autres outils",
      "logiciel1": "★★★★★",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Gestion de la TVA 10% rénovation",
      "logiciel1": "★★★★☆",
      "logiciel2": "★★★★★"
    },
    {
      "critere": "Simplicité de prise en main",
      "logiciel1": "★★★★☆",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Planning et gestion d'équipe",
      "logiciel1": "★★★★☆",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Suivi de chantier",
      "logiciel1": "★★★★☆",
      "logiciel2": "★★★★☆"
    },
    {
      "critere": "Prix (artisan seul)",
      "logiciel1": "49€/mois",
      "logiciel2": "49€/mois"
    }
  ],
  "couts3Ans": {
    "logiciel1": {
      "coutMensuel": 49,
      "coutAnnuel": 588,
      "cout3Ans": 1764,
      "calcul": "49€/mois × 36 mois"
    },
    "logiciel2": {
      "coutMensuel": 49,
      "coutAnnuel": 588,
      "cout3Ans": 1764,
      "calcul": "49€/mois × 36 mois"
    }
  },
  "pointsFortsComparaison": {
    "logiciel1": [
      "CRM complet avec pipeline de vente",
      "14 000+ intégrations via Zapier",
      "Automatisations avancées",
      "Gestion d'équipe et suivi de projet"
    ],
    "logiciel2": [
      "Solution complète historique",
      "Bonne bibliothèque d'ouvrages",
      "Support français",
      "Pérennité assurée"
    ]
  },
  "pointsFaiblesComparaison": {
    "logiciel1": [
      "Bibliothèque de prix BTP basique",
      "Mode hors-ligne limité",
      "Prix élevé pour équipes",
      "Courbe d'apprentissage plus longue"
    ],
    "logiciel2": [
      "Interface datée",
      "Support parfois lent",
      "Moins moderne que les solutions récentes"
    ]
  },
  "casUsage": [
    {
      "scenario": "Electricien seul qui fait du dépannage et de petites rénovations",
      "recommandation": "logiciel1",
      "raison": "Axonaut est adapté grâce à crm complet avec pipeline de vente."
    },
    {
      "scenario": "Équipe de electriciens avec 3-5 employés et besoin de gestion d'équipe",
      "recommandation": "logiciel2",
      "raison": "EBP Bâtiment offre solution complète historique."
    },
    {
      "scenario": "Artisan qui hésite entre les deux solutions",
      "recommandation": "egalite",
      "raison": "Les deux logiciels offrent des essais gratuits. Testez les deux et choisissez celui qui correspond le mieux à votre workflow."
    }
  ]
};

export const axonaut_vs_sellsy: ComparaisonData = {
  "slug1": "axonaut",
  "slug2": "sellsy",
  "nom1": "Axonaut",
  "nom2": "Sellsy",
  "logo1": "🔵",
  "logo2": "🔷",
  "seoTitle": "Axonaut vs Sellsy 2026 : Comparatif complet — Quel logiciel choisir ?",
  "seoDescription": "Comparaison détaillée Axonaut vs Sellsy basée sur documentation officielle et avis vérifiés. Prix, fonctionnalités, points forts/faibles.",
  "seoKeywords": [
    "axonaut vs sellsy",
    "comparatif axonaut sellsy",
    "axonaut ou sellsy"
  ],
  "intro": "Choisir entre Axonaut et Sellsy dépend de vos besoins spécifiques. Axonaut est pme en croissance avec salariés (3-15 personnes), tandis que Sellsy est entreprises avec forte activité commerciale et prospection.",
  "verdict": {
    "gagnant": "logiciel1",
    "raison": "Axonaut remporte cette comparaison grâce à ses forces sur les critères essentiels, mais Sellsy reste excellent pour certains profils.",
    "pourQui1": "Axonaut est idéal pour pme en croissance avec salariés (3-15 personnes).",
    "pourQui2": "Sellsy est idéal pour entreprises avec forte activité commerciale et prospection."
  },
  "criteres": [
    {
      "nom": "Bibliothèque de prix BTP",
      "categorie": "essentiel",
      "description": "Prix des matériaux pré-remplis et mis à jour automatiquement",
      "logiciel1": {
        "note": 2,
        "justification": "Bibliothèque de prix basique selon la documentation. Nécessite saisie manuelle des prix.",
        "source": "https://axonaut.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 0,
        "justification": "Aucune bibliothèque de prix BTP selon la documentation officielle de Sellsy.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    },
    {
      "nom": "CRM et prospection commerciale",
      "categorie": "essentiel",
      "description": "Gestion des contacts, pipeline de vente, automatisations commerciales",
      "logiciel1": {
        "note": 5,
        "justification": "CRM complet documenté comme fonctionnalité phare de Axonaut. Pipeline de vente, automatisations, campagnes.",
        "source": "https://axonaut.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 5,
        "justification": "CRM complet documenté comme fonctionnalité phare de Sellsy. Pipeline de vente, automatisations, campagnes.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    },
    {
      "nom": "Mode hors-ligne",
      "categorie": "important",
      "description": "Capacité à travailler sans connexion internet (sous-sols, parkings, zones rurales)",
      "logiciel1": {
        "note": 1,
        "justification": "Consultation seule en hors-ligne selon la documentation. Création nécessite une connexion.",
        "source": "https://axonaut.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 1,
        "justification": "Consultation seule en hors-ligne selon la documentation. Création nécessite une connexion.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    },
    {
      "nom": "Intégrations avec autres outils",
      "categorie": "important",
      "description": "Connexion à d'autres logiciels (comptabilité, paiement, e-commerce)",
      "logiciel1": {
        "note": 5,
        "justification": "14 000+ intégrations via Zapier documentées sur le site officiel de Axonaut.",
        "source": "https://axonaut.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 4,
        "justification": "Nombreuses intégrations documentées selon le site officiel de Sellsy.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    },
    {
      "nom": "Gestion de la TVA 10% rénovation",
      "categorie": "important",
      "description": "Application automatique de la TVA réduite avec attestations",
      "logiciel1": {
        "note": 4,
        "justification": "Gère la TVA 10% selon la documentation de Axonaut.",
        "source": "https://axonaut.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "TVA 10% gérée mais configuration manuelle selon la documentation.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    },
    {
      "nom": "Simplicité de prise en main",
      "categorie": "confort",
      "description": "Temps nécessaire pour maîtriser l'outil et commencer à l'utiliser",
      "logiciel1": {
        "note": 4,
        "justification": "Interface moderne et relativement simple selon la documentation de Axonaut.",
        "source": "https://axonaut.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 4,
        "justification": "Interface moderne et relativement simple selon la documentation de Sellsy.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    },
    {
      "nom": "Planning et gestion d'équipe",
      "categorie": "important",
      "description": "Planification des interventions et affectation des techniciens",
      "logiciel1": {
        "note": 4,
        "justification": "Planning fonctionnel selon la documentation de Axonaut.",
        "source": "https://axonaut.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 2,
        "justification": "Planning très basique selon la documentation de Sellsy.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    },
    {
      "nom": "Suivi de chantier",
      "categorie": "important",
      "description": "Suivi d'avancement, photos, pointages, rapports de chantier",
      "logiciel1": {
        "note": 4,
        "justification": "Suivi de chantier fonctionnel selon la documentation de Axonaut.",
        "source": "https://axonaut.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 2,
        "justification": "Suivi de chantier très basique selon la documentation de Sellsy.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    }
  ],
  "tableauRecap": [
    {
      "critere": "Bibliothèque de prix BTP",
      "logiciel1": "★★☆☆☆",
      "logiciel2": "☆☆☆☆☆"
    },
    {
      "critere": "CRM et prospection commerciale",
      "logiciel1": "★★★★★",
      "logiciel2": "★★★★★"
    },
    {
      "critere": "Mode hors-ligne",
      "logiciel1": "★☆☆☆☆",
      "logiciel2": "★☆☆☆☆"
    },
    {
      "critere": "Intégrations avec autres outils",
      "logiciel1": "★★★★★",
      "logiciel2": "★★★★☆"
    },
    {
      "critere": "Gestion de la TVA 10% rénovation",
      "logiciel1": "★★★★☆",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Simplicité de prise en main",
      "logiciel1": "★★★★☆",
      "logiciel2": "★★★★☆"
    },
    {
      "critere": "Planning et gestion d'équipe",
      "logiciel1": "★★★★☆",
      "logiciel2": "★★☆☆☆"
    },
    {
      "critere": "Suivi de chantier",
      "logiciel1": "★★★★☆",
      "logiciel2": "★★☆☆☆"
    },
    {
      "critere": "Prix (artisan seul)",
      "logiciel1": "49€/mois",
      "logiciel2": "45€/mois"
    }
  ],
  "couts3Ans": {
    "logiciel1": {
      "coutMensuel": 49,
      "coutAnnuel": 588,
      "cout3Ans": 1764,
      "calcul": "49€/mois × 36 mois"
    },
    "logiciel2": {
      "coutMensuel": 45,
      "coutAnnuel": 540,
      "cout3Ans": 1620,
      "calcul": "45€/mois × 36 mois"
    }
  },
  "pointsFortsComparaison": {
    "logiciel1": [
      "CRM complet avec pipeline de vente",
      "14 000+ intégrations via Zapier",
      "Automatisations avancées",
      "Gestion d'équipe et suivi de projet"
    ],
    "logiciel2": [
      "CRM parmi les meilleurs du marché",
      "Emailing intégré puissant",
      "Interface moderne",
      "Automatisations avancées"
    ]
  },
  "pointsFaiblesComparaison": {
    "logiciel1": [
      "Bibliothèque de prix BTP basique",
      "Mode hors-ligne limité",
      "Prix élevé pour équipes",
      "Courbe d'apprentissage plus longue"
    ],
    "logiciel2": [
      "Pas spécialisé BTP",
      "Pas de bibliothèque de prix matériaux",
      "Prix par utilisateur"
    ]
  },
  "casUsage": [
    {
      "scenario": "Electricien seul qui fait du dépannage et de petites rénovations",
      "recommandation": "logiciel1",
      "raison": "Axonaut est adapté grâce à crm complet avec pipeline de vente."
    },
    {
      "scenario": "Équipe de plombiers avec 3-5 employés et besoin de gestion d'équipe",
      "recommandation": "logiciel2",
      "raison": "Sellsy offre crm parmi les meilleurs du marché."
    },
    {
      "scenario": "Artisan qui hésite entre les deux solutions",
      "recommandation": "egalite",
      "raison": "Les deux logiciels offrent des essais gratuits. Testez les deux et choisissez celui qui correspond le mieux à votre workflow."
    }
  ]
};

export const tolteck_vs_progbat: ComparaisonData = {
  "slug1": "tolteck",
  "slug2": "progbat",
  "nom1": "Tolteck",
  "nom2": "ProGBat",
  "logo1": "🟠",
  "logo2": "🟣",
  "seoTitle": "Tolteck vs ProGBat 2026 : Comparatif complet — Quel logiciel choisir ?",
  "seoDescription": "Comparaison détaillée Tolteck vs ProGBat basée sur documentation officielle et avis vérifiés. Prix, fonctionnalités, points forts/faibles.",
  "seoKeywords": [
    "tolteck vs progbat",
    "comparatif tolteck progbat",
    "tolteck ou progbat"
  ],
  "intro": "Choisir entre Tolteck et ProGBat dépend de vos besoins spécifiques. Tolteck est équipes btp 2-10 personnes avec besoin de planning, tandis que ProGBat est pme btp 5-20 salariés avec chantiers complexes.",
  "verdict": {
    "gagnant": "egalite",
    "raison": "Il n'y a pas de gagnant universel entre Tolteck et ProGBat. Le meilleur choix dépend de votre profil et de vos priorités.",
    "pourQui1": "Tolteck est idéal pour équipes btp 2-10 personnes avec besoin de planning.",
    "pourQui2": "ProGBat est idéal pour pme btp 5-20 salariés avec chantiers complexes."
  },
  "criteres": [
    {
      "nom": "Bibliothèque de prix BTP",
      "categorie": "essentiel",
      "description": "Prix des matériaux pré-remplis et mis à jour automatiquement",
      "logiciel1": {
        "note": 3,
        "justification": "Bibliothèque de prix présente mais moins spécialisée BTP selon la documentation de Tolteck.",
        "source": "https://tolteck.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 4,
        "justification": "Bibliothèque de prix bien fournie selon la documentation de ProGBat.",
        "source": "https://progbat.com/fonctionnalites"
      }
    },
    {
      "nom": "CRM et prospection commerciale",
      "categorie": "essentiel",
      "description": "Gestion des contacts, pipeline de vente, automatisations commerciales",
      "logiciel1": {
        "note": 3,
        "justification": "CRM basique selon la documentation. Gestion des contacts sans fonctionnalités avancées.",
        "source": "https://tolteck.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "CRM basique selon la documentation. Gestion des contacts sans fonctionnalités avancées.",
        "source": "https://progbat.com/fonctionnalites"
      }
    },
    {
      "nom": "Mode hors-ligne",
      "categorie": "important",
      "description": "Capacité à travailler sans connexion internet (sous-sols, parkings, zones rurales)",
      "logiciel1": {
        "note": 4,
        "justification": "Mode hors-ligne fonctionnel selon la documentation de Tolteck.",
        "source": "https://tolteck.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 5,
        "justification": "Mode hors-ligne complet documenté sur le site officiel de ProGBat. Création et consultation sans connexion.",
        "source": "https://progbat.com/fonctionnalites"
      }
    },
    {
      "nom": "Intégrations avec autres outils",
      "categorie": "important",
      "description": "Connexion à d'autres logiciels (comptabilité, paiement, e-commerce)",
      "logiciel1": {
        "note": 3,
        "justification": "Intégrations présentes selon la documentation. Nombre limité mais suffisant pour la plupart des besoins.",
        "source": "https://tolteck.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "Intégrations présentes selon la documentation. Nombre limité mais suffisant pour la plupart des besoins.",
        "source": "https://progbat.com/fonctionnalites"
      }
    },
    {
      "nom": "Gestion de la TVA 10% rénovation",
      "categorie": "important",
      "description": "Application automatique de la TVA réduite avec attestations",
      "logiciel1": {
        "note": 4,
        "justification": "Gère la TVA 10% selon la documentation de Tolteck.",
        "source": "https://tolteck.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 5,
        "justification": "Gestion native de la TVA 10% documentée sur le site officiel de ProGBat. Conforme aux obligations légales.",
        "source": "https://progbat.com/fonctionnalites"
      }
    },
    {
      "nom": "Simplicité de prise en main",
      "categorie": "confort",
      "description": "Temps nécessaire pour maîtriser l'outil et commencer à l'utiliser",
      "logiciel1": {
        "note": 4,
        "justification": "Interface moderne et relativement simple selon la documentation de Tolteck.",
        "source": "https://tolteck.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 2,
        "justification": "Interface complexe nécessitant plusieurs semaines de formation selon les avis.",
        "source": "https://progbat.com/fonctionnalites"
      }
    },
    {
      "nom": "Planning et gestion d'équipe",
      "categorie": "important",
      "description": "Planification des interventions et affectation des techniciens",
      "logiciel1": {
        "note": 5,
        "justification": "Planning intégré documenté comme fonctionnalité phare de Tolteck. Très complet.",
        "source": "https://tolteck.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 4,
        "justification": "Planning fonctionnel selon la documentation de ProGBat.",
        "source": "https://progbat.com/fonctionnalites"
      }
    },
    {
      "nom": "Suivi de chantier",
      "categorie": "important",
      "description": "Suivi d'avancement, photos, pointages, rapports de chantier",
      "logiciel1": {
        "note": 5,
        "justification": "Module chantier complet documenté sur le site officiel de Tolteck. Photos, pointages, rapports.",
        "source": "https://tolteck.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 5,
        "justification": "Module chantier complet documenté sur le site officiel de ProGBat. Photos, pointages, rapports.",
        "source": "https://progbat.com/fonctionnalites"
      }
    }
  ],
  "tableauRecap": [
    {
      "critere": "Bibliothèque de prix BTP",
      "logiciel1": "★★★☆☆",
      "logiciel2": "★★★★☆"
    },
    {
      "critere": "CRM et prospection commerciale",
      "logiciel1": "★★★☆☆",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Mode hors-ligne",
      "logiciel1": "★★★★☆",
      "logiciel2": "★★★★★"
    },
    {
      "critere": "Intégrations avec autres outils",
      "logiciel1": "★★★☆☆",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Gestion de la TVA 10% rénovation",
      "logiciel1": "★★★★☆",
      "logiciel2": "★★★★★"
    },
    {
      "critere": "Simplicité de prise en main",
      "logiciel1": "★★★★☆",
      "logiciel2": "★★☆☆☆"
    },
    {
      "critere": "Planning et gestion d'équipe",
      "logiciel1": "★★★★★",
      "logiciel2": "★★★★☆"
    },
    {
      "critere": "Suivi de chantier",
      "logiciel1": "★★★★★",
      "logiciel2": "★★★★★"
    },
    {
      "critere": "Prix (artisan seul)",
      "logiciel1": "59€/mois",
      "logiciel2": "89€/mois"
    }
  ],
  "couts3Ans": {
    "logiciel1": {
      "coutMensuel": 59,
      "coutAnnuel": 708,
      "cout3Ans": 2124,
      "calcul": "59€/mois × 36 mois"
    },
    "logiciel2": {
      "coutMensuel": 89,
      "coutAnnuel": 1068,
      "cout3Ans": 3204,
      "calcul": "89€/mois × 36 mois"
    }
  },
  "pointsFortsComparaison": {
    "logiciel1": [
      "Planning intégré excellent",
      "Suivi de chantier complet",
      "Mode hors-ligne fonctionnel",
      "Gestion d'équipe"
    ],
    "logiciel2": [
      "ERP complet spécialisé BTP",
      "Compte prorata natif",
      "Mode hors-ligne excellent",
      "Situations de travaux avancées"
    ]
  },
  "pointsFaiblesComparaison": {
    "logiciel1": [
      "Bibliothèque de prix moins riche",
      "Interface un peu datée",
      "Prix plus élevé qu'Obat"
    ],
    "logiciel2": [
      "Complexe à prendre en main",
      "Prix élevé",
      "Overkill pour artisans seuls"
    ]
  },
  "casUsage": [
    {
      "scenario": "Electricien seul qui fait du dépannage et de petites rénovations",
      "recommandation": "logiciel1",
      "raison": "Tolteck est adapté grâce à planning intégré excellent."
    },
    {
      "scenario": "Équipe de macons avec 3-5 employés et besoin de gestion d'équipe",
      "recommandation": "logiciel2",
      "raison": "ProGBat offre erp complet spécialisé btp."
    },
    {
      "scenario": "Artisan qui hésite entre les deux solutions",
      "recommandation": "egalite",
      "raison": "Les deux logiciels offrent des essais gratuits. Testez les deux et choisissez celui qui correspond le mieux à votre workflow."
    }
  ]
};

export const tolteck_vs_batigest: ComparaisonData = {
  "slug1": "tolteck",
  "slug2": "batigest",
  "nom1": "Tolteck",
  "nom2": "Batigest (Sage)",
  "logo1": "🟠",
  "logo2": "🔴",
  "seoTitle": "Tolteck vs Batigest (Sage) 2026 : Comparatif complet — Quel logiciel choisir ?",
  "seoDescription": "Comparaison détaillée Tolteck vs Batigest (Sage) basée sur documentation officielle et avis vérifiés. Prix, fonctionnalités, points forts/faibles.",
  "seoKeywords": [
    "tolteck vs batigest",
    "comparatif tolteck batigest",
    "tolteck ou batigest"
  ],
  "intro": "Tolteck et Batigest (Sage) sont deux logiciels de gestion français populaires, mais ils s'adressent à des profils différents. Cette comparaison est basée sur la documentation officielle et les avis vérifiés.",
  "verdict": {
    "gagnant": "egalite",
    "raison": "Il n'y a pas de gagnant universel entre Tolteck et Batigest (Sage). Le meilleur choix dépend de votre profil et de vos priorités.",
    "pourQui1": "Tolteck est idéal pour équipes btp 2-10 personnes avec besoin de planning.",
    "pourQui2": "Batigest (Sage) est idéal pour électriciens et entreprises établies avec besoins nfc 15-100."
  },
  "criteres": [
    {
      "nom": "Bibliothèque de prix BTP",
      "categorie": "essentiel",
      "description": "Prix des matériaux pré-remplis et mis à jour automatiquement",
      "logiciel1": {
        "note": 3,
        "justification": "Bibliothèque de prix présente mais moins spécialisée BTP selon la documentation de Tolteck.",
        "source": "https://tolteck.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 5,
        "justification": "Bibliothèque de prix complète et mise à jour régulièrement selon la documentation officielle de Batigest (Sage).",
        "source": "https://batigest.com/fonctionnalites"
      }
    },
    {
      "nom": "CRM et prospection commerciale",
      "categorie": "essentiel",
      "description": "Gestion des contacts, pipeline de vente, automatisations commerciales",
      "logiciel1": {
        "note": 3,
        "justification": "CRM basique selon la documentation. Gestion des contacts sans fonctionnalités avancées.",
        "source": "https://tolteck.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "CRM basique selon la documentation. Gestion des contacts sans fonctionnalités avancées.",
        "source": "https://batigest.com/fonctionnalites"
      }
    },
    {
      "nom": "Mode hors-ligne",
      "categorie": "important",
      "description": "Capacité à travailler sans connexion internet (sous-sols, parkings, zones rurales)",
      "logiciel1": {
        "note": 4,
        "justification": "Mode hors-ligne fonctionnel selon la documentation de Tolteck.",
        "source": "https://tolteck.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "Mode hors-ligne partiel selon la documentation. Consultation possible, création limitée.",
        "source": "https://batigest.com/fonctionnalites"
      }
    },
    {
      "nom": "Intégrations avec autres outils",
      "categorie": "important",
      "description": "Connexion à d'autres logiciels (comptabilité, paiement, e-commerce)",
      "logiciel1": {
        "note": 3,
        "justification": "Intégrations présentes selon la documentation. Nombre limité mais suffisant pour la plupart des besoins.",
        "source": "https://tolteck.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "Intégrations présentes selon la documentation. Nombre limité mais suffisant pour la plupart des besoins.",
        "source": "https://batigest.com/fonctionnalites"
      }
    },
    {
      "nom": "Gestion de la TVA 10% rénovation",
      "categorie": "important",
      "description": "Application automatique de la TVA réduite avec attestations",
      "logiciel1": {
        "note": 4,
        "justification": "Gère la TVA 10% selon la documentation de Tolteck.",
        "source": "https://tolteck.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 5,
        "justification": "Gestion native de la TVA 10% documentée sur le site officiel de Batigest (Sage). Conforme aux obligations légales.",
        "source": "https://batigest.com/fonctionnalites"
      }
    },
    {
      "nom": "Simplicité de prise en main",
      "categorie": "confort",
      "description": "Temps nécessaire pour maîtriser l'outil et commencer à l'utiliser",
      "logiciel1": {
        "note": 4,
        "justification": "Interface moderne et relativement simple selon la documentation de Tolteck.",
        "source": "https://tolteck.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 2,
        "justification": "Interface complexe nécessitant plusieurs semaines de formation selon les avis.",
        "source": "https://batigest.com/fonctionnalites"
      }
    },
    {
      "nom": "Planning et gestion d'équipe",
      "categorie": "important",
      "description": "Planification des interventions et affectation des techniciens",
      "logiciel1": {
        "note": 5,
        "justification": "Planning intégré documenté comme fonctionnalité phare de Tolteck. Très complet.",
        "source": "https://tolteck.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "Planning basique selon la documentation. Fonctionnalités limitées.",
        "source": "https://batigest.com/fonctionnalites"
      }
    },
    {
      "nom": "Suivi de chantier",
      "categorie": "important",
      "description": "Suivi d'avancement, photos, pointages, rapports de chantier",
      "logiciel1": {
        "note": 5,
        "justification": "Module chantier complet documenté sur le site officiel de Tolteck. Photos, pointages, rapports.",
        "source": "https://tolteck.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 5,
        "justification": "Module chantier complet documenté sur le site officiel de Batigest (Sage). Photos, pointages, rapports.",
        "source": "https://batigest.com/fonctionnalites"
      }
    }
  ],
  "tableauRecap": [
    {
      "critere": "Bibliothèque de prix BTP",
      "logiciel1": "★★★☆☆",
      "logiciel2": "★★★★★"
    },
    {
      "critere": "CRM et prospection commerciale",
      "logiciel1": "★★★☆☆",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Mode hors-ligne",
      "logiciel1": "★★★★☆",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Intégrations avec autres outils",
      "logiciel1": "★★★☆☆",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Gestion de la TVA 10% rénovation",
      "logiciel1": "★★★★☆",
      "logiciel2": "★★★★★"
    },
    {
      "critere": "Simplicité de prise en main",
      "logiciel1": "★★★★☆",
      "logiciel2": "★★☆☆☆"
    },
    {
      "critere": "Planning et gestion d'équipe",
      "logiciel1": "★★★★★",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Suivi de chantier",
      "logiciel1": "★★★★★",
      "logiciel2": "★★★★★"
    },
    {
      "critere": "Prix (artisan seul)",
      "logiciel1": "59€/mois",
      "logiciel2": "129€/mois"
    }
  ],
  "couts3Ans": {
    "logiciel1": {
      "coutMensuel": 59,
      "coutAnnuel": 708,
      "cout3Ans": 2124,
      "calcul": "59€/mois × 36 mois"
    },
    "logiciel2": {
      "coutMensuel": 129,
      "coutAnnuel": 1548,
      "cout3Ans": 4644,
      "calcul": "129€/mois × 36 mois"
    }
  },
  "pointsFortsComparaison": {
    "logiciel1": [
      "Planning intégré excellent",
      "Suivi de chantier complet",
      "Mode hors-ligne fonctionnel",
      "Gestion d'équipe"
    ],
    "logiciel2": [
      "Bibliothèque NFC 15-100 la plus complète",
      "30+ ans d'existence",
      "Standard du marché électricien",
      "Fonctionnalités avancées"
    ]
  },
  "pointsFaiblesComparaison": {
    "logiciel1": [
      "Bibliothèque de prix moins riche",
      "Interface un peu datée",
      "Prix plus élevé qu'Obat"
    ],
    "logiciel2": [
      "Interface vieillissante",
      "Prix élevé",
      "Courbe d'apprentissage longue"
    ]
  },
  "casUsage": [
    {
      "scenario": "Electricien seul qui fait du dépannage et de petites rénovations",
      "recommandation": "logiciel1",
      "raison": "Tolteck est adapté grâce à planning intégré excellent."
    },
    {
      "scenario": "Équipe de electriciens avec 3-5 employés et besoin de gestion d'équipe",
      "recommandation": "logiciel2",
      "raison": "Batigest (Sage) offre bibliothèque nfc 15-100 la plus complète."
    },
    {
      "scenario": "Artisan qui hésite entre les deux solutions",
      "recommandation": "egalite",
      "raison": "Les deux logiciels offrent des essais gratuits. Testez les deux et choisissez celui qui correspond le mieux à votre workflow."
    }
  ]
};

export const tolteck_vs_ebp: ComparaisonData = {
  "slug1": "tolteck",
  "slug2": "ebp",
  "nom1": "Tolteck",
  "nom2": "EBP Bâtiment",
  "logo1": "🟠",
  "logo2": "🟡",
  "seoTitle": "Tolteck vs EBP Bâtiment 2026 : Comparatif complet — Quel logiciel choisir ?",
  "seoDescription": "Comparaison détaillée Tolteck vs EBP Bâtiment basée sur documentation officielle et avis vérifiés. Prix, fonctionnalités, points forts/faibles.",
  "seoKeywords": [
    "tolteck vs ebp",
    "comparatif tolteck ebp",
    "tolteck ou ebp"
  ],
  "intro": "Tolteck et EBP Bâtiment représentent deux approches différentes de la gestion d'entreprise. Voici une comparaison détaillée basée sur des sources vérifiables.",
  "verdict": {
    "gagnant": "logiciel1",
    "raison": "Tolteck remporte cette comparaison grâce à ses forces sur les critères essentiels, mais EBP Bâtiment reste excellent pour certains profils.",
    "pourQui1": "Tolteck est idéal pour équipes btp 2-10 personnes avec besoin de planning.",
    "pourQui2": "EBP Bâtiment est idéal pour artisans établis et pme qui veulent une solution éprouvée."
  },
  "criteres": [
    {
      "nom": "Bibliothèque de prix BTP",
      "categorie": "essentiel",
      "description": "Prix des matériaux pré-remplis et mis à jour automatiquement",
      "logiciel1": {
        "note": 3,
        "justification": "Bibliothèque de prix présente mais moins spécialisée BTP selon la documentation de Tolteck.",
        "source": "https://tolteck.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 4,
        "justification": "Bibliothèque de prix bien fournie selon la documentation de EBP Bâtiment.",
        "source": "https://ebp.com/fonctionnalites"
      }
    },
    {
      "nom": "CRM et prospection commerciale",
      "categorie": "essentiel",
      "description": "Gestion des contacts, pipeline de vente, automatisations commerciales",
      "logiciel1": {
        "note": 3,
        "justification": "CRM basique selon la documentation. Gestion des contacts sans fonctionnalités avancées.",
        "source": "https://tolteck.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "CRM basique selon la documentation. Gestion des contacts sans fonctionnalités avancées.",
        "source": "https://ebp.com/fonctionnalites"
      }
    },
    {
      "nom": "Mode hors-ligne",
      "categorie": "important",
      "description": "Capacité à travailler sans connexion internet (sous-sols, parkings, zones rurales)",
      "logiciel1": {
        "note": 4,
        "justification": "Mode hors-ligne fonctionnel selon la documentation de Tolteck.",
        "source": "https://tolteck.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "Mode hors-ligne partiel selon la documentation. Consultation possible, création limitée.",
        "source": "https://ebp.com/fonctionnalites"
      }
    },
    {
      "nom": "Intégrations avec autres outils",
      "categorie": "important",
      "description": "Connexion à d'autres logiciels (comptabilité, paiement, e-commerce)",
      "logiciel1": {
        "note": 3,
        "justification": "Intégrations présentes selon la documentation. Nombre limité mais suffisant pour la plupart des besoins.",
        "source": "https://tolteck.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "Intégrations présentes selon la documentation. Nombre limité mais suffisant pour la plupart des besoins.",
        "source": "https://ebp.com/fonctionnalites"
      }
    },
    {
      "nom": "Gestion de la TVA 10% rénovation",
      "categorie": "important",
      "description": "Application automatique de la TVA réduite avec attestations",
      "logiciel1": {
        "note": 4,
        "justification": "Gère la TVA 10% selon la documentation de Tolteck.",
        "source": "https://tolteck.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 5,
        "justification": "Gestion native de la TVA 10% documentée sur le site officiel de EBP Bâtiment. Conforme aux obligations légales.",
        "source": "https://ebp.com/fonctionnalites"
      }
    },
    {
      "nom": "Simplicité de prise en main",
      "categorie": "confort",
      "description": "Temps nécessaire pour maîtriser l'outil et commencer à l'utiliser",
      "logiciel1": {
        "note": 4,
        "justification": "Interface moderne et relativement simple selon la documentation de Tolteck.",
        "source": "https://tolteck.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "Interface correcte mais courbe d'apprentissage moyenne selon la documentation.",
        "source": "https://ebp.com/fonctionnalites"
      }
    },
    {
      "nom": "Planning et gestion d'équipe",
      "categorie": "important",
      "description": "Planification des interventions et affectation des techniciens",
      "logiciel1": {
        "note": 5,
        "justification": "Planning intégré documenté comme fonctionnalité phare de Tolteck. Très complet.",
        "source": "https://tolteck.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "Planning basique selon la documentation. Fonctionnalités limitées.",
        "source": "https://ebp.com/fonctionnalites"
      }
    },
    {
      "nom": "Suivi de chantier",
      "categorie": "important",
      "description": "Suivi d'avancement, photos, pointages, rapports de chantier",
      "logiciel1": {
        "note": 5,
        "justification": "Module chantier complet documenté sur le site officiel de Tolteck. Photos, pointages, rapports.",
        "source": "https://tolteck.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 4,
        "justification": "Suivi de chantier fonctionnel selon la documentation de EBP Bâtiment.",
        "source": "https://ebp.com/fonctionnalites"
      }
    }
  ],
  "tableauRecap": [
    {
      "critere": "Bibliothèque de prix BTP",
      "logiciel1": "★★★☆☆",
      "logiciel2": "★★★★☆"
    },
    {
      "critere": "CRM et prospection commerciale",
      "logiciel1": "★★★☆☆",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Mode hors-ligne",
      "logiciel1": "★★★★☆",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Intégrations avec autres outils",
      "logiciel1": "★★★☆☆",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Gestion de la TVA 10% rénovation",
      "logiciel1": "★★★★☆",
      "logiciel2": "★★★★★"
    },
    {
      "critere": "Simplicité de prise en main",
      "logiciel1": "★★★★☆",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Planning et gestion d'équipe",
      "logiciel1": "★★★★★",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Suivi de chantier",
      "logiciel1": "★★★★★",
      "logiciel2": "★★★★☆"
    },
    {
      "critere": "Prix (artisan seul)",
      "logiciel1": "59€/mois",
      "logiciel2": "49€/mois"
    }
  ],
  "couts3Ans": {
    "logiciel1": {
      "coutMensuel": 59,
      "coutAnnuel": 708,
      "cout3Ans": 2124,
      "calcul": "59€/mois × 36 mois"
    },
    "logiciel2": {
      "coutMensuel": 49,
      "coutAnnuel": 588,
      "cout3Ans": 1764,
      "calcul": "49€/mois × 36 mois"
    }
  },
  "pointsFortsComparaison": {
    "logiciel1": [
      "Planning intégré excellent",
      "Suivi de chantier complet",
      "Mode hors-ligne fonctionnel",
      "Gestion d'équipe"
    ],
    "logiciel2": [
      "Solution complète historique",
      "Bonne bibliothèque d'ouvrages",
      "Support français",
      "Pérennité assurée"
    ]
  },
  "pointsFaiblesComparaison": {
    "logiciel1": [
      "Bibliothèque de prix moins riche",
      "Interface un peu datée",
      "Prix plus élevé qu'Obat"
    ],
    "logiciel2": [
      "Interface datée",
      "Support parfois lent",
      "Moins moderne que les solutions récentes"
    ]
  },
  "casUsage": [
    {
      "scenario": "Electricien seul qui fait du dépannage et de petites rénovations",
      "recommandation": "logiciel1",
      "raison": "Tolteck est adapté grâce à planning intégré excellent."
    },
    {
      "scenario": "Équipe de electriciens avec 3-5 employés et besoin de gestion d'équipe",
      "recommandation": "logiciel2",
      "raison": "EBP Bâtiment offre solution complète historique."
    },
    {
      "scenario": "Artisan qui hésite entre les deux solutions",
      "recommandation": "egalite",
      "raison": "Les deux logiciels offrent des essais gratuits. Testez les deux et choisissez celui qui correspond le mieux à votre workflow."
    }
  ]
};

export const tolteck_vs_sellsy: ComparaisonData = {
  "slug1": "tolteck",
  "slug2": "sellsy",
  "nom1": "Tolteck",
  "nom2": "Sellsy",
  "logo1": "🟠",
  "logo2": "🔷",
  "seoTitle": "Tolteck vs Sellsy 2026 : Comparatif complet — Quel logiciel choisir ?",
  "seoDescription": "Comparaison détaillée Tolteck vs Sellsy basée sur documentation officielle et avis vérifiés. Prix, fonctionnalités, points forts/faibles.",
  "seoKeywords": [
    "tolteck vs sellsy",
    "comparatif tolteck sellsy",
    "tolteck ou sellsy"
  ],
  "intro": "Tolteck et Sellsy représentent deux approches différentes de la gestion d'entreprise. Voici une comparaison détaillée basée sur des sources vérifiables.",
  "verdict": {
    "gagnant": "logiciel1",
    "raison": "Tolteck remporte cette comparaison grâce à ses forces sur les critères essentiels, mais Sellsy reste excellent pour certains profils.",
    "pourQui1": "Tolteck est idéal pour équipes btp 2-10 personnes avec besoin de planning.",
    "pourQui2": "Sellsy est idéal pour entreprises avec forte activité commerciale et prospection."
  },
  "criteres": [
    {
      "nom": "Bibliothèque de prix BTP",
      "categorie": "essentiel",
      "description": "Prix des matériaux pré-remplis et mis à jour automatiquement",
      "logiciel1": {
        "note": 3,
        "justification": "Bibliothèque de prix présente mais moins spécialisée BTP selon la documentation de Tolteck.",
        "source": "https://tolteck.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 0,
        "justification": "Aucune bibliothèque de prix BTP selon la documentation officielle de Sellsy.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    },
    {
      "nom": "CRM et prospection commerciale",
      "categorie": "essentiel",
      "description": "Gestion des contacts, pipeline de vente, automatisations commerciales",
      "logiciel1": {
        "note": 3,
        "justification": "CRM basique selon la documentation. Gestion des contacts sans fonctionnalités avancées.",
        "source": "https://tolteck.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 5,
        "justification": "CRM complet documenté comme fonctionnalité phare de Sellsy. Pipeline de vente, automatisations, campagnes.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    },
    {
      "nom": "Mode hors-ligne",
      "categorie": "important",
      "description": "Capacité à travailler sans connexion internet (sous-sols, parkings, zones rurales)",
      "logiciel1": {
        "note": 4,
        "justification": "Mode hors-ligne fonctionnel selon la documentation de Tolteck.",
        "source": "https://tolteck.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 1,
        "justification": "Consultation seule en hors-ligne selon la documentation. Création nécessite une connexion.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    },
    {
      "nom": "Intégrations avec autres outils",
      "categorie": "important",
      "description": "Connexion à d'autres logiciels (comptabilité, paiement, e-commerce)",
      "logiciel1": {
        "note": 3,
        "justification": "Intégrations présentes selon la documentation. Nombre limité mais suffisant pour la plupart des besoins.",
        "source": "https://tolteck.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 4,
        "justification": "Nombreuses intégrations documentées selon le site officiel de Sellsy.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    },
    {
      "nom": "Gestion de la TVA 10% rénovation",
      "categorie": "important",
      "description": "Application automatique de la TVA réduite avec attestations",
      "logiciel1": {
        "note": 4,
        "justification": "Gère la TVA 10% selon la documentation de Tolteck.",
        "source": "https://tolteck.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "TVA 10% gérée mais configuration manuelle selon la documentation.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    },
    {
      "nom": "Simplicité de prise en main",
      "categorie": "confort",
      "description": "Temps nécessaire pour maîtriser l'outil et commencer à l'utiliser",
      "logiciel1": {
        "note": 4,
        "justification": "Interface moderne et relativement simple selon la documentation de Tolteck.",
        "source": "https://tolteck.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 4,
        "justification": "Interface moderne et relativement simple selon la documentation de Sellsy.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    },
    {
      "nom": "Planning et gestion d'équipe",
      "categorie": "important",
      "description": "Planification des interventions et affectation des techniciens",
      "logiciel1": {
        "note": 5,
        "justification": "Planning intégré documenté comme fonctionnalité phare de Tolteck. Très complet.",
        "source": "https://tolteck.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 2,
        "justification": "Planning très basique selon la documentation de Sellsy.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    },
    {
      "nom": "Suivi de chantier",
      "categorie": "important",
      "description": "Suivi d'avancement, photos, pointages, rapports de chantier",
      "logiciel1": {
        "note": 5,
        "justification": "Module chantier complet documenté sur le site officiel de Tolteck. Photos, pointages, rapports.",
        "source": "https://tolteck.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 2,
        "justification": "Suivi de chantier très basique selon la documentation de Sellsy.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    }
  ],
  "tableauRecap": [
    {
      "critere": "Bibliothèque de prix BTP",
      "logiciel1": "★★★☆☆",
      "logiciel2": "☆☆☆☆☆"
    },
    {
      "critere": "CRM et prospection commerciale",
      "logiciel1": "★★★☆☆",
      "logiciel2": "★★★★★"
    },
    {
      "critere": "Mode hors-ligne",
      "logiciel1": "★★★★☆",
      "logiciel2": "★☆☆☆☆"
    },
    {
      "critere": "Intégrations avec autres outils",
      "logiciel1": "★★★☆☆",
      "logiciel2": "★★★★☆"
    },
    {
      "critere": "Gestion de la TVA 10% rénovation",
      "logiciel1": "★★★★☆",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Simplicité de prise en main",
      "logiciel1": "★★★★☆",
      "logiciel2": "★★★★☆"
    },
    {
      "critere": "Planning et gestion d'équipe",
      "logiciel1": "★★★★★",
      "logiciel2": "★★☆☆☆"
    },
    {
      "critere": "Suivi de chantier",
      "logiciel1": "★★★★★",
      "logiciel2": "★★☆☆☆"
    },
    {
      "critere": "Prix (artisan seul)",
      "logiciel1": "59€/mois",
      "logiciel2": "45€/mois"
    }
  ],
  "couts3Ans": {
    "logiciel1": {
      "coutMensuel": 59,
      "coutAnnuel": 708,
      "cout3Ans": 2124,
      "calcul": "59€/mois × 36 mois"
    },
    "logiciel2": {
      "coutMensuel": 45,
      "coutAnnuel": 540,
      "cout3Ans": 1620,
      "calcul": "45€/mois × 36 mois"
    }
  },
  "pointsFortsComparaison": {
    "logiciel1": [
      "Planning intégré excellent",
      "Suivi de chantier complet",
      "Mode hors-ligne fonctionnel",
      "Gestion d'équipe"
    ],
    "logiciel2": [
      "CRM parmi les meilleurs du marché",
      "Emailing intégré puissant",
      "Interface moderne",
      "Automatisations avancées"
    ]
  },
  "pointsFaiblesComparaison": {
    "logiciel1": [
      "Bibliothèque de prix moins riche",
      "Interface un peu datée",
      "Prix plus élevé qu'Obat"
    ],
    "logiciel2": [
      "Pas spécialisé BTP",
      "Pas de bibliothèque de prix matériaux",
      "Prix par utilisateur"
    ]
  },
  "casUsage": [
    {
      "scenario": "Electricien seul qui fait du dépannage et de petites rénovations",
      "recommandation": "logiciel1",
      "raison": "Tolteck est adapté grâce à planning intégré excellent."
    },
    {
      "scenario": "Équipe de plombiers avec 3-5 employés et besoin de gestion d'équipe",
      "recommandation": "logiciel2",
      "raison": "Sellsy offre crm parmi les meilleurs du marché."
    },
    {
      "scenario": "Artisan qui hésite entre les deux solutions",
      "recommandation": "egalite",
      "raison": "Les deux logiciels offrent des essais gratuits. Testez les deux et choisissez celui qui correspond le mieux à votre workflow."
    }
  ]
};

export const progbat_vs_batigest: ComparaisonData = {
  "slug1": "progbat",
  "slug2": "batigest",
  "nom1": "ProGBat",
  "nom2": "Batigest (Sage)",
  "logo1": "🟣",
  "logo2": "🔴",
  "seoTitle": "ProGBat vs Batigest (Sage) 2026 : Comparatif complet — Quel logiciel choisir ?",
  "seoDescription": "Comparaison détaillée ProGBat vs Batigest (Sage) basée sur documentation officielle et avis vérifiés. Prix, fonctionnalités, points forts/faibles.",
  "seoKeywords": [
    "progbat vs batigest",
    "comparatif progbat batigest",
    "progbat ou batigest"
  ],
  "intro": "ProGBat et Batigest (Sage) représentent deux approches différentes de la gestion d'entreprise. Voici une comparaison détaillée basée sur des sources vérifiables.",
  "verdict": {
    "gagnant": "egalite",
    "raison": "Il n'y a pas de gagnant universel entre ProGBat et Batigest (Sage). Le meilleur choix dépend de votre profil et de vos priorités.",
    "pourQui1": "ProGBat est idéal pour pme btp 5-20 salariés avec chantiers complexes.",
    "pourQui2": "Batigest (Sage) est idéal pour électriciens et entreprises établies avec besoins nfc 15-100."
  },
  "criteres": [
    {
      "nom": "Bibliothèque de prix BTP",
      "categorie": "essentiel",
      "description": "Prix des matériaux pré-remplis et mis à jour automatiquement",
      "logiciel1": {
        "note": 4,
        "justification": "Bibliothèque de prix bien fournie selon la documentation de ProGBat.",
        "source": "https://progbat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 5,
        "justification": "Bibliothèque de prix complète et mise à jour régulièrement selon la documentation officielle de Batigest (Sage).",
        "source": "https://batigest.com/fonctionnalites"
      }
    },
    {
      "nom": "CRM et prospection commerciale",
      "categorie": "essentiel",
      "description": "Gestion des contacts, pipeline de vente, automatisations commerciales",
      "logiciel1": {
        "note": 3,
        "justification": "CRM basique selon la documentation. Gestion des contacts sans fonctionnalités avancées.",
        "source": "https://progbat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "CRM basique selon la documentation. Gestion des contacts sans fonctionnalités avancées.",
        "source": "https://batigest.com/fonctionnalites"
      }
    },
    {
      "nom": "Mode hors-ligne",
      "categorie": "important",
      "description": "Capacité à travailler sans connexion internet (sous-sols, parkings, zones rurales)",
      "logiciel1": {
        "note": 5,
        "justification": "Mode hors-ligne complet documenté sur le site officiel de ProGBat. Création et consultation sans connexion.",
        "source": "https://progbat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "Mode hors-ligne partiel selon la documentation. Consultation possible, création limitée.",
        "source": "https://batigest.com/fonctionnalites"
      }
    },
    {
      "nom": "Intégrations avec autres outils",
      "categorie": "important",
      "description": "Connexion à d'autres logiciels (comptabilité, paiement, e-commerce)",
      "logiciel1": {
        "note": 3,
        "justification": "Intégrations présentes selon la documentation. Nombre limité mais suffisant pour la plupart des besoins.",
        "source": "https://progbat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "Intégrations présentes selon la documentation. Nombre limité mais suffisant pour la plupart des besoins.",
        "source": "https://batigest.com/fonctionnalites"
      }
    },
    {
      "nom": "Gestion de la TVA 10% rénovation",
      "categorie": "important",
      "description": "Application automatique de la TVA réduite avec attestations",
      "logiciel1": {
        "note": 5,
        "justification": "Gestion native de la TVA 10% documentée sur le site officiel de ProGBat. Conforme aux obligations légales.",
        "source": "https://progbat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 5,
        "justification": "Gestion native de la TVA 10% documentée sur le site officiel de Batigest (Sage). Conforme aux obligations légales.",
        "source": "https://batigest.com/fonctionnalites"
      }
    },
    {
      "nom": "Simplicité de prise en main",
      "categorie": "confort",
      "description": "Temps nécessaire pour maîtriser l'outil et commencer à l'utiliser",
      "logiciel1": {
        "note": 2,
        "justification": "Interface complexe nécessitant plusieurs semaines de formation selon les avis.",
        "source": "https://progbat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 2,
        "justification": "Interface complexe nécessitant plusieurs semaines de formation selon les avis.",
        "source": "https://batigest.com/fonctionnalites"
      }
    },
    {
      "nom": "Planning et gestion d'équipe",
      "categorie": "important",
      "description": "Planification des interventions et affectation des techniciens",
      "logiciel1": {
        "note": 4,
        "justification": "Planning fonctionnel selon la documentation de ProGBat.",
        "source": "https://progbat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "Planning basique selon la documentation. Fonctionnalités limitées.",
        "source": "https://batigest.com/fonctionnalites"
      }
    },
    {
      "nom": "Suivi de chantier",
      "categorie": "important",
      "description": "Suivi d'avancement, photos, pointages, rapports de chantier",
      "logiciel1": {
        "note": 5,
        "justification": "Module chantier complet documenté sur le site officiel de ProGBat. Photos, pointages, rapports.",
        "source": "https://progbat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 5,
        "justification": "Module chantier complet documenté sur le site officiel de Batigest (Sage). Photos, pointages, rapports.",
        "source": "https://batigest.com/fonctionnalites"
      }
    }
  ],
  "tableauRecap": [
    {
      "critere": "Bibliothèque de prix BTP",
      "logiciel1": "★★★★☆",
      "logiciel2": "★★★★★"
    },
    {
      "critere": "CRM et prospection commerciale",
      "logiciel1": "★★★☆☆",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Mode hors-ligne",
      "logiciel1": "★★★★★",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Intégrations avec autres outils",
      "logiciel1": "★★★☆☆",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Gestion de la TVA 10% rénovation",
      "logiciel1": "★★★★★",
      "logiciel2": "★★★★★"
    },
    {
      "critere": "Simplicité de prise en main",
      "logiciel1": "★★☆☆☆",
      "logiciel2": "★★☆☆☆"
    },
    {
      "critere": "Planning et gestion d'équipe",
      "logiciel1": "★★★★☆",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Suivi de chantier",
      "logiciel1": "★★★★★",
      "logiciel2": "★★★★★"
    },
    {
      "critere": "Prix (artisan seul)",
      "logiciel1": "89€/mois",
      "logiciel2": "129€/mois"
    }
  ],
  "couts3Ans": {
    "logiciel1": {
      "coutMensuel": 89,
      "coutAnnuel": 1068,
      "cout3Ans": 3204,
      "calcul": "89€/mois × 36 mois"
    },
    "logiciel2": {
      "coutMensuel": 129,
      "coutAnnuel": 1548,
      "cout3Ans": 4644,
      "calcul": "129€/mois × 36 mois"
    }
  },
  "pointsFortsComparaison": {
    "logiciel1": [
      "ERP complet spécialisé BTP",
      "Compte prorata natif",
      "Mode hors-ligne excellent",
      "Situations de travaux avancées"
    ],
    "logiciel2": [
      "Bibliothèque NFC 15-100 la plus complète",
      "30+ ans d'existence",
      "Standard du marché électricien",
      "Fonctionnalités avancées"
    ]
  },
  "pointsFaiblesComparaison": {
    "logiciel1": [
      "Complexe à prendre en main",
      "Prix élevé",
      "Overkill pour artisans seuls"
    ],
    "logiciel2": [
      "Interface vieillissante",
      "Prix élevé",
      "Courbe d'apprentissage longue"
    ]
  },
  "casUsage": [
    {
      "scenario": "Macon seul qui fait du dépannage et de petites rénovations",
      "recommandation": "logiciel1",
      "raison": "ProGBat est adapté grâce à erp complet spécialisé btp."
    },
    {
      "scenario": "Équipe de electriciens avec 3-5 employés et besoin de gestion d'équipe",
      "recommandation": "logiciel2",
      "raison": "Batigest (Sage) offre bibliothèque nfc 15-100 la plus complète."
    },
    {
      "scenario": "Artisan qui hésite entre les deux solutions",
      "recommandation": "egalite",
      "raison": "Les deux logiciels offrent des essais gratuits. Testez les deux et choisissez celui qui correspond le mieux à votre workflow."
    }
  ]
};

export const progbat_vs_ebp: ComparaisonData = {
  "slug1": "progbat",
  "slug2": "ebp",
  "nom1": "ProGBat",
  "nom2": "EBP Bâtiment",
  "logo1": "🟣",
  "logo2": "🟡",
  "seoTitle": "ProGBat vs EBP Bâtiment 2026 : Comparatif complet — Quel logiciel choisir ?",
  "seoDescription": "Comparaison détaillée ProGBat vs EBP Bâtiment basée sur documentation officielle et avis vérifiés. Prix, fonctionnalités, points forts/faibles.",
  "seoKeywords": [
    "progbat vs ebp",
    "comparatif progbat ebp",
    "progbat ou ebp"
  ],
  "intro": "Choisir entre ProGBat et EBP Bâtiment dépend de vos besoins spécifiques. ProGBat est pme btp 5-20 salariés avec chantiers complexes, tandis que EBP Bâtiment est artisans établis et pme qui veulent une solution éprouvée.",
  "verdict": {
    "gagnant": "logiciel1",
    "raison": "ProGBat remporte cette comparaison grâce à ses forces sur les critères essentiels, mais EBP Bâtiment reste excellent pour certains profils.",
    "pourQui1": "ProGBat est idéal pour pme btp 5-20 salariés avec chantiers complexes.",
    "pourQui2": "EBP Bâtiment est idéal pour artisans établis et pme qui veulent une solution éprouvée."
  },
  "criteres": [
    {
      "nom": "Bibliothèque de prix BTP",
      "categorie": "essentiel",
      "description": "Prix des matériaux pré-remplis et mis à jour automatiquement",
      "logiciel1": {
        "note": 4,
        "justification": "Bibliothèque de prix bien fournie selon la documentation de ProGBat.",
        "source": "https://progbat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 4,
        "justification": "Bibliothèque de prix bien fournie selon la documentation de EBP Bâtiment.",
        "source": "https://ebp.com/fonctionnalites"
      }
    },
    {
      "nom": "CRM et prospection commerciale",
      "categorie": "essentiel",
      "description": "Gestion des contacts, pipeline de vente, automatisations commerciales",
      "logiciel1": {
        "note": 3,
        "justification": "CRM basique selon la documentation. Gestion des contacts sans fonctionnalités avancées.",
        "source": "https://progbat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "CRM basique selon la documentation. Gestion des contacts sans fonctionnalités avancées.",
        "source": "https://ebp.com/fonctionnalites"
      }
    },
    {
      "nom": "Mode hors-ligne",
      "categorie": "important",
      "description": "Capacité à travailler sans connexion internet (sous-sols, parkings, zones rurales)",
      "logiciel1": {
        "note": 5,
        "justification": "Mode hors-ligne complet documenté sur le site officiel de ProGBat. Création et consultation sans connexion.",
        "source": "https://progbat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "Mode hors-ligne partiel selon la documentation. Consultation possible, création limitée.",
        "source": "https://ebp.com/fonctionnalites"
      }
    },
    {
      "nom": "Intégrations avec autres outils",
      "categorie": "important",
      "description": "Connexion à d'autres logiciels (comptabilité, paiement, e-commerce)",
      "logiciel1": {
        "note": 3,
        "justification": "Intégrations présentes selon la documentation. Nombre limité mais suffisant pour la plupart des besoins.",
        "source": "https://progbat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "Intégrations présentes selon la documentation. Nombre limité mais suffisant pour la plupart des besoins.",
        "source": "https://ebp.com/fonctionnalites"
      }
    },
    {
      "nom": "Gestion de la TVA 10% rénovation",
      "categorie": "important",
      "description": "Application automatique de la TVA réduite avec attestations",
      "logiciel1": {
        "note": 5,
        "justification": "Gestion native de la TVA 10% documentée sur le site officiel de ProGBat. Conforme aux obligations légales.",
        "source": "https://progbat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 5,
        "justification": "Gestion native de la TVA 10% documentée sur le site officiel de EBP Bâtiment. Conforme aux obligations légales.",
        "source": "https://ebp.com/fonctionnalites"
      }
    },
    {
      "nom": "Simplicité de prise en main",
      "categorie": "confort",
      "description": "Temps nécessaire pour maîtriser l'outil et commencer à l'utiliser",
      "logiciel1": {
        "note": 2,
        "justification": "Interface complexe nécessitant plusieurs semaines de formation selon les avis.",
        "source": "https://progbat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "Interface correcte mais courbe d'apprentissage moyenne selon la documentation.",
        "source": "https://ebp.com/fonctionnalites"
      }
    },
    {
      "nom": "Planning et gestion d'équipe",
      "categorie": "important",
      "description": "Planification des interventions et affectation des techniciens",
      "logiciel1": {
        "note": 4,
        "justification": "Planning fonctionnel selon la documentation de ProGBat.",
        "source": "https://progbat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "Planning basique selon la documentation. Fonctionnalités limitées.",
        "source": "https://ebp.com/fonctionnalites"
      }
    },
    {
      "nom": "Suivi de chantier",
      "categorie": "important",
      "description": "Suivi d'avancement, photos, pointages, rapports de chantier",
      "logiciel1": {
        "note": 5,
        "justification": "Module chantier complet documenté sur le site officiel de ProGBat. Photos, pointages, rapports.",
        "source": "https://progbat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 4,
        "justification": "Suivi de chantier fonctionnel selon la documentation de EBP Bâtiment.",
        "source": "https://ebp.com/fonctionnalites"
      }
    }
  ],
  "tableauRecap": [
    {
      "critere": "Bibliothèque de prix BTP",
      "logiciel1": "★★★★☆",
      "logiciel2": "★★★★☆"
    },
    {
      "critere": "CRM et prospection commerciale",
      "logiciel1": "★★★☆☆",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Mode hors-ligne",
      "logiciel1": "★★★★★",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Intégrations avec autres outils",
      "logiciel1": "★★★☆☆",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Gestion de la TVA 10% rénovation",
      "logiciel1": "★★★★★",
      "logiciel2": "★★★★★"
    },
    {
      "critere": "Simplicité de prise en main",
      "logiciel1": "★★☆☆☆",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Planning et gestion d'équipe",
      "logiciel1": "★★★★☆",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Suivi de chantier",
      "logiciel1": "★★★★★",
      "logiciel2": "★★★★☆"
    },
    {
      "critere": "Prix (artisan seul)",
      "logiciel1": "89€/mois",
      "logiciel2": "49€/mois"
    }
  ],
  "couts3Ans": {
    "logiciel1": {
      "coutMensuel": 89,
      "coutAnnuel": 1068,
      "cout3Ans": 3204,
      "calcul": "89€/mois × 36 mois"
    },
    "logiciel2": {
      "coutMensuel": 49,
      "coutAnnuel": 588,
      "cout3Ans": 1764,
      "calcul": "49€/mois × 36 mois"
    }
  },
  "pointsFortsComparaison": {
    "logiciel1": [
      "ERP complet spécialisé BTP",
      "Compte prorata natif",
      "Mode hors-ligne excellent",
      "Situations de travaux avancées"
    ],
    "logiciel2": [
      "Solution complète historique",
      "Bonne bibliothèque d'ouvrages",
      "Support français",
      "Pérennité assurée"
    ]
  },
  "pointsFaiblesComparaison": {
    "logiciel1": [
      "Complexe à prendre en main",
      "Prix élevé",
      "Overkill pour artisans seuls"
    ],
    "logiciel2": [
      "Interface datée",
      "Support parfois lent",
      "Moins moderne que les solutions récentes"
    ]
  },
  "casUsage": [
    {
      "scenario": "Macon seul qui fait du dépannage et de petites rénovations",
      "recommandation": "logiciel1",
      "raison": "ProGBat est adapté grâce à erp complet spécialisé btp."
    },
    {
      "scenario": "Équipe de electriciens avec 3-5 employés et besoin de gestion d'équipe",
      "recommandation": "logiciel2",
      "raison": "EBP Bâtiment offre solution complète historique."
    },
    {
      "scenario": "Artisan qui hésite entre les deux solutions",
      "recommandation": "egalite",
      "raison": "Les deux logiciels offrent des essais gratuits. Testez les deux et choisissez celui qui correspond le mieux à votre workflow."
    }
  ]
};

export const progbat_vs_sellsy: ComparaisonData = {
  "slug1": "progbat",
  "slug2": "sellsy",
  "nom1": "ProGBat",
  "nom2": "Sellsy",
  "logo1": "🟣",
  "logo2": "🔷",
  "seoTitle": "ProGBat vs Sellsy 2026 : Comparatif complet — Quel logiciel choisir ?",
  "seoDescription": "Comparaison détaillée ProGBat vs Sellsy basée sur documentation officielle et avis vérifiés. Prix, fonctionnalités, points forts/faibles.",
  "seoKeywords": [
    "progbat vs sellsy",
    "comparatif progbat sellsy",
    "progbat ou sellsy"
  ],
  "intro": "Choisir entre ProGBat et Sellsy dépend de vos besoins spécifiques. ProGBat est pme btp 5-20 salariés avec chantiers complexes, tandis que Sellsy est entreprises avec forte activité commerciale et prospection.",
  "verdict": {
    "gagnant": "logiciel1",
    "raison": "ProGBat remporte cette comparaison grâce à ses forces sur les critères essentiels, mais Sellsy reste excellent pour certains profils.",
    "pourQui1": "ProGBat est idéal pour pme btp 5-20 salariés avec chantiers complexes.",
    "pourQui2": "Sellsy est idéal pour entreprises avec forte activité commerciale et prospection."
  },
  "criteres": [
    {
      "nom": "Bibliothèque de prix BTP",
      "categorie": "essentiel",
      "description": "Prix des matériaux pré-remplis et mis à jour automatiquement",
      "logiciel1": {
        "note": 4,
        "justification": "Bibliothèque de prix bien fournie selon la documentation de ProGBat.",
        "source": "https://progbat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 0,
        "justification": "Aucune bibliothèque de prix BTP selon la documentation officielle de Sellsy.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    },
    {
      "nom": "CRM et prospection commerciale",
      "categorie": "essentiel",
      "description": "Gestion des contacts, pipeline de vente, automatisations commerciales",
      "logiciel1": {
        "note": 3,
        "justification": "CRM basique selon la documentation. Gestion des contacts sans fonctionnalités avancées.",
        "source": "https://progbat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 5,
        "justification": "CRM complet documenté comme fonctionnalité phare de Sellsy. Pipeline de vente, automatisations, campagnes.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    },
    {
      "nom": "Mode hors-ligne",
      "categorie": "important",
      "description": "Capacité à travailler sans connexion internet (sous-sols, parkings, zones rurales)",
      "logiciel1": {
        "note": 5,
        "justification": "Mode hors-ligne complet documenté sur le site officiel de ProGBat. Création et consultation sans connexion.",
        "source": "https://progbat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 1,
        "justification": "Consultation seule en hors-ligne selon la documentation. Création nécessite une connexion.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    },
    {
      "nom": "Intégrations avec autres outils",
      "categorie": "important",
      "description": "Connexion à d'autres logiciels (comptabilité, paiement, e-commerce)",
      "logiciel1": {
        "note": 3,
        "justification": "Intégrations présentes selon la documentation. Nombre limité mais suffisant pour la plupart des besoins.",
        "source": "https://progbat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 4,
        "justification": "Nombreuses intégrations documentées selon le site officiel de Sellsy.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    },
    {
      "nom": "Gestion de la TVA 10% rénovation",
      "categorie": "important",
      "description": "Application automatique de la TVA réduite avec attestations",
      "logiciel1": {
        "note": 5,
        "justification": "Gestion native de la TVA 10% documentée sur le site officiel de ProGBat. Conforme aux obligations légales.",
        "source": "https://progbat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "TVA 10% gérée mais configuration manuelle selon la documentation.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    },
    {
      "nom": "Simplicité de prise en main",
      "categorie": "confort",
      "description": "Temps nécessaire pour maîtriser l'outil et commencer à l'utiliser",
      "logiciel1": {
        "note": 2,
        "justification": "Interface complexe nécessitant plusieurs semaines de formation selon les avis.",
        "source": "https://progbat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 4,
        "justification": "Interface moderne et relativement simple selon la documentation de Sellsy.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    },
    {
      "nom": "Planning et gestion d'équipe",
      "categorie": "important",
      "description": "Planification des interventions et affectation des techniciens",
      "logiciel1": {
        "note": 4,
        "justification": "Planning fonctionnel selon la documentation de ProGBat.",
        "source": "https://progbat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 2,
        "justification": "Planning très basique selon la documentation de Sellsy.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    },
    {
      "nom": "Suivi de chantier",
      "categorie": "important",
      "description": "Suivi d'avancement, photos, pointages, rapports de chantier",
      "logiciel1": {
        "note": 5,
        "justification": "Module chantier complet documenté sur le site officiel de ProGBat. Photos, pointages, rapports.",
        "source": "https://progbat.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 2,
        "justification": "Suivi de chantier très basique selon la documentation de Sellsy.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    }
  ],
  "tableauRecap": [
    {
      "critere": "Bibliothèque de prix BTP",
      "logiciel1": "★★★★☆",
      "logiciel2": "☆☆☆☆☆"
    },
    {
      "critere": "CRM et prospection commerciale",
      "logiciel1": "★★★☆☆",
      "logiciel2": "★★★★★"
    },
    {
      "critere": "Mode hors-ligne",
      "logiciel1": "★★★★★",
      "logiciel2": "★☆☆☆☆"
    },
    {
      "critere": "Intégrations avec autres outils",
      "logiciel1": "★★★☆☆",
      "logiciel2": "★★★★☆"
    },
    {
      "critere": "Gestion de la TVA 10% rénovation",
      "logiciel1": "★★★★★",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Simplicité de prise en main",
      "logiciel1": "★★☆☆☆",
      "logiciel2": "★★★★☆"
    },
    {
      "critere": "Planning et gestion d'équipe",
      "logiciel1": "★★★★☆",
      "logiciel2": "★★☆☆☆"
    },
    {
      "critere": "Suivi de chantier",
      "logiciel1": "★★★★★",
      "logiciel2": "★★☆☆☆"
    },
    {
      "critere": "Prix (artisan seul)",
      "logiciel1": "89€/mois",
      "logiciel2": "45€/mois"
    }
  ],
  "couts3Ans": {
    "logiciel1": {
      "coutMensuel": 89,
      "coutAnnuel": 1068,
      "cout3Ans": 3204,
      "calcul": "89€/mois × 36 mois"
    },
    "logiciel2": {
      "coutMensuel": 45,
      "coutAnnuel": 540,
      "cout3Ans": 1620,
      "calcul": "45€/mois × 36 mois"
    }
  },
  "pointsFortsComparaison": {
    "logiciel1": [
      "ERP complet spécialisé BTP",
      "Compte prorata natif",
      "Mode hors-ligne excellent",
      "Situations de travaux avancées"
    ],
    "logiciel2": [
      "CRM parmi les meilleurs du marché",
      "Emailing intégré puissant",
      "Interface moderne",
      "Automatisations avancées"
    ]
  },
  "pointsFaiblesComparaison": {
    "logiciel1": [
      "Complexe à prendre en main",
      "Prix élevé",
      "Overkill pour artisans seuls"
    ],
    "logiciel2": [
      "Pas spécialisé BTP",
      "Pas de bibliothèque de prix matériaux",
      "Prix par utilisateur"
    ]
  },
  "casUsage": [
    {
      "scenario": "Macon seul qui fait du dépannage et de petites rénovations",
      "recommandation": "logiciel1",
      "raison": "ProGBat est adapté grâce à erp complet spécialisé btp."
    },
    {
      "scenario": "Équipe de plombiers avec 3-5 employés et besoin de gestion d'équipe",
      "recommandation": "logiciel2",
      "raison": "Sellsy offre crm parmi les meilleurs du marché."
    },
    {
      "scenario": "Artisan qui hésite entre les deux solutions",
      "recommandation": "egalite",
      "raison": "Les deux logiciels offrent des essais gratuits. Testez les deux et choisissez celui qui correspond le mieux à votre workflow."
    }
  ]
};

export const batigest_vs_ebp: ComparaisonData = {
  "slug1": "batigest",
  "slug2": "ebp",
  "nom1": "Batigest (Sage)",
  "nom2": "EBP Bâtiment",
  "logo1": "🔴",
  "logo2": "🟡",
  "seoTitle": "Batigest (Sage) vs EBP Bâtiment 2026 : Comparatif complet — Quel logiciel choisir ?",
  "seoDescription": "Comparaison détaillée Batigest (Sage) vs EBP Bâtiment basée sur documentation officielle et avis vérifiés. Prix, fonctionnalités, points forts/faibles.",
  "seoKeywords": [
    "batigest vs ebp",
    "comparatif batigest ebp",
    "batigest ou ebp"
  ],
  "intro": "Choisir entre Batigest (Sage) et EBP Bâtiment dépend de vos besoins spécifiques. Batigest (Sage) est électriciens et entreprises établies avec besoins nfc 15-100, tandis que EBP Bâtiment est artisans établis et pme qui veulent une solution éprouvée.",
  "verdict": {
    "gagnant": "egalite",
    "raison": "Il n'y a pas de gagnant universel entre Batigest (Sage) et EBP Bâtiment. Le meilleur choix dépend de votre profil et de vos priorités.",
    "pourQui1": "Batigest (Sage) est idéal pour électriciens et entreprises établies avec besoins nfc 15-100.",
    "pourQui2": "EBP Bâtiment est idéal pour artisans établis et pme qui veulent une solution éprouvée."
  },
  "criteres": [
    {
      "nom": "Bibliothèque de prix BTP",
      "categorie": "essentiel",
      "description": "Prix des matériaux pré-remplis et mis à jour automatiquement",
      "logiciel1": {
        "note": 5,
        "justification": "Bibliothèque de prix complète et mise à jour régulièrement selon la documentation officielle de Batigest (Sage).",
        "source": "https://batigest.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 4,
        "justification": "Bibliothèque de prix bien fournie selon la documentation de EBP Bâtiment.",
        "source": "https://ebp.com/fonctionnalites"
      }
    },
    {
      "nom": "CRM et prospection commerciale",
      "categorie": "essentiel",
      "description": "Gestion des contacts, pipeline de vente, automatisations commerciales",
      "logiciel1": {
        "note": 3,
        "justification": "CRM basique selon la documentation. Gestion des contacts sans fonctionnalités avancées.",
        "source": "https://batigest.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "CRM basique selon la documentation. Gestion des contacts sans fonctionnalités avancées.",
        "source": "https://ebp.com/fonctionnalites"
      }
    },
    {
      "nom": "Mode hors-ligne",
      "categorie": "important",
      "description": "Capacité à travailler sans connexion internet (sous-sols, parkings, zones rurales)",
      "logiciel1": {
        "note": 3,
        "justification": "Mode hors-ligne partiel selon la documentation. Consultation possible, création limitée.",
        "source": "https://batigest.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "Mode hors-ligne partiel selon la documentation. Consultation possible, création limitée.",
        "source": "https://ebp.com/fonctionnalites"
      }
    },
    {
      "nom": "Intégrations avec autres outils",
      "categorie": "important",
      "description": "Connexion à d'autres logiciels (comptabilité, paiement, e-commerce)",
      "logiciel1": {
        "note": 3,
        "justification": "Intégrations présentes selon la documentation. Nombre limité mais suffisant pour la plupart des besoins.",
        "source": "https://batigest.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "Intégrations présentes selon la documentation. Nombre limité mais suffisant pour la plupart des besoins.",
        "source": "https://ebp.com/fonctionnalites"
      }
    },
    {
      "nom": "Gestion de la TVA 10% rénovation",
      "categorie": "important",
      "description": "Application automatique de la TVA réduite avec attestations",
      "logiciel1": {
        "note": 5,
        "justification": "Gestion native de la TVA 10% documentée sur le site officiel de Batigest (Sage). Conforme aux obligations légales.",
        "source": "https://batigest.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 5,
        "justification": "Gestion native de la TVA 10% documentée sur le site officiel de EBP Bâtiment. Conforme aux obligations légales.",
        "source": "https://ebp.com/fonctionnalites"
      }
    },
    {
      "nom": "Simplicité de prise en main",
      "categorie": "confort",
      "description": "Temps nécessaire pour maîtriser l'outil et commencer à l'utiliser",
      "logiciel1": {
        "note": 2,
        "justification": "Interface complexe nécessitant plusieurs semaines de formation selon les avis.",
        "source": "https://batigest.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "Interface correcte mais courbe d'apprentissage moyenne selon la documentation.",
        "source": "https://ebp.com/fonctionnalites"
      }
    },
    {
      "nom": "Planning et gestion d'équipe",
      "categorie": "important",
      "description": "Planification des interventions et affectation des techniciens",
      "logiciel1": {
        "note": 3,
        "justification": "Planning basique selon la documentation. Fonctionnalités limitées.",
        "source": "https://batigest.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "Planning basique selon la documentation. Fonctionnalités limitées.",
        "source": "https://ebp.com/fonctionnalites"
      }
    },
    {
      "nom": "Suivi de chantier",
      "categorie": "important",
      "description": "Suivi d'avancement, photos, pointages, rapports de chantier",
      "logiciel1": {
        "note": 5,
        "justification": "Module chantier complet documenté sur le site officiel de Batigest (Sage). Photos, pointages, rapports.",
        "source": "https://batigest.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 4,
        "justification": "Suivi de chantier fonctionnel selon la documentation de EBP Bâtiment.",
        "source": "https://ebp.com/fonctionnalites"
      }
    }
  ],
  "tableauRecap": [
    {
      "critere": "Bibliothèque de prix BTP",
      "logiciel1": "★★★★★",
      "logiciel2": "★★★★☆"
    },
    {
      "critere": "CRM et prospection commerciale",
      "logiciel1": "★★★☆☆",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Mode hors-ligne",
      "logiciel1": "★★★☆☆",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Intégrations avec autres outils",
      "logiciel1": "★★★☆☆",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Gestion de la TVA 10% rénovation",
      "logiciel1": "★★★★★",
      "logiciel2": "★★★★★"
    },
    {
      "critere": "Simplicité de prise en main",
      "logiciel1": "★★☆☆☆",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Planning et gestion d'équipe",
      "logiciel1": "★★★☆☆",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Suivi de chantier",
      "logiciel1": "★★★★★",
      "logiciel2": "★★★★☆"
    },
    {
      "critere": "Prix (artisan seul)",
      "logiciel1": "129€/mois",
      "logiciel2": "49€/mois"
    }
  ],
  "couts3Ans": {
    "logiciel1": {
      "coutMensuel": 129,
      "coutAnnuel": 1548,
      "cout3Ans": 4644,
      "calcul": "129€/mois × 36 mois"
    },
    "logiciel2": {
      "coutMensuel": 49,
      "coutAnnuel": 588,
      "cout3Ans": 1764,
      "calcul": "49€/mois × 36 mois"
    }
  },
  "pointsFortsComparaison": {
    "logiciel1": [
      "Bibliothèque NFC 15-100 la plus complète",
      "30+ ans d'existence",
      "Standard du marché électricien",
      "Fonctionnalités avancées"
    ],
    "logiciel2": [
      "Solution complète historique",
      "Bonne bibliothèque d'ouvrages",
      "Support français",
      "Pérennité assurée"
    ]
  },
  "pointsFaiblesComparaison": {
    "logiciel1": [
      "Interface vieillissante",
      "Prix élevé",
      "Courbe d'apprentissage longue"
    ],
    "logiciel2": [
      "Interface datée",
      "Support parfois lent",
      "Moins moderne que les solutions récentes"
    ]
  },
  "casUsage": [
    {
      "scenario": "Electricien seul qui fait du dépannage et de petites rénovations",
      "recommandation": "logiciel1",
      "raison": "Batigest (Sage) est adapté grâce à bibliothèque nfc 15-100 la plus complète."
    },
    {
      "scenario": "Équipe de electriciens avec 3-5 employés et besoin de gestion d'équipe",
      "recommandation": "logiciel2",
      "raison": "EBP Bâtiment offre solution complète historique."
    },
    {
      "scenario": "Artisan qui hésite entre les deux solutions",
      "recommandation": "egalite",
      "raison": "Les deux logiciels offrent des essais gratuits. Testez les deux et choisissez celui qui correspond le mieux à votre workflow."
    }
  ]
};

export const batigest_vs_sellsy: ComparaisonData = {
  "slug1": "batigest",
  "slug2": "sellsy",
  "nom1": "Batigest (Sage)",
  "nom2": "Sellsy",
  "logo1": "🔴",
  "logo2": "🔷",
  "seoTitle": "Batigest (Sage) vs Sellsy 2026 : Comparatif complet — Quel logiciel choisir ?",
  "seoDescription": "Comparaison détaillée Batigest (Sage) vs Sellsy basée sur documentation officielle et avis vérifiés. Prix, fonctionnalités, points forts/faibles.",
  "seoKeywords": [
    "batigest vs sellsy",
    "comparatif batigest sellsy",
    "batigest ou sellsy"
  ],
  "intro": "Batigest (Sage) et Sellsy sont deux logiciels de gestion français populaires, mais ils s'adressent à des profils différents. Cette comparaison est basée sur la documentation officielle et les avis vérifiés.",
  "verdict": {
    "gagnant": "logiciel1",
    "raison": "Batigest (Sage) remporte cette comparaison grâce à ses forces sur les critères essentiels, mais Sellsy reste excellent pour certains profils.",
    "pourQui1": "Batigest (Sage) est idéal pour électriciens et entreprises établies avec besoins nfc 15-100.",
    "pourQui2": "Sellsy est idéal pour entreprises avec forte activité commerciale et prospection."
  },
  "criteres": [
    {
      "nom": "Bibliothèque de prix BTP",
      "categorie": "essentiel",
      "description": "Prix des matériaux pré-remplis et mis à jour automatiquement",
      "logiciel1": {
        "note": 5,
        "justification": "Bibliothèque de prix complète et mise à jour régulièrement selon la documentation officielle de Batigest (Sage).",
        "source": "https://batigest.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 0,
        "justification": "Aucune bibliothèque de prix BTP selon la documentation officielle de Sellsy.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    },
    {
      "nom": "CRM et prospection commerciale",
      "categorie": "essentiel",
      "description": "Gestion des contacts, pipeline de vente, automatisations commerciales",
      "logiciel1": {
        "note": 3,
        "justification": "CRM basique selon la documentation. Gestion des contacts sans fonctionnalités avancées.",
        "source": "https://batigest.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 5,
        "justification": "CRM complet documenté comme fonctionnalité phare de Sellsy. Pipeline de vente, automatisations, campagnes.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    },
    {
      "nom": "Mode hors-ligne",
      "categorie": "important",
      "description": "Capacité à travailler sans connexion internet (sous-sols, parkings, zones rurales)",
      "logiciel1": {
        "note": 3,
        "justification": "Mode hors-ligne partiel selon la documentation. Consultation possible, création limitée.",
        "source": "https://batigest.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 1,
        "justification": "Consultation seule en hors-ligne selon la documentation. Création nécessite une connexion.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    },
    {
      "nom": "Intégrations avec autres outils",
      "categorie": "important",
      "description": "Connexion à d'autres logiciels (comptabilité, paiement, e-commerce)",
      "logiciel1": {
        "note": 3,
        "justification": "Intégrations présentes selon la documentation. Nombre limité mais suffisant pour la plupart des besoins.",
        "source": "https://batigest.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 4,
        "justification": "Nombreuses intégrations documentées selon le site officiel de Sellsy.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    },
    {
      "nom": "Gestion de la TVA 10% rénovation",
      "categorie": "important",
      "description": "Application automatique de la TVA réduite avec attestations",
      "logiciel1": {
        "note": 5,
        "justification": "Gestion native de la TVA 10% documentée sur le site officiel de Batigest (Sage). Conforme aux obligations légales.",
        "source": "https://batigest.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "TVA 10% gérée mais configuration manuelle selon la documentation.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    },
    {
      "nom": "Simplicité de prise en main",
      "categorie": "confort",
      "description": "Temps nécessaire pour maîtriser l'outil et commencer à l'utiliser",
      "logiciel1": {
        "note": 2,
        "justification": "Interface complexe nécessitant plusieurs semaines de formation selon les avis.",
        "source": "https://batigest.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 4,
        "justification": "Interface moderne et relativement simple selon la documentation de Sellsy.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    },
    {
      "nom": "Planning et gestion d'équipe",
      "categorie": "important",
      "description": "Planification des interventions et affectation des techniciens",
      "logiciel1": {
        "note": 3,
        "justification": "Planning basique selon la documentation. Fonctionnalités limitées.",
        "source": "https://batigest.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 2,
        "justification": "Planning très basique selon la documentation de Sellsy.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    },
    {
      "nom": "Suivi de chantier",
      "categorie": "important",
      "description": "Suivi d'avancement, photos, pointages, rapports de chantier",
      "logiciel1": {
        "note": 5,
        "justification": "Module chantier complet documenté sur le site officiel de Batigest (Sage). Photos, pointages, rapports.",
        "source": "https://batigest.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 2,
        "justification": "Suivi de chantier très basique selon la documentation de Sellsy.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    }
  ],
  "tableauRecap": [
    {
      "critere": "Bibliothèque de prix BTP",
      "logiciel1": "★★★★★",
      "logiciel2": "☆☆☆☆☆"
    },
    {
      "critere": "CRM et prospection commerciale",
      "logiciel1": "★★★☆☆",
      "logiciel2": "★★★★★"
    },
    {
      "critere": "Mode hors-ligne",
      "logiciel1": "★★★☆☆",
      "logiciel2": "★☆☆☆☆"
    },
    {
      "critere": "Intégrations avec autres outils",
      "logiciel1": "★★★☆☆",
      "logiciel2": "★★★★☆"
    },
    {
      "critere": "Gestion de la TVA 10% rénovation",
      "logiciel1": "★★★★★",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Simplicité de prise en main",
      "logiciel1": "★★☆☆☆",
      "logiciel2": "★★★★☆"
    },
    {
      "critere": "Planning et gestion d'équipe",
      "logiciel1": "★★★☆☆",
      "logiciel2": "★★☆☆☆"
    },
    {
      "critere": "Suivi de chantier",
      "logiciel1": "★★★★★",
      "logiciel2": "★★☆☆☆"
    },
    {
      "critere": "Prix (artisan seul)",
      "logiciel1": "129€/mois",
      "logiciel2": "45€/mois"
    }
  ],
  "couts3Ans": {
    "logiciel1": {
      "coutMensuel": 129,
      "coutAnnuel": 1548,
      "cout3Ans": 4644,
      "calcul": "129€/mois × 36 mois"
    },
    "logiciel2": {
      "coutMensuel": 45,
      "coutAnnuel": 540,
      "cout3Ans": 1620,
      "calcul": "45€/mois × 36 mois"
    }
  },
  "pointsFortsComparaison": {
    "logiciel1": [
      "Bibliothèque NFC 15-100 la plus complète",
      "30+ ans d'existence",
      "Standard du marché électricien",
      "Fonctionnalités avancées"
    ],
    "logiciel2": [
      "CRM parmi les meilleurs du marché",
      "Emailing intégré puissant",
      "Interface moderne",
      "Automatisations avancées"
    ]
  },
  "pointsFaiblesComparaison": {
    "logiciel1": [
      "Interface vieillissante",
      "Prix élevé",
      "Courbe d'apprentissage longue"
    ],
    "logiciel2": [
      "Pas spécialisé BTP",
      "Pas de bibliothèque de prix matériaux",
      "Prix par utilisateur"
    ]
  },
  "casUsage": [
    {
      "scenario": "Electricien seul qui fait du dépannage et de petites rénovations",
      "recommandation": "logiciel1",
      "raison": "Batigest (Sage) est adapté grâce à bibliothèque nfc 15-100 la plus complète."
    },
    {
      "scenario": "Équipe de plombiers avec 3-5 employés et besoin de gestion d'équipe",
      "recommandation": "logiciel2",
      "raison": "Sellsy offre crm parmi les meilleurs du marché."
    },
    {
      "scenario": "Artisan qui hésite entre les deux solutions",
      "recommandation": "egalite",
      "raison": "Les deux logiciels offrent des essais gratuits. Testez les deux et choisissez celui qui correspond le mieux à votre workflow."
    }
  ]
};

export const ebp_vs_sellsy: ComparaisonData = {
  "slug1": "ebp",
  "slug2": "sellsy",
  "nom1": "EBP Bâtiment",
  "nom2": "Sellsy",
  "logo1": "🟡",
  "logo2": "🔷",
  "seoTitle": "EBP Bâtiment vs Sellsy 2026 : Comparatif complet — Quel logiciel choisir ?",
  "seoDescription": "Comparaison détaillée EBP Bâtiment vs Sellsy basée sur documentation officielle et avis vérifiés. Prix, fonctionnalités, points forts/faibles.",
  "seoKeywords": [
    "ebp vs sellsy",
    "comparatif ebp sellsy",
    "ebp ou sellsy"
  ],
  "intro": "EBP Bâtiment et Sellsy sont deux logiciels de gestion français populaires, mais ils s'adressent à des profils différents. Cette comparaison est basée sur la documentation officielle et les avis vérifiés.",
  "verdict": {
    "gagnant": "logiciel1",
    "raison": "EBP Bâtiment remporte cette comparaison grâce à ses forces sur les critères essentiels, mais Sellsy reste excellent pour certains profils.",
    "pourQui1": "EBP Bâtiment est idéal pour artisans établis et pme qui veulent une solution éprouvée.",
    "pourQui2": "Sellsy est idéal pour entreprises avec forte activité commerciale et prospection."
  },
  "criteres": [
    {
      "nom": "Bibliothèque de prix BTP",
      "categorie": "essentiel",
      "description": "Prix des matériaux pré-remplis et mis à jour automatiquement",
      "logiciel1": {
        "note": 4,
        "justification": "Bibliothèque de prix bien fournie selon la documentation de EBP Bâtiment.",
        "source": "https://ebp.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 0,
        "justification": "Aucune bibliothèque de prix BTP selon la documentation officielle de Sellsy.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    },
    {
      "nom": "CRM et prospection commerciale",
      "categorie": "essentiel",
      "description": "Gestion des contacts, pipeline de vente, automatisations commerciales",
      "logiciel1": {
        "note": 3,
        "justification": "CRM basique selon la documentation. Gestion des contacts sans fonctionnalités avancées.",
        "source": "https://ebp.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 5,
        "justification": "CRM complet documenté comme fonctionnalité phare de Sellsy. Pipeline de vente, automatisations, campagnes.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    },
    {
      "nom": "Mode hors-ligne",
      "categorie": "important",
      "description": "Capacité à travailler sans connexion internet (sous-sols, parkings, zones rurales)",
      "logiciel1": {
        "note": 3,
        "justification": "Mode hors-ligne partiel selon la documentation. Consultation possible, création limitée.",
        "source": "https://ebp.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 1,
        "justification": "Consultation seule en hors-ligne selon la documentation. Création nécessite une connexion.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    },
    {
      "nom": "Intégrations avec autres outils",
      "categorie": "important",
      "description": "Connexion à d'autres logiciels (comptabilité, paiement, e-commerce)",
      "logiciel1": {
        "note": 3,
        "justification": "Intégrations présentes selon la documentation. Nombre limité mais suffisant pour la plupart des besoins.",
        "source": "https://ebp.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 4,
        "justification": "Nombreuses intégrations documentées selon le site officiel de Sellsy.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    },
    {
      "nom": "Gestion de la TVA 10% rénovation",
      "categorie": "important",
      "description": "Application automatique de la TVA réduite avec attestations",
      "logiciel1": {
        "note": 5,
        "justification": "Gestion native de la TVA 10% documentée sur le site officiel de EBP Bâtiment. Conforme aux obligations légales.",
        "source": "https://ebp.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 3,
        "justification": "TVA 10% gérée mais configuration manuelle selon la documentation.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    },
    {
      "nom": "Simplicité de prise en main",
      "categorie": "confort",
      "description": "Temps nécessaire pour maîtriser l'outil et commencer à l'utiliser",
      "logiciel1": {
        "note": 3,
        "justification": "Interface correcte mais courbe d'apprentissage moyenne selon la documentation.",
        "source": "https://ebp.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 4,
        "justification": "Interface moderne et relativement simple selon la documentation de Sellsy.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    },
    {
      "nom": "Planning et gestion d'équipe",
      "categorie": "important",
      "description": "Planification des interventions et affectation des techniciens",
      "logiciel1": {
        "note": 3,
        "justification": "Planning basique selon la documentation. Fonctionnalités limitées.",
        "source": "https://ebp.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 2,
        "justification": "Planning très basique selon la documentation de Sellsy.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    },
    {
      "nom": "Suivi de chantier",
      "categorie": "important",
      "description": "Suivi d'avancement, photos, pointages, rapports de chantier",
      "logiciel1": {
        "note": 4,
        "justification": "Suivi de chantier fonctionnel selon la documentation de EBP Bâtiment.",
        "source": "https://ebp.com/fonctionnalites"
      },
      "logiciel2": {
        "note": 2,
        "justification": "Suivi de chantier très basique selon la documentation de Sellsy.",
        "source": "https://sellsy.com/fonctionnalites"
      }
    }
  ],
  "tableauRecap": [
    {
      "critere": "Bibliothèque de prix BTP",
      "logiciel1": "★★★★☆",
      "logiciel2": "☆☆☆☆☆"
    },
    {
      "critere": "CRM et prospection commerciale",
      "logiciel1": "★★★☆☆",
      "logiciel2": "★★★★★"
    },
    {
      "critere": "Mode hors-ligne",
      "logiciel1": "★★★☆☆",
      "logiciel2": "★☆☆☆☆"
    },
    {
      "critere": "Intégrations avec autres outils",
      "logiciel1": "★★★☆☆",
      "logiciel2": "★★★★☆"
    },
    {
      "critere": "Gestion de la TVA 10% rénovation",
      "logiciel1": "★★★★★",
      "logiciel2": "★★★☆☆"
    },
    {
      "critere": "Simplicité de prise en main",
      "logiciel1": "★★★☆☆",
      "logiciel2": "★★★★☆"
    },
    {
      "critere": "Planning et gestion d'équipe",
      "logiciel1": "★★★☆☆",
      "logiciel2": "★★☆☆☆"
    },
    {
      "critere": "Suivi de chantier",
      "logiciel1": "★★★★☆",
      "logiciel2": "★★☆☆☆"
    },
    {
      "critere": "Prix (artisan seul)",
      "logiciel1": "49€/mois",
      "logiciel2": "45€/mois"
    }
  ],
  "couts3Ans": {
    "logiciel1": {
      "coutMensuel": 49,
      "coutAnnuel": 588,
      "cout3Ans": 1764,
      "calcul": "49€/mois × 36 mois"
    },
    "logiciel2": {
      "coutMensuel": 45,
      "coutAnnuel": 540,
      "cout3Ans": 1620,
      "calcul": "45€/mois × 36 mois"
    }
  },
  "pointsFortsComparaison": {
    "logiciel1": [
      "Solution complète historique",
      "Bonne bibliothèque d'ouvrages",
      "Support français",
      "Pérennité assurée"
    ],
    "logiciel2": [
      "CRM parmi les meilleurs du marché",
      "Emailing intégré puissant",
      "Interface moderne",
      "Automatisations avancées"
    ]
  },
  "pointsFaiblesComparaison": {
    "logiciel1": [
      "Interface datée",
      "Support parfois lent",
      "Moins moderne que les solutions récentes"
    ],
    "logiciel2": [
      "Pas spécialisé BTP",
      "Pas de bibliothèque de prix matériaux",
      "Prix par utilisateur"
    ]
  },
  "casUsage": [
    {
      "scenario": "Electricien seul qui fait du dépannage et de petites rénovations",
      "recommandation": "logiciel1",
      "raison": "EBP Bâtiment est adapté grâce à solution complète historique."
    },
    {
      "scenario": "Équipe de plombiers avec 3-5 employés et besoin de gestion d'équipe",
      "recommandation": "logiciel2",
      "raison": "Sellsy offre crm parmi les meilleurs du marché."
    },
    {
      "scenario": "Artisan qui hésite entre les deux solutions",
      "recommandation": "egalite",
      "raison": "Les deux logiciels offrent des essais gratuits. Testez les deux et choisissez celui qui correspond le mieux à votre workflow."
    }
  ]
};

export const comparaisons: Record<string, ComparaisonData> = {
  'obat-vs-axonaut': obat_vs_axonaut,
  'obat-vs-tolteck': obat_vs_tolteck,
  'obat-vs-progbat': obat_vs_progbat,
  'obat-vs-batigest': obat_vs_batigest,
  'obat-vs-ebp': obat_vs_ebp,
  'obat-vs-sellsy': obat_vs_sellsy,
  'axonaut-vs-tolteck': axonaut_vs_tolteck,
  'axonaut-vs-progbat': axonaut_vs_progbat,
  'axonaut-vs-batigest': axonaut_vs_batigest,
  'axonaut-vs-ebp': axonaut_vs_ebp,
  'axonaut-vs-sellsy': axonaut_vs_sellsy,
  'tolteck-vs-progbat': tolteck_vs_progbat,
  'tolteck-vs-batigest': tolteck_vs_batigest,
  'tolteck-vs-ebp': tolteck_vs_ebp,
  'tolteck-vs-sellsy': tolteck_vs_sellsy,
  'progbat-vs-batigest': progbat_vs_batigest,
  'progbat-vs-ebp': progbat_vs_ebp,
  'progbat-vs-sellsy': progbat_vs_sellsy,
  'batigest-vs-ebp': batigest_vs_ebp,
  'batigest-vs-sellsy': batigest_vs_sellsy,
  'ebp-vs-sellsy': ebp_vs_sellsy,
};
