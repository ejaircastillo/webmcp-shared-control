const STORAGE_KEY = "webmcp-shared-control.demo.v1";

const RETAIL_PRODUCTS = [
  {
    id: "retail-lumen-desk",
    name: "Escritorio Lumen 100",
    category: "Escritorios",
    icon: "▱",
    price: 299,
    stock: 8,
    highlights: ["100 cm", "pasacables integrado", "melamina mate"],
    dimensions: "100 × 60 × 74 cm",
    ergonomics: "Altura fija con superficie profunda para notebook y monitor",
    compatibility: "Notebook, monitor de hasta 27\"",
    warranty: "3 años",
  },
  {
    id: "retail-nido-chair",
    name: "Silla Nido Air",
    category: "Sillas",
    icon: "◒",
    price: 249,
    stock: 11,
    highlights: ["lumbar ajustable", "malla respirable", "brazos rebatibles"],
    dimensions: "62 × 62 × 104–114 cm",
    ergonomics: "Soporte lumbar regulable y asiento con profundidad adaptable",
    compatibility: "Escritorios de 70–76 cm",
    warranty: "5 años",
  },
  {
    id: "retail-slate-lamp",
    name: "Lámpara Slate Focus",
    category: "Iluminación",
    icon: "◐",
    price: 69,
    stock: 19,
    highlights: ["luz cálida/fría", "USB-C", "brazo articulado"],
    dimensions: "16 × 18 × 45 cm",
    ergonomics: "Tres temperaturas para reducir reflejos en pantalla",
    compatibility: "Escritorio Lumen y superficies de hasta 4 cm",
    warranty: "2 años",
  },
  {
    id: "retail-cove-desk",
    name: "Escritorio Cove Compact",
    category: "Escritorios",
    icon: "▰",
    price: 189,
    stock: 14,
    highlights: ["80 cm", "plegable", "estante vertical"],
    dimensions: "80 × 50 × 72 cm",
    ergonomics: "Formato compacto con estante para liberar superficie",
    compatibility: "Notebook y monitor portátil",
    warranty: "2 años",
  },
  {
    id: "retail-arc-monitor",
    name: "Monitor Arc 24",
    category: "Monitores",
    icon: "▣",
    price: 219,
    stock: 7,
    highlights: ["24\" IPS", "USB-C", "modo lectura"],
    dimensions: "54 × 19 × 42 cm",
    ergonomics: "Panel mate con modo lectura y soporte regulable en altura",
    compatibility: "USB-C DisplayPort y HDMI",
    warranty: "3 años",
  },
  {
    id: "retail-cable-kit",
    name: "Kit Cable Calm",
    category: "Accesorios",
    icon: "⌁",
    price: 39,
    stock: 31,
    highlights: ["canaleta", "clips magnéticos", "cargador 65 W"],
    dimensions: "Kit de 8 piezas",
    ergonomics: "Ordena cables y deja libre la zona de piernas",
    compatibility: "USB-C, notebooks y escritorios de 60–120 cm",
    warranty: "1 año",
  },
];

const WHOLESALE_PRODUCTS = [
  {
    id: "wholesale-led-worklight",
    name: "Reflector LED Taller 30W",
    category: "Iluminación",
    icon: "✦",
    supplier: "LumenPro Mayorista",
    basePrice: 9.8,
    suggestedRetailPrice: 18.9,
    moq: 24,
    casePack: 12,
    stock: 360,
    rotationScore: 94,
    marginPct: 48.1,
    priceTiers: [
      { minQuantity: 24, unitPrice: 9.8 },
      { minQuantity: 72, unitPrice: 9.1 },
      { minQuantity: 144, unitPrice: 8.5 },
    ],
  },
  {
    id: "wholesale-drill-bit-set",
    name: "Juego de Mechas Multiuso 15 pzs",
    category: "Herramientas",
    icon: "✣",
    supplier: "FerroSur Distribución",
    basePrice: 14.4,
    suggestedRetailPrice: 29.9,
    moq: 12,
    casePack: 12,
    stock: 192,
    rotationScore: 89,
    marginPct: 51.8,
    priceTiers: [
      { minQuantity: 12, unitPrice: 14.4 },
      { minQuantity: 48, unitPrice: 13.1 },
      { minQuantity: 96, unitPrice: 12.4 },
    ],
  },
  {
    id: "wholesale-measuring-tape",
    name: "Cinta Métrica Pro 5m",
    category: "Medición",
    icon: "↔",
    supplier: "FerroSur Distribución",
    basePrice: 4.2,
    suggestedRetailPrice: 9.9,
    moq: 36,
    casePack: 12,
    stock: 540,
    rotationScore: 97,
    marginPct: 57.6,
    priceTiers: [
      { minQuantity: 36, unitPrice: 4.2 },
      { minQuantity: 120, unitPrice: 3.8 },
      { minQuantity: 240, unitPrice: 3.45 },
    ],
  },
  {
    id: "wholesale-angle-grinder",
    name: "Amoladora Compacta 700W",
    category: "Herramientas eléctricas",
    icon: "◉",
    supplier: "Taller Uno",
    basePrice: 43,
    suggestedRetailPrice: 79,
    moq: 6,
    casePack: 6,
    stock: 54,
    rotationScore: 68,
    marginPct: 45.6,
    priceTiers: [
      { minQuantity: 6, unitPrice: 43 },
      { minQuantity: 18, unitPrice: 39.5 },
      { minQuantity: 36, unitPrice: 37.2 },
    ],
  },
  {
    id: "wholesale-silicone-sealant",
    name: "Sellador Silicona Neutro 280ml",
    category: "Construcción",
    icon: "●",
    supplier: "ObraBase",
    basePrice: 3.6,
    suggestedRetailPrice: 8.5,
    moq: 48,
    casePack: 24,
    stock: 720,
    rotationScore: 91,
    marginPct: 57.6,
    priceTiers: [
      { minQuantity: 48, unitPrice: 3.6 },
      { minQuantity: 144, unitPrice: 3.3 },
      { minQuantity: 288, unitPrice: 3.05 },
    ],
  },
  {
    id: "wholesale-safety-gloves",
    name: "Guantes Anticorte Nivel 5",
    category: "Seguridad",
    icon: "◇",
    supplier: "ObraBase",
    basePrice: 6.9,
    suggestedRetailPrice: 15.5,
    moq: 24,
    casePack: 12,
    stock: 288,
    rotationScore: 82,
    marginPct: 55.5,
    priceTiers: [
      { minQuantity: 24, unitPrice: 6.9 },
      { minQuantity: 72, unitPrice: 6.3 },
      { minQuantity: 144, unitPrice: 5.8 },
    ],
  },
];

const RETAIL_SEED_STOCK = Object.fromEntries(RETAIL_PRODUCTS.map((product) => [product.id, product.stock]));
const WHOLESALE_SEED_STOCK = Object.fromEntries(WHOLESALE_PRODUCTS.map((product) => [product.id, product.stock]));

const ui = {
  retailSearch: "",
  retailCategory: "all",
  wholesaleSearch: "",
  wholesaleObjective: "balanced",
};

const siteTools = {
  phase: "checking",
  message: "Comprobando Site tools…",
  registered: [],
  activity: [],
  lastTool: null,
};

let appState = loadState();
let registrationStarted = false;

function createId(prefix) {
  const random = Math.random().toString(36).slice(2, 8);
  return `${prefix}-${Date.now().toString(36)}-${random}`;
}

function createInitialState() {
  return {
    version: 1,
    sessionId: createId("demo"),
    retail: {
      cart: [],
      orders: [],
      inventory: { ...RETAIL_SEED_STOCK },
      movements: [],
      pendingCheckout: null,
    },
    wholesale: {
      draft: [],
      orders: [],
      inventory: { ...WHOLESALE_SEED_STOCK },
      reservations: [],
      pendingPurchaseOrder: null,
    },
  };
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "null");
    if (!saved || saved.version !== 1) return createInitialState();
    const initial = createInitialState();
    return {
      ...initial,
      ...saved,
      retail: {
        ...initial.retail,
        ...saved.retail,
        inventory: { ...initial.retail.inventory, ...(saved.retail?.inventory ?? {}) },
      },
      wholesale: {
        ...initial.wholesale,
        ...saved.wholesale,
        inventory: { ...initial.wholesale.inventory, ...(saved.wholesale?.inventory ?? {}) },
      },
    };
  } catch {
    return createInitialState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
}

function resetDemo() {
  appState = createInitialState();
  saveState();
  window.location.reload();
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[character]);
}

function formatMoney(value, currency = "USD") {
  return new Intl.NumberFormat("en-US", { style: "currency", currency, maximumFractionDigits: 2 }).format(value);
}

function formatDate(value) {
  if (!value) return "—";
  return new Intl.DateTimeFormat("es-AR", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value));
}

function shortDate(value) {
  if (!value) return "—";
  return new Intl.DateTimeFormat("es-AR", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(value));
}

function normalizeRoute() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (["/retail", "/retail/admin", "/wholesale", "/wholesale/supplier"].includes(path)) return path;
  return "/";
}

const route = normalizeRoute();

