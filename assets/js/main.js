// ── CONFIG (CHANGE BEFORE PUSHING) ───────────────────────────
const GITHUB_REPO = 'SociallyNu/sociallynu.github.io';
const ADMIN_PASSWORD = 'changethis';
const GITHUB_TOKEN_KEY = 'snu_gh_token';
const PFP_KEY = 'snu_pfp';

// ── TAG PALETTE (30 colors) ───────────────────────────────────
const TAG_COLORS = [
  {color:'#b8a8d4',bg:'#18142a'},{color:'#c9a0a0',bg:'#1e1218'},
  {color:'#c4a97d',bg:'#1e1608'},{color:'#a0b4a0',bg:'#101808'},
  {color:'#a0c4c4',bg:'#0a1818'},{color:'#d4b0c0',bg:'#1e1018'},
  {color:'#b0c4d4',bg:'#101820'},{color:'#d4c8a0',bg:'#1e1c08'},
  {color:'#c0b0d8',bg:'#180e28'},{color:'#a8c4b0',bg:'#0e1812'},
  {color:'#d0a8b8',bg:'#200e14'},{color:'#b8d0a8',bg:'#121e08'},
  {color:'#a8b8d0',bg:'#0e1420'},{color:'#d8c0a0',bg:'#201808'},
  {color:'#c8a8d0',bg:'#1c0e20'},{color:'#a0d0b8',bg:'#081e14'},
  {color:'#d0b8a8',bg:'#201208'},{color:'#b0d0c0',bg:'#0e1e18'},
  {color:'#c0a8c8',bg:'#180e1e'},{color:'#a8c0d0',bg:'#0e1820'},
  {color:'#d4b8b0',bg:'#201410'},{color:'#b8c8a8',bg:'#121e0e'},
  {color:'#a8b0c8',bg:'#0e1020'},{color:'#c8d0b0',bg:'#1c1e0e'},
  {color:'#d0a8c0',bg:'#200e18'},{color:'#b0c8d0',bg:'#0e1c20'},
  {color:'#c8b8a8',bg:'#1e1808'},{color:'#a8d0c0',bg:'#081e18'},
  {color:'#d0c0b8',bg:'#201810'},{color:'#b8a8c8',bg:'#180e20'}
];

