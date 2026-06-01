// data/metiers.ts

export const metiers = [
  {
    slug: "plombier",
    nom: "Plombier",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop&q=80",
    intro: "En 2026, un plombier passe en moyenne 30% de son temps non pas à réparer des fuites, mais à faire des devis et à courir après les impayés. Entre les urgences de dépannage et les chantiers de rénovation, la gestion administrative est le premier facteur de faillite chez les artisans plombiers indépendants.",
    probleme: "Facturation urgente et bibliothèque de prix outillage",
    criteres: ["Rapidité de facturation", "Bibliothèque de prix (cuivre, PVC)", "Relance automatique"],
    verdict_obat: "Pour un plombier, la bibliothèque de prix intégrée d'Obat est un gain de temps massif. Fini de chercher le prix du mètre de cuivre sur internet, tout est pré-rempli.",
    verdict_axonaut: "Si vous avez 3 employés plombiers, Axonaut permet de suivre quel technicien est sur quel chantier et de facturer à la bonne personne."
  },
  {
    slug: "electricien",
    nom: "Électricien",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a302d?w=800&h=600&fit=crop&q=80",
    intro: "L'électricien fait face à un défi unique : la complexité des devis. Entre les tableaux électriques, les mises aux normes NFC 15-100 et les équipements domotiques, un devis peut vite faire 15 pages. Le logiciel doit être capable de gérer des bibliothèques d'ouvrages complexes.",
    probleme: "Devis rapides pour dépannage et normes NFC 15-100",
    criteres: ["Gestion des ouvrages complexes", "Mode hors-ligne (sous-sols)", "Signature électronique"],
    verdict_obat: "Obat gère bien les bibliothèques standards, mais manque parfois de finesse pour les gros chantiers tertiaires en électricité.",
    verdict_axonaut: "Axonaut brille par sa capacité à gérer des projets longs et à suivre la rentabilité par chantier électrique sur plusieurs mois."
  },
  {
    slug: "macon",
    nom: "Maçon",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&q=80",
    intro: "La maçonnerie est le métier des gros chantiers et des situations de travaux. Un maçon ne facture pas toujours à la fin, il facture à l'avancement. Le logiciel doit impérativement gérer les acomptes, les retenues de garantie et les situations de travaux mensuelles.",
    probleme: "Gestion des situations de travaux et suivi de chantier",
    criteres: ["Situations de travaux", "Gestion des stocks (ciment, parpaing)", "Suivi de marge"],
    verdict_obat: "C'est le point fort d'Obat : la gestion des situations de travaux et des acomptes est native et extrêmement simple à mettre en place pour un maçon.",
    verdict_axonaut: "Axonaut est plus lourd à configurer pour les situations de travaux spécifiques au BTP, il demande plus de paramétrage initial."
  }
];

export const logiciels = {
  obat: {
    nom: "Obat",
    note: "4.9/5",
    lien: "https://obat.com/?ref=btp_compare",
    logo: "🟢",
    point_fort: "Bibliothèque de prix intégrée (Batichiffrage)",
    point_faible: "Pas de mode hors-ligne sur les chantiers sans réseau"
  },
  axonaut: {
    nom: "Axonaut",
    note: "4.7/5",
    lien: "https://axonaut.com/?ref=btp_compare",
    logo: "🔵",
    point_fort: "CRM + Gestion complète pour équipes",
    point_faible: "Moins spécialisé sur le métré technique pur"
  }
};
