const phoneNumber = "557181133296";

const products = [
  {
    id: "lost-mary-bm600",
    name: "Lost Mary BM600",
    badge: "Mais vendido",
    puffs: "600 puffs",
    flavor: "Ice Mint / sabores variados",
    price: 89.9,
    color: "#7d50d8",
  },
  {
    id: "elfbar-bc5000",
    name: "Elfbar BC5000",
    badge: "Pod descartavel",
    puffs: "5000 puffs",
    flavor: "Strawberry Ice / sabores variados",
    price: 79.9,
    color: "#ff6eaa",
  },
  {
    id: "zovoo-dragbar",
    name: "Zovoo Dragbar",
    badge: "Intenso",
    puffs: "5000 puffs",
    flavor: "Blue Razz / sabores variados",
    price: 109.9,
    color: "#8a8b8f",
  },
  {
    id: "vozol-star",
    name: "Vozol Star",
    badge: "Lancamento",
    puffs: "6000 puffs",
    flavor: "Watermelon Ice / sabores variados",
    price: 119.9,
    color: "#16a4b8",
  },
  {
    id: "ignite-v50",
    name: "Ignite V50",
    badge: "Premium",
    puffs: "5000 puffs",
    flavor: "Grape Ice / sabores variados",
    price: 139.9,
    color: "#1e1d22",
  },
  {
    id: "oxbar-magic",
    name: "Oxbar Magic Maze",
    badge: "Alta autonomia",
    puffs: "10000 puffs",
    flavor: "Tropical Mix / sabores variados",
    price: 159.9,
    color: "#bd5b27",
  },
];

const productGrid = document.querySelector("#productGrid");
const cartItems = document.querySelector("#cartItems");
const cartCount = document.querySelector("#cartCount");
const cartTotal = document.querySelector("#cartTotal");
const openCheckout = document.querySelector("#openCheckout");
const clearCart = document.querySelector("#clearCart");
const openCart = document.querySelector("#openCart");
const cartPanel = document.querySelector("#cartPanel");
const ageGate = document.querySelector("#ageGate");
const confirmAge = document.querySelector("#confirmAge");
const heroWhatsApp = document.querySelector("#heroWhatsApp");
const smokeReveal = document.querySelector("#smokeReveal");
const checkoutModal = document.querySelector("#checkoutModal");
const closeCheckout = document.querySelector("#closeCheckout");
const checkoutForm = document.querySelector("#checkoutForm");
const checkoutResult = document.querySelector("#checkoutResult");
const orderMessage = document.querySelector("#orderMessage");
const whatsAppOrder = document.querySelector("#whatsAppOrder");

const formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

let cart = JSON.parse(localStorage.getItem("arabianCart") || "[]");

function saveCart() {
  localStorage.setItem("arabianCart", JSON.stringify(cart));
}

function installment(price) {
  return formatter.format(price / 12);
}

function renderProducts() {
  productGrid.innerHTML = products
    .map(
      (product, index) => `
        <article class="product-card" style="--pod-color: ${product.color}; --delay: ${index * 80}ms">
          <span class="product-badge">${product.badge}</span>
          <div class="product-visual">
            <span class="pod-shape"></span>
          </div>
          <div class="product-info">
            <h3>${product.name}</h3>
            <p>${product.puffs}</p>
            <small>${product.flavor}</small>
            <strong class="price">${formatter.format(product.price)}</strong>
            <span class="installment">ou 12x de ${installment(product.price)}</span>
            <button class="add-button" type="button" data-product="${product.id}">Adicionar</button>
          </div>
        </article>
      `,
    )
    .join("");
}

function getCartLines() {
  return cart
    .map((item) => {
      const product = products.find((entry) => entry.id === item.id);
      return product ? { ...product, quantity: item.quantity } : null;
    })
    .filter(Boolean);
}

function renderCart() {
  const lines = getCartLines();
  const total = lines.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const count = lines.reduce((sum, item) => sum + item.quantity, 0);

  cartCount.textContent = count;
  cartTotal.textContent = formatter.format(total);

  cartItems.innerHTML = lines.length
    ? lines
        .map(
          (item) => `
            <div class="cart-item">
              <div>
                <span>${item.name}</span>
                <small>${item.quantity} unidade(s) - ${item.flavor}</small>
              </div>
              <strong>${formatter.format(item.price * item.quantity)}</strong>
            </div>
          `,
        )
        .join("")
    : '<p class="cart-empty">Seu carrinho ainda esta vazio.</p>';

  heroWhatsApp.href = getWhatsAppUrl("Ola, quero saber quais pods descartaveis estao disponiveis na Arabian Pods.");
  saveCart();
}

function getWhatsAppUrl(message) {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

function getOrderSummary() {
  const lines = getCartLines();
  const total = lines.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return {
    lines,
    total,
    count: lines.reduce((sum, item) => sum + item.quantity, 0),
  };
}

function buildOrderMessage(data) {
  const { lines, total } = getOrderSummary();
  const items = lines
    .map((item) => `- ${item.quantity}x ${item.name} (${item.flavor}) - ${formatter.format(item.price * item.quantity)}`)
    .join("\n");

  return [
    "Ola, quero confirmar um pedido na Arabian Pods.",
    "",
    "Itens:",
    items,
    "",
    `Total estimado: ${formatter.format(total)}`,
    "",
    "Dados do cliente:",
    `Nome: ${data.name}`,
    `Endereco: ${data.address}`,
    `Pagamento: ${data.payment}`,
    "",
    "Entrega: Salvador/regiao metropolitana.",
  ].join("\n");
}

function addToCart(productId) {
  const current = cart.find((item) => item.id === productId);

  if (current) {
    current.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }

  renderCart();
}

function releaseAgeGate() {
  localStorage.setItem("arabianAgeConfirmed", "true");
  ageGate.classList.add("is-leaving");
  smokeReveal.classList.add("is-active");

  window.setTimeout(() => {
    ageGate.classList.add("hidden");
    document.body.classList.remove("locked");
  }, 720);

  window.setTimeout(() => {
    smokeReveal.classList.remove("is-active");
  }, 1800);
}

productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-product]");

  if (!button) return;

  addToCart(button.dataset.product);
});

clearCart.addEventListener("click", () => {
  cart = [];
  renderCart();
});

openCart.addEventListener("click", () => {
  cartPanel.scrollIntoView({ behavior: "smooth", block: "center" });
});

openCheckout.addEventListener("click", () => {
  const { count } = getOrderSummary();

  if (!count) {
    cartPanel.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  checkoutModal.classList.add("is-open");
  checkoutModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("locked");
});

closeCheckout.addEventListener("click", () => {
  checkoutModal.classList.remove("is-open");
  checkoutModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("locked");
});

checkoutModal.addEventListener("click", (event) => {
  if (event.target !== checkoutModal) return;

  checkoutModal.classList.remove("is-open");
  checkoutModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("locked");
});

checkoutForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(checkoutForm);
  const message = buildOrderMessage({
    name: formData.get("customerName").trim(),
    address: formData.get("customerAddress").trim(),
    payment: formData.get("paymentMethod"),
  });

  orderMessage.value = message;
  checkoutResult.hidden = false;
  whatsAppOrder.href = getWhatsAppUrl(message);
});

confirmAge.addEventListener("click", releaseAgeGate);

document.querySelector(".newsletter").addEventListener("submit", (event) => {
  event.preventDefault();
  event.currentTarget.reset();
});

if (localStorage.getItem("arabianAgeConfirmed") !== "true") {
  document.body.classList.add("locked");
} else {
  ageGate.classList.add("hidden");
}

renderProducts();
renderCart();
