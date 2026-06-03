'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { comparaisons } from '../../data/comparaisons';
import { logiciels as allLogiciels } from '../../data/logiciels';
import { ThemeToggle } from '../../components/theme-toggle';
import { ArrowLeft, ChevronRight, Scale, Check, ArrowRight, Layers } from 'lucide-react';

// Les 7 logiciels disposant de comparaisons détaillées
const LOGICIELS_COMP = ['obat', 'axonaut', 'tolteck', 'progbat', 'batigest', 'ebp', 'sellsy'];

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
function getLogoStyle(logo: string) { return LOGO_STYLES[logo] ?? { bg: 'bg-primary/15', text: 'text-primary' }; }
function getInitials(nom: string): string {
  const words = nom.trim().split(/[\s\-]+/);
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
  return nom.slice(0, 2).toUpperCase();
}

// Construit le slug ordonné selon LOGICIELS_COMP (pour matcher les data existantes)
function buildSlug(slugs: string[]): string {
  const ordered = [...slugs].sort((a, b) => LOGICIELS_COMP.indexOf(a) - LOGICIELS_COMP.indexOf(b));
  return ordered.join('-vs-');
}

export function ComparerIndexClient() {
  const router = useRouter();
  const [selection, setSelection] = useState<string[]>([]);

  const toggle = (slug: string) => {
    setSelection(prev => {
      if (prev.includes(slug)) return prev.filter(s => s !== slug);
      if (prev.length >= 3) return prev; // max 3
      return [...prev, slug];
    });
  };

  const canCompare = selection.length >= 2;
  const lancer = () => {
    if (!canCompare) return;
    router.push(`/comparer/${buildSlug(selection)}`);
  };

  const comparaisonsList = Object.entries(comparaisons);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">BTP-Compare</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/logiciels" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Logiciels</Link>
            <Link href="/comparer" className="text-sm font-medium text-foreground">Comparer</Link>
            <Link href="/blog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground transition-colors">Accueil</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground">Comparer</span>
        </nav>

        {/* Hero */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-3">
            <Scale className="w-4 h-4" />
            <span>Comparaisons critère par critère</span>
          </div>
          <h1 className="text-4xl font-bold heading-editorial mb-3">
            Comparez les logiciels BTP côte à côte
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Sélectionnez 2 ou 3 logiciels pour générer une comparaison détaillée, ou parcourez nos
            comparatifs déjà rédigés. Prix, fonctionnalités et verdict selon votre profil.
          </p>
        </div>

        {/* ── Constructeur de comparaison ─────────────────────────────────── */}
        <section className="bg-card rounded-2xl border border-border p-6 md:p-8 mb-12">
          <h2 className="text-xl font-bold mb-1">Créez votre comparaison sur mesure</h2>
          <p className="text-sm text-muted-foreground mb-6">Choisissez 2 ou 3 logiciels (max. 3).</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-6">
            {LOGICIELS_COMP.map(slug => {
              const l = allLogiciels.find(x => x.slug === slug);
              if (!l) return null;
              const style = getLogoStyle(l.logo);
              const isSelected = selection.includes(slug);
              const isDisabled = !isSelected && selection.length >= 3;
              return (
                <button
                  key={slug}
                  onClick={() => toggle(slug)}
                  disabled={isDisabled}
                  className={`relative flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                    isSelected ? 'border-primary bg-primary/5' : isDisabled ? 'border-border opacity-40 cursor-not-allowed' : 'border-border hover:border-primary/40'
                  }`}
                >
                  {isSelected && (
                    <span className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </span>
                  )}
                  <div className={`w-10 h-10 rounded-xl ${style.bg} flex items-center justify-center`}>
                    <span className={`text-xs font-bold ${style.text}`}>{getInitials(l.nom)}</span>
                  </div>
                  <span className="text-xs font-semibold text-center">{l.nom}</span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={lancer}
              disabled={!canCompare}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                canCompare ? 'bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/25' : 'bg-muted text-muted-foreground cursor-not-allowed'
              }`}
            >
              Comparer {selection.length > 0 ? `(${selection.length})` : ''}
              <ArrowRight className="w-4 h-4" />
            </button>
            {selection.length === 1 && <span className="text-sm text-muted-foreground">Sélectionnez au moins un logiciel de plus.</span>}
            {selection.length > 0 && (
              <button onClick={() => setSelection([])} className="text-sm text-muted-foreground hover:text-foreground underline">
                Réinitialiser
              </button>
            )}
          </div>
        </section>

        {/* ── Comparaisons populaires ─────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold mb-1">Nos {comparaisonsList.length} comparatifs détaillés</h2>
          <p className="text-muted-foreground mb-6">Analyses complètes déjà rédigées, critère par critère.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {comparaisonsList.map(([slug, comp]) => {
              const s1 = getLogoStyle(comp.logo1);
              const s2 = getLogoStyle(comp.logo2);
              return (
                <Link
                  key={slug}
                  href={`/comparer/${slug}`}
                  className="group bg-card rounded-xl border border-border p-5 hover:border-primary/40 transition-colors hover-lift flex flex-col"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-9 h-9 rounded-lg ${s1.bg} flex items-center justify-center`}>
                      <span className={`text-xs font-bold ${s1.text}`}>{getInitials(comp.nom1)}</span>
                    </div>
                    <span className="text-xs font-bold text-muted-foreground">VS</span>
                    <div className={`w-9 h-9 rounded-lg ${s2.bg} flex items-center justify-center`}>
                      <span className={`text-xs font-bold ${s2.text}`}>{getInitials(comp.nom2)}</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {comp.nom1} vs {comp.nom2}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">{comp.seoDescription}</p>
                  <span className="inline-flex items-center text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    Lire la comparaison
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-16 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <Layers className="w-8 h-8 mx-auto mb-3 relative" />
          <h2 className="text-2xl font-bold mb-2 relative">Pas sûr de votre choix ?</h2>
          <p className="text-white/80 mb-6 relative">Notre quiz analyse votre métier et votre profil pour vous recommander le logiciel idéal.</p>
          <Link href="/#quiz" className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors relative">
            Faire le quiz gratuit
          </Link>
        </div>
      </main>
    </div>
  );
}
