# BTP-Compare — Documentation projet pour Claude

> Fichier de référence à lire en priorité à chaque session.
> Mis à jour : juin 2026 (session 2)

---

## 1. Présentation du projet

**Objectif :** Site affilié comparateur de logiciels BTP. Revenus via liens affiliés (Obat, Axonaut, Abby, Tiime, Pennylane, Indy, Shine, Keobiz...) en rankant sur Google pour "meilleur logiciel BTP [métier]", "logiciel devis [métier]", etc.

**URL prod :** https://btp-compare.fr
**Repo GitHub :** https://github.com/Crantemax/btp-compare
**Déploiement :** Vercel (auto-deploy sur push main)

**Stack :**
- Next.js 14.2 (App Router, SSG)
- TypeScript 5 strict
- Tailwind CSS 3.4
- Framer Motion 11
- Brevo (capture leads uniquement — liste #3, pas d'envoi email)
- Vercel Analytics + Speed Insights
- Impact.com (réseau affilié — site vérifié avec meta tag `content`)
- Affilae (réseau affilié FR — profil créé)

---

## 2. Structure des routes

```
/                               → Homepage (page.tsx)
/logiciels/[slug]               → Fiche logiciel (17 logiciels)
/comparer/[slugs]               → Comparaison A-vs-B (21 comparaisons)
/[metier]                       → Page métier (20 métiers)
/[metier]/[probleme]            → Page problème (20 × 4 = 80 pages)
/[metier]/taille/[taille]       → Page taille entreprise (20 × 4 = 80 pages)
/legal/[slug]                   → Pages légales
```

**⚠️ Conflit de routes résolu :** `/[metier]/[probleme]` et `/[metier]/taille/[taille]` coexistent grâce au préfixe statique `/taille/`.

---

## 3. Données — fichiers clés

### `data/logiciels.ts`
**17 logiciels** dans `logiciels: Logiciel[]` :
```
obat, axonaut, tolteck, progbat, batigest, ebp, sellsy,
henrri, sage-100-btp, quickbooks, tiime, holded, freebe,
zoho-invoice, facture-net, abby, pennylane
```

**Interface TypeScript critique :**
```typescript
interface Logiciel {
  slug: string
  nom: string
  logo: string          // emoji couleur : 🟢🔵🟠🟣🔴🟡🔷🟤
  lienAffiliation?: string  // OPTIONNEL — toujours vérifier avant usage
  site: string          // site officiel direct — NE PAS utiliser pour CTA
  pitch: string         // ← PAS description
  idealPour: string
  pointsForts: { titre: string; description: string; source: string; icone: string }[]
  pointsFaibles: { titre: string; description: string; source: string; icone: string }[]
  tarification: {
    formules: { nom: string; prix: string; idealPour: string; fonctionnalites: string[] }[]
    // prix = texte long → toujours utiliser formatPrix() pour afficher
  }
  sources: { trustpilot?: SourceAvis; g2?: SourceAvis }
}
```

**Liens affiliés configurés :**
- Obat : `https://obat.com/?ref=btp_compare` ✅
- Axonaut : `https://axonaut.com/?a=ADE1CH12F6` ✅
- Abby, Tiime, Pennylane, Indy, Shine, Keobiz → **à récupérer sur Affilae/Impact et mettre à jour**
- Autres : `lienAffiliation` absent → 0€ de revenu

### `data/metiers.ts`
**20 métiers** dans `metiers: Metier[]` :
```
plombier, electricien, macon, couvreur, menuisier, carreleur,
peintre, chauffagiste, serrurier, plaquiste, vitrier, etancheur,
charpentier, zingueur, terrassier, paysagiste, pisciniste,
alarmiste, ascensoriste, facadier
```

**⚠️ Import :** `import { metiers } from '../../data/metiers'` — ce fichier exporte aussi un objet `logiciels` legacy (obat/axonaut hardcodés) utilisé uniquement dans `comparison-table.tsx`. Ne pas confondre avec le tableau principal `logiciels` de `data/logiciels.ts`.

### `data/comparaisons.ts`
**21 comparaisons** entre les 7 logiciels historiques (obat, axonaut, tolteck, progbat, batigest, ebp, sellsy).

---

## 4. Helpers visuels — copier dans chaque nouveau composant

```typescript
// Prix court pour badges : "À partir de 89€/mois (à vérifier...)" → "Dès 89€/mois"
function formatPrix(prix: string): string {
  if (!prix) return '—';
  if (prix.startsWith('0€')) return 'Gratuit';
  if (prix.toLowerCase().includes('sur devis')) return 'Sur devis';
  const m = prix.match(/(\d+€(?:\/[a-zA-Zé]+(?:\/[a-zA-Zé]+)*)?)/);
  return m ? `Dès ${m[1]}` : prix.split('(')[0].replace(/^À partir de\s*/i, 'Dès ').trim();
}

// Initiales (2 chars) : "Sage 100 BTP" → "SB", "Obat" → "OB"
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
function getLogoStyle(logo: string) {
  return LOGO_STYLES[logo] ?? { bg: 'bg-primary/15', text: 'text-primary' };
}
```

---

## 5. Design system

**Couleurs CSS (`--primary: 22 85% 48%` = orange BTP)**

**Classes custom (globals.css) :**
```
.hover-lift        .glass-subtle      .gradient-subtle
.gradient-mesh     .transition-smooth .card-base
.heading-editorial
```

**Patterns récurrents :**
```tsx
// Card logiciel
<div className="rounded-xl border border-border overflow-hidden bg-card hover-lift hover:border-primary/40">
  <div className="h-1 bg-gradient-to-r from-primary to-amber-400" />
  <div className="p-5">
    <div className={`w-12 h-12 rounded-xl ${style.bg} flex items-center justify-center`}>
      <span className={`text-base font-bold ${style.text}`}>{initials}</span>
    </div>
    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">
      {formatPrix(prix)}
    </span>
  </div>
</div>

// CTA principal
<a href={lienAffiliation} className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 shadow-lg shadow-primary/25">

// CTA final section
<section className="bg-primary rounded-2xl p-12 text-white relative overflow-hidden">
  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
```

---

## 6. Pages métier (`/[metier]`) — structure actuelle

**Sections dans l'ordre :**
1. Hero : image pleine + gradient overlay + breadcrumb + stats pills
2. Navigation taille : 4 boutons colorés → `/[metier]/taille/[taille]`
3. Intro + Quotidien (2 colonnes)
4. Verdict Top 3 : Obat / Axonaut / Tolteck (depuis `data/logiciels.ts`)
5. Problématiques : 4 cards emoji → `/[metier]/[probleme]`
6. Comparatif table (`ComparisonTable` component)
7. Critères essentiels
8. Avis vérifiés
9. Erreurs à éviter
10. ROI Calculator
11. FAQ accordion
12. CTA orange → Quiz

**Top 3 hardcodés :** `['obat', 'axonaut', 'tolteck']` avec labels `['Pour artisans seuls', 'Pour équipes', 'Alternative BTP']`

---

## 7. Composant `ComparisonTable`

Fichier : `components/comparison-table.tsx`
- Importe `logiciels` depuis `data/metiers` (objet legacy avec obat/axonaut)
- `NoteDisplay` : 5 cercles colorés (w-3 h-3) + label texte (Absent/Faible/Moyen/Correct/Bon/Excellent)
- Scores globaux pondérés (essentiel ×3, important ×2, confort ×1)
- Slider taille équipe avec calcul prix dynamique

---

## 8. Sitemap (`app/sitemap.ts`)

BASE_URL = `https://btp-compare.fr` (sans www — correspond à la propriété Search Console)
**~220 URLs** : home + 20 métiers + 80 problèmes + 80 tailles + 17 logiciels + 21 comparaisons

**⚠️ Slug zingueur :** `gouttieres` (sans accent) dans le sitemap

---

## 9. Analytics & SEO

| Outil | Dashboard |
|---|---|
| Vercel Analytics | vercel.com → Analytics |
| Vercel Speed Insights | vercel.com → Speed Insights |
| Google Search Console | Sitemap soumis : `https://btp-compare.fr/sitemap.xml` |
| Impact.com | Site vérifié (meta `impact-site-verification` avec `content=`) |
| Affilae | Profil créé, catégories SaaS BTP |

---

## 10. État des tâches

### ✅ Fait
- [x] 17 logiciels, 20 métiers, 21 comparaisons, 80 pages problèmes, 80 pages taille
- [x] Sitemap 220 URLs soumis à Google Search Console
- [x] Lead capture Brevo (liste #3) + exit-intent + quiz + ROI calculator
- [x] Vercel Analytics + Speed Insights
- [x] Impact.com vérifié + Affilae profil créé
- [x] Pages métier refaites : hero image pleine, Top 3 logiciels, 4 problématiques, 4 tailles
- [x] Cards logiciels : initiales colorées, formatPrix, barre orange
- [x] NoteDisplay : cercles visibles + labels (Faible/Moyen/Correct/Bon)
- [x] Images métiers : 6 photos corrigées (électricien, carreleur, plaquiste, étancheur, zingueur, ascensoriste)
- [x] Mention affilié ARPP dans footer global
- [x] CLAUDE.md documentation complète

### ❌ Priorité haute — bloquant pour les revenus
- [ ] **Liens affiliés** — récupérer sur Affilae/Impact : Abby, Tiime, Pennylane, Indy, Shine, Keobiz, Tolteck, Progbat, EBP, Sellsy → mettre dans `data/logiciels.ts`
- [ ] **Clé Brevo à régénérer** — ancienne clé exposée dans historique de chat

### ⚠️ Priorité moyenne
- [ ] Lead magnet PDF "Les 5 erreurs à éviter" — référencé dans exit-intent, fichier inexistant
- [ ] Nouvelles comparaisons avec les 10 nouveaux logiciels
- [ ] Breadcrumb SEO sur toutes les pages

### 💡 Idées futures
- [ ] Pages blog pour mots-clés tête ("logiciel BTP gratuit", "logiciel devis artisan")
- [ ] Avis utilisateurs réels (formulaire)
- [ ] Schema.org Product + Review pour rich snippets Google

---

## 11. Conventions de code

```typescript
// Toujours — propriétés exactes Logiciel
logiciel.pitch           // ← PAS .description
logiciel.pointsForts[0].titre  // ← PAS .points_forts
logiciel.tarification.formules[0].prix  // ← PAS .prix_indicatif
logiciel.lienAffiliation  // vérifier undefined avant usage

// Commits
git commit -m "$(cat <<'EOF'\n...\nCo-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>\nEOF\n)"

// Si push rejeté
git pull --rebase origin main && git push origin main

// 'use client' uniquement sur *PageClient.tsx, pas sur page.tsx
```

---

## 12. Pièges connus

- `data.site` ≠ `data.lienAffiliation` — utiliser UNIQUEMENT `lienAffiliation` pour les CTAs
- `logiciels` exporté depuis `data/metiers.ts` = objet legacy `{obat, axonaut}` ≠ tableau `logiciels[]` de `data/logiciels.ts`
- Barre orange dans LogicielPageClient = `fixed z-[60]` (au-dessus du header `z-50`)
- `<Analytics />`, `<TransparencyBanner />`, `<AffiliateDisclosure />` retournent `null` — ne pas s'étonner
- Meta tag Impact.com : attribut `content=` (pas `value=` — TypeScript rejette `value`)
