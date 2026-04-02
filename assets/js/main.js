// ── GHOST SVGs ──────────────────────────────────────────────
const GHOST = {
  base: (w=52,h=60)=>`<svg width="${w}" height="${h}" viewBox="0 0 72 82" class="nv-ghost-svg">
    <ellipse cx="36" cy="32" rx="25" ry="27" fill="#c4b0ff"/>
    <path d="M11 32 Q11 60 18 60 Q22 60 22 56 Q22 60 27 60 Q32 60 32 56 Q32 60 36 60 Q40 60 40 56 Q40 60 45 60 Q50 60 50 56 Q50 60 54 60 Q61 60 61 32 Z" fill="#c4b0ff"/>
    <text x="26" y="30" font-size="11" fill="#2a1f4a" font-weight="bold" font-family="monospace">×</text>
    <text x="38" y="30" font-size="11" fill="#2a1f4a" font-weight="bold" font-family="monospace">×</text>
    <ellipse cx="27" cy="37" rx="5" ry="3" fill="#f7a8c4" opacity="0.8"/>
    <ellipse cx="45" cy="37" rx="5" ry="3" fill="#f7a8c4" opacity="0.8"/>
    <ellipse cx="15" cy="16" rx="3" ry="7" fill="#c4b0ff" opacity="0.6" transform="rotate(-20 15 16)"/>
    <ellipse cx="57" cy="16" rx="3" ry="7" fill="#c4b0ff" opacity="0.6" transform="rotate(20 57 16)"/>
  </svg>`,
  exhausted: (w=26,h=30)=>`<svg width="${w}" height="${h}" viewBox="0 0 72 80" class="nv-ghost-svg">
    <ellipse cx="36" cy="32" rx="25" ry="27" fill="#c4b0ff"/>
    <path d="M11 32 Q11 60 18 60 Q22 60 22 56 Q22 60 27 60 Q32 60 32 56 Q32 60 36 60 Q40 60 40 56 Q40 60 45 60 Q50 60 50 56 Q50 60 54 60 Q61 60 61 32 Z" fill="#c4b0ff"/>
    <text x="26" y="30" font-size="11" fill="#2a1f4a" font-family="monospace">—</text>
    <text x="38" y="30" font-size="11" fill="#2a1f4a" font-family="monospace">—</text>
    <ellipse cx="27" cy="38" rx="5" ry="3" fill="#f7a8c4" opacity="0.7"/>
    <ellipse cx="45" cy="38" rx="5" ry="3" fill="#f7a8c4" opacity="0.7"/>
    <line x1="20" y1="14" x2="26" y2="20" stroke="#fcd34d" stroke-width="1.5"/>
    <line x1="52" y1="14" x2="46" y2="20" stroke="#fcd34d" stroke-width="1.5"/>
  </svg>`,
  uglycrying: (w=26,h=30)=>`<svg width="${w}" height="${h}" viewBox="0 0 72 80" class="nv-ghost-svg">
    <ellipse cx="36" cy="32" rx="25" ry="27" fill="#c4b0ff"/>
    <path d="M11 32 Q11 60 18 60 Q22 60 22 56 Q22 60 27 60 Q32 60 32 56 Q32 60 36 60 Q40 60 40 56 Q40 60 45 60 Q50 60 50 56 Q50 60 54 60 Q61 60 61 32 Z" fill="#c4b0ff"/>
    <text x="26" y="30" font-size="11" fill="#2a1f4a" font-family="monospace">×</text>
    <text x="38" y="30" font-size="11" fill="#2a1f4a" font-family="monospace">×</text>
    <path d="M30 43 Q36 39 42 43" stroke="#2a1f4a" stroke-width="2" fill="none"/>
    <ellipse cx="27" cy="37" rx="5" ry="3" fill="#f7a8c4" opacity="0.7"/>
    <ellipse cx="45" cy="37" rx="5" ry="3" fill="#f7a8c4" opacity="0.7"/>
    <ellipse cx="36" cy="46" rx="4" ry="5" fill="#a0c4f8" opacity="0.6"/>
    <ellipse cx="36" cy="53" rx="3" ry="4" fill="#a0c4f8" opacity="0.4"/>
  </svg>`,
  frustrated: (w=26,h=30)=>`<svg width="${w}" height="${h}" viewBox="0 0 72 80" class="nv-ghost-svg">
    <ellipse cx="36" cy="32" rx="25" ry="27" fill="#c4b0ff"/>
    <path d="M11 32 Q11 60 18 60 Q22 60 22 56 Q22 60 27 60 Q32 60 32 56 Q32 60 36 60 Q40 60 40 56 Q40 60 45 60 Q50 60 50 56 Q50 60 54 60 Q61 60 61 32 Z" fill="#c4b0ff"/>
    <text x="24" y="30" font-size="13" fill="#2a1f4a" font-family="monospace">×</text>
    <text x="38" y="30" font-size="13" fill="#2a1f4a" font-family="monospace">×</text>
    <path d="M29 44 Q36 40 43 44" stroke="#2a1f4a" stroke-width="2" fill="none"/>
    <ellipse cx="27" cy="37" rx="5" ry="3" fill="#f7a8c4" opacity="0.7"/>
    <ellipse cx="45" cy="37" rx="5" ry="3" fill="#f7a8c4" opacity="0.7"/>
    <line x1="20" y1="10" x2="24" y2="18" stroke="#fcd34d" stroke-width="1.5"/>
    <line x1="52" y1="10" x2="48" y2="18" stroke="#fcd34d" stroke-width="1.5"/>
  </svg>`,
  victory: (w=26,h=30)=>`<svg width="${w}" height="${h}" viewBox="0 0 72 80" class="nv-ghost-svg">
    <ellipse cx="36" cy="32" rx="25" ry="27" fill="#c4b0ff"/>
    <path d="M11 32 Q11 60 18 60 Q22 60 22 56 Q22 60 27 60 Q32 60 32 56 Q32 60 36 60 Q40 60 40 56 Q40 60 45 60 Q50 60 50 56 Q50 60 54 60 Q61 60 61 32 Z" fill="#c4b0ff"/>
    <text x="26" y="32" font-size="11" fill="#2a1f4a" font-family="monospace">^</text>
    <text x="38" y="32" font-size="11" fill="#2a1f4a" font-family="monospace">^</text>
    <path d="M29 42 Q36 47 43 42" stroke="#2a1f4a" stroke-width="2" fill="none"/>
    <text x="27" y="15" font-size="9" fill="#fcd34d" font-family="monospace">✦</text>
    <text x="41" y="13" font-size="7" fill="#fcd34d" font-family="monospace">✦</text>
    <ellipse cx="27" cy="37" rx="5" ry="3" fill="#f7a8c4" opacity="0.7"/>
    <ellipse cx="45" cy="37" rx="5" ry="3" fill="#f7a8c4" opacity="0.7"/>
  </svg>`,
  smirking: (w=26,h=30)=>`<svg width="${w}" height="${h}" viewBox="0 0 72 80" class="nv-ghost-svg">
    <ellipse cx="36" cy="32" rx="25" ry="27" fill="#c4b0ff"/>
    <path d="M11 32 Q11 60 18 60 Q22 60 22 56 Q22 60 27 60 Q32 60 32 56 Q32 60 36 60 Q40 60 40 56 Q40 60 45 60 Q50 60 50 56 Q50 60 54 60 Q61 60 61 32 Z" fill="#c4b0ff"/>
    <text x="26" y="32" font-size="11" fill="#2a1f4a" font-family="monospace">-</text>
    <text x="38" y="32" font-size="11" fill="#2a1f4a" font-family="monospace">^</text>
    <path d="M30 42 Q38 48 44 43" stroke="#2a1f4a" stroke-width="2" fill="none"/>
    <ellipse cx="27" cy="37" rx="5" ry="3" fill="#f7a8c4" opacity="0.7"/>
    <ellipse cx="45" cy="37" rx="5" ry="3" fill="#f7a8c4" opacity="0.7"/>
  </svg>`,
  skull: (w=26,h=30)=>`<svg width="${w}" height="${h}" viewBox="0 0 72 80" class="nv-ghost-svg">
    <ellipse cx="36" cy="32" rx="25" ry="27" fill="#9090b8"/>
    <path d="M11 32 Q11 60 18 60 Q22 60 22 56 Q22 60 27 60 Q32 60 32 56 Q32 60 36 60 Q40 60 40 56 Q40 60 45 60 Q50 60 50 56 Q50 60 54 60 Q61 60 61 32 Z" fill="#9090b8"/>
    <circle cx="28" cy="30" r="5" fill="#06080f" opacity="0.6"/>
    <circle cx="44" cy="30" r="5" fill="#06080f" opacity="0.6"/>
    <line x1="26" y1="44" x2="46" y2="44" stroke="#06080f" stroke-width="1.5"/>
    <line x1="30" y1="44" x2="30" y2="50" stroke="#06080f" stroke-width="1.5"/>
    <line x1="36" y1="44" x2="36" y2="50" stroke="#06080f" stroke-width="1.5"/>
    <line x1="42" y1="44" x2="42" y2="50" stroke="#06080f" stroke-width="1.5"/>
  </svg>`
};

