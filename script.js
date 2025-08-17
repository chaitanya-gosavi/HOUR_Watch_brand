let cart = [];

function toggleCart() {
  document.getElementById("cart").classList.toggle("active");
}

function addToCart(product, price) {
  const item = cart.find(i => i.product === product);
  if(item) {
    item.qty++;
  } else {
    cart.push({product, price, qty: 1});
  }
  renderCart();
}

function removeFromCart(product) {
  cart = cart.filter(i => i.product !== product);
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const cartCount = document.getElementById("cart-count");

  cartItems.innerHTML = "";
  let total = 0;
  let count = 0;

  cart.forEach(item => {
    total += item.price * item.qty;
    count += item.qty;
    cartItems.innerHTML += `
      <div class="cart-item">
        <p>${item.product} (x${item.qty})</p>
        <p>₹${item.price * item.qty}</p>
        <button onclick="removeFromCart('${item.product}')">❌</button>
      </div>
    `;
  });

  cartTotal.innerText = total;
  cartCount.innerText = count;
}
