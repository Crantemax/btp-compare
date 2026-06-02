'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ThemeToggle } from '../../components/theme-toggle';
import { ComparisonTable } from '../../components/comparison-table';
import { ROICalculator } from '../../components/roi-calculator';
import { AffiliateDisclosure } from '../../components/affiliate-disclosure';
import { TransparencyBanner } from '../../components/transparency-banner';
import { metiers } from '../../data/metiers';
import { logiciels as allLogiciels } from '../../data/logiciels';
import {
  ArrowLeft, Zap, ChevronRight, Check, X,
  Quote, Target, AlertTriangle, Award,
  Calculator, HelpCircle, Star, Eye, ExternalLink,
  Users, User, Building2, Briefcase, ArrowRight,
  Wrench, Shield, TrendingUp, Clock
} from 'lucide-react';

// ─── Helpers ──────────────────────────────────────────────────────────────────
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
function getInitials(nom: string): string {
  const words = nom.trim().split(/[\s\-]+/);
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
  return nom.slice(0, 2).toUpperCase();
}
function formatPrix(prix: string): string {
  if (!prix) return '—';
  if (prix.startsWith('0€')) return 'Gratuit';
  if (prix.toLowerCase().includes('sur devis')) return 'Sur devis';
  const m = prix.match(/(\d+€(?:\/[a-zA-Zé]+(?:\/[a-zA-Zé]+)*)?)/);
  return m ? `Dès ${m[1]}` : prix.split('(')[0].replace(/^À partir de\s*/i, 'Dès ').trim();
}