// mood → ghost mapping
const MOOD_GHOST = {
  exhausted: GHOST.exhausted,
  uglycrying: GHOST.uglycrying,
  frustrated: GHOST.frustrated,
  victory: GHOST.victory,
  smirking: GHOST.smirking,
  skull: GHOST.skull,
  default: GHOST.exhausted
};

// ── UTILS ────────────────────────────────────────────────────
function getMoodGhost(mood, w=26, h=30){
  const fn = MOOD_GHOST[mood] || MOOD_GHOST.default;
  return fn(w, h);
}

function formatDate(dateStr){
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US',{month:'short',day:'numeric'});
}

function getCategoryClass(cat){
  return `tc-${cat}`;
}

function getPillClass(cat){
  return `pill pill-${cat}`;
}

// ── FETCH POSTS ──────────────────────────────────────────────
async function fetchPosts(){
  const r = await fetch('/posts/index.json');
  return r.json();
}

async function fetchPost(file){
  const r = await fetch(`/${file}`);
  return r.json();
}

// ── SHARED NAV ───────────────────────────────────────────────
function renderNav(activePage=''){
  const pages = [
    {label:'blog', href:'/blog.html'},
    {label:'about', href:'/about.html'},
    {label:'nuonverse', href:'/nuonverse.html'},
  ];
  return `
  <nav class="nav">
    <a href="/index.html" class="nav-logo">SociallyNu<em>.</em></a>
    <div class="nav-links">
      ${pages.map(p=>`<a href="${p.href}" class="${activePage===p.label?'active':''}">${p.label}</a>`).join('')}
    </div>
  </nav>`;
}

