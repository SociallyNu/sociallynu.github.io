// ── CONFIG ───────────────────────────────────────────────────
const GITHUB_REPO = 'SociallyNu/sociallynu.github.io'; // ← change this
const ADMIN_PASSWORD = 'changethis'; // ← change before pushing
const GITHUB_TOKEN_KEY = 'snu_gh_token';

// ── GHOST SVGs ───────────────────────────────────────────────
const G = {
  base: (w=52,h=60) => _g(w,h,`
    <ellipse cx="36" cy="32" rx="25" ry="27" fill="#c4b0ff"/>
    <path d="M11 32 Q11 60 18 60 Q22 60 22 56 Q22 60 27 60 Q32 60 32 56 Q32 60 36 60 Q40 60 40 56 Q40 60 45 60 Q50 60 50 56 Q50 60 54 60 Q61 60 61 32 Z" fill="#c4b0ff"/>
    <text x="26" y="30" font-size="11" fill="#2a1f4a" font-weight="bold" font-family="monospace">×</text>
    <text x="38" y="30" font-size="11" fill="#2a1f4a" font-weight="bold" font-family="monospace">×</text>
    <ellipse cx="27" cy="37" rx="5" ry="3" fill="#f7a8c4" opacity="0.8"/>
    <ellipse cx="45" cy="37" rx="5" ry="3" fill="#f7a8c4" opacity="0.8"/>
    <ellipse cx="15" cy="16" rx="3" ry="7" fill="#c4b0ff" opacity="0.6" transform="rotate(-20 15 16)"/>
    <ellipse cx="57" cy="16" rx="3" ry="7" fill="#c4b0ff" opacity="0.6" transform="rotate(20 57 16)"/>`),
  exhausted: (w=28,h=32) => _g(w,h,`
    <ellipse cx="36" cy="32" rx="25" ry="27" fill="#c4b0ff"/>
    <path d="M11 32 Q11 60 18 60 Q22 60 22 56 Q22 60 27 60 Q32 60 32 56 Q32 60 36 60 Q40 60 40 56 Q40 60 45 60 Q50 60 50 56 Q50 60 54 60 Q61 60 61 32 Z" fill="#c4b0ff"/>
    <text x="26" y="30" font-size="11" fill="#2a1f4a" font-family="monospace">—</text>
    <text x="38" y="30" font-size="11" fill="#2a1f4a" font-family="monospace">—</text>
    <ellipse cx="27" cy="38" rx="5" ry="3" fill="#f7a8c4" opacity="0.7"/>
    <ellipse cx="45" cy="38" rx="5" ry="3" fill="#f7a8c4" opacity="0.7"/>
    <line x1="20" y1="14" x2="26" y2="20" stroke="#fcd34d" stroke-width="1.5"/>
    <line x1="52" y1="14" x2="46" y2="20" stroke="#fcd34d" stroke-width="1.5"/>`),
  uglycrying: (w=28,h=32) => _g(w,h,`
    <ellipse cx="36" cy="32" rx="25" ry="27" fill="#c4b0ff"/>
    <path d="M11 32 Q11 60 18 60 Q22 60 22 56 Q22 60 27 60 Q32 60 32 56 Q32 60 36 60 Q40 60 40 56 Q40 60 45 60 Q50 60 50 56 Q50 60 54 60 Q61 60 61 32 Z" fill="#c4b0ff"/>
    <text x="26" y="30" font-size="11" fill="#2a1f4a" font-family="monospace">×</text>
    <text x="38" y="30" font-size="11" fill="#2a1f4a" font-family="monospace">×</text>
    <path d="M30 43 Q36 39 42 43" stroke="#2a1f4a" stroke-width="2" fill="none"/>
    <ellipse cx="27" cy="37" rx="5" ry="3" fill="#f7a8c4" opacity="0.7"/>
    <ellipse cx="45" cy="37" rx="5" ry="3" fill="#f7a8c4" opacity="0.7"/>
    <ellipse cx="32" cy="47" rx="3" ry="5" fill="#a0c4f8" opacity="0.7"/>
    <ellipse cx="40" cy="50" rx="2.5" ry="4" fill="#a0c4f8" opacity="0.5"/>`),
  frustrated: (w=28,h=32) => _g(w,h,`
    <ellipse cx="36" cy="32" rx="25" ry="27" fill="#c4b0ff"/>
    <path d="M11 32 Q11 60 18 60 Q22 60 22 56 Q22 60 27 60 Q32 60 32 56 Q32 60 36 60 Q40 60 40 56 Q40 60 45 60 Q50 60 50 56 Q50 60 54 60 Q61 60 61 32 Z" fill="#c4b0ff"/>
    <text x="24" y="30" font-size="13" fill="#2a1f4a" font-family="monospace">×</text>
    <text x="38" y="30" font-size="13" fill="#2a1f4a" font-family="monospace">×</text>
    <path d="M29 44 Q36 40 43 44" stroke="#2a1f4a" stroke-width="2" fill="none"/>
    <ellipse cx="27" cy="37" rx="5" ry="3" fill="#f7a8c4" opacity="0.7"/>
    <ellipse cx="45" cy="37" rx="5" ry="3" fill="#f7a8c4" opacity="0.7"/>
    <line x1="20" y1="10" x2="24" y2="18" stroke="#fcd34d" stroke-width="1.5"/>
    <line x1="52" y1="10" x2="48" y2="18" stroke="#fcd34d" stroke-width="1.5"/>`),
  victory: (w=28,h=32) => _g(w,h,`
    <ellipse cx="36" cy="32" rx="25" ry="27" fill="#c4b0ff"/>
    <path d="M11 32 Q11 60 18 60 Q22 60 22 56 Q22 60 27 60 Q32 60 32 56 Q32 60 36 60 Q40 60 40 56 Q40 60 45 60 Q50 60 50 56 Q50 60 54 60 Q61 60 61 32 Z" fill="#c4b0ff"/>
    <text x="26" y="32" font-size="11" fill="#2a1f4a" font-family="monospace">^</text>
    <text x="38" y="32" font-size="11" fill="#2a1f4a" font-family="monospace">^</text>
    <path d="M29 42 Q36 47 43 42" stroke="#2a1f4a" stroke-width="2" fill="none"/>
    <text x="27" y="15" font-size="9" fill="#fcd34d" font-family="monospace">✦</text>
    <text x="41" y="13" font-size="7" fill="#fcd34d" font-family="monospace">✦</text>
    <ellipse cx="27" cy="37" rx="5" ry="3" fill="#f7a8c4" opacity="0.7"/>
    <ellipse cx="45" cy="37" rx="5" ry="3" fill="#f7a8c4" opacity="0.7"/>`),
  smirking: (w=28,h=32) => _g(w,h,`
    <ellipse cx="36" cy="32" rx="25" ry="27" fill="#c4b0ff"/>
    <path d="M11 32 Q11 60 18 60 Q22 60 22 56 Q22 60 27 60 Q32 60 32 56 Q32 60 36 60 Q40 60 40 56 Q40 60 45 60 Q50 60 50 56 Q50 60 54 60 Q61 60 61 32 Z" fill="#c4b0ff"/>
    <text x="26" y="32" font-size="11" fill="#2a1f4a" font-family="monospace">-</text>
    <text x="38" y="32" font-size="11" fill="#2a1f4a" font-family="monospace">^</text>
    <path d="M30 42 Q38 48 44 43" stroke="#2a1f4a" stroke-width="2" fill="none"/>
    <ellipse cx="27" cy="37" rx="5" ry="3" fill="#f7a8c4" opacity="0.7"/>
    <ellipse cx="45" cy="37" rx="5" ry="3" fill="#f7a8c4" opacity="0.7"/>`),
  skull: (w=28,h=32) => _g(w,h,`
    <ellipse cx="36" cy="32" rx="25" ry="27" fill="#9090b8"/>
    <path d="M11 32 Q11 60 18 60 Q22 60 22 56 Q22 60 27 60 Q32 60 32 56 Q32 60 36 60 Q40 60 40 56 Q40 60 45 60 Q50 60 50 56 Q50 60 54 60 Q61 60 61 32 Z" fill="#9090b8"/>
    <circle cx="28" cy="30" r="5" fill="#06080f" opacity="0.6"/>
    <circle cx="44" cy="30" r="5" fill="#06080f" opacity="0.6"/>
    <line x1="26" y1="44" x2="46" y2="44" stroke="#06080f" stroke-width="1.5"/>
    <line x1="30" y1="44" x2="30" y2="50" stroke="#06080f" stroke-width="1.5"/>
    <line x1="36" y1="44" x2="36" y2="50" stroke="#06080f" stroke-width="1.5"/>
    <line x1="42" y1="44" x2="42" y2="50" stroke="#06080f" stroke-width="1.5"/>`),
  // bonus council
  crash: (w=28,h=32) => _g(w,h,`
    <ellipse cx="36" cy="32" rx="25" ry="27" fill="#c4b0ff"/>
    <path d="M11 32 Q11 60 18 60 Q22 60 22 56 Q22 60 27 60 Q32 60 32 56 Q32 60 36 60 Q40 60 40 56 Q40 60 45 60 Q50 60 50 56 Q50 60 54 60 Q61 60 61 32 Z" fill="#c4b0ff"/>
    <text x="14" y="24" font-size="10" fill="#2a1f4a" font-family="monospace">@</text>
    <text x="42" y="24" font-size="10" fill="#2a1f4a" font-family="monospace">@</text>
    <path d="M28 42 Q36 38 44 42" stroke="#2a1f4a" stroke-width="2" fill="none"/>
    <ellipse cx="27" cy="37" rx="5" ry="3" fill="#f7a8c4" opacity="0.7"/>
    <ellipse cx="45" cy="37" rx="5" ry="3" fill="#f7a8c4" opacity="0.7"/>
    <line x1="18" y1="8" x2="24" y2="18" stroke="#fcd34d" stroke-width="2"/>
    <line x1="54" y1="8" x2="48" y2="18" stroke="#fcd34d" stroke-width="2"/>`),
  loop: (w=28,h=32) => _g(w,h,`
    <ellipse cx="36" cy="32" rx="25" ry="27" fill="#c4b0ff"/>
    <path d="M11 32 Q11 60 18 60 Q22 60 22 56 Q22 60 27 60 Q32 60 32 56 Q32 60 36 60 Q40 60 40 56 Q40 60 45 60 Q50 60 50 56 Q50 60 54 60 Q61 60 61 32 Z" fill="#c4b0ff"/>
    <text x="26" y="32" font-size="11" fill="#2a1f4a" font-family="monospace">-</text>
    <text x="38" y="32" font-size="11" fill="#2a1f4a" font-family="monospace">-</text>
    <path d="M29 42 Q36 47 43 42" stroke="#2a1f4a" stroke-width="2" fill="none"/>
    <ellipse cx="27" cy="37" rx="5" ry="3" fill="#f7a8c4" opacity="0.7"/>
    <ellipse cx="45" cy="37" rx="5" ry="3" fill="#f7a8c4" opacity="0.7"/>
    <rect x="26" y="8" width="20" height="13" rx="2" fill="#4a3080" opacity="0.8"/>
    <text x="29" y="18" font-size="7" fill="#c4b0ff" font-family="monospace">&gt;_</text>`),
  glitch: (w=28,h=32) => _g(w,h,`
    <ellipse cx="36" cy="32" rx="25" ry="27" fill="#c4b0ff"/>
    <path d="M11 32 Q11 60 18 60 Q22 60 22 56 Q22 60 27 60 Q32 60 32 56 Q32 60 36 60 Q40 60 40 56 Q40 60 45 60 Q50 60 50 56 Q50 60 54 60 Q61 60 61 32 Z" fill="#c4b0ff"/>
    <text x="23" y="30" font-size="14" fill="#2a1f4a" font-family="monospace">%</text>
    <text x="38" y="30" font-size="14" fill="#2a1f4a" font-family="monospace">$</text>
    <ellipse cx="25" cy="37" rx="6" ry="3" fill="#f7a8c4" opacity="0.7"/>
    <ellipse cx="47" cy="37" rx="6" ry="3" fill="#f7a8c4" opacity="0.7"/>
    <line x1="14" y1="6" x2="22" y2="16" stroke="#f472b6" stroke-width="1.5"/>
    <line x1="58" y1="6" x2="50" y2="16" stroke="#fcd34d" stroke-width="1.5"/>`),
  null: (w=28,h=32) => _g(w,h,`
    <ellipse cx="36" cy="32" rx="25" ry="27" fill="#c4b0ff"/>
    <path d="M11 32 Q11 60 18 60 Q22 60 22 56 Q22 60 27 60 Q32 60 32 56 Q32 60 36 60 Q40 60 40 56 Q40 60 45 60 Q50 60 50 56 Q50 60 54 60 Q61 60 61 32 Z" fill="#c4b0ff"/>
    <line x1="24" y1="28" x2="34" y2="28" stroke="#2a1f4a" stroke-width="2"/>
    <line x1="38" y1="28" x2="48" y2="28" stroke="#2a1f4a" stroke-width="2"/>
    <line x1="28" y1="38" x2="44" y2="38" stroke="#2a1f4a" stroke-width="1.5"/>
    <ellipse cx="27" cy="35" rx="5" ry="3" fill="#f7a8c4" opacity="0.5"/>
    <ellipse cx="45" cy="35" rx="5" ry="3" fill="#f7a8c4" opacity="0.5"/>
    <text x="50" y="18" font-size="8" fill="#4a5280" font-family="monospace">z</text>
    <text x="55" y="12" font-size="6" fill="#3a4060" font-family="monospace">z</text>`),
  bug: (w=28,h=32) => _g(w,h,`
    <ellipse cx="36" cy="32" rx="25" ry="27" fill="#c4b0ff"/>
    <path d="M11 32 Q11 60 18 60 Q22 60 22 56 Q22 60 27 60 Q32 60 32 56 Q32 60 36 60 Q40 60 40 56 Q40 60 45 60 Q50 60 50 56 Q50 60 54 60 Q61 60 61 32 Z" fill="#c4b0ff"/>
    <text x="24" y="30" font-size="12" fill="#2a1f4a" font-family="monospace">^</text>
    <text x="38" y="30" font-size="12" fill="#2a1f4a" font-family="monospace">^</text>
    <path d="M28 41 Q36 46 44 41" stroke="#2a1f4a" stroke-width="2" fill="none"/>
    <ellipse cx="27" cy="37" rx="5" ry="3" fill="#f7a8c4" opacity="0.7"/>
    <ellipse cx="45" cy="37" rx="5" ry="3" fill="#f7a8c4" opacity="0.7"/>
    <ellipse cx="20" cy="12" rx="5" ry="4" fill="#a78bfa" opacity="0.5"/>
    <ellipse cx="52" cy="12" rx="5" ry="4" fill="#a78bfa" opacity="0.5"/>`),
  trace: (w=28,h=32) => _g(w,h,`
    <ellipse cx="36" cy="32" rx="25" ry="27" fill="#c4b0ff"/>
    <path d="M11 32 Q11 60 18 60 Q22 60 22 56 Q22 60 27 60 Q32 60 32 56 Q32 60 36 60 Q40 60 40 56 Q40 60 45 60 Q50 60 50 56 Q50 60 54 60 Q61 60 61 32 Z" fill="#c4b0ff"/>
    <text x="26" y="32" font-size="11" fill="#2a1f4a" font-family="monospace">^</text>
    <text x="38" y="32" font-size="11" fill="#2a1f4a" font-family="monospace">^</text>
    <path d="M29 42 Q36 47 43 42" stroke="#2a1f4a" stroke-width="2" fill="none"/>
    <ellipse cx="27" cy="37" rx="5" ry="3" fill="#f7a8c4" opacity="0.7"/>
    <ellipse cx="45" cy="37" rx="5" ry="3" fill="#f7a8c4" opacity="0.7"/>
    <text x="27" y="15" font-size="9" fill="#fcd34d" font-family="monospace">✦</text>
    <text x="40" y="13" font-size="7" fill="#fcd34d" font-family="monospace">✦</text>
    <text x="18" y="20" font-size="7" fill="#fcd34d" font-family="monospace">✦</text>`),
  oops: (w=28,h=32) => _g(w,h,`
    <ellipse cx="36" cy="32" rx="25" ry="27" fill="#c4b0ff" opacity="0.85"/>
    <path d="M11 32 Q11 60 18 60 Q22 60 22 56 Q22 60 27 60 Q32 60 32 56 Q32 60 36 60 Q40 60 40 56 Q40 60 45 60 Q50 60 50 56 Q50 60 54 60 Q61 60 61 32 Z" fill="#c4b0ff" opacity="0.85"/>
    <text x="27" y="30" font-size="11" fill="#2a1f4a" font-family="monospace">o</text>
    <text x="39" y="30" font-size="11" fill="#2a1f4a" font-family="monospace">o</text>
    <path d="M30 42 Q36 46 42 42" stroke="#2a1f4a" stroke-width="1.5" fill="none"/>
    <ellipse cx="27" cy="37" rx="4" ry="2.5" fill="#f7a8c4" opacity="0.6"/>
    <ellipse cx="45" cy="37" rx="4" ry="2.5" fill="#f7a8c4" opacity="0.6"/>`),
  lag: (w=28,h=32) => _g(w,h,`
    <ellipse cx="36" cy="32" rx="25" ry="27" fill="#c4b0ff" opacity="0.85"/>
    <path d="M11 32 Q11 60 18 60 Q22 60 22 56 Q22 60 27 60 Q32 60 32 56 Q32 60 36 60 Q40 60 40 56 Q40 60 45 60 Q50 60 50 56 Q50 60 54 60 Q61 60 61 32 Z" fill="#c4b0ff" opacity="0.85"/>
    <line x1="24" y1="29" x2="34" y2="29" stroke="#2a1f4a" stroke-width="2"/>
    <line x1="38" y1="29" x2="48" y2="29" stroke="#2a1f4a" stroke-width="2"/>
    <line x1="28" y1="39" x2="44" y2="39" stroke="#2a1f4a" stroke-width="1.5"/>
    <text x="50" y="20" font-size="9" fill="#4a5280" font-family="monospace">z</text>
    <text x="55" y="14" font-size="7" fill="#3a4060" font-family="monospace">z</text>
    <text x="58" y="10" font-size="5" fill="#2a3050" font-family="monospace">z</text>`),
  gremlin: (w=28,h=32) => _g(w,h,`
    <ellipse cx="36" cy="32" rx="25" ry="27" fill="#c4b0ff" opacity="0.85"/>
    <path d="M11 32 Q11 60 18 60 Q22 60 22 56 Q22 60 27 60 Q32 60 32 56 Q32 60 36 60 Q40 60 40 56 Q40 60 45 60 Q50 60 50 56 Q50 60 54 60 Q61 60 61 32 Z" fill="#c4b0ff" opacity="0.85"/>
    <text x="23" y="30" font-size="13" fill="#2a1f4a" font-family="monospace">&gt;</text>
    <text x="38" y="30" font-size="13" fill="#2a1f4a" font-family="monospace">&lt;</text>
    <path d="M27 44 Q36 50 45 44" stroke="#2a1f4a" stroke-width="2" fill="none"/>
    <line x1="14" y1="8" x2="20" y2="16" stroke="#f472b6" stroke-width="1.5"/>
    <line x1="58" y1="8" x2="52" y2="16" stroke="#f472b6" stroke-width="1.5"/>`),
  blink: (w=28,h=32) => _g(w,h,`
    <ellipse cx="36" cy="32" rx="25" ry="27" fill="#c4b0ff" opacity="0.85"/>
    <path d="M11 32 Q11 60 18 60 Q22 60 22 56 Q22 60 27 60 Q32 60 32 56 Q32 60 36 60 Q40 60 40 56 Q40 60 45 60 Q50 60 50 56 Q50 60 54 60 Q61 60 61 32 Z" fill="#c4b0ff" opacity="0.85"/>
    <text x="26" y="31" font-size="11" fill="#2a1f4a" font-family="monospace">*</text>
    <text x="38" y="31" font-size="11" fill="#2a1f4a" font-family="monospace">*</text>
    <path d="M29 42 Q36 47 43 42" stroke="#2a1f4a" stroke-width="2" fill="none"/>
    <ellipse cx="27" cy="37" rx="5" ry="3" fill="#f7a8c4" opacity="0.7"/>
    <ellipse cx="45" cy="37" rx="5" ry="3" fill="#f7a8c4" opacity="0.7"/>`)
};