// ── GHOST SVGs ───────────────────────────────────────────────
function _g(w,h,inner){return `<svg width="${w}" height="${h}" viewBox="0 0 72 82" class="nv-ghost-svg">${inner}</svg>`;}
const _body=`<ellipse cx="36" cy="32" rx="25" ry="27" fill="#c4b0ff"/><path d="M11 32 Q11 60 18 60 Q22 60 22 56 Q22 60 27 60 Q32 60 32 56 Q32 60 36 60 Q40 60 40 56 Q40 60 45 60 Q50 60 50 56 Q50 60 54 60 Q61 60 61 32 Z" fill="#c4b0ff"/>`;
const _blush=`<ellipse cx="27" cy="37" rx="5" ry="3" fill="#f7a8c4" opacity="0.8"/><ellipse cx="45" cy="37" rx="5" ry="3" fill="#f7a8c4" opacity="0.8"/>`;
const _xeyes=`<text x="26" y="30" font-size="11" fill="#2a1f4a" font-weight="bold" font-family="monospace">×</text><text x="38" y="30" font-size="11" fill="#2a1f4a" font-weight="bold" font-family="monospace">×</text>`;
const _ears=`<ellipse cx="15" cy="16" rx="3" ry="7" fill="#c4b0ff" opacity="0.6" transform="rotate(-20 15 16)"/><ellipse cx="57" cy="16" rx="3" ry="7" fill="#c4b0ff" opacity="0.6" transform="rotate(20 57 16)"/>`;
const G={
  base:(w=52,h=60)=>_g(w,h,_body+_xeyes+_blush+_ears),
  exhausted:(w=28,h=32)=>_g(w,h,_body+`<text x="26" y="30" font-size="11" fill="#2a1f4a" font-family="monospace">—</text><text x="38" y="30" font-size="11" fill="#2a1f4a" font-family="monospace">—</text>`+_blush+`<line x1="20" y1="14" x2="26" y2="20" stroke="#fcd34d" stroke-width="1.5"/><line x1="52" y1="14" x2="46" y2="20" stroke="#fcd34d" stroke-width="1.5"/>`),
  uglycrying:(w=28,h=32)=>_g(w,h,_body+_xeyes+`<path d="M30 43 Q36 39 42 43" stroke="#2a1f4a" stroke-width="2" fill="none"/>`+_blush+`<ellipse cx="32" cy="47" rx="3" ry="5" fill="#a0c4f8" opacity="0.7"/><ellipse cx="40" cy="50" rx="2.5" ry="4" fill="#a0c4f8" opacity="0.5"/>`),
  frustrated:(w=28,h=32)=>_g(w,h,_body+`<text x="24" y="30" font-size="13" fill="#2a1f4a" font-family="monospace">×</text><text x="38" y="30" font-size="13" fill="#2a1f4a" font-family="monospace">×</text><path d="M29 44 Q36 40 43 44" stroke="#2a1f4a" stroke-width="2" fill="none"/>`+_blush+`<line x1="20" y1="10" x2="24" y2="18" stroke="#fcd34d" stroke-width="1.5"/><line x1="52" y1="10" x2="48" y2="18" stroke="#fcd34d" stroke-width="1.5"/>`),
  victory:(w=28,h=32)=>_g(w,h,_body+`<text x="26" y="32" font-size="11" fill="#2a1f4a" font-family="monospace">^</text><text x="38" y="32" font-size="11" fill="#2a1f4a" font-family="monospace">^</text><path d="M29 42 Q36 47 43 42" stroke="#2a1f4a" stroke-width="2" fill="none"/><text x="27" y="15" font-size="9" fill="#fcd34d" font-family="monospace">✦</text><text x="41" y="13" font-size="7" fill="#fcd34d" font-family="monospace">✦</text>`+_blush),
  smirking:(w=28,h=32)=>_g(w,h,_body+`<text x="26" y="32" font-size="11" fill="#2a1f4a" font-family="monospace">-</text><text x="38" y="32" font-size="11" fill="#2a1f4a" font-family="monospace">^</text><path d="M30 42 Q38 48 44 43" stroke="#2a1f4a" stroke-width="2" fill="none"/>`+_blush),
  skull:(w=28,h=32)=>_g(w,h,`<ellipse cx="36" cy="32" rx="25" ry="27" fill="#9090b8"/><path d="M11 32 Q11 60 18 60 Q22 60 22 56 Q22 60 27 60 Q32 60 32 56 Q32 60 36 60 Q40 60 40 56 Q40 60 45 60 Q50 60 50 56 Q50 60 54 60 Q61 60 61 32 Z" fill="#9090b8"/><circle cx="28" cy="30" r="5" fill="#06080f" opacity="0.6"/><circle cx="44" cy="30" r="5" fill="#06080f" opacity="0.6"/><line x1="26" y1="44" x2="46" y2="44" stroke="#06080f" stroke-width="1.5"/><line x1="30" y1="44" x2="30" y2="50" stroke="#06080f" stroke-width="1.5"/><line x1="36" y1="44" x2="36" y2="50" stroke="#06080f" stroke-width="1.5"/><line x1="42" y1="44" x2="42" y2="50" stroke="#06080f" stroke-width="1.5"/>`),
  crash:(w=28,h=32)=>_g(w,h,_body+`<text x="14" y="24" font-size="10" fill="#2a1f4a" font-family="monospace">@</text><text x="42" y="24" font-size="10" fill="#2a1f4a" font-family="monospace">@</text><path d="M28 42 Q36 38 44 42" stroke="#2a1f4a" stroke-width="2" fill="none"/>`+_blush+`<line x1="18" y1="8" x2="24" y2="18" stroke="#fcd34d" stroke-width="2"/><line x1="54" y1="8" x2="48" y2="18" stroke="#fcd34d" stroke-width="2"/>`),
  loop:(w=28,h=32)=>_g(w,h,_body+`<text x="26" y="32" font-size="11" fill="#2a1f4a" font-family="monospace">-</text><text x="38" y="32" font-size="11" fill="#2a1f4a" font-family="monospace">-</text><path d="M29 42 Q36 47 43 42" stroke="#2a1f4a" stroke-width="2" fill="none"/>`+_blush+`<rect x="26" y="8" width="20" height="13" rx="2" fill="#4a3080" opacity="0.8"/><text x="29" y="18" font-size="7" fill="#c4b0ff" font-family="monospace">&gt;_</text>`),
  glitch:(w=28,h=32)=>_g(w,h,_body+`<text x="23" y="30" font-size="14" fill="#2a1f4a" font-family="monospace">%</text><text x="38" y="30" font-size="14" fill="#2a1f4a" font-family="monospace">$</text>`+_blush+`<line x1="14" y1="6" x2="22" y2="16" stroke="#f472b6" stroke-width="1.5"/><line x1="58" y1="6" x2="50" y2="16" stroke="#fcd34d" stroke-width="1.5"/>`),
  null:(w=28,h=32)=>_g(w,h,_body+`<line x1="24" y1="28" x2="34" y2="28" stroke="#2a1f4a" stroke-width="2"/><line x1="38" y1="28" x2="48" y2="28" stroke="#2a1f4a" stroke-width="2"/><line x1="28" y1="38" x2="44" y2="38" stroke="#2a1f4a" stroke-width="1.5"/><ellipse cx="27" cy="35" rx="5" ry="3" fill="#f7a8c4" opacity="0.5"/><ellipse cx="45" cy="35" rx="5" ry="3" fill="#f7a8c4" opacity="0.5"/><text x="50" y="18" font-size="8" fill="#4a5280" font-family="monospace">z</text>`),
  bug:(w=28,h=32)=>_g(w,h,_body+`<text x="24" y="30" font-size="12" fill="#2a1f4a" font-family="monospace">^</text><text x="38" y="30" font-size="12" fill="#2a1f4a" font-family="monospace">^</text><path d="M28 41 Q36 46 44 41" stroke="#2a1f4a" stroke-width="2" fill="none"/>`+_blush+`<ellipse cx="20" cy="12" rx="5" ry="4" fill="#a78bfa" opacity="0.5"/><ellipse cx="52" cy="12" rx="5" ry="4" fill="#a78bfa" opacity="0.5"/>`),
  trace:(w=28,h=32)=>_g(w,h,_body+`<text x="26" y="32" font-size="11" fill="#2a1f4a" font-family="monospace">^</text><text x="38" y="32" font-size="11" fill="#2a1f4a" font-family="monospace">^</text><path d="M29 42 Q36 47 43 42" stroke="#2a1f4a" stroke-width="2" fill="none"/>`+_blush+`<text x="27" y="15" font-size="9" fill="#fcd34d" font-family="monospace">✦</text><text x="40" y="13" font-size="7" fill="#fcd34d" font-family="monospace">✦</text><text x="18" y="20" font-size="7" fill="#fcd34d" font-family="monospace">✦</text>`),
  oops:(w=28,h=32)=>_g(w,h,_body+`<text x="27" y="30" font-size="11" fill="#2a1f4a" font-family="monospace">o</text><text x="39" y="30" font-size="11" fill="#2a1f4a" font-family="monospace">o</text><path d="M30 42 Q36 46 42 42" stroke="#2a1f4a" stroke-width="1.5" fill="none"/><ellipse cx="27" cy="37" rx="4" ry="2.5" fill="#f7a8c4" opacity="0.6"/><ellipse cx="45" cy="37" rx="4" ry="2.5" fill="#f7a8c4" opacity="0.6"/>`),
  lag:(w=28,h=32)=>_g(w,h,_body+`<line x1="24" y1="29" x2="34" y2="29" stroke="#2a1f4a" stroke-width="2"/><line x1="38" y1="29" x2="48" y2="29" stroke="#2a1f4a" stroke-width="2"/><line x1="28" y1="39" x2="44" y2="39" stroke="#2a1f4a" stroke-width="1.5"/><text x="50" y="20" font-size="9" fill="#4a5280" font-family="monospace">z</text><text x="55" y="14" font-size="7" fill="#3a4060" font-family="monospace">z</text>`),
  gremlin:(w=28,h=32)=>_g(w,h,_body+`<text x="23" y="30" font-size="13" fill="#2a1f4a" font-family="monospace">&gt;</text><text x="38" y="30" font-size="13" fill="#2a1f4a" font-family="monospace">&lt;</text><path d="M27 44 Q36 50 45 44" stroke="#2a1f4a" stroke-width="2" fill="none"/><line x1="14" y1="8" x2="20" y2="16" stroke="#f472b6" stroke-width="1.5"/><line x1="58" y1="8" x2="52" y2="16" stroke="#f472b6" stroke-width="1.5"/>`),
  blink:(w=28,h=32)=>_g(w,h,_body+`<text x="26" y="31" font-size="11" fill="#2a1f4a" font-family="monospace">*</text><text x="38" y="31" font-size="11" fill="#2a1f4a" font-family="monospace">*</text><path d="M29 42 Q36 47 43 42" stroke="#2a1f4a" stroke-width="2" fill="none"/>`+_blush)
};
const MOOD_MAP={exhausted:G.exhausted,uglycrying:G.uglycrying,frustrated:G.frustrated,victory:G.victory,smirking:G.smirking,skull:G.skull,crash:G.crash,loop:G.loop,glitch:G.glitch,null:G.null,bug:G.bug,trace:G.trace,oops:G.oops,lag:G.lag,gremlin:G.gremlin,blink:G.blink};
function getMoodGhost(mood,w=28,h=32){return(MOOD_MAP[mood]||G.exhausted)(w,h);}

