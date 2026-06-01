// data/legal.ts
// Contenu légal conforme à la législation française (LCEN, RGPD, Code de la consommation)

export interface LegalPage {
  slug: string;
  title: string;
  description: string;
  lastUpdated: string;
  sections: {
    title: string;
    content: string[];
  }[];
}

export const legalPages: LegalPage[] = [
  // ═══════════════════════════════════════════════════════
  // MENTIONS LÉGALES (LCEN - Article 6)
  // ═══════════════════════════════════════════════════════
  {
    slug: 'mentions-legales',
    title: 'Mentions légales',
    description: 'Mentions légales du site BTP-Compare.fr conformément à la loi pour la confiance dans l\'économie numérique (LCEN).',
    lastUpdated: '1er juin 2026',
    sections: [
      {
        title: '1. Éditeur du site',
        content: [
          'Le site BTP-Compare.fr est édité par Hugo H., entrepreneur individuel immatriculé au Registre National des Entreprises (RNE) sous le numéro SIREN [À COMPLÉTER].',
          'Adresse email : contact@btp-compare.fr',
          'Responsable de la publication : Hugo H.',
        ],
      },
      {
        title: '2. Hébergeur',
        content: [
          'Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.',
          'Site web : https://vercel.com',
          'Les données sont répliquées sur des serveurs situés en Europe (Francfort, Paris, Dublin) conformément au RGPD.',
        ],
      },
      {
        title: '3. Propriété intellectuelle',
        content: [
          'L\'ensemble du contenu du site BTP-Compare.fr (textes, graphismes, logiciels, logos, icônes, images, clips audio et vidéo, compilation des données) est la propriété exclusive de BTP-Compare ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.',
          'Toute reproduction, représentation, modification, publication, transmission, ou plus généralement toute exploitation non autorisée du site ou de l\'un de ses éléments, constitue une contrefaçon passible de poursuites judiciaires.',
        ],
      },
      {
        title: '4. Liens hypertextes et affiliation',
        content: [
          'Le site BTP-Compare.fr contient des liens hypertextes vers des sites tiers, notamment ceux de nos partenaires logiciels (Obat, Axonaut, Qonto, Shine).',
          'Certains de ces liens sont des liens affiliés : si vous cliquez et vous inscrivez, nous pouvons recevoir une commission sans que cela n\'augmente le prix pour vous.',
          'Nous ne sommes pas responsables du contenu des sites tiers, de leurs pratiques en matière de confidentialité, ni des éventuels dommages résultant de leur consultation.',
          'Toute information relative à notre politique d\'affiliation est détaillée sur la page /legal/affiliation.',
        ],
      },
      {
        title: '5. Limitation de responsabilité',
        content: [
          'Les informations diffusées sur BTP-Compare.fr sont présentées à titre informatif et sont présumées fiables à la date de leur publication. Elles ne sauraient se substituer à un conseil professionnel personnalisé.',
          'BTP-Compare ne pourra être tenu responsable des décisions prises sur la base de ces informations, ni des erreurs ou omissions qu\'elles pourraient contenir.',
          'Les logiciels mentionnés évoluent régulièrement (fonctionnalités, tarifs). Nous mettons à jour nos analyses tous les 3 mois, mais des informations peuvent devenir obsolètes entre deux mises à jour.',
        ],
      },
      {
        title: '6. Droit applicable',
        content: [
          'Les présentes mentions légales sont soumises au droit français. Tout litige relatif à l\'utilisation du site sera soumis à la compétence exclusive des tribunaux français.',
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // POLITIQUE DE CONFIDENTIALITÉ (RGPD)
  // ═══════════════════════════════════════════════════════
  {
    slug: 'politique-confidentialite',
    title: 'Politique de confidentialité',
    description: 'Politique de confidentialité conforme au RGPD et à la loi Informatique et Libertés.',
    lastUpdated: '1er juin 2026',
    sections: [
      {
        title: '1. Préambule',
        content: [
          'BTP-Compare accorde une importance capitale à la protection de vos données personnelles. Cette politique explique quelles données nous collectons, pourquoi nous les collectons, et quels sont vos droits conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.',
        ],
      },
      {
        title: '2. Données collectées',
        content: [
          'Nous collectons UNIQUEMENT des données anonymes de navigation via nos outils d\'analyse (Vercel Analytics et Plausible Analytics) : pages consultées, durée de visite, type d\'appareil, pays d\'origine (anonymisé).',
          'Nous ne collectons AUCUNE donnée personnelle identifiable (nom, email, téléphone, IP complète) sans votre consentement explicite.',
          'Nous n\'utilisons pas de cookies de tracking publicitaire. Nos outils d\'analyse sont conformes aux recommandations de la CNIL et ne nécessitent pas de bannière de consentement.',
        ],
      },
      {
        title: '3. Finalités du traitement',
        content: [
          'Les données anonymes collectées servent uniquement à : comprendre quels contenus sont les plus consultés, améliorer la qualité éditoriale du site, détecter d\'éventuels dysfonctionnements techniques.',
          'Nous ne vendons, ne louons et ne partageons JAMAIS vos données avec des tiers à des fins publicitaires.',
        ],
      },
      {
        title: '4. Cookies',
        content: [
          'BTP-Compare n\'utilise AUCUN cookie de tracking. Nos outils d\'analyse (Vercel Analytics et Plausible) fonctionnent sans cookies et respectent votre vie privée.',
          'Les liens vers les sites de nos partenaires (Obat, Axonaut, Qonto, Shine) peuvent utiliser leurs propres cookies, soumis à leurs politiques de confidentialité respectives.',
          'Pour plus de détails, consultez notre page /legal/cookies.',
        ],
      },
      {
        title: '5. Vos droits (RGPD)',
        content: [
          'Conformément au RGPD, vous disposez des droits suivants : droit d\'accès, de rectification, d\'effacement ("droit à l\'oubli"), de limitation du traitement, de portabilité, et d\'opposition.',
          'Étant donné que nous ne collectons aucune donnée personnelle identifiable, ces droits s\'appliquent principalement si vous nous contactez directement par email.',
          'Pour exercer vos droits : contact@btp-compare.fr',
          'Vous pouvez également déposer une réclamation auprès de la CNIL : www.cnil.fr',
        ],
      },
      {
        title: '6. Durée de conservation',
        content: [
          'Les données statistiques anonymes sont conservées pendant 5 ans maximum, puis supprimées automatiquement.',
          'Les emails que vous nous envoyez sont conservés le temps nécessaire au traitement de votre demande, puis supprimés.',
        ],
      },
      {
        title: '7. Sécurité des données',
        content: [
          'Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données : chiffrement HTTPS, headers HTTP de sécurité, hébergement sur serveurs européens, accès restreint aux données.',
        ],
      },
      {
        title: '8. Transferts hors UE',
        content: [
          'Notre hébergeur Vercel peut répliquer des données aux États-Unis. Ces transferts sont encadrés par les Clauses Contractuelles Types de l\'Union européenne et le Data Privacy Framework.',
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // CGU
  // ═══════════════════════════════════════════════════════
  {
    slug: 'cgu',
    title: 'Conditions Générales d\'Utilisation',
    description: 'Conditions d\'utilisation du site BTP-Compare.fr.',
    lastUpdated: '1er juin 2026',
    sections: [
      {
        title: '1. Objet',
        content: [
          'Les présentes Conditions Générales d\'Utilisation (CGU) ont pour objet de définir les modalités de mise à disposition des services du site BTP-Compare.fr et les conditions d\'utilisation par l\'utilisateur.',
          'Toute connexion au site vaut acceptation sans réserve des présentes CGU.',
        ],
      },
      {
        title: '2. Description du service',
        content: [
          'BTP-Compare est un site éditorial indépendant qui propose des analyses comparatives de logiciels destinés aux artisans du bâtiment (plomberie, électricité, maçonnerie, etc.).',
          'Le site est accessible gratuitement. Son financement repose sur des commissions d\'affiliation lorsque des utilisateurs s\'inscrivent à des logiciels via nos liens.',
        ],
      },
      {
        title: '3. Utilisation du site',
        content: [
          'L\'utilisateur s\'engage à utiliser le site uniquement à des fins légales et à ne pas tenter de compromettre la sécurité du site (attaque DDoS, injection de code, scraping abusif, etc.).',
          'Toute utilisation frauduleuse du site pourra donner lieu à des poursuites judiciaires.',
        ],
      },
      {
        title: '4. Propriété intellectuelle',
        content: [
          'Tous les contenus du site (textes, graphiques, logos, icônes, images, compilations de données) sont la propriété exclusive de BTP-Compare ou de ses partenaires.',
          'Toute reproduction partielle ou totale sans autorisation préalable est interdite et passible de poursuites.',
        ],
      },
      {
        title: '5. Responsabilité',
        content: [
          'BTP-Compare s\'efforce d\'assurer l\'exactitude des informations diffusées, mais ne peut garantir l\'absence d\'erreurs ou d\'omissions.',
          'Les informations fournies ont un caractère purement informatif et ne constituent pas des conseils professionnels engageant la responsabilité de BTP-Compare.',
          'BTP-Compare ne pourra être tenu responsable des dommages directs ou indirects résultant de l\'accès au site ou de l\'utilisation des informations qui y sont diffusées.',
        ],
      },
      {
        title: '6. Liens affiliés',
        content: [
          'Certaines pages contiennent des liens affiliés. Ces liens sont clairement identifiés et permettent à BTP-Compare de percevoir une commission en cas d\'inscription de l\'utilisateur sur le site partenaire.',
          'Cette commission n\'a aucun impact sur le prix payé par l\'utilisateur.',
          'Nos analyses éditoriales restent 100% indépendantes : nous recommandons uniquement les logiciels que nous estimons réellement adaptés à chaque métier, et nous publions systématiquement leurs points faibles.',
        ],
      },
      {
        title: '7. Modification des CGU',
        content: [
          'BTP-Compare se réserve le droit de modifier les présentes CGU à tout moment. Les modifications entrent en vigueur dès leur publication sur le site.',
        ],
      },
      {
        title: '8. Droit applicable',
        content: [
          'Les présentes CGU sont régies par le droit français. Tout litige sera soumis à la compétence exclusive des tribunaux français.',
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // COOKIES
  // ═══════════════════════════════════════════════════════
  {
    slug: 'cookies',
    title: 'Politique de cookies',
    description: 'Politique de cookies respectueuse de votre vie privée.',
    lastUpdated: '1er juin 2026',
    sections: [
      {
        title: '1. Notre engagement',
        content: [
          'BTP-Compare a fait le choix de ne PAS utiliser de cookies de tracking publicitaire. Nous privilégions des outils d\'analyse respectueux de votre vie privée, conformes aux recommandations de la CNIL.',
          'Cela signifie que vous pouvez naviguer sur notre site sans bannière de consentement intrusive.',
        ],
      },
      {
        title: '2. Cookies que nous utilisons',
        content: [
          'Nous utilisons uniquement des cookies strictement nécessaires au fonctionnement technique du site (cookies de session, préférence de thème clair/sombre).',
          'Aucun cookie n\'est déposé à des fins de suivi publicitaire ou de profilage.',
        ],
      },
      {
        title: '3. Outils d\'analyse sans cookies',
        content: [
          'Vercel Analytics : outil intégré à notre hébergeur, fonctionne sans cookies et collecte uniquement des données agrégées (pages vues, pays anonymisé, type d\'appareil).',
          'Plausible Analytics : outil européen (hébergement en Allemagne), conforme RGPD, fonctionne sans cookies et sans collecte de données personnelles.',
          'Ces deux outils sont explicitement exemptés de consentement selon les recommandations de la CNIL (délibération n°2020-091).',
        ],
      },
      {
        title: '4. Cookies tiers',
        content: [
          'Lorsque vous cliquez sur nos liens affiliés (Obat, Axonaut, Qonto, Shine), vous êtes redirigé vers des sites tiers qui peuvent déposer leurs propres cookies.',
          'Ces cookies sont soumis aux politiques de confidentialité des sites concernés, que nous vous invitons à consulter.',
        ],
      },
      {
        title: '5. Gestion des cookies',
        content: [
          'Vous pouvez à tout moment configurer votre navigateur pour bloquer les cookies. Voici les pages d\'aide des principaux navigateurs : Chrome, Firefox, Safari, Edge.',
          'Attention : le blocage des cookies techniques peut affecter le fonctionnement de certains sites.',
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // AFFILIATION (Transparence - DGCCRF)
  // ═══════════════════════════════════════════════════════
  {
    slug: 'affiliation',
    title: 'Transparence sur l\'affiliation',
    description: 'Notre politique de transparence sur les liens affiliés.',
    lastUpdated: '1er juin 2026',
    sections: [
      {
        title: '1. Qu\'est-ce que l\'affiliation ?',
        content: [
          'L\'affiliation est un modèle économique par lequel un site perçoit une commission lorsqu\'un utilisateur clique sur un lien et effectue une action (inscription, achat) sur le site partenaire.',
          'Ce modèle est encadré par la loi française (Code de la consommation, article L121-4) et par les recommandations de la DGCCRF.',
        ],
      },
      {
        title: '2. Notre modèle économique',
        content: [
          'BTP-Compare se finance uniquement via l\'affiliation. Nous ne sommes rémunérés par AUCUN éditeur pour : classer un logiciel en tête de nos comparatifs, publier un article favorable, omettre un point faible.',
          'Nos commissions : Obat (CPL 40€ + CPA 200€), Axonaut (CPA 300€), Qonto et Shine (CPA 100-200€).',
          'Ces commissions financent : le temps de test des logiciels (plusieurs semaines par outil), l\'hébergement du site, les outils d\'analyse, la création de contenu.',
        ],
      },
      {
        title: '3. Notre charte éditoriale',
        content: [
          'Indépendance totale : aucun éditeur n\'a de droit de regard sur nos contenus avant publication.',
          'Transparence : chaque page contenant des liens affiliés affiche clairement un encart de divulgation.',
          'Honnêteté : nous publions systématiquement les points faibles des logiciels, y compris de nos partenaires.',
          'Actualisation : nos analyses sont mises à jour tous les 3 mois pour refléter l\'évolution des produits.',
          'Aucun paiement pour recommandation : si nous recommandions un logiciel sans programme d\'affiliation, nous le ferions quand même.',
        ],
      },
      {
        title: '4. Comment identifier les liens affiliés',
        content: [
          'Tous les boutons "Voir l\'offre", "Essayer [logiciel]", "Découvrir [partenaire]" présents sur le site contiennent des paramètres de tracking (ex: ?a=, ?ref=) qui identifient BTP-Compare comme apporteur d\'affaires.',
          'Ces paramètres n\'ont AUCUN impact sur le prix que vous payez ni sur votre expérience d\'inscription.',
        ],
      },
      {
        title: '5. Notre engagement',
        content: [
          'Nous nous engageons à toujours privilégier l\'intérêt de l\'artisan par rapport à notre commission.',
          'Si un logiciel qui nous rémunère n\'est pas adapté à votre métier, nous vous orienterons vers une alternative plus adaptée, même si elle ne nous rapporte rien.',
          'Vous avez une question sur notre modèle ? Écrivez-nous : contact@btp-compare.fr',
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // CONTACT
  // ═══════════════════════════════════════════════════════
  {
    slug: 'contact',
    title: 'Nous contacter',
    description: 'Contactez l\'équipe de BTP-Compare.',
    lastUpdated: '1er juin 2026',
    sections: [
      {
        title: '1. Questions générales',
        content: [
          'Pour toute question sur nos analyses, nos recommandations, ou le fonctionnement du site : contact@btp-compare.fr',
          'Nous répondons généralement sous 48h ouvrées.',
        ],
      },
      {
        title: '2. Suggestions de logiciels à tester',
        content: [
          'Vous connaissez un logiciel BTP que nous n\'avons pas encore analysé ? Envoyez-nous le nom et un descriptif à contact@btp-compare.fr.',
          'Si nous recevons plusieurs demandes pour le même logiciel, nous l\'ajouterons à notre liste de tests.',
        ],
      },
      {
        title: '3. Demandes de nouveaux métiers',
        content: [
          'Vous êtes artisan dans un métier non couvert par nos analyses (couvreur, menuisier, etc.) ? Écrivez-nous avec vos problématiques spécifiques.',
          'Si nous recevons 5 demandes similaires, nous lançons une analyse dédiée.',
        ],
      },
      {
        title: '4. Corrections et mises à jour',
        content: [
          'Vous avez repéré une erreur factuelle dans l\'une de nos analyses ? Signalez-la nous. Nous corrigerons dans les 7 jours.',
          'Un logiciel a changé de tarif ou de fonctionnalité ? Informez-nous pour que nous mettions à jour notre analyse.',
        ],
      },
      {
        title: '5. Partenariats',
        content: [
          'Vous êtes éditeur de logiciel BTP et souhaitez être analysé par notre équipe ? Écrivez-nous à contact@btp-compare.fr.',
          'Note importante : nous testons tous les logiciels dans les mêmes conditions, avec les mêmes critères. Nous n\'acceptons aucun paiement pour une analyse favorable.',
        ],
      },
    ],
  },
];