function _g(w, h, inner) {
  return `<svg width="${w}" height="${h}" viewBox="0 0 72 82" class="nv-ghost-svg">${inner}</svg>`;
}

// mood → ghost fn map
const MOOD_MAP = {
  exhausted: G.exhausted, uglycrying: G.uglycrying, frustrated: G.frustrated,
  victory: G.victory, smirking: G.smirking, skull: G.skull,
  crash: G.crash, loop: G.loop, glitch: G.glitch, null: G.null,
  bug: G.bug, trace: G.trace, oops: G.oops, lag: G.lag,
  gremlin: G.gremlin, blink: G.blink
};

function getMoodGhost(mood, w=28, h=32) {
  return (MOOD_MAP[mood] || G.exhausted)(w, h);
}

// category gradient backgrounds for card thumbs
const CAT_GRADIENTS = {
  systems: 'background:linear-gradient(135deg,#18142a 0%,#241a42 100%)',
  dsa: 'background:linear-gradient(135deg,#1e1218 0%,#2e1c22 100%)',
  rant: 'background:linear-gradient(135deg,#1e1608 0%,#2e2010 100%)',
  'daily-log': 'background:linear-gradient(135deg,#101808 0%,#182210 100%)',
  milestone: 'background:linear-gradient(135deg,#0a1818 0%,#102424 100%)',
};
const CAT_ICON = { systems:'∵', dsa:'⟨⟩', rant:'!!', 'daily-log':'◦', milestone:'✦' };