const MOOD_NAMES={exhausted:'Exhausted Nuon',uglycrying:'Ugly Cry Nuon',frustrated:'Frustrated Nuon',victory:'Victory Nuon',smirking:'Smirking Nuon',skull:'Skull Nuon',crash:'CrashNuon',loop:'LoopNuon',glitch:'GlitchNuon',null:'NullNuon',bug:'BugNuon',trace:'TraceNuon',oops:'OopsNuon',lag:'LagNuon',gremlin:'GremlinNuon',blink:'BlinkNuon'};

// ── TAGS ─────────────────────────────────────────────────────
let _tagsCache=null;
async function fetchTags(){
  if(_tagsCache) return _tagsCache;
  try{const r=await fetch('/posts/tags.json?v='+Date.now());_tagsCache=await r.json();}
  catch(e){_tagsCache=[{id:'systems',label:'systems',color:'#b8a8d4',bg:'#18142a',isCategory:true},{id:'dsa',label:'dsa',color:'#c9a0a0',bg:'#1e1218',isCategory:true},{id:'rant',label:'rant',color:'#c4a97d',bg:'#1e1608',isCategory:true},{id:'daily-log',label:'daily-log',color:'#a0b4a0',bg:'#101808',isCategory:true},{id:'milestone',label:'milestone',color:'#a0c4c4',bg:'#0a1818',isCategory:true}];}
  return _tagsCache;
}
async function getTag(id){const tags=await fetchTags();return tags.find(t=>t.id===id)||{id,label:id,color:'#a78bfa',bg:'#1a1040',isCategory:false};}

