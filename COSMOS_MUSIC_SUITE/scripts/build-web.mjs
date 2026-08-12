import { cp, rm, mkdir } from 'node:fs/promises';

const app = 'app';
const dist = 'dist';

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(app, dist, { recursive: true });

// The modular runtime in app/ is authoritative. Legacy transport artifacts
// are intentionally excluded from distributable builds.
await rm(`${dist}/source-parts`, { recursive: true, force: true });
for (const name of [
  'COSMOS_PLAY_ALONG.html.gz',
  'COSMOS_MUSIC_CONDUCTOR.html.gz',
  'COSMOS_QUANTUM_BIO_INSTRUMENT.html.gz'
]) {
  await rm(`${dist}/${name}`, { force: true });
}

console.log('Built COSMOS Music modular runtime to dist/.');
