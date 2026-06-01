'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ThemeToggle } from '../components/theme-toggle';
import { ROICalculator } from '../components/roi-calculator';
import { Quiz } from '../components/quiz';
import { metiers } from '../data/metiers';
import { logiciels } from '../data/logiciels';
import { 
  ArrowRight, Zap, Shield, Check, X, Clock, 
  BookOpen, Search, HardHat, FileSearch, Eye,
  MessageSquare, AlertCircle, ChevronRight,
  Target, Scale, TrendingUp, Sparkles
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen gradient-subtle">
      
      {/* ═══════════════════════════════════════════════════════
          HEADER
      ═══════════════════════════════════════════════════════ */}
      <header className="fixed top-0 left-0 right-0 w-full z-50 glass-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center text-background text-sm font-bold group-hover:scale-105 transition-transform">
                B
              </div>
              <div className="text-lg font-semibold text-foreground tracking-tight">
                BTP-Compare
              </div>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#logiciels" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
                Logiciels
              </Link>
              <Link href="#metiers" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
                Métiers
              </Link>
              <Link href="#methode" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
                Méthode
              </Link>
              <Link href="#roadmap" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
                Roadmap
              </Link>
            </nav>

            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════════
          HERO — PROMESSE HONNÊTE
      ═══════════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 overflow-hidden gradient-mesh">
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
                  Analyse indépendante • Sources vérifiables
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.05]"
            >
              Trouvez le logiciel BTP
              <br />
              <span className="text-muted-foreground">adapté à votre métier.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl"
            >
              Nous analysons les logiciels de devis et factures pour artisans du bâtiment 
              en nous basant sur la <strong className="text-foreground">documentation officielle</strong> et 
              les <strong className="text-foreground">avis vérifiés</strong> (Trustpilot, G2, Capterra).
              <br /><br />
              Chaque affirmation est <strong className="text-foreground">sourcée</strong>. 
              Vous pouvez vérifier vous-même.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="#logiciels"
                className="group inline-flex items-center justify-center px-6 py-3 rounded-lg bg-foreground text-background font-medium hover:opacity-90 transition-smooth"
              >
                Voir les logiciels analysés
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#quiz"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-accent transition-smooth"
              >
                <Zap className="w-4 h-4 mr-2" />
                Quiz : trouvez votre logiciel en 2 min
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          STATS HONNÊTES
      ═══════════════════════════════════════════════════════ */}
      <section className="border-y border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { 
                value: '7', 
                label: 'Logiciels analysés en profondeur', 
                icon: FileSearch,
                subtitle: 'Avec sources vérifiables'
              },
              { 
                value: '8', 
                label: 'Métiers du BTP couverts', 
                icon: HardHat,
                subtitle: 'Analyses spécifiques'
              },
              { 
                value: '100%', 
                label: 'Affirmations sourcées', 
                icon: Shield,
                subtitle: 'Documentation + avis vérifiés'
              },
              { 
                value: '0€', 
                label: 'Reçu pour nos classements', 
                icon: Scale,
                subtitle: 'Indépendance éditoriale'
              },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                  <stat.icon className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground tracking-tight">{stat.value}</div>
                  <div className="text-sm font-medium text-foreground mt-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{stat.subtitle}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          LOGICIELS ANALYSÉS
      ═══════════════════════════════════════════════════════ */}
      <section id="logiciels" className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center space-x-2 text-sm font-medium text-muted-foreground mb-4">
            <FileSearch className="w-4 h-4" />
            <span>Les logiciels que nous avons analysés</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            7 logiciels décryptés,
            <br />
            <span className="text-muted-foreground">sources à l'appui.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Chaque logiciel fait l'objet d'une analyse complète basée sur la documentation officielle, 
            les avis vérifiés (Trustpilot, G2, Capterra) et nos recherches documentaires.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {logiciels.map((logiciel, i) => (
            <motion.div
              key={logiciel.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                href={`/logiciels/${logiciel.slug}`}
                className="group block bg-card rounded-xl border border-border p-6 hover-lift h-full"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-4xl">{logiciel.logo}</div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{logiciel.nom}</h3>
                      <p className="text-xs text-muted-foreground">{logiciel.pays} • Depuis {logiciel.anneeCreation}</p>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {logiciel.pitch}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-start text-xs">
                    <Check className="w-3.5 h-3.5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{logiciel.pointsForts[0]?.titre}</span>
                  </div>
                  <div className="flex items-start text-xs">
                    <X className="w-3.5 h-3.5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{logiciel.pointsFaibles[0]?.titre}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <div className="text-xs text-muted-foreground">
                    <strong className="text-foreground">{logiciel.tarification.formules[0]?.prix}</strong>
                  </div>
                  <div className="flex items-center text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    Voir l'analyse
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          MÉTIERS COUVERTS
      ═══════════════════════════════════════════════════════ */}
      <section id="metiers" className="bg-card border-y border-border py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-16"
          >
            <div className="inline-flex items-center space-x-2 text-sm font-medium text-muted-foreground mb-4">
              <HardHat className="w-4 h-4" />
              <span>Analyses adaptées à votre métier</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              8 métiers du BTP,
              <br />
              <span className="text-muted-foreground">chacun avec ses spécificités.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Un plombier n'a pas les mêmes besoins qu'un électricien ou qu'un maçon. 
              Chaque page métier propose une analyse adaptée aux problématiques spécifiques du métier, 
              avec des critères et des verdicts différents.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metiers.map((metier, i) => (
              <motion.div
                key={metier.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={`/${metier.slug}`}
                  className="group block bg-background rounded-xl border border-border overflow-hidden hover-lift h-full"
                >
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={metier.image}
                      alt={metier.nom}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-lg font-bold text-white">{metier.nom}</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-3">
                      {metier.heroSubtitle}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {metier.vocabulaire.slice(0, 3).map((mot, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-0.5 bg-accent text-muted-foreground rounded">
                          {mot}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                      Voir l'analyse
                      <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          MÉTHODOLOGIE TRANSPARENTE
      ═══════════════════════════════════════════════════════ */}
      <section id="methode" className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center space-x-2 text-sm font-medium text-muted-foreground mb-4">
            <Eye className="w-4 h-4" />
            <span>Notre méthode d'analyse</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            Transparence totale.
            <br />
            <span className="text-muted-foreground">Vérifiez vous-même.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nous ne prétendons pas avoir testé physiquement chaque logiciel pendant des mois. 
            Notre force, c'est la <strong className="text-foreground">rigueur documentaire</strong> et 
            la <strong className="text-foreground">vérifiabilité</strong> de chaque affirmation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              title: 'Documentation officielle',
              desc: 'Lecture exhaustive de la documentation, CGV, et pages fonctionnalités de chaque logiciel.',
              icon: BookOpen,
              duration: '2-3 jours par logiciel'
            },
            {
              step: '02',
              title: 'Avis vérifiés',
              desc: 'Compilation des avis sur Trustpilot, G2, Capterra. Chaque note citée a un lien source.',
              icon: MessageSquare,
              duration: '1-2 jours par logiciel'
            },
            {
              step: '03',
              title: 'Recherches documentaires',
              desc: 'Forums d\'artisans, groupes Facebook, Reddit. Pour comprendre les vrais usages terrain.',
              icon: Search,
              duration: '2-3 jours par logiciel'
            },
            {
              step: '04',
              title: 'Publication sourcée',
              desc: 'Chaque affirmation, note ou statistique est accompagnée d\'un lien vérifiable.',
              icon: FileSearch,
              duration: '1-2 jours par logiciel'
            },
          ].map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl border border-border p-6 hover-lift"
            >
              <div className="flex items-start justify-between mb-4">
                <item.icon className="w-8 h-8 text-foreground" />
                <span className="text-4xl font-bold text-muted-foreground/30">{item.step}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.desc}</p>
              <div className="flex items-center text-xs text-muted-foreground pt-4 border-t border-border">
                <Clock className="w-3 h-3 mr-2" />
                <span>{item.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-accent rounded-xl p-6 border-l-4 border-primary"
        >
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Nos limites :</strong> Nous n'avons pas testé physiquement chaque logiciel sur de vrais chantiers. 
              Nos analyses sont basées sur la documentation et les retours d'utilisateurs vérifiés. 
              Pour un test approfondi, nous vous recommandons d'utiliser les essais gratuits proposés par chaque éditeur.
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          QUIZ INTERACTIF
      ═══════════════════════════════════════════════════════ */}
      <section id="quiz" className="bg-card border-y border-border py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-2 text-sm font-medium text-muted-foreground mb-4">
              <Zap className="w-4 h-4" />
              <span>Quiz personnalisé</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Trouvez votre logiciel
              <br />
              <span className="text-muted-foreground">en 7 questions.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Répondez à 7 questions sur votre activité, nous vous recommandons les 3 logiciels les plus adaptés, 
              avec un score de compatibilité personnalisé.
            </p>
          </motion.div>
          <Quiz />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          ROI CALCULATOR
      ═══════════════════════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 text-sm font-medium text-muted-foreground mb-4">
            <TrendingUp className="w-4 h-4" />
            <span>Calculateur de retour sur investissement</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            Combien vous coûte
            <br />
            <span className="text-muted-foreground">votre gestion actuelle ?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Estimez vous-même le gain de temps qu'un bon logiciel pourrait vous apporter, 
            et calculez votre retour sur investissement.
          </p>
        </motion.div>
        <ROICalculator
  tauxHoraireDefaut={50}
  tempsAdminDefaut={5}        ← ✅ BON NOM
  metierNom="Artisan"
/>
      </section>

      {/* ═══════════════════════════════════════════════════════
          ROADMAP TRANSPARENTE
      ═══════════════════════════════════════════════════════ */}
      <section id="roadmap" className="bg-card border-y border-border py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-16"
          >
            <div className="inline-flex items-center space-x-2 text-sm font-medium text-muted-foreground mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Ce qui arrive bientôt</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Notre roadmap
              <br />
              <span className="text-muted-foreground">pour les prochains mois.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nous travaillons activement à enrichir nos analyses. Voici ce que nous prévoyons d'ajouter, 
              avec la même rigueur éditoriale que nos contenus actuels.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Logiciels à venir */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl border border-border p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <FileSearch className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Logiciels à analyser</h3>
              </div>
              <ul className="space-y-3">
                {[
                  { nom: 'Henrri', desc: 'Solution gratuite pour auto-entrepreneurs' },
                  { nom: 'Sage 100 BTP', desc: 'Solution pour PME établies' },
                  { nom: 'QuickBooks', desc: 'Comptabilité en ligne populaire' },
                  { nom: 'Tiime', desc: 'Gestion pour freelances et TPE' },
                  { nom: 'Holded', desc: 'ERP tout-en-un espagnol' },
                  { nom: 'Freebe', desc: 'Gestion pour indépendants' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Clock className="w-4 h-4 text-muted-foreground mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-foreground">{item.nom}</div>
                      <div className="text-xs text-muted-foreground">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-border text-xs text-muted-foreground">
                <strong>Calendrier :</strong> 1 à 2 nouveaux logiciels par mois, selon les demandes.
              </div>
            </motion.div>

            {/* Métiers à venir */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl border border-border p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <HardHat className="w-5 h-5 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Métiers à couvrir</h3>
              </div>
              <ul className="space-y-3">
                {[
                  { nom: 'Couvreur / Zingueur', desc: 'Toitures, gouttières, charpente' },
                  { nom: 'Menuisier', desc: 'Sur-mesure, bois, agencement' },
                  { nom: 'Carreleur', desc: 'Sol, mur, mosaïque' },
                  { nom: 'Peintre', desc: 'Peinture intérieure/extérieure' },
                  { nom: 'Chauffagiste', desc: 'Chaudières, PAC, climatisation' },
                  { nom: 'Serrurier', desc: 'Serrurerie, métallerie' },
                  { nom: 'Plaquiste', desc: 'Cloisons, plafonds, isolation' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Clock className="w-4 h-4 text-muted-foreground mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-foreground">{item.nom}</div>
                      <div className="text-xs text-muted-foreground">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-border text-xs text-muted-foreground">
                <strong>Calendrier :</strong> 1 à 2 nouveaux métiers par mois, selon les demandes.
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-muted-foreground mb-4">
              Vous souhaitez qu'on analyse un logiciel ou un métier en priorité ?
            </p>
            <Link
              href="/legal/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-accent transition-smooth"
            >
              <MessageSquare className="w-4 h-4" />
              Faites-nous une demande
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          POURQUOI NOUS FAIRE CONFIANCE
      ═══════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16 text-center mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            Pourquoi nous faire
            <br />
            <span className="text-muted-foreground">confiance ?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Nous avons fait des choix éditoriaux forts pour vous offrir des analyses utiles et vérifiables.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl border border-border p-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                <Check className="w-5 h-5 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Ce que nous faisons</h3>
            </div>
            <ul className="space-y-4">
              {[
                'Analyser chaque logiciel via documentation officielle et avis vérifiés',
                'Citer nos sources pour chaque affirmation, note ou statistique',
                'Publier les points faibles même des logiciels partenaires',
                'Mettre à jour nos analyses régulièrement',
                'Répondre personnellement à chaque question',
                'Rester indépendants dans nos classements',
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl border border-border p-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                <X className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Ce que nous ne faisons pas</h3>
            </div>
            <ul className="space-y-4">
              {[
                'Inventer des témoignages ou des chiffres',
                'Accepter de l\'argent pour classer un logiciel en tête',
                'Prétendre avoir testé physiquement chaque logiciel',
                'Cacher nos liens affiliés (toujours indiqués clairement)',
                'Publier sans vérifier nos sources',
                'Faire de la publicité déguisée',
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <X className="w-4 h-4 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/legal/affiliation"
            className="text-sm text-muted-foreground hover:text-foreground underline transition-colors"
          >
            En savoir plus sur notre modèle économique et notre transparence
          </Link>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CTA FINAL
      ═══════════════════════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-foreground rounded-2xl p-12 text-background text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            Prêt à choisir
            <br />
            votre logiciel ?
          </h2>
          <p className="text-lg text-background/70 mb-8 max-w-2xl mx-auto">
            Consultez nos analyses sourcées, utilisez notre quiz personnalisé, 
            et prenez une décision éclairée en toute confiance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#logiciels"
              className="group inline-flex items-center justify-center px-8 py-4 rounded-lg bg-background text-foreground font-semibold hover:opacity-90 transition-smooth"
            >
              Explorer les logiciels
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#quiz"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-background/30 text-background font-semibold hover:bg-background/10 transition-smooth"
            >
              Faire le quiz
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════════ */}
      <footer className="border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center text-background text-sm font-bold">
                  B
                </div>
                <div className="text-lg font-semibold text-foreground tracking-tight">
                  BTP-Compare
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-4">
                Le comparateur indépendant des logiciels pour artisans du bâtiment. 
                Analyses honnêtes, sourcées, vérifiables.
              </p>
              <p className="text-xs text-muted-foreground">
                Projet éditorial indépendant — Aucune participation financière des éditeurs dans nos classements.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Métiers</h3>
              <ul className="space-y-2">
                {metiers.slice(0, 5).map((m) => (
                  <li key={m.slug}>
                    <Link href={`/${m.slug}`} className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                      {m.nom}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="#metiers" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                    Voir tous les métiers →
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Informations</h3>
              <ul className="space-y-2">
                <li><Link href="/legal/mentions-legales" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Mentions légales</Link></li>
                <li><Link href="/legal/politique-confidentialite" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Politique de confidentialité</Link></li>
                <li><Link href="/legal/cgu" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">CGU</Link></li>
                <li><Link href="/legal/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Cookies</Link></li>
                <li><Link href="/legal/affiliation" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Transparence affiliation</Link></li>
                <li><Link href="/legal/contact" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs text-muted-foreground">
              © 2026 BTP-Compare.fr — Tous droits réservés
            </div>
            <div className="text-xs text-muted-foreground">
              Fait avec soin à Rennes, France 🇫🇷
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
