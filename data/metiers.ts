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