// ── UTILS ─────────────────────────────────────────────────────
function formatDate(d){return new Date(d).toLocaleDateString('en-US',{month:'short',day:'numeric'});}
function calcReadTime(html){const w=html.replace(/<[^>]+>/g,' ').trim().split(/\s+/).length;return Math.max(1,Math.round(w/200));}
function genId(){return String(Date.now()).slice(-6);}

// ── FETCH ─────────────────────────────────────────────────────
async function fetchPosts(){try{const r=await fetch('/posts/index.json?v='+Date.now());return r.json();}catch(e){return[];}}
async function fetchPost(file){const r=await fetch(`/${file}?v=`+Date.now());return r.json();}
async function fetchAbout(){try{const r=await fetch('/posts/about.json?v='+Date.now());if(r.ok)return r.json();}catch(e){}return{prose:'',grinding:[],reading:[],moods:['exhausted','uglycrying'],updated:''};}

// ── PFP ───────────────────────────────────────────────────────
const PFP_PATH='images/pfp.jpg';
// github pages serves files at the site URL — works for EVERYONE not just you
function getPfpUrl(){
  const repo=GITHUB_REPO.split('/')[1];
  // repo IS the github pages domain (e.g. sociallynu.github.io)
  // so the site URL is simply https://repo/
  return `https://${repo}/${PFP_PATH}`;
}
async function applyPfp(els){
  if(!els||!els.length)return;
  // try github pages URL first (everyone can see this)
  const pageUrl=`${getPfpUrl()}?v=${Math.floor(Date.now()/60000)}`; // cache bust per minute
  const cached=localStorage.getItem(PFP_KEY)||'';
  let finalUrl='';
  try{
    const r=await fetch(pageUrl,{method:'HEAD',cache:'no-store'});
    finalUrl=r.ok?pageUrl:(cached||'');
  }catch(e){finalUrl=cached||'';}
  els.forEach(el=>{
    if(!el)return;
    if(finalUrl){el.innerHTML=`<img src="${finalUrl}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"/>`;el.style.fontSize='0';}
    else{el.innerHTML='🐱';el.style.fontSize='';}
  });
}
async function uploadPfp(dataUrl){
  try{localStorage.setItem(PFP_KEY,dataUrl);}catch(e){}
  const base64=dataUrl.split(',')[1];
  return await githubSave(PFP_PATH,{__raw:true,data:base64},'update profile picture');
}

