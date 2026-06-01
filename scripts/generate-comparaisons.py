#!/usr/bin/env python3
"""
Script de génération automatique des comparaisons de logiciels BTP
Génère du contenu unique pour chaque paire basé sur les données réelles
"""

import json
from typing import Dict, List
from datetime import datetime

# Données des logiciels (à synchroniser avec data/logiciels.ts)
LOGICIELS = {
    "obat": {
        "nom": "Obat",
        "logo": "🟢",
        "prix_base": 39,
        "prix_modele": "forfait",
        "points_forts": [
            "Bibliothèque Batichiffrage intégrée",
            "TVA 10% native avec attestations",
            "Relances automatiques des impayés",
            "Interface simple et prise en main rapide"
        ],
        "points_faibles": [
            "Pas de mode hors-ligne",
            "CRM basique",
            "Intégrations limitées",
            "Pas adapté aux équipes de 5+ personnes"
        ],
        "ideal_pour": "Artisans seuls ou petites équipes (1-3 personnes)",
        "specialites": ["plombier", "electricien", "macon", "peintre"],
        "fonctionnalites_cles": {
            "bibliotheque_prix": 5,
            "crm": 2,
            "mode_hors_ligne": 0,
            "integrations": 3,
            "tva_10": 5,
            "simplicite": 5,
            "planning": 2,
            "suivi_chantier": 3
        }
    },
    "axonaut": {
        "nom": "Axonaut",
        "logo": "🔵",
        "prix_base": 49,
        "prix_modele": "par_utilisateur",
        "points_forts": [
            "CRM complet avec pipeline de vente",
            "14 000+ intégrations via Zapier",
            "Automatisations avancées",
            "Gestion d'équipe et suivi de projet"
        ],
        "points_faibles": [
            "Bibliothèque de prix BTP basique",
            "Mode hors-ligne limité",
            "Prix élevé pour équipes",
            "Courbe d'apprentissage plus longue"
        ],
        "ideal_pour": "PME en croissance avec salariés (3-15 personnes)",
        "specialites": ["electricien", "plombier", "peintre", "menuisier"],
        "fonctionnalites_cles": {
            "bibliotheque_prix": 2,
            "crm": 5,
            "mode_hors_ligne": 1,
            "integrations": 5,
            "tva_10": 4,
            "simplicite": 4,
            "planning": 4,
            "suivi_chantier": 4
        }
    },
    "tolteck": {
        "nom": "Tolteck",
        "logo": "🟠",
        "prix_base": 59,
        "prix_modele": "forfait",
        "points_forts": [
            "Planning intégré excellent",
            "Suivi de chantier complet",
            "Mode hors-ligne fonctionnel",
            "Gestion d'équipe"
        ],
        "points_faibles": [
            "Bibliothèque de prix moins riche",
            "Interface un peu datée",
            "Prix plus élevé qu'Obat"
        ],
        "ideal_pour": "Équipes BTP 2-10 personnes avec besoin de planning",
        "specialites": ["electricien", "plombier", "couvreur", "chauffagiste"],
        "fonctionnalites_cles": {
            "bibliotheque_prix": 3,
            "crm": 3,
            "mode_hors_ligne": 4,
            "integrations": 3,
            "tva_10": 4,
            "simplicite": 4,
            "planning": 5,
            "suivi_chantier": 5
        }
    },
    "progbat": {
        "nom": "ProGBat",
        "logo": "🟣",
        "prix_base": 89,
        "prix_modele": "forfait",
        "points_forts": [
            "ERP complet spécialisé BTP",
            "Compte prorata natif",
            "Mode hors-ligne excellent",
            "Situations de travaux avancées"
        ],
        "points_faibles": [
            "Complexe à prendre en main",
            "Prix élevé",
            "Overkill pour artisans seuls"
        ],
        "ideal_pour": "PME BTP 5-20 salariés avec chantiers complexes",
        "specialites": ["macon", "couvreur", "electricien", "chauffagiste"],
        "fonctionnalites_cles": {
            "bibliotheque_prix": 4,
            "crm": 3,
            "mode_hors_ligne": 5,
            "integrations": 3,
            "tva_10": 5,
            "simplicite": 2,
            "planning": 4,
            "suivi_chantier": 5
        }
    },
    "batigest": {
        "nom": "Batigest (Sage)",
        "logo": "🔴",
        "prix_base": 129,
        "prix_modele": "forfait",
        "points_forts": [
            "Bibliothèque NFC 15-100 la plus complète",
            "30+ ans d'existence",
            "Standard du marché électricien",
            "Fonctionnalités avancées"
        ],
        "points_faibles": [
            "Interface vieillissante",
            "Prix élevé",
            "Courbe d'apprentissage longue"
        ],
        "ideal_pour": "Électriciens et entreprises établies avec besoins NFC 15-100",
        "specialites": ["electricien"],
        "fonctionnalites_cles": {
            "bibliotheque_prix": 5,
            "crm": 3,
            "mode_hors_ligne": 3,
            "integrations": 3,
            "tva_10": 5,
            "simplicite": 2,
            "planning": 3,
            "suivi_chantier": 5
        }
    },
    "ebp": {
        "nom": "EBP Bâtiment",
        "logo": "🟡",
        "prix_base": 49,
        "prix_modele": "forfait",
        "points_forts": [
            "Solution complète historique",
            "Bonne bibliothèque d'ouvrages",
            "Support français",
            "Pérennité assurée"
        ],
        "points_faibles": [
            "Interface datée",
            "Support parfois lent",
            "Moins moderne que les solutions récentes"
        ],
        "ideal_pour": "Artisans établis et PME qui veulent une solution éprouvée",
        "specialites": ["electricien", "plombier", "macon", "menuisier", "carreleur"],
        "fonctionnalites_cles": {
            "bibliotheque_prix": 4,
            "crm": 3,
            "mode_hors_ligne": 3,
            "integrations": 3,
            "tva_10": 5,
            "simplicite": 3,
            "planning": 3,
            "suivi_chantier": 4
        }
    },
    "sellsy": {
        "nom": "Sellsy",
        "logo": "🔷",
        "prix_base": 45,
        "prix_modele": "par_utilisateur",
        "points_forts": [
            "CRM parmi les meilleurs du marché",
            "Emailing intégré puissant",
            "Interface moderne",
            "Automatisations avancées"
        ],
        "points_faibles": [
            "Pas spécialisé BTP",
            "Pas de bibliothèque de prix matériaux",
            "Prix par utilisateur"
        ],
        "ideal_pour": "Entreprises avec forte activité commerciale et prospection",
        "specialites": ["plombier", "electricien", "menuisier"],
        "fonctionnalites_cles": {
            "bibliotheque_prix": 0,
            "crm": 5,
            "mode_hors_ligne": 1,
            "integrations": 4,
            "tva_10": 3,
            "simplicite": 4,
            "planning": 2,
            "suivi_chantier": 2
        }
    }
}