// ── UTILS ─────────────────────────────────────────────────────
function formatDate(d) {
  return new Date(d).toLocaleDateString('en-US',{month:'short',day:'numeric'});
}
function calcReadTime(html) {
  const w = html.replace(/<[^>]+>/g,' ').trim().split(/\s+/).length;
  return Math.max(1, Math.round(w/200));
}
function genId() { return String(Date.now()).slice(-6); }

// ── FETCH ─────────────────────────────────────────────────────
async function fetchPosts() {
  const r = await fetch('/posts/index.json?v='+Date.now());
  return r.json();
}
async function fetchPost(file) {
  const r = await fetch(`/${file}?v=`+Date.now());
  return r.json();
}
async function fetchAbout() {
  try {
    const r = await fetch('/posts/about.json?v='+Date.now());
    if (r.ok) return r.json();
  } catch(e) {}
  return { prose:'', grinding:[], reading:[], moods:['exhausted','uglycrying'], updated:'' };
}

// ── NAV ───────────────────────────────────────────────────────
function renderNav(active='') {
  return `<nav class="nav">
    <a href="/index.html" class="nav-logo">SociallyNu<em>.</em></a>
    <div class="nav-links">
      <a href="/blog.html" class="${active==='blog'?'active':''}">blog</a>
      <a href="/about.html" class="${active==='about'?'active':''}">about</a>
      <a href="/nuonverse.html" class="${active==='nuonverse'?'active':''}">nuonverse</a>
    </div>
  </nav>`;
}

