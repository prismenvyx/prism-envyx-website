document.querySelectorAll('[data-menu]').forEach(btn=>{btn.addEventListener('click',()=>{const nav=document.querySelector('.navlinks');nav.style.display=nav.style.display==='flex'?'':'flex';if(nav.style.display==='flex'){nav.style.position='absolute';nav.style.top='76px';nav.style.left='0';nav.style.right='0';nav.style.background='#fff';nav.style.padding='20px';nav.style.flexDirection='column';nav.style.borderBottom='1px solid #ddd3ca'}})});

// Shop category filtering and search
if(document.body && document.body.hasAttribute('data-shop-page')){
 const cards=[...document.querySelectorAll('.product-card')];
 const sections=[...document.querySelectorAll('[data-section-category]')];
 const tabs=[...document.querySelectorAll('[data-filter]')];
 const search=document.querySelector('[data-shop-search]');
 const count=document.querySelector('[data-shop-count]');
 const empty=document.querySelector('[data-empty-results]');
 let active=new URLSearchParams(location.search).get('category')||'all';
 const apply=()=>{const q=(search?.value||'').trim().toLowerCase();let visible=0;
  tabs.forEach(t=>t.classList.toggle('active',t.dataset.filter===active));
  cards.forEach(c=>{const okCat=active==='all'||c.dataset.category===active;const okText=!q||c.dataset.name.includes(q);const show=okCat&&okText;c.hidden=!show;if(show)visible++});
  sections.forEach(s=>{const any=[...s.querySelectorAll('.product-card')].some(c=>!c.hidden);s.hidden=!any});
  if(count)count.textContent=visible+' listing'+(visible===1?'':'s'); if(empty)empty.hidden=visible!==0;
  if(history.replaceState){const u=new URL(location.href);if(active==='all')u.searchParams.delete('category');else u.searchParams.set('category',active);history.replaceState({},'',u)}
 };
 tabs.forEach(t=>t.addEventListener('click',()=>{active=t.dataset.filter;apply();document.querySelector('.shop-controls')?.scrollIntoView({behavior:'smooth',block:'start'})}));
 search?.addEventListener('input',apply); apply();
}

// Prefill booking enquiry from service/product links
const params=new URLSearchParams(location.search);
const requested=params.get('service')||params.get('product');
const serviceField=document.querySelector('select[name="service"]');
if(requested&&serviceField){const option=[...serviceField.options].find(o=>o.value.toLowerCase()===requested.toLowerCase()||o.textContent.toLowerCase()===requested.toLowerCase());if(option)serviceField.value=option.value;}
