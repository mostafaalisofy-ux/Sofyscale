// Post-build guard: fails if forbidden strings reach the rendered site.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const rules = [
  { name: 'em dash', re: /\u2014/g },
  { name: '"TO CONFIRM"', re: /TO CONFIRM/gi },
  { name: '[CONFIRM] marker', re: /\[CONFIRM\]/gi },
];

const walk = (d) =>
  readdirSync(d).flatMap((f) => {
    const p = join(d, f);
    return statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') || p.endsWith('.xml') || p.endsWith('.txt') ? [p] : [];
  });

let failed = 0;
const files = walk(dist);
for (const file of files) {
  const text = readFileSync(file, 'utf8');
  for (const r of rules) {
    const hits = text.match(r.re);
    if (hits) {
      failed += hits.length;
      console.error(`✗ ${r.name} x${hits.length} in ${relative(dist, file)}`);
    }
  }
}
if (failed) {
  console.error(`\nCopy check failed: ${failed} forbidden string(s).`);
  process.exit(1);
}
console.log(`✓ Copy check passed (${files.length} files, no em dashes, no confirmation markers).`);
