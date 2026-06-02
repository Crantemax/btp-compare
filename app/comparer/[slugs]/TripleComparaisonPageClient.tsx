'use client';

import Link from 'next/link';
import { ThemeToggle } from '../../../components/theme-toggle';
import { logiciels as allLogiciels } from '../../../data/logiciels';
import { ArrowLeft, Check, X, Star, Printer, ChevronRight } from 'lucide-react';

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

// ── Critères de comparaison génériques ────────────────────────────────────────
const CRITERES = [
  { label: 'Prix de départ',       key: 'prix' as const },
  { label: 'Note utilisateurs',    key: 'note' as const },
  { label: 'Points forts',         key: 'forts' as const },
  { label: 'Points faibles',       key: 'faibles' as const },
  { label: 'Idéal pour',           key: 'idealPour' as const },
];

interface TripleComparaisonPageClientProps {
  slugs: [string, string, string];
}

export function TripleComparaisonPageClient({ slugs }: TripleComparaisonPageClientProps) {
  const logicielsList = slugs.map(s => allLogiciels.find(l => l.slug === s)).filter(Boolean);

  if (logicielsList.length < 3) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Logiciels non trouvés.</p>
      </div>
    );
  }

  const [l1, l2, l3] = logicielsList as NonNullable<typeof logicielsList[0]>[];

  return (
    <div className="min-h-screen bg-background">
      {/* Barre orange top */}
      <div className="h-1 w-full bg-gradient-to-r from-primary via-amber-400 to-primary fixed top-0 z-[60]" />

      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-1 z-50">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">BTP-Compare</span>
          </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg px-3 py-1.5 hover:bg-muted"
              title="Imprimer / Exporter en PDF"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Exporter PDF</span>
            </button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12 print:py-4">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6 print:hidden">
          <Link href="/" className="hover:text-foreground transition-colors">Accueil</Link>
          <ChevronRight className="w-3 h-3" />
          <span>Comparer</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground">{l1.nom} vs {l2.nom} vs {l3.nom}</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-4">
            Comparatif 3 logiciels
          </span>
          <h1 className="text-4xl font-bold heading-editorial mb-3">
            {l1.nom} vs {l2.nom} vs {l3.nom}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comparaison complète des 3 logiciels BTP : prix, fonctionnalités et verdict selon votre profil.
          </p>
        </div>

        {/* Cards des 3 logiciels */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[l1, l2, l3].map((logiciel, i) => {
            const style = getLogoStyle(logiciel.logo);
            const initials = getInitials(logiciel.nom);
            const source = logiciel.sources?.trustpilot || logiciel.sources?.g2;
            const prix = formatPrix(logiciel.tarification?.formules?.[0]?.prix ?? '');
            return (
              <div key={logiciel.slug} className={`rounded-xl border bg-card overflow-hidden ${i === 0 ? 'border-primary/50 ring-2 ring-primary/20' : 'border-border'}`}>
                <div className="h-1 bg-gradient-to-r from-primary to-amber-400" />
                <div className="p-6">
                  {i === 0 && (
                    <span className="inline-block text-xs font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-full mb-3">
                      ⭐ Notre recommandation
                    </span>
                  )}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${style.bg} flex items-center justify-center`}>
                      <span className={`text-base font-bold ${style.text}`}>{initials}</span>
                    </div>
                    <div>
                      <h2 className="font-bold text-lg">{logiciel.nom}</h2>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary">{prix}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{logiciel.pitch}</p>
                  {source && (
                    <div className="flex items-center gap-1.5 mb-4 text-sm">
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <span className="font-semibold">{source.note}</span>
                      <span className="text-muted-foreground">({source.nombreAvis} avis)</span>
                    </div>
                  )}
                  {logiciel.lienAffiliation ? (
                    <a
                      href={logiciel.lienAffiliation}
                      target="_blank"
                      rel="noopener sponsored"
                      className="w-full flex items-center justify-center gap-2 bg-primary text-white rounded-lg py-2.5 text-sm font-semibold hover:bg-primary/90 transition-colors"
                    >
                      Essayer {logiciel.nom}
                    </a>
                  ) : (
                    <Link
                      href={`/logiciels/${logiciel.slug}`}
                      className="w-full flex items-center justify-center gap-2 border border-border rounded-lg py-2.5 text-sm font-medium hover:bg-muted transition-colors"
                    >
                      Voir la fiche détaillée
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tableau comparatif */}
        <div className="rounded-xl border border-border overflow-hidden mb-12">
          <div className="bg-muted/50 px-6 py-4 border-b border-border">
            <h2 className="font-bold text-lg">Tableau comparatif</h2>
          </div>

          {/* En-têtes */}
          <div className="grid grid-cols-4 border-b border-border bg-card">
            <div className="p-4 text-sm font-semibold text-muted-foreground">Critère</div>
            {[l1, l2, l3].map(l => (
              <div key={l.slug} className="p-4 text-sm font-bold text-center border-l border-border">{l.nom}</div>
            ))}
          </div>

          {/* Prix */}
          <div className="grid grid-cols-4 border-b border-border hover:bg-muted/30 transition-colors">
            <div className="p-4 text-sm font-medium">Prix de départ</div>
            {[l1, l2, l3].map(l => (
              <div key={l.slug} className="p-4 text-sm font-semibold text-center border-l border-border text-primary">
                {formatPrix(l.tarification?.formules?.[0]?.prix ?? '')}
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="grid grid-cols-4 border-b border-border hover:bg-muted/30 transition-colors">
            <div className="p-4 text-sm font-medium">Note utilisateurs</div>
            {[l1, l2, l3].map(l => {
              const src = l.sources?.trustpilot || l.sources?.g2;
              return (
                <div key={l.slug} className="p-4 text-sm text-center border-l border-border">
                  {src ? (
                    <span className="inline-flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span className="font-semibold">{src.note}</span>
                    </span>
                  ) : <span className="text-muted-foreground">—</span>}
                </div>
              );
            })}
          </div>

          {/* Idéal pour */}
          <div className="grid grid-cols-4 border-b border-border hover:bg-muted/30 transition-colors">
            <div className="p-4 text-sm font-medium">Idéal pour</div>
            {[l1, l2, l3].map(l => (
              <div key={l.slug} className="p-4 text-xs text-center border-l border-border text-muted-foreground">
                {l.idealPour?.length > 80 ? l.idealPour.slice(0, 80) + '…' : l.idealPour}
              </div>
            ))}
          </div>

          {/* Points forts */}
          <div className="grid grid-cols-4 border-b border-border">
            <div className="p-4 text-sm font-medium">Points forts</div>
            {[l1, l2, l3].map(l => (
              <div key={l.slug} className="p-4 border-l border-border">
                <ul className="space-y-1.5">
                  {l.pointsForts?.slice(0, 3).map((pf, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-xs">
                      <Check className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{pf.titre}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Points faibles */}
          <div className="grid grid-cols-4">
            <div className="p-4 text-sm font-medium">Points faibles</div>
            {[l1, l2, l3].map(l => (
              <div key={l.slug} className="p-4 border-l border-border">
                <ul className="space-y-1.5">
                  {l.pointsFaibles?.slice(0, 2).map((pf, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-xs">
                      <X className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>{pf.titre}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Verdict */}
        <div className="bg-primary rounded-2xl p-8 text-white mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <h2 className="text-2xl font-bold mb-2">Notre verdict</h2>
          <p className="text-white/80 mb-6">
            <strong className="text-white">{l1.nom}</strong> est notre recommandation principale pour les artisans BTP qui veulent une solution spécialisée.{' '}
            <strong className="text-white">{l2.nom}</strong> est l'alternative idéale si vous avez besoin de plus de fonctionnalités gestion.{' '}
            <strong className="text-white">{l3.nom}</strong> se distingue pour les besoins spécifiques.
          </p>
          <div className="flex flex-wrap gap-3">
            {[l1, l2, l3].map(l => l.lienAffiliation ? (
              <a
                key={l.slug}
                href={l.lienAffiliation}
                target="_blank"
                rel="noopener sponsored"
                className="bg-white text-primary px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-white/90 transition-colors"
              >
                Essayer {l.nom}
              </a>
            ) : (
              <Link
                key={l.slug}
                href={`/logiciels/${l.slug}`}
                className="bg-white/20 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-white/30 transition-colors"
              >
                Voir {l.nom}
              </Link>
            ))}
          </div>
        </div>

        {/* Comparaisons 1v1 liées */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4">Comparaisons détaillées 1 vs 1</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { a: l1, b: l2 },
              { a: l1, b: l3 },
              { a: l2, b: l3 },
            ].map(({ a, b }) => {
              const slug = `${a.slug}-vs-${b.slug}`;
              return (
                <Link
                  key={slug}
                  href={`/comparer/${slug}`}
                  className="flex items-center justify-between p-4 rounded-xl border border-border hover:border-primary/40 hover:bg-card transition-colors group"
                >
                  <span className="text-sm font-medium">{a.nom} vs {b.nom}</span>
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mention affilié */}
        <p className="text-xs text-muted-foreground/60 text-center">
          Ce comparatif contient des liens affiliés. Nos analyses restent indépendantes.
        </p>

      </main>

      {/* Print CSS */}
      <style jsx global>{`
        @media print {
          header, nav, .print\\:hidden { display: none !important; }
          body { background: white !important; color: black !important; }
          .bg-primary { background: #e67e22 !important; }
        }
      `}</style>
    </div>
  );
}
