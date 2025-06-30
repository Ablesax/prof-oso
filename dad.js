/* mobile nav */
const nav = document.getElementById('nav');
document.getElementById('menu-toggle').addEventListener('click',()=>nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>nav.classList.remove('open')));

/* dynamic year in footer */
document.getElementById('year').textContent = new Date().getFullYear();

/* (optional) basic form handler */
document.getElementById('contact-form').addEventListener('submit',e=>{
  e.preventDefault();
  alert('Thanks! Your message has been sent ✅');
  e.target.reset();
});

