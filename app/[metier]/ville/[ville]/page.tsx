import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { metiers } from '../../../../data/metiers';
import { logiciels } from '../../../../data/logiciels';
import { ThemeToggle } from '../../../../components/theme-toggle';
import { ArrowLeft, MapPin, Star, Check, ChevronRight } from 'lucide-react';

const VILLES = [
  { slug: 'paris', nom: 'Paris', region: 'Île-de-France', departement: '75' },
  { slug: 'lyon', nom: 'Lyon', region: 'Auvergne-Rhône-Alpes', departement: '69' },
  { slug: 'marseille', nom: 'Marseille', region: 'PACA', departement: '13' },
  { slug: 'toulouse', nom: 'Toulouse', region: 'Occitanie', departement: '31' },
  { slug: 'bordeaux', nom: 'Bordeaux', region: 'Nouvelle-Aquitaine', departement: '33' },
  { slug: 'nantes', nom: 'Nantes', region: 'Pays de la Loire', departement: '44' },
  { slug: 'lille', nom: 'Lille', region: 'Hauts-de-France', departement: '59' },
  { slug: 'strasbourg', nom: 'Strasbourg', region: 'Grand Est', departement: '67' },
  { slug: 'nice', nom: 'Nice', region: 'PACA', departement: '06' },
  { slug: 'rennes', nom: 'Rennes', region: 'Bretagne', departement: '35' },
];

const METIERS_SLUGS = [
  'plombier', 'electricien', 'macon', 'couvreur', 'menuisier', 'carreleur',
  'peintre', 'chauffagiste', 'serrurier', 'plaquiste', 'vitrier', 'etancheur',
  'charpentier', 'zingueur', 'terrassier', 'paysagiste', 'pisciniste',
  'alarmiste', 'ascensoriste', 'facadier',
];

