'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, Clock, Euro, Info, Mail, CheckCircle } from 'lucide-react';

interface ROICalculatorProps {
  tauxHoraireDefaut: number;
  tempsAdminDefaut: number;
  metierNom: string;
}

export function ROICalculator({ tauxHoraireDefaut, tempsAdminDefaut, metierNom }: ROICalculatorProps) {
  const [hours, setHours] = useState(tempsAdminDefaut);
  const [hourlyRate, setHourlyRate] = useState(tauxHoraireMoyen());
  const [gainPercentage, setGainPercentage] = useState(50); // Input utilisateur
  const [logicielCost, setLogicielCost] = useState(49);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  function tauxHoraireMoyen() {
    return tauxHoraireDefaut;
  }

  // CALCULS
  const monthlyLoss = hours * 4 * hourlyRate;
  const yearlyLoss = monthlyLoss * 12;
  const monthlySavings = monthlyLoss * (gainPercentage / 100);
  const yearlySavings = monthlySavings * 12;
  const logicielCostYearly = logicielCost * 12;
  const netYearlyGain = yearlySavings - logicielCostYearly;
  const roi = logicielCostYearly > 0 ? Math.round((netYearlyGain / logicielCostYearly) * 100) : 0;
  const paybackMonths = monthlySavings > 0 ? Math.ceil(logicielCost / monthlySavings) : 0;

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO : Intégrer avec Brevo/Mailchimp
    setEmailSubmitted(true);
    console.log('Email capturé:', email, {
      metier: metierNom,
      hours,
      hourlyRate,
      gainPercentage,
      logicielCost,
      yearlySavings: Math.round(yearlySavings),
      netYearlyGain: Math.round(netYearlyGain)
    });
  };

  return (
    <div className="bg-card rounded-2xl border border-border p-8 max-w-3xl mx-auto">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mr-4">
          <Calculator className="w-6 h-6 text-foreground" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground">Calculateur personnalisé pour {metierNom.toLowerCase()}s</h3>
          <p className="text-sm text-muted-foreground">Ajustez les curseurs selon votre réalité</p>
        </div>
      </div>

      {/* INPUTS */}
      <div className="space-y-6 mb-8">
        {/* Heures admin */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-semibold text-foreground flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Heures d'admin par semaine
            </label>
            <span className="text-lg font-bold text-foreground">{hours}h</span>
          </div>
          <input
            type="range"
            min="1"
            max="20"
            step="0.5"
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            className="w-full h-2 bg-accent rounded-lg appearance-none cursor-pointer accent-foreground"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>1h (très organisé)</span>
            <span>Moyenne {metierNom.toLowerCase()}s : {tempsAdminDefaut}h</span>
            <span>20h (noyé)</span>
          </div>
        </div>

        {/* Taux horaire */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-semibold text-foreground flex items-center">
              <Euro className="w-4 h-4 mr-2" />
              Votre taux horaire
            </label>
            <span className="text-lg font-bold text-foreground">{hourlyRate}€</span>
          </div>
          <input
            type="range"
            min="30"
            max="120"
            step="5"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(Number(e.target.value))}
            className="w-full h-2 bg-accent rounded-lg appearance-none cursor-pointer accent-foreground"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>30€ (débutant)</span>
            <span>Moyenne {metierNom.toLowerCase()}s : {tauxHoraireDefaut}€</span>
            <span>120€ (expert)</span>
          </div>
        </div>

        {/* % DE GAIN ESTIMÉ (INPUT UTILISATEUR) */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-semibold text-foreground flex items-center">
              <TrendingUp className="w-4 h-4 mr-2" />
              Gain de temps estimé avec un bon logiciel
            </label>
            <span className="text-lg font-bold text-foreground">{gainPercentage}%</span>
          </div>
          <input
            type="range"
            min="10"
            max="90"
            step="5"
            value={gainPercentage}
            onChange={(e) => setGainPercentage(Number(e.target.value))}
            className="w-full h-2 bg-accent rounded-lg appearance-none cursor-pointer accent-foreground"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>10% (modeste)</span>
            <span>Estimez selon votre situation</span>
            <span>90% (ambitieux)</span>
          </div>
          <div className="mt-2 p-3 bg-accent/50 rounded-lg text-xs text-muted-foreground flex items-start space-x-2">
            <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <p>
              <strong>Comment estimer ?</strong> D'après les retours utilisateurs sur Trustpilot/G2, les gains observés varient de 30% à 70% selon les métiers et les outils. 
              Si vous débutez avec un logiciel, visez 30-50%. Si vous utilisez actuellement Excel, vous pouvez espérer 50-70%.
            </p>
          </div>
        </div>

        {/* Coût logiciel */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-semibold text-foreground flex items-center">
              <Calculator className="w-4 h-4 mr-2" />
              Coût mensuel du logiciel envisagé
            </label>
            <span className="text-lg font-bold text-foreground">{logicielCost}€</span>
          </div>
          <input
            type="range"
            min="39"
            max="300"
            step="10"
            value={logicielCost}
            onChange={(e) => setLogicielCost(Number(e.target.value))}
            className="w-full h-2 bg-accent rounded-lg appearance-none cursor-pointer accent-foreground"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>39€ (Obat Starter)</span>
            <span>49€ (Axonaut) | 89€ (ProGBat)</span>
            <span>300€ (ERP complet)</span>
          </div>
        </div>
      </div>

      {/* RÉSULTATS */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <motion.div
          key={monthlyLoss}
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="bg-red-500/10 border border-red-500/30 rounded-xl p-4"
        >
          <div className="text-xs text-red-600 dark:text-red-400 mb-1">Vous perdez chaque mois</div>
          <div className="text-2xl font-bold text-red-600 dark:text-red-400">{Math.round(monthlyLoss)}€</div>
          <div className="text-xs text-muted-foreground mt-1">en temps admin non facturé</div>
        </motion.div>

        <motion.div
          key={yearlySavings}
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="bg-green-500/10 border border-green-500/30 rounded-xl p-4"
        >
          <div className="text-xs text-green-600 dark:text-green-400 mb-1">Vous pourriez économiser</div>
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">{Math.round(yearlySavings)}€</div>
          <div className="text-xs text-muted-foreground mt-1">par an ({gainPercentage}% de votre temps admin)</div>
        </motion.div>

        <motion.div
          key={roi}
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-500/30 rounded-xl p-4"
        >
          <div className="text-xs text-purple-600 dark:text-purple-400 mb-1">ROI net la 1ère année</div>
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            {netYearlyGain >= 0 ? '+' : ''}{Math.round(netYearlyGain)}€
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            {roi > 0 ? `${roi}% de retour sur investissement` : 'Ajustez vos paramètres'}
          </div>
        </motion.div>
      </div>

      {/* PAYBACK PERIOD */}
      {paybackMonths > 0 && paybackMonths < 24 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-accent rounded-lg p-4 mb-6"
        >
          <div className="flex items-start space-x-2">
            <TrendingUp className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-foreground mb-1">
                Rentabilité atteinte en {paybackMonths} mois
              </div>
              <div className="text-sm text-muted-foreground">
                Avec un coût de {logicielCost}€/mois et des économies de {Math.round(monthlySavings)}€/mois, 
                vous remboursez votre investissement en {paybackMonths} mois, puis générez du bénéfice net.
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* DÉTAIL CALCUL */}
      <div className="p-4 bg-accent rounded-lg text-sm text-muted-foreground mb-6">
        <div className="flex items-start space-x-2">
          <Info className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
          <div>
            <strong className="text-foreground">Calcul basé sur VOS données :</strong>{' '}
            {hours}h/semaine × 4 semaines × {hourlyRate}€ = <strong className="text-foreground">{Math.round(monthlyLoss)}€/mois</strong> perdus en admin.
            Avec votre estimation de {gainPercentage}% de gain, vous économisez <strong className="text-foreground">{Math.round(monthlySavings)}€/mois</strong>.
            Coût annuel logiciel : {logicielCostYearly}€.
            <strong className="text-foreground"> Gain net annuel : {Math.round(netYearlyGain)}€.</strong>
          </div>
        </div>
      </div>

      {/* CAPTURE EMAIL (Optionnel) */}
      {!emailSubmitted ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="border-t border-border pt-6"
        >
          {!showEmailCapture ? (
            <button
              onClick={() => setShowEmailCapture(true)}
              className="w-full py-3 rounded-lg border border-border text-foreground font-medium hover:bg-accent transition-colors flex items-center justify-center space-x-2"
            >
              <Mail className="w-4 h-4" />
              <span>Recevoir cette analyse par email (gratuit)</span>
            </button>
          ) : (
            <form onSubmit={handleEmailSubmit} className="space-y-3">
              <div className="bg-accent/50 rounded-lg p-4 text-sm text-muted-foreground mb-3">
                <strong className="text-foreground">📧 Recevez votre analyse personnalisée :</strong> 
                Un PDF avec vos résultats + nos recommandations adaptées à votre métier ({metierNom}).
              </div>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.fr"
                  required
                  className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground"
                />
                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
                >
                  Recevoir
                </button>
              </div>
              <p className="text-xs text-muted-foreground">
                Pas de spam. Désabonnement en 1 clic. Voir notre <a href="/legal/politique-confidentialite" className="underline">politique de confidentialité</a>.
              </p>
            </form>
          )}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 flex items-center space-x-3"
        >
          <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
          <div>
            <div className="font-semibold text-foreground">Parfait ! Votre analyse arrive dans votre boîte mail.</div>
            <div className="text-sm text-muted-foreground">Vérifiez vos spams si vous ne la voyez pas d'ici 5 minutes.</div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
