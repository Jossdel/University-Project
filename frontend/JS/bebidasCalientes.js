import { apiValues } from "./api.js";

const obtenerBebidasCalientes = async () => {
  let productos = await apiValues();

  const hotdrinks = productos.filter(
    (producto) => producto.categoria === "Bebidas calientes",
  );

  const container = document.querySelector(".container-bebida-caliente");
  container.innerHTML = "";

  hotdrinks.forEach((bebida) => {
    const div = document.createElement("div");
    div.classList.add("item");

    let imagen = "";

    switch (bebida.nombre.toLowerCase()) {
      case "espresso":
        imagen = "../img/Cafe_fotos/BebidasCalientes/Espresso.png";
        break;

      case "latte":
        imagen = "../img/Cafe_fotos/BebidasCalientes/cafe_latte.png";
        break;

      case "capuccino":
        imagen = "../img/Cafe_fotos/BebidasCalientes/Cappuccino.png";
        break;

      case "cafe negro":
        imagen = "../img/Cafe_fotos/BebidasCalientes/cafe_negro.png";
        break;

      case "cafe leche":
        imagen = "../img/Cafe_fotos/BebidasCalientes/cafe_leche.png";
        break;

      case "manzanilla":
        imagen = "../img/Cafe_fotos/BebidasCalientes/Te_manzanilla.png";
        break;

      case "te verde":
        imagen = "../img/Cafe_fotos/BebidasCalientes/Te_verde.png";
        break;

      case "cafe":
        imagen = "../img/Cafe_fotos/BebidasCalientes/cafe.png";
        break;

      case "mocca":
        imagen = "../img/Cafe_fotos/BebidasCalientes/mocaccino.png";
        break;

      default:
        imagen = "../img/Cafe_fotos/BebidasCalientes/chocolate_caliente.png";
    }
    div.innerHTML = `
      <figure class="image-box">
        <img src="${imagen}" alt="${bebida.nombre}" class="img-cafes">
      </figure>

      <div class="info-product">
        <h2 class="product-name">${bebida.nombre}</h2>
        <p class="price">RD$ ${bebida.precio}</p>
        <button class="add-button">Añadir al carrito</button>
      </div>
    `;

    container.appendChild(div);
  });

  const next = document.querySelector(".next-caliente");
  const prev = document.querySelector(".prev-caliente");

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

obtenerBebidasCalientes();