export async function generateStaticParams() {
  const params = [];
  for (const metier of METIERS_SLUGS) {
    for (const ville of VILLES) {
      params.push({ metier, ville: ville.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { metier: string; ville: string };
}): Promise<Metadata> {
  const metier = metiers.find(m => m.slug === params.metier);
  const ville = VILLES.find(v => v.slug === params.ville);
  if (!metier || !ville) return { title: 'Page non trouvée' };

  return {
    title: `Meilleur logiciel ${metier.nom.toLowerCase()} ${ville.nom} — Comparatif 2026`,
    description: `Quel logiciel de devis choisir pour un ${metier.nom.toLowerCase()} à ${ville.nom} (${ville.departement}) ? Comparatif adapté aux artisans de ${ville.region}.`,
    keywords: [
      `logiciel ${metier.nom.toLowerCase()} ${ville.nom}`,
      `logiciel devis artisan ${ville.nom}`,
      `meilleur logiciel ${metier.nom.toLowerCase()} ${ville.departement}`,
    ],
    alternates: { canonical: `https://btp-compare.fr/${params.metier}/ville/${params.ville}` },
  };
}

export default function VillePage({
  params,
}: {
  params: { metier: string; ville: string };
}) {
  const metier = metiers.find(m => m.slug === params.metier);
  const ville = VILLES.find(v => v.slug === params.ville);
  if (!metier || !ville) notFound();

  // Top 3 logiciels génériques pour ce métier
  const TOP_LOGICIELS = ['obat', 'axonaut', 'tolteck'];
  const topLogiciels = TOP_LOGICIELS
    .map(slug => logiciels.find(l => l.slug === slug))
    .filter(Boolean) as typeof logiciels;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://btp-compare.fr' },
      { '@type': 'ListItem', position: 2, name: `${metier.nom}`, item: `https://btp-compare.fr/${metier.slug}` },
      { '@type': 'ListItem', position: 3, name: `${metier.nom} ${ville.nom}`, item: `https://btp-compare.fr/${params.metier}/ville/${params.ville}` },
    ],
  };

  const LOGO_STYLES: Record<string, { bg: string; text: string }> = {
    '🟢': { bg: 'bg-green-500/15', text: 'text-green-700 dark:text-green-400' },
    '🔵': { bg: 'bg-blue-500/15', text: 'text-blue-700 dark:text-blue-400' },
    '🟠': { bg: 'bg-orange-500/15', text: 'text-orange-600 dark:text-orange-400' },
    '🟣': { bg: 'bg-purple-500/15', text: 'text-purple-700 dark:text-purple-400' },
    '🔴': { bg: 'bg-red-500/15', text: 'text-red-700 dark:text-red-400' },
    '🟡': { bg: 'bg-yellow-500/15', text: 'text-yellow-700 dark:text-yellow-500' },
    '🔷': { bg: 'bg-cyan-500/15', text: 'text-cyan-700 dark:text-cyan-400' },
    '🟤': { bg: 'bg-amber-700/15', text: 'text-amber-800 dark:text-amber-400' },
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

  // Autres villes (liens internes)
  const autresVilles = VILLES.filter(v => v.slug !== params.ville).slice(0, 5);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-background">
        <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
          <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link href={`/${params.metier}`} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Retour {metier.nom}</span>
            </Link>
            <ThemeToggle />
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-4 py-10">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground">Accueil</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href={`/${params.metier}`} className="hover:text-foreground">{metier.nom}</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground">{ville.nom}</span>
          </nav>

          {/* Hero */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">{ville.nom} · {ville.region}</span>
            </div>
            <h1 className="text-3xl font-bold heading-editorial mb-3">
              Meilleur logiciel {metier.nom.toLowerCase()} à {ville.nom} en 2026
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Vous cherchez un logiciel de devis et facturation pour votre activité de {metier.nom.toLowerCase()} à {ville.nom} ?
              Notre comparatif indépendant vous aide à faire le bon choix selon votre profil et votre budget.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">

              {/* Top 3 */}
              <section>
                <h2 className="text-xl font-bold mb-4">
                  Notre sélection pour les {metier.nomPluriel || metier.nom.toLowerCase() + 's'} à {ville.nom}
                </h2>
                <div className="space-y-4">
                  {topLogiciels.map((logiciel, i) => {
                    const style = getLogoStyle(logiciel.logo);
                    const initials = getInitials(logiciel.nom);
                    const source = logiciel.sources?.trustpilot || logiciel.sources?.g2;
                    return (
                      <div key={logiciel.slug} className={`rounded-xl border bg-card overflow-hidden ${i === 0 ? 'border-primary/40' : 'border-border'}`}>
                        <div className="h-1 bg-gradient-to-r from-primary to-amber-400" />
                        <div className="p-5 flex items-start gap-4">
                          <div className="flex-shrink-0 flex flex-col items-center gap-1">
                            <span className="text-2xl font-bold text-muted-foreground/40">#{i + 1}</span>
                            <div className={`w-10 h-10 rounded-xl ${style.bg} flex items-center justify-center`}>
                              <span className={`text-sm font-bold ${style.text}`}>{initials}</span>
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h3 className="font-bold">{logiciel.nom}</h3>
                              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                                {formatPrix(logiciel.tarification?.formules?.[0]?.prix ?? '')}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">{logiciel.pitch}</p>
                            {source && (
                              <div className="flex items-center gap-1 mb-3 text-xs text-muted-foreground">
                                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                                <span className="font-semibold text-foreground">{source.note}</span>
                                <span>({source.nombreAvis} avis)</span>
                              </div>
                            )}
                            <div className="flex flex-wrap gap-2 mb-3">
                              {logiciel.pointsForts?.slice(0, 2).map((pf, j) => (
                                <span key={j} className="inline-flex items-center gap-1 text-xs">
                                  <Check className="w-3 h-3 text-green-500" />
                                  {pf.titre}
                                </span>
                              ))}
                            </div>
                            <div className="flex items-center gap-3">
                              {logiciel.lienAffiliation ? (
                                <a
                                  href={logiciel.lienAffiliation}
                                  target="_blank"
                                  rel="noopener sponsored"
                                  className="text-sm bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                                >
                                  Essayer gratuitement
                                </a>
                              ) : null}
                              <Link
                                href={`/logiciels/${logiciel.slug}`}
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
                              >
                                Voir la fiche complète
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Contenu local */}
              <section className="card-base">
                <h2 className="text-xl font-bold mb-4">
                  Particularités du marché {metier.nom.toLowerCase()} à {ville.nom}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Le secteur du BTP à {ville.nom} ({ville.region}) est particulièrement dynamique.
                  Les {metier.nomPluriel || metier.nom.toLowerCase() + 's'} de la région font face à des défis spécifiques :
                  concurrence importante, chantiers de rénovation urbaine, réglementations locales, et besoin croissant de digitalisation.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Un logiciel de devis adapté vous permet de répondre rapidement aux appels d'offres,
                  de professionnaliser vos documents et de gagner jusqu'à 5h par semaine sur l'administratif.
                  Notre sélection ci-dessus est adaptée aux {metier.nomPluriel || metier.nom.toLowerCase() + 's'} qui travaillent principalement dans le secteur de {ville.nom} et ses alentours.
                </p>
              </section>

              {/* Guide retour */}
              <Link
                href={`/${params.metier}`}
                className="flex items-center justify-between p-5 rounded-xl border border-border hover:border-primary/40 hover:bg-card transition-colors group"
              >
                <div>
                  <p className="font-semibold text-sm">Guide complet {metier.nom.toLowerCase()}</p>
                  <p className="text-xs text-muted-foreground">Tous les logiciels, toutes les tailles d'entreprise</p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>

            </div>

            {/* Sidebar */}
            <aside className="space-y-5">

              {/* Autres villes */}
              <div className="card-base">
                <h3 className="font-semibold mb-3 text-sm flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Autres villes
                </h3>
                <div className="space-y-1">
                  {autresVilles.map(v => (
                    <Link
                      key={v.slug}
                      href={`/${params.metier}/ville/${v.slug}`}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-muted transition-colors text-sm"
                    >
                      <span>{metier.nom} {v.nom}</span>
                      <ChevronRight className="w-3 h-3 text-muted-foreground" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Tailles */}
              <div className="card-base">
                <h3 className="font-semibold mb-3 text-sm">Par taille d'entreprise</h3>
                <div className="space-y-1">
                  {[
                    { slug: 'auto-entrepreneur', label: 'Auto-entrepreneur' },
                    { slug: 'artisan-seul', label: 'Artisan seul' },
                    { slug: 'equipe-2-5', label: 'Équipe 2-5' },
                    { slug: 'pme-5-15', label: 'PME 5-15' },
                  ].map(t => (
                    <Link
                      key={t.slug}
                      href={`/${params.metier}/taille/${t.slug}`}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-muted transition-colors text-sm"
                    >
                      <span>{t.label}</span>
                      <ChevronRight className="w-3 h-3 text-muted-foreground" />
                    </Link>
                  ))}
                </div>
              </div>

            </aside>
          </div>

        </main>
      </div>
    </>
  );
}
