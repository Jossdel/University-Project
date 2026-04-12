import { apiValues } from "./api.js";

const obtenerPanaderia = async () => {
  const productos = await apiValues();

  const panes = productos.filter(
    (producto) => producto.categoria === "Panaderia",
  );

  const container = document.querySelector(".container-panaderia");
  container.innerHTML = "";

  panes.forEach((pan) => {
    const div = document.createElement("div");
    div.classList.add("item");

    let imagen = "";

    switch (pan.nombre.toLowerCase()) {
      case "croissant":
        imagen = "img/Cafe_fotos/Panaderia/croissants.png";
        break;

      case "pan agua":
        imagen = "img/Cafe_fotos/Panaderia/pan_agua.png";
        break;

      case "integral":
        imagen = "img/Cafe_fotos/Panaderia/pan_integral.png";
        break;

      case "muffin":
        imagen = "img/Cafe_fotos/Panaderia/muffin.png";
        break;

      case "baguette":
        imagen = "img/Cafe_fotos/Panaderia/baguette.png";
        break;

      case "pan ajo":
        imagen = "img/Cafe_fotos/Panaderia/pan_ajo.png";
        break;

      case "pan avena":
        imagen = "img/Cafe_fotos/Panaderia/pan_avena.png";
        break;

      case "centeno":
        imagen = "img/Cafe_fotos/Panaderia/pan_centeno.png";
        break;

      case "pepin":
        imagen = "img/Cafe_fotos/Panaderia/pan_pepin.png";
        break;

      case "pita":
        imagen = "img/Cafe_fotos/Panaderia/pan_pita.png";
        break;

      default:
        imagen = "img/Cafe_fotos/Panaderia/pan_agua.png";
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
