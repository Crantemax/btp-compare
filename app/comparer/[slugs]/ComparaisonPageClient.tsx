'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ThemeToggle } from '../../../components/theme-toggle';
import { AffiliateDisclosure } from '../../../components/affiliate-disclosure';
import { TransparencyBanner } from '../../../components/transparency-banner';
import { comparaisons } from '../../../data/comparaisons';
import { LeadForm } from '../../../components/lead-form';
import {
  ArrowLeft, Check, X, Star, ExternalLink,
  ChevronRight, Info, Scale, TrendingUp, Target, Mail
} from 'lucide-react';

interface ComparaisonPageClientProps {
  comparaisonSlug: string;
}

export function ComparaisonPageClient({ comparaisonSlug }: ComparaisonPageClientProps) {
  const data = comparaisons[comparaisonSlug];
  
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center gradient-subtle">
        <div className="text-center">
          <h1 className="heading-editorial mb-4">Comparaison non trouvée</h1>
          <Link href="/" className="btn-primary">Retour à l'accueil</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-subtle">
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 w-full z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold group-hover:scale-105 transition-smooth">B</div>
              <div className="text-lg font-semibold text-foreground tracking-tight">BTP-Compare</div>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href={`/logiciels/${data.slug1}`} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
                {data.nom1}
              </Link>
              <Link href={`/logiciels/${data.slug2}`} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
                {data.nom2}
              </Link>
            </nav>
            <div className="flex items-center gap-3">
              <button
                onClick={() => window.print()}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg px-3 py-1.5 hover:bg-muted"
                title="Imprimer / Exporter en PDF"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
                <span className="hidden sm:inline">Exporter PDF</span>
              </button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <div className="relative pt-32 pb-16 hero-texture">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <div className="eyebrow mb-4">Comparaison indépendante • Sources vérifiables</div>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="heading-editorial mb-6">
            {data.nom1} vs {data.nom2}
            <br />
            <em>Quel logiciel choisir ?</em>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            {data.intro}
          </motion.p>
        </div>
      </div>

      <AffiliateDisclosure />
      <TransparencyBanner />

      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        
        {/* VERDICT RAPIDE */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card-base p-8 mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <Target className="w-6 h-6 text-primary" />
            <h2 className="heading-editorial text-3xl">Verdict rapide</h2>
          </div>
          
          {data.verdict.gagnant === 'egalite' ? (
            <div className="disclosure-banner mb-6">
              <div className="dot"></div>
              <p>
                <strong>Pas de gagnant universel.</strong> {data.verdict.raison}
              </p>
            </div>
          ) : (
            <div className={`card-base p-6 border-l-4 mb-6 ${
              data.verdict.gagnant === 'logiciel1' 
                ? 'border-success bg-success-bg' 
                : 'border-primary bg-primary-muted'
            }`}>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                <strong>{data.verdict.gagnant === 'logiciel1' ? data.nom1 : data.nom2} remporte cette comparaison.</strong> {data.verdict.raison}
              </p>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-base p-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="text-4xl">{data.logo1}</div>
                <h3 className="heading-editorial text-2xl">{data.nom1}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{data.verdict.pourQui1}</p>
            </div>
            <div className="card-base p-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="text-4xl">{data.logo2}</div>
                <h3 className="heading-editorial text-2xl">{data.nom2}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{data.verdict.pourQui2}</p>
            </div>
          </div>
        </motion.section>

        {/* TABLEAU RÉCAPITULATIF */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="heading-editorial mb-8">Tableau récapitulatif</h2>
          
          <div className="card-base overflow-hidden">
            <div className="grid grid-cols-3 gap-4 p-5 bg-accent border-b border-border font-semibold text-sm">
              <div>Critère</div>
              <div className="text-center">{data.nom1}</div>
              <div className="text-center">{data.nom2}</div>
            </div>
            {data.tableauRecap.map((row, i) => (
              <div key={i} className="grid grid-cols-3 gap-4 p-5 border-b border-border last:border-b-0 text-sm">
                <div className="font-medium text-foreground">{row.critere}</div>
                <div className="text-center text-muted-foreground">{row.logiciel1}</div>
                <div className="text-center text-muted-foreground">{row.logiciel2}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CRITÈRES DÉTAILLÉS */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="heading-editorial mb-8">Critères détaillés</h2>
          
          <div className="space-y-6">
            {data.criteres.map((critere, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-base p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`pill text-xs ${
                        critere.categorie === 'essentiel' ? 'badge-limite' :
                        critere.categorie === 'important' ? 'badge-moyen' :
                        'bg-secondary text-muted-foreground'
                      }`}>
                        {critere.categorie === 'essentiel' ? 'ESSENTIEL' : 
                         critere.categorie === 'important' ? 'IMPORTANT' : 'CONFORT'}
                      </span>
                    </div>
                    <h3 className="heading-editorial text-2xl mb-2">{critere.nom}</h3>
                    <p className="text-sm text-muted-foreground">{critere.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="card-base p-5 bg-success-bg border-success/20">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-3xl">{data.logo1}</span>
                        <span className="font-semibold text-foreground">{data.nom1}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        {Array.from({ length: 5 }, (_, k) => (
                          <Star
                            key={k}
                            className={`w-4 h-4 ${k < critere.logiciel1.note ? 'text-warning' : 'text-border'}`}
                            fill={k < critere.logiciel1.note ? 'currentColor' : 'none'}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{critere.logiciel1.justification}</p>
                    {critere.logiciel1.source && (
                      <a href={critere.logiciel1.source} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground underline">
                        Voir la source <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  <div className="card-base p-5 bg-primary-muted border-primary/20">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-3xl">{data.logo2}</span>
                        <span className="font-semibold text-foreground">{data.nom2}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        {Array.from({ length: 5 }, (_, k) => (
                          <Star
                            key={k}
                            className={`w-4 h-4 ${k < critere.logiciel2.note ? 'text-warning' : 'text-border'}`}
                            fill={k < critere.logiciel2.note ? 'currentColor' : 'none'}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{critere.logiciel2.justification}</p>
                    {critere.logiciel2.source && (
                      <a href={critere.logiciel2.source} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground underline">
                        Voir la source <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* COÛTS SUR 3 ANS */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <TrendingUp className="w-6 h-6 text-primary" />
            <h2 className="heading-editorial">Coût total sur 3 ans</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-base p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-4xl">{data.logo1}</div>
                <h3 className="heading-editorial text-2xl">{data.nom1}</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Coût mensuel :</span>
                  <span className="font-semibold text-foreground">{data.couts3Ans.logiciel1.coutMensuel}€</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Coût annuel :</span>
                  <span className="font-semibold text-foreground">{data.couts3Ans.logiciel1.coutAnnuel}€</span>
                </div>
                <div className="pt-3 border-t border-border">
                  <div className="flex justify-between">
                    <span className="font-semibold text-foreground">Coût total 3 ans :</span>
                    <span className="stat-number text-3xl">{data.couts3Ans.logiciel1.cout3Ans}€</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-3">{data.couts3Ans.logiciel1.calcul}</p>
              </div>
            </div>

            <div className="card-base p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-4xl">{data.logo2}</div>
                <h3 className="heading-editorial text-2xl">{data.nom2}</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Coût mensuel :</span>
                  <span className="font-semibold text-foreground">{data.couts3Ans.logiciel2.coutMensuel}€</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Coût annuel :</span>
                  <span className="font-semibold text-foreground">{data.couts3Ans.logiciel2.coutAnnuel}€</span>
                </div>
                <div className="pt-3 border-t border-border">
                  <div className="flex justify-between">
                    <span className="font-semibold text-foreground">Coût total 3 ans :</span>
                    <span className="stat-number text-3xl">{data.couts3Ans.logiciel2.cout3Ans}€</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-3">{data.couts3Ans.logiciel2.calcul}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 disclosure-banner">
            <div className="dot"></div>
            <p>
              <strong>Note :</strong> Ces calculs sont basés sur les tarifs publics indiqués sur les sites officiels. 
              Vérifiez les tarifs à jour directement auprès des éditeurs, car ils peuvent évoluer.
            </p>
          </div>
        </motion.section>

        {/* CAS D'USAGE */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="heading-editorial mb-8">Quel logiciel pour votre situation ?</h2>
          
          <div className="space-y-4">
            {data.casUsage.map((cas, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-base p-6"
              >
                <h3 className="heading-editorial text-xl mb-3">{cas.scenario}</h3>
                <div className="flex items-start space-x-3">
                  {cas.recommandation === 'egalite' ? (
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <Scale className="w-5 h-5 text-foreground" />
                    </div>
                  ) : (
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      cas.recommandation === 'logiciel1' ? 'bg-success-bg' : 'bg-primary-muted'
                    }`}>
                      <span className="text-2xl">{cas.recommandation === 'logiciel1' ? data.logo1 : data.logo2}</span>
                    </div>
                  )}
                  <div>
                    <div className="font-semibold text-foreground mb-1">
                      Recommandation : {
                        cas.recommandation === 'egalite' ? 'Égalité' :
                        cas.recommandation === 'logiciel1' ? data.nom1 : data.nom2
                      }
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cas.raison}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CAPTURE EMAIL */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-base p-8 mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="font-bold text-foreground text-lg">Vous hésitez encore ?</h2>
              <p className="text-sm text-muted-foreground">Recevez notre guide gratuit + conseils par email</p>
            </div>
          </div>
          <LeadForm source="comparaison" />
        </motion.section>

        {/* CTA FINAL */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lead-strip">
          <div className="lead-strip-inner text-center">
            <h2 className="heading-editorial text-foreground mb-6">Prêt à faire votre choix ?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Consultez nos analyses détaillées de chaque logiciel pour prendre une décision éclairée.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link href={`/logiciels/${data.slug1}`} className="btn-primary">
                Voir l'analyse de {data.nom1}
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link href={`/logiciels/${data.slug2}`} className="btn-secondary text-background border-background/30 hover:bg-background/10">
                Voir l'analyse de {data.nom2}
              </Link>
            </div>
          </div>
        </motion.section>

        {/* RETOUR */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-smooth">
            <ArrowLeft className="w-4 h-4" />
            Voir toutes les comparaisons
          </Link>
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
