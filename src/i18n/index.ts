import type { Content, Lang } from '../data/types';
import { en } from '../data/content.en';
import { ar } from '../data/content.ar';

export const content: Record<Lang, Content> = { en, ar };

export const getContent = (lang: Lang) => content[lang];

/**
 * Prefix a root-relative path with the locale. `path` must start with "/".
 * Page URLs always end with "/" to match how Netlify serves directory pages
 * (it 301-redirects "/ar" to "/ar/"), so links and canonicals never redirect.
 */
export function href(lang: Lang, path = '/') {
  const p = path === '/' ? '' : path.replace(/\/$/, '');
  return lang === 'en' ? `${p}/` : `/ar${p}/`;
}

/** Anchor on the home page, usable from any page. */
export function homeAnchor(lang: Lang, id: string, onHome: boolean) {
  return onHome ? `#${id}` : `${href(lang, '/')}#${id}`;
}

export const dir = (lang: Lang) => (lang === 'ar' ? 'rtl' : 'ltr');
