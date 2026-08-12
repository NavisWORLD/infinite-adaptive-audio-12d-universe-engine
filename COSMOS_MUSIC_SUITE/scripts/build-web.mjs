import { cp, rm, mkdir, readFile, writeFile, readdir } from 'node:fs/promises';
import { gunzipSync } from 'node:zlib';
import { createHash } from 'node:crypto';

const app = 'app';
const partsDir = `${app}/source-parts`;
const sources = [
  { name: 'COSMOS_PLAY_ALONG.html', stem: 'COSMOS_PLAY_ALONG', parts: 4, sha256: 'a2b28679f8b9c886fad845655250afdfedc4a2e7dd07e04afe7992be22fe1f76' },
  { name: 'COSMOS_MUSIC_CONDUCTOR.html', stem: 'COSMOS_MUSIC_CONDUCTOR', parts: 5, sha256: '18d3a7a7677f6fb6a6199b031aaf106d6b6f511871b6dca5c5737507cd84484a' },
  { name: 'COSMOS_QUANTUM_BIO_INSTRUMENT.html', stem: 'COSMOS_QUANTUM_BIO_INSTRUMENT', parts: 5, sha256: '8c1de1bf3e0f8fd2de55a74c65745ba2fb66e4b585702fcaa7f1d2c7c71083f7' }
];

const available = await readdir(partsDir);
for (const source of sources) {
  const names = available.filter(x => x.startsWith(`${source.stem}.`) && x.endsWith('.b64part')).sort();
  if (names.length !== source.parts) {
    throw new Error(`${source.name}: expected ${source.parts} source parts, found ${names.length}`);
  }
  const chunks = await Promise.all(names.map(n => readFile(`${partsDir}/${n}`, 'utf8')));
  const encoded = chunks.join('').replace(/\s+/g, '');
  const packed = Buffer.from(encoded, 'base64');
  const html = gunzipSync(packed);
  const digest = createHash('sha256').update(html).digest('hex');
  if (digest !== source.sha256) {
    throw new Error(`${source.name}: SHA-256 mismatch; expected ${source.sha256}, got ${digest}`);
  }
  await writeFile(`${app}/${source.name}`, html);
  console.log('restored', source.name, digest);
}

await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
await cp(app, 'dist', { recursive: true });
await rm('dist/source-parts', { recursive: true, force: true });
for (const file of (await readdir('dist')).filter(x => x.endsWith('.html.gz'))) {
  await rm(`dist/${file}`, { force: true });
}
console.log('Built verified dist/ from app/.');
