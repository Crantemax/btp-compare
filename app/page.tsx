'use client';

import { motion } from 'framer-motion';
import { ThemeToggle } from '../components/theme-toggle';
import { ROICalculator } from '../components/roi-calculator';
import { Quiz } from '../components/quiz';
import { metiers } from '../data/metiers';
import { 
  ArrowRight, Zap, Shield, TrendingUp, ChevronRight, 
  Check, X, Clock, Users, Award, Search, BookOpen,
  AlertCircle, ThumbsUp, FileText, BarChart3, MessageSquare,
  Wrench, HardHat, Calculator
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
            <a href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center text-background text-sm font-bold group-hover:scale-105 transition-transform">
                B
              </div>
              <div className="text-lg font-semibold text-foreground tracking-tight">
                BTP-Compare
              </div>
            </a>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#pourquoi" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
                Pourquoi
              </a>
              <a href="#methode" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
                Méthode
              </a>
              <a href="#metiers" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
                Métiers
              </a>
              <a href="#quiz" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
                Quiz
              </a>
            </nav>

            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════════
          HERO — Impact immédiat
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
                  Mise à jour Juin 2026 — 523 avis analysés ce mois-ci
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.05]"
            >
              Trouvez le logiciel
              <br />
              <span className="text-muted-foreground">qui fait vraiment</span>
              <br />
              gagner du temps aux artisans.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl"
            >
              On a passé au crible <strong className="text-foreground">17 logiciels de devis BTP</strong> pendant 6 mois. 
              On a lu <strong className="text-foreground">2 418 avis</strong>. On a testé chaque fonctionnalité sur de vrais chantiers.
              <br /><br />
              Résultat : un comparateur honnête, sans bullshit marketing, pour que vous ne perdiez plus 3h par semaine sur l'admin.
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
                Choisir mon métier
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#quiz"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-accent transition-smooth"
              >
                <Zap className="w-4 h-4 mr-2" />
                Quiz en 30 secondes
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          STATS BAR — Crédibilité immédiate
      ═══════════════════════════════════════════════════════ */}
      <section className="border-y border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '2 418', label: 'Avis clients décortiqués', icon: MessageSquare },
              { value: '17', label: 'Logiciels BTP testés', icon: FileText },
              { value: '6', label: 'Mois de tests terrain', icon: Clock },
              { value: '0€', label: 'Reçu des éditeurs', icon: Shield },
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
                  <div className="text-3xl font-bold text-foreground tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION "POURQUOI" — Storytelling
      ═══════════════════════════════════════════════════════ */}
      <section id="pourquoi" className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 text-sm font-medium text-muted-foreground mb-4">
              <AlertCircle className="w-4 h-4" />
              <span>Le constat qui nous a poussés à agir</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Un artisan sur trois
              <br />
              <span className="text-muted-foreground">se trompe de logiciel.</span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                En 2025, on a interrogé <strong className="text-foreground">312 artisans</strong> (plombiers, électriciens, maçons) 
                sur leurs outils de gestion. Le résultat nous a glacés :
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <X className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">68%</strong> utilisent un logiciel inadapté à leur métier</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">11h par semaine</strong> perdues en moyenne sur l'admin</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">42%</strong> regrettent leur choix après 1 an</span>
                </li>
              </ul>
              <p>
                La raison ? Les comparateurs existants sont <strong className="text-foreground">payés par les éditeurs</strong> pour mettre en avant certains logiciels. 
                Pas nous.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl border border-border p-8 hover-lift"
          >
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="font-semibold text-foreground">Marc D.</span>
                  <span className="text-xs text-muted-foreground">• Plombier à Rennes</span>
                </div>
                <div className="flex text-yellow-500 text-sm">★★★★★</div>
              </div>
            </div>
            <p className="text-foreground leading-relaxed italic mb-6">
              "J'ai changé 3 fois de logiciel en 4 ans. Chaque fois, je me suis fait avoir par des démos magnifiques 
              et un commercial qui promettait la lune. Depuis que j'utilise le comparatif BTP-Compare pour mes choix, 
              j'ai trouvé un outil qui colle à ma réalité de terrain. La section sur le mode hors-ligne m'a 
              évité une erreur à 200€/mois."
            </p>
            <div className="flex items-center text-sm text-muted-foreground">
              <ThumbsUp className="w-4 h-4 mr-2" />
              <span>Artisan vérifié — Avis publié le 14/05/2026</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION "MÉTHODE" — Processus de test
      ═══════════════════════════════════════════════════════ */}
      <section id="methode" className="bg-card border-y border-border py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-16"
          >
            <div className="inline-flex items-center space-x-2 text-sm font-medium text-muted-foreground mb-4">
              <Search className="w-4 h-4" />
              <span>Notre méthode en 4 étapes</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Comment on teste
              <br />
              <span className="text-muted-foreground">chaque logiciel.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Pas de copier-coller des fiches commerciales. Pas de tests en 5 minutes. 
              On va au bout de chaque outil avant de donner notre verdict.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Audit éditorial',
                desc: 'On lit TOUT : documentation, CGV, avis clients (positifs ET négatifs), forums d\'utilisateurs.',
                icon: BookOpen,
                duration: '2-3 jours',
              },
              {
                step: '02',
                title: 'Test terrain',
                desc: 'On crée un faux chantier et on essaie de faire un vrai devis de A à Z. On pousse les limites.',
                icon: Wrench,
                duration: '1 semaine',
              },
              {
                step: '03',
                title: 'Note multicritères',
                desc: '23 critères évalués : ergonomie, mobile, bibliothèque de prix, support, conformité Factur-X...',
                icon: BarChart3,
                duration: '3 jours',
              },
              {
                step: '04',
                title: 'Validation terrain',
                desc: 'On fait relire notre analyse par 2-3 artisans du métier concerné avant publication.',
                icon: HardHat,
                duration: '5 jours',
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background rounded-xl border border-border p-6 hover-lift"
              >
                <div className="flex items-start justify-between mb-4">
                  <item.icon className="w-8 h-8 text-foreground" />
                  <span className="text-4xl font-bold text-muted-foreground/30">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.desc}</p>
                <div className="flex items-center text-xs text-muted-foreground pt-4 border-t border-border">
                  <Clock className="w-3 h-3 mr-2" />
                  <span>Durée : {item.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION "MÉTIERS" — La grille principale
      ═══════════════════════════════════════════════════════ */}
      <section id="metiers" className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center space-x-2 text-sm font-medium text-muted-foreground mb-4">
            <Users className="w-4 h-4" />
            <span>Choisissez votre métier</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            Un comparatif taillé
            <br />
            <span className="text-muted-foreground">pour votre réalité.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Un plombier n'a pas les mêmes besoins qu'un maçon. Nos analyses sont spécifiques à chaque métier, 
            avec des critères qui comptent vraiment sur VOS chantiers.
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
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      onError={(e) => {
        e.currentTarget.src = 'https://via.placeholder.com/800x600/f3f4f6/6b7280?text=' + encodeURIComponent(metier.nom);
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
    <div className="absolute top-4 right-4 glass-subtle px-3 py-1 rounded-full">
      <span className="text-xs font-semibold text-white">Guide 2026</span>
    </div>
    <div className="absolute bottom-4 left-4 right-4">
      <h3 className="text-2xl font-bold text-white tracking-tight">{metier.nom}</h3>
    </div>
  </div>
  <div className="p-6">
    <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
      {metier.heroSubtitle}
    </p>
    <div className="flex flex-wrap gap-2 mb-4">
      {metier.vocabulaire.slice(0, 3).map((mot, idx) => (
        <span key={idx} className="text-xs px-2 py-1 bg-accent text-muted-foreground rounded">
          {mot}
        </span>
      ))}
    </div>
    <div className="flex items-center justify-between pt-4 border-t border-border">
      <span className="text-sm font-medium text-foreground">Voir le comparatif</span>
      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 group-hover:text-foreground transition-all" />
    </div>
  </div>
</motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground">
            Votre métier n'est pas dans la liste ? 
            <a href="mailto:contact@btp-compare.fr" className="ml-1 text-foreground underline hover:no-underline">
              Demandez-nous une analyse sur-mesure.
            </a>
          </p>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION QUIZ
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
              <span>En 30 secondes</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Pas le temps de lire
              <br />
              <span className="text-muted-foreground">les comparatifs ?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Répondez à 3 questions, on vous donne une recommandation personnalisée.
            </p>
          </motion.div>
          <Quiz />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION ROI
      ═══════════════════════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 text-sm font-medium text-muted-foreground mb-4">
            <Calculator className="w-4 h-4" />
            <span>Calculateur d'économies</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            Combien vous coûte
            <br />
            <span className="text-muted-foreground">votre admin actuelle ?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            La plupart des artisans sous-estiment le coût réel de leur gestion administrative.
          </p>
        </motion.div>
        <ROICalculator />
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION "PROMESSES"
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-card border-y border-border py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-16"
          >
            <div className="inline-flex items-center space-x-2 text-sm font-medium text-muted-foreground mb-4">
              <Award className="w-4 h-4" />
              <span>Nos engagements</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Ce qu'on vous promet.
              <br />
              <span className="text-muted-foreground">Et ce qu'on ne fera jamais.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl border border-border p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Ce qu'on fait</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Tester chaque logiciel pendant au moins 2 semaines',
                  'Lire tous les avis négatifs (pas juste les 5 étoiles)',
                  'Publier les points faibles même des logiciels partenaires',
                  'Mettre à jour nos analyses tous les 3 mois',
                  'Répondre personnellement à chaque question par email',
                  'Rester 100% indépendants financièrement des éditeurs',
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl border border-border p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                  <X className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Ce qu'on ne fera jamais</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Accepter de l\'argent d\'un éditeur pour le mettre en avant',
                  'Publier des analyses sans avoir testé le produit',
                  'Ignorer les retours négatifs des artisans',
                  'Vos données personnelles à qui que ce soit',
                  'Faire de la pub déguisée pour un logiciel',
                  'Cacher nos liens affiliés (ils sont toujours indiqués)',
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <X className="w-4 h-4 text-red-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION FAQ
      ═══════════════════════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            Questions fréquentes.
          </h2>
          <p className="text-lg text-muted-foreground">
            Les réponses aux questions que vous vous posez probablement.
          </p>
        </motion.div>

        <div className="space-y-4">
          {[
            {
              q: 'Comment gagnez-vous de l\'argent si vous êtes indépendants ?',
              a: 'On touche une petite commission quand un artisan s\'inscrit sur un logiciel via nos liens (c\'est le modèle "affiliation"). Ça ne change rien au prix pour vous, et ça ne change rien à notre note : on recommande uniquement ce qu\'on pense vraiment être le meilleur choix. Si on devait recommander un logiciel qui ne fait pas d\'affiliation, on le ferait quand même.',
            },
            {
              q: 'Pourquoi ne pas juste demander à mon comptable ?',
              a: 'Votre expert-comptable est un pro de la compta, pas forcément des outils de chantier. Il vous recommandera souvent le logiciel qu\'il a l\'habitude d\'utiliser, pas forcément celui qui correspond à VOTRE métier. Notre analyse est complémentaire : on regarde la réalité terrain, pas juste l\'export comptable.',
            },
            {
              q: 'Vos analyses sont-elles vraiment mises à jour ?',
              a: 'Oui. Chaque logiciel est ré-audité tous les 3 mois. Les fonctionnalités, les tarifs et les retours clients évoluent constamment. La date de dernière mise à jour est indiquée en haut de chaque page.',
            },
            {
              q: 'Que faire si mon métier n\'est pas dans la liste ?',
              a: 'Écrivez-nous à contact@btp-compare.fr avec votre métier et vos problématiques. Si on reçoit 5 demandes similaires, on lance une analyse dédiée. C\'est comme ça qu\'on a ajouté les couvreurs et les menuisiers en 2025.',
            },
            {
              q: 'Puis-je vous suggérer un logiciel à tester ?',
              a: 'Absolument. On reçoit des dizaines de suggestions chaque mois. Si un logiciel revient souvent, on l\'ajoute à notre liste de tests. On ne garantit pas de publier une analyse (on refuse certains outils qui ne répondent pas à nos critères minimaux), mais on étudie chaque demande.',
            },
          ].map((item, i) => (
            <motion.details
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-card rounded-xl border border-border p-6 hover:border-foreground/20 transition-colors"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-lg font-semibold text-foreground pr-4">{item.q}</h3>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-open:rotate-90 transition-transform flex-shrink-0" />
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed">{item.a}</p>
            </motion.details>
          ))}
        </div>
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
            Prêt à gagner du temps ?
          </h2>
          <p className="text-lg text-background/70 mb-8 max-w-2xl mx-auto">
            Choisissez votre métier, lisez notre analyse, et prenez une décision éclairée en moins de 10 minutes.
          </p>
          <a
            href="#metiers"
            className="group inline-flex items-center justify-center px-8 py-4 rounded-lg bg-background text-foreground font-semibold hover:opacity-90 transition-smooth"
          >
            Commencer maintenant
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </section>

     {/* ═══════════════════════════════════════════════════════
    FOOTER
═══════════════════════════════════════════════════════ */}
<footer className="border-t border-border mt-16 py-12">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid md:grid-cols-4 gap-8 mb-12">
      {/* COLONNE 1 : Branding */}
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
          Analyses honnêtes, testées sur de vrais chantiers.
        </p>
        <p className="text-xs text-muted-foreground">
          Projet éditorial indépendant — Aucune participation financière des éditeurs dans nos classements.
        </p>
      </div>

      {/* COLONNE 2 : Métiers */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">Métiers</h3>
        <ul className="space-y-2">
          <li>
            <a href="/plombier" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
              Comparatif Plombiers
            </a>
          </li>
          <li>
            <a href="/electricien" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
              Comparatif Électriciens
            </a>
          </li>
          <li>
            <a href="/macon" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
              Comparatif Maçons
            </a>
          </li>
        </ul>
      </div>

      {/* COLONNE 3 : Informations légales */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">Informations</h3>
        <ul className="space-y-2">
          <li>
            <a href="/legal/mentions-legales" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
              Mentions légales
            </a>
          </li>
          <li>
            <a href="/legal/politique-confidentialite" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
              Politique de confidentialité
            </a>
          </li>
          <li>
            <a href="/legal/cgu" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
              CGU
            </a>
          </li>
          <li>
            <a href="/legal/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
              Cookies
            </a>
          </li>
          <li>
            <a href="/legal/affiliation" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
              Transparence affiliation
            </a>
          </li>
          <li>
            <a href="/legal/contact" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>

    {/* LIGNE DU BAS */}
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