// ── NAV ───────────────────────────────────────────────────────
function renderNav(active=''){
  return `<nav class="nav">
    <a href="/index.html" class="nav-logo">SociallyNu<em>.</em></a>
    <div class="nav-links">
      <a href="/blog.html" class="${active==='blog'?'active':''}">blog</a>
      <a href="/about.html" class="${active==='about'?'active':''}">about</a>
      <a href="/nuonverse.html" class="${active==='nuonverse'?'active':''}">nuonverse</a>
    </div>
    <div class="hamburger" id="hamburger" onclick="toggleMobileMenu()">
      <span></span><span></span><span></span>
    </div>
  </nav>
  <div class="mobile-menu" id="mobileMenu">
    <a href="/blog.html">blog</a>
    <a href="/about.html">about</a>
    <a href="/nuonverse.html">nuonverse</a>
  </div>`;
}
function toggleMobileMenu(){
  const h=document.getElementById('hamburger'),m=document.getElementById('mobileMenu');
  if(!h||!m) return;
  h.classList.toggle('open'); m.classList.toggle('open');
}

// ── SIDEBAR ───────────────────────────────────────────────────
async function renderSidebar(posts,moods){
  const tags=await fetchTags();
  const cats=tags.filter(t=>t.isCategory);
  const counts={};
  posts.filter(p=>p.published).forEach(p=>{counts[p.category]=(counts[p.category]||0)+1;});
  const m=moods||['exhausted','uglycrying'];
  return `<aside class="sidebar" id="mainSidebar">
    <div class="pfp-wrap"><div class="pfp" id="pfpEl">🐱</div></div>
    <div class="sb-sep"></div>
    <div class="nuon-wrap">
      <div class="nuon-say">say hi to</div>
      <div class="float">${G.base(58,66)}</div>
      <div class="nuon-name">nuon</div>
      <div class="nuon-role">leader of the nuonverse<br>emotional support ghostling</div>
    </div>
    <div class="sb-sep"></div>
    <div>
      <div class="sb-label">core dumps</div>
      ${cats.map(c=>`<div class="tag-row" onclick="location='/blog.html?tag=${c.id}'">
        <span class="tag-name" style="color:${c.color}">#${c.label}</span>
        <span class="tag-count">${String(counts[c.id]||0).padStart(2,'0')}</span>
      </div>`).join('')}
    </div>
    <div>
      <div class="sb-label">today's mood</div>
      <div class="mood-ghosts">
        ${m.map(mood=>`<div class="mood-ghost-item"><div class="mood-tip">${MOOD_NAMES[mood]||mood}</div>${getMoodGhost(mood,42,48)}</div>`).join('')}
      </div>
    </div>
  </aside>`;
}

// ── MOBILE SIDEBAR TOGGLE ─────────────────────────────────────
function initMobileSidebar(){
  const sb=document.getElementById('mainSidebar');
  if(!sb) return;
  // add overlay
  const ov=document.createElement('div');
  ov.id='sbOverlay';
  ov.style.cssText='display:none;position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:140;';
  ov.onclick=()=>{sb.classList.remove('mob-open');ov.style.display='none';};
  document.body.appendChild(ov);
}
function toggleMobileSidebar(){
  const sb=document.getElementById('mainSidebar'),ov=document.getElementById('sbOverlay');
  if(!sb) return;
  sb.classList.toggle('mob-open');
  if(ov) ov.style.display=sb.classList.contains('mob-open')?'block':'none';
}

// ── POST CARD ─────────────────────────────────────────────────
async function renderPostCard(p,isPinned=false){
  const tag=await getTag(p.category);
  const thumb=p.thumbnail?`<img src="${p.thumbnail}" alt="" loading="lazy"/>`:`<div class="card-thumb-gradient" style="background:linear-gradient(135deg,${tag.bg} 0%,#06080f 100%);"><span style="font-family:var(--font-mono);font-size:32px;color:rgba(255,255,255,0.12);">∵</span></div>`;
  return `<div class="post-card${isPinned?' pinned-card-item':''}" onclick="location='/post.html?id=${p.id}'">
    <div class="card-thumb" style="position:relative;">${thumb}${isPinned?`<div class="tape-strip"></div><div class="card-pin-badge">📌 pinned</div>`:''}</div>
    <div class="card-body">
      <div><span class="card-tag" style="color:${tag.color};background:${tag.bg};">${tag.label}</span></div>
      <div class="card-title">${p.title}</div>
      ${p.excerpt?`<div class="card-excerpt">${p.excerpt}</div>`:''}
      <div class="card-footer">
        <div class="card-meta"><span>${formatDate(p.date)}</span><span>${p.readTime} min read</span></div>
        <div class="card-ghost">${getMoodGhost(p.mood,34,38)}</div>
      </div>
    </div>
  </div>`;
}

