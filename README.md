# Outil complet du pasteur — Tunnel de vente

Landing page de vente (Next.js 14, App Router, export statique, TypeScript,
Tailwind CSS) pour le produit numérique **Outil complet du pasteur**.

## Démarrage

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Build de production (export statique)

```bash
npm run build
```

Le site statique est généré dans le dossier `out/`, déployable tel quel sur
Vercel, Netlify ou Cloudflare Pages.

- **Vercel** : détecte Next.js automatiquement (`next build`).
- **Netlify** : build command `npm run build`, publish directory `out`.
- **Cloudflare Pages** : build command `npm run build`, output directory `out`.

## Configuration centrale

Toute la logique produit (nom, textes, catégories, contact, lien de
checkout) est centralisée dans :

```
src/config/product.ts
```

### Lien de checkout Chariow

```ts
export const CHARIOW_CHECKOUT_URL =
  'https://livresenligne.mychariow.shop/prd_m8my5w90/checkout';
```

Tous les boutons d'achat du site utilisent exclusivement cette variable, via
le composant `src/components/CheckoutButton.tsx`. Pour changer l'URL de
checkout, il suffit de modifier cette seule valeur.

## Images

- `public/images/product/` — affiche / mockup principal du pack (voir le
  README de ce dossier).
- `public/images/social-proof/` — les 5 captures WhatsApp de preuve sociale
  (voir le README de ce dossier, notamment les consignes de floutage).

Tant qu'une image n'est pas fournie, un emplacement clairement identifié
s'affiche à sa place plutôt qu'un visuel inventé.

## Suivi des clics d'achat

Chaque clic sur un bouton d'achat déclenche un événement `checkout_click`
(`src/lib/analytics.ts`), consultable dans la console ou branchable sur
Google Tag Manager / `dataLayer`. Si un Meta Pixel (`fbq`) est chargé sur la
page, l'événement `InitiateCheckout` lui est automatiquement transmis —
aucune configuration supplémentaire n'est nécessaire pour préparer une
future intégration Meta Pixel / Meta Conversion API.

## Structure

```
src/
  app/            layout.tsx (SEO, polices, viewport), page.tsx (ordre des sections)
  components/     une section = un composant (Hero, Problem, Solution, ...)
  config/         product.ts — configuration centrale
  lib/            analytics.ts, images.ts
public/
  images/product/       affiche principale
  images/social-proof/  captures WhatsApp
```
