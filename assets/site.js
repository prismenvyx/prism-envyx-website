
document.querySelectorAll('[data-menu]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const nav=document.querySelector('.navlinks');
    nav.style.display = nav.style.display==='flex' ? '' : 'flex';
    if(nav.style.display==='flex'){nav.style.position='absolute';nav.style.top='76px';nav.style.left='0';nav.style.right='0';nav.style.background='#fff';nav.style.padding='20px';nav.style.flexDirection='column';nav.style.borderBottom='1px solid #ddd3ca'}
  });
});