// ── STREAK ────────────────────────────────────────────────────
async function renderStreakCalendar(posts){
  const tags=await fetchTags();
  const tagColorMap={};
  tags.forEach(t=>{tagColorMap[t.id]=t.color;});
  // generate a bg shade from tag color
  function tagBg(col){const r=parseInt(col.slice(1,3),16),g=parseInt(col.slice(3,5),16),b=parseInt(col.slice(5,7),16);return `rgb(${Math.round(r*0.3)},${Math.round(g*0.3)},${Math.round(b*0.3)})`;}
  const postMap={};
  posts.filter(p=>p.published).forEach(p=>{if(!postMap[p.date])postMap[p.date]=[];postMap[p.date].push(p.category);});
  const today=new Date(),start=new Date(today.getFullYear(),0,1);
  let cells='',streak=0;
  for(let i=0;i<365;i++){
    const d=new Date(start);d.setDate(start.getDate()+i);
    const key=d.toISOString().split('T')[0];
    const cats=postMap[key]||[];
    let style='background:#0d1020';
    if(cats.length===1){const c=tagColorMap[cats[0]];if(c)style=`background:${tagBg(c)}`;}
    else if(cats.length>1)style='background:#4a3080';
    cells+=`<div class="s-cell" style="${style}" title="${key}${cats.length?' · '+cats.join(', '):''}"></div>`;
  }
  let sd=new Date(today);
  while(true){const k=sd.toISOString().split('T')[0];if(postMap[k]?.length){streak++;sd.setDate(sd.getDate()-1);}else break;}
  const catTags=tags.filter(t=>t.isCategory).slice(0,5);
  return `<div style="background:var(--bg2);border:1px solid var(--border2);border-radius:var(--radius);padding:14px;">
    <div class="sb-label">posting streak</div>
    <div style="display:flex;justify-content:space-between;margin-bottom:8px;">
      <span style="font-family:var(--font-mono);font-size:11px;color:var(--purple);font-weight:700;">current: ${streak} days</span>
      <span style="font-family:var(--font-mono);font-size:9px;color:var(--t4);">${today.getFullYear()}</span>
    </div>
    <div class="streak-grid">${cells}</div>
    <div class="streak-legend">${catTags.map(t=>`<div class="leg-item"><div class="leg-dot" style="background:${tagBg(t.color)}"></div><span class="leg-label">${t.label}</span></div>`).join('')}</div>
  </div>`;
}

// ── TICKERS (hero) ────────────────────────────────────────────

// ── CONTENT SANITIZER ─────────────────────────────────────────
// Strips bad inline styles from editor content before saving
// keeps structure (tags) but removes color/font/margin overrides
// that would clash with post-content CSS on the public site
function cleanContent(html){
  const d=document.createElement('div');
  d.innerHTML=html;
  // remove inline style from everything EXCEPT pre/code/specific elements
  d.querySelectorAll('*').forEach(el=>{
    const tag=el.tagName.toLowerCase();
    // keep style on resizable-media, latex-block, ghost-inline
    if(el.classList.contains('resizable-media')||el.classList.contains('latex-block')||el.classList.contains('ghost-inline')||el.classList.contains('code-lang-badge'))return;
    // for pre/code keep background but remove color overrides
    if(tag==='pre'||tag==='code'){el.removeAttribute('style');return;}
    // for everything else, strip inline styles
    el.removeAttribute('style');
  });
  // convert div-only paragraphs (Chrome contenteditable adds divs on Enter)
  // replace bare divs that aren't special with p tags
  d.querySelectorAll('div').forEach(div=>{
    if(div.classList.length===0&&!div.closest('table')&&!div.closest('pre')){
      const p=document.createElement('p');
      p.innerHTML=div.innerHTML;
      div.replaceWith(p);
    }
  });
  return d.innerHTML;
}

const TICKER_DATA=[
  {text:'error 404: consistency not found',mood:'skull'},
  {text:'gaslighting myself into understanding',mood:'uglycrying'},
  {text:"ctrl + z but for life pls",mood:'frustrated'},
  {text:'this will make sense eventually (threat)',mood:'smirking'},
  {text:"trust the process (i don't)",mood:'exhausted'},
  {text:'skill issue (fixing)',mood:'crash'},
  {text:'one concept away from clarity',mood:'trace'},
  {text:'sudo make me consistent',mood:'loop'},
  {text:"if it works don't ask me why",mood:'bug'},
  {text:'patching myself daily',mood:'oops'},
  {text:'i push to main and pray',mood:'gremlin'},
  {text:'currently installing discipline',mood:'null'},
  {text:'downloading competence…',mood:'lag'},
  {text:'have you tried turning me off and on again',mood:'glitch'},
  {text:'patching myself daily v2',mood:'blink'},
];

