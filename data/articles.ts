// data/articles.ts
// Articles de blog BTP-Compare — SEO informationnels

export interface Article {
  slug: string;
  titre: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  datePublication: string;
  dateModification: string;
  tempsLecture: number; // en minutes
  categorie: 'guide' | 'comparatif' | 'conseil' | 'actualite';
  image: string; // URL Unsplash
  extrait: string; // 1-2 phrases pour les cards
  contenu: ArticleSection[];
  logicielsLies: string[]; // slugs logiciels à lier
  metiersLies: string[]; // slugs métiers à lier
}

export interface ArticleSection {
  type: 'h2' | 'h3' | 'p' | 'ul' | 'ol' | 'callout' | 'table';
  contenu: string | string[] | { titre: string; lignes: string[][] };
  note?: 'info' | 'warning' | 'success'; // pour callout
}

export const articles: Article[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: 'comment-choisir-logiciel-devis-artisan-btp',
    titre: 'Comment choisir son logiciel de devis artisan BTP en 2026',
    seoTitle: 'Comment choisir son logiciel de devis artisan BTP en 2026 — Guide complet',
    seoDescription: 'Guide pratique pour choisir le meilleur logiciel de devis et facturation BTP : les 7 critères essentiels, les pièges à éviter et notre sélection pour chaque profil.',
    keywords: ['choisir logiciel devis BTP', 'logiciel devis artisan', 'comparatif logiciel BTP', 'logiciel facturation artisan'],
    datePublication: '2026-05-15',
    dateModification: '2026-06-01',
    tempsLecture: 8,
    categorie: 'guide',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=630&fit=crop',
    extrait: 'Avec 200+ logiciels sur le marché, choisir son outil de devis BTP est un casse-tête. Voici la méthode en 7 critères pour faire le bon choix dès le premier coup.',
    logicielsLies: ['obat', 'axonaut', 'tolteck', 'abby'],
    metiersLies: ['plombier', 'electricien', 'macon'],
    contenu: [
      { type: 'p', contenu: 'Un artisan perd en moyenne 6 heures par semaine sur l\'administratif. Le bon logiciel de devis peut réduire ce temps de 60 %. Mais avec plus de 200 solutions sur le marché, comment faire le bon choix ? Voici les 7 critères qui font vraiment la différence.' },
      { type: 'h2', contenu: '1. La spécialisation BTP : un critère décisif' },
      { type: 'p', contenu: 'Un logiciel généraliste (type Axonaut, Sellsy) et un logiciel BTP spécialisé (type Obat, Tolteck) n\'ont pas du tout les mêmes fonctionnalités. La différence principale : la bibliothèque de prix matériaux.' },
      { type: 'ul', contenu: [
        'Bibliothèque de prix BTP intégrée (matériaux, main-d\'œuvre)',
        'Devis par phases et postes de travaux',
        'Situations de travaux et avancement',
        'Gestion des sous-traitants et co-traitants',
        'Plans et photos chantier intégrés',
      ]},
      { type: 'callout', contenu: 'Si vous faites des devis avec des dizaines de postes matériaux, un logiciel sans bibliothèque de prix vous fera perdre plus de temps qu\'il n\'en économise.', note: 'warning' },
      { type: 'h2', contenu: '2. Votre statut juridique change tout' },
      { type: 'p', contenu: 'Les besoins ne sont pas les mêmes selon votre statut. Un auto-entrepreneur a besoin de simplicité et d\'aide pour la déclaration URSSAF. Une PME de 10 salariés a besoin de gestion multi-utilisateurs et de comptabilité analytique.' },
      { type: 'table', contenu: { titre: 'Logiciel recommandé selon le statut', lignes: [
        ['Statut', 'Budget', 'Logiciel conseillé'],
        ['Auto-entrepreneur', '0-30€/mois', 'Abby, Tolteck, Henrri'],
        ['Artisan seul (EURL/SASU)', '30-80€/mois', 'Obat, Tolteck, Progbat'],
        ['Équipe 2-5 personnes', '80-150€/mois', 'Obat, Axonaut, Batigest'],
        ['PME 5-15 salariés', '150-400€/mois', 'Batigest, EBP, Axonaut'],
      ]}},
      { type: 'h2', contenu: '3. L\'essai gratuit : votre meilleur allié' },
      { type: 'p', contenu: 'Ne choisissez jamais un logiciel sans l\'avoir testé sur un vrai devis de votre métier. La plupart des solutions offrent 14 à 30 jours d\'essai gratuit. Profitez-en pour reproduire votre dernier devis et mesurer le temps gagné.' },
      { type: 'h2', contenu: '4. Le support client : souvent sous-estimé' },
      { type: 'p', contenu: 'Quand vous bloquez sur un devis urgent, un support chat disponible en 2 minutes vaut de l\'or. Vérifiez les horaires, les canaux disponibles (téléphone, chat, email) et la langue (certains supports sont uniquement en anglais).' },
      { type: 'h2', contenu: '5. L\'intégration comptable' },
      { type: 'p', contenu: 'Votre logiciel doit pouvoir exporter vers le logiciel de votre comptable. Les formats standards : FEC (Fichier des Écritures Comptables), Sage, Cegid. Vérifiez avant de souscrire.' },
      { type: 'h2', contenu: '6. La mobilité : facturer depuis le chantier' },
      { type: 'p', contenu: 'Une application mobile bien faite vous permet de créer un devis, prendre des photos de chantier et faire signer le client directement sur site. C\'est un gain de temps considérable.' },
      { type: 'h2', contenu: '7. Le rapport qualité/prix sur 3 ans' },
      { type: 'p', contenu: 'Ne regardez pas seulement le prix mensuel. Calculez le coût total sur 3 ans (abonnement + frais de formation + coût de migration depuis votre ancien outil). Un logiciel à 89€/mois coûte 3 204€ sur 3 ans. C\'est un investissement à calculer sérieusement.' },
      { type: 'callout', contenu: 'Notre calculateur de ROI vous aide à estimer le gain réel selon votre chiffre d\'affaires et le nombre de devis mensuels.', note: 'info' },
      { type: 'h2', contenu: 'Notre sélection 2026 par profil' },
      { type: 'p', contenu: 'Après avoir analysé 17 logiciels BTP en profondeur, voici nos recommandations selon votre profil. Obat est notre coup de cœur pour les artisans qui veulent un outil 100% BTP avec bibliothèque de prix. Axonaut convient parfaitement aux équipes qui ont besoin d\'un ERP complet. Tolteck est l\'alternative idéale pour les budgets serrés.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: 'logiciel-btp-gratuit-options-2026',
    titre: 'Logiciel BTP gratuit : les vraies options testées en 2026',
    seoTitle: 'Logiciel BTP gratuit 2026 — Les vraies options (et leurs limites)',
    seoDescription: 'Existe-t-il de vrais logiciels BTP gratuits ? On a testé toutes les options freemium et open source pour vous dire lesquelles valent vraiment le coup.',
    keywords: ['logiciel BTP gratuit', 'logiciel devis gratuit artisan', 'logiciel facturation gratuit BTP', 'logiciel gratuit plombier'],
    datePublication: '2026-05-20',
    dateModification: '2026-06-01',
    tempsLecture: 6,
    categorie: 'guide',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&h=630&fit=crop',
    extrait: 'Logiciel BTP gratuit : oui ça existe, mais avec des limites importantes. On vous dit lesquelles valent le coup et jusqu\'où la gratuité peut vous mener.',
    logicielsLies: ['abby', 'henrri', 'freebe', 'facture-net'],
    metiersLies: ['peintre', 'carreleur'],
    contenu: [
      { type: 'p', contenu: 'La bonne nouvelle : il existe de vraies options gratuites pour les artisans BTP. La mauvaise : elles ont toutes des limites importantes. Voici un tour d\'horizon honnête des solutions disponibles en 2026.' },
      { type: 'h2', contenu: 'Les freemiums : gratuits jusqu\'à un certain point' },
      { type: 'p', contenu: 'La plupart des "logiciels gratuits" sont en réalité des freemiums : gratuits avec des fonctionnalités limitées, payants pour accéder au reste. Le modèle classique : 3 documents par mois en gratuit, illimité en payant.' },
      { type: 'ul', contenu: [
        'Henrri : 100% gratuit pour la facturation simple (sans bibliothèque BTP)',
        'Abby : gratuit jusqu\'à 3 documents/mois — idéal pour démarrer',
        'Facture.net : gratuit avec publicités dans les PDF',
        'Freebe : gratuit 30 jours puis 9,90€/mois',
      ]},
      { type: 'h2', contenu: 'Henrri : le plus généreux des freemiums' },
      { type: 'p', contenu: 'Henrri propose une version réellement gratuite sans limite de documents. L\'interface est simple et moderne. La limite principale : pas de bibliothèque de prix BTP, pas de gestion de chantier. Idéal pour un auto-entrepreneur qui fait de la prestation simple.' },
      { type: 'h2', contenu: 'Les limites du gratuit en BTP' },
      { type: 'p', contenu: 'Les fonctionnalités vraiment utiles pour un artisan BTP sont presque toujours payantes : bibliothèque de prix matériaux, situations de travaux, gestion sous-traitants, signature électronique, application mobile complète.' },
      { type: 'callout', contenu: 'Un artisan qui fait 200 000€ de CA annuel gagne en moyenne 15 000€ de temps facturable supplémentaire avec un bon logiciel. À 80€/mois, le ROI est évident.', note: 'success' },
      { type: 'h2', contenu: 'Notre conseil : commencer gratuit, évoluer vite' },
      { type: 'p', contenu: 'Si vous démarrez votre activité, commencez par Abby ou Henrri. Dès que votre CA dépasse 5 000€/mois, investissez dans un logiciel payant adapté à votre métier. Le temps gagné sera largement supérieur au coût de l\'abonnement.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: 'excel-vs-logiciel-btp-pourquoi-migrer',
    titre: 'Excel vs logiciel BTP : pourquoi migrer devient urgent en 2026',
    seoTitle: 'Excel vs logiciel BTP : les vrais coûts cachés d\'Excel pour les artisans',
    seoDescription: 'Vous faites encore vos devis sur Excel ? On calcule le coût réel de cette habitude et on vous explique comment migrer sans douleur vers un logiciel métier.',
    keywords: ['excel logiciel BTP', 'migrer logiciel devis artisan', 'arrêter excel devis', 'logiciel vs excel artisan'],
    datePublication: '2026-05-28',
    dateModification: '2026-06-01',
    tempsLecture: 7,
    categorie: 'conseil',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop',
    extrait: 'Excel coûte en réalité 3x plus cher qu\'un logiciel BTP. Calcul, démonstration, et guide de migration sans douleur.',
    logicielsLies: ['obat', 'tolteck', 'axonaut'],
    metiersLies: ['macon', 'couvreur', 'charpentier'],
    contenu: [
      { type: 'p', contenu: '73% des artisans BTP utilisent encore Excel pour leurs devis. Ce chiffre cache une réalité économique brutale : Excel vous coûte probablement 3 fois plus cher qu\'un abonnement logiciel.' },
      { type: 'h2', contenu: 'Le coût réel d\'Excel (que personne ne calcule)' },
      { type: 'p', contenu: 'On ne parle pas du prix d\'Excel (inclus dans Microsoft 365). On parle du coût en temps, en erreurs et en opportunités ratées.' },
      { type: 'ul', contenu: [
        'Temps de saisie : 45 min en moyenne par devis sur Excel vs 15 min avec un logiciel BTP',
        'Erreurs de calcul : 1 devis sur 5 contient une erreur en Excel selon nos tests',
        'Devis perdus : pas de suivi automatique des relances',
        'Bibliothèque manuelle : vous ressaisissez les mêmes prix à chaque devis',
        'Image professionnelle : un PDF Excel vs un devis logiciel charte graphique pro',
      ]},
      { type: 'table', contenu: { titre: 'Excel vs logiciel BTP — Comparatif sur 1 an', lignes: [
        ['', 'Excel', 'Logiciel BTP (89€/mois)'],
        ['Coût abonnement', '0€', '1 068€'],
        ['Temps/devis (20 devis/mois)', '9h/mois', '3h/mois'],
        ['Valeur du temps économisé (50€/h)', '0€', '+3 600€/an'],
        ['Erreurs de calcul évitées', '0€', '+500€/an'],
        ['Coût net réel', '0€', '-3 032€ (économie nette)'],
      ]}},
      { type: 'h2', contenu: 'Comment migrer d\'Excel vers un logiciel BTP sans douleur' },
      { type: 'p', contenu: 'La migration fait peur. En réalité, avec un bon logiciel, elle prend 1 à 2 semaines. Voici le processus recommandé :' },
      { type: 'ol', contenu: [
        'Choisissez votre logiciel et profitez de l\'essai gratuit (14-30 jours)',
        'Importez vos articles et prix depuis Excel (export CSV)',
        'Reproduisez vos 3 derniers devis dans le nouveau logiciel',
        'Faites tourner les 2 en parallèle pendant 1 mois',
        'Abandonnez Excel définitivement',
      ]},
      { type: 'callout', contenu: 'Tous les logiciels de notre sélection proposent une assistance à la migration. N\'hésitez pas à contacter le support dès le début d\'essai.', note: 'info' },
      { type: 'h2', contenu: 'Notre recommandation pour migrer' },
      { type: 'p', contenu: 'Obat est la solution la plus simple pour migrer depuis Excel : interface intuitive, bibliothèque de prix BTP complète, et un support français réactif. Tolteck est l\'alternative si votre budget est serré. Les deux proposent 30 jours d\'essai gratuit.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: '5-erreurs-choisir-logiciel-btp',
    titre: 'Les 5 erreurs des artisans qui choisissent mal leur logiciel BTP',
    seoTitle: 'Les 5 erreurs à éviter quand on choisit son logiciel BTP — Guide 2026',
    seoDescription: 'Erreur de logiciel = 6 à 12 mois de galère. On a recensé les 5 erreurs les plus fréquentes des artisans BTP pour vous aider à les éviter.',
    keywords: ['erreur logiciel BTP', 'mauvais logiciel artisan', 'choisir logiciel BTP', 'pièges logiciel artisan'],
    datePublication: '2026-06-01',
    dateModification: '2026-06-01',
    tempsLecture: 5,
    categorie: 'conseil',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=630&fit=crop',
    extrait: 'Changer de logiciel BTP après 6 mois coûte en moyenne 2 000€ en temps perdu. Voici les 5 erreurs à éviter absolument pour faire le bon choix du premier coup.',
    logicielsLies: ['obat', 'axonaut', 'tolteck'],
    metiersLies: ['plombier', 'electricien', 'macon', 'couvreur'],
    contenu: [
      { type: 'p', contenu: 'Sur 10 artisans qui changent de logiciel BTP, 4 le regrettent dans les 6 mois. La cause : une mauvaise évaluation initiale. Voici les 5 erreurs les plus fréquentes — et comment les éviter.' },
      { type: 'h2', contenu: 'Erreur #1 : Choisir sur le prix mensuel et non le coût total' },
      { type: 'p', contenu: 'Un logiciel à 29€/mois peut coûter plus cher qu\'un à 89€/mois si le moins cher nécessite 3h de saisie manuelle par semaine et que vous facturez votre temps 50€/h. Calculez toujours le coût total, incluant le temps passé.' },
      { type: 'h2', contenu: 'Erreur #2 : Ne pas tester sur un vrai devis de votre métier' },
      { type: 'p', contenu: 'La démo marketing n\'est pas le vrai logiciel. Pendant l\'essai gratuit, reproduisez impérativement un de vos vrais devis complexes. Si le logiciel ne gère pas vos spécificités métier, vous le saurez tout de suite.' },
      { type: 'callout', contenu: 'Test recommandé : prenez votre dernier devis de plus de 10 lignes et reproduisez-le dans le logiciel en essai. Chronométrez-vous.', note: 'info' },
      { type: 'h2', contenu: 'Erreur #3 : Ignorer le support client' },
      { type: 'p', contenu: 'Testez le support AVANT de souscrire. Envoyez une question technique pendant l\'essai gratuit et mesurez le temps de réponse. Un support qui met 48h à répondre vous coûtera cher le jour où vous bloquez sur un devis urgent.' },
      { type: 'h2', contenu: 'Erreur #4 : Choisir un logiciel généraliste pour un métier spécifique' },
      { type: 'p', contenu: 'Si vous êtes électricien et que vous faites des devis avec des centaines de références de matériel électrique, un logiciel généraliste sans bibliothèque de prix métier va vous faire perdre un temps fou. Privilégiez toujours la spécialisation BTP.' },
      { type: 'h2', contenu: 'Erreur #5 : Négliger la formation initiale' },
      { type: 'p', contenu: 'Un logiciel mal maîtrisé est pire qu\'Excel. Profitez des ressources de formation incluses (tutoriels vidéo, webinaires, documentation). Comptez 2 à 4 heures de formation pour maîtriser les bases.' },
      { type: 'h2', contenu: 'Comment faire le bon choix du premier coup' },
      { type: 'p', contenu: 'Utilisez notre comparateur et notre quiz de 7 questions pour identifier le logiciel adapté à votre métier, votre taille d\'entreprise et votre budget. Nos analyses sont indépendantes — nous publions systématiquement les points faibles.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: 'logiciel-devis-auto-entrepreneur-btp-2026',
    titre: 'Logiciel devis auto-entrepreneur BTP : notre sélection 2026',
    seoTitle: 'Meilleur logiciel devis auto-entrepreneur BTP 2026 — Comparatif complet',
    seoDescription: 'Quel logiciel de devis choisir quand on est auto-entrepreneur dans le BTP ? Notre sélection 2026 avec les avantages, limites et prix de chaque solution.',
    keywords: ['logiciel devis auto-entrepreneur BTP', 'logiciel auto-entrepreneur artisan', 'logiciel micro-entrepreneur BTP', 'devis facture auto-entrepreneur'],
    datePublication: '2026-06-02',
    dateModification: '2026-06-02',
    tempsLecture: 6,
    categorie: 'comparatif',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=630&fit=crop',
    extrait: 'Auto-entrepreneur dans le BTP, vous avez des besoins spécifiques : simplicité, tarif abordable, aide pour les déclarations URSSAF. Notre sélection des meilleurs outils 2026.',
    logicielsLies: ['abby', 'henrri', 'tolteck', 'freebe'],
    metiersLies: ['peintre', 'plombier', 'electricien', 'carreleur'],
    contenu: [
      { type: 'p', contenu: 'En tant qu\'auto-entrepreneur BTP, vos priorités sont différentes d\'un artisan en EURL : vous n\'avez pas besoin de comptabilité analytique complexe, mais vous avez besoin d\'un outil qui vous aide à ne pas dépasser le plafond de CA et à simplifier vos déclarations URSSAF.' },
      { type: 'h2', contenu: 'Les critères spécifiques à l\'auto-entrepreneur BTP' },
      { type: 'ul', contenu: [
        'Suivi du chiffre d\'affaires et alertes plafond (85 800€ pour les services)',
        'Aide à la déclaration URSSAF mensuelle ou trimestrielle',
        'Numérotation conforme des factures',
        'Mentions légales obligatoires (auto-entrepreneur, SIRET, etc.)',
        'Tarif abordable : idéalement moins de 30€/mois',
        'Application mobile pour facturer sur chantier',
      ]},
      { type: 'h2', contenu: 'Notre top 4 pour les auto-entrepreneurs BTP' },
      { type: 'h3', contenu: '1. Abby — Le spécialiste de l\'auto-entrepreneur' },
      { type: 'p', contenu: 'Abby a été conçu spécifiquement pour les auto-entrepreneurs français. L\'aide à la déclaration URSSAF est la meilleure du marché. Version gratuite disponible jusqu\'à 3 documents/mois.' },
      { type: 'h3', contenu: '2. Tolteck — Le meilleur rapport qualité/prix pour le BTP' },
      { type: 'p', contenu: 'Tolteck propose une bibliothèque de prix BTP dès son offre d\'entrée. Idéal pour les auto-entrepreneurs qui font des devis avec des matériaux. Interface moderne et mobile-first.' },
      { type: 'h3', contenu: '3. Henrri — La gratuité sans limite' },
      { type: 'p', contenu: 'Henrri est réellement gratuit pour la facturation simple. Pas de bibliothèque BTP, mais si votre activité est principalement de la main-d\'œuvre, c\'est amplement suffisant.' },
      { type: 'h3', contenu: '4. Freebe — Pour les freelances et micro-entrepreneurs' },
      { type: 'p', contenu: 'Freebe est davantage orienté freelance, mais convient parfaitement aux auto-entrepreneurs BTP qui font de la prestation simple. Interface très agréable.' },
      { type: 'callout', contenu: 'Attention au plafond de CA : en 2026, le plafond pour les prestations de services est de 77 700€. Certains logiciels vous alertent automatiquement quand vous approchez.', note: 'warning' },
      { type: 'h2', contenu: 'Notre recommandation finale' },
      { type: 'p', contenu: 'Si vous démarrez : Abby gratuit. Si vous faites des devis avec matériaux : Tolteck à 25€/mois. Si votre CA dépasse 50 000€ et que vous envisagez de changer de statut : commencez dès maintenant à vous former sur Obat pour anticiper la transition.' },
    ],
  },
];
