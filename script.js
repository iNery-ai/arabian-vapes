const phoneNumber = "557181133296";

const products = [
  {
    id: "ignite-v155-morango-melancia",
    brand: "IGNITE",
    name: "V155 UltraSlim",
    badge: "15k puffs",
    puffs: "15k puffs",
    flavor: "Morango com melancia",
    price: 130,
    stock: 3,
    color: "#5f36d4",
  },
  {
    id: "ignite-v155-melancia-dragon-fruit",
    brand: "IGNITE",
    name: "V155 UltraSlim",
    badge: "15k puffs",
    puffs: "15k puffs",
    flavor: "Melancia dragon fruit",
    price: 130,
    stock: 4,
    color: "#7a24c9",
  },
  {
    id: "ignite-v155-morango",
    brand: "IGNITE",
    name: "V155 UltraSlim",
    badge: "15k puffs",
    puffs: "15k puffs",
    flavor: "Morango",
    price: 130,
    stock: 1,
    color: "#d83b83",
  },
  {
    id: "ignite-boost-menthol",
    brand: "IGNITE",
    name: "Boost Series ICE",
    badge: "40k puffs",
    puffs: "40k puffs",
    flavor: "Menthol",
    price: 150,
    stock: 1,
    color: "#11131c",
  },
  {
    id: "ignite-boost-morango-banana",
    brand: "IGNITE",
    name: "Boost Series ICE",
    badge: "40k puffs",
    puffs: "40k puffs",
    flavor: "Morango com banana",
    price: 150,
    stock: 2,
    color: "#d44182",
  },
  {
    id: "ignite-boost-morango",
    brand: "IGNITE",
    name: "Boost Series ICE",
    badge: "40k puffs",
    puffs: "40k puffs",
    flavor: "Morango",
    price: 150,
    stock: 1,
    color: "#c83273",
  },
  {
    id: "ignite-boost-cola",
    brand: "IGNITE",
    name: "Boost Series ICE",
    badge: "40k puffs",
    puffs: "40k puffs",
    flavor: "Cola",
    price: 150,
    stock: 1,
    color: "#3b2020",
  },
  {
    id: "ignite-boost-abacaxi-kiwi-dragon-fruit",
    brand: "IGNITE",
    name: "Boost Series ICE",
    badge: "40k puffs",
    puffs: "40k puffs",
    flavor: "Abacaxi com kiwi dragon fruit",
    price: 150,
    stock: 2,
    color: "#78ad39",
  },
  {
    id: "elfbar-ice-king-maca-dupla-ice",
    brand: "ELFBAR",
    name: "ICE KING",
    badge: "15k puffs",
    puffs: "15k puffs",
    flavor: "Maca dupla ice",
    price: 150,
    stock: 1,
    color: "#2f7dd3",
  },
  {
    id: "elfbar-ice-king-maca-verde",
    brand: "ELFBAR",
    name: "ICE KING",
    badge: "15k puffs",
    puffs: "15k puffs",
    flavor: "Maca verde",
    price: 150,
    stock: 1,
    color: "#44a95c",
  },
  {
    id: "elfbar-ice-king-menta-preta",
    brand: "ELFBAR",
    name: "ICE KING",
    badge: "15k puffs",
    puffs: "15k puffs",
    flavor: "Menta preta",
    price: 150,
    stock: 1,
    color: "#12131a",
  },
  {
    id: "elfbar-ice-king-fusao-cereja",
    brand: "ELFBAR",
    name: "ICE KING",
    badge: "15k puffs",
    puffs: "15k puffs",
    flavor: "Fusao de cereja",
    price: 150,
    stock: 1,
    color: "#a51f47",
  },
  {
    id: "elfbar-bc-morango-sorvete-creme",
    brand: "ELFBAR",
    name: "BC",
    badge: "15k puffs",
    puffs: "15k puffs",
    flavor: "Morango sorvete de creme",
    price: 110,
    stock: 1,
    color: "#ff5f9d",
  },
  {
    id: "elfbar-bc-morango-kiwi",
    brand: "ELFBAR",
    name: "BC",
    badge: "15k puffs",
    puffs: "15k puffs",
    flavor: "Morango com kiwi",
    price: 110,
    stock: 1,
    color: "#79b846",
  },
];

const categoryTargets = {
  "catalog-start": "product-group-ignite-v155-ultraslim",
  ice: "product-ignite-boost-menthol",
  fruit: "product-ignite-v155-morango-melancia",
  sweet: "product-elfbar-bc-morango-sorvete-creme",
};

