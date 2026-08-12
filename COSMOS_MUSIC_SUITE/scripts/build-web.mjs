import { cp, rm, mkdir, readFile, writeFile, readdir } from 'node:fs/promises';
import { gunzipSync } from 'node:zlib';
const app='app';
for(const f of (await readdir(app)).filter(x=>x.endsWith('.html.gz'))){
  const target=f.slice(0,-3);
  await writeFile(`${app}/${target}`,gunzipSync(await readFile(`${app}/${f}`)));
  console.log('restored',target);
}
await rm('dist',{recursive:true,force:true});
await mkdir('dist',{recursive:true});
await cp('app','dist',{recursive:true});
console.log('Built dist/ from app/.');
