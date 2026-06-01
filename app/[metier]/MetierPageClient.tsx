'use client';

import { motion } from 'framer-motion';
import { ThemeToggle } from '../../components/theme-toggle';
import { ComparisonTable } from '../../components/comparison-table';
import { ROICalculator } from '../../components/roi-calculator';
import { Quiz } from '../../components/quiz';
import { AffiliateDisclosure } from '../../components/affiliate-disclosure';
import { metiers, logiciels } from '../../data/metiers';
import { 
  ArrowLeft, Zap, ChevronRight, Check, X, 
  Quote, Target, AlertTriangle, Award, 
  Calculator, HelpCircle, Star, Eye
} from 'lucide-react';

interface MetierPageClientProps {
  metierSlug: string;
}

export function MetierPageClient({ metierSlug }: MetierPageClientProps) {
  const data = metiers.find(m => m.slug === metierSlug);
  
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center gradient-subtle">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Métier non trouvé</h1>
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
              <a href={`/${data.slug}#verdict`} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">Verdict</a>
              <a href={`/${data.slug}#criteres`} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">Critères</a>
              <a href={`/${data.slug}#faq`} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">FAQ</a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* HERO */}
      <div className="relative h-[560px] overflow-hidden pt-16 gradient-mesh">
        <div className="absolute inset-0">
          <img
            src={data.image}
            alt={data.nom}
            className="w-full h-full object-cover opacity-30 dark:opacity-20"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </div>
        <div className="relative h-full flex items-end">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 pb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <div className="inline-flex items-center space-x-2 glass-subtle px-4 py-2 rounded-full mb-4">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm font-medium text-foreground">Analyse mise à jour — Juin 2026</span>
              </div>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-4 leading-tight">
              Le meilleur logiciel pour<br /><span className="text-muted-foreground">les {data.nomPluriel}.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-xl text-muted-foreground max-w-3xl leading-relaxed">{data.heroSubtitle}</motion.p>
          </div>
        </div>
      </div>

      <AffiliateDisclosure />

      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        
        {/* STATS */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-card rounded-xl border border-border p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {data.statsMetier.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* INTRO */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-xl text-muted-foreground leading-relaxed">{data.intro}</p>
          </div>
          <div className="bg-accent rounded-xl p-6 border-l-4 border-primary">
            <div className="flex items-start">
              <Target className="w-6 h-6 text-primary mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-3 text-lg">Votre quotidien, en {data.problemesQuotidiens.length} points</h3>
                <ul className="space-y-2">
                  {data.problemesQuotidiens.map((probleme, i) => (
                    <li key={i} className="flex items-start text-muted-foreground">
                      <span className="text-primary mr-2">→</span><span>{probleme}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* VERDICT */}
        <motion.section id="verdict" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 text-sm font-medium text-muted-foreground mb-3">
              <Award className="w-4 h-4" /><span>Le verdict de notre analyse</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4 leading-tight">Deux profils,<br /><span className="text-muted-foreground">deux logiciels.</span></h2>
            <p className="text-lg text-muted-foreground">Il n'y a pas de "meilleur logiciel dans l'absolu". Tout dépend de la taille de votre équipe.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div whileHover={{ y: -4 }} className="relative bg-card rounded-xl border-2 border-green-500 p-8 hover-lift">
              <div className="absolute -top-3 left-6 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">POUR ARTISANS SEULS</div>
              <div className="text-4xl mb-4 mt-2">{logiciels.obat.logo}</div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{logiciels.obat.nom}</h3>
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" />
                <span className="font-semibold text-foreground">{logiciels.obat.note}</span>
              </div>
              <div className="text-sm text-muted-foreground mb-4"><strong className="text-foreground">Idéal pour :</strong> {logiciels.obat.idealPour}</div>
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{data.verdictObat}</p>
              <div className="space-y-2 text-xs text-muted-foreground mb-6 pt-4 border-t border-border">
                <div className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" /><span><strong>Point fort :</strong> {logiciels.obat.pointFort}</span></div>
                <div className="flex items-start"><X className="w-4 h-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" /><span><strong>Point faible :</strong> {logiciels.obat.pointFaible}</span></div>
                <div className="flex justify-between"><span className="font-medium">Tarif :</span><span className="text-foreground">{logiciels.obat.tarif}</span></div>
              </div>
              <a href={logiciels.obat.lien} target="_blank" rel="noopener noreferrer" className="block w-full bg-green-500 text-white text-center py-3 rounded-lg font-medium hover:bg-green-600 transition-smooth">Essayer {logiciels.obat.nom}</a>
            </motion.div>

            <motion.div whileHover={{ y: -4 }} className="relative bg-card rounded-xl border-2 border-blue-500 p-8 hover-lift">
              <div className="absolute -top-3 left-6 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">POUR ÉQUIPES</div>
              <div className="text-4xl mb-4 mt-2">{logiciels.axonaut.logo}</div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{logiciels.axonaut.nom}</h3>
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" />
                <span className="font-semibold text-foreground">{logiciels.axonaut.note}</span>
              </div>
              <div className="text-sm text-muted-foreground mb-4"><strong className="text-foreground">Idéal pour :</strong> {logiciels.axonaut.idealPour}</div>
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{data.verdictAxonaut}</p>
              <div className="space-y-2 text-xs text-muted-foreground mb-6 pt-4 border-t border-border">
                <div className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" /><span><strong>Point fort :</strong> {logiciels.axonaut.pointFort}</span></div>
                <div className="flex items-start"><X className="w-4 h-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" /><span><strong>Point faible :</strong> {logiciels.axonaut.pointFaible}</span></div>
                <div className="flex justify-between"><span className="font-medium">Tarif :</span><span className="text-foreground">{logiciels.axonaut.tarif}</span></div>
              </div>
              <a href={logiciels.axonaut.lien} target="_blank" rel="noopener noreferrer" className="block w-full bg-blue-500 text-white text-center py-3 rounded-lg font-medium hover:bg-blue-600 transition-smooth">Essayer {logiciels.axonaut.nom}</a>
            </motion.div>
          </div>
        </motion.section>

        {/* COMPARATIF */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card rounded-xl border border-border p-8 mb-16">
          <div className="mb-6">
            <div className="inline-flex items-center space-x-2 text-sm font-medium text-muted-foreground mb-3">
              <Eye className="w-4 h-4" /><span>Analyse détaillée</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-2">Comparatif technique</h2>
            <p className="text-muted-foreground">Fonctionnalité par fonctionnalité, voici ce qui les différencie vraiment.</p>
          </div>
          <ComparisonTable />
        </motion.section>

        {/* CRITÈRES */}
        <motion.section id="criteres" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 text-sm font-medium text-muted-foreground mb-3">
              <Target className="w-4 h-4" /><span>Ce qui compte vraiment pour vous</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4 leading-tight">Les 5 critères<br /><span className="text-muted-foreground">qui font la différence.</span></h2>
          </div>
          <div className="space-y-4">
            {data.criteresEssentiels.map((critere, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-card rounded-xl border border-border p-6 hover-lift">
                <div className="flex items-start space-x-4">
                  <div className={`rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm flex-shrink-0 ${critere.importance === 'critique' ? 'bg-red-500 text-white' : critere.importance === 'important' ? 'bg-orange-500 text-white' : 'bg-foreground text-background'}`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{critere.titre}</h3>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${critere.importance === 'critique' ? 'bg-red-500/10 text-red-500' : critere.importance === 'important' ? 'bg-orange-500/10 text-orange-500' : 'bg-muted text-muted-foreground'}`}>
                        {critere.importance === 'critique' ? 'CRITIQUE' : critere.importance === 'important' ? 'IMPORTANT' : 'UTILE'}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{critere.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* TÉMOIGNAGE */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-foreground rounded-2xl p-8 md:p-12 text-background mb-16">
          <Quote className="w-12 h-12 text-background/30 mb-6" />
          <p className="text-xl md:text-2xl leading-relaxed mb-8 text-background">"{data.temoignage.texte}"</p>
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-full bg-background/10 flex items-center justify-center text-background font-bold text-lg">{data.temoignage.prenom[0]}{data.temoignage.initiale}.</div>
            <div>
              <div className="font-semibold text-background">{data.temoignage.prenom} {data.temoignage.initiale}.</div>
              <div className="text-sm text-background/70">{data.nom} à {data.temoignage.ville} • {data.temoignage.anneesExperience} ans d'expérience</div>
            </div>
          </div>
        </motion.section>

        {/* ERREURS */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 text-sm font-medium text-muted-foreground mb-3">
              <AlertTriangle className="w-4 h-4" /><span>Ce qu'on voit trop souvent</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4 leading-tight">Les 3 erreurs classiques<br /><span className="text-muted-foreground">à éviter.</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {data.erreursAEviter.map((erreur, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-xl border border-border p-6">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center mb-4"><span className="text-red-500 font-bold">{i + 1}</span></div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{erreur.titre}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{erreur.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ROI */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center space-x-2 text-sm font-medium text-muted-foreground mb-3">
              <Calculator className="w-4 h-4" /><span>Calculateur personnalisé</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4 leading-tight">Combien vous coûte<br /><span className="text-muted-foreground">votre admin actuelle ?</span></h2>
          </div>
          <ROICalculator />
        </motion.section>

        {/* FAQ */}
        <motion.section id="faq" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center space-x-2 text-sm font-medium text-muted-foreground mb-3">
              <HelpCircle className="w-4 h-4" /><span>Questions spécifiques au métier</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4 leading-tight">Vos questions,<br /><span className="text-muted-foreground">nos réponses.</span></h2>
          </div>
          <div className="space-y-4">
            {data.faqMetier.map((item, i) => (
              <motion.details key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group bg-card rounded-xl border border-border p-6 hover:border-foreground/20 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-foreground pr-4">{item.question}</h3>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-open:rotate-90 transition-transform flex-shrink-0" />
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">{item.reponse}</p>
              </motion.details>
            ))}
          </div>
        </motion.section>

        {/* QUIZ */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Encore un doute ?</h2>
            <p className="text-lg text-muted-foreground">3 questions pour confirmer votre choix en 30 secondes.</p>
          </div>
          <Quiz />
        </motion.section>

        {/* CROSS-SELL QONTO */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card rounded-xl border-2 border-yellow-500 p-8 mb-16">
          <div className="flex items-start">
            <div className="text-5xl mr-6">💳</div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-foreground mb-4">N'oubliez pas votre compte pro</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">Pour automatiser votre comptabilité avec {logiciels.obat.nom} ou {logiciels.axonaut.nom}, nous recommandons <strong className="text-foreground">Qonto</strong>. La synchronisation bancaire se fait en 1 clic.</p>
              <a href="https://qonto.com/?ref=btp_compare" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-smooth">
                Découvrir Qonto<ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.section>

        {/* RETOUR */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <a href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-smooth">
            <ArrowLeft className="w-4 h-4" />Voir tous les métiers
          </a>
        </motion.section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border mt-16 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center text-background text-sm font-bold">B</div>
                <div className="text-lg font-semibold text-foreground tracking-tight">BTP-Compare</div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-4">Le comparateur indépendant des logiciels pour artisans du bâtiment.</p>
              <p className="text-xs text-muted-foreground">Projet éditorial indépendant — Aucune participation financière des éditeurs.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Autres métiers</h3>
              <ul className="space-y-2">
                {metiers.filter(m => m.slug !== data.slug).map((m) => (
                  <li key={m.slug}><a href={`/${m.slug}`} className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Comparatif {m.nomPluriel}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Informations</h3>
              <ul className="space-y-2">
                <li><a href="/legal/mentions-legales" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Mentions légales</a></li>
                <li><a href="/legal/politique-confidentialite" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Politique de confidentialité</a></li>
                <li><a href="/legal/cgu" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">CGU</a></li>
                <li><a href="/legal/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Cookies</a></li>
                <li><a href="/legal/affiliation" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Transparence affiliation</a></li>
                <li><a href="/legal/contact" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs text-muted-foreground">© 2026 BTP-Compare.fr — Tous droits réservés</div>
            <div className="text-xs text-muted-foreground">Fait avec soin à Rennes, France 🇫🇷</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
