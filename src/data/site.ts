export const SITE = {
  brand: 'Sofy.',
  name: 'Mostafa Sofy',
  email: 'mostafa.ali.sofy@gmail.com',
  whatsappDisplay: '+966 56 835 5046',
  whatsappUrl: 'https://wa.me/966568355046',
  phone: '+966568355046',
  linkedin: 'https://www.linkedin.com/in/mostafasofy/',
  profilePdf: '/Sofy-Executive-Profile.pdf',
  ogImage: '/og-cover.jpg',
  themeColor: '#070709',
  formName: 'strategic-session',
} as const;

/** Source images as they lived on the old site. Optimized variants are generated into /public/img at build. */
export const IMAGES = {
  hero: { src: '/assets/mostafa-hero-1200-LEdzBiIY.jpg', base: 'hero', widths: [480, 800, 1120] },
  portrait: { src: '/assets/mostafa-portrait-800-BwauKAu6.jpg', base: 'portrait', widths: [400, 600, 800] },
} as const;

export const webpSrcset = (key: keyof typeof IMAGES) =>
  IMAGES[key].widths.map((w) => `/img/${IMAGES[key].base}-${w}.webp ${w}w`).join(', ');
