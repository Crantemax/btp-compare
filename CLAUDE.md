# BTP-Compare — Documentation projet pour Claude

> Fichier de référence à lire en priorité à chaque session.
> Mis à jour : juin 2026

---

## 1. Présentation du projet

**Objectif :** Site affilié comparateur de logiciels BTP. Générer des revenus via liens affiliés Obat et Axonaut (et futurs partenaires) en rankant sur Google pour des requêtes type "meilleur logiciel BTP [métier]", "logiciel devis [métier]", etc.

**URL prod :** https://btp-compare.fr  
**Repo GitHub :** https://github.com/Crantemax/btp-compare  
**Déploiement :** Vercel (auto-deploy sur push main)

**Stack :**
- Next.js 14.2 (App Router, SSG)
- TypeScript 5 strict
- Tailwind CSS 3.4
- Framer Motion 11
- Brevo (capture leads uniquement — pas d'envoi email)
- Vercel Analytics + Speed Insights

---

## 2. Structure des routes

```
/                               → Homepage (page.tsx)
/logiciels/[slug]               → Fiche logiciel (17 logiciels)
/comparer/[slugs]               → Comparaison A-vs-B (21 comparaisons)
/[metier]                       → Page métier (20 métiers)
/[metier]/[probleme]            → Page problème (20 × 4 = 80 pages)
/[metier]/taille/[taille]       → Page taille entreprise (20 × 4 = 80 pages)
/legal/[slug]                   → Pages légales (mentions, CGU, etc.)
```

**⚠️ Conflit de routes résolu :** `/[metier]/[probleme]` et `/[metier]/taille/[taille]` coexistent grâce au préfixe statique `/taille/`.

---

## 3. Données — fichiers clés

### `data/logiciels.ts`
**17 logiciels** dans le tableau `logiciels: Logiciel[]` :
```
obat, axonaut, tolteck, progbat, batigest, ebp, sellsy,
henrri, sage-100-btp, quickbooks, tiime, holded, freebe,
zoho-invoice, facture-net, abby, pennylane
```

**Interface TypeScript critique (ne pas se tromper) :**
```typescript
interface Logiciel {
  slug: string
  nom: string
  logo: string          // emoji couleur : 🟢🔵🟠🟣🔴🟡🔷🟤
  lienAffiliation?: string  // lien affilié — OPTIONNEL
  site: string          // site officiel direct (NE PAS utiliser pour CTA)
  pitch: string         // ← PAS description
  idealPour: string
  pointsForts: { titre: string; description: string; source: string; icone: string }[]
  pointsFaibles: { titre: string; description: string; source: string; icone: string }[]
  tarification: {
    formules: { nom: string; prix: string; idealPour: string; fonctionnalites: string[] }[]
    // prix = texte long ex: "À partir de 89€/mois (à vérifier...)"
    // → toujours utiliser formatPrix() pour l'afficher dans les cards
  }
  sources: {
    trustpilot?: SourceAvis  // optionnel
    g2?: SourceAvis          // optionnel
  }
}
```

**Liens affiliés réels configurés :**
- Obat : `https://obat.com/?ref=btp_compare`
- Axonaut : `https://axonaut.com/?a=ADE1CH12F6`
- Autres logiciels : `lienAffiliation` absent ou placeholder → **à compléter**

### `data/metiers.ts`
**20 métiers** dans le tableau `metiers: Metier[]` :
```
plombier, electricien, macon, couvreur, menuisier, carreleur,
peintre, chauffagiste, serrurier, plaquiste, vitrier, etancheur,
charpentier, zingueur, terrassier, paysagiste, pisciniste,
alarmiste, ascensoriste, facadier
```

### `data/comparaisons.ts`
**21 comparaisons** entre les 7 logiciels historiques (obat, axonaut, tolteck, progbat, batigest, ebp, sellsy).

---

## 4. Helpers visuels — à réutiliser partout

Ces fonctions existent dans `app/page.tsx` et `app/logiciels/[slug]/LogicielPageClient.tsx`. Les copier si besoin dans d'autres composants.

```typescript
// Raccourcit le prix pour les badges
function formatPrix(prix: string): string {
  if (!prix) return '—';
  if (prix.startsWith('0€')) return 'Gratuit';
  if (prix.toLowerCase().includes('sur devis')) return 'Sur devis';
  const match = prix.match(/(\d+€(?:\/[a-zA-Zé]+(?:\/[a-zA-Zé]+)*)?)/);
  if (match) return `Dès ${match[1]}`;
  return prix.split('(')[0].replace(/^À partir de\s*/i, 'Dès ').trim();
}

// Initiales du nom (2 chars)
function getInitials(nom: string): string {
  const words = nom.trim().split(/[\s\-]+/);
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
  return nom.slice(0, 2).toUpperCase();
}

// Couleur associée à l'emoji-logo
const LOGO_STYLES: Record<string, { bg: string; text: string }> = {
  '🟢': { bg: 'bg-green-500/15',  text: 'text-green-700 dark:text-green-400' },
  '🔵': { bg: 'bg-blue-500/15',   text: 'text-blue-700 dark:text-blue-400' },
  '🟠': { bg: 'bg-orange-500/15', text: 'text-orange-600 dark:text-orange-400' },
  '🟣': { bg: 'bg-purple-500/15', text: 'text-purple-700 dark:text-purple-400' },
  '🔴': { bg: 'bg-red-500/15',    text: 'text-red-700 dark:text-red-400' },
  '🟡': { bg: 'bg-yellow-500/15', text: 'text-yellow-700 dark:text-yellow-500' },
  '🔷': { bg: 'bg-cyan-500/15',   text: 'text-cyan-700 dark:text-cyan-400' },
  '🟤': { bg: 'bg-amber-700/15',  text: 'text-amber-800 dark:text-amber-400' },
};
```

---

## 5. Design system

**Couleurs CSS (globals.css) — mode clair :**
```
--primary: 22 85% 48%      → orange BTP (#d4611a environ)
--background: 36 20% 98%   → blanc cassé
--foreground: 20 15% 8%    → presque noir
--card: 0 0% 100%          → blanc
--muted-foreground: 20 8% 46%  → gris moyen
--border: 30 12% 88%       → gris clair
```

**Classes utilitaires custom (globals.css) :**
```
.hover-lift          → translateY(-2px) + shadow au hover
.glass-subtle        → backdrop-blur léger
.gradient-subtle     → bg basique (= background)
.gradient-mesh       → variante avec légère texture
.transition-smooth   → transition 0.18s cubic-bezier
.card-base           → bg-card + border + radius + hover
.heading-editorial   → Instrument Serif, grands titres
```

**Fonts :**
- Corps : DM Sans (300/400/500/600)
- Titres éditoriaux : Instrument Serif (400 normal + italic)

**Patterns de card récurrents :**
```tsx
// Card logiciel avec barre couleur
<div className="rounded-xl border border-border overflow-hidden bg-card hover-lift">
  <div className="h-1 bg-gradient-to-r from-primary to-amber-400" />
  <div className="p-5">...</div>
</div>

// Logo initiales colorées
<div className={`w-12 h-12 rounded-xl ${style.bg} flex items-center justify-center`}>
  <span className={`text-base font-bold ${style.text}`}>{initials}</span>
</div>

// Badge prix
<span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">
  {formatPrix(prix)}
</span>
```

---

## 6. Pages taille entreprise (`/[metier]/taille/[taille]`)

**4 tailles :** `auto-entrepreneur` · `artisan-seul` · `equipe-2-5` · `pme-5-15`

Données dans `TaillePageClient.tsx` — objet `TAILLE_DATA` avec pour chaque combinaison métier/taille :
- `besoins[]` — liste des besoins spécifiques
- `budget` — fourchette budget
- `logicielsRecommandes[]` — 3 slugs de logiciels

---

## 7. Pages problèmes (`/[metier]/[probleme]`)

**4 problèmes par métier.** Définis dans `PROBLEMES_PAR_METIER` (page.tsx du problème) :

```typescript
plombier:      ['depannage-urgent', 'salle-de-bain', 'chauffage', 'tva-10-pourcent']
electricien:   ['nfc-15-100', 'domotique', 'bornes-irve', 'tableaux-electriques']
macon:         ['situations-travaux', 'compte-prorata', 'extensions', 'murs-porteurs']
couvreur:      ['toitures-complexes', 'zinguerie', 'decennale', 'calculs-surface']
menuisier:     ['sur-mesure', 'escaliers', 'fenetres', 'agencement']
carreleur:     ['carrelage-grand-format', 'devis-metrage', 'sous-traitance', 'salle-de-bain']
peintre:       ['devis-colorimetrie', 'multi-corps', 'ravalement', 'sous-traitants']
chauffagiste:  ['pac-chaudiere', 'maintenance-contrats', 'qualification-rge', 'subventions']
serrurier:     ['depannage-urgent', 'serrures-haute-securite', 'coffres-forts', 'controle-acces']
plaquiste:     ['cloisons', 'faux-plafonds', 'isolation', 'enduits']
vitrier:       ['vitrages-doubles', 'miroirs', 'urgences-casse', 'stores']
etancheur:     ['toitures-terrasses', 'fondations', 'parkings', 'diagnostics']
charpentier:   ['charpentes-traditionnelles', 'ossature-bois', 'renovation', 'calculs-structure']
zingueur:      ['gouttières', 'descentes-ep', 'couvertines', 'zinguerie-ornementale']
terrassier:    ['vrd', 'fondations', 'assainissement', 'terrains-en-pente']
paysagiste:    ['jardins-creation', 'terrasses-exterieur', 'irrigation', 'contrats-entretien']
pisciniste:    ['construction-piscine', 'renovation-liner', 'equipements', 'maintenance']
alarmiste:     ['alarmes-intrusion', 'videoprotection', 'controle-acces', 'domotique']
ascensoriste:  ['installation', 'maintenance', 'modernisation', 'conformite-reglementaire']
facadier:      ['ravalement', 'isolation-exterieure', 'peinture-exterieure', 'nettoyage']
```

---

## 8. Composants importants

```
components/
  analytics.tsx         → retourne null (Plausible supprimé, remplacé par Vercel)
  affiliate-disclosure.tsx → retourne null (mention dans footer layout)
  transparency-banner.tsx  → retourne null (idem)
  exit-intent.tsx       → popup exit-intent avec LeadForm
  lead-form.tsx         → formulaire Brevo (honeypot + rate limiting)
  quiz.tsx              → quiz 7 questions → recommandation logiciel
  roi-calculator.tsx    → calculateur ROI temps admin
  theme-toggle.tsx      → dark/light mode
```

**API Routes :**
```
app/api/leads/route.ts  → POST : capture lead → Brevo liste #3
                          Rate limit : 5 req/min/IP (in-memory)
                          Honeypot : champ "website" caché
```

**Variables d'env Vercel à configurer :**
```
BREVO_API_KEY=xsmtpsib-...   (⚠️ clé exposée dans chat, à régénérer)
BREVO_LIST_ID=3
```

---

## 9. Analytics en place

| Outil | Ce qu'il mesure | Dashboard |
|---|---|---|
| Vercel Analytics | Page views, visiteurs, pays | vercel.com → project → Analytics |
| Vercel Speed Insights | Core Web Vitals (LCP, CLS, FID) | vercel.com → project → Speed Insights |
| Google Search Console | Indexation, mots-clés, clics SEO | search.google.com/search-console |

---

## 10. État des tâches

### ✅ Fait
- [x] 17 logiciels avec fiches complètes
- [x] 21 comparaisons A vs B
- [x] 20 métiers avec pages complètes
- [x] 80 pages problèmes (20 × 4)
- [x] 80 pages taille entreprise (20 × 4)
- [x] Sitemap dynamique (app/sitemap.ts)
- [x] Lead capture Brevo (liste #3)
- [x] Exit-intent popup centré
- [x] Quiz 7 questions
- [x] ROI Calculator
- [x] Vercel Analytics + Speed Insights
- [x] Design : cards initiales colorées, prix formatés, images métiers fallback
- [x] Mention affilié légale ARPP dans footer global
- [x] Seul bouton CTA = lienAffiliation (site officiel supprimé)

### ❌ Priorité haute
- [ ] **Liens affiliés manquants** — 15 logiciels sur 17 n'ont pas de vrai `lienAffiliation` (ou placeholder) → 0€ de revenu possible sans ça
- [ ] **Sitemap soumis à Google Search Console** — sans ça les 200 pages ne sont pas indexées
- [ ] **Clé Brevo à régénérer** — ancienne clé exposée dans l'historique de chat

### ⚠️ Priorité moyenne
- [ ] Lead magnet PDF "Les 5 erreurs à éviter" — référencé dans exit-intent mais fichier inexistant
- [ ] Nouvelles comparaisons incluant les 10 nouveaux logiciels (henrri, quickbooks, pennylane, etc.)
- [ ] Pages blog/articles pour mots-clés de tête ("logiciel BTP gratuit", etc.)
- [ ] Maillage interne entre pages logiciels ↔ métiers ↔ comparaisons

### 💡 Idées futures
- [ ] Pages taille pour les 10 nouveaux logiciels dans les recommandations
- [ ] Avis utilisateurs réels (formulaire de témoignage)
- [ ] Fil d'Ariane (breadcrumb) pour le SEO
- [ ] Schema.org Product + Review pour rich snippets Google

---

## 11. Conventions de code

**TypeScript :**
- Toujours utiliser les propriétés exactes de `Logiciel` : `pitch` (pas `description`), `pointsForts[].titre` (pas `points_forts`), `tarification.formules[0].prix` (pas `prix_indicatif`)
- `lienAffiliation` est optionnel (`?`) → toujours vérifier avant utilisation

**Commits :**
- Style : `git commit -m "$(cat <<'EOF' ... EOF)"` avec HEREDOC
- Co-author systématique : `Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>`

**Git :**
- Si `git push` rejeté (remote divergé) → `git pull --rebase origin main` puis `git push`

**Imports dans les pages App Router :**
- Pages logiciel : `import { logiciels } from '../../../data/logiciels'`
- Pages métier : `import { metiers } from '../../data/metiers'`
- Pas de `'use client'` sur les `page.tsx` (sont des Server Components) — `'use client'` uniquement sur les `*PageClient.tsx`

---

## 12. Notes importantes

- **`data.site`** = site officiel direct → NE PAS utiliser pour les CTAs (perte de tracking affilié)
- **`data.lienAffiliation`** = lien affilié → TOUJOURS utiliser pour tous les boutons "Essayer", "Tester"
- Le composant `<Analytics />` de `components/analytics.tsx` retourne `null` — Plausible a été supprimé
- Les composants `<TransparencyBanner />` et `<AffiliateDisclosure />` retournent `null` — remplacés par une seule mention dans le footer de `layout.tsx`
- La barre orange en haut de `LogicielPageClient` est `fixed z-[60]` pour passer au-dessus du header `z-50`
