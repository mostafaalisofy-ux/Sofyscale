import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Netlify injects URL (the primary site URL) at build time.
// Set SITE_URL in Netlify env vars to override it, e.g. once a custom domain is live.
const site = process.env.SITE_URL || process.env.URL || 'https://sofy.netlify.app';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'directory', inlineStylesheets: 'always' },
  compressHTML: true,
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/thank-you') && !page.includes('/404'),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', ar: 'ar' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
