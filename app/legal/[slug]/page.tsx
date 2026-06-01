import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { legalPages } from '../../../data/legal';
import { ThemeToggle } from '../../../components/theme-toggle';

export async function generateStaticParams() {
  return legalPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const page = legalPages.find((p) => p.slug === params.slug);
  if (!page) return { title: 'Page non trouvée' };

  return {
    title: `${page.title} | BTP-Compare`,
    description: page.description,
    robots: { index: false, follow: true }, // Pas indexé en SEO, mais crawlé
  };
}

export default function LegalPage({ params }: { params: { slug: string } }) {
  const page = legalPages.find((p) => p.slug === params.slug);
  if (!page) notFound();

  return (
    <div className="min-h-screen gradient-subtle">
      <header className="fixed top-0 left-0 right-0 w-full z-50 glass-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center text-background text-sm font-bold">
                B
              </div>
              <div className="text-lg font-semibold text-foreground tracking-tight">
                BTP-Compare
              </div>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 lg:px-8 py-24 pt-32">
        <nav className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground transition-smooth">
            Accueil
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{page.title}</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          {page.title}
        </h1>
        <p className="text-muted-foreground mb-12">
          Dernière mise à jour : {page.lastUpdated}
        </p>

        <div className="prose prose-lg max-w-none">
          {page.sections.map((section, i) => (
            <section key={i} className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4 tracking-tight">
                {section.title}
              </h2>
              {section.content.map((paragraph, j) => (
                <p
                  key={j}
                  className="text-muted-foreground leading-relaxed mb-4"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
          >
            ← Retour à l'accueil
          </Link>
        </div>
      </main>

      <footer className="border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center text-xs text-muted-foreground">
          © 2026 BTP-Compare.fr — Tous droits réservés
        </div>
      </footer>
    </div>
  );
}