function findRetailProduct(productId) {
  return RETAIL_PRODUCTS.find((product) => product.id === productId);
}

function findWholesaleProduct(productId) {
  return WHOLESALE_PRODUCTS.find((product) => product.id === productId);
}

function toolError(code, message, recoverable = true, details = {}) {
  const error = new Error(JSON.stringify({ code, message, recoverable, details }));
  error.code = code;
  error.recoverable = recoverable;
  error.details = details;
  return error;
}

function errorSummary(error) {
  try {
    const parsed = JSON.parse(error.message);
    if (parsed?.code) return parsed;
  } catch {
    // Keep ordinary errors readable in the inspector.
  }
  return { code: error.code ?? "unknown_error", message: error.message ?? String(error), recoverable: true };
}

function recordToolActivity(tool, status, input = {}, output = null) {
  const summary = status === "success"
    ? (output?.message ?? "Ejecutada correctamente")
    : (output?.message ?? "Falló con error estructurado");
  const item = { tool, status, summary, at: new Date().toISOString(), input };
  siteTools.activity = [item, ...siteTools.activity].slice(0, 6);
  siteTools.lastTool = item;
}

async function runRegisteredTool(name, input, operation) {
  try {
    const result = await operation();
    recordToolActivity(name, "success", input, result);
    renderApp();
    return result;
  } catch (error) {
    const parsed = errorSummary(error);
    recordToolActivity(name, "error", input, parsed);
    renderApp();
    throw error;
  }
}

function recordHumanActivity(summary, status = "success") {
  recordToolActivity("human_ui_change", status, {}, { message: summary });
}

function retailCartSnapshot() {
  const items = appState.retail.cart.map((item) => {
    const product = findRetailProduct(item.productId);
    return {
      productId: item.productId,
      name: product?.name ?? item.productId,
      quantity: item.quantity,
      unitPrice: product?.price ?? 0,
      lineTotal: (product?.price ?? 0) * item.quantity,
      stock: appState.retail.inventory[item.productId] ?? 0,
    };
  });
  return {
    items,
    subtotal: items.reduce((total, item) => total + item.lineTotal, 0),
    currency: "USD",
  };
}

function setRetailCartItem(productId, quantity) {
  const product = findRetailProduct(productId);
  if (!product) throw toolError("product_not_found", `No existe el producto ${productId}`, false);
  if (!Number.isInteger(quantity) || quantity < 0) {
    throw toolError("invalid_quantity", "quantity debe ser un entero mayor o igual a 0", true, { productId, quantity });
  }
  const stock = appState.retail.inventory[productId] ?? 0;
  if (quantity > stock) {
    throw toolError("out_of_stock", `Solo quedan ${stock} unidades de ${product.name}`, true, { productId, requested: quantity, stock });
  }
  const existing = appState.retail.cart.find((item) => item.productId === productId);
  if (quantity === 0) {
    appState.retail.cart = appState.retail.cart.filter((item) => item.productId !== productId);
  } else if (existing) {
    existing.quantity = quantity;
  } else {
    appState.retail.cart.push({ productId, quantity });
  }
  saveState();
  return retailCartSnapshot();
}

function retailProductFacts(product) {
  return {
    productId: product.id,
    name: product.name,
    category: product.category,
    price: product.price,
    currency: "USD",
    thumbnail: product.icon,
    availability: (appState.retail.inventory[product.id] ?? 0) > 0,
    stock: appState.retail.inventory[product.id] ?? 0,
    highlights: product.highlights,
  };
}

function searchRetailProducts({ query = "", category, maxPrice, features = [], limit = 8 } = {}) {
  const tokens = String(query).toLowerCase().split(/\s+/).filter(Boolean);
  const requestedFeatures = Array.isArray(features) ? features.map((feature) => String(feature).toLowerCase()) : [];
  const products = RETAIL_PRODUCTS.filter((product) => {
    const haystack = [product.name, product.category, ...product.highlights].join(" ").toLowerCase();
    const matchesQuery = tokens.every((token) => haystack.includes(token));
    const matchesCategory = !category || category === "all" || product.category.toLowerCase() === String(category).toLowerCase();
    const matchesPrice = maxPrice === undefined || maxPrice === null || product.price <= Number(maxPrice);
    const matchesFeatures = requestedFeatures.every((feature) => haystack.includes(feature));
    return matchesQuery && matchesCategory && matchesPrice && matchesFeatures;
  });
  return products.slice(0, Math.max(1, Math.min(Number(limit) || 8, 20))).map(retailProductFacts);
}

function getRetailProductDetails(productIds = []) {
  if (!Array.isArray(productIds) || productIds.length === 0) {
    throw toolError("invalid_product_ids", "productIds debe contener al menos un ID", true);
  }
  const products = [];
  const missingIds = [];
  productIds.slice(0, 12).forEach((productId) => {
    const product = findRetailProduct(productId);
    if (!product) missingIds.push(productId);
    else {
      products.push({
        ...retailProductFacts(product),
        dimensions: product.dimensions,
        ergonomicFeatures: product.ergonomics,
        compatibility: product.compatibility,
        warranty: product.warranty,
      });
    }
  });
  return { products, missingIds, currency: "USD" };
}

function getFulfillmentOptions(destination = "") {
  const cart = retailCartSnapshot();
  if (cart.items.length === 0) throw toolError("cart_empty", "El carrito está vacío", true);
  return {
    destination: destination || "CABA / AMBA",
    currency: "USD",
    options: [
      { id: "retail-standard", label: "Entrega estándar", method: "delivery", price: 0, eta: "3–5 días hábiles", available: true },
      { id: "retail-express", label: "Entrega express", method: "delivery", price: 25, eta: "1–2 días hábiles", available: true },
      { id: "retail-pickup", label: "Retiro en punto aliado", method: "pickup", price: 0, eta: "Listo mañana", available: true },
    ],
    cart,
  };
}

function prepareRetailCheckout({ deliveryOptionId, destination = "CABA / AMBA" } = {}) {
  const cart = retailCartSnapshot();
  if (cart.items.length === 0) throw toolError("cart_empty", "No se puede preparar checkout con un carrito vacío", true);
  const fulfillment = getFulfillmentOptions(destination);
  const option = fulfillment.options.find((candidate) => candidate.id === deliveryOptionId);
  if (!option) throw toolError("invalid_delivery", "La opción de entrega no es válida para este carrito", true, { deliveryOptionId });
  appState.retail.pendingCheckout = {
    destination: fulfillment.destination,
    deliveryOptionId: option.id,
    deliveryOption: option,
    preparedAt: new Date().toISOString(),
    humanConfirmedAt: null,
    idempotencyKey: createId("retail-order"),
  };
  saveState();
  return { pendingCheckout: appState.retail.pendingCheckout, cart };
}

function confirmRetailCheckout() {
  if (!appState.retail.pendingCheckout) throw toolError("checkout_not_prepared", "Primero hay que preparar el checkout", true);
  appState.retail.pendingCheckout.humanConfirmedAt = new Date().toISOString();
  saveState();
  return appState.retail.pendingCheckout;
}

function submitRetailOrder({ idempotencyKey } = {}) {
  if (!idempotencyKey || typeof idempotencyKey !== "string") {
    throw toolError("missing_idempotency_key", "La orden final requiere idempotencyKey", false);
  }
  const existing = appState.retail.orders.find((order) => order.idempotencyKey === idempotencyKey);
  if (existing) return { order: existing, alreadyCompleted: true };
  const pending = appState.retail.pendingCheckout;
  if (!pending || !pending.humanConfirmedAt) {
    throw toolError("human_confirmation_required", "La persona debe confirmar explícitamente el checkout antes de crear la orden", true);
  }
  const cart = retailCartSnapshot();
  if (cart.items.length === 0) throw toolError("cart_empty", "El carrito está vacío", true);
  cart.items.forEach((item) => {
    const available = appState.retail.inventory[item.productId] ?? 0;
    if (available < item.quantity) {
      throw toolError("out_of_stock", `El stock cambió para ${item.name}`, true, { productId: item.productId, requested: item.quantity, stock: available });
    }
  });
  const orderId = `RET-${String(appState.retail.orders.length + 1).padStart(4, "0")}`;
  const movements = cart.items.map((item) => {
    appState.retail.inventory[item.productId] -= item.quantity;
    return { productId: item.productId, quantity: -item.quantity, at: new Date().toISOString(), orderId };
  });
  const delivery = pending.deliveryOption;
  const order = {
    id: orderId,
    idempotencyKey,
    status: "confirmed",
    createdAt: new Date().toISOString(),
    items: cart.items,
    subtotal: cart.subtotal,
    delivery,
    total: cart.subtotal + delivery.price,
    currency: "USD",
  };
  appState.retail.orders.push(order);
  appState.retail.movements.push(...movements);
  appState.retail.cart = [];
  appState.retail.pendingCheckout = null;
  saveState();
  return { order, inventoryMovements: movements, cart: retailCartSnapshot(), alreadyCompleted: false };
}

