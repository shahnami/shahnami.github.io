

/* V14 motion controller. All content is fully visible without JS or on reduced motion. */
(()=>{
  'use strict';
  const prefersReduced=window.matchMedia('(prefers-reduced-motion: reduce)');
  if(prefersReduced.matches || !('IntersectionObserver' in window)) return;
  const selectors=[
    '#work .sectiontitle', '#work .workcard',
    '#experiments .sectiontitle', '#experiments .experiment',
    '#experience .timeline > div:first-child', '#experience .tlitem', '#experience .timeline-footer',
    '#about .aboutgrid > div',
    '#home > section.wrap.section:not([id]) .display',
    '#home > section.wrap.section:not([id]) .lead',
    '#home > section.wrap.section:not([id]) .actions',
    '#case .casehero > h1', '#case .casesection > div:first-child',
    '#cv .cvhero'
  ];
  const elements=selectors.flatMap(selector=>[...document.querySelectorAll(selector)]);
  if(!elements.length) return;
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(({target,isIntersecting})=>{
      // Keep the content visible after being read, avoiding distracting repeated fades.
      if(isIntersecting) target.classList.add('is-in-view');
    });
  },{threshold:.08,rootMargin:'0px 0px -7% 0px'});
  elements.forEach(el=>{
    el.classList.add('motion-reveal');
    if(el.matches('#work .workcard')) el.style.setProperty('--reveal-delay',`${[0,75,45,110][[...el.parentElement.children].indexOf(el)]||0}ms`);
    observer.observe(el);
  });
  // Animate only after observers are attached; the visual baseline is readable.
  document.body.classList.add('motion-polish');

  const timeline=document.querySelector('#experience .timeline > div:nth-child(2)');
  const timelineItems=timeline?[...timeline.querySelectorAll('.tlitem')]:[];
  if(!timeline || !timelineItems.length) return;
  let raf=0;
  const updateTimeline=()=>{
    raf=0;
    if(!document.getElementById('home')?.classList.contains('active')) return;
    const r=timeline.getBoundingClientRect();
    const focus=window.innerHeight*.61;
    const value=Math.max(0,Math.min(1,(focus-r.top)/Math.max(1,r.height-25)));
    timeline.style.setProperty('--motion-timeline-progress',`${(value*100).toFixed(1)}%`);
    timelineItems.forEach(el=>{
      const er=el.getBoundingClientRect();
      el.classList.toggle('is-highlighted',er.top<focus && er.bottom>window.innerHeight*.17);
    });
  };
  const schedule=()=>{if(!raf) raf=requestAnimationFrame(updateTimeline)};
  addEventListener('scroll',schedule,{passive:true});
  addEventListener('resize',schedule);
  addEventListener('hashchange',()=>requestAnimationFrame(updateTimeline));
  schedule();
})();

