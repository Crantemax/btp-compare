// components/exit-intent.tsx
// Pop-up exit-intent pour capturer les leads qui quittent

'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift } from 'lucide-react';
import { LeadForm } from './lead-form';

interface ExitIntentProps {
  enabled?: boolean;
  source?: 'roiCalculator' | 'comparaison' | 'page_metier' | 'sidebar' | 'exit_intent';
}

export function ExitIntent({ enabled = true, source = 'exit_intent' }: ExitIntentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (!enabled || isDismissed) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Déclenche seulement si la souris quitte le haut de la page
      if (e.clientY < 50) {
        setIsVisible(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [enabled, isDismissed]);

  const handleClose = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Overlay centré avec flex */}
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="w-full max-w-md pointer-events-auto"
          >
            <div className="bg-card border border-border rounded-2xl shadow-2xl p-6 space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Gift className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">
                      Avant de partir...
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Téléchargez le guide gratuit
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="text-muted-foreground hover:text-foreground transition-colors p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <p className="text-sm text-foreground">
                  <strong>📚 "Les 5 erreurs à éviter avant de choisir votre logiciel BTP"</strong>
                </p>
                <p className="text-sm text-muted-foreground">
                  + 7 conseils d'experts dans votre boîte mail (gratuit)
                </p>
              </div>

              {/* Form */}
              <LeadForm
                source={source}
                onSuccess={handleClose}
              />

              {/* CTA alternative */}
              <button
                onClick={handleClose}
                className="w-full py-2 text-center text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Non merci, quitter
              </button>
            </div>
          </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
