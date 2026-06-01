'use client';

import { motion } from 'framer-motion';
import { ThemeToggle } from '../../../components/theme-toggle';
import { AffiliateDisclosure } from '../../../components/affiliate-disclosure';
import { logiciels } from '../../../data/logiciels';
import { 
  ArrowLeft, Check, X, Star, ExternalLink, 
  Shield, Clock, Zap, Users, ChevronRight
} from 'lucide-react';

interface LogicielPageClientProps {
  logicielSlug: string;
}

export function LogicielPageClient({ logicielSlug }: LogicielPageClientProps) {
  const data = logiciels.find(l => l.slug === logicielSlug);
  
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center gradient-subtle">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Logiciel non trouvé</h1>
          <a href="/" className="text-primary hover:underline">Retour à l'accueil</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-subtle">
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 w-full z-50 glass-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center text-background text-sm font-bold group-hover:scale-105 transition-transform">B</div>
              <div className="text-lg font-semibold text-foreground tracking-tight">BTP-Compare</div>
            </a>
            <nav className="hidden md:flex items-center space-x-8">
              <a href={`/${logicielSlug}#tarifs`} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">Tarifs</a>
              <a href={`/${logicielSlug}#fonctionnalites`} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">Fonctionnalités</a>
              <a href={`/${logicielSlug}#avis`} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">Avis</a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* HERO */}
      <div className="relative pt-32 pb-16 gradient-mesh">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <div className="inline-flex items-center space-x-2 glass-subtle px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm font-medium text-foreground">Testé pendant 6 mois • {data.nombreUtilisateurs} utilisateurs</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex items-start space-x-6 mb-6">
            <div className="text-6xl">{data.logo}</div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-2">{data.nom}</h1>
              <p className="text-xl text-muted-foreground">{data.pitch}</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4" />
              <span>{data.pays} • Depuis {data.anneeCreation}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Star className="w-4 h-4 text-yellow-500" fill="currentColor" />
              <span>{data.avis.noteGlobale} ({data.avis.nombreAvis} avis)</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-col sm:flex-row gap-4">
            <a
              href={data.lienAffiliation}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 py-4 rounded-lg bg-foreground text-background font-semibold hover:opacity-90 transition-smooth"
            >
              Essayer {data.nom} gratuitement
              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={data.site}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-border text-foreground font-medium hover:bg-accent transition-smooth"
            >
              Voir le site officiel
            </a>
          </motion.div>
        </div>
      </div>

      <AffiliateDisclosure />
      <TransparencyBanner />

      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        
        {/* DESCRIPTION LONGUE */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed">{data.descriptionLongue}</p>
        </motion.section>

        {/* TARIFICATION */}
        <motion.section id="tarifs" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="mb-8">
            <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">Tarification</h2>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{data.tarification.modele} • {data.tarification.essaiGratuit}</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {data.tarification.formules.map((formule, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl border border-border p-6 hover-lift"
              >
                <h3 className="text-xl font-bold text-foreground mb-2">{formule.nom}</h3>
                <div className="text-3xl font-bold text-foreground mb-1">{formule.prix}</div>
                <div className="text-sm text-muted-foreground mb-6">{formule.idealPour}</div>
                <ul className="space-y-2">
                  {formule.fonctionnalites.map((f, j) => (
                    <li key={j} className="flex items-start text-sm">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* FONCTIONNALITÉS */}
        <motion.section id="fonctionnalites" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-foreground mb-8">Fonctionnalités</h2>
          
          <div className="space-y-8">
            {data.fonctionnalites.map((cat, i) => (
              <div key={i}>
                <h3 className="text-2xl font-bold text-foreground mb-4">{cat.categorie}</h3>
                <div className="space-y-3">
                  {cat.items.map((item, j) => (
                    <div key={j} className="bg-card rounded-xl border border-border p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">{item.nom}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                        <div className="flex items-center space-x-1 ml-4">
                          {Array.from({ length: 5 }, (_, k) => (
                            <Star
                              key={k}
                              className={`w-4 h-4 ${k < item.note ? 'text-yellow-500' : 'text-muted-foreground/30'}`}
                              fill={k < item.note ? 'currentColor' : 'none'}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* POUR QUELS MÉTIERS */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-foreground mb-8">Pour quels métiers ?</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {data.metiersAdaptes.map((metier, i) => (
              <a
                key={i}
                href={`/${metier.slug}`}
                className="group bg-card rounded-xl border border-border p-6 hover-lift block"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-foreground">{metier.nom}</h3>
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: 5 }, (_, k) => (
                      <Star
                        key={k}
                        className={`w-4 h-4 ${k < metier.note ? 'text-yellow-500' : 'text-muted-foreground/30'}`}
                        fill={k < metier.note ? 'currentColor' : 'none'}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{metier.pourquoi}</p>
                <div className="flex items-center text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  Voir le comparatif
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </motion.section>

        {/* POINTS FORTS / FAIBLES */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <Check className="w-6 h-6 text-green-500 mr-2" />
                Points forts
              </h3>
              <div className="space-y-3">
                {data.pointsForts.map((point, i) => (
                  <div key={i} className="bg-card rounded-xl border border-border p-4">
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">{point.icone}</div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{point.titre}</h4>
                        <p className="text-sm text-muted-foreground">{point.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <X className="w-6 h-6 text-red-500 mr-2" />
                Points faibles
              </h3>
              <div className="space-y-3">
                {data.pointsFaibles.map((point, i) => (
                  <div key={i} className="bg-card rounded-xl border border-border p-4">
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">{point.icone}</div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{point.titre}</h4>
                        <p className="text-sm text-muted-foreground">{point.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* AVIS UTILISATEURS */}
        <motion.section id="avis" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="mb-8">
            <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">Avis utilisateurs</h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Star className="w-6 h-6 text-yellow-500" fill="currentColor" />
                <span className="text-2xl font-bold text-foreground">{data.avis.noteGlobale}</span>
              </div>
              <span className="text-muted-foreground">sur {data.avis.plateforme} ({data.avis.nombreAvis} avis)</span>
            </div>
          </div>

          <div className="space-y-4">
            {data.avis.temoignages.map((temoignage, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl border border-border p-6"
              >
                <div className="flex items-center space-x-1 mb-3">
                  {Array.from({ length: 5 }, (_, k) => (
                    <Star
                      key={k}
                      className={`w-4 h-4 ${k < temoignage.note ? 'text-yellow-500' : 'text-muted-foreground/30'}`}
                      fill={k < temoignage.note ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-4 italic">"{temoignage.texte}"</p>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>{temoignage.auteur} • {temoignage.metier}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ALTERNATIVES */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-foreground mb-8">Alternatives à considérer</h2>
          
          <div className="space-y-3">
            {data.alternatives.map((alt, i) => (
              <a
                key={i}
                href={`/logiciels/${alt.slug}`}
                className="group bg-card rounded-xl border border-border p-6 hover-lift block"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">{alt.nom}</h3>
                    <p className="text-sm text-muted-foreground">{alt.pourquoi}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 group-hover:text-foreground transition-all flex-shrink-0 mt-1" />
                </div>
              </a>
            ))}
          </div>
        </motion.section>

        {/* CTA FINAL */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-foreground rounded-2xl p-12 text-background text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Prêt à essayer {data.nom} ?</h2>
          <p className="text-lg text-background/70 mb-8">{data.tarification.essaiGratuit}</p>
          <a
            href={data.lienAffiliation}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-8 py-4 rounded-lg bg-background text-foreground font-semibold hover:opacity-90 transition-smooth"
          >
            Démarrer l'essai gratuit
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.section>

        {/* RETOUR */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
          <a href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-smooth">
            <ArrowLeft className="w-4 h-4" />
            Voir tous les logiciels
          </a>
        </motion.div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border mt-16 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="text-sm text-muted-foreground">© 2026 BTP-Compare.fr — Tous droits réservés</div>
        </div>
      </footer>
    </div>
  );
}