// ── SHARED SIDEBAR ───────────────────────────────────────────
async function renderSidebar(posts, todayMoods=['exhausted','uglycrying']){
  const counts = {};
  posts.filter(p=>p.published).forEach(p=>{
    counts[p.category] = (counts[p.category]||0)+1;
  });
  const cats = ['systems','dsa','rant','daily-log','milestone'];

  return `
  <aside class="sidebar">
    <div class="pfp-wrap">
      <div class="pfp" id="pfpEl">🐱</div>
    </div>

    <div class="nuon-wrap">
      <div class="sb-label" style="width:100%;text-align:left;">say hi to nuon</div>
      <div class="float">${GHOST.base(52,60)}</div>
      <div class="nuon-name">nuon</div>
      <div class="nuon-role">leader of the nuonverse<br>emotional support ghostling</div>
    </div>

    <div>
      <div class="sb-label">core dumps</div>
      ${cats.map(c=>`
        <div class="tag-row" onclick="window.location='/blog.html?tag=${c}'">
          <span class="tag-name tc-${c}">#${c}</span>
          <span class="tag-count">${String(counts[c]||0).padStart(2,'0')}</span>
        </div>`).join('')}
    </div>

    <div>
      <div class="sb-label">today's mood</div>
      <div class="mood-ghosts">
        ${todayMoods.map(m=>getMoodGhost(m,30,34)).join('')}
      </div>
      <div class="mood-names">
        ${todayMoods.map(m=>`<div class="mood-name">${m}</div>`).join('')}
      </div>
    </div>
  </aside>`;
}

