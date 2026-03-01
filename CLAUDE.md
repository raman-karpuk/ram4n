# CLAUDE.md

## Deployment

Auto-deploy is configured via GitHub Actions (`.github/workflows/deploy.yml`).
Push to `main` triggers: `npm ci` → `npm run build` → `wrangler pages deploy dist`.
**Do not deploy manually** — just commit and push.

## i18n

Three languages: EN (default at `/`), RU (`/ru/`), PL (`/pl/`).
Translations live in `src/i18n/*.json`. The `t(locale)` helper from `src/i18n/index.ts` returns the full translation object.

Each language has its own page file (`src/pages/index.astro`, `src/pages/ru/index.astro`, `src/pages/pl/index.astro`). When adding or changing text, update all three JSON files. When adding a new section or component, wire it up in all three page files.

## Animations

The GSAP + Lenis initialization script is **inlined in each page file's `<script>` tag**, not extracted into a shared module. This is because Astro deduplicates identical scripts automatically. If the animation logic diverges between pages, extract it.

Two animation patterns are used:
- `data-animate="fade-up"` — hero entrance animations (runs on page load with optional `data-delay`)
- `data-animate="scroll-fade"` — scroll-triggered fade-in via GSAP ScrollTrigger

## Cloudflare

- **Domain:** ram4n.com (Cloudflare Registrar)
- **Hosting:** Cloudflare Pages (project name: `ram4n`)
- **Zone ID:** `bbbe6afe9abeda19fe3809d4eb2c0ae6`
- **Account ID:** `d5b1c123c561cfb9c212efbc2d8792a4`
- **Email:** `hello@ram4n.com` → forwards to personal Gmail via Cloudflare Email Routing
- **Security headers** are set in `public/_headers` (not via Workers)
- **SSL:** Full (Strict), Always HTTPS, DNSSEC enabled
- **www redirect:** Cloudflare redirect rule (301 www.ram4n.com → ram4n.com)

## Styling

Dark theme with lime accent (`#c8ff00`). CSS variables defined in `src/styles/global.css`.
No Tailwind — vanilla CSS with scoped `<style>` blocks per component.

## Dev

```
npm run dev      # localhost:4321
npm run build    # outputs to dist/
```
