import { apiValues } from "./api.js";

const obtenerPanaderia = async () => {
  const productos = await apiValues();

  const panes = productos.filter(
    (producto) => producto.categoria === "Panadería",
  );

  const container = document.querySelector(".container-panaderia");
  container.innerHTML = "";

  panes.forEach((pan) => {
    const div = document.createElement("div");
    div.classList.add("item");

    let imagen = "";

    switch (pan.nombre.toLowerCase()) {
      case "croissants":
        imagen = "../img/Cafe_fotos/Panadería/Croissants.png";
        break;

      case "pan de agua":
        imagen = "../img/Cafe_fotos/Panadería/pan_agua.png";
        break;

      case "pan integral":
        imagen = "../img/Cafe_fotos/Panadería/Pan_Integral.png";
        break;

      case "muffins":
        imagen = "../img/Cafe_fotos/Panadería/Muffin.png";
        break;

      // 🔥 NUEVOS PANES
      case "baguette":
        imagen = "../img/Cafe_fotos/Panadería/baguette.png";
        break;

      case "pan de ajo":
        imagen = "../img/Cafe_fotos/Panadería/pan_ajo.png";
        break;

      case "pan de avena":
        imagen = "../img/Cafe_fotos/Panadería/pan_avena.png";
        break;

      case "pan de centeno":
        imagen = "../img/Cafe_fotos/Panadería/pan_centeno.png";
        break;

      case "pan pepin":
        imagen = "../img/Cafe_fotos/Panadería/pan_pepin.png";
        break;

      case "pan pita":
        imagen = "../img/Cafe_fotos/Panadería/pan_pita.png";
        break;

      default:
        imagen = "../img/Cafe_fotos/Panadería/pan_agua.png";
    }

    div.innerHTML = `
      <figure class="image-box">
        <img src="${imagen}" alt="${pan.nombre}" class="img-cafes">
      </figure>

      <div class="info-product">
        <h2 class="product-name">${pan.nombre}</h2>
        <p class="price">RD$ ${pan.precio}</p>
        <button class="add-button">Añadir al carrito</button>
      </div>
    `;

    container.appendChild(div);
  });

  const next = document.querySelector(".next-panaderia");
  const prev = document.querySelector(".prev-panaderia");

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

obtenerPanaderia();