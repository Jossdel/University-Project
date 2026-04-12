import { apiValues } from "./api.js";

const obtenerReposteria = async () => {
  const productos = await apiValues();

  const postres = productos.filter(
    (producto) => producto.categoria === "Reposteria",
  );

  const container = document.querySelector(".container-reposteria");
  container.innerHTML = "";

  postres.forEach((postre) => {
    const div = document.createElement("div");
    div.classList.add("item");

    let imagen = "";

    switch (postre.nombre.toLowerCase()) {
      case "dona fresa":
        imagen = "../public/img/Cafe_fotos/Reposteria/dona_fresa.png";
        break;

      case "dona chocolate":
        imagen = "../public/img/Cafe_fotos/Reposteria/dona_chocolate.png";
        break;

      case "brownie":
        imagen = "../public/img/Cafe_fotos/Reposteria/brownies.png";
        break;

      case "cheesecake":
        imagen = "../public/img/Cafe_fotos/Reposteria/cheesecake.png";
        break;

      case "galletas":
        imagen = "../public/img/Cafe_fotos/Reposteria/galletas.png";
        break;

      case "churros":
        imagen = "../public/img/Cafe_fotos/Reposteria/churro.png";
        break;

      case "cupcake":
        imagen = "../public/img/Cafe_fotos/Reposteria/cupcakes.png";
        break;

      case "tarta frutas":
        imagen = "../public/img/Cafe_fotos/Reposteria/tarta_frutas.png";
        break;

      case "tres leches":
        imagen = "/img/Cafe_fotos/Reposteria/tres_leche.png";
        break;

      case "flan":
        imagen = "/img/Cafe_fotos/Reposteria/flan.png";
        break;

      case "fresa crema":
        imagen = "/img/Cafe_fotos/Reposteria/fresa_con_crema.png";
        break;

      case "arroz leche":
        imagen = "/img/Cafe_fotos/Reposteria/arroz_con_leche.png";
        break;

      default:
        imagen = "/img/Cafe_fotos/Reposteria/galletas.png";
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