// ── SIDEBAR ───────────────────────────────────────────────────
async function renderSidebar(posts, moods=['exhausted','uglycrying']) {
  const counts = {};
  posts.filter(p=>p.published).forEach(p=>{ counts[p.category]=(counts[p.category]||0)+1; });
  const cats = ['systems','dsa','rant','daily-log','milestone'];
  const moodNames = {
    exhausted:'Exhausted Nuon', uglycrying:'Ugly Cry Nuon', frustrated:'Frustrated Nuon',
    victory:'Victory Nuon', smirking:'Smirking Nuon', skull:'Skull Nuon',
    crash:'CrashNuon', loop:'LoopNuon', glitch:'GlitchNuon', null:'NullNuon',
    bug:'BugNuon', trace:'TraceNuon', oops:'OopsNuon', lag:'LagNuon',
    gremlin:'GremlinNuon', blink:'BlinkNuon'
  };

  return `<aside class="sidebar">
    <div class="pfp-wrap">
      <div class="pfp" id="pfpEl">🐱</div>
    </div>
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
      ${cats.map(c=>`
        <div class="tag-row" onclick="location='/blog.html?tag=${c}'">
          <span class="tag-name tc-${c}">#${c}</span>
          <span class="tag-count">${String(counts[c]||0).padStart(2,'0')}</span>
        </div>`).join('')}
    </div>
    <div class="mood-wrap">
      <div class="sb-label">today's mood</div>
      <div class="mood-ghosts">
        ${moods.map(m=>`
          <div class="mood-ghost-item">
            <div class="mood-tip">${moodNames[m]||m}</div>
            ${getMoodGhost(m,40,46)}
          </div>`).join('')}
      </div>
    </div>
  </aside>`;
}

