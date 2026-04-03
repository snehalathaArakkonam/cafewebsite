// Cart Management
let cart = JSON.parse(localStorage.getItem('cafe_cart')) || [];

function saveCart() {
  localStorage.setItem('cafe_cart', JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(item) {
  const existingItem = cart.find(i => i.id === item.id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }
  saveCart();
  showToast(`${item.name} added to cart!`);
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  renderCart();
}

function updateQuantity(id, delta) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFromCart(id);
    } else {
      saveCart();
      renderCart();
    }
  }
}

function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  if (badge) {
    const count = cart.reduce((acc, item) => acc + item.quantity, 0);
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
}

function calculateTotal() {
  return cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
}

function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function renderCart() {
  const cartList = document.getElementById('cart-items-list');
  const subtotalEl = document.getElementById('cart-subtotal');
  const totalEl = document.getElementById('cart-total');
  
  if (!cartList) return;

  if (cart.length === 0) {
    cartList.innerHTML = '<p class="text-center py-10">Your cart is empty.</p>';
    subtotalEl.textContent = '₹0';
    totalEl.textContent = '₹0';
    return;
  }

  cartList.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="item-details">
        <img src="${item.image}" alt="${item.name}">
        <div>
          <h3>${item.name}</h3>
          <p>₹${item.price}</p>
        </div>
      </div>
      <div class="item-qty">
        <button onclick="updateQuantity('${item.id}', -1)">-</button>
        <span>${item.quantity}</span>
        <button onclick="updateQuantity('${item.id}', 1)">+</button>
      </div>
      <div class="item-price">
        ₹${item.price * item.quantity}
      </div>
      <button onclick="removeFromCart('${item.id}')" class="text-red-500 ml-4">
        <i class="lucide-trash-2"></i>
      </button>
    </div>
  `).join('');

  const total = calculateTotal();
  subtotalEl.textContent = `₹${total}`;
  totalEl.textContent = `₹${total}`;
}

document.addEventListener('DOMContentLoaded', updateCartBadge);
