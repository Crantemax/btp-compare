'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, Clock, Euro } from 'lucide-react';

interface ROICalculatorProps {
  tauxHoraireDefaut: number;
  tempsAdminDefaut: number;
  metierNom: string;
}

export function ROICalculator({ tauxHoraireDefaut, tempsAdminDefaut, metierNom }: ROICalculatorProps) {
  const [hours, setHours] = useState(tempsAdminDefaut);
  const [hourlyRate, setHourlyRate] = useState(tauxHoraireDefaut);
  const [logicielCost, setLogicielCost] = useState(49); // Coût mensuel moyen

  const monthlyLoss = hours * 4 * hourlyRate;
  const yearlyLoss = monthlyLoss * 12;
  const monthlySavings = monthlyLoss * 0.7; // 70% de gain grâce au logiciel
  const yearlySavings = monthlySavings * 12;
  const logicielCostYearly = logicielCost * 12;
  const netYearlyGain = yearlySavings - logicielCostYearly;
  const roi = Math.round((netYearlyGain / logicielCostYearly) * 100);

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

        {/* Coût logiciel */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-semibold text-foreground flex items-center">
              <Calculator className="w-4 h-4 mr-2" />
              Coût mensuel du logiciel
            </label>
            <span className="text-lg font-bold text-foreground">{logicielCost}€</span>
          </div>
          <input
            type="range"
            min="29"
            max="150"
            step="10"
            value={logicielCost}
            onChange={(e) => setLogicielCost(Number(e.target.value))}
            className="w-full h-2 bg-accent rounded-lg appearance-none cursor-pointer accent-foreground"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>29€ (basique)</span>
            <span>Obat : 39€ | Axonaut : 49€</span>
            <span>150€ (premium)</span>
          </div>
        </div>
      </div>

      {/* Résultats */}
      <div className="grid md:grid-cols-3 gap-4">
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
          <div className="text-xs text-muted-foreground mt-1">par an avec un bon logiciel</div>
        </motion.div>

        <motion.div
          key={roi}
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-500/30 rounded-xl p-4"
        >
          <div className="text-xs text-purple-600 dark:text-purple-400 mb-1">ROI net la 1ère année</div>
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">+{Math.round(netYearlyGain)}€</div>
          <div className="text-xs text-muted-foreground mt-1">soit {roi}% de retour sur investissement</div>
        </motion.div>
      </div>

      <div className="mt-6 p-4 bg-accent rounded-lg text-sm text-muted-foreground">
        <div className="flex items-start space-x-2">
          <TrendingUp className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
          <div>
            <strong className="text-foreground">Calcul basé sur vos données :</strong> 
            {' '}{hours}h × 4 semaines × {hourlyRate}€ = <strong className="text-foreground">{Math.round(monthlyLoss)}€</strong> perdus par mois. 
            Un bon logiciel fait gagner ~70% de ce temps. Coût annuel du logiciel : {logicielCostYearly}€.
            <strong className="text-foreground"> Gain net : {Math.round(netYearlyGain)}€ la première année.</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
