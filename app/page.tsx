'use client';

import { motion } from 'framer-motion';
import { ThemeToggle } from '../components/theme-toggle';
import { ROICalculator } from '../components/roi-calculator';
import { Quiz } from '../components/quiz';
import { metiers } from '../data/metiers';
import { ArrowRight, Zap, Shield, TrendingUp, ChevronRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen gradient-subtle">
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 w-full z-50 glass-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center space-x-2">
              <div className="text-xl font-semibold text-foreground">
                BTP-Compare
              </div>
            </a>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
                Accueil
              </a>
              <a href="/plombier" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
                Plombiers
              </a>
              <a href="/electricien" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
                Électriciens
              </a>
              <a href="/macon" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
                Maçons
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center space-x-2 glass-subtle px-4 py-2 rounded-full mb-8">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm font-medium text-muted-foreground">
                  Mis à jour Juin 2026
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6"
            >
              Quel logiciel de devis
              <br />
              pour votre métier ?
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-12 leading-relaxed"
            >
              Analyses indépendantes et comparatifs interactifs pour les artisans du bâtiment.
              Plus de 500 avis testés et vérifiés.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#metiers"
                className="group inline-flex items-center justify-center px-6 py-3 rounded-lg bg-foreground text-background font-medium hover:opacity-90 transition-smooth"
              >
                Voir les comparatifs
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#quiz"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-accent transition-smooth"
              >
                <Zap className="w-4 h-4 mr-2" />
                Quiz : Trouvez votre logiciel
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '500+', label: 'Avis analysés' },
            { value: '15+', label: 'Métiers couverts' },
            { value: '100%', label: 'Indépendant' },
            { value: '2026', label: 'Données à jour' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MÉTIERS GRID */}
      <section id="metiers" className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">
            Choisissez votre métier
          </h2>
          <p className="text-lg text-muted-foreground">
            Sélectionnez votre profession pour découvrir le logiciel parfaitement adapté à vos besoins
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metiers.map((metier, i) => (
            <motion.a
              key={metier.slug}
              href={`/${metier.slug}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group block bg-card rounded-xl border border-border overflow-hidden hover-lift"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={metier.image} 
                  alt={metier.nom}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/800x600/f3f4f6/6b7280?text=' + encodeURIComponent(metier.nom);
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-semibold text-white">{metier.nom}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {metier.probleme}
                </p>
                <div className="flex items-center text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  Voir le comparatif
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* QUIZ SECTION */}
      <section id="quiz" className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">
            Quiz interactif
          </h2>
          <p className="text-lg text-muted-foreground">
            Répondez à 3 questions pour découvrir votre logiciel idéal
          </p>
        </motion.div>
        <Quiz />
      </section>

      {/* ROI CALCULATOR */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">
            Calculez vos économies
          </h2>
          <p className="text-lg text-muted-foreground">
            Découvrez combien vous pourriez économiser avec un logiciel adapté
          </p>
        </motion.div>
        <ROICalculator />
      </section>

      {/* TRUST SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">
            Pourquoi nous faire confiance ?
          </h2>
          <p className="text-lg text-muted-foreground">Notre méthodologie d'analyse rigoureuse</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6">
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
              className="bg-card rounded-xl border border-border p-6"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border mt-16 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="text-lg font-semibold text-foreground mb-4">
            BTP-Compare
          </div>
          <p className="text-sm text-muted-foreground mb-4">Le comparateur n°1 pour les artisans du bâtiment</p>
          <div className="text-xs text-muted-foreground">
            © 2026 BTP-Compare.fr - Tous droits réservés
          </div>
        </div>
      </footer>
    </div>
  );
}
