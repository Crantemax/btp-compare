import Link from 'next/link';
import { Home, Search, Scale, BookOpen } from 'lucide-react';

export const metadata = {
  title: 'Page introuvable — BTP-Compare',
  robots: { index: false, follow: true },
};

const LIENS = [
  { href: '/logiciels', label: 'Tous les logiciels', desc: '17 logiciels BTP comparés', icon: Search },
  { href: '/comparer', label: 'Comparer', desc: 'Face à face détaillés', icon: Scale },
  { href: '/blog', label: 'Blog & guides', desc: 'Conseils pour bien choisir', icon: BookOpen },
];

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center gradient-subtle px-4">
      <div className="max-w-lg w-full text-center">
        <div className="text-7xl font-bold text-primary mb-4">404</div>
        <h1 className="text-2xl font-bold heading-editorial mb-3">Cette page n'existe pas</h1>
        <p className="text-muted-foreground mb-8">
          Le lien est peut-être obsolète ou la page a été déplacée. Voici par où continuer :
        </p>

        <div className="grid sm:grid-cols-3 gap-3 mb-8">
          {LIENS.map(({ href, label, desc, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex flex-col items-center gap-2 p-4 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-semibold text-foreground">{label}</span>
              <span className="text-xs text-muted-foreground">{desc}</span>
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          <Home className="w-4 h-4" />
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
