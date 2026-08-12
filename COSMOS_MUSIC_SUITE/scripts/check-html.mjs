import { readFile, readdir } from 'node:fs/promises';
import vm from 'node:vm';
const files=(await readdir('app')).filter(x=>x.endsWith('.html'));
let failed=false;
for(const f of files){
 const s=await readFile('app/'+f,'utf8');
 if(!/<html/i.test(s)||!/<\/html>/i.test(s)){console.error(f,'missing html root');failed=true;}
 const scripts=[...s.matchAll(/<script(?:[^>]*)>([\s\S]*?)<\/script>/gi)].map(m=>m[1]).filter(x=>x.trim());
 for(let i=0;i<scripts.length;i++){try{new vm.Script(scripts[i]);}catch(e){console.error(f,'script',i,e.message);failed=true;}}
 console.log('checked',f,'scripts=',scripts.length);
}
if(failed)process.exit(1);
