
document.addEventListener('DOMContentLoaded',()=>{
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
  document.querySelectorAll('.role-tab').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.role-tab').forEach(b=>b.classList.remove('active'));
      document.querySelectorAll('.role-panel').forEach(p=>p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.target).classList.add('active');
    });
  });
});
