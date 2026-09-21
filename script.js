// IronForge - script.js
const products=[
  {id:15,title:"OPONDO Performance Tee - Navy Blue",price:35,oldPrice:45,category:"apparel",badge:"Featured",img:"images/photo.webp"},
  {id:1,title:"Power Rack Pro",price:899,oldPrice:1099,category:"equipment",badge:"Best Seller",img:"https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=600&q=80"},
  {id:2,title:"Olympic Barbell 20kg",price:249,category:"equipment",img:"images/Olympic Barbell 20kg.jpg"},
  {id:3,title:"Adjustable Bench",price:329,category:"equipment",img:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80"},
  {id:4,title:"Performance Tee - Black",price:35,category:"apparel",badge:"New",img:"https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80"},
  {id:5,title:"Training Shorts",price:42,category:"apparel",img:"https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=600&q=80"},
  {id:6,title:"Women's Leggings",price:58,category:"apparel",img:"https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&q=80"},
  // --- Gym Equipment ---
  {id:7,title:"Hex Dumbbell Set 20kg",price:399,oldPrice:499,category:"equipment",badge:"Save $100",img:"images/Hex Dumbbell Set 20kg.jpg"},
  {id:8,title:"Kettlebell 24kg - Cast Iron",price:89,category:"equipment",img:"https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&q=80"},
  {id:9,title:"Resistance Bands Set (5 Levels)",price:29,category:"equipment",badge:"New",img:"https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=600&q=80"},
  {id:10,title:"Foam Plyo Box - 3-in-1",price:149,category:"equipment",img:"https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=600&q=80"},
  // --- Gym Attire ---
  {id:11,title:"Gym Hoodie - Heavyweight Black",price:65,category:"apparel",img:"images/Gym Hoodie - Heavyweight Black.png"},
  {id:12,title:"Compression Tank - Men's",price:32,category:"apparel",badge:"Best Seller",img:"https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80"},
  {id:13,title:"Women's Sports Bra - High Support",price:38,category:"apparel",img:"images/Women's Sports Bra - High Support.jpg"},
  {id:14,title:"Training Joggers - Tapered Fit",price:55,oldPrice:70,category:"apparel",img:"https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80"},
  {id:16,title:"OPONDO Classic Tee - Olive",price:38,category:"apparel",badge:"Local",img:"images/photo1.png"},
  {id:17,title:"OPONDO Stringer Vest - Black",price:32,category:"apparel",badge:"Local",img:"images/photo2.png"},
  // --- Additional Gym Equipment ---
  {id:18,title:"Squat Rack with Safety Arms",price:649,oldPrice:799,category:"equipment",badge:"New",img:"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80"},
  {id:19,title:"Treadmill Pro X1 - Foldable",price:1199,oldPrice:1499,category:"equipment",badge:"Best Seller",img:"https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&q=80"},
  {id:20,title:"Stationary Spin Bike",price:499,category:"equipment",img:"https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?w=600&q=80"},
  {id:21,title:"Rowing Machine - Air Resistance",price:749,oldPrice:899,category:"equipment",img:"https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=600&q=80"},
  {id:22,title:"Leg Press Machine",price:1299,category:"equipment",badge:"Heavy Duty",img:"https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80"},
  {id:23,title:"Cable Crossover Station",price:1599,oldPrice:1899,category:"equipment",img:"https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=600&q=80"},
  {id:24,title:"Pull-Up Power Tower",price:279,category:"equipment",badge:"New",img:"https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&q=80"},
  {id:25,title:"Battle Rope 15m x 38mm",price:79,category:"equipment",img:"https://images.unsplash.com/photo-1623874106686-5be2b325c8f1?w=600&q=80"},
  {id:26,title:"Weight Plates Set 100kg",price:349,oldPrice:429,category:"equipment",img:"https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=600&q=80"},

];
const testimonials=[
  {name:"Alex M.",text:"IronForge equipment transformed my home gym. Rock solid quality.",stars:5},
  {name:"Sofia R.",text:"The apparel is so comfortable and durable - perfect for heavy sessions.",stars:5},
  {name:"James K.",text:"Fast shipping and amazing support. Highly recommend!",stars:5},
];

let cart=JSON.parse(localStorage.getItem('cart')||'[]');
let currentFilter='all';
let tIndex=0;

// Render products
function renderProducts(){
  const grid=document.getElementById('productsGrid');
  const filtered=currentFilter==='all'?products:products.filter(p=>p.category===currentFilter);
  grid.innerHTML=filtered.map(p=>`
    <article class="product-card">
      <div class="product-image">
        <img src="${p.img}" alt="${p.title}" loading="lazy">
        ${p.badge?`<span class="badge">${p.badge}</span>`:''}
      </div>
      <div class="product-body">
        <h3 class="product-title">${p.title}</h3>
        <p class="product-price">$${p.price}${p.oldPrice?` <del>$${p.oldPrice}</del>`:''}</p>
        <div class="product-actions">
          <button class="btn-sm btn-add" data-id="${p.id}"><i class="fa-solid fa-cart-plus"></i> Add to Cart</button>
        </div>
      </div>
    </article>`).join('');
  grid.querySelectorAll('.btn-add').forEach(b=>b.addEventListener('click',()=>addToCart(+b.dataset.id)));
}

function addToCart(id){
  const item=cart.find(c=>c.id===id);
  if(item) item.qty++; else cart.push({id,qty:1});
  localStorage.setItem('cart',JSON.stringify(cart));
  updateCartCount(); renderCart(); showToast(); openCart();
}
function updateCartCount(){
  const n=cart.reduce((s,c)=>s+c.qty,0);
  document.getElementById('cartCount').textContent=n;
  const dc=document.getElementById('cartDrawerCount');
  if(dc) dc.textContent=n;
}
function showToast(){
  const t=document.getElementById('cartToast');
  t.hidden=false; t.classList.add('show');
  setTimeout(()=>{t.classList.remove('show'); setTimeout(()=>t.hidden=true,300)},2000);
}
function renderCart(){
  const body=document.getElementById('cartDrawerBody');
  const subtotalEl=document.getElementById('cartSubtotal');
  const footer=document.getElementById('cartDrawerFooter');
  if(!body) return;
  if(!cart.length){
    body.innerHTML=`<div class="cart-empty"><i class="fa-solid fa-cart-shopping"></i><p>Your cart is empty.</p><a href="#shop" class="btn btn-primary" style="margin-top:12px" id="emptyShopBtn">Start Shopping</a></div>`;
    subtotalEl.textContent='$0.00';
    footer.style.display='none';
    document.getElementById('emptyShopBtn')?.addEventListener('click',closeCart);
    return;
  }
  footer.style.display='grid';
  let total=0;
  body.innerHTML=cart.map(c=>{
    const p=products.find(x=>x.id===c.id);
    total+=p.price*c.qty;
    return `<div class="cart-item">
      <img src="${p.img}" alt="${p.title}">
      <div class="cart-item-info">
        <span class="cart-item-title">${p.title}</span>
        <span class="cart-item-price">$${p.price} × ${c.qty} = $${(p.price*c.qty).toFixed(2)}</span>
        <div class="cart-item-actions">
          <button class="qty-btn" data-dec="${c.id}">−</button>
          <span class="cart-item-qty">${c.qty}</span>
          <button class="qty-btn" data-inc="${c.id}">+</button>
          <button class="cart-remove" data-remove="${c.id}"><i class="fa-solid fa-trash"></i> Remove</button>
        </div>
      </div>
    </div>`;
  }).join('');
  subtotalEl.textContent=`$${total.toFixed(2)}`;
  body.querySelectorAll('[data-inc]').forEach(b=>b.addEventListener('click',()=>changeQty(+b.dataset.inc,1)));
  body.querySelectorAll('[data-dec]').forEach(b=>b.addEventListener('click',()=>changeQty(+b.dataset.dec,-1)));
  body.querySelectorAll('[data-remove]').forEach(b=>b.addEventListener('click',()=>removeFromCart(+b.dataset.remove)));
}
function changeQty(id,delta){
  const item=cart.find(c=>c.id===id);
  if(!item) return;
  item.qty+=delta;
  if(item.qty<=0) cart=cart.filter(c=>c.id!==id);
  localStorage.setItem('cart',JSON.stringify(cart));
  updateCartCount(); renderCart();
}
function removeFromCart(id){
  cart=cart.filter(c=>c.id!==id);
  localStorage.setItem('cart',JSON.stringify(cart));
  updateCartCount(); renderCart();
}
function openCart(){
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartDrawer').setAttribute('aria-hidden','false');
  const ov=document.getElementById('cartOverlay');
  ov.hidden=false; requestAnimationFrame(()=>ov.classList.add('show'));
  document.body.style.overflow='hidden';
}
function closeCart(){
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartDrawer').setAttribute('aria-hidden','true');
  const ov=document.getElementById('cartOverlay');
  ov.classList.remove('show');
  setTimeout(()=>ov.hidden=true,300);
  document.body.style.overflow='';
}

// Filter tabs
document.querySelectorAll('.filter-tab').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.filter-tab').forEach(b=>{b.classList.remove('active');b.setAttribute('aria-selected','false')});
    btn.classList.add('active');btn.setAttribute('aria-selected','true');
    currentFilter=btn.dataset.filter;
    renderProducts();
  });
});

