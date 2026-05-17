# Kavárna Svěží — Web

Prémiový web pro pražskou kavárnu Svěží. Next.js 16, TypeScript, Tailwind CSS, Framer Motion.

## Stack

- **Framework**: Next.js 16 (App Router)
- **Jazyk**: TypeScript
- **Styling**: Tailwind CSS + CSS custom properties
- **Animace**: Framer Motion + Lenis (smooth scroll)
- **Fonty**: Fraunces (serif headlines) · Inter (body) · Caveat (handwritten)
- **Obrázky**: next/image + Unsplash (placeholder — nahradit reálnými fotkami)
- **Deploy**: Vercel

## Spuštění

```bash
npm install
npm run dev
```

Otevři [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Struktura

```
/app
  /page.tsx           ← homepage
  /nabidka/page.tsx   ← menu
  /pribeh/page.tsx    ← příběh
  /kontakt/page.tsx   ← kontakt + formulář
  /gdpr/page.tsx
  /sitemap.ts
  /robots.ts
  /not-found.tsx
/components
  /sections           ← Hero, Intro, MenuSection, USP, Gallery, Reviews, Location, CTA
  /ui                 ← NavBar, Footer, Button, Badge, LoadingScreen, CookieBanner, ScrollProgress
  /animations         ← TextReveal, FadeIn, ParallaxImage, MagneticButton
  /providers          ← SmoothScrollProvider (Lenis)
/lib
  /data               ← menu.ts, reviews.ts, nav.ts
  /utils.ts
```

## Před spuštěním v produkci

1. Nahraď Unsplash obrázky reálnými fotkami kavárny (ulož do `/public/images`)
2. Aktualizuj adresu, telefon, email v `/lib/data/nav.ts`
3. Nastav `siteUrl` v `/app/layout.tsx` na skutečnou doménu
4. Přidej `og-image.jpg` (1200×630 px) do `/public/`
5. Zapoj Google Analytics / Tag Manager
6. Aktivuj Google Maps Embed API pro mapu

## Deploy na Vercel

```bash
npx vercel
```

Nebo propoj GitHub repozitář přímo v [vercel.com](https://vercel.com).
