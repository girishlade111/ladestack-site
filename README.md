# Girish Lade — LadeStack™

Personal portfolio, engineering case studies, and digital product studio of **Girish Balaso Lade** — UI/UX designer, full-stack developer, and founder of LadeStack.

Production-style marketing site built with React 19, TypeScript, Vite, and Tailwind CSS v4. Eight project case studies, a services catalogue, a technical journal, and a validated contact flow — all rendered from typed data structures with no CMS dependency.

---

## Table of contents

- [Overview](#overview)
- [Live routes](#live-routes)
- [Feature highlights](#feature-highlights)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Environment variables](#environment-variables)
- [Available scripts](#available-scripts)
- [Content model](#content-model)
- [Architecture notes](#architecture-notes)
- [Motion and accessibility](#motion-and-accessibility)
- [Testing](#testing)
- [Build and deployment](#build-and-deployment)
- [Contributing](#contributing)
- [Contact](#contact)

---

## Overview

The site is a single-page application with client-side routing. Every page shares one app shell: a persistent navbar, a navigation drawer, a custom cursor, a curtain page-reveal transition, and a site footer with Lenis smooth scrolling.

Content is authored in `src/data/portfolioData.ts` as typed constants. Views consume that data through small pure helper functions in `src/lib/portfolio.ts`, which keeps rendering logic thin and makes the content layer testable without a DOM.

Design intent: Swiss-grid discipline, restrained contrast, generous whitespace, and deterministic interface states. Motion is used for orientation, never decoration.

## Live routes

| Route | Page | Purpose |
| --- | --- | --- |
| `/` | `HomePage` | Hero, availability card, selected work, services preview, testimonials |
| `/about` | `AboutPage` | Profile, education, operating tenets, principles, tech stack matrix |
| `/work` | `WorkPage` | Full project index with category filtering |
| `/work/:slug` | `WorkDetailPage` | Case study: challenge, architecture, state execution, interface design, outcomes, adjacent-project navigation |
| `/services` | `ServicesPage` | Six service offerings with accordion detail |
| `/blog` | `BlogPage` | Journal index |
| `/blog/:slug` | `BlogDetailPage` | Article body, reading-time estimate, related articles |
| `/contact` | `ContactPage` | Validated inquiry form with reference-code generation |
| `*` | redirect | Unknown paths resolve to `/` |

## Feature highlights

- **Eight documented case studies** — GB Coder, LS PDF, MD2PDF, Bharat Land Converter, Swift Resume, LS Image Compressor, GameHub, LadeStack Ecosystem Hub. Each carries stack, metrics, challenge, architecture, and outcome sections.
- **Category filtering** — Developer Tools, Document Utilities, Interactive Apps, Regional Tools.
- **Typed content layer** — interfaces for projects, services, testimonials, journal articles, and profile data; the compiler catches malformed content before runtime.
- **Client-side validation** — contact form validates name, email, and message length, then generates a deterministic inquiry reference such as `LS-AAR-12345`.
- **Custom cursor and curtain reveal** — pointer-following cursor plus an animated page transition, both disabled or bypassed when the user prefers reduced motion.
- **Responsive navigation** — desktop navbar plus a drawer for narrow viewports, with theme context shared across the tree.
- **Lenis smooth scroll** — inertial wheel scrolling mounted once at the app shell and destroyed on unmount; skipped entirely when `prefers-reduced-motion: reduce` is set.
- **Static asset fidelity** — the build plugin in `vite.config.ts` copies `src/assets` into `dist/` so root-relative image URLs keep resolving after bundling.

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | React 19 |
| Language | TypeScript (strict, `noEmit` type check) |
| Build tool | Vite 8 |
| Styling | Tailwind CSS v4 via `@tailwindcss/vite`, plus hand-authored CSS in `src/index.css` |
| Routing | `react-router-dom` 7 |
| Animation | `motion`, Lenis |
| Icons | `lucide-react` |
| AI (optional) | `@google/genai` |
| Server (optional) | Express 4 |
| Runtime tooling | Bun lockfile, `tsx`, esbuild |

## Project structure

```
.
├── index.html                  # Shell: meta tags, fonts, #root mount
├── metadata.json               # App name, description, declared capabilities
├── package.json
├── tsconfig.json               # ES2022, bundler resolution, @/* path alias
├── vite.config.ts              # React + Tailwind plugins, asset copy, HMR flags
├── .env.example                # Documented environment keys
└── src
    ├── main.tsx                # React entry point
    ├── index.css               # Design tokens, base styles, utilities
    ├── App.tsx                 # App shell, routing table, scroll manager
    ├── assets/images/          # Portrait, hero backdrop, project imagery
    ├── components/
    │   ├── AvailabilityCard.tsx
    │   ├── CurtainReveal.tsx
    │   ├── CustomCursor.tsx
    │   ├── Footer.tsx
    │   ├── Navbar.tsx
    │   ├── NavigationDrawer.tsx
    │   ├── ResilientImage.tsx   # Fallback-aware image rendering
    │   ├── ServicesAccordion.tsx
    │   ├── SwissGridMarkers.tsx # Grid overlay markers
    │   └── WorkCard.tsx
    ├── context/
    │   └── ThemeContext.tsx     # App-wide theme provider
    ├── data/
    │   └── portfolioData.ts     # Single source of truth for all content
    ├── lib/
    │   ├── contactValidation.ts # Form validation + reference generation
    │   ├── portfolio.ts         # Pure query helpers
    │   └── portfolio.test.ts    # node:test suite
    └── pages/
        ├── HomePage.tsx
        ├── AboutPage.tsx
        ├── WorkPage.tsx
        ├── WorkDetailPage.tsx
        ├── ServicesPage.tsx
        ├── BlogPage.tsx
        ├── BlogDetailPage.tsx
        └── ContactPage.tsx
```

## Getting started

**Prerequisites:** Node.js 20 or newer (or Bun 1.1+).

```bash
# 1. Install dependencies
npm install

# 2. Create your local environment file
cp .env.example .env.local

# 3. Start the dev server on http://localhost:3000
npm run dev
```

The dev server binds to `0.0.0.0:3000` so the site is reachable from other devices on your network.

## Environment variables

All keys are optional for the marketing site itself. They are required only if you wire up the Gemini-backed features.

| Variable | Required | Description |
| --- | --- | --- |
| `GEMINI_API_KEY` | No | API key for Google Gemini calls made through `@google/genai` |
| `APP_URL` | No | Public base URL of the deployment; used for self-referential links and callbacks |
| `DISABLE_HMR` | No | Set to `true` to disable Vite HMR and file watching (used in hosted editing environments) |

`.env.local` is git-ignored. `.env.example` is committed and documents the expected keys.

## Available scripts

| Script | Command | Purpose |
| --- | --- | --- |
| `dev` | `vite --port=3000 --host=0.0.0.0` | Dev server with HMR |
| `build` | `vite build` | Production bundle into `dist/` |
| `preview` | `vite preview` | Serve the built bundle locally |
| `lint` | `tsc --noEmit` | Type check only, no output files |
| `clean` | `rm -rf dist server.js` | Remove build artefacts |

## Content model

`src/data/portfolioData.ts` exports the typed constants that drive every page.

- **`PROFILE`** — name, brand, role, location, email, availability, philosophy, socials, education.
- **`PROJECTS`** — `ProjectCaseStudy[]`, eight entries. Fields include `slug`, `index`, `title`, `tagline`, `category`, `year`, `liveUrl`, `repoUrl`, `image`, `rotateDeg`, `featured`, `stack`, `metrics`, `challenge`, `architecture`, `stateExecution`, `interfaceDesign`, `outcomes`.
- **`SERVICES`** — `ServiceOffering[]`: web application engineering, UI/UX and design systems, in-browser DevTools, local-first utilities, AI workflows and agents, technical SEO and i18n.
- **`TESTIMONIALS`** — quotes with name and role.
- **`JOURNAL_ARTICLES`** — `JournalArticle[]` with optional code snippet and heading/paragraph sections.
- **`ABOUT_TENETS`**, **`ABOUT_PRINCIPLES`**, **`TECH_STACK_MATRIX`**, **`QUANTIFIED_HIGHLIGHTS`** — supporting copy for the About page.
- **`IMAGES`** — centralised asset paths.

Helper functions in `src/lib/portfolio.ts` stay framework-free on purpose:

```ts
filterProjectsByCategory(projects, category)
getProjectBySlug(projects, slug)
getAdjacentProjects(projects, slug)      // wraps around list boundaries
getArticleBySlug(articles, slug)
getRelatedArticles(articles, slug, limit)
estimateReadingTimeMinutes(sections)     // 180 words per minute, minimum 1
formatEditionIndex(index)                // zero-pads single digits
```

To add a project or article, append an object to the relevant array. Routes, cards, filters, and detail pages pick it up automatically.

## Architecture notes

- **One shell, many routes.** `App.tsx` owns the provider, router, scroll manager, and global chrome. Pages stay presentational.
- **Scroll reset and smooth scroll are separate concerns.** A pathname effect resets scroll position on navigation; a mount effect creates the Lenis instance and tears it down on unmount.
- **Reduced motion is a first-class branch.** The Lenis loop returns early when `prefers-reduced-motion: reduce` matches, so no animation frame loop is scheduled.
- **Assets survive the bundle.** `vite.config.ts` registers `copy-unbundled-src-assets`, a build-only plugin that copies `src/assets` into `dist/src/assets` after `closeBundle`. Do not remove it — root-relative image paths depend on it.
- **Alias hygiene.** `@/*` resolves to the project root in both `tsconfig.json` and Vite, so imports stay stable when files move.
- **Content is data, not JSX.** Marketing copy lives in TypeScript constants. No CMS, no fetch layer, no loading states on content pages.

## Motion and accessibility

- All decorative motion — curtain reveal, custom cursor, smooth scroll — checks `prefers-reduced-motion` before running.
- Interactive elements are reachable by keyboard; the drawer traps focus while open.
- `ResilientImage` degrades gracefully when an asset fails to load instead of leaving a broken frame.
- Semantic landmarks (`header`, `nav`, `main`, `footer`) wrap the shell so screen readers can skip chrome.
- Type scale, spacing, and contrast are defined once in `src/index.css` and reused, so a fix propagates rather than being repeated per page.

## Testing

The suite uses the built-in `node:test` runner and `node:assert/strict`. It covers the content layer and helpers, not React rendering:

```bash
npx tsx --test src/lib/portfolio.test.ts
```

Covered behaviour:

- Category filtering returns all eight projects for `All` and correct subsets per category.
- Slug lookup and adjacent-project navigation wrap around list boundaries.
- Article lookup, related-article exclusion, and reading-time estimation.
- Edition index zero-padding.
- Contact validation rejects empty and malformed input, accepts valid input, and generates `LS-XXX-NNNNN` references.

## Build and deployment

```bash
npm run build     # emits dist/
npm run preview   # sanity-check the production bundle
```

`dist/` is a static bundle. Deploy it to any static host — Cloudflare Pages, Netlify, Vercel, GitHub Pages, or an Nginx box. Because routing is client-side, configure a catch-all rewrite to `index.html` so deep links such as `/work/gb-coder` resolve on refresh.

`dist/`, `build/`, `coverage/`, `node_modules/`, log files, and local env files are excluded from version control.

## Contributing

1. Branch from `main`.
2. Keep content changes in `src/data/portfolioData.ts` and logic changes in `src/lib/`.
3. Run `npm run lint` and the test command above before opening a pull request.
4. Describe the user-visible change, not the file diff.

## Contact

- Email: [admin@ladestack.in](mailto:admin@ladestack.in)
- GitHub: [@girishlade111](https://github.com/girishlade111)
- LinkedIn: [girish-lade](https://www.linkedin.com/in/girish-lade/)
- Location: Pune, Maharashtra, India

---

© Girish Balaso Lade — LadeStack™. All rights reserved. Brand names, case studies, and imagery are proprietary.