const productImages = {
  "elfbar-ice-king-maca-dupla-ice": "assets/products/elfbar-ice-king-maca-dupla-card.png",
  "elfbar-ice-king-maca-verde": "assets/products/elfbar-ice-king-maca-verde-card.png",
  "elfbar-ice-king-menta-preta": "assets/products/elfbar-ice-king-menta-preta-card.png",
  "elfbar-ice-king-fusao-cereja": "assets/products/elfbar-ice-king-fusao-cereja-card.png",
  "elfbar-bc-morango-sorvete-creme": "assets/products/elfbar-bc-morango-sorvete-creme-card.png",
  "elfbar-bc-morango-kiwi": "assets/products/elfbar-bc-morango-kiwi-card.png",
  "IGNITE__V155 UltraSlim": "assets/products/ignite-v155-ultraslim-15k-clean.png",
  "IGNITE__Boost Series ICE": "assets/products/ignite-boost-series-ice-40k-cutout.png",
  "ELFBAR__ICE KING": "assets/products/elfbar-bc15k-cutout.png",
  "ELFBAR__BC": "assets/products/elfbar-bc15k-cutout.png",
};

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

function compareAtPrice(price) {
  return price * 1.25;
}

function getProductImage(product) {
  return productImages[product.id] || productImages[`${product.brand}__${product.name}`] || "";
}

function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function renderProducts() {
  const groups = products.reduce((acc, product) => {
    const key = `${product.brand}__${product.name}`;

    if (!acc[key]) {
      acc[key] = {
        brand: product.brand,
        name: product.name,
        puffs: product.puffs,
        price: product.price,
        items: [],
      };
    }

    acc[key].items.push(product);
    return acc;
  }, {});

  productGrid.innerHTML = Object.values(groups)
    .map(
      (group, groupIndex) => `
        <section class="product-group" id="product-group-${slugify(`${group.brand}-${group.name}`)}" style="--delay: ${groupIndex * 90}ms">
          <div class="product-group-head">
            <span>${group.brand}</span>
            <h3>${group.name}</h3>
            <p>A partir de ${formatter.format(group.price)}</p>
          </div>
          <div class="product-group-items">
            ${group.items
              .map(
                (product, itemIndex) => `
                  <article class="product-card" id="product-${product.id}" style="--pod-color: ${product.color}; --delay: ${(groupIndex * 90) + (itemIndex * 45)}ms">
                    <span class="product-badge">${product.badge}</span>
                    <div class="product-visual">
                      ${
                        getProductImage(product)
                          ? `<img class="product-photo" src="${getProductImage(product)}" alt="${product.brand} ${product.name} ${product.flavor}" loading="lazy" />`
                          : '<span class="pod-shape"></span>'
                      }
                    </div>
                    <div class="product-info">
                      <span class="product-brand">${product.brand}</span>
                      <h3>${product.name}</h3>
                      <dl class="product-meta">
                        <div>
                          <dt>Modelo</dt>
                          <dd>${product.name}</dd>
                        </div>
                        <div>
                          <dt>Puffs</dt>
                          <dd>${product.puffs}</dd>
                        </div>
                        <div>
                          <dt>Sabor</dt>
                          <dd>${product.flavor}</dd>
                        </div>
                        <div>
                          <dt>Estoque</dt>
                          <dd>${product.stock} unid.</dd>
                        </div>
                      </dl>
                      <div class="price-stack">
                        <span class="old-price"><span>De:</span><s>${formatter.format(compareAtPrice(product.price))}</s></span>
                        <strong class="price"><span>Por apenas:</span>${formatter.format(product.price)}</strong>
                      </div>
                      <button class="add-button" type="button" data-product="${product.id}">Adicionar</button>
                    </div>
                  </article>
                `,
              )
              .join("")}
          </div>
        </section>
      `,
    )
    .join("");
}

function getCartLines() {
  return cart
    .map((item) => {
      const product = products.find((entry) => entry.id === item.id);

      if (!product) return null;

      return {
        ...product,
        quantity: item.quantity,
      };
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
                <small>${item.brand} - ${item.quantity} unidade(s) - ${item.flavor}</small>
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
    .map((item) => `- ${item.quantity}x ${item.brand} ${item.name} ${item.puffs} (${item.flavor}) - ${formatter.format(item.price * item.quantity)}`)
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
  const product = products.find((entry) => entry.id === productId);

  if (!product) return;

  const current = cart.find((item) => item.id === productId);

  if (current) {
    if (current.quantity >= product.stock) return;
    current.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }

  renderCart();
}

function jumpToCatalogTarget(target) {
  const elementId = categoryTargets[target] || target;
  const element = document.getElementById(elementId) || document.querySelector("#produtos");

  if (!element) return;

  element.scrollIntoView({ behavior: "smooth", block: "center" });
  element.classList.remove("is-highlighted");

  window.setTimeout(() => {
    element.classList.add("is-highlighted");
  }, 240);

  window.setTimeout(() => {
    element.classList.remove("is-highlighted");
  }, 1800);
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

document.querySelectorAll(".catalog-jump").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    jumpToCatalogTarget(trigger.dataset.target);
  });
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
