document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      id: 1,
      name: "Cap",
      price: 199,
      Image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 2,
      name: "Shoes",
      price: 1999,
      Image: "https://images.unsplash.com/photo-1585508889891-17557b2b89b0?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 3,
      name: "Jacket",
      price: 788,
      Image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 4,
      name: "Headphones",
      price: 299,
      Image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=300&q=80"
    }
  ];

  const container = document.getElementById("product-container");
  let cart = [];

  function renderProducts() {
    container.innerHTML = "";
    products.forEach(item => {
      const productCard = `
        <div class="product-card">
          <img src="${item.Image}" alt="${item.name}" width="100">
          <h3>${item.name}</h3>
          <p>Price: ₹${item.price}</p>
          <button class="add-to-cart" data-id="${item.id}">Add to Cart</button>
        </div>
      `;
      container.innerHTML += productCard;
    });
  }

  function displayCart() {
    const cartDiv = document.getElementById("cart-items");
    let cartItemsHTML = "";
    let total = 0;

    cart.forEach(eachItem => {
      cartItemsHTML += `
        <div class="cart-items">
          <h3>${eachItem.name}</h3>
          <p>Price: ₹${eachItem.price}</p>
          <div class="quantity-control">
            <button class="decrease" data-id="${eachItem.id}">-</button>
            <span>${eachItem.quantity}</span>
            <button class="increase" data-id="${eachItem.id}">+</button>
          </div>
          <p>Total: ₹${eachItem.price * eachItem.quantity}</p>
          <button class="remove" data-id="${eachItem.id}">Remove</button>
        </div>
      `;
      total += eachItem.price * eachItem.quantity;
    });

    cartDiv.innerHTML = cartItemsHTML;
    document.getElementById("grand-total").textContent = `Total: ₹${total}`;
  }

  // ONE Event Listener for all buttons
  document.body.addEventListener("click", function (e) {
    const id = +e.target.dataset.id;

    if (e.target.classList.contains("add-to-cart")) {
      const selected = products.find(p => p.id === id);
      const exists = cart.find(item => item.id === id);
      if (exists) {
        exists.quantity += 1;
      } else {
        cart.push({ ...selected, quantity: 1 });
      }
      displayCart();
    }

    if (e.target.classList.contains("remove")) {
      cart = cart.filter(item => item.id !== id);
      displayCart();
    }

    if (e.target.classList.contains("increase")) {
      const item = cart.find(p => p.id === id);
      if (item) {
        item.quantity += 1;
        displayCart();
      }
    }

    if (e.target.classList.contains("decrease")) {
      const item = cart.find(p => p.id === id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          cart = cart.filter(p => p.id !== id);
        }
        displayCart();
      }
    }
  });

  renderProducts();

  // DARK MODE
  const darkBtn = document.getElementById('theme-toggle');
  darkBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Button emoji toggle
    if (document.body.classList.contains('dark-mode')) {
      darkBtn.textContent = '☀️ Light Mode';
    } else {
      darkBtn.textContent = '🌙 Dark Mode';
    }
  });
});
