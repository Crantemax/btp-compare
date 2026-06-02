import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { articles, ArticleSection } from '../../../data/articles';
import { ThemeToggle } from '../../../components/theme-toggle';
import { ArrowLeft, Clock, Calendar, ChevronRight, AlertTriangle, Info, CheckCircle } from 'lucide-react';

export async function generateStaticParams() {
  return articles.map(a => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = articles.find(a => a.slug === params.slug);
  if (!article) return { title: 'Article non trouvé' };

  return {
    title: article.seoTitle,
    description: article.seoDescription,
    keywords: article.keywords.join(', '),
    authors: [{ name: 'BTP-Compare', url: 'https://btp-compare.fr' }],
    metadataBase: new URL('https://btp-compare.fr'),
    alternates: { canonical: `https://btp-compare.fr/blog/${article.slug}` },
    openGraph: {
      title: article.seoTitle,
      description: article.seoDescription,
      url: `https://btp-compare.fr/blog/${article.slug}`,
      siteName: 'BTP-Compare',
      locale: 'fr_FR',
      type: 'article',
      publishedTime: article.datePublication,
      modifiedTime: article.dateModification,
      images: [{ url: article.image, width: 1200, height: 630, alt: article.titre }],
    },
    robots: { index: true, follow: true },
  };
}

// ── Render d'une section ────────────────────────────────────────────────────────
function RenderSection({ section }: { section: ArticleSection }) {
  switch (section.type) {
    case 'h2':
      return <h2 className="text-2xl font-bold mt-10 mb-4 heading-editorial">{section.contenu as string}</h2>;
    case 'h3':
      return <h3 className="text-xl font-bold mt-6 mb-3">{section.contenu as string}</h3>;
    case 'p':
      return <p className="text-base text-foreground/90 leading-relaxed mb-4">{section.contenu as string}</p>;
    case 'ul':
      return (
        <ul className="space-y-2 mb-4">
          {(section.contenu as string[]).map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-foreground/90">
              <span className="text-primary mt-1">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol className="space-y-2 mb-4">
          {(section.contenu as string[]).map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-foreground/90">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">{i + 1}</span>
              <span className="mt-0.5">{item}</span>
            </li>
          ))}
        </ol>
      );
    case 'callout': {
      const icons = { info: Info, warning: AlertTriangle, success: CheckCircle };
      const colors = {
        info: 'bg-blue-500/10 border-blue-500/30 text-blue-700 dark:text-blue-400',
        warning: 'bg-amber-500/10 border-amber-500/30 text-amber-700 dark:text-amber-400',
        success: 'bg-green-500/10 border-green-500/30 text-green-700 dark:text-green-400',
      };
      const note = section.note || 'info';
      const Icon = icons[note];
      return (
        <div className={`flex items-start gap-3 p-4 rounded-xl border mb-4 ${colors[note]}`}>
          <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <p className="text-sm leading-relaxed">{section.contenu as string}</p>
        </div>
      );
    }
    case 'table': {
      const tableData = section.contenu as { titre: string; lignes: string[][] };
      const [header, ...rows] = tableData.lignes;
      return (
        <div className="mb-6 overflow-x-auto rounded-xl border border-border">
          <p className="text-xs font-semibold text-muted-foreground px-4 pt-3 pb-0">{tableData.titre}</p>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                {header.map((h, i) => (
                  <th key={i} className="px-4 py-3 text-left font-semibold text-foreground">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-3 text-foreground/90">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    default:
      return null;
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find(a => a.slug === params.slug);
  if (!article) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.titre,
    description: article.seoDescription,
    image: article.image,
    author: { '@type': 'Organization', name: 'BTP-Compare', url: 'https://btp-compare.fr' },
    publisher: { '@type': 'Organization', name: 'BTP-Compare', logo: { '@type': 'ImageObject', url: 'https://btp-compare.fr/logo.png' } },
    datePublished: article.datePublication,
    dateModified: article.dateModification,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://btp-compare.fr/blog/${article.slug}` },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://btp-compare.fr' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://btp-compare.fr/blog' },
      { '@type': 'ListItem', position: 3, name: article.titre, item: `https://btp-compare.fr/blog/${article.slug}` },
    ],
  };

  // Articles liés (excluant l'article actuel)
  const articlesLies = articles.filter(a => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
          <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link href="/blog" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Blog</span>
            </Link>
            <ThemeToggle />
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-12">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">Accueil</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground truncate max-w-[200px]">{article.titre}</span>
          </nav>

          <div className="grid lg:grid-cols-[1fr_280px] gap-12">

            {/* Contenu principal */}
            <article>
              {/* Image hero */}
              <div className="h-64 rounded-2xl overflow-hidden mb-8">
                <img src={`${article.image}&q=80`} alt={article.titre} className="w-full h-full object-cover" />
              </div>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>{article.tempsLecture} min de lecture</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>Mis à jour le {new Date(article.dateModification).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>
              </div>

              {/* Titre */}
              <h1 className="text-3xl font-bold heading-editorial mb-8 leading-tight">{article.titre}</h1>

              {/* Corps */}
              <div>
                {article.contenu.map((section, i) => (
                  <RenderSection key={i} section={section} />
                ))}
              </div>

              {/* CTA final */}
              <div className="mt-12 bg-primary rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <h2 className="text-xl font-bold mb-2">Trouvez votre logiciel idéal</h2>
                <p className="text-white/80 mb-5 text-sm">Notre quiz personnalisé identifie le meilleur logiciel pour votre métier et votre profil en 2 minutes.</p>
                <Link href="/" className="inline-flex items-center gap-2 bg-white text-primary px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-white/90 transition-colors">
                  Faire le quiz gratuit
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">

              {/* Logiciels mentionnés */}
              {article.logicielsLies.length > 0 && (
                <div className="card-base">
                  <h3 className="font-semibold mb-3 text-sm">Logiciels mentionnés</h3>
                  <div className="space-y-2">
                    {article.logicielsLies.map(slug => (
                      <Link key={slug} href={`/logiciels/${slug}`} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted transition-colors text-sm group">
                        <span className="capitalize">{slug.replace(/-/g, ' ')}</span>
                        <ChevronRight className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Métiers liés */}
              {article.metiersLies.length > 0 && (
                <div className="card-base">
                  <h3 className="font-semibold mb-3 text-sm">Guides métiers</h3>
                  <div className="space-y-2">
                    {article.metiersLies.map(slug => (
                      <Link key={slug} href={`/${slug}`} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted transition-colors text-sm group">
                        <span className="capitalize">{slug}</span>
                        <ChevronRight className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Articles liés */}
              <div className="card-base">
                <h3 className="font-semibold mb-3 text-sm">À lire aussi</h3>
                <div className="space-y-3">
                  {articlesLies.map(a => (
                    <Link key={a.slug} href={`/blog/${a.slug}`} className="flex gap-3 group">
                      <div className="w-16 h-12 rounded-lg overflow-hidden flex-shrink-0">
                        <img src={`${a.image}&w=120&h=90&fit=crop&q=60`} alt={a.titre} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                      </div>
                      <p className="text-xs text-foreground/80 group-hover:text-primary transition-colors leading-snug">{a.titre}</p>
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
