import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const html=await readFile('index.html','utf8');
const page=await readFile('cv.html','utf8');
const js=await readFile('src/scripts/projects-and-routing.js','utf8');

test('major portfolio sections retained',()=>{
  for(const marker of ['Building systems with','Work,','Beyond the','Security','Builder', 'meaningful.','gh-graph'])
    assert.ok(html.includes(marker),`Missing ${marker}`);
});
test('all four case studies retain their individual content',()=>{
  for(const id of ['monitor','relayer','solver','lending'])
    assert.ok(js.includes(`id:'${id}'`),`Missing project ${id}`);
});
test('printable CV is linked and anonymized',()=>{
  assert.ok(html.includes('href="/cv/"'));
  assert.ok(page.includes('Print / Save as PDF'));
  assert.ok(page.includes('University of Warwick'));
  assert.ok(!/\bAscend\b/i.test(page));
});
test('semantically named scroll art and visible sources',()=>{
  assert.ok(html.includes('work-note'));
  assert.ok(html.includes('roots-art'));
  assert.ok(html.includes('idea-circles'));
  assert.ok(html.includes('twilight-scene'));
  assert.ok(html.includes('shell-typed'));
  assert.ok(js.includes('Ethereum Foundation'));
  assert.ok(!html.includes('id="case-story"'));
  assert.ok(!js.includes('renderCaseStory'));
  assert.ok(js.includes('contribution-list'));
});
test('cv routes share one anonymized resume', async ()=>{
  const standalone = await readFile('public/cv/index.html','utf8');
  const article = (source) => source.match(/<article[\s\S]*?<\/article>/g).find((block)=>block.includes('cv-paper'));
  const text = (source) => article(source).replace(/<[^>]+>/g,' ').replace(/&amp;/g,'&').replace(/\s+/g,' ').trim();
  assert.equal(text(standalone), text(page));
  assert.equal(text(html), text(page));
  for (const source of [html, page, standalone]) {
    assert.ok(!/\bAscend\b/i.test(source));
    assert.ok(source.includes('Institutional Lending Platform'));
    assert.ok(source.includes('/favicon.ico'));
  }
});
test('github credentials stay out of the browser bundle', async ()=>{
  const calendar = await readFile('src/scripts/github-calendar.js','utf8');
  const motion = await readFile('src/scripts/semantic-motion.js','utf8');
  for (const source of [html, calendar, motion, js]) {
    assert.ok(!source.includes('GITHUB_TOKEN'));
    assert.ok(!source.includes('CONTRIBUTIONS_GH_TOKEN'));
    assert.ok(!/Bearer\s+gh[ps]_/.test(source));
  }
  assert.ok(calendar.includes('Illustrative calendar'));
});