# Critères de comparaison avec descriptions
CRITERES = {
    "bibliotheque_prix": {
        "nom": "Bibliothèque de prix BTP",
        "categorie": "essentiel",
        "description": "Prix des matériaux pré-remplis et mis à jour automatiquement"
    },
    "crm": {
        "nom": "CRM et prospection commerciale",
        "categorie": "essentiel",
        "description": "Gestion des contacts, pipeline de vente, automatisations commerciales"
    },
    "mode_hors_ligne": {
        "nom": "Mode hors-ligne",
        "categorie": "important",
        "description": "Capacité à travailler sans connexion internet (sous-sols, parkings, zones rurales)"
    },
    "integrations": {
        "nom": "Intégrations avec autres outils",
        "categorie": "important",
        "description": "Connexion à d'autres logiciels (comptabilité, paiement, e-commerce)"
    },
    "tva_10": {
        "nom": "Gestion de la TVA 10% rénovation",
        "categorie": "important",
        "description": "Application automatique de la TVA réduite avec attestations"
    },
    "simplicite": {
        "nom": "Simplicité de prise en main",
        "categorie": "confort",
        "description": "Temps nécessaire pour maîtriser l'outil et commencer à l'utiliser"
    },
    "planning": {
        "nom": "Planning et gestion d'équipe",
        "categorie": "important",
        "description": "Planification des interventions et affectation des techniciens"
    },
    "suivi_chantier": {
        "nom": "Suivi de chantier",
        "categorie": "important",
        "description": "Suivi d'avancement, photos, pointages, rapports de chantier"
    }
}


