'use client';

import { motion } from 'framer-motion';
import { ThemeToggle } from '../../components/theme-toggle';
import { ComparisonTable } from '../../components/comparison-table';
import { ROICalculator } from '../../components/roi-calculator';
import { Quiz } from '../../components/quiz';
import { metiers, logiciels } from '../../data/metiers';
import { ArrowLeft, Check, X, TrendingUp, Zap } from 'lucide-react';

export default function MetierPage({ params }: { params: { metier: string } }) {
  const data = metiers.find(m => m.slug === params.metier);
  
  if (!data) return <div>Métier non trouvé</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 transition-colors">
      
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              🏗️ BTP-Compare
            </a>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors">
                Accueil
              </a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* HERO IMAGE avec Parallax */}
      <div className="relative h-[500px] overflow-hidden pt-20">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          src={data.image}
          alt={data.nom}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="inline-block glass px-4 py-2 rounded-full mb-4">
                <span className="text-sm font-semibold text-purple-400">
                  📊 Comparatif {new Date().getFullYear()}
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-6xl font-extrabold text-white mb-4"
            >
              Quel logiciel pour {data.nom} ?
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-gray-300"
            >
              Analyse indépendante • Mis à jour en Juin 2026
            </motion.p>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* INTRODUCTION */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-8 mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Le défi administratif des {data.nom}s
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {data.intro}
          </p>
          <div className="glass rounded-xl p-6 border-l-4 border-purple-500">
            <div className="flex items-start">
              <Zap className="w-6 h-6 text-purple-600 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-purple-600 dark:text-purple-400 mb-2">Problématique majeure</h3>
                <p className="text-gray-700 dark:text-gray-300">{data.probleme}</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* VERDICT RAPIDE */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
            Notre verdict
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* OBAT - WINNER */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full">
                <span className="text-xs font-bold text-green-900">🏆 CHOIX N°1</span>
              </div>
              <div className="text-5xl mb-4">{logiciels.obat.logo}</div>
              <h3 className="text-3xl font-bold mb-3 text-white">{logiciels.obat.nom}</h3>
              <div className="flex items-center mb-4">
                <span className="text-yellow-400 text-xl mr-2">★</span>
                <span className="font-bold text-white text-lg">{logiciels.obat.note}</span>
              </div>
              <p className="text-green-50 mb-6 leading-relaxed">{data.verdict_obat}</p>
              <a
                href={logiciels.obat.lien}
                className="block w-full glass text-green-600 text-center py-4 rounded-xl font-bold hover:bg-white/20 transition-all"
              >
                Voir l'offre {logiciels.obat.nom}
              </a>
            </motion.div>

            {/* AXONAUT - CHALLENGER */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full">
                <span className="text-xs font-bold text-blue-900">🥈 CHALLENGER</span>
              </div>
              <div className="text-5xl mb-4">{logiciels.axonaut.logo}</div>
              <h3 className="text-3xl font-bold mb-3 text-white">{logiciels.axonaut.nom}</h3>
              <div className="flex items-center mb-4">
                <span className="text-yellow-400 text-xl mr-2">★</span>
                <span className="font-bold text-white text-lg">{logiciels.axonaut.note}</span>
              </div>
              <p className="text-blue-50 mb-6 leading-relaxed">{data.verdict_axonaut}</p>
              <a
                href={logiciels.axonaut.lien}
                className="block w-full glass text-blue-600 text-center py-4 rounded-xl font-bold hover:bg-white/20 transition-all"
              >
                Voir l'offre {logiciels.axonaut.nom}
              </a>
            </motion.div>
          </div>
        </motion.section>

        {/* COMPARATEUR INTERACTIF */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 mb-12"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
            Comparatif technique détaillé
          </h2>
          <ComparisonTable />
        </motion.section>

        {/* CRITÈRES SPÉCIFIQUES */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 mb-12"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
            Critères essentiels pour les {data.nom}s
          </h2>
          <div className="space-y-4">
            {data.criteres.map((critere, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start p-6 glass rounded-xl hover-card"
              >
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-6 flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 dark:text-gray-100 mb-2">{critere}</h3>
                  <p className="text-gray-600 dark:text-gray-400">Critère évalué dans notre analyse comparative</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CALCULATEUR ROI */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
            Calculez vos économies
          </h2>
          <ROICalculator />
        </motion.section>

        {/* QUIZ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
            Quiz : Confirmez votre choix
          </h2>
          <Quiz />
        </motion.section>

        {/* CROSS-SELL BANQUE */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 mb-12 border-2 border-yellow-400/50"
        >
          <div className="flex items-start">
            <div className="text-6xl mr-6">💳</div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                N'oubliez pas votre compte pro
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                Pour automatiser votre comptabilité avec {logiciels.obat.nom} ou {logiciels.axonaut.nom}, nous recommandons <strong className="text-purple-600">Qonto</strong>. 
                La synchronisation bancaire se fait en 1 clic, fini la saisie manuelle le dimanche soir.
              </p>
              <a
                href="https://qonto.com/?ref=btp_compare"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-xl font-bold hover:from-yellow-500 hover:to-orange-600 transition-all shadow-lg"
              >
                Découvrir Qonto
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </a>
            </div>
          </div>
        </motion.section>

        {/* RETOUR */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="/"
            className="inline-flex items-center gap-2 glass px-6 py-3 rounded-xl font-semibold text-purple-600 dark:text-purple-400 hover:bg-white/20 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Voir tous les métiers
          </a>
        </motion.div>
      </main>

      {/* FOOTER */}
      <footer className="glass mt-16 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            🏗️ BTP-Compare
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Le comparateur n°1 pour les artisans du bâtiment</p>
          <div className="text-sm text-gray-500">© 2026 BTP-Compare.fr - Tous droits réservés</div>
        </div>
      </footer>
    </div>
  );
}
