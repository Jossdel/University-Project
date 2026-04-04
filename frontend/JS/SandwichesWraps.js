import { apiValues } from "./api.js";

const obtenerSandwichesWraps = async () => {
  const productos = await apiValues();

  const sandwiches = productos.filter(
    (producto) => producto.categoria === "Sandwiches y wraps",
  );

  const container = document.querySelector(".container-sandwiches");
  container.innerHTML = "";

  sandwiches.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("item");

    let imagen = "";

    switch (item.nombre.toLowerCase()) {
      case "sandwich de jamón y queso":
        imagen = "../img/Cafe_fotos/Sandwiches y wraps/sandwich_jamón_queso.png";
        break;

      case "wrap de pollo":
        imagen = "../img/Cafe_fotos/Sandwiches y wraps/wrap_pollo.png";
        break;

      case "sandwich club":
        imagen = "../img/Cafe_fotos/Sandwiches y wraps/sandwich_club.png";
        break;

      case "panini de pollo":
        imagen = "../img/Cafe_fotos/Sandwiches y wraps/panini_pollo.png";
        break;

      default:
        imagen = "../img/Cafe_fotos/Sandwiches y wraps/default.png";
    }

    div.innerHTML = `
      <figure class="image-box">
        <img src="${imagen}" alt="${item.nombre}" class="img-cafes">
      </figure>

      <div class="info-product">
        <h2 class="product-name">${item.nombre}</h2>
        <p class="price">RD$ ${item.precio}</p>
        <button class="add-button">Añadir al carrito</button>
      </div>
    `;

    container.appendChild(div);
  });

  const next = document.querySelector(".next-sandwich");
  const prev = document.querySelector(".prev-sandwich");

  next.onclick = () => {
    const itemWidth = container.querySelector(".item").clientWidth + 20;

    container.scrollBy({
      left: itemWidth,
      behavior: "smooth",
    });
  };

  prev.onclick = () => {
    const itemWidth = container.querySelector(".item").clientWidth + 20;

    container.scrollBy({
      left: -itemWidth,
      behavior: "smooth",
    });
  };
};

obtenerSandwichesWraps();