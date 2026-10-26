import { chromium } from 'playwright';
import { preview } from 'vite';
import { resolve } from 'node:path';
import { writeFile, mkdir } from 'node:fs/promises';

// Run `npm run build` first. PDF and web CV share the same A4 HTML source.
const server = await preview({ preview: { port: 4173, strictPort: true } });
const browser = await chromium.launch({ headless: true });
try {
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:4173/cv.html', { waitUntil: 'load' });
  await page.emulateMedia({ media: 'print' });
  const pdf = await page.pdf({ format: 'A4', printBackground: true, preferCSSPageSize: true });
  await mkdir(resolve('dist'),{recursive:true});
  await mkdir(resolve('public'),{recursive:true});
  await writeFile(resolve('dist/nami-shah-cv.pdf'),pdf);
  await writeFile(resolve('public/nami-shah-cv.pdf'),pdf);
  console.log('Generated dist/nami-shah-cv.pdf (and dev copy in public/)');
} finally { await browser.close(); await server.httpServer.close(); }
