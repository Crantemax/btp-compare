'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, CheckCircle, ArrowLeft, Info } from 'lucide-react';

// ═══════════════════════════════════════════════════════
// QUESTIONS DU QUIZ
// ═══════════════════════════════════════════════════════

interface QuizOption {
  text: string;
  scores: {
    obat: number;
    axonaut: number;
    tolteck: number;
    progbat: number;
    batigest: number;
    ebp: number;
    sellsy: number;
  };
}

interface QuizQuestion {
  id: number;
  question: string;
  explication: string;
  options: QuizOption[];
}

const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "Quelle est la taille de votre entreprise ?",
    explication: "La taille de votre équipe détermine le type de logiciel adapté : outils simples pour solo, solutions collaboratives pour équipes.",
    options: [
      { text: "Je travaille seul", scores: { obat: 5, axonaut: 1, tolteck: 2, progbat: 1, batigest: 1, ebp: 3, sellsy: 1 } },
      { text: "J'ai 1-2 employés", scores: { obat: 4, axonaut: 3, tolteck: 4, progbat: 2, batigest: 2, ebp: 4, sellsy: 3 } },
      { text: "J'ai 3-10 employés", scores: { obat: 2, axonaut: 5, tolteck: 5, progbat: 4, batigest: 4, ebp: 4, sellsy: 5 } },
      { text: "J'ai plus de 10 employés", scores: { obat: 1, axonaut: 4, tolteck: 3, progbat: 5, batigest: 5, ebp: 3, sellsy: 4 } }
    ]
  },
  {
    id: 2,
    question: "Quel est votre type d'activité principale ?",
    explication: "Le type d'activité influence les fonctionnalités nécessaires : devis rapides, suivi de chantier, prospection commerciale.",
    options: [
      { text: "Dépannage et petites interventions", scores: { obat: 5, axonaut: 2, tolteck: 3, progbat: 1, batigest: 2, ebp: 3, sellsy: 2 } },
      { text: "Rénovation (chantiers 1-4 semaines)", scores: { obat: 4, axonaut: 4, tolteck: 5, progbat: 4, batigest: 4, ebp: 4, sellsy: 3 } },
      { text: "Chantiers longs (1-6 mois)", scores: { obat: 2, axonaut: 4, tolteck: 4, progbat: 5, batigest: 5, ebp: 4, sellsy: 2 } },
      { text: "Mix de tout + prospection active", scores: { obat: 3, axonaut: 5, tolteck: 3, progbat: 3, batigest: 3, ebp: 3, sellsy: 5 } }
    ]
  },
  {
    id: 3,
    question: "Quel est votre budget mensuel pour un logiciel ?",
    explication: "Le budget détermine la gamme de logiciels accessibles. Les outils simples démarrent à ~39€/mois, les ERP complets peuvent dépasser 200€/mois.",
    options: [
      { text: "Moins de 50€/mois", scores: { obat: 5, axonaut: 1, tolteck: 4, progbat: 1, batigest: 1, ebp: 4, sellsy: 2 } },
      { text: "50-100€/mois", scores: { obat: 4, axonaut: 3, tolteck: 5, progbat: 3, batigest: 2, ebp: 5, sellsy: 3 } },
      { text: "100-250€/mois", scores: { obat: 3, axonaut: 5, tolteck: 4, progbat: 5, batigest: 4, ebp: 3, sellsy: 5 } },
      { text: "Plus de 250€/mois", scores: { obat: 2, axonaut: 4, tolteck: 3, progbat: 5, batigest: 5, ebp: 2, sellsy: 4 } }
    ]
  },
  {
    id: 4,
    question: "Travaillez-vous souvent dans des zones sans réseau mobile ?",
    explication: "Sous-sols, parkings, zones rurales : le mode hors-ligne est critique pour certains métiers.",
    options: [
      { text: "Oui, c'est critique pour mon activité", scores: { obat: 0, axonaut: 1, tolteck: 4, progbat: 5, batigest: 3, ebp: 2, sellsy: 0 } },
      { text: "Parfois, ce serait un plus", scores: { obat: 2, axonaut: 3, tolteck: 5, progbat: 5, batigest: 4, ebp: 3, sellsy: 1 } },
      { text: "Rarement, j'ai presque toujours du réseau", scores: { obat: 5, axonaut: 5, tolteck: 4, progbat: 3, batigest: 4, ebp: 4, sellsy: 5 } },
      { text: "Jamais, je travaille toujours en zone couverte", scores: { obat: 5, axonaut: 5, tolteck: 3, progbat: 2, batigest: 4, ebp: 5, sellsy: 5 } }
    ]
  },
  {
    id: 5,
    question: "La prospection commerciale est-elle importante pour vous ?",
    explication: "Si vous faites beaucoup de prospection (syndics, agences, architectes), un CRM puissant fait la différence.",
    options: [
      { text: "Oui, c'est une priorité absolue", scores: { obat: 2, axonaut: 5, tolteck: 2, progbat: 2, batigest: 2, ebp: 3, sellsy: 5 } },
      { text: "Oui, c'est important", scores: { obat: 3, axonaut: 5, tolteck: 3, progbat: 3, batigest: 3, ebp: 4, sellsy: 5 } },
      { text: "Peu, je travaille surtout par recommandation", scores: { obat: 5, axonaut: 3, tolteck: 5, progbat: 4, batigest: 4, ebp: 5, sellsy: 2 } },
      { text: "Pas du tout, mes clients viennent d'eux-mêmes", scores: { obat: 5, axonaut: 2, tolteck: 5, progbat: 5, batigest: 5, ebp: 5, sellsy: 1 } }
    ]
  },
  {
    id: 6,
    question: "Quelle est votre priorité absolue dans un logiciel ?",
    explication: "Chaque logiciel a ses forces. Votre priorité détermine le meilleur choix.",
    options: [
      { text: "La simplicité et la rapidité de prise en main", scores: { obat: 5, axonaut: 3, tolteck: 4, progbat: 1, batigest: 1, ebp: 4, sellsy: 4 } },
      { text: "Le suivi de chantier et le planning", scores: { obat: 2, axonaut: 4, tolteck: 5, progbat: 5, batigest: 5, ebp: 3, sellsy: 2 } },
      { text: "La puissance fonctionnelle (gros chantiers)", scores: { obat: 2, axonaut: 3, tolteck: 3, progbat: 5, batigest: 5, ebp: 3, sellsy: 2 } },
      { text: "Le CRM et la prospection commerciale", scores: { obat: 2, axonaut: 5, tolteck: 2, progbat: 2, batigest: 2, ebp: 3, sellsy: 5 } }
    ]
  },
  {
    id: 7,
    question: "Quel niveau de complexité acceptez-vous ?",
    explication: "Certains logiciels puissants nécessitent plusieurs semaines de formation. D'autres se prennent en main en quelques heures.",
    options: [
      { text: "Le plus simple possible (prise en main < 1 jour)", scores: { obat: 5, axonaut: 3, tolteck: 4, progbat: 1, batigest: 1, ebp: 3, sellsy: 4 } },
      { text: "Simple mais complet (prise en main < 1 semaine)", scores: { obat: 4, axonaut: 4, tolteck: 5, progbat: 2, batigest: 2, ebp: 4, sellsy: 5 } },
      { text: "Complet même si complexe (prise en main 1-2 mois)", scores: { obat: 2, axonaut: 4, tolteck: 3, progbat: 5, batigest: 5, ebp: 3, sellsy: 3 } },
      { text: "Je veux le plus puissant, peu importe la complexité", scores: { obat: 1, axonaut: 3, tolteck: 2, progbat: 5, batigest: 5, ebp: 2, sellsy: 2 } }
    ]
  }
];