function wholesaleDraftSnapshot() {
  const items = appState.wholesale.draft.map((item) => {
    const product = findWholesaleProduct(item.productId);
    const quote = wholesaleQuote(product, item.quantity);
    return {
      productId: item.productId,
      name: product?.name ?? item.productId,
      supplier: product?.supplier ?? "—",
      quantity: item.quantity,
      unitPrice: quote.unitPrice,
      lineTotal: quote.unitPrice * item.quantity,
      moq: product?.moq ?? 0,
      casePack: product?.casePack ?? 0,
      stock: appState.wholesale.inventory[item.productId] ?? 0,
    };
  });
  return {
    items,
    subtotal: items.reduce((total, item) => total + item.lineTotal, 0),
    totalUnits: items.reduce((total, item) => total + item.quantity, 0),
    currency: "USD",
    status: "draft",
    deliveryTermId: appState.wholesale.pendingPurchaseOrder?.deliveryTermId ?? null,
    updatedAt: items.length ? (appState.wholesale.pendingPurchaseOrder?.preparedAt ?? null) : null,
  };
}

function wholesaleQuote(product, quantity) {
  if (!product) throw toolError("product_not_found", "No existe el producto mayorista", false);
  const requestedQuantity = Number(quantity);
  const numeric = Number.isInteger(requestedQuantity) ? requestedQuantity : null;
  const priceTier = product.priceTiers.slice().reverse().find((tier) => numeric !== null && numeric >= tier.minQuantity) ?? product.priceTiers[0];
  const valid = numeric !== null && numeric >= product.moq && numeric % product.casePack === 0 && numeric <= (appState.wholesale.inventory[product.id] ?? 0);
  const nearest = [];
  const stock = appState.wholesale.inventory[product.id] ?? 0;
  const lower = Math.floor(stock / product.casePack) * product.casePack;
  const upper = Math.max(product.moq, Math.ceil(Math.max(numeric ?? product.moq, product.moq) / product.casePack) * product.casePack);
  if (lower >= product.moq && lower !== numeric) nearest.push(lower);
  if (upper <= stock && upper !== numeric && !nearest.includes(upper)) nearest.push(upper);
  return {
    productId: product.id,
    productName: product.name,
    supplier: product.supplier,
    requestedQuantity: quantity,
    validQuantity: valid,
    moq: product.moq,
    casePack: product.casePack,
    unitPrice: priceTier.unitPrice,
    subtotal: numeric !== null ? priceTier.unitPrice * numeric : null,
    priceTiers: product.priceTiers,
    nearestValidQuantities: nearest.slice(0, 3),
    stock,
    currency: "USD",
  };
}

function discoverWholesaleProducts({ businessContext = "", objective = "balanced", maxOrderValue = 3000, categoryExclusions = [], limit = 8 } = {}) {
  const exclusions = Array.isArray(categoryExclusions) ? categoryExclusions.map((category) => String(category).toLowerCase()) : [];
  const max = Number(maxOrderValue) || 3000;
  const scored = WHOLESALE_PRODUCTS.filter((product) => {
    const excluded = exclusions.some((category) => product.category.toLowerCase().includes(category));
    const minimumOrderValue = product.moq * product.basePrice;
    return !excluded && minimumOrderValue <= max;
  }).sort((a, b) => {
    if (objective === "rotation") return b.rotationScore - a.rotationScore;
    if (objective === "margin") return b.marginPct - a.marginPct;
    return (b.rotationScore + b.marginPct) - (a.rotationScore + a.marginPct);
  });
  return {
    businessContext,
    objective,
    maxOrderValue: max,
    currency: "USD",
    products: scored.slice(0, Math.max(1, Math.min(Number(limit) || 8, 20))).map((product) => ({
      productId: product.id,
      name: product.name,
      category: product.category,
      supplier: product.supplier,
      wholesaleBasePrice: product.basePrice,
      suggestedRetailPrice: product.suggestedRetailPrice,
      moq: product.moq,
      casePack: product.casePack,
      stock: appState.wholesale.inventory[product.id] ?? 0,
      currency: "USD",
    })),
  };
}

function setWholesaleDraftItem(productId, quantity) {
  const product = findWholesaleProduct(productId);
  if (!product) throw toolError("product_not_found", `No existe el producto ${productId}`, false);
  if (quantity === 0) {
    appState.wholesale.draft = appState.wholesale.draft.filter((item) => item.productId !== productId);
    appState.wholesale.pendingPurchaseOrder = null;
    saveState();
    return wholesaleDraftSnapshot();
  }
  const quote = wholesaleQuote(product, quantity);
  if (!quote.validQuantity) {
    const code = quantity < product.moq ? "below_moq" : quantity > quote.stock ? "out_of_stock" : quantity % product.casePack !== 0 ? "invalid_case_pack" : "invalid_quantity";
    throw toolError(code, `Cantidad inválida para ${product.name}`, true, quote);
  }
  const existing = appState.wholesale.draft.find((item) => item.productId === productId);
  if (existing) existing.quantity = quantity;
  else appState.wholesale.draft.push({ productId, quantity });
  appState.wholesale.pendingPurchaseOrder = null;
  saveState();
  return wholesaleDraftSnapshot();
}

function getDeliveryTerms() {
  const draft = wholesaleDraftSnapshot();
  if (draft.items.length === 0) throw toolError("draft_empty", "El borrador mayorista está vacío", true);
  return {
    currency: "USD",
    draft,
    terms: [
      { id: "wholesale-pickup", label: "Retiro en depósito", method: "pickup", price: 0, eta: "Listo en 24 h", available: true },
      { id: "wholesale-route", label: "Ruta local consolidada", method: "delivery", price: 45, eta: "2–4 días hábiles", available: true },
      { id: "wholesale-priority", label: "Entrega prioritaria", method: "delivery", price: 95, eta: "1–2 días hábiles", available: draft.subtotal >= 500 },
    ],
  };
}

function preparePurchaseOrder({ deliveryTermId } = {}) {
  const draft = wholesaleDraftSnapshot();
  if (draft.items.length === 0) throw toolError("draft_empty", "No se puede preparar una orden vacía", true);
  const terms = getDeliveryTerms().terms;
  const term = terms.find((candidate) => candidate.id === deliveryTermId && candidate.available);
  if (!term) throw toolError("invalid_delivery", "El término de entrega no es válido para este borrador", true, { deliveryTermId });
  appState.wholesale.pendingPurchaseOrder = {
    deliveryTermId: term.id,
    deliveryTerm: term,
    preparedAt: new Date().toISOString(),
    humanConfirmedAt: null,
    idempotencyKey: createId("wholesale-order"),
  };
  saveState();
  return { pendingPurchaseOrder: appState.wholesale.pendingPurchaseOrder, draft };
}

function confirmPurchaseOrder() {
  if (!appState.wholesale.pendingPurchaseOrder) throw toolError("purchase_order_not_prepared", "Primero hay que preparar la orden de compra", true);
  appState.wholesale.pendingPurchaseOrder.humanConfirmedAt = new Date().toISOString();
  saveState();
  return appState.wholesale.pendingPurchaseOrder;
}

function submitWholesaleOrder({ idempotencyKey } = {}) {
  if (!idempotencyKey || typeof idempotencyKey !== "string") {
    throw toolError("missing_idempotency_key", "La orden mayorista requiere idempotencyKey", false);
  }
  const existing = appState.wholesale.orders.find((order) => order.idempotencyKey === idempotencyKey);
  if (existing) return { order: existing, alreadyCompleted: true };
  const pending = appState.wholesale.pendingPurchaseOrder;
  if (!pending || !pending.humanConfirmedAt) {
    throw toolError("human_confirmation_required", "La persona debe confirmar explícitamente la orden de compra", true);
  }
  const draft = wholesaleDraftSnapshot();
  if (draft.items.length === 0) throw toolError("draft_empty", "El borrador mayorista está vacío", true);
  draft.items.forEach((item) => {
    const product = findWholesaleProduct(item.productId);
    const quote = wholesaleQuote(product, item.quantity);
    if (!quote.validQuantity) throw toolError("stale_state", `La cotización cambió para ${item.name}`, true, quote);
  });
  const orderId = `WHO-${String(appState.wholesale.orders.length + 1).padStart(4, "0")}`;
  const reservations = draft.items.map((item) => {
    appState.wholesale.inventory[item.productId] -= item.quantity;
    return { productId: item.productId, quantity: item.quantity, remainingStock: appState.wholesale.inventory[item.productId], at: new Date().toISOString(), orderId };
  });
  const order = {
    id: orderId,
    idempotencyKey,
    status: "confirmed",
    createdAt: new Date().toISOString(),
    items: draft.items,
    subtotal: draft.subtotal,
    deliveryTerm: pending.deliveryTerm,
    total: draft.subtotal + pending.deliveryTerm.price,
    currency: "USD",
  };
  appState.wholesale.orders.push(order);
  appState.wholesale.reservations.push(...reservations);
  appState.wholesale.draft = [];
  appState.wholesale.pendingPurchaseOrder = null;
  saveState();
  return { order, reservations, draft: wholesaleDraftSnapshot(), alreadyCompleted: false };
}