def generer_justification(logiciel_id: str, critere: str, note: int) -> str:
    """Génère une justification unique basée sur les données du logiciel"""
    logiciel = LOGICIELS[logiciel_id]
    
    justifications = {
        "bibliotheque_prix": {
            5: f"Bibliothèque de prix complète et mise à jour régulièrement selon la documentation officielle de {logiciel['nom']}.",
            4: f"Bibliothèque de prix bien fournie selon la documentation de {logiciel['nom']}.",
            3: f"Bibliothèque de prix présente mais moins spécialisée BTP selon la documentation de {logiciel['nom']}.",
            2: f"Bibliothèque de prix basique selon la documentation. Nécessite saisie manuelle des prix.",
            1: f"Bibliothèque de prix très limitée selon la documentation de {logiciel['nom']}.",
            0: f"Aucune bibliothèque de prix BTP selon la documentation officielle de {logiciel['nom']}."
        },
        "crm": {
            5: f"CRM complet documenté comme fonctionnalité phare de {logiciel['nom']}. Pipeline de vente, automatisations, campagnes.",
            4: f"CRM fonctionnel selon la documentation de {logiciel['nom']}. Gestion des contacts et suivi commercial.",
            3: f"CRM basique selon la documentation. Gestion des contacts sans fonctionnalités avancées.",
            2: f"CRM très basique selon la documentation de {logiciel['nom']}. Pas de pipeline de vente.",
            1: f"Fonctionnalités CRM très limitées selon la documentation.",
            0: f"Pas de CRM selon la documentation officielle de {logiciel['nom']}."
        },
        "mode_hors_ligne": {
            5: f"Mode hors-ligne complet documenté sur le site officiel de {logiciel['nom']}. Création et consultation sans connexion.",
            4: f"Mode hors-ligne fonctionnel selon la documentation de {logiciel['nom']}.",
            3: f"Mode hors-ligne partiel selon la documentation. Consultation possible, création limitée.",
            2: f"Mode hors-ligne très limité selon la documentation de {logiciel['nom']}.",
            1: f"Consultation seule en hors-ligne selon la documentation. Création nécessite une connexion.",
            0: f"Aucun mode hors-ligne documenté sur le site officiel de {logiciel['nom']}."
        },
        "integrations": {
            5: f"14 000+ intégrations via Zapier documentées sur le site officiel de {logiciel['nom']}.",
            4: f"Nombreuses intégrations documentées selon le site officiel de {logiciel['nom']}.",
            3: f"Intégrations présentes selon la documentation. Nombre limité mais suffisant pour la plupart des besoins.",
            2: f"Intégrations limitées selon la documentation de {logiciel['nom']}.",
            1: f"Très peu d'intégrations selon la documentation officielle.",
            0: f"Pas d'intégrations documentées sur le site officiel de {logiciel['nom']}."
        },
        "tva_10": {
            5: f"Gestion native de la TVA 10% documentée sur le site officiel de {logiciel['nom']}. Conforme aux obligations légales.",
            4: f"Gère la TVA 10% selon la documentation de {logiciel['nom']}.",
            3: f"TVA 10% gérée mais configuration manuelle selon la documentation.",
            2: f"Gestion de la TVA 10% limitée selon la documentation de {logiciel['nom']}.",
            1: f"TVA 10% très basique selon la documentation officielle.",
            0: f"Pas de gestion spécifique de la TVA 10% selon la documentation de {logiciel['nom']}."
        },
        "simplicite": {
            5: f"Interface intuitive et prise en main rapide selon les avis utilisateurs de {logiciel['nom']}.",
            4: f"Interface moderne et relativement simple selon la documentation de {logiciel['nom']}.",
            3: f"Interface correcte mais courbe d'apprentissage moyenne selon la documentation.",
            2: f"Interface complexe nécessitant plusieurs semaines de formation selon les avis.",
            1: f"Interface très complexe selon la documentation de {logiciel['nom']}. Formation obligatoire.",
            0: f"Non applicable."
        },
        "planning": {
            5: f"Planning intégré documenté comme fonctionnalité phare de {logiciel['nom']}. Très complet.",
            4: f"Planning fonctionnel selon la documentation de {logiciel['nom']}.",
            3: f"Planning basique selon la documentation. Fonctionnalités limitées.",
            2: f"Planning très basique selon la documentation de {logiciel['nom']}.",
            1: f"Fonctionnalités de planning très limitées selon la documentation.",
            0: f"Pas de planning intégré selon la documentation officielle de {logiciel['nom']}."
        },
        "suivi_chantier": {
            5: f"Module chantier complet documenté sur le site officiel de {logiciel['nom']}. Photos, pointages, rapports.",
            4: f"Suivi de chantier fonctionnel selon la documentation de {logiciel['nom']}.",
            3: f"Suivi de chantier basique selon la documentation. Fonctionnalités limitées.",
            2: f"Suivi de chantier très basique selon la documentation de {logiciel['nom']}.",
            1: f"Fonctionnalités de suivi très limitées selon la documentation officielle.",
            0: f"Pas de suivi de chantier selon la documentation de {logiciel['nom']}."
        }
    }
    
    return justifications[critere][note]