// Testimonials
function renderTestimonials(){
  const track=document.getElementById('testimonialsTrack');
  const dots=document.getElementById('carouselDots');
  track.innerHTML=testimonials.map(t=>`
    <div class="testimonial"><div class="testimonial-card">
      <div class="stars">${'★'.repeat(t.stars)}</div>
      <p>"${t.text}"</p><strong>— ${t.name}</strong>
    </div></div>`).join('');
  dots.innerHTML=testimonials.map((_,i)=>`<button class="dot ${i===0?'active':''}" aria-label="Go to testimonial ${i+1}" data-i="${i}"></button>`).join('');
  dots.querySelectorAll('.dot').forEach(d=>d.addEventListener('click',()=>goTo(+d.dataset.i)));
  updateCarousel();
}
function updateCarousel(){
  document.getElementById('testimonialsTrack').style.transform=`translateX(-${tIndex*100}%)`;
  document.querySelectorAll('.dot').forEach((d,i)=>d.classList.toggle('active',i===tIndex));
}
function goTo(i){ tIndex=(i+testimonials.length)%testimonials.length; updateCarousel(); }
document.getElementById('prevTestimonial')?.addEventListener('click',()=>goTo(tIndex-1));
document.getElementById('nextTestimonial')?.addEventListener('click',()=>goTo(tIndex+1));
setInterval(()=>goTo(tIndex+1),4000);

