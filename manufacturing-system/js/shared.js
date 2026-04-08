// ── shared utilities ──────────────────────────────────────────
const tod = () => new Date().toISOString().slice(0, 10);
const dAgo = n => { const d = new Date(); d.setDate(d.getDate() - n); return d.toISOString().slice(0, 10); };
const dFrom = n => { const d = new Date(); d.setDate(d.getDate() + n); return d.toISOString().slice(0, 10); };
const rnd = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
const pick = arr => arr[Math.floor(Math.random() * arr.length)];
const dd = d => { const t = new Date(); t.setHours(0,0,0,0); const x = new Date(d); x.setHours(0,0,0,0); return Math.round((x - t) / 86400000); };

function saveKey(key, data) {
  try { localStorage.setItem(key, JSON.stringify(data)); } catch(e) {}
}
function loadKey(key) {
  try { return JSON.parse(localStorage.getItem(key) || 'null'); } catch(e) { return null; }
}

// ── nav highlight ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
});

// ── tab helper ────────────────────────────────────────────────
function switchTab(name, btn, prefix = 'panel-') {
  const parent = btn.closest('.tabs').parentElement;
  parent.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  parent.querySelectorAll('.panel').forEach(p => p.classList.remove('show'));
  const panel = parent.querySelector('#' + prefix + name);
  if (panel) panel.classList.add('show');
}