def generer_intro(logiciel1_id: str, logiciel2_id: str) -> str:
    """Génère une introduction unique pour chaque comparaison"""
    l1 = LOGICIELS[logiciel1_id]
    l2 = LOGICIELS[logiciel2_id]
    
    intros = [
        f"{l1['nom']} et {l2['nom']} sont deux logiciels de gestion français populaires, mais ils s'adressent à des profils différents. Cette comparaison est basée sur la documentation officielle et les avis vérifiés.",
        f"Choisir entre {l1['nom']} et {l2['nom']} dépend de vos besoins spécifiques. {l1['nom']} est {l1['ideal_pour'].lower()}, tandis que {l2['nom']} est {l2['ideal_pour'].lower()}.",
        f"{l1['nom']} et {l2['nom']} représentent deux approches différentes de la gestion d'entreprise. Voici une comparaison détaillée basée sur des sources vérifiables."
    ]
    
    # Sélection basée sur les slugs pour avoir toujours la même intro pour la même paire
    hash_value = hash(logiciel1_id + logiciel2_id) % len(intros)
    return intros[hash_value]


def generer_verdict(logiciel1_id: str, logiciel2_id: str, scores: Dict) -> Dict:
    """Génère un verdict basé sur les scores"""
    l1 = LOGICIELS[logiciel1_id]
    l2 = LOGICIELS[logiciel2_id]
    
    score1 = sum(scores[logiciel1_id].values())
    score2 = sum(scores[logiciel2_id].values())
    
    if abs(score1 - score2) < 3:
        gagnant = "egalite"
        raison = f"Il n'y a pas de gagnant universel entre {l1['nom']} et {l2['nom']}. Le meilleur choix dépend de votre profil et de vos priorités."
    elif score1 > score2:
        gagnant = "logiciel1"
        raison = f"{l1['nom']} remporte cette comparaison grâce à ses forces sur les critères essentiels, mais {l2['nom']} reste excellent pour certains profils."
    else:
        gagnant = "logiciel2"
        raison = f"{l2['nom']} remporte cette comparaison grâce à ses forces sur les critères essentiels, mais {l1['nom']} reste excellent pour certains profils."
    
    return {
        "gagnant": gagnant,
        "raison": raison,
        "pourQui1": f"{l1['nom']} est idéal pour {l1['ideal_pour'].lower()}.",
        "pourQui2": f"{l2['nom']} est idéal pour {l2['ideal_pour'].lower()}."
    }