// Navbar scroll + hamburger + active links
const navbar=document.getElementById('navbar');
window.addEventListener('scroll',()=>{
  navbar.style.background=scrollY>20?'rgba(15,15,15,.95)':'rgba(15,15,15,.85)';
  // active link highlight
  const sections=document.querySelectorAll('section[id],footer[id]');
  let current='';
  sections.forEach(s=>{if(scrollY>=s.offsetTop-120) current=s.id});
  document.querySelectorAll('.nav-link').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current));
});
const hamburger=document.getElementById('hamburger');
const navMenu=document.getElementById('navMenu');
hamburger.addEventListener('click',()=>{
  const open=navMenu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded',open);
});
document.querySelectorAll('.nav-link').forEach(a=>a.addEventListener('click',()=>navMenu.classList.remove('open')));

// Category cards filter shortcut
document.querySelectorAll('.category-card').forEach(c=>{
  c.addEventListener('click',()=>{
    const map={strength:'equipment',cardio:'equipment',mens:'apparel',womens:'apparel'};
    const f=map[c.dataset.category]||'all';
    document.querySelector(`[data-filter="${f}"]`)?.click();
    document.getElementById('shop')?.scrollIntoView({behavior:'smooth'});
  });
});

// Newsletter
document.getElementById('newsletterForm').addEventListener('submit',e=>{
  e.preventDefault();
  const email=document.getElementById('email');
  const err=document.getElementById('emailError');
  const re=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!re.test(email.value.trim())){
    err.textContent='Please enter a valid email address.'; email.focus(); return;
  }
  err.textContent='';
  document.getElementById('successMessage').hidden=false;
  e.target.reset();
  setTimeout(()=>document.getElementById('successMessage').hidden=true,4000);
});

document.getElementById('cartBtn').addEventListener('click',openCart);
document.getElementById('cartClose').addEventListener('click',closeCart);
document.getElementById('cartOverlay').addEventListener('click',closeCart);
document.addEventListener('keydown',e=>{if(e.key==='Escape') closeCart();});
document.getElementById('cartClear').addEventListener('click',()=>{
  cart=[]; localStorage.setItem('cart',JSON.stringify(cart)); updateCartCount(); renderCart();
});
document.getElementById('cartCheckout').addEventListener('click',()=>{
  if(!cart.length) return;
  alert(`Order placed!\n\n${cart.map(c=>{const p=products.find(x=>x.id===c.id);return `${p.title} x${c.qty}`}).join('\n')}\n\nTotal: ${document.getElementById('cartSubtotal').textContent}\n\nThank you for shopping with OPONDOFITNESS!`);
  cart=[]; localStorage.setItem('cart',JSON.stringify(cart)); updateCartCount(); renderCart(); closeCart();
});

// Nav Equipment/Apparel buttons - make clickable (filter + scroll to shop)
document.querySelectorAll('[data-nav-filter]').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    const f=a.dataset.navFilter;
    document.querySelector(`[data-filter="${f}"]`)?.click();
    document.getElementById('shop')?.scrollIntoView({behavior:'smooth'});
    navMenu.classList.remove('open');
  });
});

// Footer links - make clickable
document.querySelectorAll('[data-footer-filter]').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    const f=a.dataset.footerFilter;
    document.querySelector(`[data-filter="${f}"]`)?.click();
    document.getElementById('shop')?.scrollIntoView({behavior:'smooth'});
  });
});
document.querySelectorAll('[data-coming-soon]').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    const label=a.dataset.comingSoon;
    // reuse toast for feedback
    const t=document.getElementById('cartToast');
    t.innerHTML=`<i class="fa-solid fa-circle-info"></i><span>${label} — coming soon!</span>`;
    t.hidden=false; t.classList.add('show');
    setTimeout(()=>{t.classList.remove('show'); setTimeout(()=>{t.hidden=true; t.innerHTML='<i class="fa-solid fa-check-circle"></i><span>Added to cart!</span>';},300)},2000);
  });
});
// Footer brand logo - scroll to top
document.querySelector('.footer-brand .logo')?.addEventListener('click',e=>{
  e.preventDefault(); window.scrollTo({top:0,behavior:'smooth'});
});

// Init
renderProducts(); updateCartCount(); renderCart(); renderTestimonials();
