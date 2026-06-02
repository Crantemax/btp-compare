'use client';

import { motion } from 'framer-motion';
import { ThemeToggle } from '../../../components/theme-toggle';
import { AffiliateDisclosure } from '../../../components/affiliate-disclosure';
import { TransparencyBanner } from '../../../components/transparency-banner';
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

  // Récupération de la source principale (Trustpilot en priorité, sinon G2)
  const sourcePrincipale = data.sources.trustpilot || data.sources.g2;

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
            <nav className="hidden md:flex items-center space-x-8">
              <a href={`#${data.slug}-tarifs`} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">Tarifs</a>
              <a href={`#${data.slug}-fonctionnalites`} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">Fonctionnalités</a>
              <a href={`#${data.slug}-avis`} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">Avis</a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Barre orange signature */}
      <div className="h-1 w-full bg-gradient-to-r from-primary via-amber-400 to-primary fixed top-0 z-[60]" />

      {/* HERO */}
      <div className="relative pt-32 pb-16 gradient-mesh">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <div className="inline-flex items-center space-x-2 glass-subtle px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm font-medium text-foreground">
                {data.nombreUtilisateurs} utilisateurs • {data.pays}
              </span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex items-start space-x-6 mb-6">
            {/* Logo dans un cercle coloré */}
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-amber-400/20 border border-primary/20 flex items-center justify-center text-4xl flex-shrink-0 shadow-lg">
              {data.logo}
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-2">{data.nom}</h1>
              <p className="text-xl text-muted-foreground">{data.pitch}</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-wrap gap-3 mb-8">
            <span className="inline-flex items-center space-x-2 text-sm px-3 py-1.5 rounded-full bg-card border border-border text-muted-foreground">
              <Shield className="w-3.5 h-3.5" />
              <span>{data.pays} • Depuis {data.anneeCreation}</span>
            </span>
            <span className="inline-flex items-center space-x-2 text-sm px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium">
              <span>{data.tarification.formules[0]?.prix}</span>
            </span>
            {sourcePrincipale && (
              <a
                href={sourcePrincipale.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-sm px-3 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-600 hover:bg-yellow-500/20 transition-colors"
              >
                <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                <span>{sourcePrincipale.note} • {sourcePrincipale.plateforme} ({sourcePrincipale.nombreAvis} avis)</span>
              </a>
            )}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-col sm:flex-row gap-4">
            <a
              href={data.lienAffiliation}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-smooth shadow-lg shadow-primary/25"
            >
              Essayer {data.nom} gratuitement
              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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

        {/* MÉTHODOLOGIE */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 bg-primary/5 rounded-xl border border-primary/20 p-6">
          <h3 className="text-lg font-bold text-foreground mb-3 flex items-center">
            <Zap className="w-5 h-5 mr-2 text-primary" />
            Notre méthodologie d'analyse
          </h3>
          <p className="text-sm text-muted-foreground mb-3">
            Cette analyse est basée sur les sources suivantes :
          </p>
          <ul className="space-y-2">
            {data.methodologie.baseAnalyse.map((source, i) => (
              <li key={i} className="flex items-start text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>{source}</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 pt-3 border-t border-border text-xs text-muted-foreground">
            Dernière mise à jour : {new Date(data.methodologie.dateDerniereMAJ).toLocaleDateString('fr-FR')}
          </div>
        </motion.section>

        {/* TARIFICATION */}
        <motion.section id={`${data.slug}-tarifs`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="mb-8">
            <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">Tarification</h2>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{data.tarification.modele} • {data.tarification.essaiGratuit}</span>
            </div>
            <div className="mt-2 text-xs text-muted-foreground">
              Source : <a href={data.tarification.sourceTarifs} target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">{data.tarification.sourceTarifs}</a> • Vérifié le {new Date(data.tarification.dateVerification).toLocaleDateString('fr-FR')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {data.tarification.formules.map((formule, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-xl border p-6 hover-lift overflow-hidden relative ${i === 0 ? 'bg-primary/5 border-primary/30' : 'bg-card border-border'}`}
              >
                {i === 0 && <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-amber-400" />}
                <h3 className="text-xl font-bold text-foreground mb-2">{formule.nom}</h3>
                <div className={`text-2xl font-bold mb-1 ${i === 0 ? 'text-primary' : 'text-foreground'}`}>{formule.prix}</div>
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

        {/* ÉVALUATIONS */}
        <motion.section id={`${data.slug}-fonctionnalites`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-foreground mb-8">Évaluations</h2>
          
          <div className="space-y-8">
            {data.evaluations.map((cat, i) => (
              <div key={i}>
                <h3 className="text-2xl font-bold text-foreground mb-4">{cat.categorie}</h3>
                <div className="space-y-3">
                  {cat.items.map((item, j) => (
                    <div key={j} className="bg-card rounded-xl border border-border p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">{item.nom}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                            item.evaluation === 'Excellent' ? 'bg-green-500/10 text-green-600' :
                            item.evaluation === 'Bon' ? 'bg-blue-500/10 text-blue-600' :
                            item.evaluation === 'Moyen' ? 'bg-yellow-500/10 text-yellow-600' :
                            item.evaluation === 'Limité' ? 'bg-orange-500/10 text-orange-600' :
                            'bg-red-500/10 text-red-600'
                          }`}>
                            {item.evaluation}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3 italic">{item.justification}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.sources.map((source, k) => (
                          <a
                            key={k}
                            href={source}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-muted-foreground hover:text-foreground underline"
                          >
                            Source {k + 1}
                          </a>
                        ))}
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
                <h3 className="text-lg font-bold text-foreground mb-2">{metier.nom}</h3>
                <p className="text-sm text-muted-foreground mb-3">{metier.pourquoi}</p>
                <div className="text-xs text-muted-foreground mb-4 italic">
                  Base : {metier.baseAnalyse}
                </div>
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
                  <div key={i} className="bg-card rounded-xl border border-border border-l-4 border-l-green-500 p-4">
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">{point.icone}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{point.titre}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{point.description}</p>
                        <a 
                          href={point.source} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs text-muted-foreground hover:text-foreground underline"
                        >
                          Source
                        </a>
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
                  <div key={i} className="bg-card rounded-xl border border-border border-l-4 border-l-red-400 p-4">
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">{point.icone}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{point.titre}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{point.description}</p>
                        <a 
                          href={point.source} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs text-muted-foreground hover:text-foreground underline"
                        >
                          Source
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* AVIS VÉRIFIÉS */}
        <motion.section id={`${data.slug}-avis`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="mb-8">
            <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">Avis vérifiés</h2>
            {sourcePrincipale && (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Star className="w-6 h-6 text-yellow-500" fill="currentColor" />
                  <span className="text-2xl font-bold text-foreground">{sourcePrincipale.note}</span>
                </div>
                <span className="text-muted-foreground">
                  sur {sourcePrincipale.plateforme} ({sourcePrincipale.nombreAvis} avis)
                </span>
              </div>
            )}
            <div className="mt-3 flex flex-wrap gap-3">
              {data.sources.trustpilot && (
                <a 
                  href={data.sources.trustpilot.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground underline"
                >
                  Voir sur Trustpilot
                </a>
              )}
              {data.sources.g2 && (
                <a 
                  href={data.sources.g2.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground underline"
                >
                  Voir sur G2
                </a>
              )}
            </div>
          </div>

          <div className="space-y-4">
            {data.avisVerifies.map((avis, i) => (
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
                      className={`w-4 h-4 ${k < avis.note ? 'text-yellow-500' : 'text-muted-foreground/30'}`}
                      fill={k < avis.note ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-4 italic">"{avis.texte}"</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>{avis.auteur} • {avis.source} • {new Date(avis.date).toLocaleDateString('fr-FR')}</span>
                  </div>
                  <a 
                    href={avis.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-foreground"
                  >
                    Vérifier
                  </a>
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
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-primary rounded-2xl p-12 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="relative">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Prêt à essayer {data.nom} ?</h2>
            <p className="text-lg text-white/80 mb-8">{data.tarification.essaiGratuit}</p>
            <a
              href={data.lienAffiliation}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-smooth shadow-xl"
            >
              Démarrer l'essai gratuit
              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
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
