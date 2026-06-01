'use client';

import { AlertCircle } from 'lucide-react';

export function TransparencyBanner() {
  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-8 mt-6">
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-yellow-800 dark:text-yellow-300">
            <strong>Transparence :</strong> Cette analyse est basée sur la documentation officielle et les avis vérifiés (Trustpilot, G2). 
            Nous n'avons pas testé physiquement ce logiciel pendant 6 mois. 
            Les liens vers les sources sont fournis pour que vous puissiez vérifier vous-même. 
            <a href="/methodologie" className="underline ml-1">Voir notre méthodologie complète</a>.
          </div>
        </div>
      </div>
    </div>
  );
}
