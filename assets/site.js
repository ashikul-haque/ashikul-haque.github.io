(function(){
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.links a').forEach(a=>{
    const href = (a.getAttribute('href') || '').toLowerCase();
    if(href === path) a.classList.add('active');
  });
  const y = new Date().getFullYear();
  const el = document.querySelector('[data-year]');
  if(el) el.textContent = y;
})();