// Alternating batches: show 3 rows, each time page loads pick 3 different quotes per row
// so every refresh shows different combo from the pool
function initTickers(containerId){
  const zone=document.getElementById(containerId);
  if(!zone)return;
  zone.innerHTML='';
  const pool=[...TICKER_DATA];
  for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}
  const speeds=[40,56,46];
  for(let row=0;row<3;row++){
    const rowEl=document.createElement('div');
    rowEl.className='ticker-row';
    rowEl.style.cssText='width:100%;overflow:hidden;position:relative;height:26px;';
    const track=document.createElement('div');
    track.className='ticker-track';
    track.style.cssText='display:inline-flex;align-items:center;white-space:nowrap;will-change:transform;';
    const rowQuotes=[];
    for(let q=0;q<5;q++)rowQuotes.push(pool[(row*5+q)%pool.length]);
    let content='';
    rowQuotes.forEach(item=>{
      const ghost=getMoodGhost(item.mood,16,18);
      content+=`<span style="display:inline-flex;align-items:center;gap:8px;padding:0 28px;font-family:var(--font-mono);font-size:10px;color:var(--t4);white-space:nowrap;flex-shrink:0;">${item.text} ${ghost}</span><span style="display:inline-block;width:5px;height:5px;border-radius:50%;background:var(--purple-dark);margin:0 10px;opacity:0.4;flex-shrink:0;"></span>`;
    });
    // triple the content for seamless loop
    track.innerHTML=content+content+content;
    rowEl.appendChild(track);
    zone.appendChild(rowEl);
    // animate after layout paint so we get real scrollWidth
    requestAnimationFrame(()=>requestAnimationFrame(()=>{
      const segW=track.scrollWidth/3;
      let x=0,last=null;
      const spd=speeds[row];
      function tick(ts){
        if(last===null){last=ts;}
        const dt=(ts-last)/1000;last=ts;
        x-=(segW/spd)*dt;
        if(x<=-segW)x+=segW;
        track.style.transform=`translateX(${x}px)`;
        requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }));
  }
}

