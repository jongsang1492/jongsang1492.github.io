const revealEls=[...document.querySelectorAll('.reveal')];
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');e.target.classList.add('visible')}}),{threshold:.12});
revealEls.forEach(el=>io.observe(el));
let lb=document.querySelector('.lightbox');
if(!lb){lb=document.createElement('div');lb.className='lightbox';lb.innerHTML='<button>Close</button><img alt="expanded project image">';document.body.appendChild(lb)}
document.querySelectorAll('.gallery img,.doc-card img,.gallery-item img').forEach(img=>{img.addEventListener('click',()=>{lb.querySelector('img').src=img.src;lb.classList.add('open')})});
document.addEventListener('click',e=>{if(e.target.matches('.lightbox, .lightbox button'))lb.classList.remove('open')});