// Problèmes par métier (pour les liens internes)
const PROBLEMES_PAR_METIER: Record<string, { slug: string; label: string; icon: string }[]> = {
  plombier:      [{ slug: 'depannage-urgent', label: 'Dépannage urgent', icon: '🔧' }, { slug: 'salle-de-bain', label: 'Salle de bain', icon: '🚿' }, { slug: 'chauffage', label: 'Chauffage', icon: '🔥' }, { slug: 'tva-10-pourcent', label: 'TVA 10%', icon: '📋' }],
  electricien:   [{ slug: 'nfc-15-100', label: 'NFC 15-100', icon: '⚡' }, { slug: 'domotique', label: 'Domotique', icon: '🏠' }, { slug: 'bornes-irve', label: 'Bornes IRVE', icon: '🔌' }, { slug: 'tableaux-electriques', label: 'Tableaux élec.', icon: '🔲' }],
  macon:         [{ slug: 'situations-travaux', label: 'Situations de travaux', icon: '🏗️' }, { slug: 'compte-prorata', label: 'Compte prorata', icon: '📊' }, { slug: 'extensions', label: 'Extensions', icon: '🏠' }, { slug: 'murs-porteurs', label: 'Murs porteurs', icon: '🧱' }],
  couvreur:      [{ slug: 'toitures-complexes', label: 'Toitures complexes', icon: '🏠' }, { slug: 'zinguerie', label: 'Zinguerie', icon: '🔩' }, { slug: 'decennale', label: 'Décennale', icon: '📋' }, { slug: 'calculs-surface', label: 'Calculs surface', icon: '📐' }],
  menuisier:     [{ slug: 'sur-mesure', label: 'Sur-mesure', icon: '📏' }, { slug: 'escaliers', label: 'Escaliers', icon: '🪜' }, { slug: 'fenetres', label: 'Fenêtres', icon: '🪟' }, { slug: 'agencement', label: 'Agencement', icon: '🪑' }],
  carreleur:     [{ slug: 'carrelage-grand-format', label: 'Grand format', icon: '⬜' }, { slug: 'devis-metrage', label: 'Dévis métrage', icon: '📐' }, { slug: 'sous-traitance', label: 'Sous-traitance', icon: '🤝' }, { slug: 'salle-de-bain', label: 'Salle de bain', icon: '🚿' }],
  peintre:       [{ slug: 'devis-colorimetrie', label: 'Colorimétrie', icon: '🎨' }, { slug: 'multi-corps', label: 'Multi-corps', icon: '👥' }, { slug: 'ravalement', label: 'Ravalement', icon: '🏢' }, { slug: 'sous-traitants', label: 'Sous-traitants', icon: '🤝' }],
  chauffagiste:  [{ slug: 'pac-chaudiere', label: 'PAC / Chaudière', icon: '♨️' }, { slug: 'maintenance-contrats', label: 'Contrats maintenance', icon: '📋' }, { slug: 'qualification-rge', label: 'Qualification RGE', icon: '🏆' }, { slug: 'subventions', label: 'Subventions', icon: '💶' }],
  serrurier:     [{ slug: 'depannage-urgent', label: 'Dépannage urgent', icon: '🔑' }, { slug: 'serrures-haute-securite', label: 'Haute sécurité', icon: '🔒' }, { slug: 'coffres-forts', label: 'Coffres-forts', icon: '🏦' }, { slug: 'controle-acces', label: 'Contrôle accès', icon: '🚪' }],
  plaquiste:     [{ slug: 'cloisons', label: 'Cloisons', icon: '🏗️' }, { slug: 'faux-plafonds', label: 'Faux-plafonds', icon: '⬆️' }, { slug: 'isolation', label: 'Isolation', icon: '🌡️' }, { slug: 'enduits', label: 'Enduits', icon: '🖌️' }],
  vitrier:       [{ slug: 'vitrages-doubles', label: 'Double vitrage', icon: '🪟' }, { slug: 'miroirs', label: 'Miroirs', icon: '🪞' }, { slug: 'urgences-casse', label: 'Urgences casse', icon: '⚠️' }, { slug: 'stores', label: 'Stores', icon: '🪟' }],
  etancheur:     [{ slug: 'toitures-terrasses', label: 'Toitures-terrasses', icon: '🏢' }, { slug: 'fondations', label: 'Fondations', icon: '🏗️' }, { slug: 'parkings', label: 'Parkings', icon: '🅿️' }, { slug: 'diagnostics', label: 'Diagnostics', icon: '🔍' }],
  charpentier:   [{ slug: 'charpentes-traditionnelles', label: 'Charpentes trad.', icon: '🪵' }, { slug: 'ossature-bois', label: 'Ossature bois', icon: '🌲' }, { slug: 'renovation', label: 'Rénovation', icon: '🔨' }, { slug: 'calculs-structure', label: 'Calculs structure', icon: '📐' }],
  zingueur:      [{ slug: 'gouttieres', label: 'Gouttières', icon: '💧' }, { slug: 'descentes-ep', label: 'Descentes EP', icon: '⬇️' }, { slug: 'couvertines', label: 'Couvertines', icon: '🔩' }, { slug: 'zinguerie-ornementale', label: 'Zinguerie orn.', icon: '✨' }],
  terrassier:    [{ slug: 'vrd', label: 'VRD', icon: '🚜' }, { slug: 'fondations', label: 'Fondations', icon: '🏗️' }, { slug: 'assainissement', label: 'Assainissement', icon: '💧' }, { slug: 'terrains-en-pente', label: 'Terrains en pente', icon: '⛰️' }],
  paysagiste:    [{ slug: 'jardins-creation', label: 'Création jardins', icon: '🌿' }, { slug: 'terrasses-exterieur', label: 'Terrasses', icon: '🪴' }, { slug: 'irrigation', label: 'Irrigation', icon: '💧' }, { slug: 'contrats-entretien', label: 'Contrats entretien', icon: '📋' }],
  pisciniste:    [{ slug: 'construction-piscine', label: 'Construction', icon: '🏊' }, { slug: 'renovation-liner', label: 'Rénovation liner', icon: '🔧' }, { slug: 'equipements', label: 'Équipements', icon: '⚙️' }, { slug: 'maintenance', label: 'Maintenance', icon: '🛠️' }],
  alarmiste:     [{ slug: 'alarmes-intrusion', label: 'Alarmes intrusion', icon: '🚨' }, { slug: 'videoprotection', label: 'Vidéoprotection', icon: '📹' }, { slug: 'controle-acces', label: 'Contrôle accès', icon: '🚪' }, { slug: 'domotique', label: 'Domotique', icon: '🏠' }],
  ascensoriste:  [{ slug: 'installation', label: 'Installation', icon: '🔧' }, { slug: 'maintenance', label: 'Maintenance', icon: '🛠️' }, { slug: 'modernisation', label: 'Modernisation', icon: '⬆️' }, { slug: 'conformite-reglementaire', label: 'Conformité régl.', icon: '📋' }],
  facadier:      [{ slug: 'ravalement', label: 'Ravalement', icon: '🏢' }, { slug: 'isolation-exterieure', label: 'ITE', icon: '🌡️' }, { slug: 'peinture-exterieure', label: 'Peinture ext.', icon: '🎨' }, { slug: 'nettoyage', label: 'Nettoyage', icon: '🧹' }],
};