function getRetailAdminSnapshot() {
  return {
    orders: appState.retail.orders,
    inventory: RETAIL_PRODUCTS.map((product) => ({
      productId: product.id,
      name: product.name,
      initialStock: RETAIL_SEED_STOCK[product.id],
      availableStock: appState.retail.inventory[product.id] ?? 0,
      delta: (appState.retail.inventory[product.id] ?? 0) - RETAIL_SEED_STOCK[product.id],
    })),
    movements: appState.retail.movements,
  };
}

function getSupplierSnapshot() {
  return {
    orders: appState.wholesale.orders,
    inventory: WHOLESALE_PRODUCTS.map((product) => ({
      productId: product.id,
      name: product.name,
      supplier: product.supplier,
      initialStock: WHOLESALE_SEED_STOCK[product.id],
      availableStock: appState.wholesale.inventory[product.id] ?? 0,
      reserved: WHOLESALE_SEED_STOCK[product.id] - (appState.wholesale.inventory[product.id] ?? 0),
    })),
    reservations: appState.wholesale.reservations,
  };
}

function retailToolDefinitions() {
  return [
    {
      name: "search_products",
      description: "Search the authoritative retail catalog for workspace products. Use this for facts such as product IDs, prices, stock and features; do not ask this tool to recommend or compare products.",
      inputSchema: {
        type: "object",
        properties: {
          query: { type: "string", description: "Keywords describing the item or use case." },
          category: { type: "string", description: "Optional exact catalog category." },
          maxPrice: { type: "number", minimum: 0, description: "Optional maximum unit price in USD." },
          features: { type: "array", items: { type: "string" }, description: "Optional feature keywords." },
          limit: { type: "integer", minimum: 1, maximum: 20 },
        },
        required: ["query"],
        additionalProperties: false,
      },
      annotations: { readOnlyHint: true },
      execute: async (input) => runRegisteredTool("search_products", input, () => ({ products: searchRetailProducts(input), currency: "USD" })),
    },
    {
      name: "get_product_details",
      description: "Read normalized authoritative details for one or more retail product IDs, including dimensions, ergonomic features, compatibility, warranty, price and current stock.",
      inputSchema: {
        type: "object",
        properties: { productIds: { type: "array", minItems: 1, maxItems: 12, items: { type: "string" } } },
        required: ["productIds"],
        additionalProperties: false,
      },
      annotations: { readOnlyHint: true },
      execute: async (input) => runRegisteredTool("get_product_details", input, () => getRetailProductDetails(input.productIds)),
    },
    {
      name: "get_cart",
      description: "Read the current authoritative retail cart. Always use this after a person manually changes the cart and asks to continue.",
      inputSchema: { type: "object", properties: {}, additionalProperties: false },
      annotations: { readOnlyHint: true },
      execute: async (input) => runRegisteredTool("get_cart", input, () => retailCartSnapshot()),
    },
    {
      name: "set_cart_item",
      description: "Set a retail cart item to an exact target quantity. Quantity 0 removes it. The page validates stock, updates the visible cart and returns the resulting authoritative cart. Use only when the user asks to change the cart.",
      inputSchema: {
        type: "object",
        properties: {
          productId: { type: "string" },
          quantity: { type: "integer", minimum: 0 },
          variantId: { type: "string" },
        },
        required: ["productId", "quantity"],
        additionalProperties: false,
      },
      annotations: { readOnlyHint: false },
      execute: async (input) => runRegisteredTool("set_cart_item", input, () => setRetailCartItem(input.productId, input.quantity)),
    },
    {
      name: "get_fulfillment_options",
      description: "Read valid delivery and pickup choices for the current retail cart and destination. Use after the cart is final.",
      inputSchema: {
        type: "object",
        properties: { destination: { type: "string", description: "Delivery destination or pickup area." } },
        additionalProperties: false,
      },
      annotations: { readOnlyHint: true },
      execute: async (input) => runRegisteredTool("get_fulfillment_options", input, () => getFulfillmentOptions(input.destination)),
    },
    {
      name: "prepare_checkout",
      description: "Prepare a visible retail checkout for a selected delivery option. This does not create an order; a person must explicitly confirm the prepared checkout first.",
      inputSchema: {
        type: "object",
        properties: { deliveryOptionId: { type: "string" }, destination: { type: "string" } },
        required: ["deliveryOptionId"],
        additionalProperties: false,
      },
      annotations: { readOnlyHint: false },
      execute: async (input) => runRegisteredTool("prepare_checkout", input, () => prepareRetailCheckout(input)),
    },
    {
      name: "submit_retail_order",
      description: "Create the final retail order exactly once using an idempotency key. Use only after the person explicitly confirmed the visible prepared checkout. Repeating the same key returns the existing order.",
      inputSchema: {
        type: "object",
        properties: { idempotencyKey: { type: "string", minLength: 8 } },
        required: ["idempotencyKey"],
        additionalProperties: false,
      },
      annotations: { readOnlyHint: false },
      execute: async (input) => runRegisteredTool("submit_retail_order", input, () => submitRetailOrder(input)),
    },
  ];
}

function wholesaleToolDefinitions() {
  return [
    {
      name: "discover_products",
      description: "Search the authoritative local wholesale catalog using business context, objective and budget. Return supplier facts, price, MOQ, case pack and stock; the model decides what to recommend.",
      inputSchema: {
        type: "object",
        properties: {
          businessContext: { type: "string" },
          objective: { type: "string", enum: ["rotation", "margin", "balanced"] },
          maxOrderValue: { type: "number", minimum: 0 },
          categoryExclusions: { type: "array", items: { type: "string" } },
          limit: { type: "integer", minimum: 1, maximum: 20 },
        },
        required: ["businessContext", "objective", "maxOrderValue"],
        additionalProperties: false,
      },
      annotations: { readOnlyHint: true },
      execute: async (input) => runRegisteredTool("discover_products", input, () => discoverWholesaleProducts(input)),
    },
    {
      name: "get_wholesale_quote",
      description: "Get an authoritative wholesale quote for one product and quantity. The server validates MOQ, case pack, stock and price tier and returns nearest valid quantities when invalid.",
      inputSchema: {
        type: "object",
        properties: { productId: { type: "string" }, quantity: { type: "integer", minimum: 1 } },
        required: ["productId", "quantity"],
        additionalProperties: false,
      },
      annotations: { readOnlyHint: true },
      execute: async (input) => runRegisteredTool("get_wholesale_quote", input, () => wholesaleQuote(findWholesaleProduct(input.productId), input.quantity)),
    },
    {
      name: "get_draft_order",
      description: "Read the current authoritative wholesale draft order. Always use this after a person manually changes an item or quantity and asks to continue.",
      inputSchema: { type: "object", properties: {}, additionalProperties: false },
      annotations: { readOnlyHint: true },
      execute: async (input) => runRegisteredTool("get_draft_order", input, () => wholesaleDraftSnapshot()),
    },
    {
      name: "set_draft_order_item",
      description: "Set a wholesale draft item to an exact target quantity. The server validates MOQ, case pack, stock and price tier, updates the visible draft and returns the complete authoritative draft.",
      inputSchema: {
        type: "object",
        properties: { productId: { type: "string" }, quantity: { type: "integer", minimum: 0 } },
        required: ["productId", "quantity"],
        additionalProperties: false,
      },
      annotations: { readOnlyHint: false },
      execute: async (input) => runRegisteredTool("set_draft_order_item", input, () => setWholesaleDraftItem(input.productId, input.quantity)),
    },
    {
      name: "get_delivery_terms",
      description: "Read valid local pickup and delivery terms for the current wholesale draft. Use after the draft is final.",
      inputSchema: { type: "object", properties: {}, additionalProperties: false },
      annotations: { readOnlyHint: true },
      execute: async (input) => runRegisteredTool("get_delivery_terms", input, () => getDeliveryTerms()),
    },
    {
      name: "prepare_purchase_order",
      description: "Prepare a visible wholesale purchase-order form for a selected delivery term. This does not persist the final order; a person must explicitly confirm it first.",
      inputSchema: {
        type: "object",
        properties: { deliveryTermId: { type: "string" } },
        required: ["deliveryTermId"],
        additionalProperties: false,
      },
      annotations: { readOnlyHint: false },
      execute: async (input) => runRegisteredTool("prepare_purchase_order", input, () => preparePurchaseOrder(input)),
    },
    {
      name: "submit_wholesale_order",
      description: "Persist the final wholesale order exactly once with an idempotency key and reserve supplier inventory. Use only after the person explicitly confirmed the visible purchase order. Repeating the same key returns the existing order.",
      inputSchema: {
        type: "object",
        properties: { idempotencyKey: { type: "string", minLength: 8 } },
        required: ["idempotencyKey"],
        additionalProperties: false,
      },
      annotations: { readOnlyHint: false },
      execute: async (input) => runRegisteredTool("submit_wholesale_order", input, () => submitWholesaleOrder(input)),
    },
  ];
}

