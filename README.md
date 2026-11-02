# Sofy. · Mostafa Sofy personal website

A static, bilingual (English + Arabic RTL) executive site built with **Astro 7 + Tailwind CSS 4** and deployed on **Netlify**.

- `/` home: Hero, About, Expertise, AI in Growth, Operating Stack, Career, Selected Clients, Regional, Results, Case Studies, Strategic Sessions (3-step intake form), FAQ, Contact
- `/case-studies`: all 18 case studies, filterable by market, discipline and industry (filters sync to the URL, e.g. `?market=ksa&discipline=influencer`)
- `/case-studies/[slug]`: one page per case study
- `/ar`, `/ar/case-studies`, `/ar/case-studies/[slug]`: full Arabic version, RTL, IBM Plex Sans Arabic
- `/thank-you` and `/ar/thank-you`: form fallback pages (noindex)

Copy and data come from `site-content.md`. Items that still need your sign-off are listed in **[CONFIRM.md](./CONFIRM.md)**.

---

## Deploy to Netlify

### Option A: connect the Git repo (recommended)

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import an existing project → GitHub**, then pick this repository and branch.
3. Netlify reads `netlify.toml`, so the build settings fill themselves in:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 22 (pinned in `netlify.toml` and `.nvmrc`)
4. Click **Deploy**. Every push to the branch redeploys.

### Option B: Netlify CLI

```bash
npm install
```

```bash
npx netlify-cli login
```

```bash
npx netlify-cli deploy --build --prod
```

### After the first deploy

1. **Enable form detection.** Netlify UI → **Site configuration → Forms → Enable form detection**, then trigger one more deploy (**Deploys → Trigger deploy**). Netlify only picks up forms on deploys made after detection is on.
2. **Form notifications.** **Forms → Form notifications → Add notification → Email notification**. Send submissions of the `strategic-session` form to `mostafa.ali.sofy@gmail.com`. Both language versions submit to the same form, and a hidden `language` field tells you which one was used. Answers to the multiple-choice questions are always stored in English.
3. **Custom domain** (optional). **Domain management → Add a domain**. Then add an environment variable `SITE_URL` = `https://your-domain.com` (**Site configuration → Environment variables**) and redeploy, so canonical URLs, hreflang, Open Graph, the sitemap and robots.txt all use the custom domain. Without it, the site uses Netlify's own URL automatically.
4. **Submit the sitemap** in Google Search Console: `https://your-domain.com/sitemap-index.xml`.

---

## Assets

| File | Used for |
|---|---|
| `public/assets/mostafa-hero-1200-LEdzBiIY.jpg` | Hero portrait (studio headshot) |
| `public/assets/mostafa-portrait-800-BwauKAu6.jpg` | About section portrait (Riyadh at night) |
| `public/og-cover.jpg` (1200×630) | Social share image (WhatsApp, LinkedIn, X) |
| `public/Sofy-Executive-Profile.pdf` | "Download PDF" link in Contact and the footer |

To swap a photo, overwrite the file with the same name and rebuild. You don't need to resize anything. Each build runs `scripts/optimize-images.mjs`, which turns the two portraits into responsive WebP and JPEG variants (4:5 crop, focused on the subject) in `public/img/`. That folder is generated and git-ignored.

---

## Local development

Requires Node 22.23.4 or newer.

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build && npm run preview
```

`npm run build` does three things: it optimizes images, builds the static site into `dist/`, then runs a copy check that **fails the build** if any page contains an em dash, "TO CONFIRM" or "[CONFIRM]".

## Editing content

| What | Where |
|---|---|
| All English copy | `src/data/content.en.ts` |
| All Arabic copy | `src/data/content.ar.ts` (same structure as English) |
| 18 case studies (both languages, metrics, filter tags, slugs) | `src/data/cases.ts` |
| Home page featured case studies | `FEATURED` in `src/data/cases.ts` |
| Contact details, WhatsApp, LinkedIn, PDF path | `src/data/site.ts` |
| Colors, type, spacing tokens | `src/styles/global.css` (`@theme`) |

## What's built in

- **SEO:** per-page titles and descriptions, canonical URLs, `hreflang` (en / ar / x-default), Open Graph and Twitter cards, `sitemap-index.xml` with language alternates, `robots.txt`. JSON-LD includes `Person` and `WebSite` on every page, `FAQPage` on the home page, `CollectionPage`/`ItemList` on the case index, and `Article` + `BreadcrumbList` on each case study.
- **Performance:** fully static, self-hosted fonts (preloaded, `font-display: swap`, the Arabic font subset is only fetched when Arabic text is on screen), responsive WebP images with explicit dimensions, the LCP image preloaded with `fetchpriority="high"`, CSS inlined, only small vanilla scripts shipped, and immutable caching for `/_astro/*`.
- **Accessibility:** semantic landmarks, skip link, visible focus states, native `<details>` FAQ, labelled form controls with per-step validation, `aria-pressed` filters, live-region result counts, and AA contrast on the dark palette.
- **Motion:** subtle scroll reveals (content stays visible without JS) and a hero entrance that never delays LCP. Everything is disabled under `prefers-reduced-motion`.
- **Netlify Forms:** 3-step intake form with a honeypot and AJAX submit, plus a no-JS fallback to `/thank-you`.
- **WhatsApp:** floating button linking to `wa.me/966568355046`. It sits bottom-right in English and bottom-left in Arabic.

## Lighthouse (local production build, mobile emulation)

| Page | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|
| `/` | 97 | 100 | 100 | 100 |
| `/ar` | 100 | 100 | 100 | 100 |
| `/case-studies` | 100 | 100 | 100 | 100 |
| `/ar/case-studies/perfume-brand` | 100 | 100 | 100 | 100 |

Measured with the real photos in place.
