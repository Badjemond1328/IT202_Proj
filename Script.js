document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const name = params.get("name");
  const price = params.get("price");
  const sizes = params.get("sizes")?.split(",");
  const productParam = params.get("product");
  const pageId = window.location.pathname.split("/").pop().replace(".html", "");

  const productImages = {
    blue: "/img/b_coat.png",
    brown: "/img/o_coat.png",
    black: "/img/black_coat.png",
    darkbrown: "/img/br_coat.png",
    charcoal: "/img/g_coat.png"
  };

  // Decide which key to use for product image: prefer `product` query param, then pageId
  const productKey = productParam || pageId;

  // Update product name
  const nameEl = document.getElementById("product-name");
  if (nameEl && name) nameEl.textContent = name;

  // Update product price
  const priceEl = document.getElementById("product-price");
  if (priceEl && price) priceEl.textContent = price;

  // Update product image
  const imgEl = document.getElementById("product-img");
  if (imgEl) {
    imgEl.src = productImages[productKey] || productImages[pageId] || "/img/fallback.png";
    imgEl.alt = name || "Product";
  }

  // Update size options (supports both <select> and list of .size-btn elements)
  const sizeSelect = document.getElementById("size");
  if (sizeSelect && sizes) {
    sizeSelect.innerHTML = ""; // clear existing
    sizes.forEach(size => {
      const option = document.createElement("option");
      option.textContent = size;
      option.value = size;
      sizeSelect.appendChild(option);
    });
  } else if (sizes) {
    // If there are individual elements with class `size-btn`, update their text where present
    const sizeBtns = document.querySelectorAll('.size-btn');
    if (sizeBtns.length) {
      // replace text of existing size-btns or create missing ones
      sizeBtns.forEach((el, idx) => {
        el.textContent = sizes[idx] || el.textContent;
      });
    }
  }
});