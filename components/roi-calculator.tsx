'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp } from 'lucide-react';

export function ROICalculator() {
  const [hours, setHours] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(50);

  const monthlySavings = hours * 4 * hourlyRate * 0.7; // 70% du temps économisé
  const yearlySavings = monthlySavings * 12;

  return (
    <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
      <div className="flex items-center mb-6">
        <Calculator className="w-8 h-8 text-purple-600 mr-3" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Calculateur de ROI
        </h3>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Heures perdues par semaine sur l'admin
          </label>
          <input
            type="range"
            min="1"
            max="40"
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
          />
          <div className="text-center text-2xl font-bold text-purple-600 mt-2">
            {hours}h / semaine
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Votre taux horaire (€)
          </label>
          <input
            type="range"
            min="20"
            max="150"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
          />
          <div className="text-center text-2xl font-bold text-purple-600 mt-2">
            {hourlyRate}€ / heure
          </div>
        </div>

        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm opacity-90">Économies mensuelles</span>
            <TrendingUp className="w-5 h-5" />
          </div>
          <div className="text-3xl font-bold">{Math.round(monthlySavings)}€</div>
          
          <div className="mt-4 pt-4 border-t border-white/20">
            <div className="flex items-center justify-between">
              <span className="text-sm opacity-90">Économies annuelles</span>
            </div>
            <div className="text-4xl font-bold">{Math.round(yearlySavings)}€</div>
          </div>
        </motion.div>

        <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
          * Basé sur une réduction de 70% du temps administratif grâce à l'automatisation
        </p>
      </div>
    </div>
  );
}
