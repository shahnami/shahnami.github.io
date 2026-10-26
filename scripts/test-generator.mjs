// Local smoke test using a synthetic API response. No live GitHub data here.
import { readFile, rm } from 'node:fs/promises';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
const folder=dirname(fileURLToPath(import.meta.url));
const output=join(folder,'.test-contributions.json');
const today=new Date('2026-10-25T00:00:00Z');
const days=Array.from({length:365},(_,i)=>({date:new Date(today.getTime()-(364-i)*86400000).toISOString().slice(0,10),contributionCount:i%13,contributionLevel:['NONE','FIRST_QUARTILE','SECOND_QUARTILE','THIRD_QUARTILE','FOURTH_QUARTILE'][i%5]}));
globalThis.fetch=async (_url, opts)=>{
  assert.equal(JSON.parse(opts.body).variables.login,'shahnami');
  return {ok:true,json:async()=>({data:{user:{contributionsCollection:{contributionCalendar:{totalContributions:3000,weeks:Array.from({length:53},(_,i)=>({contributionDays:days.slice(i*7,(i+1)*7)}))}}}}})};
};
process.env.GITHUB_TOKEN='test-only-not-real';
process.env.CONTRIBUTIONS_OUT=output;
await import('./generate-github-contributions.mjs');
await new Promise(r=>setTimeout(r,250));
const data=JSON.parse(await readFile(output,'utf8'));
assert.equal(data.contributions.length,365);
assert.equal(data.contributions[0].level,0);
assert.equal(data.contributions[4].level,4);
assert.equal(data.totalContributions,3000);
await rm(output);
console.log('Smoke test passed');