function adminToolDefinitions() {
  if (route === "/retail/admin") {
    return [{
      name: "get_retail_admin_snapshot",
      description: "Read the retail operations view with persisted orders, stock deltas and inventory movements.",
      inputSchema: { type: "object", properties: {}, additionalProperties: false },
      annotations: { readOnlyHint: true },
      execute: async (input) => runRegisteredTool("get_retail_admin_snapshot", input, () => getRetailAdminSnapshot()),
    }];
  }
  if (route === "/wholesale/supplier") {
    return [{
      name: "get_supplier_snapshot",
      description: "Read the wholesale supplier view with persisted orders, reservations and remaining stock.",
      inputSchema: { type: "object", properties: {}, additionalProperties: false },
      annotations: { readOnlyHint: true },
      execute: async (input) => runRegisteredTool("get_supplier_snapshot", input, () => getSupplierSnapshot()),
    }];
  }
  return [];
}

async function registerRouteTools() {
  if (registrationStarted) return;
  registrationStarted = true;
  const definitions = route === "/retail" ? retailToolDefinitions() : route === "/wholesale" ? wholesaleToolDefinitions() : adminToolDefinitions();
  const modelContext = document.modelContext;
  if (typeof modelContext?.registerTool !== "function") {
    siteTools.phase = "unsupported";
    siteTools.message = "WebMCP no disponible en este navegador · UI humana habilitada";
    renderApp();
    return;
  }
  try {
    for (const definition of definitions) {
      await modelContext.registerTool(definition);
      siteTools.registered.push({ name: definition.name, readOnly: definition.annotations?.readOnlyHint === true });
    }
    siteTools.phase = "ready";
    siteTools.message = `${siteTools.registered.length} herramientas Site tools disponibles`;
    recordToolActivity("registration", "success", {}, { message: `${siteTools.registered.length} herramientas registradas en la página superior` });
  } catch (error) {
    const parsed = errorSummary(error);
    siteTools.phase = "error";
    siteTools.message = `Registro incompleto · ${parsed.code}`;
    recordToolActivity("registration", "error", {}, parsed);
  }
  renderApp();
}

function renderNav() {
  const active = (href) => route === href ? " active" : "";
  return `
    <header class="nav">
      <a class="brand" href="/" aria-label="WebMCP Shared Control inicio"><span class="brand-mark">↔</span><span>Shared Control</span></a>
      <nav class="nav-links" aria-label="Demos">
        <a class="nav-link${active("/retail")}" href="/retail">Retail workspace</a>
        <a class="nav-link${active("/retail/admin")}" href="/retail/admin">Retail ops</a>
        <a class="nav-link${active("/wholesale")}" href="/wholesale">Wholesale</a>
        <a class="nav-link${active("/wholesale/supplier")}" href="/wholesale/supplier">Supplier view</a>
        <button class="button secondary small" data-action="reset-data" type="button">Reset demo</button>
      </nav>
    </header>
  `;
}

function renderSiteToolsStatus() {
  const dotClass = siteTools.phase === "ready" ? "ready" : siteTools.phase === "error" || siteTools.phase === "unsupported" ? "error" : "";
  const side = siteTools.lastTool ? `Última: ${escapeHtml(siteTools.lastTool.tool)} · ${shortDate(siteTools.lastTool.at)}` : "Página superior · estado compartido";
  return `<div class="status-strip" data-testid="site-tools-status"><div class="status-main"><span class="status-dot ${dotClass}"></span><span>${escapeHtml(siteTools.message)}</span></div><div class="status-side">${side}</div></div>`;
}

function renderInspector() {
  const pills = siteTools.registered.length
    ? siteTools.registered.map((tool) => `<span class="tool-pill">${escapeHtml(tool.name)}${tool.readOnly ? " · read" : " · write"}</span>`).join("")
    : `<span class="tool-pill">pendiente de runtime nativo</span>`;
  const activity = siteTools.activity.length
    ? siteTools.activity.slice(0, 4).map((item) => `<div class="inspector-line"><span>${escapeHtml(item.tool)}</span><strong>${escapeHtml(item.status)} · ${escapeHtml(item.summary)}</strong></div>`).join("")
    : `<div class="inspector-line"><span>Actividad</span><strong>Aún no hay llamadas</strong></div>`;
  return `
    <details class="card inspector">
      <summary>Inspector de capacidades <span>${siteTools.registered.length || "—"}</span></summary>
      <div class="inspector-body">
        <div class="tool-list">${pills}</div>
        ${activity}
      </div>
    </details>
  `;
}

function renderFooter() {
  return `<footer class="footer"><span>Demo local · estado persistido en este navegador</span><span><a href="https://github.com/ejaircastillo/webmcp-shared-control" target="_blank" rel="noreferrer">Código abierto</a> · session ${escapeHtml(appState.sessionId.slice(-8))}</span></footer>`;
}

function renderHome() {
  return `
    <div class="hero">
      <div>
        <div class="eyebrow">WebMCP Challenge · shared control</div>
        <h1>La página expone las capacidades. La persona conserva el control.</h1>
        <p class="lede">Un mismo agente puede trabajar sobre dos aplicaciones distintas, mientras la persona cambia el estado vivo de la página y el agente lo vuelve a leer antes de continuar.</p>
      </div>
      <aside class="hero-aside"><p>La prueba competitiva no es solo descubrir herramientas.</p><strong>Agente → humano → estado autoritativo → agente</strong></aside>
    </div>
    <section class="section-heading"><div><div class="eyebrow">Dos superficies, un patrón</div><h2>Elegí una demo para entrar como persona</h2></div><p>Las herramientas WebMCP aparecen solamente en la página superior que las ofrece. La navegación entre demos conserva la conversación, no un agente personalizado.</p></section>
    <section class="card-grid">
      <article class="card demo-card"><div class="card-pad"><div class="card-kicker">A · retail workspace</div><h3>Armá un lugar cómodo para trabajar</h3><p>Catálogo de escritorio, silla y accesorios. El carrito puede cambiar manualmente en el medio y luego se reanuda leyendo el estado real.</p></div><div class="card-footer"><span class="flow-label">search · cart · human handoff · order</span><a class="button" href="/retail">Abrir retail →</a></div></article>
      <article class="card demo-card wholesale"><div class="card-pad"><div class="card-kicker">B · local wholesale</div><h3>Comprá mercadería para tu ferretería</h3><p>Productos de proveedores locales con MOQ, bultos, escalas de precio y reserva de inventario. El borrador también acepta intervención humana.</p></div><div class="card-footer"><span class="flow-label">discover · quote · draft · PO</span><a class="button green" href="/wholesale">Abrir wholesale →</a></div></article>
    </section>
    <section class="card" style="margin-top:17px"><div class="card-pad"><div class="eyebrow">Regla de continuidad</div><h2 style="margin-top:9px">El estado de la aplicación vence a la memoria de la conversación.</h2><div class="flow-steps"><div class="flow-step"><span>01 · AGENTE</span><p>Usa una capacidad declarada por la página.</p></div><div class="flow-step"><span>02 · HUMANO</span><p>Cambia el carrito o borrador con la UI normal.</p></div><div class="flow-step"><span>03 · RELECTURA</span><p>El agente consulta el estado autoritativo actual.</p></div><div class="flow-step"><span>04 · CONTINUIDAD</span><p>La operación sigue desde lo que realmente quedó.</p></div></div></div></section>
  `;
}

function renderRouteHero(title, description, kicker, action = "") {
  return `<div class="route-hero"><div><div class="eyebrow">${escapeHtml(kicker)}</div><h1>${escapeHtml(title)}</h1><p>${escapeHtml(description)}</p></div><div class="route-actions">${action}</div></div>${renderSiteToolsStatus()}`;
}

function retailCategories() {
  return [...new Set(RETAIL_PRODUCTS.map((product) => product.category))];
}

function renderRetailProductList() {
  const products = searchRetailProducts({ query: ui.retailSearch, category: ui.retailCategory, limit: 20 });
  if (!products.length) return `<div class="empty">No hay resultados para esta búsqueda.</div>`;
  return products.map((product) => {
    const full = findRetailProduct(product.productId);
    const current = appState.retail.cart.find((item) => item.productId === product.productId)?.quantity ?? 0;
    const stock = appState.retail.inventory[product.productId] ?? 0;
    return `<article class="product"><div class="product-icon">${escapeHtml(product.thumbnail)}</div><div><div class="product-name">${escapeHtml(product.name)}</div><div class="product-meta">${escapeHtml(product.category)} · ${escapeHtml(full.highlights.join(" · "))} · stock <strong>${stock}</strong></div></div><div class="product-actions"><div class="price">${formatMoney(product.price)}</div><button class="button small" data-action="retail-add" data-product-id="${escapeHtml(product.productId)}" data-quantity="${current + 1}" ${current >= stock ? "disabled" : ""}>${current ? `Sumar · ${current}` : "Agregar"}</button></div></article>`;
  }).join("");
}

