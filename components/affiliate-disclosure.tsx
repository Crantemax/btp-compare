'use client';

import { AlertCircle } from 'lucide-react';

export function AffiliateDisclosure() {
  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-8 mt-6">
      <div className="bg-accent rounded-lg p-4 border-l-4 border-primary">
        <div className="flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Transparence :</strong> Ce comparatif contient des liens affiliés. 
            Si vous vous inscrivez à un logiciel via nos liens, nous touchons une commission 
            <strong className="text-foreground"> sans que cela n'augmente le prix pour vous</strong>. 
            Ces commissions financent nos tests indépendants. Nos avis restent 100% objectifs : 
            nous recommandons uniquement les outils réellement adaptés à chaque métier, 
            et nous publions systématiquement leurs points faibles.
          </div>
        </div>
      </div>
    </div>
  );
}
