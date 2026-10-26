
/* V23 scroll-linked semantic motion: all five effects are reversible and share one RAF. */
(()=>{
 'use strict';
 const experiment=document.querySelector('#experiments .twilight-scene');
 const roots=document.querySelector('#about .roots-art');
 const shell=document.querySelector('#experience .credentials-head .shell-token');
 const work=document.querySelector('#work .work-annotation');
 const idea=document.querySelector('#home .idea-annotation');
 if(!experiment||!roots||!shell||!work||!idea)return;
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 const clamp=x=>Math.max(0,Math.min(1,x));
 const smooth=x=>x*x*(3-2*x);
 const sun=experiment.querySelector('.twilight-sun');
 const moon=experiment.querySelector('.twilight-moon');
 const stars=experiment.querySelector('.twilight-stars');
 const lines=[...roots.querySelectorAll('.roots-live path')];
 const lengths=lines.map(path=>{const n=Math.ceil(path.getTotalLength()+1);path.style.strokeDasharray=String(n);return n});
 const tips=roots.querySelector('.roots-tips');
 const workPaths=[...work.querySelectorAll('.work-draw path')];
 const workLengths=workPaths.map(p=>{const v=Math.ceil(p.getTotalLength()+1);p.style.strokeDasharray=String(v);return v});
 const workDots=[...work.querySelectorAll('.work-nodes circle')];
 const ideaPaths=[...idea.querySelectorAll('.idea-draw path')];
 const ideaLengths=ideaPaths.map(p=>{const v=Math.ceil(p.getTotalLength()+1);p.style.strokeDasharray=String(v);return v});
 const ideaDots=[...idea.querySelectorAll('.idea-circles circle')];
 const typed=shell.querySelector('.shell-typed');
 const full='~/security';
 let ticking=false;
 function progress(el,start=.86,end=.31){
  const top=el.getBoundingClientRect().top;
  const raw=(innerHeight*start-top)/(innerHeight*(start-end));
  const remaining=document.documentElement.scrollHeight-innerHeight-scrollY;
  if(remaining<56) return 1;
  return clamp(raw);
 }
 function paint(){
  ticking=false;
  const narrow=innerWidth<=800;
  const d=reduced.matches?1:smooth(progress(experiment,narrow?0.92:0.83,narrow?0.58:0.33));
  sun.style.opacity=String(1-smooth(clamp((d-.19)/.55)));
  sun.setAttribute('transform',`translate(${(-8*d).toFixed(2)} ${(19*d).toFixed(2)})`);
  moon.style.opacity=String(smooth(clamp((d-.34)/.48)));
  moon.setAttribute('transform',`translate(0 ${((1-d)*9).toFixed(2)})`);
  stars.style.opacity=String(smooth(clamp((d-.60)/.3)));
  const r=reduced.matches?1:progress(roots,narrow?0.95:0.86,narrow?0.5:0.32);
  lines.forEach((path,i)=>{const phase=Number(path.dataset.delay)||0;const a=smooth(clamp((r-phase)/.31));path.style.strokeDashoffset=String(lengths[i]*(1-a))});
  if(tips) tips.style.opacity=String(smooth(clamp((r-.78)/.2)));
  const w=reduced.matches?1:progress(work,narrow?0.92:0.8,narrow?0.55:0.42);
  workPaths.forEach((p,i)=>{const a=smooth(clamp((w-i*.11)/.45));p.style.strokeDashoffset=String(workLengths[i]*(1-a))});
  workDots.forEach((dot,i)=>{const a=smooth(clamp((w-(.42+i*.08))/.22));dot.style.opacity=String(a);dot.style.transform=`scale(${(.35+.65*a).toFixed(3)})`});
  const c=reduced.matches?1:progress(idea,narrow?1:0.85,narrow?0.68:0.36);
  const bubbleStep=narrow?0.08:0.12;
  ideaPaths.forEach((p,i)=>{const a=smooth(clamp((c-i*bubbleStep)/.5));p.style.strokeDashoffset=String(ideaLengths[i]*(1-a))});
  ideaDots.forEach((dot,i)=>{const a=smooth(clamp((c-(.1+i*bubbleStep))/.2));dot.style.opacity=String(a);dot.style.transform=`translateY(${(8-8*a).toFixed(2)}px) scale(${(.35+.65*a).toFixed(3)})`});
  const t=reduced.matches?1:progress(shell,narrow?0.95:0.84,narrow?0.5:0.33);
  const count=Math.min(full.length,Math.floor(t*(full.length+1)));
  const next=full.slice(0,count);
  if(typed.textContent!==next)typed.textContent=next;
 }
 function schedule(){if(!ticking){ticking=true;requestAnimationFrame(paint)}}
 addEventListener('scroll',schedule,{passive:true});
 addEventListener('resize',schedule,{passive:true});
 reduced.addEventListener?.('change',schedule);
 paint();
})();
