'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { ThemeToggle } from '../components/theme-toggle';
import { ROICalculator } from '../components/roi-calculator';
import { Quiz } from '../components/quiz';
import { metiers } from '../data/metiers';
import { logiciels } from '../data/logiciels';
import {
  ArrowRight, Zap, Shield, Check, X, Clock,
  BookOpen, Search, HardHat, FileSearch, Eye,
  MessageSquare, ChevronRight,
  Scale, TrendingUp, Sparkles, Star,
  BarChart3, Award, Layers
} from 'lucide-react';

// ─── Helpers visuels ─────────────────────────────────────────────────────────

// Raccourcit le prix pour les badges (ex: "À partir de 89€/mois (à vérifier)" → "Dès 89€/mois")
function formatPrix(prix: string): string {
  if (!prix) return '—';
  const lower = prix.toLowerCase();
  if (lower.startsWith('0€') || lower === '0€/mois') return 'Gratuit';
  if (prix.startsWith('0€')) return 'Gratuit';
  if (lower.includes('sur devis')) return 'Sur devis';
  const match = prix.match(/(\d+€(?:\/[a-zA-Zé]+(?:\/[a-zA-Zé]+)*)?)/);
  if (match) return `Dès ${match[1]}`;
  return prix.split('(')[0].replace(/^À partir de\s*/i, 'Dès ').trim();
}

// Initiales du logiciel (2 caractères max)
function getInitials(nom: string): string {
  const words = nom.trim().split(/[\s\-]+/);
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
  return nom.slice(0, 2).toUpperCase();
}

// Couleur associée à l'emoji-logo
const LOGO_STYLES: Record<string, { bg: string; text: string }> = {
  '🟢': { bg: 'bg-green-500/15',  text: 'text-green-700 dark:text-green-400' },
  '🔵': { bg: 'bg-blue-500/15',   text: 'text-blue-700 dark:text-blue-400' },
  '🟠': { bg: 'bg-orange-500/15', text: 'text-orange-600 dark:text-orange-400' },
  '🟣': { bg: 'bg-purple-500/15', text: 'text-purple-700 dark:text-purple-400' },
  '🔴': { bg: 'bg-red-500/15',    text: 'text-red-700 dark:text-red-400' },
  '🟡': { bg: 'bg-yellow-500/15', text: 'text-yellow-700 dark:text-yellow-500' },
  '🔷': { bg: 'bg-cyan-500/15',   text: 'text-cyan-700 dark:text-cyan-400' },
  '🟤': { bg: 'bg-amber-700/15',  text: 'text-amber-800 dark:text-amber-400' },
};
function getLogoStyle(logo: string) {
  return LOGO_STYLES[logo] ?? { bg: 'bg-primary/15', text: 'text-primary' };
}

// Compteur animé
function AnimatedCounter({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1400;
        const startTime = Date.now();
        const timer = setInterval(() => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(eased * target));
          if (progress >= 1) clearInterval(timer);
        }, 16);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

