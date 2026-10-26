
(function(){
 'use strict';
 const MS=86400000, user='shahnami';
 const graph=document.getElementById('gh-graph');
 if(!graph)return;
 const stage=document.querySelector('.gh-stage'),hero=document.querySelector('.gh-hero'),visual=document.getElementById('gh-visual');
 const muted=document.getElementById('gh-muted'),colored=document.getElementById('gh-colored'),months=document.getElementById('gh-months'),cursor=document.getElementById('gh-cursor');
 const source=document.getElementById('gh-source'),footnote=document.getElementById('gh-footnote'),rangeLabel=document.getElementById('gh-range'),periodLabel=document.getElementById('gh-period'),readout=document.getElementById('gh-readout');
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 const clamp=(v,min,max)=>Math.max(min,Math.min(v,max));
 const dateString=d=>d.toISOString().slice(0,10);
 const now=new Date();const today=new Date(Date.UTC(now.getUTCFullYear(),now.getUTCMonth(),now.getUTCDate()));
 let days=[],dayMap=null,mobileStart=0;
 function exampleLevel(d,i){if(d>today)return -1;const val=(Math.sin((i+29)*4.272)+Math.cos((i+7)*.97)+Math.sin(i*.31))*.29+.48+(Math.sin(i*.067)+Math.sin(i*.19)*.28)*.15;return val<.29?0:val<.44?1:val<.57?2:val<.7?3:4}
 function makeCalendar(){
  const compact=innerWidth<=760, weeks=compact?26:53;
  const start=new Date(today.getTime()-(compact?175:364)*MS);start.setUTCDate(start.getUTCDate()-start.getUTCDay());
  days=Array.from({length:weeks*7},(_,i)=>new Date(start.getTime()+MS*i));
  graph.style.setProperty('--gh-weeks',weeks);
  muted.replaceChildren();colored.replaceChildren();months.replaceChildren();
  days.forEach((d,i)=>{
   const info=dayMap?.get(dateString(d)), level=d>today?-1:(dayMap?(info?info.level:0):exampleLevel(d,i));
   const className='gh-cell '+(level<0?'future':'l'+level);
   const back=document.createElement('span'),front=document.createElement('span');back.className=className;front.className=className;
   if(dayMap && info){const title=`${dateString(d)}: ${info.count} contribution${info.count===1?'':'s'}`;back.title=title;front.title=title}
   muted.appendChild(back);colored.appendChild(front);
  });
  let seen='';days.forEach((d,i)=>{if(i%7)return;const k=d.getUTCFullYear()+'-'+d.getUTCMonth();if(k===seen)return;seen=k;if(i<7)return;const n=document.createElement('span');n.textContent=d.toLocaleDateString('en-US',{month:'short',timeZone:'UTC'});n.style.left=(100*i/(days.length-7))+'%';months.append(n)});
  periodLabel.textContent=compact?'LAST 6 MONTHS':`${days[0].getUTCFullYear()} / ${today.getUTCFullYear()}`;
  rangeLabel.textContent=(compact?'26':'53')+' WEEKS';
 }
 function measure(){
  // Stable mobile origin based on the hero's natural document layout, not its pinned current position.
  const stageY=window.scrollY + stage.getBoundingClientRect().top;
  mobileStart=stageY+visual.offsetTop-innerHeight*.22;
 }
 function render(){
  if(reduced.matches){graph.style.setProperty('--gh-progress','100%');cursor.style.opacity='0';readout.textContent='ACTIVITY CALENDAR';return;}
  const compact=innerWidth<=760;
  let p;
  if(compact){
    const cardTop=stage.offsetTop+visual.offsetTop;
    const start=Math.max(0,cardTop-innerHeight*.92);
    const travel=200;
    p=clamp((scrollY-start)/travel,0,1);
  }else{
    const startTop=stage.offsetTop;
    const endTop=innerHeight-stage.offsetHeight;
    const travel=Math.max(1,startTop-endTop);
    p=clamp((startTop-stage.getBoundingClientRect().top)/travel,0,1);
  }
  graph.style.setProperty('--gh-progress',(p*100).toFixed(2)+'%');
  cursor.style.opacity=p>.015&&p<.985?'.75':'0';
  readout.textContent=String(Math.round(p*100)).padStart(3,'0')+'% REVEALED';
 }
 let pending=false;
 function onScroll(){if(pending)return;pending=true;requestAnimationFrame(()=>{pending=false;render()})}
 addEventListener('scroll',onScroll,{passive:true});
 addEventListener('resize',()=>{makeCalendar();measure();render()},{passive:true});
 reduced.addEventListener?.('change',render);
 makeCalendar();measure();render();
 async function retrieve(){
  try{
   const res=await fetch('/data/github-contributions.json',{cache:'no-cache'});
   if(!res.ok)throw new Error('Snapshot unavailable');
   const raw=await res.json();
   if(raw.username!==user||!Array.isArray(raw.contributions)||raw.contributions.length<300||raw.source!=='GitHub GraphQL contributionsCollection')throw new Error('Invalid snapshot');
   const map=new Map();for(const d of raw.contributions){if(!/^\d{4}-\d{2}-\d{2}$/.test(d.date)||!Number.isInteger(d.count)||!Number.isInteger(d.level)||d.level<0||d.level>4)throw new Error('Malformed day');map.set(d.date,d)}
   dayMap=map;makeCalendar();measure();render();
   const gen=raw.generatedAt?new Date(raw.generatedAt):null;
   source.textContent='GitHub activity, updated '+(gen&&!isNaN(gen)?gen.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}):'recently');
   footnote.textContent=Number.isInteger(raw.totalContributions)?`${raw.totalContributions.toLocaleString('en-US')} contributions in reported period`:'From GitHub GraphQL';
  }catch(err){
   // No invented counts are presented as actual user activity.
   source.textContent='Illustrative calendar. Live data not connected';
   footnote.textContent='Preview data only. No actual counts shown';
  }
 }
 retrieve();
})();
