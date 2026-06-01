'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Minus } from 'lucide-react';

interface Feature {
  name: string;
  obat: boolean | string;
  axonaut: boolean | string;
}

const features: Feature[] = [
  { name: 'Mode hors-ligne', obat: false, axonaut: false },
  { name: 'Application mobile', obat: true, axonaut: true },
  { name: 'Bibliothèque de prix', obat: true, axonaut: 'Partielle' },
  { name: 'Situations de travaux', obat: true, axonaut: true },
  { name: 'Signature électronique', obat: true, axonaut: true },
  { name: 'API ouverte', obat: 'Limitée', axonaut: true },
  { name: 'Support réactif', obat: true, axonaut: true },
  { name: 'Factur-X conforme', obat: true, axonaut: true },
];

export function ComparisonTable() {
  const [highlighted, setHighlighted] = useState<'obat' | 'axonaut' | null>(null);

  const renderCell = (value: boolean | string) => {
    if (value === true) return <Check className="w-5 h-5 text-green-500" />;
    if (value === false) return <X className="w-5 h-5 text-red-500" />;
    return <span className="text-sm text-yellow-600 dark:text-yellow-400">{value}</span>;
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b-2 border-gray-200 dark:border-gray-700">
            <th className="text-left py-4 px-4 font-bold text-gray-900 dark:text-gray-100">Fonctionnalité</th>
            <th 
              className="text-center py-4 px-4 cursor-pointer transition-colors"
              onMouseEnter={() => setHighlighted('obat')}
              onMouseLeave={() => setHighlighted(null)}
            >
              <div className={`px-4 py-2 rounded-lg ${highlighted === 'obat' ? 'bg-green-100 dark:bg-green-900/30' : ''}`}>
                <div className="font-bold text-green-600 dark:text-green-400">🟢 Obat</div>
              </div>
            </th>
            <th 
              className="text-center py-4 px-4 cursor-pointer transition-colors"
              onMouseEnter={() => setHighlighted('axonaut')}
              onMouseLeave={() => setHighlighted(null)}
            >
              <div className={`px-4 py-2 rounded-lg ${highlighted === 'axonaut' ? 'bg-blue-100 dark:bg-blue-900/30' : ''}`}>
                <div className="font-bold text-blue-600 dark:text-blue-400">🔵 Axonaut</div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <AnimatePresence>
            {features.map((feature, index) => (
              <motion.tr
                key={feature.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <td className="py-4 px-4 font-semibold text-gray-900 dark:text-gray-100">{feature.name}</td>
                <td className="py-4 px-4 text-center">
                  <div className="flex justify-center">
                    {renderCell(feature.obat)}
                  </div>
                </td>
                <td className="py-4 px-4 text-center">
                  <div className="flex justify-center">
                    {renderCell(feature.axonaut)}
                  </div>
                </td>
              </motion.tr>
            ))}
          </AnimatePresence>
        </tbody>
      </table>
    </div>
  );
}
