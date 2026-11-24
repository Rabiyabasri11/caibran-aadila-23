// NAVBAR
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);
});
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('show');
  if (navbar) navbar.classList.toggle('open');
}

// CAROUSEL - FIXED
let slideIndex = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(n) {
  if (!slides.length) return;
  slideIndex = (n + slides.length) % slides.length;
  slides.forEach((s, i) => s.classList.toggle('active', i === slideIndex));
  dots.forEach((d, i) => d.classList.toggle('active', i === slideIndex));
}
function changeSlide(n) { showSlide(slideIndex + n); }
function goSlide(n) { showSlide(n); }

// Automatic - 4 sec ku oru thadava maarum
if (slides.length > 0) {
  setInterval(() => { showSlide(slideIndex + 1); }, 4000);
}

// MENU DATA - IMAGE FIXED - ELLAM WORK AAGUM
const FALLBACK = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80';

const menuItems = [
  { name: "Chicken 65", cat: "starters", price: 249, desc: "Spicy, crispy South Indian classic.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCLCMBqpPbGixWKafeh4aLsKpnUUGImPgc4YpeLwtTog&s=10", badge: "Popular" },
  { name: "Loaded French Fries", cat: "starters", price: 199, desc: "Cheesy fries with sauces.", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=80" },
  { name: "Garlic Bread", cat: "starters", price: 149, desc: "Buttery garlic bread.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvPyTljiexGUXW8sqeJzdvRCwEVOO_pmMnrLcZO8xk2Q&s=10" },
  { name: "Crispy Calamari", cat: "starters", price: 299, desc: "Golden fried calamari.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK88JzTjaf3pdyxuebasXBE2EYFuZIwp99gtpXMxqKFw&s=10" },
  { name: "Classic Margherita Pizza", cat: "pizza", price: 299, desc: "Tomato, mozzarella & basil.", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80", badge: "Popular" },
  { name: "Pepperoni Pizza", cat: "pizza", price: 399, desc: "Loaded pepperoni & cheese.", img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80" },
  { name: "Four Cheese Pizza", cat: "pizza", price: 429, desc: "4 cheeses.", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80" },
  { name: "Garden Veggie Pizza", cat: "pizza", price: 329, desc: "Fresh veggies & cheese.", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80" },
  { name: "Classic Beef Burger", cat: "burgers", price: 249, desc: "Juicy beef patty & cheese.", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80" },
  { name: "Crispy Chicken Burger", cat: "burgers", price: 229, desc: "Crispy chicken & mayo.", img: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=800&q=80" },
  { name: "Double Cheese Burger", cat: "burgers", price: 299, desc: "Double patty, double cheese.", img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80", badge: "Signature" },
  { name: "Mushroom Burger", cat: "burgers", price: 219, desc: "Grilled mushroom & cheese.", img: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=800&q=80" },
  { name: "Creamy Alfredo Pasta", cat: "pasta", price: 279, desc: "Creamy white sauce.", img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80" },
  { name: "Spicy Arrabbiata", cat: "pasta", price: 249, desc: "Spicy tomato sauce.", img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&q=80" },
  { name: "Chicken Pesto Pasta", cat: "pasta", price: 299, desc: "Pesto, chicken & parmesan.", img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=80" },
  { name: "Mac & Cheese", cat: "pasta", price: 229, desc: "Cheesy baked macaroni.", img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=800&q=80" },
  { name: "Classic Chicken Biryani", cat: "indian", price: 249, desc: "Fragrant basmati & spices.", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80", badge: "Signature" },
  { name: "Paneer Butter Masala", cat: "indian", price: 229, desc: "Creamy paneer gravy.", img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80" },
  { name: "Tandoori Chicken", cat: "indian", price: 299, desc: "Char-grilled tandoori.", img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&q=80" },
  { name: "Butter Naan", cat: "indian", price: 49, desc: "Soft butter naan.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT378ipZqGdYDxy_AX1DrwC9p5frJb2nmJyjR7-_vU8Rw&s=10" },
  { name: "Chicken Fried Rice", cat: "asian", price: 219, desc: "Wok-tossed fried rice.", img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&q=80" },
  { name: "Veg Hakka Noodles", cat: "asian", price: 189, desc: "Stir-fried noodles.", img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&q=80" },
  { name: "Chicken Momos", cat: "asian", price: 149, desc: "Steamed momos.", img: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&q=80", badge: "Popular" },
  { name: "Sushi Selection", cat: "asian", price: 499, desc: "Fresh sushi platter.", img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80" },
  { name: "Caesar Salad", cat: "salads", price: 199, desc: "Lettuce, croutons & dressing.", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80" },
  { name: "Mediterranean Bowl", cat: "salads", price: 249, desc: "Veggies, feta & olives.", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80" },
  { name: "Chocolate Lava Cake", cat: "desserts", price: 179, desc: "Molten chocolate cake.", img: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=800&q=80", badge: "Popular" },
  { name: "New York Cheesecake", cat: "desserts", price: 199, desc: "Creamy cheesecake.", img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800&q=80" },
  { name: "Tiramisu", cat: "desserts", price: 219, desc: "Coffee layered dessert.", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80" },
  { name: "Vanilla Ice Cream", cat: "desserts", price: 99, desc: "Classic vanilla.", img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80" },
  { name: "Fresh Lime Soda", cat: "drinks", price: 99, desc: "Refreshing lime soda.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS76bcLeBBi9BIjEPh1tIpOQnLDutvIfmz3Du_WEnq8Q&s=10" },
  { name: "Mango Smoothie", cat: "drinks", price: 149, desc: "Mango & yogurt.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrvavkhhQp8F5KMWqtayt6EzsjR2zlD2BCIrSDd2zoDg&s=10" },
  { name: "Iced Coffee", cat: "drinks", price: 129, desc: "Chilled coffee.", img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=800&q=80" },
  { name: "Classic Cappuccino", cat: "drinks", price: 119, desc: "Espresso & foam.", img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=80" },
  { name: "Chicken Shawarma", cat: "starters", price: 149, desc: "Juicy chicken shawarma with garlic mayo.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQpFqTDQKdqr91eKkcYEx5h0-1SXZHElhIpiO0Psp5AA&s=10" },
  { name: "Veg Crispy Burger", cat: "burgers", price: 179, desc: "Crispy veg patty with cheese & mayo.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnj05A6hiAZgSQUoM0lYFrEJinASFH6jB73dD0L_ix6Q&s=10" },
];

let currentFilter = 'all';
function setFilter(cat, btn) {
  currentFilter = cat;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  filterMenu();
}

function filterMenu() {
  const grid = document.getElementById('menuGrid');
  if (!grid) return;
  const q = (document.getElementById('searchInput')?.value || '').toLowerCase();
  grid.innerHTML = '';
  const filtered = menuItems.filter(i => (currentFilter === 'all' || i.cat === currentFilter) && i.name.toLowerCase().includes(q));
  filtered.forEach(item => {
    grid.innerHTML += `<div class="col-lg-4 col-md-6"><div class="food-card"><img src="${item.img}" onerror="this.onerror=null;this.src='${FALLBACK}'" alt="${item.name}"><div class="food-card-body"><div class="d-flex justify-content-between"><h5>${item.name}</h5>${item.badge ? `<span class="badge-pop">${item.badge}</span>` : ''}</div><p class="text-muted small">${item.desc}</p><p class="text-capitalize small text-muted">${item.cat}</p><div class="d-flex justify-content-between align-items-center"><span class="price">₹${item.price}</span><button class="add-btn" onclick="addToCart('${item.name}',${item.price},'${item.img}')">+ Add</button></div></div></div></div>`;
  });
  if (filtered.length === 0) grid.innerHTML = '<p class="text-center">No items found.</p>';
}
filterMenu();

// CART
let cart = JSON.parse(localStorage.getItem('caibran_cart') || '[]');
function saveCart() { localStorage.setItem('caibran_cart', JSON.stringify(cart)); }
function addToCart(name, price, img) {
  let f = cart.find(i => i.name === name);
  if (f) f.qty++; else cart.push({ name, price, img, qty: 1 });
  saveCart(); updateCart(); showToast(name + ' added to cart 🛒');
}
function updateCart() {
  const box = document.getElementById('cartItems');
  if (!box) return;
  let total = 0, count = 0;
  if (cart.length === 0) box.innerHTML = '<p class="text-center mt-4">Your cart is empty.</p>';
  else box.innerHTML = cart.map((it, i) => {
    total += it.price * it.qty; count += it.qty;
    return `<div class="cart-item"><img src="${it.img}" onerror="this.onerror=null;this.src='${FALLBACK}'"><div class="flex-grow-1"><b>${it.name}</b><br>₹${it.price}</div><div><button class="qty-btn" onclick="changeQty(${i},-1)">-</button> ${it.qty} <button class="qty-btn" onclick="changeQty(${i},1)">+</button></div><button class="remove-btn" onclick="removeItem(${i})">✕</button></div>`;
  }).join('');
  document.getElementById('cartTotal').innerText = total;
  document.getElementById('cartCount').innerText = count;
}
function changeQty(i, d) { cart[i].qty += d; if (cart[i].qty <= 0) cart.splice(i, 1); saveCart(); updateCart(); }
function removeItem(i) { cart.splice(i, 1); saveCart(); updateCart(); }
function openCart() { document.getElementById('cartDrawer').classList.add('open'); document.getElementById('cartOverlay').classList.add('show'); }
function closeCart() { document.getElementById('cartDrawer').classList.remove('open'); document.getElementById('cartOverlay').classList.remove('show'); }
function completeDemo() {
  if (cart.length === 0) { showToast('Cart is empty!'); return; }
  cart = []; saveCart(); updateCart(); closeCart();
  document.getElementById('demoModal').classList.add('show');
}
function closeModal() { document.getElementById('demoModal').classList.remove('show'); }
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.innerText = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}
updateCart();

// RESERVE
const dateInput = document.getElementById('rDate');
if (dateInput) dateInput.min = new Date().toISOString().split('T')[0];
function submitReserve(e) {
  e.preventDefault();
  showToast('✅ Demo reservation submitted!');
  document.getElementById('reserveForm').reset();
}