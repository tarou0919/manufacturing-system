// Inject nav into every page
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.createElement('nav');
  nav.className = 'nav';
  nav.innerHTML = `
    <a class="nav-brand" href="index.html">製造管理</a>
    <div class="nav-links">
      <a class="nav-link" href="index.html">ダッシュボード</a>
      <a class="nav-link" href="quality.html">① 品質管理</a>
      <a class="nav-link" href="equipment.html">② 設備保全</a>
      <a class="nav-link" href="production.html">③ 生産実績</a>
      <a class="nav-link" href="schedule.html">④ スケジュール</a>
      <a class="nav-link" href="demo.html">デモデータ</a>
    </div>`;
  document.body.prepend(nav);

  // highlight active
  const page = location.pathname.split('/').pop() || 'index.html';
  nav.querySelectorAll('.nav-link').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
});