const TAILLES = [
  { slug: 'auto-entrepreneur', label: 'Auto-entrepreneur', icon: User, color: 'text-green-600', bg: 'bg-green-500/10', border: 'border-green-500/30' },
  { slug: 'artisan-seul', label: 'Artisan seul', icon: Briefcase, color: 'text-blue-600', bg: 'bg-blue-500/10', border: 'border-blue-500/30' },
  { slug: 'equipe-2-5', label: 'Équipe 2-5 pers.', icon: Users, color: 'text-orange-600', bg: 'bg-orange-500/10', border: 'border-orange-500/30' },
  { slug: 'pme-5-15', label: 'PME 5-15 pers.', icon: Building2, color: 'text-purple-600', bg: 'bg-purple-500/10', border: 'border-purple-500/30' },
];

// ── Catégories des logiciels ───────────────────────────────────────────────────
const LOGICIEL_CATEGORIES: Record<string, string> = {
  obat: 'BTP Spécialisé', tolteck: 'BTP Spécialisé', progbat: 'BTP Spécialisé',
  batigest: 'BTP Spécialisé', ebp: 'BTP Spécialisé', 'sage-100-btp': 'BTP Spécialisé',
  axonaut: 'ERP Généraliste', sellsy: 'ERP Généraliste', holded: 'ERP Généraliste',
  abby: 'Auto-entrepreneur', henrri: 'Auto-entrepreneur', freebe: 'Auto-entrepreneur',
  'facture-net': 'Auto-entrepreneur', tiime: 'Auto-entrepreneur',
  pennylane: 'Comptabilité', quickbooks: 'Comptabilité', 'zoho-invoice': 'Comptabilité',
};
const CATEGORY_STYLE: Record<string, { bg: string; text: string }> = {
  'BTP Spécialisé':    { bg: 'bg-orange-500/10', text: 'text-orange-600 dark:text-orange-400' },
  'ERP Généraliste':   { bg: 'bg-blue-500/10',   text: 'text-blue-600 dark:text-blue-400' },
  'Auto-entrepreneur': { bg: 'bg-green-500/10',  text: 'text-green-600 dark:text-green-400' },
  'Comptabilité':      { bg: 'bg-purple-500/10', text: 'text-purple-600 dark:text-purple-400' },
};

// ── Top 3 recommandés par métier ───────────────────────────────────────────────
const METIER_TOP3: Record<string, string[]> = {
  plombier:     ['obat', 'tolteck', 'axonaut'],
  electricien:  ['obat', 'tolteck', 'axonaut'],
  macon:        ['obat', 'progbat', 'batigest'],
  couvreur:     ['obat', 'progbat', 'tolteck'],
  menuisier:    ['obat', 'tolteck', 'axonaut'],
  carreleur:    ['obat', 'tolteck', 'axonaut'],
  peintre:      ['obat', 'axonaut', 'abby'],
  chauffagiste: ['obat', 'progbat', 'axonaut'],
  serrurier:    ['obat', 'axonaut', 'tolteck'],
  plaquiste:    ['obat', 'progbat', 'tolteck'],
  vitrier:      ['obat', 'tolteck', 'axonaut'],
  etancheur:    ['obat', 'progbat', 'batigest'],
  charpentier:  ['obat', 'progbat', 'batigest'],
  zingueur:     ['obat', 'progbat', 'tolteck'],
  terrassier:   ['progbat', 'batigest', 'obat'],
  paysagiste:   ['obat', 'axonaut', 'tolteck'],
  pisciniste:   ['obat', 'axonaut', 'tolteck'],
  alarmiste:    ['axonaut', 'obat', 'sellsy'],
  ascensoriste: ['batigest', 'axonaut', 'obat'],
  facadier:     ['obat', 'progbat', 'tolteck'],
};

