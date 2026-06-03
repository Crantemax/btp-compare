'use client';

import { useState } from 'react';
import Link from 'next/link';
import { logiciels } from '../../data/logiciels';
import { ThemeToggle } from '../../components/theme-toggle';
import { ArrowLeft, Star, Check, X, ChevronRight, Search, Shield } from 'lucide-react';

// ── Helpers ────────────────────────────────────────────────────────────────────
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
function formatPrix(prix: string): string {
  if (!prix) return '—';
  if (prix.startsWith('0€')) return 'Gratuit';
  if (prix.toLowerCase().includes('sur devis')) return 'Sur devis';
  const m = prix.match(/(\d+€(?:\/[a-zA-Zé]+(?:\/[a-zA-Zé]+)*)?)/);
  return m ? `Dès ${m[1]}` : prix.split('(')[0].replace(/^À partir de\s*/i, 'Dès ').trim();
}

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

const TABS = ['Tous', 'BTP Spécialisé', 'ERP Généraliste', 'Auto-entrepreneur', 'Comptabilité'] as const;

function noteNum(l: typeof logiciels[0]): number {
  const src = l.sources?.trustpilot || l.sources?.g2;
  if (!src) return 0;
  return parseFloat(src.note.replace(',', '.').split('/')[0]) || 0;
}

export function LogicielsIndexClient() {
  const [activeTab, setActiveTab] = useState<string>('Tous');
  const [query, setQuery] = useState('');

  let filtered = activeTab === 'Tous' ? logiciels : logiciels.filter(l => LOGICIEL_CATEGORIES[l.slug] === activeTab);
  if (query.trim()) {
    const q = query.toLowerCase();
    filtered = filtered.filter(l => l.nom.toLowerCase().includes(q) || l.pitch.toLowerCase().includes(q));
  }
  // tri par note décroissante
  filtered = [...filtered].sort((a, b) => noteNum(b) - noteNum(a));

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
            <Link href="/logiciels" className="text-sm font-medium text-foreground">Logiciels</Link>
            <Link href="/comparer" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Comparer</Link>
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
          <span className="text-foreground">Logiciels BTP</span>
        </nav>

        {/* Hero */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-3">
            <Shield className="w-4 h-4" />
            <span>Comparateur indépendant</span>
          </div>
          <h1 className="text-4xl font-bold heading-editorial mb-3">
            Tous les logiciels BTP comparés en 2026
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {logiciels.length} logiciels de devis, facturation et gestion analysés sans filtre : prix réels,
            points forts, points faibles et avis vérifiés. Trouvez celui qui correspond à votre métier.
          </p>
        </div>

        {/* Recherche + onglets */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher un logiciel…"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {TABS.map(tab => {
              const count = tab === 'Tous' ? logiciels.length : logiciels.filter(l => LOGICIEL_CATEGORIES[l.slug] === tab).length;
              const isActive = activeTab === tab;
              return (
                <button key={tab} onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    isActive ? 'bg-primary text-white shadow-md shadow-primary/25' : 'bg-card border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground'
                  }`}>
                  {tab} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Grille */}
        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground py-16">Aucun logiciel ne correspond à votre recherche.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((logiciel) => {
              const style = getLogoStyle(logiciel.logo);
              const initials = getInitials(logiciel.nom);
              const prix = formatPrix(logiciel.tarification.formules[0]?.prix ?? '');
              const source = logiciel.sources?.trustpilot || logiciel.sources?.g2;
              const cat = LOGICIEL_CATEGORIES[logiciel.slug] ?? 'Autre';
              const catStyle = CATEGORY_STYLE[cat] ?? CATEGORY_STYLE['ERP Généraliste'];
              return (
                <div key={logiciel.slug} className="bg-card rounded-xl border border-border overflow-hidden hover:border-primary/40 transition-colors flex flex-col hover-lift">
                  <div className="h-1 bg-gradient-to-r from-primary to-amber-400" />
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-11 h-11 rounded-xl ${style.bg} flex items-center justify-center flex-shrink-0`}>
                          <span className={`text-sm font-bold ${style.text}`}>{initials}</span>
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h2 className="font-bold text-foreground">{logiciel.nom}</h2>
                            {logiciel.lienAffiliation && (
                              <span className="text-[9px] font-bold bg-green-500/10 text-green-600 dark:text-green-400 px-1.5 py-0.5 rounded-full">Partenaire</span>
                            )}
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
                    <div className="space-y-1 mb-4 text-xs">
                      {logiciel.pointsForts.slice(0, 2).map((pf, j) => (
                        <div key={j} className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-foreground/90">{pf.titre}</span></div>
                      ))}
                      {logiciel.pointsFaibles.slice(0, 1).map((pf, j) => (
                        <div key={j} className="flex items-start gap-1.5"><X className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{pf.titre}</span></div>
                      ))}
                    </div>
                    <div className="flex gap-2 pt-3 border-t border-border">
                      {logiciel.lienAffiliation ? (
                        <a href={logiciel.lienAffiliation} target="_blank" rel="noopener sponsored"
                          className="flex-1 text-center bg-primary text-white text-sm font-semibold py-2 rounded-lg hover:bg-primary/90 transition-colors">
                          Essayer →
                        </a>
                      ) : null}
                      <Link href={`/logiciels/${logiciel.slug}`}
                        className={`${logiciel.lienAffiliation ? 'px-4' : 'flex-1 text-center'} py-2 rounded-lg border border-border text-sm font-medium hover:bg-muted transition-colors`}>
                        {logiciel.lienAffiliation ? 'Analyse' : 'Voir l\'analyse complète'}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <h2 className="text-2xl font-bold mb-2 relative">Vous hésitez entre plusieurs logiciels ?</h2>
          <p className="text-white/80 mb-6 relative">Comparez-les côte à côte ou laissez notre quiz vous guider en 2 minutes.</p>
          <div className="flex flex-wrap gap-3 justify-center relative">
            <Link href="/comparer" className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
              Comparer les logiciels
            </Link>
            <Link href="/#quiz" className="inline-flex items-center gap-2 bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors">
              Faire le quiz
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
