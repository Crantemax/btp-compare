'use client';

import { motion } from 'framer-motion';
import { ThemeToggle } from '../../components/theme-toggle';
import { ComparisonTable } from '../../components/comparison-table';
import { ROICalculator } from '../../components/roi-calculator';
import { Quiz } from '../../components/quiz';
import { metiers, logiciels } from '../../data/metiers';
import { ArrowLeft, Zap, ChevronRight } from 'lucide-react';

export default function MetierPage({ params }: { params: { metier: string } }) {
  const data = metiers.find(m => m.slug === params.metier);
  
  if (!data) return <div>Métier non trouvé</div>;

  return (
    <div className="min-h-screen gradient-subtle">
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 w-full z-50 glass-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="text-xl font-semibold text-foreground">
              BTP-Compare
            </a>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
                Accueil
              </a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* HERO IMAGE */}
      <div className="relative h-[500px] overflow-hidden pt-16">
        <img
          src={data.image}
          alt={data.nom}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = 'https://via.placeholder.com/1200x600/f3f4f6/6b7280?text=' + encodeURIComponent(data.nom);
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="inline-flex items-center space-x-2 glass-subtle px-4 py-2 rounded-full mb-4">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium text-foreground">
                  Comparatif {new Date().getFullYear()}
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl font-bold tracking-tight text-foreground mb-4"
            >
              Quel logiciel pour {data.nom} ?
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-muted-foreground"
            >
              Analyse indépendante • Mis à jour en Juin 2026
            </motion.p>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        
        {/* INTRODUCTION */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-xl border border-border p-8 mb-12"
        >
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Le défi administratif des {data.nom}s
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {data.intro}
          </p>
          <div className="bg-accent rounded-lg p-6 border-l-4 border-primary">
            <div className="flex items-start">
              <Zap className="w-5 h-5 text-primary mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Problématique majeure</h3>
                <p className="text-muted-foreground">{data.probleme}</p>
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
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">
            Notre verdict
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* OBAT - WINNER */}
            <motion.div
              whileHover={{ y: -4 }}
              className="relative bg-card rounded-xl border-2 border-green-500 p-8 hover-lift"
            >
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                CHOIX N°1
              </div>
              <div className="text-4xl mb-4">{logiciels.obat.logo}</div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">{logiciels.obat.nom}</h3>
              <div className="flex items-center mb-4">
                <span className="text-yellow-500 text-lg mr-2">★</span>
                <span className="font-semibold text-foreground">{logiciels.obat.note}</span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">{data.verdict_obat}</p>
              <a
                href={logiciels.obat.lien}
                className="block w-full bg-foreground text-background text-center py-3 rounded-lg font-medium hover:opacity-90 transition-smooth"
              >
                Voir l'offre {logiciels.obat.nom}
              </a>
            </motion.div>

            {/* AXONAUT - CHALLENGER */}
            <motion.div
              whileHover={{ y: -4 }}
              className="relative bg-card rounded-xl border-2 border-blue-500 p-8 hover-lift"
            >
              <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                CHALLENGER
              </div>
              <div className="text-4xl mb-4">{logiciels.axonaut.logo}</div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">{logiciels.axonaut.nom}</h3>
              <div className="flex items-center mb-4">
                <span className="text-yellow-500 text-lg mr-2">★</span>
                <span className="font-semibold text-foreground">{logiciels.axonaut.note}</span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">{data.verdict_axonaut}</p>
              <a
                href={logiciels.axonaut.lien}
                className="block w-full bg-foreground text-background text-center py-3 rounded-lg font-medium hover:opacity-90 transition-smooth"
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
          className="bg-card rounded-xl border border-border p-8 mb-12"
        >
          <h2 className="text-2xl font-semibold text-foreground mb-8">
            Comparatif technique détaillé
          </h2>
          <ComparisonTable />
        </motion.section>

        {/* CRITÈRES SPÉCIFIQUES */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-xl border border-border p-8 mb-12"
        >
          <h2 className="text-2xl font-semibold text-foreground mb-8">
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
                className="flex items-start p-4 bg-accent rounded-lg"
              >
                <div className="bg-foreground text-background rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 flex-shrink-0 text-sm">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{critere}</h3>
                  <p className="text-sm text-muted-foreground">Critère évalué dans notre analyse comparative</p>
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
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">
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
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">
            Quiz : Confirmez votre choix
          </h2>
          <Quiz />
        </motion.section>

        {/* CROSS-SELL BANQUE */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-xl border-2 border-yellow-500 p-8 mb-12"
        >
          <div className="flex items-start">
            <div className="text-5xl mr-6">💳</div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                N'oubliez pas votre compte pro
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Pour automatiser votre comptabilité avec {logiciels.obat.nom} ou {logiciels.axonaut.nom}, nous recommandons <strong className="text-foreground">Qonto</strong>. 
                La synchronisation bancaire se fait en 1 clic, fini la saisie manuelle le dimanche soir.
              </p>
              <a
                href="https://qonto.com/?ref=btp_compare"
                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-smooth"
              >
                Découvrir Qonto
                <ChevronRight className="w-4 h-4" />
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
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-smooth"
          >
            <ArrowLeft className="w-4 h-4" />
            Voir tous les métiers
          </a>
        </motion.div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border mt-16 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="text-lg font-semibold text-foreground mb-4">
            BTP-Compare
          </div>
          <p className="text-sm text-muted-foreground mb-4">Le comparateur n°1 pour les artisans du bâtiment</p>
          <div className="text-xs text-muted-foreground">© 2026 BTP-Compare.fr - Tous droits réservés</div>
        </div>
      </footer>
    </div>
  );
}
