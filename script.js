const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 59.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 99.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 39.99,
    image: "https://via.placeholder.com/150",
  }
];

let cart = [];

function renderProducts() {
  const productList = document.getElementById("product-list");
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(card);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCartCount();
}

function updateCartCount() {
  document.getElementById("cart-count").innerText = cart.length;
}

document.addEventListener("DOMContentLoaded", renderProducts);
