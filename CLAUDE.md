# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Dev server with Turbopack
npm run build        # Production build with Turbopack
npm run start        # Serve production build
npm run lint         # ESLint (flat config, next/core-web-vitals + next/typescript)
```

No test runner is configured.

## Architecture

**Stack:** Next.js 15 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS v4 · shadcn/ui (new-york style)

**Icons:** `phosphor-react` is the primary icon library (not lucide, despite shadcn config).

**Animations:** Framer Motion v12. `AnimatedSection` component wraps sections with scroll-triggered animations, respects `prefers-reduced-motion`, reduces intensity on mobile.

**Data layer — two tiers:**
- Static data: TypeScript files in `src/lib/data/` (services, company, news, team, clients, testimonials). All content is bilingual (EN fields + `*Ru` fields).
- Dynamic API: Custom `ApiClient` in `src/lib/api/client.ts` with separate `apiClient` (browser) and `serverApiClient` (SSR) instances. Base URL from `NEXT_PUBLIC_API_URL`. API services in `src/lib/api/services/`. Custom hooks in `src/lib/api/hooks.ts` (not React Query/SWR).

**Routing patterns:**
- Dynamic routes (`/services/[slug]`, `/news/[slug]`) use `generateStaticParams()` for SSG
- News pages use ISR with `{ next: { revalidate: 60 } }`
- Most pages are client components; server components used only for data-fetching pages

**Forms:** `react-hook-form` + `zod` validation. Survey system in `src/lib/services/survey/` with conditional fields, localStorage persistence.

**Maps:** Leaflet + `react-leaflet` + `leaflet-draw`

**Analytics:** Google Analytics 4 via custom `src/lib/analytics/gtag.ts` utilities. Fallback measurement ID hardcoded.

## Design System — Bold Wikipedia Theme

The project uses the **"Bold Wikipedia"** theme from [tweakcn.com](https://tweakcn.com/themes/cmlmpb3qp000004l5go47hzsv). This theme defines the entire visual language of the site.

### Theme Philosophy
- **Geometric, flat, minimal** — inspired by Wikipedia's information-first approach
- **Sharp corners** — `--radius: 0.125rem` (almost square), no soft rounded corners
- **No gradients** — all colors are flat, solid fills using semantic tokens
- **Subtle shadows** — very light, formalized through CSS variables
- **Information hierarchy through color and spacing**, not decoration

### Color System (CSS Variables in `src/app/tailwind.css`)

All colors are defined as CSS custom properties with `hsl()` values.

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--primary` | `hsl(214 85% 45%)` (blue) | `hsl(212 100% 75%)` (light blue) | Buttons, links, active states, headings |
| `--primary-foreground` | white | `hsl(212 100% 10%)` (dark) | Text on primary background |
| `--background` | white | `hsl(0 0% 12%)` (near-black) | Page background |
| `--foreground` | `hsl(0 0% 15%)` (dark) | `hsl(0 0% 92%)` (light) | Body text |
| `--card` | white | `hsl(0 0% 15%)` | Card backgrounds |
| `--accent` | `hsl(214 85% 96%)` (light blue tint) | `hsl(212 100% 20%)` (dark blue) | Icon backgrounds, subtle highlights |
| `--muted` | `hsl(0 0% 96%)` | `hsl(0 0% 18%)` | Muted backgrounds |
| `--border` | `hsl(0 0% 82%)` | `hsl(0 0% 25%)` | Borders |

**IMPORTANT rules:**
- NEVER use `energy-*`, `oil-*`, `gradient-text`, `energy-gradient`, `oil-gradient`, `glass-effect`, or `card-hover` classes — they have been removed
- ALWAYS use semantic tokens: `primary`, `accent`, `muted`, `foreground`, `border`, etc.
- For icon containers: use `bg-accent dark:bg-accent` with `text-primary` icons
- For text that was previously gradient: use `text-primary`
- For CTA buttons: use `bg-primary text-primary-foreground hover:bg-primary/90`
- Headings use `text-primary` (not gradient-text)

### Typography
- **Body font:** Inter via `next/font/google` (`--font-sans`)
- **Serif font:** Georgia via CSS variable (`--font-serif`) — not loaded via next/font
- **No display font** — Poppins has been removed
- **Letter-spacing:** `0.0125em` (`--tracking-normal`)
- Only `font-sans` class is used on `<body>`

### Shadows
Minimal, formalized through CSS variables:
- Light mode: `0.05` opacity, `4px` blur
- Dark mode: `0.15` opacity, `6px` blur
- Variables: `--shadow-2xs` through `--shadow-2xl`

### Key Styling Patterns

**Cards:** `rounded-sm` (not rounded-xl), minimal shadow, `bg-card` background

**Buttons:** Flat colors, sharp corners. Primary = `bg-primary text-primary-foreground`. No gradient backgrounds.

**Section headings:** `text-primary` for emphasis. No gradient text.

**Icon containers:** `bg-accent dark:bg-accent rounded-sm` with `text-primary` icons

**Page banners:** Use `<PageBanner>` component (`src/components/layout/PageBanner.tsx`):
- Light mode: `bg-secondary` background with `text-foreground` heading
- Dark mode: dark `bg-[hsl(0,0%,10%)]` background with white text
- Supports `title`, `subtitle`, `icon`, `badge`, `children` props
- Includes subtle grid pattern and primary accent line at bottom

**Hero section (homepage):** Has video background — text is always white (`text-white`, `text-white/90`) regardless of theme. Buttons use `bg-white text-black` and `border-white text-white` for contrast.

**Logo:** Uses `dark:brightness-0 dark:invert` CSS filter to invert dark logo to white in dark mode.

### Dark Mode
- Default theme is **dark**, managed by `next-themes` with `attribute="class"` strategy
- `@custom-variant dark (&:is(.dark *))` in tailwind.css
- Both light and dark modes are fully supported
- CSS variables are redefined under `.dark { }` selector in tailwind.css

## Key Directories

- `src/app/` — App Router pages and layouts
- `src/components/` — Feature-grouped components (analytics, animations, layout, map, survey, team, ui)
- `src/components/ui/` — shadcn/ui primitives
- `src/components/layout/` — Header, Footer, PageBanner
- `src/lib/api/` — API client, services, hooks (has its own README.md)
- `src/lib/data/` — Static bilingual content
- `src/lib/services/survey/` — Survey engine (has its own README.md)
- `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)

## Build & Deploy

- Path alias: `@/*` → `src/*`
- Two Next.js configs exist: `next.config.ts` (active, full features) and `next.config.js` (legacy static export). `.ts` takes precedence.
- Husky pre-commit runs `npm run build` and stages `out/` — the static export is committed to the repo as a deployment artifact.
- `typescript.ignoreBuildErrors: false` and `eslint.ignoreDuringBuilds: false` — both strictly enforced in build.
- `compiler.removeConsole` strips console logs in production.
- Image optimization configured with WebP/AVIF formats and remote patterns for map tile services.
