import { readFile } from "node:fs/promises";
import { extractText, getDocumentProxy } from "unpdf";

const buf = await readFile("dist/nami-shah-cv.pdf");
const pdf = await getDocumentProxy(new Uint8Array(buf));
const { totalPages, text } = await extractText(pdf, { mergePages: true });

const failures = [];

// 1. One-page guard
if (totalPages !== 1) failures.push(`expected 1 page, got ${totalPages}`);

// 2. Ordered ATS markers: each must appear AFTER the previous one
const markers = [
  "Nami Shah",
  "cv@nami.sh",
  "Summary",
  "Experience",
  "Development Manager",
  "OpenZeppelin",
  "Third Origin",
  "Projects",
  "openzeppelin-monitor",
  "oif-solver",
  "Skills",
  "Rust",
  "Education",
  "University of Warwick",
  "Certifications",
  "CREST",
];
let cursor = 0;
for (const m of markers) {
  const idx = text.indexOf(m, cursor);
  if (idx === -1) {
    failures.push(`marker missing or out of order: "${m}"`);
  } else {
    cursor = idx;
  }
}

// 3. Dates extract intact
if (!/Jul 2021\s*[–-]\s*Present/.test(text)) failures.push("OZ date range not extractable");

if (failures.length > 0) {
  console.error("PDF verification FAILED:\n- " + failures.join("\n- "));
  process.exit(1);
}
console.log(`PDF verification passed (1 page, ${markers.length} ordered markers).`);
