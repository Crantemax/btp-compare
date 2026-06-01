// components/lead-form.tsx
// Formulaire de capture de leads réutilisable

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Check, AlertCircle, Loader } from 'lucide-react';

interface LeadFormProps {
  source: 'roiCalculator' | 'comparaison' | 'page_metier' | 'sidebar' | 'exit_intent';
  metier?: string;
  yearlySavings?: number;
  onSuccess?: () => void;
}

export function LeadForm({
  source,
  metier,
  yearlySavings,
  onSuccess,
}: LeadFormProps) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setState('loading');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          firstName: firstName || 'Artisan',
          metier: metier || 'Non spécifié',
          yearlySavings: yearlySavings || 0,
          source,
          honeypot: (e.currentTarget.querySelector('[name="website"]') as HTMLInputElement)?.value || '',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setState('error');
        setErrorMessage(data.error || 'Une erreur est survenue');
        return;
      }

      setState('success');
      setEmail('');
      setFirstName('');

      // Log conversion pour analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'lead_capture', {
          source,
          metier,
          email_length: email.length,
        });
      }

      // Callback optionnel
      onSuccess?.();

      // Réinitialiser après 3 secondes
      setTimeout(() => setState('idle'), 3000);
    } catch (error) {
      setState('error');
      setErrorMessage('Erreur de connexion. Réessayez.');
    } finally {
      setLoading(false);
    }
  };

  if (state === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-4 flex items-start gap-3"
      >
        <Check className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold text-green-900 dark:text-green-100">
            Email reçu !
          </p>
          <p className="text-sm text-green-700 dark:text-green-300 mt-1">
            Vous êtes inscrit ! Vous recevrez nos prochains conseils logiciels BTP.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {/* Honeypot anti-bot — caché via CSS, jamais rempli par un humain */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        style={{ position: 'absolute', left: '-9999px', opacity: 0 }}
        aria-hidden="true"
      />

      {/* Prénom (optionnel) */}
      <input
        type="text"
        placeholder="Votre prénom (optionnel)"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
      />

      {/* Email (requis) */}
      <div className="flex gap-2">
        <div className="flex-1 relative">
          <input
            type="email"
            placeholder="votre@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          />
          {email && !email.includes('@') && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
              ✗
            </span>
          )}
        </div>
        <button
          type="submit"
          disabled={!email || loading}
          className="px-6 py-2 bg-accent text-background font-semibold rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity flex items-center gap-2"
        >
          {loading ? (
            <>
              <Loader className="w-4 h-4 animate-spin" />
              Envoi...
            </>
          ) : (
            <>
              <Mail className="w-4 h-4" />
              Envoyer
            </>
          )}
        </button>
      </div>

      {/* Message d'erreur */}
      {state === 'error' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg p-3 flex items-start gap-2"
        >
          <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-700 dark:text-red-300">{errorMessage}</p>
        </motion.div>
      )}

      {/* Small disclaimer */}
      <p className="text-xs text-muted-foreground">
        ✓ Sans spam. Zéro publicité. Unsubscribe en 1 clic.
      </p>
    </form>
  );
}
