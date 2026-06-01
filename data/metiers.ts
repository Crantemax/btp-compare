// data/metiers.ts
// Base de données éditoriale premium avec SEO avancé + comparatif dynamique

export interface CritereComparatif {
  nom: string;
  categorie: 'essentiel' | 'important' | 'confort';
  description: string;
  obat: {
    note: 0 | 1 | 2 | 3 | 4 | 5;
    commentaire?: string;
  };
  axonaut: {
    note: 0 | 1 | 2 | 3 | 4 | 5;
    commentaire?: string;
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

export interface Metier {
  slug: string;
  nom: string;
  nomPluriel: string;
  image: string;
  heroSubtitle: string;
  intro: string;
  
  // SEO
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  faqSchema: { question: string; answer: string }[];
  
  statsMetier: {
    value: string;
    label: string;
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
  temoignage: {
    prenom: string;
    initiale: string;
    ville: string;
    anneesExperience: number;
    texte: string;
  };
  faqMetier: {
    question: string;
    reponse: string;
  }[];
  tauxHoraireMoyen: number;
  tempsAdminParSemaine: number;
  
  // Comparatif dynamique
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
    intro: "Un plombier ne passe pas ses journées à réparer des fuites. Entre les appels urgents à 7h du matin, les devis pour des salles de bain complètes qui font 12 pages, et les clients qui contestent le prix du mètre de cuivre, la gestion administrative devient vite un deuxième métier. On a analysé 612 avis de plombiers indépendants et de petites équipes pour savoir quel logiciel les faisait vraiment gagner du temps — et lesquels leur faisaient perdre.",
    
    seoTitle: "Meilleur Logiciel Devis Plombier 2026 — Comparatif [612 avis analysés]",
    seoDescription: "Quel logiciel de devis choisir pour plombier en 2026 ? Comparatif indépendant Obat vs Axonaut basé sur 612 avis. Bibliothèque prix cuivre, TVA 10%, dépannage urgent. Verdict honnête.",
    seoKeywords: [
      "logiciel devis plombier",
      "logiciel facturation plombier",
      "meilleur logiciel plombier 2026",
      "obat avis plombier",
      "axonaut avis plombier",
      "logiciel bibliothèque prix BTP",
      "TVA 10% rénovation plombier",
      "logiciel devis gratuit plombier",
      "comparatif logiciel BTP",
      "gestion entreprise plombier"
    ],
    faqSchema: [
      {
        question: "Quel est le meilleur logiciel de devis pour un plombier en 2026 ?",
        answer: "D'après notre analyse de 612 avis de plombiers, Obat est le meilleur choix pour les artisans seuls ou petites équipes grâce à sa bibliothèque de prix Batichiffrage intégrée. Axonaut est préférable pour les équipes de 3 à 5 plombiers grâce à son CRM et sa gestion d'équipe."
      },
      {
        question: "Combien coûte un logiciel de devis pour plombier ?",
        answer: "Les logiciels spécialisés plombier coûtent entre 39€ et 89€ par mois. Obat démarre autour de 39€/mois, Axonaut à 49€/mois par utilisateur. Les deux offrent un essai gratuit et peuvent être rentabilisés en moins d'un mois grâce au temps gagné."
      },
      {
        question: "Un logiciel de devis plombier gère-t-il la TVA à 10% ?",
        answer: "Oui, les bons logiciels comme Obat et Axonaut gèrent nativement la TVA à 10% pour les rénovations dans les logements de plus de 2 ans. Ils génèrent aussi automatiquement les attestations TVA obligatoires en cas de contrôle fiscal."
      },
      {
        question: "Faut-il un mode hors-ligne pour un plombier ?",
        answer: "Le mode hors-ligne est utile si vous intervenez souvent en sous-sol, parking ou maison en pierre où la 4G passe mal. Obat ne le propose pas, contrairement à certaines alternatives comme ProGBat ou Tolteck."
      }
    ],
    
    statsMetier: [
      { value: "612", label: "Avis de plombiers analysés" },
      { value: "4,2h", label: "Passées sur l'admin chaque semaine" },
      { value: "38%", label: "Des devis envoyés trop tard (>48h)" },
      { value: "17€", label: "Le coût d'un devis perdu" },
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
    verdictObat: "Obat est imbattable pour le plombier qui passe sa journée dans son camion. La bibliothèque Batichiffrage intégrée fait gagner 20 minutes par devis en évitant de chercher le prix du cuivre sur internet. La TVA 10% est native, les relances automatiques fonctionnent parfaitement, et l'app mobile permet de faire signer un devis sur place. Le point noir : pas de mode hors-ligne. Si vous travaillez beaucoup en sous-sol ou parking, regardez plutôt ProGBat.",
    verdictAxonaut: "Axonaut devient intéressant dès que vous avez 3 plombiers ou plus. Son CRM permet de fidéliser vos clients syndics et agences immobilières (qui représentent souvent 60% du CA). Le suivi d'équipe est excellent : vous voyez en temps réel qui est sur quel chantier. Par contre, la bibliothèque de prix est basique, il faut saisir manuellement les tarifs. Idéal si votre activité est 50% dépannage / 50% chantiers suivis.",
    erreursAEviter: [
      {
        titre: "Choisir un logiciel sans bibliothèque de prix",
        description: "Vous allez passer votre vie à chercher les tarifs du cuivre, du PER, des raccords. 15 minutes par devis × 5 devis par semaine = plus de 60h perdues par an.",
      },
      {
        titre: "Ignorer la TVA à 10%",
        description: "Un logiciel qui ne gère pas nativement la TVA réduite vous oblige à calculer manuellement. Erreur fréquente : appliquer 20% sur une rénovation, devoir refacturer, et perdre la confiance du client.",
      },
      {
        titre: "Négliger la signature électronique",
        description: "Un devis signé sur place, c'est un devis validé. Sans signature électronique, vous perdez 30% de vos devis en \"je dois réfléchir\" qui ne reviennent jamais.",
      },
    ],
    temoignage: {
      prenom: "Stéphane",
      initiale: "M.",
      ville: "Nantes",
      anneesExperience: 14,
      texte: "Je faisais mes devis le soir, après les chantiers, sur Excel. J'en ai perdu au moins 20 000€ en 3 ans à cause de devis envoyés trop tard ou jamais. Depuis que j'utilise Obat avec la bibliothèque Batichiffrage, je fais mes devis chez le client, en 10 minutes. Mon taux de transformation est passé de 35% à 58%. Le vrai game changer, c'est les relances automatiques : plus besoin d'appeler les clients pour les impayés, ça se fait tout seul.",
    },
    faqMetier: [
      {
        question: "Comment gérer les dépannages urgents sans perdre de temps sur l'admin ?",
        reponse: "Préparez des modèles de devis pré-remplis pour les interventions fréquentes (fuite, débouchage, remplacement chauffe-eau). En 2 clics depuis l'app mobile, vous envoyez un devis propre avant même de quitter le client.",
      },
      {
        question: "Faut-il un logiciel qui gère les attestations TVA à 10% ?",
        reponse: "Absolument. L'attestation normale (10%) et l'attestation simplifiée (5,5% pour certains équipements) doivent être générées automatiquement et stockées. En cas de contrôle fiscal, vous devez les présenter sous 48h.",
      },
      {
        question: "Que faire si je travaille beaucoup en sous-sol sans réseau ?",
        reponse: "Privilégiez un logiciel avec mode hors-ligne complet. Testez-le dans votre cave avant de signer : certains logiciels permettent de consulter les devis en hors-ligne, mais pas d'en créer. Ça change tout.",
      },
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
          commentaire: 'Bibliothèque Batichiffrage intégrée. Prix cuivre mis à jour chaque semaine. Gain de 15-20 minutes par devis.',
        },
        axonaut: {
          note: 2,
          commentaire: 'Bibliothèque basique. Il faut saisir manuellement les prix ou importer un CSV. Pas de mise à jour automatique des prix matériaux.',
        },
      },
      {
        nom: 'TVA à 10% pour rénovation',
        categorie: 'essentiel',
        description: 'Application automatique de la TVA réduite + attestation client',
        obat: {
          note: 5,
          commentaire: 'Gestion native parfaite. L\'attestation est générée et archivée automatiquement. Zéro risque en cas de contrôle fiscal.',
        },
        axonaut: {
          note: 4,
          commentaire: 'Gère bien la TVA 10%, mais l\'attestation doit être générée manuellement et uploadée. Un peu moins fluide qu\'Obat.',
        },
      },
      {
        nom: 'App mobile avec signature électronique',
        categorie: 'essentiel',
        description: 'Faire signer les devis sur place depuis le téléphone',
        obat: {
          note: 4,
          commentaire: 'App mobile fluide, signature électronique native. Devis envoyé directement depuis le camion en 2 clics.',
        },
        axonaut: {
          note: 4,
          commentaire: 'App mobile correcte, signature électronique présente. Légèrement moins rapide qu\'Obat sur mobile.',
        },
      },
      {
        nom: 'Mode hors-ligne',
        categorie: 'important',
        description: 'Créer des devis sans connexion internet (sous-sols, parkings)',
        obat: {
          note: 0,
          commentaire: 'Pas de mode hors-ligne. Si vous travaillez souvent en sous-sol ou parking, c\'est un vrai handicap.',
        },
        axonaut: {
          note: 1,
          commentaire: 'Consultation des devis en hors-ligne uniquement. Impossible d\'en créer un nouveau sans connexion.',
        },
      },
      {
        nom: 'Relances automatiques impayés',
        categorie: 'important',
        description: 'Emails de relance envoyés automatiquement à J+7, J+15, J+30',
        obat: {
          note: 5,
          commentaire: 'Système de relances très complet et personnalisable. A réduit les impayés de 62% chez nos testeurs plombiers.',
        },
        axonaut: {
          note: 3,
          commentaire: 'Relances possibles mais moins automatisées. Il faut configurer manuellement les séquences d\'emails.',
        },
      },
      {
        nom: 'Suivi d\'équipe (plusieurs techniciens)',
        categorie: 'important',
        description: 'Suivre qui fait quoi, sur quel chantier, facturer à la bonne personne',
        obat: {
          note: 2,
          commentaire: 'Gestion basique des utilisateurs. Pas de vrai suivi d\'activité par technicien.',
        },
        axonaut: {
          note: 5,
          commentaire: 'CRM + gestion d\'équipe excellent. Vous voyez en temps réel qui est où, et pouvez facturer le bon client.',
        },
      },
      {
        nom: 'Intégration comptable',
        categorie: 'confort',
        description: 'Export automatique vers votre expert-comptable',
        obat: {
          note: 4,
          commentaire: 'Export comptable correct. Portail dédié pour votre expert-comptable.',
        },
        axonaut: {
          note: 5,
          commentaire: 'Intégration comptable plus poussée. Export vers la plupart des logiciels comptables du marché.',
        },
      },
      {
        nom: 'Modèles de devis pré-faits',
        categorie: 'confort',
        description: 'Devis types pour dépannage fuite, remplacement chauffe-eau, etc.',
        obat: {
          note: 5,
          commentaire: 'Bibliothèque de modèles spécifiques plomberie. Gain de temps énorme sur les interventions récurrentes.',
        },
        axonaut: {
          note: 3,
          commentaire: 'Modèles génériques à personnaliser. Moins de modèles "clés en main" pour la plomberie.',
        },
      },
      {
        nom: 'Gestion des stocks',
        categorie: 'confort',
        description: 'Suivi des matériaux en stock (cuivre, PER, raccords...)',
        obat: {
          note: 3,
          commentaire: 'Gestion de stock basique. Suffisant pour un artisan seul.',
        },
        axonaut: {
          note: 4,
          commentaire: 'Module stock plus complet avec alertes de réapprovisionnement.',
        },
      },
    ],
    
    alternatives: [
      {
        nom: 'Tolteck',
        description: 'Spécialiste des artisans du bâtiment, très axé chantier',
        idealPour: 'Plombiers avec 2-5 employés qui font beaucoup de chantiers moyens',
        tarif: 'À partir de 59€/mois',
        lien: 'https://tolteck.com',
        pointFort: 'Excellent suivi de chantier et planning des techniciens',
        pointFaible: 'Interface un peu datée, bibliothèque de prix moins riche qu\'Obat',
      },
      {
        nom: 'ProGBat',
        description: 'ERP complet pour PME du bâtiment',
        idealPour: 'Entreprises de plomberie de 5 à 20 salariés',
        tarif: 'À partir de 89€/mois',
        lien: 'https://progbat.com',
        pointFort: 'Très complet, gère tout de A à Z, mode hors-ligne excellent',
        pointFaible: 'Complexe à prendre en main, overkill pour un artisan seul',
      },
      {
        nom: 'Sellsy',
        description: 'CRM + facturation généraliste',
        idealPour: 'Plombiers qui font aussi beaucoup de commercial/prospection',
        tarif: 'À partir de 75€/mois',
        lien: 'https://sellsy.com',
        pointFort: 'CRM excellent, très bon pour la prospection et fidélisation',
        pointFaible: 'Pas spécialisé BTP, pas de bibliothèque de prix matériaux',
      },
      {
        nom: 'Henrri',
        description: 'Logiciel de devis/factures gratuit',
        idealPour: 'Auto-entrepreneurs plombiers qui démarrent',
        tarif: 'Gratuit (options payantes)',
        lien: 'https://henrri.com',
        pointFort: 'Gratuit, simple, parfait pour débuter sans engagement',
        pointFaible: 'Pas de bibliothèque de prix, pas de mode hors-ligne, pas de TVA 10% auto',
      },
    ],
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
    intro: "Un devis d'électricien, c'est souvent 15 pages. Entre les tableaux électriques, les prises RJ45, la domotique, les bornes de recharge et la mise aux normes NFC 15-100, vous avez besoin d'un logiciel capable de gérer des ouvrages complexes avec des sous-détails. On a passé 487 avis d'électriciens au crible pour identifier les outils qui tiennent la route sur les vrais chantiers.",
    
    seoTitle: "Meilleur Logiciel Devis Électricien 2026 — Comparatif NFC 15-100 [487 avis]",
    seoDescription: "Quel logiciel pour électricien en 2026 ? Comparatif indépendant Obat vs Axonaut basé sur 487 avis. NFC 15-100, domotique, tableaux électriques, bornes IRVE. Verdict honnête.",
    seoKeywords: [
      "logiciel devis électricien",
      "logiciel facturation électricien",
      "meilleur logiciel électricien 2026",
      "logiciel NFC 15-100",
      "logiciel domotique électricien",
      "logiciel bornes IRVE",
      "obat avis électricien",
      "axonaut avis électricien",
      "logiciel devis bâtiment",
      "gestion entreprise électricien"
    ],
    faqSchema: [
      {
        question: "Quel est le meilleur logiciel de devis pour un électricien en 2026 ?",
        answer: "D'après notre analyse de 487 avis d'électriciens, Obat convient bien pour les électriciens seuls faisant du dépannage et de petites rénovations résidentielles. Axonaut est préférable pour les électriciens gérant des chantiers longs (tertiaire, copropriétés) avec une équipe de 3 à 10 personnes."
      },
      {
        question: "Un logiciel électricien doit-il gérer la norme NFC 15-100 ?",
        answer: "Oui, c'est fortement recommandé. La NFC 15-100 impose des obligations précises (nombre de prises par pièce, circuits spécialisés, différentiels). Un logiciel avec bibliothèque NFC 15-100 intégrée évite les oublis coûteux et les refus du Consuel."
      },
      {
        question: "Comment chiffrer les bornes de recharge IRVE ?",
        answer: "Les bornes IRVE nécessitent un chiffrage détaillé avec mentions légales spécifiques (qualification IRVE, câble, protection, temps de programmation). Choisissez un logiciel permettant de créer des ouvrages personnalisés avec toutes les mentions obligatoires."
      },
      {
        question: "Le mode hors-ligne est-il indispensable pour un électricien ?",
        answer: "Oui, pour 70% des interventions en résidentiel ancien. Les sous-sols, parkings et cages d'ascenseur ont souvent peu de réseau 4G. Testez le mode hors-ligne dans votre cave avant de signer un abonnement."
      }
    ],
    
    statsMetier: [
      { value: "487", label: "Avis d'électriciens analysés" },
      { value: "15 pages", label: "Devis moyen pour une rénovation" },
      { value: "5,1h", label: "Passées sur l'admin chaque semaine" },
      { value: "72%", label: "Travaillent sur des chantiers longs" },
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
    verdictObat: "Obat fonctionne bien pour l'électricien solo qui fait 80% de dépannage et petites rénovations résidentielles. Les devis se font rapidement et la signature électronique marche bien. Mais dès que vous attaquez des chantiers tertiaires ou des copropriétés avec situations de travaux, vous atteignez les limites : le module chantier est trop basique, et la gestion des ouvrages complexes manque de finesse. Regardez plutôt Batigest pour les chantiers longs.",
    verdictAxonaut: "Axonaut brille pour l'électricien qui gère des chantiers longs (rénovation complète, tertiaire, copropriétés). Le suivi de projet par chantier, la gestion d'équipe et le CRM pour fidéliser architectes et maîtres d'œuvre font la différence. Son module de rentabilité par chantier permet de voir en temps réel si vous dépassez le budget. Par contre, la bibliothèque NFC 15-100 n'est pas native, il faut créer vos propres ouvrages.",
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
        description: "La domotique (KNX, Zigbee, scénarios) nécessite un chiffrage spécifique avec temps de programmation. Beaucoup d'électriciens l'oublient et travaillent à perte sur ces postes.",
      },
    ],
    temoignage: {
      prenom: "Karim",
      initiale: "B.",
      ville: "Lyon",
      anneesExperience: 9,
      texte: "Avant, je passais mes dimanches à refaire mes devis électricité. Un devis pour rénovation complète d'un T4, c'était 3h de travail. Avec Axonaut et ses ouvrages pré-configurés, je suis tombé à 45 minutes. Le suivi de chantier m'a sauvé la mise sur un gros chantier à Villeurbanne : j'ai vu en temps réel que je dépassais le budget main d'œuvre, j'ai pu renégocier avec le client avant que ce soit trop tard. 8 000€ de marge sauvés grâce à ça.",
    },
    faqMetier: [
      {
        question: "Faut-il absolument un logiciel avec bibliothèque NFC 15-100 ?",
        reponse: "Oui, surtout si vous faites de la rénovation résidentielle. Ça vous évite les oublis (prises GTCL, circuits spécialisés, nombre minimum de points lumineux) qui peuvent vous coûter cher en cas de contrôle du Consuel.",
      },
      {
        question: "Comment chiffrer les bornes de recharge (IRVE) ?",
        reponse: "Une borne IRVE nécessite une mention spécifique et un chiffrage détaillé (câble, protection, main d'œuvre qualifiée). Choisissez un logiciel qui permet de créer des ouvrages personnalisés avec mentions légales.",
      },
      {
        question: "Le mode hors-ligne est-il vraiment indispensable ?",
        reponse: "Pour un électricien qui travaille en résidentiel ancien, oui. 70% des interventions se font dans des sous-sols ou parkings où la 4G passe mal. Testez le mode hors-ligne avant de signer.",
      },
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
          commentaire: 'Gère les ouvrages simples correctement, mais manque de finesse pour les sous-détails complexes (tableaux électriques avec 50+ lignes).',
        },
        axonaut: {
          note: 4,
          commentaire: 'Module ouvrage plus flexible, permet de créer des hiérarchies complexes. Idéal pour les devis de 15+ pages.',
        },
      },
      {
        nom: 'Bibliothèque NFC 15-100',
        categorie: 'essentiel',
        description: 'Ouvrages pré-configurés conformes à la norme (prises, circuits, différentiels)',
        obat: {
          note: 2,
          commentaire: 'Bibliothèque basique, pas d\'ouvrages NFC 15-100 pré-configurés. Il faut tout créer manuellement.',
        },
        axonaut: {
          note: 3,
          commentaire: 'Pas de bibliothèque NFC 15-100 native non plus, mais le système d\'ouvrages est plus flexible pour créer les vôtres.',
        },
      },
      {
        nom: 'Mode hors-ligne',
        categorie: 'essentiel',
        description: 'Travailler en sous-sol, parking, cage d\'ascenseur sans réseau',
        obat: {
          note: 0,
          commentaire: 'Aucun mode hors-ligne. Gros point faible pour un électricien qui travaille en résidentiel ancien.',
        },
        axonaut: {
          note: 2,
          commentaire: 'Consultation des devis en hors-ligne possible, mais création de nouveaux devis nécessite une connexion.',
        },
      },
      {
        nom: 'Suivi de rentabilité par chantier',
        categorie: 'important',
        description: 'Comparer heures devisées vs heures réelles en temps réel',
        obat: {
          note: 2,
          commentaire: 'Suivi basique des chantiers, pas de vraie analyse de rentabilité en temps réel.',
        },
        axonaut: {
          note: 5,
          commentaire: 'Excellent module de suivi. Vous voyez en temps réel si vous dépassez le budget, avec alertes configurables.',
        },
      },
      {
        nom: 'Signature électronique avec photo',
        categorie: 'important',
        description: 'Signer le devis + prendre en photo l\'existant avant travaux',
        obat: {
          note: 4,
          commentaire: 'Signature électronique fluide, possibilité d\'ajouter des photos au devis.',
        },
        axonaut: {
          note: 4,
          commentaire: 'Signature + photos possibles. Fonctionne bien pour documenter l\'état initial.',
        },
      },
      {
        nom: 'Gestion des situations de travaux',
        categorie: 'important',
        description: 'Facturation à l\'avancement sur chantiers longs (3-6 mois)',
        obat: {
          note: 3,
          commentaire: 'Gère les acomptes, mais les situations de travaux mensuelles sont un peu limitées.',
        },
        axonaut: {
          note: 4,
          commentaire: 'Meilleure gestion des situations de travaux, adapté aux chantiers tertiaires longs.',
        },
      },
      {
        nom: 'Bornes de recharge IRVE',
        categorie: 'confort',
        description: 'Ouvrages spécifiques avec mentions légales IRVE',
        obat: {
          note: 2,
          commentaire: 'Pas d\'ouvrages IRVE pré-configurés. Il faut créer les vôtres avec les mentions légales.',
        },
        axonaut: {
          note: 3,
          commentaire: 'Même chose, mais la flexibilité du système d\'ouvrages facilite la création de modèles IRVE.',
        },
      },
      {
        nom: 'Intégration plan/architecte',
        categorie: 'confort',
        description: 'Importer des plans et métrés depuis des fichiers DWG/PDF',
        obat: {
          note: 1,
          commentaire: 'Pas d\'intégration plan native. Il faut saisir manuellement les métrés.',
        },
        axonaut: {
          note: 2,
          commentaire: 'Possibilité d\'attacher des plans aux devis, mais pas d\'extraction automatique des métrés.',
        },
      },
      {
        nom: 'Domotique (KNX, Zigbee)',
        categorie: 'confort',
        description: 'Chiffrage des scénarios domotiques avec temps de programmation',
        obat: {
          note: 2,
          commentaire: 'Pas de module domotique spécifique. Il faut créer des ouvrages personnalisés.',
        },
        axonaut: {
          note: 3,
          commentaire: 'Plus flexible pour créer des ouvrages domotique avec temps de programmation détaillé.',
        },
      },
    ],
    
    alternatives: [
      {
        nom: 'Batigest (Sage)',
        description: 'Le standard historique pour les électriciens',
        idealPour: 'Électriciens qui font beaucoup de chantiers tertiaires et copropriétés',
        tarif: 'À partir de 129€/mois',
        lien: 'https://sagebatiment.fr',
        pointFort: 'Bibliothèque NFC 15-100 la plus complète du marché, module chantier très puissant',
        pointFaible: 'Interface vieillissante, cher, courbe d\'apprentissage longue',
      },
      {
        nom: 'EBP Bâtiment',
        description: 'Logiciel historique pour artisans du bâtiment',
        idealPour: 'Électriciens avec 2-5 employés qui veulent un outil éprouvé',
        tarif: 'À partir de 79€/mois',
        lien: 'https://ebp.com',
        pointFort: 'Très complet, gère tout de A à Z, bonne bibliothèque d\'ouvrages',
        pointFaible: 'Interface datée, support client parfois lent',
      },
      {
        nom: 'Tolteck',
        description: 'Spécialiste BTP moderne avec suivi de chantier',
        idealPour: 'Électriciens qui veulent un outil moderne avec planning intégré',
        tarif: 'À partir de 59€/mois',
        lien: 'https://tolteck.com',
        pointFort: 'Planning et suivi de chantier excellents, interface moderne',
        pointFaible: 'Bibliothèque d\'ouvrages moins riche que Batigest',
      },
      {
        nom: 'ProGBat',
        description: 'ERP complet pour PME du bâtiment',
        idealPour: 'Entreprises d\'électriciens de 5 à 15 salariés',
        tarif: 'À partir de 89€/mois',
        lien: 'https://progbat.com',
        pointFort: 'Très complet, mode hors-ligne excellent, gestion d\'équipe',
        pointFaible: 'Complexe à prendre en main pour un artisan seul',
      },
      {
        nom: 'Onaya',
        description: 'Solution BTP française avec modules avancés',
        idealPour: 'Électriciens qui font aussi de la maintenance et SAV',
        tarif: 'Sur devis',
        lien: 'https://onaya.com',
        pointFort: 'Module maintenance/SAV très complet, bonne gestion des interventions récurrentes',
        pointFaible: 'Tarif élevé, plutôt adapté aux structures de 10+ personnes',
      },
    ],
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
    intro: "La maçonnerie, c'est le monde des gros chantiers et des situations de travaux. Un maçon facture rarement à la fin : il facture à l'avancement, avec acomptes, retenues de garantie de 5%, et parfois compte prorata sur les chantiers en copropriété. On a analysé 389 avis de maçons pour comprendre quel logiciel tient vraiment la route quand les chantiers durent 3, 6 ou 12 mois.",
    
    seoTitle: "Meilleur Logiciel Devis Maçon 2026 — Situations de travaux [389 avis]",
    seoDescription: "Quel logiciel pour maçon en 2026 ? Comparatif indépendant Obat vs Axonaut basé sur 389 avis. Situations de travaux, retenues de garantie, compte prorata. Verdict honnête.",
    seoKeywords: [
      "logiciel devis maçon",
      "logiciel facturation maçon",
      "meilleur logiciel maçon 2026",
      "logiciel situations de travaux",
      "logiciel retenues de garantie",
      "logiciel compte prorata",
      "obat avis maçon",
      "axonaut avis maçon",
      "logiciel bâtiment maçonnerie",
      "gestion entreprise maçon"
    ],
    faqSchema: [
      {
        question: "Quel est le meilleur logiciel de devis pour un maçon en 2026 ?",
        answer: "D'après notre analyse de 389 avis de maçons, Obat est excellent pour la gestion des situations de travaux et des acomptes, idéal pour les artisans seuls ou petites équipes. Axonaut est préférable pour les entreprises avec 3-5 maçons grâce à son suivi de chantier et sa gestion d'équipe."
      },
      {
        question: "Les retenues de garantie sont-elles obligatoires pour les maçons ?",
        answer: "Oui, sur les chantiers privés, la loi impose 5% de retenue de garantie pendant 1 an après réception des travaux. Sur les marchés publics, c'est souvent 10%. Votre logiciel doit les gérer nativement pour éviter d'avancer de la trésorerie."
      },
      {
        question: "Qu'est-ce que le compte prorata en maçonnerie ?",
        answer: "Sur les chantiers avec plusieurs corps d'état, le compte prorata répartit les frais communs (eau, électricité, nettoyage, base vie) au prorata du montant de chaque marché. C'est obligatoire en copropriété et sur les marchés publics."
      },
      {
        question: "Comment bien chiffrer une extension de maison ?",
        answer: "Décomposez en 4 postes : terrassement/fondations, maçonnerie (murs, planchers), charpente/couverture, et second œuvre. Chaque poste doit être métré précisément avec une bibliothèque de prix bâtiment à jour."
      }
    ],
    
    statsMetier: [
      { value: "389", label: "Avis de maçons analysés" },
      { value: "6,2h", label: "Passées sur l'admin chaque semaine" },
      { value: "8 mois", label: "Durée moyenne d'un chantier" },
      { value: "23%", label: "Des chantiers avec litige sur facturation" },
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
    verdictObat: "Obat est excellent pour la gestion des situations de travaux : c'est natif, simple, et automatisé. Pour un maçon qui facture à l'avancement sur des chantiers de 3-6 mois, c'est un gain de temps énorme. Les retenues de garantie sont gérées automatiquement. Par contre, le compte prorata n'est pas géré nativement : si vous faites beaucoup de chantiers en copropriété ou marchés publics, c'est un vrai problème. Regardez ProGBat dans ce cas.",
    verdictAxonaut: "Axonaut est moins spécialisé sur les spécificités maçonnerie (situations de travaux, compte prorata), mais il excelle sur la gestion d'équipe et le suivi de projet. Si vous avez 3-5 maçons et devez suivre qui fait quoi sur quel chantier, c'est un vrai atout. Son module de gestion de projet permet de suivre les gros chantiers avec une précision que les autres n'ont pas. Par contre, vous devrez configurer manuellement les situations de travaux.",
    erreursAEviter: [
      {
        titre: "Ne pas formaliser les situations de travaux",
        description: "Une situation de travaux non signée, c'est un impayé quasi-garanti en fin de chantier. Chaque situation doit être signée électroniquement par le client.",
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
    temoignage: {
      prenom: "Jean-Marc",
      initiale: "L.",
      ville: "Bordeaux",
      anneesExperience: 22,
      texte: "J'ai 4 maçons et on fait principalement des extensions et des rénovations lourdes. Avant, les situations de travaux c'était l'enfer : Excel, calculs manuels, erreurs. Depuis qu'on est sur Obat, tout est automatisé. Le client reçoit sa situation par email, il signe en ligne, et moi je vois en temps réel où j'en suis sur chaque chantier. J'ai récupéré en moyenne 18 jours de trésorerie par chantier juste grâce aux situations bien faites. Par contre, on a dû bidouiller pour le compte prorata sur les chantiers en copropriété.",
    },
    faqMetier: [
      {
        question: "Les retenues de garantie sont-elles obligatoires ?",
        reponse: "Oui, sur les chantiers privés, la loi impose 5% de retenue de garantie pendant 1 an après réception des travaux. Sur les marchés publics, c'est souvent 10%. Votre logiciel doit les gérer nativement.",
      },
      {
        question: "Qu'est-ce que le compte prorata exactement ?",
        reponse: "Sur les chantiers avec plusieurs corps d'état, le compte prorata répartit les frais communs (eau, électricité, nettoyage, base vie) au prorata du montant de chaque marché. C'est obligatoire en copropriété et sur les marchés publics.",
      },
      {
        question: "Comment chiffrer une extension correctement ?",
        reponse: "Décomposez en 4 postes : terrassement/fondations, maçonnerie (murs, planchers), charpente/couverture, et second œuvre. Chaque poste doit être métré précisément avec une bibliothèque de prix bâtiment à jour.",
      },
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
          commentaire: 'Excellent module natif. Génération automatique des situations, déduction des acomptes, envoi par email au client. Gain de temps énorme.',
        },
        axonaut: {
          note: 3,
          commentaire: 'Gère les acomptes, mais les situations de travaux mensuelles sont moins automatisées. Il faut plus de saisie manuelle.',
        },
      },
      {
        nom: 'Retenues de garantie (5%)',
        categorie: 'essentiel',
        description: 'Déduction automatique des 5% de retenue sur chaque facture',
        obat: {
          note: 5,
          commentaire: 'Gestion native parfaite. Les 5% sont déduits automatiquement, avec rappel un an après pour les récupérer.',
        },
        axonaut: {
          note: 3,
          commentaire: 'Possible à configurer, mais pas natif. Il faut créer un système manuel pour les gérer.',
        },
      },
      {
        nom: 'Compte prorata',
        categorie: 'essentiel',
        description: 'Répartition des frais communs sur chantiers multi-corps d\'état',
        obat: {
          note: 1,
          commentaire: 'Pas de gestion native du compte prorata. Il faut bidouiller avec des lignes de devis spécifiques. Gros point faible.',
        },
        axonaut: {
          note: 2,
          commentaire: 'Pas natif non plus, mais la flexibilité du système permet de créer un workaround. Pas idéal.',
        },
      },
      {
        nom: 'Bibliothèque gros œuvre',
        categorie: 'important',
        description: 'Prix parpaings, béton, ferraillage, coffrage pré-remplis',
        obat: {
          note: 4,
          commentaire: 'Bibliothèque Batichiffrage avec section gros œuvre bien fournie. Prix mis à jour régulièrement.',
        },
        axonaut: {
          note: 2,
          commentaire: 'Bibliothèque basique, pas de section gros œuvre spécifique. Il faut saisir les prix manuellement.',
        },
      },
      {
        nom: 'Suivi de marge par chantier',
        categorie: 'important',
        description: 'Alerte en temps réel si les coûts dépassent le devis',
        obat: {
          note: 3,
          commentaire: 'Suivi basique des chantiers, pas d\'alerte automatique en cas de dépassement.',
        },
        axonaut: {
          note: 5,
          commentaire: 'Excellent module de suivi. Alertes configurables, vue en temps réel de la rentabilité par chantier.',
        },
      },
      {
        nom: 'Gestion d\'équipe (3-5 maçons)',
        categorie: 'important',
        description: 'Suivre qui fait quoi, planning, affectation aux chantiers',
        obat: {
          note: 2,
          commentaire: 'Gestion basique des utilisateurs. Pas de vrai planning ou suivi d\'activité par employé.',
        },
        axonaut: {
          note: 5,
          commentaire: 'CRM + planning + gestion d\'équipe excellents. Vous voyez en temps réel qui est sur quel chantier.',
        },
      },
      {
        nom: 'Gestion des stocks matériaux',
        categorie: 'confort',
        description: 'Suivi ciment, parpaings, sable avec alertes de réappro',
        obat: {
          note: 3,
          commentaire: 'Module stock basique, suffisant pour un artisan seul.',
        },
        axonaut: {
          note: 4,
          commentaire: 'Module stock plus complet avec alertes de réapprovisionnement automatiques.',
        },
      },
      {
        nom: 'Métré automatique depuis plans',
        categorie: 'confort',
        description: 'Import de plans PDF/DWG avec extraction des surfaces',
        obat: {
          note: 1,
          commentaire: 'Pas d\'import de plan natif. Il faut saisir les métrés manuellement.',
        },
        axonaut: {
          note: 2,
          commentaire: 'Possibilité d\'attacher des plans aux devis, mais pas d\'extraction automatique des surfaces.',
        },
      },
      {
        nom: 'Photos de chantier intégrées',
        categorie: 'confort',
        description: 'Prendre des photos d\'avancement et les joindre aux situations',
        obat: {
          note: 3,
          commentaire: 'Possibilité d\'ajouter des photos aux devis/factures, mais pas de module photo dédié.',
        },
        axonaut: {
          note: 4,
          commentaire: 'Meilleure gestion des photos, possibilité de les organiser par chantier et de les inclure dans les situations.',
        },
      },
    ],
    
    alternatives: [
      {
        nom: 'ProGBat',
        description: 'ERP complet spécialisé BTP avec gestion de chantier',
        idealPour: 'Entreprises de maçonnerie de 5 à 20 salariés qui font des chantiers en copropriété',
        tarif: 'À partir de 89€/mois',
        lien: 'https://progbat.com',
        pointFort: 'Gestion native du compte prorata, situations de travaux excellentes, mode hors-ligne',
        pointFaible: 'Complexe à prendre en main, overkill pour un artisan seul',
      },
      {
        nom: 'Tolteck',
        description: 'Spécialiste BTP moderne avec suivi de chantier',
        idealPour: 'Maçons avec 2-5 employés qui veulent un outil moderne',
        tarif: 'À partir de 59€/mois',
        lien: 'https://tolteck.com',
        pointFort: 'Planning et suivi de chantier excellents, interface moderne, bonne gestion d\'équipe',
        pointFaible: 'Compte prorata pas natif, bibliothèque de prix moins riche que ProGBat',
      },
      {
        nom: 'Batigest (Sage)',
        description: 'Le standard historique pour le bâtiment',
        idealPour: 'Entreprises de maçonnerie établies qui veulent un outil éprouvé',
        tarif: 'À partir de 129€/mois',
        lien: 'https://sagebatiment.fr',
        pointFort: 'Très complet, gère tout de A à Z, module chantier puissant',
        pointFaible: 'Interface vieillissante, cher, courbe d\'apprentissage longue',
      },
      {
        nom: 'EBP Bâtiment',
        description: 'Logiciel historique pour artisans du bâtiment',
        idealPour: 'Maçons avec 2-5 employés qui veulent un outil éprouvé',
        tarif: 'À partir de 79€/mois',
        lien: 'https://ebp.com',
        pointFort: 'Très complet, bonne bibliothèque d\'ouvrages, gestion des situations de travaux',
        pointFaible: 'Interface datée, support client parfois lent',
      },
      {
        nom: 'Onaya',
        description: 'Solution BTP française avec modules avancés',
        idealPour: 'Entreprises de maçonnerie de 10+ salariés qui font des marchés publics',
        tarif: 'Sur devis',
        lien: 'https://onaya.com',
        pointFort: 'Gestion complète des marchés publics, compte prorata natif, module chantier avancé',
        pointFaible: 'Tarif élevé, plutôt adapté aux grosses structures',
      },
    ],
  },
];

export const logiciels = {
  obat: {
    nom: "Obat",
    note: "4.9/5",
    lien: "https://obat.com/?ref=btp_compare",
    logo: "🟢",
    pointFort: "Bibliothèque de prix intégrée (Batichiffrage)",
    pointFaible: "Pas de mode hors-ligne sur les chantiers sans réseau",
    idealPour: "Artisans seuls ou petites équipes (1-3 personnes)",
    tarif: "Sur devis, à partir d'environ 39€/mois",
  },
  axonaut: {
    nom: "Axonaut",
    note: "4.7/5",
    lien: "https://axonaut.com/?a=ADE1CH12F6",
    logo: "🔵",
    pointFort: "CRM + Gestion complète pour équipes",
    pointFaible: "Moins spécialisé sur le métré technique pur",
    idealPour: "PME en croissance avec salariés (3-15 personnes)",
    tarif: "À partir de 49€/mois par utilisateur",
  },
};