function renderRetailCart() {
  const cart = retailCartSnapshot();
  const items = cart.items.length
    ? cart.items.map((item) => `<div class="summary-item"><div><div class="summary-item-name">${escapeHtml(item.name)}</div><div class="summary-item-meta">${formatMoney(item.unitPrice)} · stock ${item.stock}</div><div class="button-row" style="margin-top:8px"><button class="button secondary small" data-action="retail-set" data-product-id="${escapeHtml(item.productId)}" data-quantity="${item.quantity - 1}">−</button><span style="min-width:24px;text-align:center;font-size:.8rem">${item.quantity}</span><button class="button secondary small" data-action="retail-set" data-product-id="${escapeHtml(item.productId)}" data-quantity="${item.quantity + 1}" ${item.quantity >= item.stock ? "disabled" : ""}>+</button><button class="button danger small" data-action="retail-set" data-product-id="${escapeHtml(item.productId)}" data-quantity="0">Quitar</button></div></div><div class="summary-item-total">${formatMoney(item.lineTotal)}</div></div>`).join("")
    : `<div class="summary-muted">Todavía no hay productos. El agente puede buscar en el catálogo y armar una combinación; vos podés modificarla en cualquier momento.</div>`;
  return `<section class="card summary-card" data-testid="retail-cart"><div class="summary-head"><div><h2>Carrito actual</h2><p>${cart.items.length ? `${cart.items.length} productos · editable por vos` : "Estado autoritativo vacío"}</p></div><span class="badge">${cart.items.length ? "en progreso" : "listo"}</span></div><div class="summary-items">${items}</div><div class="summary-foot"><span class="summary-total-label">Subtotal</span><span class="summary-total">${formatMoney(cart.subtotal)}</span></div>${cart.items.length ? `<div class="summary-muted" style="padding-top:0"><div class="notice green"><strong>Handoff preparado</strong> Cambiá cantidades arriba y decile al agente “seguimos desde acá”. La continuación correcta empieza con <code>get_cart</code>.</div></div>` : ""}</section>`;
}

function renderRetailCheckout() {
  const cart = retailCartSnapshot();
  const pending = appState.retail.pendingCheckout;
  if (!cart.items.length) return `<section class="card checkout"><h2>Checkout</h2><p>Cuando el carrito esté listo, acá se prepara una entrega visible antes de pedir confirmación.</p><div class="notice">El checkout permanece bloqueado hasta que haya al menos un producto.</div></section>`;
  const options = getFulfillmentOptions("CABA / AMBA").options;
  if (!pending) {
    return `<section class="card checkout"><h2>Preparar checkout</h2><p>Elegí un modo de entrega. Preparar no crea ninguna orden y deja el resumen visible para revisión humana.</p><div class="field"><label for="retail-delivery">Entrega</label><select class="select" id="retail-delivery">${options.map((option) => `<option value="${option.id}">${escapeHtml(option.label)} · ${formatMoney(option.price)} · ${escapeHtml(option.eta)}</option>`).join("")}</select></div><button class="button" data-action="retail-prepare" type="button">Preparar resumen →</button></section>`;
  }
  const confirmed = Boolean(pending.humanConfirmedAt);
  return `<section class="card checkout"><h2>${confirmed ? "Checkout confirmado" : "Revisión humana"}</h2><p>${confirmed ? "La persona confirmó este resumen. El último paso puede persistir la orden con idempotencia." : "El agente preparó una operación sensible. Revisá el carrito y confirmá explícitamente antes de crear la orden."}</p><div class="confirmation"><strong>${confirmed ? "✓ Confirmado por una persona" : "Se necesita tu confirmación"}</strong><p>${escapeHtml(pending.deliveryOption.label)} · ${formatMoney(pending.deliveryOption.price)} · preparado ${shortDate(pending.preparedAt)}</p>${confirmed ? `<div class="button-row"><button class="button green" data-action="retail-submit" type="button">Crear pedido ${escapeHtml(pending.idempotencyKey.slice(-6))} →</button></div>` : `<button class="button" data-action="retail-confirm" type="button">Confirmar y habilitar pedido</button>`}</div></section>`;
}

function renderRetail() {
  const categories = retailCategories();
  return `${renderRouteHero("Un espacio de trabajo que se adapta", "Tengo poco espacio y hasta USD 800. Encontrá una combinación cómoda, verificá los detalles y dejá que la persona ajuste el carrito antes de confirmar.", "Retail workspace", `<a class="button secondary small" href="/retail/admin">Ver operaciones →</a>`)}<div class="workspace-grid"><div class="main-column"><section class="card"><div class="toolbar"><div><div class="toolbar-title">Catálogo workspace</div><div class="toolbar-subtitle">Datos de precio y stock provistos por la página</div></div><div class="search"><input class="input" id="retail-search" type="search" placeholder="Buscar silla, luz, espacio…" value="${escapeHtml(ui.retailSearch)}" aria-label="Buscar productos retail" /></div></div><div class="filter-row"><button class="filter-chip ${ui.retailCategory === "all" ? "active" : ""}" data-action="retail-category" data-category="all" type="button">Todo</button>${categories.map((category) => `<button class="filter-chip ${ui.retailCategory === category ? "active" : ""}" data-action="retail-category" data-category="${escapeHtml(category)}" type="button">${escapeHtml(category)}</button>`).join("")}</div><div class="product-list" id="retail-product-list" data-testid="retail-product-list">${renderRetailProductList()}</div></section><section class="card"><div class="card-pad"><div class="eyebrow">Punto de control</div><h2 style="margin-top:9px">La mano humana puede entrar en cualquier momento.</h2><p style="color:var(--muted);max-width:650px;line-height:1.55">Probá agregar productos, cambiá una cantidad con los botones normales y después pedile al agente que continúe. La herramienta crítica no confía en el historial: vuelve a leer el carrito actual.</p><div class="flow-steps"><div class="flow-step"><span>CATÁLOGO</span><p>search_products + detalles</p></div><div class="flow-step"><span>AGENTE</span><p>set_cart_item exacto</p></div><div class="flow-step"><span>HUMANO</span><p>edición directa del carrito</p></div><div class="flow-step"><span>RELECTURA</span><p>get_cart obligatorio</p></div></div></div></section></div><aside class="side-column">${renderRetailCart()}${renderRetailCheckout()}${renderInspector()}</aside></div>`;
}

function renderAdminTable() {
  const snapshot = getRetailAdminSnapshot();
  const orderRows = snapshot.orders.length
    ? snapshot.orders.slice().reverse().map((order) => `<tr><td><strong>${escapeHtml(order.id)}</strong></td><td>${shortDate(order.createdAt)}</td><td>${order.items.reduce((total, item) => total + item.quantity, 0)} u.</td><td>${formatMoney(order.total)}</td><td><span class="badge">${escapeHtml(order.status)}</span></td></tr>`).join("")
    : `<tr><td colspan="5"><div class="empty">Todavía no hay pedidos persistidos.</div></td></tr>`;
  const inventoryRows = snapshot.inventory.map((item) => `<tr><td><strong>${escapeHtml(item.name)}</strong></td><td>${item.initialStock}</td><td>${item.availableStock}</td><td class="${item.delta < 0 ? "" : ""}">${item.delta > 0 ? "+" : ""}${item.delta}</td></tr>`).join("");
  const units = snapshot.inventory.reduce((total, item) => total + item.availableStock, 0);
  const delta = snapshot.inventory.reduce((total, item) => total + item.delta, 0);
  return `<div class="admin-grid"><section class="card"><div class="card-pad"><div class="eyebrow">Retail operations</div><h2 style="margin-top:9px">El pedido deja una huella operativa.</h2><p style="color:var(--muted);line-height:1.55">Esta vista no es memoria de la conversación: muestra las órdenes y el delta de stock guardados por la aplicación.</p><div class="metric-grid" style="margin-top:22px"><div class="metric"><div class="metric-label">Pedidos confirmados</div><div class="metric-value">${snapshot.orders.length}</div></div><div class="metric"><div class="metric-label">Unidades disponibles</div><div class="metric-value">${units}</div></div><div class="metric"><div class="metric-label">Delta de stock</div><div class="metric-value">${delta}</div></div></div></div></section><section class="card"><div class="card-pad"><div class="eyebrow">Evidence cue</div><h2 style="margin-top:9px">Exactly once</h2><p style="color:var(--muted);line-height:1.55">Cada orden tiene una idempotency key. Repetir la misma confirmación devuelve la orden existente y no vuelve a descontar stock.</p><div class="notice green" style="margin-top:20px"><strong>${snapshot.orders.length ? `Último pedido: ${escapeHtml(snapshot.orders[snapshot.orders.length - 1].id)}` : "Listo para la primera orden"}</strong><br />Stock y pedido se actualizan en la misma operación de demo.</div></div></section></div><section class="card" style="margin-top:17px"><div class="toolbar"><div><div class="toolbar-title">Pedidos confirmados</div><div class="toolbar-subtitle">Visible para el lado operativo</div></div><span class="badge">${snapshot.orders.length} total</span></div><div class="table-wrap"><table><thead><tr><th>Pedido</th><th>Fecha</th><th>Unidades</th><th>Total</th><th>Estado</th></tr></thead><tbody>${orderRows}</tbody></table></div></section><section class="card" style="margin-top:17px"><div class="toolbar"><div><div class="toolbar-title">Inventario retail</div><div class="toolbar-subtitle">El delta aparece después de confirmar</div></div></div><div class="table-wrap"><table><thead><tr><th>Producto</th><th>Inicial</th><th>Disponible</th><th>Delta</th></tr></thead><tbody>${inventoryRows}</tbody></table></div></section>`;
}

