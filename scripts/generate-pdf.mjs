import { chromium } from "playwright";
import { preview } from "vite";
import { resolve } from "node:path";

const server = await preview({ preview: { port: 4173, strictPort: true } });
const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto("http://localhost:4173/cv.html", { waitUntil: "networkidle" });
await page.pdf({
  path: resolve("dist/nami-shah-cv.pdf"),
  format: "A4",
  printBackground: true,
});
await browser.close();
await server.close();
console.log("wrote dist/nami-shah-cv.pdf");
