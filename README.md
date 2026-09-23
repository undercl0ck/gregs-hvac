# Greg's HVAC — static demo site

Live site: **https://undercl0ck.github.io/gregs-hvac/**

A production-ready static marketing site + mock customer portal for Greg's
HVAC, built as a Vite + React single-page app and deployed to GitHub Pages.

This is a **static demo fork** of the `apps/gregs-hvac/` app in the
`tech-demos-bot` monorepo. The original runs on `Bun.serve`; GitHub Pages only
serves static files, so this port replaces the server with a client-side SPA
(HashRouter) and mock authentication backed by `localStorage`. Design tokens,
copy, and UX follow the monorepo app's locked brand.

## Pages

| Route (hash) | Page |
| --- | --- |
| `#/` | Home |
| `#/services` | Services |
| `#/about` | About |
| `#/contact` | Contact / request service |
| `#/login` | Customer login (mock) |
| `#/account` | Customer dashboard (requires mock login) |

## Demo login

Credentials are intentionally **not** shown anywhere in the UI. To sign in to
the mock customer portal:

- **Email:** `customer@demo.gregshvac.com`
- **Password:** `comfort-2026`

Auth is entirely client-side (`localStorage`); there is no backend and no real
customer data. "Sign out" on the Account page clears the session.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173/gregs-hvac/
```

Production build and preview:

```bash
npm run build
npm run preview  # serves dist/ at /gregs-hvac/
```

## Deployment (GitHub Pages)

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the
site (`vite build` with `base: '/gregs-hvac/'`) and deploys the `dist/` folder
via `actions/deploy-pages` to the `github-pages` environment.

**First-time setup:** if the first workflow run fails on the deploy step, Pages
may need to be enabled once in the repo UI:

1. Go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Re-run the failed workflow (or push again). The site publishes to
   `https://undercl0ck.github.io/gregs-hvac/`.

## Brand tokens (locked)

```css
--color-bg: #F6F4F1;
--color-surface: #FFFFFF;
--color-ink: #142028;
--color-ink-muted: #5A6A74;
--color-primary: #1E3A4C;
--color-accent: #C17A3A; /* icons/rules only — never body text or filled-button labels */
--color-border: color-mix(in srgb, #142028 18%, transparent);
```

Type is IBM Plex Sans; spacing and radii follow a φ (golden-ratio) scale. The
logo is a steel circle with three chevrons (bottom one copper) plus the
"Greg's HVAC" wordmark.