// ═══════════════════════════════════════════════════════
// MÉTADONNÉS DES LOGICIELS
// ═══════════════════════════════════════════════════════

interface LogicielInfo {
  nom: string;
  logo: string;
  description: string;
  idealPour: string;
  tarif: string;
  lien: string;
  couleur: string;
}

const logicielsInfo: Record<string, LogicielInfo> = {
  obat: {
    nom: "Obat",
    logo: "🟢",
    description: "Logiciel simple avec bibliothèque de prix Batichiffrage intégrée. Parfait pour artisans seuls.",
    idealPour: "Artisans seuls ou petites équipes (1-3 personnes)",
    tarif: "À partir de 39€/mois",
    lien: "https://obat.com/?ref=btp_compare",
    couleur: "green"
  },
  axonaut: {
    nom: "Axonaut",
    logo: "🔵",
    description: "CRM puissant + gestion complète. Idéal pour équipes en croissance avec besoin de prospection.",
    idealPour: "PME avec 3-15 salariés, besoin CRM",
    tarif: "À partir de 49€/utilisateur/mois",
    lien: "https://axonaut.com/?a=ADE1CH12F6",
    couleur: "blue"
  },
  tolteck: {
    nom: "Tolteck",
    logo: "🟠",
    description: "Spécialiste BTP avec planning intégré et suivi de chantier. App mobile avec mode hors-ligne.",
    idealPour: "Équipes BTP 2-10 personnes, besoin planning",
    tarif: "À partir de 59€/mois",
    lien: "https://tolteck.com",
    couleur: "orange"
  },
  progbat: {
    nom: "ProGBat",
    logo: "🟣",
    description: "ERP complet spécialisé BTP avec situations de travaux et compte prorata natifs.",
    idealPour: "PME BTP 5-20 salariés, chantiers complexes",
    tarif: "À partir de 89€/mois",
    lien: "https://progbat.com",
    couleur: "purple"
  },
  batigest: {
    nom: "Batigest (Sage)",
    logo: "🔴",
    description: "Standard historique avec la meilleure bibliothèque NFC 15-100. Référence pour électriciens.",
    idealPour: "Entreprises BTP établies, chantiers complexes",
    tarif: "À partir de 129€/mois",
    lien: "https://sagebatiment.fr",
    couleur: "red"
  },
  ebp: {
    nom: "EBP Bâtiment",
    logo: "🟡",
    description: "Logiciel historique français, solution complète pour artisans et PME du bâtiment.",
    idealPour: "Artisans établis et PME",
    tarif: "À partir de 49€/mois",
    lien: "https://ebp.com",
    couleur: "yellow"
  },
  sellsy: {
    nom: "Sellsy",
    logo: "🔷",
    description: "CRM français parmi les meilleurs du marché + facturation. Pour entreprises commerciales.",
    idealPour: "Entreprises avec forte activité commerciale",
    tarif: "À partir de 45€/utilisateur/mois",
    lien: "https://sellsy.com",
    couleur: "indigo"
  }
};