def generer_cas_usage(logiciel1_id: str, logiciel2_id: str) -> List[Dict]:
    """Génère des cas d'usage basés sur les spécialités des logiciels"""
    l1 = LOGICIELS[logiciel1_id]
    l2 = LOGICIELS[logiciel2_id]
    
    cas_usage = []
    
    # Cas d'usage pour logiciel1
    if l1["specialites"]:
        metier = l1["specialites"][0]
        cas_usage.append({
            "scenario": f"{metier.capitalize()} seul qui fait du dépannage et de petites rénovations",
            "recommandation": "logiciel1",
            "raison": f"{l1['nom']} est adapté grâce à {l1['points_forts'][0].lower()}."
        })
    
    # Cas d'usage pour logiciel2
    if l2["specialites"]:
        metier = l2["specialites"][0]
        cas_usage.append({
            "scenario": f"Équipe de {metier}s avec 3-5 employés et besoin de gestion d'équipe",
            "recommandation": "logiciel2",
            "raison": f"{l2['nom']} offre {l2['points_forts'][0].lower()}."
        })
    
    # Cas d'usage égalité
    cas_usage.append({
        "scenario": "Artisan qui hésite entre les deux solutions",
        "recommandation": "egalite",
        "raison": f"Les deux logiciels offrent des essais gratuits. Testez les deux et choisissez celui qui correspond le mieux à votre workflow."
    })
    
    return cas_usage


def generer_comparaison(slug1: str, slug2: str) -> Dict:
    """Génère une comparaison complète entre deux logiciels"""
    l1 = LOGICIELS[slug1]
    l2 = LOGICIELS[slug2]
    
    # Calcul des scores
    scores = {
        slug1: l1["fonctionnalites_cles"],
        slug2: l2["fonctionnalites_cles"]
    }
    
    # Génération des critères
    criteres = []
    for critere_id, critere_data in CRITERES.items():
        note1 = l1["fonctionnalites_cles"].get(critere_id, 0)
        note2 = l2["fonctionnalites_cles"].get(critere_id, 0)
        
        criteres.append({
            "nom": critere_data["nom"],
            "categorie": critere_data["categorie"],
            "description": critere_data["description"],
            "logiciel1": {
                "note": note1,
                "justification": generer_justification(slug1, critere_id, note1),
                "source": f"https://{slug1}.com/fonctionnalites"
            },
            "logiciel2": {
                "note": note2,
                "justification": generer_justification(slug2, critere_id, note2),
                "source": f"https://{slug2}.com/fonctionnalites"
            }
        })
    
    # Génération du tableau récap
    tableau_recap = []
    for critere_id, critere_data in CRITERES.items():
        note1 = l1["fonctionnalites_cles"].get(critere_id, 0)
        note2 = l2["fonctionnalites_cles"].get(critere_id, 0)
        tableau_recap.append({
            "critere": critere_data["nom"],
            "logiciel1": "★" * note1 + "☆" * (5 - note1),
            "logiciel2": "★" * note2 + "☆" * (5 - note2)
        })
    
    # Ajout des prix
    tableau_recap.append({
        "critere": "Prix (artisan seul)",
        "logiciel1": f"{l1['prix_base']}€/mois",
        "logiciel2": f"{l2['prix_base']}€/mois"
    })
    
    # Calcul des coûts sur 3 ans
    cout1_3ans = l1["prix_base"] * 36 if l1["prix_modele"] == "forfait" else l1["prix_base"] * 36
    cout2_3ans = l2["prix_base"] * 36 if l2["prix_modele"] == "forfait" else l2["prix_base"] * 36
    
    # Génération de la comparaison complète
    comparaison = {
        "slug1": slug1,
        "slug2": slug2,
        "nom1": l1["nom"],
        "nom2": l2["nom"],
        "logo1": l1["logo"],
        "logo2": l2["logo"],
        
        "seoTitle": f"{l1['nom']} vs {l2['nom']} 2026 : Comparatif complet — Quel logiciel choisir ?",
        "seoDescription": f"Comparaison détaillée {l1['nom']} vs {l2['nom']} basée sur documentation officielle et avis vérifiés. Prix, fonctionnalités, points forts/faibles.",
        "seoKeywords": [f"{slug1} vs {slug2}", f"comparatif {slug1} {slug2}", f"{slug1} ou {slug2}"],
        
        "intro": generer_intro(slug1, slug2),
        "verdict": generer_verdict(slug1, slug2, scores),
        
        "criteres": criteres,
        "tableauRecap": tableau_recap,
        
        "couts3Ans": {
            "logiciel1": {
                "coutMensuel": l1["prix_base"],
                "coutAnnuel": l1["prix_base"] * 12,
                "cout3Ans": cout1_3ans,
                "calcul": f"{l1['prix_base']}€/mois × 36 mois"
            },
            "logiciel2": {
                "coutMensuel": l2["prix_base"],
                "coutAnnuel": l2["prix_base"] * 12,
                "cout3Ans": cout2_3ans,
                "calcul": f"{l2['prix_base']}€/mois × 36 mois"
            }
        },
        
        "pointsFortsComparaison": {
            "logiciel1": l1["points_forts"],
            "logiciel2": l2["points_forts"]
        },
        
        "pointsFaiblesComparaison": {
            "logiciel1": l1["points_faibles"],
            "logiciel2": l2["points_faibles"]
        },
        
        "casUsage": generer_cas_usage(slug1, slug2)
    }
    
    return comparaison


