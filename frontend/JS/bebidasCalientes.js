import { apiValues } from "./api.js";

const obtenerBebidasCalientes = async () => {
  let productos = await apiValues();

  const hotdrinks = productos.filter(
    (producto) => producto.categoria === "Bebidas calientes",
  );
  console.log(hotdrinks);

  const container = document.querySelector(".conteiner-bebida-caliente");
  console.log(container);
  container.innerHTML = ""; // limpia el template
  hotdrinks.forEach((bebida) => {
    const div = document.createElement("div");
    div.classList.add("item");

    div.innerHTML = `
        <figure>
          <img src="https://plus.unsplash.com/premium_photo-1673545518947-ddf3240090b1?q=80&w=687" class="img-cafes">
        </figure>
        <div class="info-product">
          <h2 class="product-name">${bebida.nombre}</h2>
          <p class="price">RD$ ${bebida.precio}</p>
          <button class="add-button">Añadir al carrito</button>
        </div>
      `;

    container.appendChild(div);
  });
};

obtenerBebidasCalientes();
// let imagen = "";

// if (bebida.nombre.includes("espresso")) {
//   imagen = "../img/espresso.jpg";
// } else if (bebida.nombre.includes("latte")) {
//   imagen = "../img/latte.jpg";
// } else {
//   imagen = "../img/cafe.jpg";
// }