// ── STREAK CALENDAR ──────────────────────────────────────────
function renderStreakCalendar(posts){
  const postMap = {};
  posts.filter(p=>p.published).forEach(p=>{
    const d = p.date;
    if(!postMap[d]) postMap[d]=[];
    postMap[d].push(p.category);
  });

  const today = new Date();
  const start = new Date(today.getFullYear(),0,1);
  let cells = '';
  for(let i=0;i<365;i++){
    const d = new Date(start);
    d.setDate(start.getDate()+i);
    const key = d.toISOString().split('T')[0];
    const cats = postMap[key]||[];
    let cls = 's-empty';
    if(cats.length===1) cls = `s-${cats[0]}`;
    else if(cats.length>1) cls = 's-multi';
    const label = cats.length ? `${key}: ${cats.join(', ')}` : key;
    cells += `<div class="s-cell ${cls}" title="${label}"></div>`;
  }

  const streak = calcStreak(postMap, today);

  return `
  <div style="background:var(--bg2);border:1px solid var(--border);border-radius:8px;padding:14px;">
    <div class="sb-label">posting streak</div>
    <div style="display:flex;justify-content:space-between;margin-bottom:8px;">
      <div style="font-family:var(--font-mono);font-size:8px;color:var(--purple);">current: <strong>${streak}</strong> days</div>
      <div style="font-family:var(--font-mono);font-size:7px;color:var(--text-dim);">${today.getFullYear()}</div>
    </div>
    <div class="streak-grid">${cells}</div>
    <div class="streak-legend">
      <div class="leg-item"><div class="leg-dot s-systems"></div><span class="leg-label">systems</span></div>
      <div class="leg-item"><div class="leg-dot s-dsa"></div><span class="leg-label">dsa</span></div>
      <div class="leg-item"><div class="leg-dot s-rant"></div><span class="leg-label">rant</span></div>
      <div class="leg-item"><div class="leg-dot s-daily-log"></div><span class="leg-label">log</span></div>
      <div class="leg-item"><div class="leg-dot s-milestone"></div><span class="leg-label">milestone</span></div>
      <div class="leg-item"><div class="leg-dot s-empty"></div><span class="leg-label">none</span></div>
    </div>
  </div>`;
}

function calcStreak(postMap, today){
  let streak=0, d=new Date(today);
  while(true){
    const key=d.toISOString().split('T')[0];
    if(postMap[key]&&postMap[key].length>0){streak++;d.setDate(d.getDate()-1);}
    else break;
  }
  return streak;
}

// ── ADMIN AUTH ───────────────────────────────────────────────
const ADMIN_PASS_HASH = 'changethis'; // replace after setup
function isAdmin(){return localStorage.getItem('snu_admin')==='true';}
function adminLogin(pass){
  // simple hash check - replace with bcrypt equiv or just hardcode hashed val
  if(pass===ADMIN_PASS_HASH||pass==='changethis'){
    localStorage.setItem('snu_admin','true');
    return true;
  }
  return false;
}
function adminLogout(){localStorage.removeItem('snu_admin');}

// ── GITHUB API SAVE ──────────────────────────────────────────
const GITHUB_TOKEN_KEY='snu_gh_token';
const GITHUB_REPO='SociallyNu/sociallynu.github.io'; // replace

async function githubSave(path, content, message='update post'){
  const token=localStorage.getItem(GITHUB_TOKEN_KEY);
  if(!token){alert('No GitHub token set. Go to admin settings.');return false;}
  const encoded=btoa(unescape(encodeURIComponent(JSON.stringify(content,null,2))));
  // get SHA of existing file if it exists
  let sha='';
  try{
    const r=await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${path}`,
      {headers:{'Authorization':`Bearer ${token}`}});
    if(r.ok){const d=await r.json();sha=d.sha;}
  }catch(e){}
  const body={message,content:encoded};
  if(sha) body.sha=sha;
  const res=await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${path}`,{
    method:'PUT',
    headers:{'Authorization':`Bearer ${token}`,'Content-Type':'application/json'},
    body:JSON.stringify(body)
  });
  return res.ok;
}

async function githubDelete(path, sha, message='delete post'){
  const token=localStorage.getItem(GITHUB_TOKEN_KEY);
  if(!token){alert('No GitHub token set.');return false;}
  const res=await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${path}`,{
    method:'DELETE',
    headers:{'Authorization':`Bearer ${token}`,'Content-Type':'application/json'},
    body:JSON.stringify({message,sha})
  });
  return res.ok;
}

// ── READING TIME ─────────────────────────────────────────────
function calcReadTime(html){
  const text=html.replace(/<[^>]+>/g,' ');
  const words=text.trim().split(/\s+/).length;
  return Math.max(1,Math.round(words/200));
}

// ── POST ID GEN ──────────────────────────────────────────────
function genId(){return String(Date.now()).slice(-6);}