// ═══════════════════════════════════════════════════════
// COMPOSANT PRINCIPAL
// ═══════════════════════════════════════════════════════

export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({
    obat: 0, axonaut: 0, tolteck: 0, progbat: 0, batigest: 0, ebp: 0, sellsy: 0
  });
  const [showResult, setShowResult] = useState(false);
  const [showExplication, setShowExplication] = useState(false);

  const handleAnswer = (option: QuizOption) => {
    const newScores = { ...scores };
    Object.keys(option.scores).forEach((key) => {
      newScores[key as keyof typeof newScores] += option.scores[key as keyof typeof option.scores];
    });
    setScores(newScores);
    setShowExplication(false);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 100);
    } else {
      setTimeout(() => setShowResult(true), 100);
    }
  };

  const getTopResults = () => {
    const sorted = Object.entries(scores)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3);
    return sorted.map(([key, score]) => ({
      key,
      score,
      maxScore: questions.length * 5,
      percentage: Math.round((score / (questions.length * 5)) * 100),
      info: logicielsInfo[key]
    }));
  };

  const reset = () => {
    setCurrentQuestion(0);
    setScores({ obat: 0, axonaut: 0, tolteck: 0, progbat: 0, batigest: 0, ebp: 0, sellsy: 0 });
    setShowResult(false);
    setShowExplication(false);
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowExplication(false);
    }
  };

  if (showResult) {
    const results = getTopResults();
    const winner = results[0];

    return (
      <div className="bg-card rounded-2xl border border-border p-8 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="text-center mb-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-foreground mb-2">
              Votre recommandation personnalisée
            </h3>
            <p className="text-muted-foreground">
              Basée sur vos 7 réponses, voici les 3 logiciels les plus adaptés à votre situation.
            </p>
          </div>

          {/* GAGNANT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`bg-${winner.info.couleur}-500/10 border-2 border-${winner.info.couleur}-500 rounded-xl p-6 mb-6`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="text-4xl">{winner.info.logo}</div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="text-2xl font-bold text-foreground">{winner.info.nom}</h4>
                    <span className={`text-xs bg-${winner.info.couleur}-500 text-white px-2 py-1 rounded-full font-semibold`}>
                      MEILLEUR MATCH
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{winner.info.idealPour}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-foreground">{winner.percentage}%</div>
                <div className="text-xs text-muted-foreground">compatibilité</div>
              </div>
            </div>
            <p className="text-foreground mb-4 leading-relaxed">{winner.info.description}</p>
            <div className="text-sm text-muted-foreground mb-4">
              <strong>Tarif :</strong> {winner.info.tarif}
            </div>
            <a
              href={winner.info.lien}
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-full bg-${winner.info.couleur}-500 text-white text-center py-3 rounded-lg font-semibold hover:bg-${winner.info.couleur}-600 transition-colors`}
            >
              Essayer {winner.info.nom}
            </a>
          </motion.div>

          {/* 2ème et 3ème */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {results.slice(1, 3).map((result, i) => (
              <motion.div
                key={result.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="bg-card rounded-xl border border-border p-5"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="text-3xl">{result.info.logo}</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground">{result.info.nom}</h4>
                    <p className="text-xs text-muted-foreground">{result.info.idealPour}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-foreground">{result.percentage}%</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{result.info.description}</p>
                <a
                  href={result.info.lien}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center py-2 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-accent transition-colors"
                >
                  Voir {result.info.nom}
                </a>
              </motion.div>
            ))}
          </div>

          {/* METHODOLOGIE */}
          <div className="bg-accent/50 rounded-lg p-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-start space-x-2">
              <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <p>
                <strong>Comment fonctionne ce quiz ?</strong> Chaque réponse attribue des points aux 7 logiciels analysés selon 5 dimensions : 
                taille équipe, type d'activité, budget, besoins fonctionnels et complexité acceptée. Les scores sont calculés sur la base des fonctionnalités documentées et des avis vérifiés.
              </p>
            </div>
          </div>

          <button
            onClick={reset}
            className="w-full py-3 rounded-lg border border-border text-foreground font-medium hover:bg-accent transition-colors"
          >
            Refaire le quiz
          </button>
        </motion.div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="bg-card rounded-2xl border border-border p-8 max-w-3xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          {/* PROGRESS */}
          <div className="mb-6">
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
              <div className="flex items-center space-x-2">
                {currentQuestion > 0 && (
                  <button onClick={goBack} className="flex items-center hover:text-foreground transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    Retour
                  </button>
                )}
              </div>
              <span>Question {currentQuestion + 1} / {questions.length}</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-foreground to-foreground/70 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* QUESTION */}
          <div className="mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              {question.question}
            </h3>
            <button
              onClick={() => setShowExplication(!showExplication)}
              className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Info className="w-4 h-4" />
              <span>{showExplication ? "Masquer" : "Pourquoi cette question ?"}</span>
            </button>
            {showExplication && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-2 text-sm text-muted-foreground bg-accent/50 rounded-lg p-3"
              >
                {question.explication}
              </motion.p>
            )}
          </div>

          {/* OPTIONS */}
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleAnswer(option)}
                className="w-full text-left p-4 rounded-xl border-2 border-border hover:border-foreground/30 hover:bg-accent transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-foreground font-medium">{option.text}</span>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