// ── STARS ─────────────────────────────────────────────────────
function initStars(){
  const canvas=document.getElementById('starCanvas');
  if(!canvas)return;
  const ctx=canvas.getContext('2d');
  let stars=[];
  function resize(){canvas.width=window.innerWidth;canvas.height=window.innerHeight;}
  function mk(){stars=Array.from({length:100},()=>({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*1.2+0.2,phase:Math.random()*Math.PI*2,speed:Math.random()*0.004+0.001}));}
  function draw(t){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    stars.forEach(s=>{
      const a=0.15+0.45*(Math.sin(t*s.speed+s.phase)+1)/2;
      ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(180,170,255,${a})`;ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  resize();mk();
  window.addEventListener('resize',()=>{resize();mk();});
  requestAnimationFrame(draw);
}

// ── ADMIN AUTH ────────────────────────────────────────────────
function isAdmin(){return localStorage.getItem('snu_admin')==='true';}
function adminLogin(pass){if(pass===ADMIN_PASSWORD){localStorage.setItem('snu_admin','true');return true;}return false;}
function adminLogout(){localStorage.removeItem('snu_admin');}
function getToken(){return localStorage.getItem(GITHUB_TOKEN_KEY)||'';}

// ── GITHUB API ────────────────────────────────────────────────
async function githubSave(path,content,message='update'){
  const token=localStorage.getItem(GITHUB_TOKEN_KEY)||''; // always fresh
  if(!token){alert('GitHub token not set. Go to Admin → Settings tab and enter your token.');return false;}
  let encoded;
  if(content&&content.__raw){encoded=content.data;}
  else{encoded=btoa(unescape(encodeURIComponent(JSON.stringify(content,null,2))));}
  let sha='';
  try{const r=await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${path}`,{headers:{Authorization:`Bearer ${token}`}});if(r.ok)sha=(await r.json()).sha;}catch(e){}
  const body={message,content:encoded};if(sha)body.sha=sha;
  const res=await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${path}`,{method:'PUT',headers:{Authorization:`Bearer ${token}`,'Content-Type':'application/json'},body:JSON.stringify(body)});
  return res.ok;
}
async function githubDelete(path,message='delete'){
  const token=getToken();if(!token)return false;
  let sha='';
  try{const r=await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${path}`,{headers:{Authorization:`Bearer ${token}`}});if(r.ok)sha=(await r.json()).sha;}catch(e){return false;}
  const res=await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${path}`,{method:'DELETE',headers:{Authorization:`Bearer ${token}`,'Content-Type':'application/json'},body:JSON.stringify({message,sha})});
  return res.ok;
}

// ── TAG MANAGER RENDER ────────────────────────────────────────
async function renderTagManager(containerId,onSave){
  const container=document.getElementById(containerId);
  if(!container)return;
  const tags=await fetchTags();
  let editingId=null;

  function draw(){
    container.innerHTML=`
      <div class="tag-manager">
        <div class="sb-label">manage tags</div>
        ${tags.map((t,i)=>`
          <div class="tag-item-row">
            <div class="tag-color-dot" style="background:${t.color};"></div>
            <span class="tag-item-label" style="color:${t.color};">#${t.label}</span>
            <span class="tag-item-badge" style="background:${t.bg};">${t.isCategory?'cat':'tag'}</span>
            <button class="tag-edit-btn" onclick="editTag(${i})">edit</button>
            <button class="tag-del-btn" onclick="deleteTag(${i})">✕</button>
          </div>`).join('')}
        <div style="margin-top:10px;">
          <button style="width:100%;font-family:var(--font-mono);font-size:10px;padding:7px;background:var(--bg3);color:var(--purple);border:1px dashed var(--purple-dark);border-radius:4px;cursor:pointer;font-weight:700;" onclick="editTag(-1)">+ new tag</button>
        </div>
        <div class="tag-form" id="tagForm" style="display:none;"></div>
      </div>`;

    window.editTag=function(idx){
      editingId=idx;
      const t=idx>=0?tags[idx]:{id:'',label:'',color:TAG_COLORS[tags.length%TAG_COLORS.length].color,bg:TAG_COLORS[tags.length%TAG_COLORS.length].bg,isCategory:true};
      let selColor=t.color;
      document.getElementById('tagForm').style.display='block';
      document.getElementById('tagForm').innerHTML=`
        <div style="font-family:var(--font-mono);font-size:9px;color:var(--purple);font-weight:700;margin-bottom:10px;">${idx>=0?'edit tag':'new tag'}</div>
        <input id="tName" placeholder="tag name (no spaces, use -)" value="${t.label}" style="text-transform:lowercase;"/>
        <label class="tag-cat-toggle"><input type="checkbox" id="tIsCat" ${t.isCategory?'checked':''}/> main category (shows in filter bar)</label>
        <div style="font-family:var(--font-mono);font-size:9px;color:var(--t4);margin-bottom:6px;">pick color:</div>
        <div class="color-swatches" id="colorSwatches">
          ${TAG_COLORS.map((c,ci)=>`<div class="swatch${c.color===selColor?' selected':''}" style="background:${c.color};" onclick="selectColor('${c.color}','${c.bg}',this)" title="${c.color}"></div>`).join('')}
        </div>
        <button class="tag-form-btn" onclick="saveTag()">save tag →</button>`;

      window.selectColor=function(col,bg,el){
        selColor=col;
        document.querySelectorAll('.swatch').forEach(s=>s.classList.remove('selected'));
        el.classList.add('selected');
        window._selectedBg=bg;
      };
      window._selectedBg=t.bg;

      window.saveTag=async function(){
        const name=document.getElementById('tName').value.trim().toLowerCase().replace(/\s+/g,'-');
        if(!name){alert('enter a tag name');return;}
        const isCat=document.getElementById('tIsCat').checked;
        const newTag={id:name,label:name,color:selColor,bg:window._selectedBg,isCategory:isCat};
        if(editingId>=0){
          const oldId=tags[editingId].id;
          tags[editingId]=newTag;
          // if renamed, update all posts
          if(oldId!==name){
            const posts=await fetchPosts();
            for(const p of posts){
              if(p.category===oldId||p.tags?.includes(oldId)){
                if(p.category===oldId)p.category=name;
                if(p.tags)p.tags=p.tags.map(tt=>tt===oldId?name:tt);
                // fetch and update post file
                try{const pf=await fetchPost(p.file);pf.category=p.category;pf.tags=p.tags;await githubSave(p.file,pf,'update tag rename');}catch(e){}
              }
            }
            await githubSave('posts/index.json',posts,'rename tag '+oldId+' to '+name);
          }
        } else { tags.push(newTag); }
        _tagsCache=tags;
        await githubSave('posts/tags.json',tags,'update tags');
        if(onSave)onSave();
        draw();
      };
    };

    window.deleteTag=async function(idx){
      if(!confirm(`delete tag #${tags[idx].label}? it won't be removed from existing posts.`))return;
      tags.splice(idx,1);
      _tagsCache=tags;
      await githubSave('posts/tags.json',tags,'delete tag');
      if(onSave)onSave();
      draw();
    };
  }
  draw();
}
