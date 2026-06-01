'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, CheckCircle } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: { text: string; value: 'obat' | 'axonaut' }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: 'Quelle est la taille de votre entreprise ?',
    options: [
      { text: 'Je travaille seul ou avec 1 employé', value: 'obat' },
      { text: 'J\'ai une équipe de 3 à 10 personnes', value: 'axonaut' },
    ],
  },
  {
    id: 2,
    question: 'Quel est votre besoin principal ?',
    options: [
      { text: 'Facturation rapide et bibliothèques de prix', value: 'obat' },
      { text: 'Gestion complète + CRM + Suivi de projets', value: 'axonaut' },
    ],
  },
  {
    id: 3,
    question: 'Travaillez-vous souvent sur des chantiers sans réseau ?',
    options: [
      { text: 'Rarement, j\'ai presque toujours du réseau', value: 'obat' },
      { text: 'Oui, mais je peux attendre d\'avoir du réseau pour facturer', value: 'axonaut' },
    ],
  },
];

export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<('obat' | 'axonaut')[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (value: 'obat' | 'axonaut') => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getResult = () => {
    const obatCount = answers.filter((a) => a === 'obat').length;
    const axonautCount = answers.filter((a) => a === 'axonaut').length;
    return obatCount >= axonautCount ? 'obat' : 'axonaut';
  };

  const reset = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  return (
    <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        {!showResult ? (
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Question {currentQuestion + 1} / {questions.length}
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              {questions[currentQuestion].question}
            </h3>

            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswer(option.value)}
                  className="w-full text-left p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 dark:text-gray-100 font-medium">{option.text}</span>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-500 transition-colors" />
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Votre logiciel idéal : {getResult() === 'obat' ? 'Obat' : 'Axonaut'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {getResult() === 'obat'
                ? 'Obat est parfait pour votre profil : facturation rapide et bibliothèques de prix intégrées.'
                : 'Axonaut correspond à vos besoins : gestion complète pour équipes en croissance.'}
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href={getResult() === 'obat' ? 'https://obat.com/?ref=btp_compare' : 'https://axonaut.com/?ref=btp_compare'}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all"
              >
                Voir l'offre
              </a>
              <button
                onClick={reset}
                className="border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Refaire le quiz
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