// Comparaisons populaires à mettre en avant
const COMPARAISONS_PHARES = [
  { slug: 'obat-vs-axonaut', titre: 'Obat vs Axonaut', desc: 'Le spécialiste BTP face au généraliste tout-en-un', badge: '⭐ Le plus lu' },
  { slug: 'obat-vs-tolteck', titre: 'Obat vs Tolteck', desc: 'Deux solutions 100% BTP en détail', badge: null },
  { slug: 'obat-vs-batigest', titre: 'Obat vs Batigest', desc: 'Moderne vs solution historique', badge: null },
  { slug: 'axonaut-vs-tolteck', titre: 'Axonaut vs Tolteck', desc: 'ERP tout-en-un face au spécialiste BTP', badge: null },
  { slug: 'obat-vs-ebp', titre: 'Obat vs EBP', desc: 'Solution moderne vs logiciel historique', badge: null },
  { slug: 'axonaut-vs-sellsy', titre: 'Axonaut vs Sellsy', desc: 'Deux ERP généralistes en comparaison', badge: null },
];

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
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white text-sm font-bold group-hover:scale-105 transition-transform">
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
              <Link href="#comparaisons" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
                Comparaisons
              </Link>
              <Link href="#quiz" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
                Quiz
              </Link>
            </nav>

            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 overflow-hidden gradient-mesh">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Texte */}
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center space-x-2 glass-subtle px-4 py-2 rounded-full mb-8">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm font-medium text-muted-foreground">
                    17 logiciels analysés • 20 métiers couverts
                  </span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6 leading-[1.05]"
              >
                Trouvez le logiciel BTP{' '}
                <span className="text-primary">
                  adapté à votre métier.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-muted-foreground mb-10 leading-relaxed"
              >
                Analyses indépendantes basées sur la{' '}
                <strong className="text-foreground">documentation officielle</strong> et les{' '}
                <strong className="text-foreground">avis vérifiés</strong> (Trustpilot, G2, Capterra).
                Chaque affirmation est <strong className="text-foreground">sourcée</strong> — vérifiez vous-même.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="#quiz"
                  className="group inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-smooth shadow-lg shadow-primary/25"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Quiz : trouvez votre logiciel
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#logiciels"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-accent transition-smooth"
                >
                  Voir les analyses
                </Link>
              </motion.div>
            </div>

            {/* Visuel flottant — mini-cards logiciels */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-3xl" />
                <div className="relative space-y-3">
                  {logiciels.slice(0, 5).map((l, i) => {
                    const style = getLogoStyle(l.logo);
                    return (
                    <motion.div
                      key={l.slug}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      style={{ marginLeft: i * 16 }}
                      className="bg-card border border-border rounded-xl p-4 flex items-center gap-4 shadow-sm hover:border-primary/30 transition-colors"
                    >
                      {/* Initiales colorées */}
                      <div className={`w-10 h-10 rounded-lg ${style.bg} flex items-center justify-center flex-shrink-0`}>
                        <span className={`text-sm font-bold ${style.text}`}>{getInitials(l.nom)}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm text-foreground">{l.nom}</div>
                        <div className="text-xs text-muted-foreground truncate">{l.idealPour?.split(',')[0]}</div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="text-xs font-bold text-primary">{formatPrix(l.tarification.formules[0]?.prix ?? '')}</div>
                        {(l.sources?.trustpilot || l.sources?.g2) && (
                          <div className="flex items-center gap-0.5 justify-end">
                            <Star className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                            <span className="text-[10px] text-muted-foreground">
                              {(l.sources.trustpilot || l.sources.g2)?.note}
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                    );
                  })}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-center text-xs text-muted-foreground pt-2"
                    style={{ marginLeft: 5 * 16 }}
                  >
                    + {logiciels.length - 5} autres logiciels analysés →
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          STATS ANIMÉES
      ═══════════════════════════════════════════════════════ */}
      <section className="border-y border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                value: logiciels.length,
                suffix: '',
                label: 'Logiciels analysés',
                icon: FileSearch,
                sub: 'Sources vérifiables',
                color: 'text-primary',
                bg: 'bg-primary/10',
              },
              {
                value: metiers.length,
                suffix: '',
                label: 'Métiers du BTP couverts',
                icon: HardHat,
                sub: 'Analyses spécifiques',
                color: 'text-blue-500',
                bg: 'bg-blue-500/10',
              },
              {
                value: 100,
                suffix: '%',
                label: 'Affirmations sourcées',
                icon: Shield,
                sub: 'Doc + avis vérifiés',
                color: 'text-green-500',
                bg: 'bg-green-500/10',
              },
              {
                value: 0,
                prefix: '',
                suffix: '€',
                label: 'Payé pour nos classements',
                icon: Scale,
                sub: 'Indépendance totale',
                color: 'text-purple-500',
                bg: 'bg-purple-500/10',
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
                <div className={`w-10 h-10 rounded-lg ${stat.bg} flex items-center justify-center flex-shrink-0`}>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div>
                  <div className={`text-3xl font-bold tracking-tight ${stat.color}`}>
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} prefix={stat.prefix ?? ''} />
                  </div>
                  <div className="text-sm font-medium text-foreground mt-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{stat.sub}</div>
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
          <div className="inline-flex items-center space-x-2 text-sm font-medium text-primary mb-4">
            <FileSearch className="w-4 h-4" />
            <span>Les logiciels que nous avons analysés</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            {logiciels.length} logiciels décryptés,
            <br />
            <span className="text-muted-foreground">sources à l'appui.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Documentation officielle, avis vérifiés (Trustpilot, G2, Capterra), forums d'artisans.
            Chaque analyse prend 5 à 8 jours de recherche.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {logiciels.map((logiciel, i) => {
            const style = getLogoStyle(logiciel.logo);
            const initials = getInitials(logiciel.nom);
            const prixCourt = formatPrix(logiciel.tarification.formules[0]?.prix ?? '');
            const note = (logiciel.sources?.trustpilot || logiciel.sources?.g2)?.note;
            return (
            <motion.div
              key={logiciel.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 6) * 0.05 }}
            >
              <Link
                href={`/logiciels/${logiciel.slug}`}
                className="group block rounded-xl border border-border overflow-hidden hover-lift h-full bg-card hover:border-primary/40 transition-colors"
              >
                {/* Barre de couleur en haut — couleur du logiciel */}
                <div className={`h-1 w-full ${style.bg.replace('/15', '')} opacity-70`}
                  style={{ background: 'linear-gradient(to right, var(--color-primary), #f59e0b)' }} />

                <div className="p-5">
                  {/* Logo (initiales) + prix */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${style.bg} flex items-center justify-center flex-shrink-0 transition-colors group-hover:opacity-80`}>
                      <span className={`text-base font-bold ${style.text}`}>{initials}</span>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary whitespace-nowrap">
                      {prixCourt}
                    </span>
                  </div>

                  {/* Nom + meta */}
                  <h3 className="text-lg font-bold text-foreground mb-0.5">{logiciel.nom}</h3>
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-1">
                    {logiciel.pays} · {logiciel.anneeCreation} · {logiciel.nombreUtilisateurs}
                  </p>

                  {/* Pitch */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                    {logiciel.pitch}
                  </p>

                  {/* Pro / Con */}
                  <div className="space-y-1.5 mb-4">
                    <div className="flex items-start text-xs gap-2">
                      <Check className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground line-clamp-1">{logiciel.pointsForts[0]?.titre}</span>
                    </div>
                    <div className="flex items-start text-xs gap-2">
                      <X className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground line-clamp-1">{logiciel.pointsFaibles[0]?.titre}</span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="pt-3 border-t border-border flex items-center justify-between">
                    {note ? (
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs text-muted-foreground">{note}</span>
                      </div>
                    ) : <div />}
                    <div className="flex items-center text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      Voir l'analyse
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
            );
          })}
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
            <div className="inline-flex items-center space-x-2 text-sm font-medium text-primary mb-4">
              <HardHat className="w-4 h-4" />
              <span>Analyses adaptées à votre métier</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              {metiers.length} métiers du BTP,
              <br />
              <span className="text-muted-foreground">chacun avec ses spécificités.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Un plombier n'a pas les mêmes besoins qu'un électricien.
              Chaque page métier propose des analyses adaptées avec des critères et verdicts différents.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {metiers.map((metier, i) => (
              <motion.div
                key={metier.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 10) * 0.04 }}
              >
                <Link
                  href={`/${metier.slug}`}
                  className="group block bg-background rounded-xl border border-border overflow-hidden hover-lift hover:border-primary/40 transition-colors"
                >
                  <div className="relative h-28 overflow-hidden bg-gradient-to-br from-primary/40 to-primary/20">
                    <img
                      src={metier.image}
                      alt={metier.nom}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.opacity = '0';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <h3 className="text-sm font-bold text-white leading-tight">{metier.nom}</h3>
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="flex flex-wrap gap-1 mb-2">
                      {metier.vocabulaire.slice(0, 2).map((mot, idx) => (
                        <span key={idx} className="text-[9px] px-1.5 py-0.5 bg-primary/10 text-primary rounded font-medium">
                          {mot}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                      Voir
                      <ChevronRight className="w-3 h-3 ml-0.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          COMPARAISONS POPULAIRES
      ═══════════════════════════════════════════════════════ */}
      <section id="comparaisons" className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center space-x-2 text-sm font-medium text-primary mb-4">
            <BarChart3 className="w-4 h-4" />
            <span>Comparatifs détaillés</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            21 comparaisons
            <br />
            <span className="text-muted-foreground">logiciel par logiciel.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Pas de classement arbitraire. Des comparaisons critère par critère,
            avec des tableaux de synthèse et des verdicts selon votre profil.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {COMPARAISONS_PHARES.map((comp, i) => (
            <motion.div
              key={comp.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <Link
                href={`/comparer/${comp.slug}`}
                className="group block bg-card rounded-xl border border-border p-5 hover-lift hover:border-primary/40 transition-colors h-full"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Layers className="w-5 h-5 text-primary" />
                  </div>
                  {comp.badge && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                      {comp.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {comp.titre}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{comp.desc}</p>
                <div className="flex items-center text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  Lire la comparaison
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
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
            <div className="inline-flex items-center space-x-2 text-sm font-medium text-primary mb-4">
              <Zap className="w-4 h-4" />
              <span>Quiz personnalisé</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Trouvez votre logiciel
              <br />
              <span className="text-muted-foreground">en 7 questions.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Répondez à 7 questions sur votre activité et recevez une recommandation personnalisée
              avec un score de compatibilité.
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
          <div className="inline-flex items-center space-x-2 text-sm font-medium text-primary mb-4">
            <TrendingUp className="w-4 h-4" />
            <span>Calculateur de ROI</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            Combien vous coûte
            <br />
            <span className="text-muted-foreground">votre gestion actuelle ?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Estimez le gain de temps qu'un bon logiciel pourrait vous apporter
            et calculez votre retour sur investissement.
          </p>
        </motion.div>
        <ROICalculator
         tauxHoraireDefaut={50}
         tempsAdminDefaut={5}
         metierNom="Artisan"
        />
      </section>

      {/* ═══════════════════════════════════════════════════════
          MÉTHODOLOGIE
      ═══════════════════════════════════════════════════════ */}
      <section id="methode" className="bg-card border-y border-border py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-16"
          >
            <div className="inline-flex items-center space-x-2 text-sm font-medium text-primary mb-4">
              <Eye className="w-4 h-4" />
              <span>Notre méthode d'analyse</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Transparence totale.
              <br />
              <span className="text-muted-foreground">Vérifiez vous-même.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Notre force, c'est la <strong className="text-foreground">rigueur documentaire</strong> et
              la <strong className="text-foreground">vérifiabilité</strong> de chaque affirmation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Documentation officielle',
                desc: 'Lecture exhaustive de la documentation, CGV, et pages fonctionnalités.',
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
                title: 'Recherches terrain',
                desc: 'Forums d\'artisans, groupes Facebook, Reddit. Pour comprendre les vrais usages.',
                icon: Search,
                duration: '2-3 jours par logiciel'
              },
              {
                step: '04',
                title: 'Publication sourcée',
                desc: 'Chaque affirmation ou statistique est accompagnée d\'un lien vérifiable.',
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
                className="bg-background rounded-xl border border-border p-6 hover-lift relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-5xl font-bold text-primary/10 select-none">{item.step}</div>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
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
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CONFIANCE
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
            <span className="text-primary">confiance ?</span>
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
      </section>

      {/* ═══════════════════════════════════════════════════════
          CTA FINAL
      ═══════════════════════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-2xl p-12 text-white text-center relative overflow-hidden"
        >
          {/* Decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Analyse 100% gratuite
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Prêt à choisir
              <br />
              votre logiciel ?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Quiz personnalisé, analyses sourcées, comparaisons détaillées —
              prenez une décision éclairée en toute confiance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#quiz"
                className="group inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-smooth"
              >
                <Zap className="w-4 h-4 mr-2" />
                Faire le quiz
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#logiciels"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-smooth"
              >
                Explorer les logiciels
              </Link>
            </div>
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
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white text-sm font-bold">
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
                {metiers.slice(0, 6).map((m) => (
                  <li key={m.slug}>
                    <Link href={`/${m.slug}`} className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                      {m.nom}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="#metiers" className="text-sm text-primary hover:text-primary/80 transition-smooth font-medium">
                    Voir les {metiers.length} métiers →
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
