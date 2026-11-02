import type { Content, Lang } from '../data/types';
import { en } from '../data/content.en';
import { ar } from '../data/content.ar';

export const content: Record<Lang, Content> = { en, ar };

export const getContent = (lang: Lang) => content[lang];

/** Prefix a root-relative path with the locale. `path` must start with "/". */
export function href(lang: Lang, path = '/') {
  if (lang === 'en') return path;
  return path === '/' ? '/ar' : `/ar${path}`;
}

/** Anchor on the home page, usable from any page. */
export function homeAnchor(lang: Lang, id: string, onHome: boolean) {
  return onHome ? `#${id}` : `${href(lang, '/')}#${id}`;
}

export const dir = (lang: Lang) => (lang === 'ar' ? 'rtl' : 'ltr');