// ── POST CARD ─────────────────────────────────────────────────
function renderPostCard(p, isPinned=false, size='normal') {
  const thumb = p.thumbnail
    ? `<img src="${p.thumbnail}" alt="" loading="lazy"/>`
    : `<div class="card-thumb-gradient" style="${CAT_GRADIENTS[p.category]||CAT_GRADIENTS.systems}">
        <span style="font-family:var(--font-mono);font-size:28px;color:rgba(255,255,255,0.15);">${CAT_ICON[p.category]||'∵'}</span>
      </div>`;

  return `
  <div class="post-card${isPinned?' pinned-card-item':''}" onclick="location='/post.html?id=${p.id}'">
    <div class="card-thumb" style="position:relative;">
      ${thumb}
      ${isPinned?`<div class="tape-strip"></div><div class="card-pin-badge">📌 pinned</div>`:''}
    </div>
    <div class="card-body">
      <div><span class="card-tag card-tag-${p.category}">${p.category}</span></div>
      <div class="card-title">${p.title}</div>
      ${p.excerpt?`<div class="card-excerpt">${p.excerpt}</div>`:''}
      <div class="card-footer">
        <div class="card-meta">
          <span>${formatDate(p.date)}</span>
          <span>${p.readTime} min read</span>
        </div>
        <div class="card-ghost">${getMoodGhost(p.mood,32,36)}</div>
      </div>
    </div>
  </div>`;
}