const TOP_COLORS = [
  { border: 'border-amber-400', badge: 'bg-amber-400', btn: 'bg-amber-500 hover:bg-amber-600' },
  { border: 'border-blue-500',  badge: 'bg-blue-500',  btn: 'bg-blue-500 hover:bg-blue-600' },
  { border: 'border-primary',   badge: 'bg-primary',   btn: 'bg-primary hover:bg-primary/90' },
];

interface MetierPageClientProps {
  metierSlug: string;
}

export function MetierPageClient({ metierSlug }: MetierPageClientProps) {
  const data = metiers.find(m => m.slug === metierSlug);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center gradient-subtle">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Métier non trouvé</h1>
          <a href="/" className="text-primary hover:underline">Retour à l'accueil</a>
        </div>
      </div>
    );
  }

  const [activeTab, setActiveTab] = useState<string>('tous');
  const topSlugs = METIER_TOP3[data.slug] ?? ['obat', 'axonaut', 'tolteck'];
  const topLogiciels = topSlugs.map(slug => allLogiciels.find(l => l.slug === slug)).filter(Boolean) as typeof allLogiciels;
  const filteredLogiciels = activeTab === 'tous'
    ? allLogiciels
    : allLogiciels.filter(l => LOGICIEL_CATEGORIES[l.slug] === activeTab);
  const problemes = PROBLEMES_PAR_METIER[data.slug] ?? [];

  return (
    <div className="min-h-screen gradient-subtle">

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 w-full z-50 glass-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white text-sm font-bold group-hover:scale-105 transition-transform">B</div>
              <div className="text-lg font-semibold text-foreground tracking-tight">BTP-Compare</div>
            </a>
            <nav className="hidden md:flex items-center space-x-6">
              <a href={`/${data.slug}#verdict`} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">Verdict</a>
              <a href={`/${data.slug}#problemes`} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">Problématiques</a>
              <a href={`/${data.slug}#criteres`} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">Critères</a>
              <a href={`/${data.slug}#faq`} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">FAQ</a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* HERO — image pleine + gradient */}
      <div className="relative h-[580px] overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0">
          <img
            src={data.image}
            alt={data.nom}
            className="w-full h-full object-cover"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = '0'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        </div>

        {/* Contenu hero */}
        <div className="relative h-full flex flex-col justify-end pt-16">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 pb-12 w-full">
            {/* Breadcrumb */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-white/60 text-sm mb-4">
              <a href="/" className="hover:text-white transition-colors">Accueil</a>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-white/80">{data.nom}</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-4">
              <span className="inline-flex items-center gap-2 bg-primary/90 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Analyse indépendante 2026
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Meilleur logiciel pour<br />
              <span className="text-primary">les {data.nomPluriel}</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed">
              {data.heroSubtitle}
            </motion.p>

            {/* Stats rapides */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-wrap gap-3">
              {data.statsMetier.slice(0, 3).map((stat, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2.5">
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/70">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <AffiliateDisclosure />
      <TransparencyBanner />

      {/* PAR TAILLE D'ENTREPRISE — navigation rapide */}
      <section className="border-b border-border bg-card">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex items-center gap-3 mb-5">
            <Users className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-bold text-foreground">Filtrer par taille d'entreprise</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {TAILLES.map((taille) => {
              const Icon = taille.icon;
              return (
                <a
                  key={taille.slug}
                  href={`/${data.slug}/taille/${taille.slug}`}
                  className={`group flex items-center gap-3 p-4 rounded-xl border ${taille.border} ${taille.bg} hover:opacity-90 transition-all hover-lift`}
                >
                  <Icon className={`w-5 h-5 ${taille.color} flex-shrink-0`} />
                  <div>
                    <div className={`text-sm font-semibold ${taille.color}`}>{taille.label}</div>
                    <div className="text-xs text-muted-foreground">Voir les conseils →</div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6 lg:px-8 py-16">

        {/* INTRO + QUOTIDIEN */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">{data.intro}</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-primary/5 rounded-xl border border-primary/20 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-foreground">Votre quotidien</h3>
              </div>
              <ul className="space-y-2">
                {data.problemesQuotidiens.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-foreground">Chiffres clés</h3>
              </div>
              <div className="space-y-3">
                {data.statsMetier.map((stat, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                    <span className="text-lg font-bold text-primary">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* ═══ TOP 3 RECOMMANDÉS ══════════════════════════════════════════════ */}
        <motion.section id="verdict" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-3">
              <Award className="w-4 h-4" />
              <span>Notre sélection pour les {data.nomPluriel.toLowerCase()}</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground mb-2 leading-tight">
              Top 3 logiciels,<br />
              <span className="text-muted-foreground">selon votre métier.</span>
            </h2>
            <p className="text-muted-foreground">Classement basé sur documentation officielle + avis vérifiés + pertinence métier.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-6">
            {topLogiciels.map((logiciel, i) => {
              const style = getLogoStyle(logiciel.logo);
              const initials = getInitials(logiciel.nom);
              const prix = formatPrix(logiciel.tarification.formules[0]?.prix ?? '');
              const source = logiciel.sources?.trustpilot || logiciel.sources?.g2;
              const colors = TOP_COLORS[i];
              const cat = LOGICIEL_CATEGORIES[logiciel.slug] ?? 'Autre';
              const catStyle = CATEGORY_STYLE[cat] ?? CATEGORY_STYLE['ERP Généraliste'];
              const MEDAL = ['🥇', '🥈', '🥉'];
              return (
                <motion.div key={logiciel.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className={`relative bg-card rounded-xl border-2 ${colors.border} overflow-hidden flex flex-col`}>
                  <div className="h-1 bg-gradient-to-r from-primary to-amber-400" />
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-11 h-11 rounded-xl ${style.bg} flex items-center justify-center flex-shrink-0`}>
                          <span className={`text-sm font-bold ${style.text}`}>{initials}</span>
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-base">{MEDAL[i]}</span>
                            <h3 className="font-bold text-foreground">{logiciel.nom}</h3>
                          </div>
                          <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${catStyle.bg} ${catStyle.text}`}>{cat}</span>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="text-sm font-bold text-primary">{prix}</div>
                        {source && <div className="flex items-center gap-0.5 justify-end text-xs text-muted-foreground"><Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />{source.note}</div>}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3 flex-1">{logiciel.pitch}</p>
                    <div className="space-y-1 mb-3 text-xs">
                      {logiciel.pointsForts.slice(0, 3).map((pf, j) => (
                        <div key={j} className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" /><span>{pf.titre}</span></div>
                      ))}
                      {logiciel.pointsFaibles.slice(0, 1).map((pf, j) => (
                        <div key={j} className="flex items-start gap-1.5"><X className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{pf.titre}</span></div>
                      ))}
                    </div>
                    <div className="flex gap-2 pt-3 border-t border-border">
                      {logiciel.lienAffiliation ? (
                        <a href={logiciel.lienAffiliation} target="_blank" rel="noopener sponsored"
                          className={`flex-1 text-center py-2 rounded-lg text-white text-sm font-semibold transition-all ${colors.btn}`}>
                          Essayer {logiciel.nom}
                        </a>
                      ) : (
                        <a href={`/logiciels/${logiciel.slug}`} className="flex-1 text-center py-2 rounded-lg bg-muted text-foreground text-sm font-semibold hover:bg-muted/80 transition-all">
                          Voir l'analyse
                        </a>
                      )}
                      <a href={`/logiciels/${logiciel.slug}`} className="px-3 py-2 rounded-lg border border-border text-muted-foreground hover:text-foreground transition-all" title="Fiche détaillée">
                        <Eye className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ═══ COMPARATIF COMPLET — TOUS LES LOGICIELS ═══════════════════════ */}
        <motion.section id="comparatif" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-3">
              <Shield className="w-4 h-4" />
              <span>Analyse indépendante et complète</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground mb-2 leading-tight">
              Tous les logiciels,<br />
              <span className="text-muted-foreground">comparés sans filtre.</span>
            </h2>
            <p className="text-muted-foreground">{allLogiciels.length} logiciels analysés — points forts, points faibles et prix réels.</p>
          </div>

          {/* Onglets filtre */}
          <div className="flex flex-wrap gap-2 mb-8">
            {(['tous', 'BTP Spécialisé', 'ERP Généraliste', 'Auto-entrepreneur', 'Comptabilité'] as const).map(tab => {
              const count = tab === 'tous' ? allLogiciels.length : allLogiciels.filter(l => LOGICIEL_CATEGORIES[l.slug] === tab).length;
              const isActive = activeTab === tab;
              return (
                <button key={tab} onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    isActive ? 'bg-primary text-white shadow-md shadow-primary/25' : 'bg-card border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground'
                  }`}>
                  {tab === 'tous' ? `Tous (${count})` : `${tab} (${count})`}
                </button>
              );
            })}
          </div>

          {/* Grille complète */}
          <div className="grid md:grid-cols-2 gap-5">
            {filteredLogiciels.map((logiciel) => {
              const style = getLogoStyle(logiciel.logo);
              const initials = getInitials(logiciel.nom);
              const prix = formatPrix(logiciel.tarification.formules[0]?.prix ?? '');
              const source = logiciel.sources?.trustpilot || logiciel.sources?.g2;
              const cat = LOGICIEL_CATEGORIES[logiciel.slug] ?? 'Autre';
              const catStyle = CATEGORY_STYLE[cat] ?? CATEGORY_STYLE['ERP Généraliste'];
              const isTop = topSlugs.includes(logiciel.slug);
              const topRank = topSlugs.indexOf(logiciel.slug);
              const MEDAL = ['🥇', '🥈', '🥉'];

              return (
                <div key={logiciel.slug} className={`bg-card rounded-xl border overflow-hidden ${isTop ? 'border-primary/40 ring-1 ring-primary/10' : 'border-border'}`}>
                  <div className={`h-1 ${isTop ? 'bg-gradient-to-r from-primary to-amber-400' : 'bg-border'}`} />
                  <div className="p-5">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl ${style.bg} flex items-center justify-center flex-shrink-0 relative`}>
                          <span className={`text-sm font-bold ${style.text}`}>{initials}</span>
                          {isTop && (
                            <span className="absolute -top-1.5 -right-1.5 text-sm">{MEDAL[topRank]}</span>
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-foreground text-base">{logiciel.nom}</h3>
                            {logiciel.lienAffiliation && (
                              <span className="text-[9px] font-bold bg-green-500/10 text-green-600 dark:text-green-400 px-1.5 py-0.5 rounded-full">Lien affilié</span>
                            )}
                          </div>
                          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${catStyle.bg} ${catStyle.text}`}>{cat}</span>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0 ml-2">
                        <div className="text-sm font-bold text-primary mb-0.5">{prix}</div>
                        {source && (
                          <div className="flex items-center gap-0.5 justify-end">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs font-medium">{source.note}</span>
                            <span className="text-xs text-muted-foreground">({source.nombreAvis})</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Pitch */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{logiciel.pitch}</p>

                    {/* Points forts */}
                    <div className="mb-3">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-green-600 dark:text-green-400 mb-2">Points forts</p>
                      <div className="space-y-1.5">
                        {logiciel.pointsForts.slice(0, 3).map((pf, j) => (
                          <div key={j} className="flex items-start gap-2 text-xs">
                            <Check className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-foreground/90">{pf.titre} — <span className="text-muted-foreground">{pf.description}</span></span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Points faibles */}
                    <div className="mb-4 pb-4 border-b border-border">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-red-500 mb-2">Points faibles</p>
                      <div className="space-y-1.5">
                        {logiciel.pointsFaibles.slice(0, 2).map((pf, j) => (
                          <div key={j} className="flex items-start gap-2 text-xs">
                            <X className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{pf.titre} — {pf.description}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Idéal pour */}
                    <p className="text-xs text-muted-foreground mb-4 bg-muted/50 rounded-lg px-3 py-2">
                      <span className="font-semibold text-foreground">Idéal pour : </span>{logiciel.idealPour}
                    </p>

                    {/* CTA */}
                    <div className="flex gap-2">
                      {logiciel.lienAffiliation ? (
                        <a href={logiciel.lienAffiliation} target="_blank" rel="noopener sponsored"
                          className="flex-1 text-center bg-primary text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-primary/90 transition-colors">
                          Essayer {logiciel.nom} →
                        </a>
                      ) : (
                        <a href={`/logiciels/${logiciel.slug}`}
                          className="flex-1 text-center border border-border text-sm font-medium py-2.5 rounded-lg hover:bg-muted transition-colors">
                          Voir l'analyse complète
                        </a>
                      )}
                      <a href={`/logiciels/${logiciel.slug}`}
                        className="px-3 py-2.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                        title="Fiche détaillée">
                        <Eye className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.section>

        {/* PROBLÉMATIQUES SPÉCIFIQUES */}
        {problemes.length > 0 && (
          <motion.section id="problemes" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-3">
                <Wrench className="w-4 h-4" />
                <span>Guides par problématique</span>
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-foreground mb-3 leading-tight">
                Vos 4 problématiques,<br />
                <span className="text-muted-foreground">analysées en détail.</span>
              </h2>
              <p className="text-lg text-muted-foreground">Chaque guide compare les logiciels sur une problématique spécifique à votre métier.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {problemes.map((p, i) => (
                <motion.a
                  key={p.slug}
                  href={`/${data.slug}/${p.slug}`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group flex items-center gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary/40 hover-lift transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    {p.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors">{p.label}</div>
                    <div className="text-sm text-muted-foreground">Quel logiciel pour ce cas ?</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </motion.a>
              ))}
            </div>
          </motion.section>
        )}

        {/* COMPARATIF TABLE */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card rounded-xl border border-border p-8 mb-16">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-3">
              <Eye className="w-4 h-4" />
              <span>Analyse spécifique aux {data.nomPluriel.toLowerCase()}</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-2">Comparatif technique</h2>
            <p className="text-muted-foreground">
              {data.criteresComparatif.length} critères évalués spécifiquement pour les {data.nomPluriel.toLowerCase()}.
            </p>
          </div>
          <ComparisonTable
            criteres={data.criteresComparatif}
            alternatives={data.alternatives}
            metierNom={data.nom}
          />
        </motion.section>

        {/* CRITÈRES ESSENTIELS */}
        <motion.section id="criteres" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-3">
              <Target className="w-4 h-4" />
              <span>Ce qui compte vraiment pour vous</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground mb-3 leading-tight">
              Les critères clés<br />
              <span className="text-muted-foreground">qui font la différence.</span>
            </h2>
          </div>
          <div className="space-y-3">
            {data.criteresEssentiels.map((critere, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-xl border border-border p-5 hover-lift flex items-start gap-4"
              >
                <div className={`rounded-xl w-10 h-10 flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                  critere.importance === 'critique' ? 'bg-red-500/10 text-red-500' :
                  critere.importance === 'important' ? 'bg-primary/10 text-primary' :
                  'bg-muted text-muted-foreground'
                }`}>
                  {i + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-foreground">{critere.titre}</h3>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      critere.importance === 'critique' ? 'bg-red-500/10 text-red-500' :
                      critere.importance === 'important' ? 'bg-primary/10 text-primary' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      {critere.importance?.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{critere.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* AVIS VÉRIFIÉS */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-3">
              <Quote className="w-4 h-4" />
              <span>Avis sourcés — Trustpilot & G2</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground mb-3 leading-tight">
              Ce qu'en disent<br />
              <span className="text-muted-foreground">les vrais utilisateurs.</span>
            </h2>
          </div>
          <div className="space-y-4">
            {data.avisVerifies.map((avis, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl border border-border p-6"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {avis.auteur.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">{avis.auteur}</div>
                      <div className="text-xs text-muted-foreground">{avis.source} · {new Date(avis.date).toLocaleDateString('fr-FR')}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }, (_, k) => (
                      <Star key={k} className={`w-4 h-4 ${k < avis.note ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/30'}`} />
                    ))}
                  </div>
                </div>
                <p className="text-foreground leading-relaxed italic text-sm mb-3">"{avis.texte}"</p>
                <a href={avis.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground underline">
                  Vérifier l'avis <ExternalLink className="w-3 h-3" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ERREURS À ÉVITER */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-red-500 mb-3">
              <AlertTriangle className="w-4 h-4" />
              <span>Ce qu'on voit trop souvent</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground mb-3 leading-tight">
              3 erreurs classiques<br />
              <span className="text-muted-foreground">à éviter absolument.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {data.erreursAEviter.map((erreur, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl border border-border border-t-4 border-t-red-400 p-6"
              >
                <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center mb-3">
                  <span className="text-red-500 font-bold text-sm">{i + 1}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{erreur.titre}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{erreur.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ROI CALCULATOR */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-3">
              <Calculator className="w-4 h-4" />
              <span>Calculateur personnalisé</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground mb-3 leading-tight">
              Combien vous coûte<br />
              <span className="text-muted-foreground">votre admin actuelle ?</span>
            </h2>
            <p className="text-muted-foreground">
              Pré-rempli avec les moyennes des {data.nomPluriel.toLowerCase()} ({data.tauxHoraireMoyen}€/h · {data.tempsAdminParSemaine}h d'admin/semaine).
            </p>
          </div>
          <ROICalculator
            tauxHoraireDefaut={data.tauxHoraireMoyen}
            tempsAdminDefaut={data.tempsAdminParSemaine}
            metierNom={data.nom}
          />
        </motion.section>

        {/* FAQ */}
        <motion.section id="faq" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-3">
              <HelpCircle className="w-4 h-4" />
              <span>Questions fréquentes</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground mb-3 leading-tight">
              Vos questions,<br />
              <span className="text-muted-foreground">nos réponses.</span>
            </h2>
          </div>
          <div className="space-y-3">
            {data.faqMetier.map((item, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group bg-card rounded-xl border border-border p-5 hover:border-primary/30 transition-colors"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="font-semibold text-foreground pr-4">{item.question}</h3>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-open:rotate-90 transition-transform flex-shrink-0 text-primary" />
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{item.reponse}</p>
              </motion.details>
            ))}
          </div>
        </motion.section>

        {/* CTA FINAL */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-primary rounded-2xl p-10 text-white text-center mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative">
            <h2 className="text-3xl font-bold mb-3">Encore un doute ?</h2>
            <p className="text-white/80 mb-6">Notre quiz identifie le meilleur logiciel pour votre situation en 2 minutes.</p>
            <a href="/#quiz" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-all">
              <Zap className="w-4 h-4" />
              Faire le quiz gratuit
            </a>
          </div>
        </motion.section>

        {/* RETOUR */}
        <div className="text-center">
          <a href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-smooth">
            <ArrowLeft className="w-4 h-4" />Voir tous les métiers
          </a>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border mt-16 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white text-sm font-bold">B</div>
                <div className="text-lg font-semibold text-foreground">BTP-Compare</div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-3">Comparateur indépendant de logiciels pour artisans du bâtiment. Analyses sourcées et vérifiables.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Autres métiers</h3>
              <ul className="space-y-1.5">
                {metiers.filter(m => m.slug !== data.slug).slice(0, 8).map(m => (
                  <li key={m.slug}>
                    <a href={`/${m.slug}`} className="text-sm text-muted-foreground hover:text-foreground transition-smooth">{m.nom}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Informations</h3>
              <ul className="space-y-1.5">
                <li><a href="/legal/mentions-legales" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Mentions légales</a></li>
                <li><a href="/legal/politique-confidentialite" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Confidentialité</a></li>
                <li><a href="/legal/affiliation" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Transparence affiliation</a></li>
                <li><a href="/legal/contact" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-6 border-t border-border flex justify-between items-center">
            <div className="text-xs text-muted-foreground">© 2026 BTP-Compare.fr</div>
            <div className="text-xs text-muted-foreground">Rennes, France 🇫🇷</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
