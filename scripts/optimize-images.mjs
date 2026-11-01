// Generates responsive WebP + JPEG variants from the source photos in /public/assets into /public/img.
// Runs automatically before every build, so replacing a source photo is all you need to do.
import { mkdirSync, existsSync, readFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const pub = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');
const outDir = join(pub, 'img');
mkdirSync(outDir, { recursive: true });

const sources = [
  { src: 'assets/mostafa-hero-1200-LEdzBiIY.jpg', base: 'hero', widths: [480, 800, 1200], ratio: 5 / 4 },
  { src: 'assets/mostafa-portrait-800-BwauKAu6.jpg', base: 'portrait', widths: [400, 600, 800], ratio: 5 / 4 },
];

for (const s of sources) {
  const input = join(pub, s.src);
  if (!existsSync(input)) {
    console.error(`Missing ${s.src}. Run "npm run placeholders" or add the real file.`);
    process.exit(1);
  }
  const mtime = statSync(input).mtimeMs;
  const buf = readFileSync(input);
  for (const w of s.widths) {
    const h = Math.round(w * s.ratio);
    for (const ext of ['webp', 'jpg']) {
      const out = join(outDir, `${s.base}-${w}.${ext}`);
      if (existsSync(out) && statSync(out).mtimeMs > mtime) continue;
      const pipeline = sharp(buf).resize(w, h, { fit: 'cover', position: 'attention', withoutEnlargement: false });
      await (ext === 'webp' ? pipeline.webp({ quality: 78 }) : pipeline.jpeg({ quality: 80, mozjpeg: true })).toFile(out);
      console.log(`img   ${s.base}-${w}.${ext}`);
    }
  }
}

// Apple touch icon from the SVG favicon
const touch = join(pub, 'apple-touch-icon.png');
if (!existsSync(touch)) {
  await sharp(join(pub, 'favicon.svg'), { density: 300 }).resize(180, 180).png().toFile(touch);
  console.log('img   apple-touch-icon.png');
}
