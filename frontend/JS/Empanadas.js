import { apiValues } from "./api.js";

const obtenerEmpanadas = async () => {
  const productos = await apiValues();

  const empanadas = productos.filter(
    (producto) => producto.categoria === "Empanadas",
  );

  const container = document.querySelector(".container-empanadas");
  container.innerHTML = "";

  empanadas.forEach((empanada) => {
    const div = document.createElement("div");
    div.classList.add("item");

    let imagen = "";

  switch (empanada.nombre.toLowerCase()) {
  case "empanada de pollo":
    imagen = "../img/Cafe_fotos/Empanadas/empanada_pollo.png";
    break;

  case "empanada de pizza":
    imagen = "../img/Cafe_fotos/Empanadas/empanada_pizza.png";
    break;

  case "empanada de queso":
    imagen = "../img/Cafe_fotos/Empanadas/Empanadas_queso.png";
    break;

  // 🔥 NUEVAS EMPANADAS
  case "empanada de carne":
    imagen = "../img/Cafe_fotos/Empanadas/empanada_carne.png";
    break;

  case "empanada de jamón y queso":
    imagen = "../img/Cafe_fotos/Empanadas/empanada_jamon_y_queso.png";
    break;

  case "empanada de atún":
    imagen = "../img/Cafe_fotos/Empanadas/empanada_atun.png";
    break;

  case "empanada de maíz con res":
    imagen = "../img/Cafe_fotos/Empanadas/empanada_maíz_res.png";
    break;

  case "empanada de pollo con queso":
    imagen = "../img/Cafe_fotos/Empanadas/empanada_pollo_queso.png";
    break;

  case "empanada de yuca":
    imagen = "../img/Cafe_fotos/Empanadas/empanada_yuca.png";
    break;

  default:
    imagen = "../img/Cafe_fotos/Empanadas/empanada_pollo.png";
}

    div.innerHTML = `
      <figure class="image-box">
        <img src="${imagen}" alt="${empanada.nombre}" class="img-cafes">
      </figure>

      <div class="info-product">
        <h2 class="product-name">${empanada.nombre}</h2>
        <p class="price">RD$ ${empanada.precio}</p>
        <button class="add-button">Añadir al carrito</button>
      </div>
    `;

    container.appendChild(div);
  });

  const next = document.querySelector(".next-empanada");
  const prev = document.querySelector(".prev-empanada");

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

obtenerEmpanadas();