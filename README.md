# Lylia Portfolio — Hero Section

Production-ready React 19 + TypeScript + Vite implementation.

## Stack
- **React 19** + **TypeScript**
- **Vite 5** (build tool)
- **TailwindCSS 3** (utility-first styling)
- **Framer Motion 11** (animations)
- **clsx** (conditional classNames)

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build
```

## Adding Your Portrait

Open `src/components/sections/Hero/Hero.tsx` and set:

```ts
const PHOTO_SRC: string | undefined = '/lylia.jpg'
```

Place `lylia.jpg` in the `public/` folder. The photo container
will automatically use `object-fit: cover` centred on the top
of the image (ideal for portraits).

## Folder Structure

```
src/
├── components/
│   └── sections/
│       └── Hero/
│           ├── Hero.tsx               ← Section orchestrator
│           ├── HeroLeft.tsx           ← Left 60% storytelling
│           ├── HeroRight.tsx          ← Right 40% photo area
│           ├── RoleRotator.tsx        ← Animated role transitions
│           ├── MagneticButton.tsx     ← CTA with magnetic hover
│           ├── PhotoFrame.tsx         ← Layered portrait frame
│           ├── IdentityBadge.tsx      ← Floating identity badges
│           ├── FloatingMissionCard.tsx← Mission card
│           ├── ParticleCanvas.tsx     ← Lightweight particles
│           └── index.ts               ← Barrel export
├── animations/
│   ├── variants.ts                    ← Framer Motion variants
│   └── springs.ts                     ← Spring configs
├── hooks/
│   ├── useMagneticEffect.ts
│   ├── useMouseParallax.ts
│   └── useCursorGlow.ts
├── types/
│   └── hero.types.ts                  ← All TypeScript interfaces
├── constants/
│   └── hero.constants.ts              ← All copy and data
├── styles/
│   └── globals.css
├── App.tsx
└── main.tsx
```

## Customisation

All copy, roles, stats, and badges live in:
```
src/constants/hero.constants.ts
```

Change nothing else — the components consume the constants automatically.

## Color System

| Token | Value | Usage |
|-------|-------|-------|
| Navy `#1A2E4A` | Primary dark | Buttons, text, navy badge |
| Blue `#3B82F6` | Accent blue | Role label, headline word, AI badge |
| Yellow `#F5C842` | Signature yellow | Pip, CTA button, stat suffix, telecom badge |
| Yellow Dark `#B8941F` | Yellow text | Headline accent word, stat suffix text |
| Muted `#64748B` | Secondary text | Subheadline, labels |
| Ink `#0F172A` | Primary text | Headline, name |