// ── STREAK CALENDAR ───────────────────────────────────────────
function renderStreakCalendar(posts) {
  const postMap = {};
  posts.filter(p=>p.published).forEach(p=>{
    if(!postMap[p.date]) postMap[p.date]=[];
    postMap[p.date].push(p.category);
  });
  const today = new Date();
  const start = new Date(today.getFullYear(),0,1);
  let cells='', streak=0;
  for(let i=0;i<365;i++){
    const d = new Date(start); d.setDate(start.getDate()+i);
    const key = d.toISOString().split('T')[0];
    const cats = postMap[key]||[];
    let cls = 's-empty';
    if(cats.length===1) cls=`s-${cats[0]}`;
    else if(cats.length>1) cls='s-multi';
    cells += `<div class="s-cell ${cls}" title="${key}${cats.length?' · '+cats.join(', '):''}"></div>`;
  }
  // calc streak
  let sd=new Date(today);
  while(true){
    const k=sd.toISOString().split('T')[0];
    if(postMap[k]?.length){streak++;sd.setDate(sd.getDate()-1);}else break;
  }
  return `<div style="background:var(--bg2);border:1px solid var(--border2);border-radius:var(--radius);padding:14px;">
    <div class="sb-label">posting streak</div>
    <div style="display:flex;justify-content:space-between;margin-bottom:8px;">
      <span style="font-family:var(--font-mono);font-size:11px;color:var(--purple);font-weight:700;">current: ${streak} days</span>
      <span style="font-family:var(--font-mono);font-size:9px;color:var(--t4);">${today.getFullYear()}</span>
    </div>
    <div class="streak-grid">${cells}</div>
    <div class="streak-legend">
      <div class="leg-item"><div class="leg-dot s-systems"></div><span class="leg-label">systems</span></div>
      <div class="leg-item"><div class="leg-dot s-dsa"></div><span class="leg-label">dsa</span></div>
      <div class="leg-item"><div class="leg-dot s-rant"></div><span class="leg-label">rant</span></div>
      <div class="leg-item"><div class="leg-dot s-daily-log"></div><span class="leg-label">log</span></div>
      <div class="leg-item"><div class="leg-dot s-milestone"></div><span class="leg-label">milestone</span></div>
    </div>
  </div>`;
}