function renderRetailAdmin() {
  return `${renderRouteHero("Prueba operativa retail", "Después de confirmar, la aplicación deja una orden visible y un cambio de inventario que se puede inspeccionar sin abrir el chat.", "Retail admin", `<a class="button secondary small" href="/retail">Volver al workspace →</a>`)}${renderAdminTable()}<div style="margin-top:17px">${renderInspector()}</div>`;
}

function wholesaleCategories() {
  return [...new Set(WHOLESALE_PRODUCTS.map((product) => product.category))];
}

function renderWholesaleProductList() {
  const query = ui.wholesaleSearch.toLowerCase().trim();
  const products = WHOLESALE_PRODUCTS.filter((product) => !query || [product.name, product.category, product.supplier].join(" ").toLowerCase().includes(query));
  if (!products.length) return `<div class="empty">No hay resultados para esta búsqueda.</div>`;
  return products.map((product) => {
    const stock = appState.wholesale.inventory[product.id] ?? 0;
    const current = appState.wholesale.draft.find((item) => item.productId === product.id)?.quantity ?? 0;
    return `<article class="product wholesale"><div class="product-icon">${escapeHtml(product.icon)}</div><div><div class="product-name">${escapeHtml(product.name)}</div><div class="product-meta">${escapeHtml(product.supplier)} · MOQ <strong>${product.moq}</strong> · bulto <strong>${product.casePack}</strong> · stock <strong>${stock}</strong><br />${product.marginPct}% margen sugerido · ${product.rotationScore}/100 rotación</div></div><div class="product-actions"><div class="price">desde ${formatMoney(product.basePrice)}</div><div class="button-row"><input class="input" style="width:78px;min-height:34px;padding:7px 8px" data-wholesale-qty="${escapeHtml(product.id)}" type="number" min="0" step="${product.casePack}" value="${current || product.moq}" aria-label="Cantidad de ${escapeHtml(product.name)}" /><button class="button green small" data-action="wholesale-set-from-input" data-product-id="${escapeHtml(product.id)}" type="button">${current ? "Actualizar" : "Cotizar +"}</button></div></div></article>`;
  }).join("");
}

function renderWholesaleDraft() {
  const draft = wholesaleDraftSnapshot();
  const items = draft.items.length
    ? draft.items.map((item) => { const product = findWholesaleProduct(item.productId); return `<div class="summary-item"><div><div class="summary-item-name">${escapeHtml(item.name)}</div><div class="summary-item-meta">${escapeHtml(item.supplier)} · ${formatMoney(item.unitPrice)} / unidad · MOQ ${item.moq}</div><div class="button-row" style="margin-top:8px"><button class="button secondary small" data-action="wholesale-set" data-product-id="${escapeHtml(item.productId)}" data-quantity="${item.quantity - product.casePack}">− bulto</button><span style="min-width:42px;text-align:center;font-size:.8rem">${item.quantity}</span><button class="button secondary small" data-action="wholesale-set" data-product-id="${escapeHtml(item.productId)}" data-quantity="${item.quantity + product.casePack}">+ bulto</button><button class="button danger small" data-action="wholesale-set" data-product-id="${escapeHtml(item.productId)}" data-quantity="0">Quitar</button></div></div><div class="summary-item-total">${formatMoney(item.lineTotal)}</div></div>`; }).join("")
    : `<div class="summary-muted">El borrador está vacío. Sumá packs desde el catálogo; las cantidades válidas respetan MOQ y bulto.</div>`;
  return `<section class="card summary-card" data-testid="wholesale-draft"><div class="summary-head"><div><h2>Borrador actual</h2><p>${draft.items.length ? `${draft.items.length} SKUs · ${draft.totalUnits} unidades · editable por vos` : "Estado autoritativo vacío"}</p></div><span class="badge">${draft.items.length ? "en progreso" : "listo"}</span></div><div class="summary-items">${items}</div><div class="summary-foot"><span class="summary-total-label">Subtotal</span><span class="summary-total">${formatMoney(draft.subtotal)}</span></div>${draft.items.length ? `<div class="summary-muted" style="padding-top:0"><div class="notice green"><strong>Handoff preparado</strong> Cambiá una cantidad o quitá un SKU con la UI normal. La continuación correcta empieza con <code>get_draft_order</code>.</div></div>` : ""}</section>`;
}

function renderWholesaleCheckout() {
  const draft = wholesaleDraftSnapshot();
  const pending = appState.wholesale.pendingPurchaseOrder;
  if (!draft.items.length) return `<section class="card checkout"><h2>Purchase order</h2><p>Cuando el borrador esté listo, elegí un término local y prepará la orden para revisión humana.</p><div class="notice">El formulario queda bloqueado hasta que haya productos válidos.</div></section>`;
  if (!pending) {
    const terms = getDeliveryTerms().terms;
    return `<section class="card checkout"><h2>Preparar purchase order</h2><p>El servidor devuelve términos válidos para el borrador actual. Preparar no reserva inventario todavía.</p><div class="field"><label for="wholesale-delivery">Término local</label><select class="select" id="wholesale-delivery">${terms.map((term) => `<option value="${term.id}" ${term.available ? "" : "disabled"}>${escapeHtml(term.label)} · ${formatMoney(term.price)} · ${escapeHtml(term.eta)}${term.available ? "" : " · no disponible"}</option>`).join("")}</select></div><button class="button green" data-action="wholesale-prepare" type="button">Preparar orden →</button></section>`;
  }
  const confirmed = Boolean(pending.humanConfirmedAt);
  return `<section class="card checkout"><h2>${confirmed ? "Orden confirmada" : "Revisión humana"}</h2><p>${confirmed ? "La persona confirmó el resumen. La persistencia final reserva inventario una sola vez." : "Revisá productos, cantidades y entrega. La reserva queda bloqueada hasta tu confirmación explícita."}</p><div class="confirmation"><strong>${confirmed ? "✓ Confirmado por una persona" : "Se necesita tu confirmación"}</strong><p>${escapeHtml(pending.deliveryTerm.label)} · ${formatMoney(pending.deliveryTerm.price)} · preparado ${shortDate(pending.preparedAt)}</p>${confirmed ? `<button class="button green" data-action="wholesale-submit" type="button">Crear PO ${escapeHtml(pending.idempotencyKey.slice(-6))} →</button>` : `<button class="button green" data-action="wholesale-confirm" type="button">Confirmar y habilitar PO</button>`}</div></section>`;
}

function renderWholesale() {
  return `${renderRouteHero("Mercadería local para tu ferretería", "Tengo USD 3.000 y busco un equilibrio entre margen y rotación. La página aporta catálogo, cotizaciones, MOQ, bultos y stock; el criterio comercial queda en manos del agente y la persona.", "Wholesale procurement", `<a class="button secondary small" href="/wholesale/supplier">Ver proveedor →</a>`)}<div class="workspace-grid"><div class="main-column"><section class="card"><div class="toolbar"><div><div class="toolbar-title">Catálogo mayorista</div><div class="toolbar-subtitle">Cotización autoritativa por SKU y cantidad</div></div><div class="search"><input class="input" id="wholesale-search" type="search" placeholder="Buscar mechas, guantes, iluminación…" value="${escapeHtml(ui.wholesaleSearch)}" aria-label="Buscar productos wholesale" /></div></div><div class="filter-row"><span class="filter-chip active">Objetivo</span><button class="filter-chip ${ui.wholesaleObjective === "rotation" ? "active" : ""}" data-action="wholesale-objective" data-objective="rotation" type="button">Rotación</button><button class="filter-chip ${ui.wholesaleObjective === "balanced" ? "active" : ""}" data-action="wholesale-objective" data-objective="balanced" type="button">Equilibrado</button><button class="filter-chip ${ui.wholesaleObjective === "margin" ? "active" : ""}" data-action="wholesale-objective" data-objective="margin" type="button">Margen</button></div><div class="product-list" id="wholesale-product-list" data-testid="wholesale-product-list">${renderWholesaleProductList()}</div></section><section class="card"><div class="card-pad"><div class="eyebrow">Punto de control</div><h2 style="margin-top:9px">La persona puede corregir el pedido, no solo aprobarlo.</h2><p style="color:var(--muted);max-width:650px;line-height:1.55">Probá cambiar un SKU o la cantidad de bultos en el borrador. Cuando el agente reanude, debe llamar <code>get_draft_order</code> y trabajar desde la cantidad actual.</p><div class="flow-steps"><div class="flow-step"><span>DESCUBRIR</span><p>discover_products</p></div><div class="flow-step"><span>COTIZAR</span><p>MOQ + bulto + tier</p></div><div class="flow-step"><span>HUMANO</span><p>edición directa del draft</p></div><div class="flow-step"><span>RELECTURA</span><p>get_draft_order</p></div></div></div></section></div><aside class="side-column">${renderWholesaleDraft()}${renderWholesaleCheckout()}${renderInspector()}</aside></div>`;
}