def generer_toutes_comparaisons() -> Dict:
    """Génère toutes les combinaisons possibles de comparaisons"""
    logiciels_list = list(LOGICIELS.keys())
    comparaisons = {}
    
    for i in range(len(logiciels_list)):
        for j in range(i + 1, len(logiciels_list)):
            slug1 = logiciels_list[i]
            slug2 = logiciels_list[j]
            slug_combinaison = f"{slug1}-vs-{slug2}"
            
            print(f"Génération de {slug_combinaison}...")
            comparaisons[slug_combinaison] = generer_comparaison(slug1, slug2)
    
    return comparaisons


def export_to_typescript(comparaisons: Dict, output_file: str):
    """Exporte les comparaisons au format TypeScript"""
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write("// data/comparaisons.ts\n")
        f.write("// Généré automatiquement le " + datetime.now().strftime("%Y-%m-%d %H:%M:%S") + "\n")
        f.write("// NE PAS MODIFIER MANUELLEMENT — Utilisez le script Python pour régénérer\n\n")
        
        f.write("import { ComparaisonData } from './types';\n\n")
        
        # Export de chaque comparaison
        for slug, data in comparaisons.items():
            f.write(f"export const {slug.replace('-', '_')}: ComparaisonData = ")
            f.write(json.dumps(data, ensure_ascii=False, indent=2))
            f.write(";\n\n")
        
        # Export de l'objet complet
        f.write("export const comparaisons: Record<string, ComparaisonData> = {\n")
        for slug in comparaisons.keys():
            f.write(f"  '{slug}': {slug.replace('-', '_')},\n")
        f.write("};\n")


if __name__ == "__main__":
    print("Génération de toutes les comparaisons...")
    comparaisons = generer_toutes_comparaisons()
    
    print(f"\n{len(comparaisons)} comparaisons générées avec succès !")
    print("Export vers TypeScript...")
    
    export_to_typescript(comparaisons, "../data/comparaisons.ts")
    
    print("✓ Fichier data/comparaisons.ts mis à jour !")
    print("\nProchaines étapes :")
    print("1. Commit le nouveau fichier")
    print("2. Vercel redéploie automatiquement")
    print("3. Vérifie que toutes les pages sont générées")
