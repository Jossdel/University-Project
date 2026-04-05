import { apiValues } from "./api.js";

const obtenerBebidasFrias = async () => {
  const productos = await apiValues();

  const coldDrinks = productos.filter(
    (producto) => producto.categoria === "Bebidas frias",
  );

  const container = document.querySelector(".container-bebida-fria");
  container.innerHTML = "";

  coldDrinks.forEach((bebida) => {
    const div = document.createElement("div");
    div.classList.add("item");

    let imagen = "";

    switch (bebida.nombre.toLowerCase()) {
      case "cafe frio":
        imagen = "../img/Cafe_fotos/BebidasFrias/cafre_frio.png";
        break;

      case "frappe":
        imagen = "../img/Cafe_fotos/BebidasFrias/frappe_cafe.png";
        break;

      case "batida guineo":
        imagen = "../img/Cafe_fotos/BebidasFrias/Batida_platano.png";
        break;

      case "jugo naranja":
        imagen = "../img/Cafe_fotos/BebidasFrias/jugo_naranja.png";
        break;

      case "agua":
        imagen = "../img/Cafe_fotos/BebidasFrias/agua_natural.png";
        break;

      case "batida fresa":
        imagen = "../img/Cafe_fotos/BebidasFrias/batida_fresa.png";
        break;

      case "refresco":
        imagen = "../img/Cafe_fotos/BebidasFrias/refresco_negro.png";
        break;

      case "limonada":
        imagen = "../img/Cafe_fotos/BebidasFrias/limonadas.png";
        break;

      case "cerveza":
        imagen = "../img/Cafe_fotos/BebidasFrias/cerverza.png";
        break;

      default:
        imagen = "../img/Cafe_fotos/BebidasFrias/chocolate_frio.png";
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

  const next = document.querySelector(".next-fria");
  const prev = document.querySelector(".prev-fria");

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

obtenerBebidasFrias();