function renderSupplierTable() {
  const snapshot = getSupplierSnapshot();
  const orderRows = snapshot.orders.length
    ? snapshot.orders.slice().reverse().map((order) => `<tr><td><strong>${escapeHtml(order.id)}</strong></td><td>${shortDate(order.createdAt)}</td><td>${order.items.reduce((total, item) => total + item.quantity, 0)} u.</td><td>${formatMoney(order.total)}</td><td><span class="badge">${escapeHtml(order.status)}</span></td></tr>`).join("")
    : `<tr><td colspan="5"><div class="empty">Todavía no hay órdenes de proveedor.</div></td></tr>`;
  const inventoryRows = snapshot.inventory.map((item) => `<tr><td><strong>${escapeHtml(item.name)}</strong></td><td>${escapeHtml(item.supplier)}</td><td>${item.initialStock}</td><td>${item.availableStock}</td><td>${item.reserved}</td></tr>`).join("");
  const available = snapshot.inventory.reduce((total, item) => total + item.availableStock, 0);
  const reserved = snapshot.inventory.reduce((total, item) => total + item.reserved, 0);
  return `<div class="admin-grid"><section class="card"><div class="card-pad"><div class="eyebrow">Supplier operations</div><h2 style="margin-top:9px">La compra cambia el lado proveedor.</h2><p style="color:var(--muted);line-height:1.55">Las reservas se generan al persistir la PO y quedan visibles aquí para demostrar una consecuencia real en la aplicación.</p><div class="metric-grid" style="margin-top:22px"><div class="metric"><div class="metric-label">PO confirmadas</div><div class="metric-value">${snapshot.orders.length}</div></div><div class="metric"><div class="metric-label">Unidades disponibles</div><div class="metric-value">${available}</div></div><div class="metric"><div class="metric-label">Reservadas</div><div class="metric-value">${reserved}</div></div></div></div></section><section class="card"><div class="card-pad"><div class="eyebrow">Evidence cue</div><h2 style="margin-top:9px">Supplier reservation</h2><p style="color:var(--muted);line-height:1.55">Cada idempotency key se resuelve una sola vez. Una repetición devuelve la PO existente y conserva la reserva original.</p><div class="notice green" style="margin-top:20px"><strong>${snapshot.orders.length ? `Última PO: ${escapeHtml(snapshot.orders[snapshot.orders.length - 1].id)}` : "Listo para la primera PO"}</strong><br />Inventario disponible y reservas se actualizan juntos.</div></div></section></div><section class="card" style="margin-top:17px"><div class="toolbar"><div><div class="toolbar-title">Órdenes recibidas</div><div class="toolbar-subtitle">Visible para el lado proveedor</div></div><span class="badge">${snapshot.orders.length} total</span></div><div class="table-wrap"><table><thead><tr><th>Orden</th><th>Fecha</th><th>Unidades</th><th>Total</th><th>Estado</th></tr></thead><tbody>${orderRows}</tbody></table></div></section><section class="card" style="margin-top:17px"><div class="toolbar"><div><div class="toolbar-title">Inventario y reservas</div><div class="toolbar-subtitle">Delta de proveedor por SKU</div></div></div><div class="table-wrap"><table><thead><tr><th>Producto</th><th>Proveedor</th><th>Inicial</th><th>Disponible</th><th>Reservado</th></tr></thead><tbody>${inventoryRows}</tbody></table></div></section>`;
}

function renderSupplier() {
  return `${renderRouteHero("Vista del proveedor", "La segunda demo termina del otro lado de la operación: la orden mayorista persistida y la reserva de inventario quedan visibles sin depender de la conversación.", "Wholesale supplier", `<a class="button green small" href="/wholesale">Volver al procurement →</a>`)}${renderSupplierTable()}<div style="margin-top:17px">${renderInspector()}</div>`;
}

function renderApp() {
  const app = document.querySelector("#app");
  if (!app) return;
  let content = "";
  if (route === "/") content = renderHome();
  if (route === "/retail") content = renderRetail();
  if (route === "/retail/admin") content = renderRetailAdmin();
  if (route === "/wholesale") content = renderWholesale();
  if (route === "/wholesale/supplier") content = renderSupplier();
  app.innerHTML = `<div class="shell">${renderNav()}<main>${content}</main>${renderFooter()}</div><div id="toast-stack" aria-live="assertive"></div>`;
  bindEvents();
}

function showToast(message, tone = "default") {
  const stack = document.querySelector("#toast-stack");
  if (!stack) return;
  const toast = document.createElement("div");
  toast.className = `toast ${tone}`;
  toast.textContent = message;
  stack.appendChild(toast);
  window.setTimeout(() => toast.remove(), 4200);
}

function handleUiError(error) {
  const parsed = errorSummary(error);
  showToast(`${parsed.code}: ${parsed.message}`, "error");
}

async function handleAction(actionTarget) {
  const action = actionTarget.dataset.action;
  if (action === "reset-data") {
    if (window.confirm("¿Restaurar stock, carritos, borradores y órdenes de la demo?")) resetDemo();
    return;
  }
  try {
    if (action === "retail-category") {
      ui.retailCategory = actionTarget.dataset.category;
      renderApp();
      return;
    }
    if (action === "retail-add" || action === "retail-set") {
      const productId = actionTarget.dataset.productId;
      const quantity = Number(actionTarget.dataset.quantity);
      setRetailCartItem(productId, quantity);
      recordHumanActivity(`carrito actualizado · ${productId} → ${quantity}`);
      renderApp();
      return;
    }
    if (action === "retail-prepare") {
      const deliveryOptionId = document.querySelector("#retail-delivery")?.value;
      prepareRetailCheckout({ deliveryOptionId, destination: "CABA / AMBA" });
      recordHumanActivity("checkout preparado para revisión");
      renderApp();
      return;
    }
    if (action === "retail-confirm") {
      confirmRetailCheckout();
      recordHumanActivity("checkout confirmado explícitamente por la persona");
      showToast("Confirmación registrada. El pedido ya puede persistirse.", "success");
      renderApp();
      return;
    }
    if (action === "retail-submit") {
      const result = submitRetailOrder({ idempotencyKey: appState.retail.pendingCheckout?.idempotencyKey });
      recordHumanActivity(`pedido ${result.order.id} persistido exactamente una vez`);
      showToast(`Pedido ${result.order.id} confirmado · operaciones actualizado`, "success");
      renderApp();
      return;
    }
    if (action === "wholesale-objective") {
      ui.wholesaleObjective = actionTarget.dataset.objective;
      renderApp();
      return;
    }
    if (action === "wholesale-set-from-input") {
      const productId = actionTarget.dataset.productId;
      const quantity = Number(document.querySelector(`[data-wholesale-qty="${CSS.escape(productId)}"]`)?.value);
      setWholesaleDraftItem(productId, quantity);
      recordHumanActivity(`borrador actualizado · ${productId} → ${quantity}`);
      renderApp();
      return;
    }
    if (action === "wholesale-set") {
      const productId = actionTarget.dataset.productId;
      const quantity = Number(actionTarget.dataset.quantity);
      setWholesaleDraftItem(productId, quantity);
      recordHumanActivity(`borrador actualizado · ${productId} → ${quantity}`);
      renderApp();
      return;
    }
    if (action === "wholesale-prepare") {
      const deliveryTermId = document.querySelector("#wholesale-delivery")?.value;
      preparePurchaseOrder({ deliveryTermId });
      recordHumanActivity("purchase order preparada para revisión");
      renderApp();
      return;
    }
    if (action === "wholesale-confirm") {
      confirmPurchaseOrder();
      recordHumanActivity("purchase order confirmada explícitamente por la persona");
      showToast("Confirmación registrada. La reserva puede persistirse.", "success");
      renderApp();
      return;
    }
    if (action === "wholesale-submit") {
      const result = submitWholesaleOrder({ idempotencyKey: appState.wholesale.pendingPurchaseOrder?.idempotencyKey });
      recordHumanActivity(`PO ${result.order.id} persistida exactamente una vez`);
      showToast(`PO ${result.order.id} confirmada · reserva visible para proveedor`, "success");
      renderApp();
    }
  } catch (error) {
    handleUiError(error);
  }
}

function updateCatalogList(selector, html) {
  const element = document.querySelector(selector);
  if (element) element.innerHTML = html;
}

function bindEvents() {
  const app = document.querySelector("#app");
  if (!app) return;
  app.addEventListener("click", (event) => {
    const actionTarget = event.target.closest("[data-action]");
    if (actionTarget) void handleAction(actionTarget);
  });
  app.addEventListener("input", (event) => {
    if (event.target.id === "retail-search") {
      ui.retailSearch = event.target.value;
      updateCatalogList("#retail-product-list", renderRetailProductList());
    }
    if (event.target.id === "wholesale-search") {
      ui.wholesaleSearch = event.target.value;
      updateCatalogList("#wholesale-product-list", renderWholesaleProductList());
    }
  });
}

renderApp();
void registerRouteTools();
