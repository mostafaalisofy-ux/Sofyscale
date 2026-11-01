// Creates placeholder versions of the 4 site assets, but only where the real file is missing.
// Usage: npm run placeholders   (pass --force to overwrite)
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');
const force = process.argv.includes('--force');

const svg = (w, h, label, big = 'Sofy.') => `
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <radialGradient id="g" cx="70%" cy="20%" r="90%">
      <stop offset="0" stop-color="#3b1f7a"/>
      <stop offset="0.45" stop-color="#160d2c"/>
      <stop offset="1" stop-color="#070709"/>
    </radialGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <text x="50%" y="52%" text-anchor="middle" font-family="Georgia, serif" font-size="${Math.round(w / 4.2)}" fill="#eeedf3" fill-opacity="0.92">${big}</text>
  <text x="50%" y="${h - Math.round(h * 0.06)}" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="${Math.max(14, Math.round(w / 48))}" letter-spacing="2" fill="#9897a6">${label}</text>
</svg>`;

const images = [
  { file: 'assets/mostafa-hero-1200-LEdzBiIY.jpg', w: 1200, h: 1500, label: 'PLACEHOLDER · hero portrait' },
  { file: 'assets/mostafa-portrait-800-BwauKAu6.jpg', w: 800, h: 1000, label: 'PLACEHOLDER · about portrait' },
  { file: 'og-cover.jpg', w: 1200, h: 630, label: 'Mostafa Sofy · Marketing Leader · Growth Strategist · Agency Builder' },
];

for (const img of images) {
  const out = join(root, img.file);
  if (existsSync(out) && !force) {
    console.log(`skip  ${img.file} (exists)`);
    continue;
  }
  mkdirSync(dirname(out), { recursive: true });
  await sharp(Buffer.from(svg(img.w, img.h, img.label))).jpeg({ quality: 82, mozjpeg: true }).toFile(out);
  console.log(`made  ${img.file}`);
}

// Minimal valid one-page PDF
const pdfPath = join(root, 'Sofy-Executive-Profile.pdf');
if (!existsSync(pdfPath) || force) {
  const text = 'Sofy-Executive-Profile.pdf placeholder. Replace with the real Executive Profile.';
  const stream = `BT /F1 18 Tf 72 720 Td (Mostafa Sofy) Tj 0 -28 Td /F1 11 Tf (${text}) Tj ET`;
  const objs = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>',
    `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`,
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
  ];
  let pdf = '%PDF-1.4\n';
  const offsets = [];
  objs.forEach((o, i) => {
    offsets.push(pdf.length);
    pdf += `${i + 1} 0 obj\n${o}\nendobj\n`;
  });
  const xref = pdf.length;
  pdf += `xref\n0 ${objs.length + 1}\n0000000000 65535 f \n`;
  offsets.forEach((o) => (pdf += `${String(o).padStart(10, '0')} 00000 n \n`));
  pdf += `trailer\n<< /Size ${objs.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
  writeFileSync(pdfPath, pdf, 'latin1');
  console.log('made  Sofy-Executive-Profile.pdf');
} else {
  console.log('skip  Sofy-Executive-Profile.pdf (exists)');
}
