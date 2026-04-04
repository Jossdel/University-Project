import { apiValues } from "./api.js";

const obtenerReposteria = async () => {
  const productos = await apiValues();

  const postres = productos.filter(
    (producto) => producto.categoria === "Repostería",
  );

  const container = document.querySelector(".container-reposteria");
  container.innerHTML = "";

  postres.forEach((postre) => {
    const div = document.createElement("div");
    div.classList.add("item");

    let imagen = "";

    switch (postre.nombre.toLowerCase()) {
      case "dona de fresa":
        imagen = "../img/Cafe_fotos/Repostería/dona_fresa.png";
        break;

      case "dona de chocolate":
        imagen = "../img/Cafe_fotos/Repostería/dona_chocolate.png";
        break;

      case "brownies":
        imagen = "../img/Cafe_fotos/Repostería/brownies.png";
        break;

      case "cheesecake":
        imagen = "../img/Cafe_fotos/Repostería/cheesecake.png";
        break;

      case "galletas":
        imagen = "../img/Cafe_fotos/Repostería/galletas.png";
        break;

      default:
        imagen = "../img/Cafe_fotos/Repostería/galletas.png";
    }

    div.innerHTML = `
      <figure class="image-box">
        <img src="${imagen}" alt="${postre.nombre}" class="img-cafes">
      </figure>

      <div class="info-product">
        <h2 class="product-name">${postre.nombre}</h2>
        <p class="price">RD$ ${postre.precio}</p>
        <button class="add-button">Añadir al carrito</button>
      </div>
    `;

    container.appendChild(div);
  });

  const next = document.querySelector(".next-reposteria");
  const prev = document.querySelector(".prev-reposteria");

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

obtenerReposteria();