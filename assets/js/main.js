(() => {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('#nav-links');
  if (toggle && menu) {
    const close = () => { menu.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); toggle.setAttribute('aria-label','Open navigation menu'); };
    toggle.addEventListener('click', () => { const open = !menu.classList.contains('open'); menu.classList.toggle('open',open); toggle.setAttribute('aria-expanded',String(open)); toggle.setAttribute('aria-label',open ? 'Close navigation menu' : 'Open navigation menu'); });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click',close));
    document.addEventListener('keydown',e => {if(e.key==='Escape')close();});
    document.addEventListener('click',e => {if(!menu.contains(e.target)&&!toggle.contains(e.target))close();});
  }
  const year = document.querySelector('#year');
  if(year)year.textContent=String(new Date().getFullYear());
})();
