import { chromium } from 'playwright';
import { preview } from 'vite';
import { resolve } from 'node:path';
import { writeFile, mkdir } from 'node:fs/promises';

// Bind IPv4 explicitly. Vite's default host is "localhost", which Node often
// resolves to ::1 only, so a connection to 127.0.0.1 is refused.
const server = await preview({
  preview: { host: '127.0.0.1', port: 4173, strictPort: true },
});
const address = server.httpServer?.address();
if (!address || typeof address === 'string') {
  throw new Error('Preview server did not bind to a TCP port');
}
const origin = `http://127.0.0.1:${address.port}`;

const browser = await chromium.launch({ headless: true });
try {
  const page = await browser.newPage();
  await page.goto(`${origin}/cv.html`, { waitUntil: 'load' });
  await page.emulateMedia({ media: 'print' });
  const pdf = await page.pdf({ format: 'A4', printBackground: true, preferCSSPageSize: true });
  await mkdir(resolve('dist'),{recursive:true});
  await mkdir(resolve('public'),{recursive:true});
  await writeFile(resolve('dist/nami-shah-cv.pdf'),pdf);
  await writeFile(resolve('public/nami-shah-cv.pdf'),pdf);
  console.log('Generated dist/nami-shah-cv.pdf (and dev copy in public/)');
} finally { await browser.close(); await server.httpServer.close(); }
