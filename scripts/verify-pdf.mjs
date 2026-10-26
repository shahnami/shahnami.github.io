import { readFile } from 'node:fs/promises';
import { extractText, getDocumentProxy } from 'unpdf';

const buf = await readFile('dist/nami-shah-cv.pdf');
const pdf = await getDocumentProxy(new Uint8Array(buf));
const { totalPages, text } = await extractText(pdf, {mergePages:true});
const required = ['Nami Shah','cv@nami.sh','Summary','Experience','Development Manager',
'OpenZeppelin','Lead Developer','Senior Developer','Full Stack Ethereum Developer',
'Third Origin','MWR InfoSecurity','App Maven','Accenture','The Security Factory',
'Projects','OpenZeppelin Monitor','OIF Solver','Institutional Lending Platform',
'Skills','Education','University of Warwick','University College Howest','Certifications',
'Harvard Business School Online','CREST'];
const errors=[];
if(totalPages!==1) errors.push(`Expected one A4 page, got ${totalPages}`);
if(/\bAscend\b/i.test(text)) errors.push('Confidential project name found');
let pos=0;
for(const marker of required){const found=text.indexOf(marker,pos);if(found<0) errors.push(`Missing or out of order: ${marker}`);else pos=found+marker.length;}
if(errors.length){console.error(errors.join('\n'));process.exitCode=1;}
else console.log(`PDF passed: ${totalPages} A4 page; ${required.length} ordered ATS text markers`);
