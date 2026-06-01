'use client';

import { motion } from 'framer-motion';
import { ThemeToggle } from '../components/theme-toggle';
import { ROICalculator } from '../components/roi-calculator';
import { Quiz } from '../components/quiz';
import { metiers } from '../data/metiers';
import { ArrowRight, Zap, Shield, TrendingUp } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 transition-colors">
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 w-full z-50 glass border-b border-gray-200/50 dark:border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.a
              href="/"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                🏗️ BTP-Compare
              </div>
            </motion.a>
            
            <nav className="hidden md:flex space-x-8">
              {['Accueil', 'Plombiers', 'Électriciens', 'Maçons'].map((item, i) => (
                <motion.a
                  key={item}
                  href={i === 0 ? '/' : `/${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </nav>

            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* HERO SECTION avec Gradient Mesh */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30 dark:opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block glass px-6 py-2 rounded-full mb-8">
                <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                  ⭐ Mis à jour Juin 2026
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl md:text-7xl font-extrabold mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
                Quel logiciel de devis
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                pour votre métier ?
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12"
            >
              Analyses indépendantes et comparatifs interactifs pour les artisans du bâtiment.
              <span className="block mt-2 font-semibold text-purple-600 dark:text-purple-400">
                Plus de 500 avis testés et vérifiés.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#metiers"
                className="group bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center gap-2"
              >
                Voir les comparatifs
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#quiz"
                className="glass px-8 py-4 rounded-xl font-bold text-lg text-gray-900 dark:text-gray-100 hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                <Zap className="w-5 h-5" />
                Quiz : Trouvez votre logiciel
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '500+', label: 'Avis analysés', icon: TrendingUp },
            { value: '15+', label: 'Métiers couverts', icon: Shield },
            { value: '100%', label: 'Indépendant', icon: Zap },
            { value: '2026', label: 'Données à jour', icon: TrendingUp },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center hover-card"
            >
              <stat.icon className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400 mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MÉTIERS GRID */}
      <section id="metiers" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
            Choisissez votre métier
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Sélectionnez votre profession pour découvrir le logiciel parfaitement adapté à vos besoins
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metiers.map((metier, i) => (
            <motion.a
              key={metier.slug}
              href={`/${metier.slug}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group glass rounded-2xl overflow-hidden hover-card"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={metier.image} 
                  alt={metier.nom}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/800x600/667eea/ffffff?text=' + encodeURIComponent(metier.nom);
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-3xl font-bold text-white">{metier.nom}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="glass px-3 py-1 rounded-full text-xs font-semibold text-purple-600 dark:text-purple-400">
                    🎯 Problématique
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {metier.probleme}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-purple-600 dark:text-purple-400 font-semibold group-hover:text-purple-700 dark:group-hover:text-purple-300 transition">
                    Voir le comparatif
                  </span>
                  <ArrowRight className="w-5 h-5 text-purple-600 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* QUIZ SECTION */}
      <section id="quiz" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
            Quiz interactif
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Répondez à 3 questions pour découvrir votre logiciel idéal
          </p>
        </motion.div>
        <Quiz />
      </section>

      {/* ROI CALCULATOR */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
            Calculez vos économies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Découvrez combien vous pourriez économiser avec un logiciel adapté
          </p>
        </motion.div>
        <ROICalculator />
      </section>

      {/* TRUST SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
            Pourquoi nous faire confiance ?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Notre méthodologie d'analyse rigoureuse</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: '📊',
              title: 'Analyses indépendantes',
              desc: 'Aucun logiciel ne nous paie pour être mieux classé. Nos avis sont 100% objectifs.',
            },
            {
              icon: '🔍',
              title: '500+ avis analysés',
              desc: 'Nous lisons tous les avis Trustpilot et Google pour identifier les vrais points forts.',
            },
            {
              icon: '⚡',
              title: 'Mis à jour en 2026',
              desc: 'Les fonctionnalités évoluent. Nous mettons à jour nos comparatifs chaque mois.',
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-8 hover-card"
            >
              <div className="text-6xl mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="glass mt-16 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            🏗️ BTP-Compare
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Le comparateur n°1 pour les artisans du bâtiment</p>
          <div className="text-sm text-gray-500 dark:text-gray-500">
            © 2026 BTP-Compare.fr - Tous droits réservés
          </div>
        </div>
      </footer>
    </div>
  );
}