// ── STARS ─────────────────────────────────────────────────────
function initStars() {
  const canvas = document.getElementById('starCanvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let stars = [];
  function resize() { canvas.width=window.innerWidth; canvas.height=window.innerHeight; }
  function mkStars() {
    stars = Array.from({length:120},()=>({
      x:Math.random()*canvas.width, y:Math.random()*canvas.height,
      r:Math.random()*1.2+0.2, alpha:Math.random(),
      speed:Math.random()*0.005+0.002, phase:Math.random()*Math.PI*2
    }));
  }
  function draw(t) {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    stars.forEach(s=>{
      s.alpha = 0.2 + 0.5*(Math.sin(t*s.speed+s.phase)+1)/2;
      ctx.beginPath();
      ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(180,170,255,${s.alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  resize(); mkStars();
  window.addEventListener('resize',()=>{resize();mkStars();});
  requestAnimationFrame(draw);
}

// ── CHAOS ANIMATION ───────────────────────────────────────────
function initChaosAnimation() {
  const els = document.querySelectorAll('.chaos-q');
  els.forEach((el,i)=>{
    let tick=0, dir=1, angle=parseFloat(el.dataset.r||0);
    const speed = 0.003 + i*0.0008;
    const amp = 1.5 + Math.random()*1.5;
    function anim() {
      tick += speed;
      const a = angle + Math.sin(tick)*amp;
      const y = parseFloat(el.dataset.y||0) + Math.sin(tick*0.7+i)*4;
      el.style.transform = `rotate(${a}deg)`;
      el.style.top = y+'px';
      requestAnimationFrame(anim);
    }
    el.dataset.r = el.style.transform?.match(/rotate\(([^)]+)deg\)/)?.[1]||0;
    el.dataset.y = parseInt(el.style.top)||0;
    requestAnimationFrame(anim);
  });
}

// ── ADMIN AUTH ────────────────────────────────────────────────
function isAdmin() { return localStorage.getItem('snu_admin')==='true'; }
function adminLogin(pass) {
  if(pass===ADMIN_PASSWORD) {
    localStorage.setItem('snu_admin','true');
    return true;
  }
  return false;
}
function adminLogout() {
  localStorage.removeItem('snu_admin');
}
function getToken() { return localStorage.getItem(GITHUB_TOKEN_KEY)||''; }

// ── GITHUB API ────────────────────────────────────────────────
async function githubSave(path, content, message='update') {
  const token = getToken();
  if(!token) { alert('GitHub token not set. Enter it at the login screen.'); return false; }

  let encoded, isRaw = content && content.__raw;
  if(isRaw) {
    encoded = content.data;
  } else {
    encoded = btoa(unescape(encodeURIComponent(JSON.stringify(content,null,2))));
  }

  let sha='';
  try {
    const r = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${path}`,
      {headers:{Authorization:`Bearer ${token}`}});
    if(r.ok) sha = (await r.json()).sha;
  } catch(e) {}

  const body = {message, content:encoded};
  if(sha) body.sha = sha;

  const res = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${path}`,{
    method:'PUT',
    headers:{Authorization:`Bearer ${token}`,'Content-Type':'application/json'},
    body:JSON.stringify(body)
  });
  return res.ok;
}

async function githubDelete(path, message='delete') {
  const token = getToken();
  if(!token) { alert('GitHub token not set.'); return false; }
  let sha='';
  try {
    const r = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${path}`,
      {headers:{Authorization:`Bearer ${token}`}});
    if(r.ok) sha = (await r.json()).sha;
  } catch(e) { return false; }
  const res = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${path}`,{
    method:'DELETE',
    headers:{Authorization:`Bearer ${token}`,'Content-Type':'application/json'},
    body:JSON.stringify({message, sha})
  });
  return res.ok;
}
