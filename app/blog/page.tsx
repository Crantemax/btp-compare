import { Metadata } from 'next';
import Link from 'next/link';
import { articles } from '../../data/articles';
import { ThemeToggle } from '../../components/theme-toggle';
import { ArrowLeft, Clock, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog BTP-Compare — Guides et conseils pour artisans du bâtiment',
  description: 'Guides pratiques, comparatifs et conseils pour choisir les meilleurs outils digitaux dans le BTP. Rédigés par des experts indépendants.',
  alternates: { canonical: 'https://btp-compare.fr/blog' },
};

const CATEGORIE_LABELS: Record<string, string> = {
  guide: 'Guide',
  comparatif: 'Comparatif',
  conseil: 'Conseil',
  actualite: 'Actualité',
};

const CATEGORIE_COLORS: Record<string, string> = {
  guide: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  comparatif: 'bg-primary/10 text-primary',
  conseil: 'bg-green-500/10 text-green-600 dark:text-green-400',
  actualite: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
};

// Schema.org BreadcrumbList + Blog
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://btp-compare.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://btp-compare.fr/blog' },
  ],
};

export default function BlogPage() {
  const articlesTriees = [...articles].sort(
    (a, b) => new Date(b.datePublication).getTime() - new Date(a.datePublication).getTime()
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
          <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">BTP-Compare</span>
            </Link>
            <ThemeToggle />
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-4 py-12">

          {/* Hero */}
          <div className="mb-12">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link href="/" className="hover:text-foreground transition-colors">Accueil</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground">Blog</span>
            </nav>
            <h1 className="text-4xl font-bold heading-editorial mb-3">
              Guides & conseils BTP
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Tout ce que vous devez savoir pour choisir et utiliser les meilleurs outils digitaux dans le bâtiment.
            </p>
          </div>

          {/* Grille articles */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articlesTriees.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-colors hover-lift"
              >
                {/* Image */}
                <div className="h-44 overflow-hidden">
                  <img
                    src={`${article.image}&q=80`}
                    alt={article.titre}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-5 flex flex-col flex-1">
                  {/* Badge catégorie */}
                  <span className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${CATEGORIE_COLORS[article.categorie]}`}>
                    {CATEGORIE_LABELS[article.categorie]}
                  </span>

                  <h2 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                    {article.titre}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">
                    {article.extrait}
                  </p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.tempsLecture} min de lecture</span>
                    </div>
                    <span>{new Date(article.datePublication).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <h2 className="text-2xl font-bold mb-2">Besoin d'une recommandation personnalisée ?</h2>
            <p className="text-white/80 mb-6">Notre quiz de 7 questions vous oriente vers le logiciel adapté à votre métier et votre taille d'entreprise.</p>
            <Link href="/" className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
              Faire le quiz gratuit
            </Link>
          </div>

        </main>
      </div>
    </>
  );
}
