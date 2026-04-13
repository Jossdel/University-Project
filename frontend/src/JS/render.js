import { agregarAlCarrito } from "./carrito.js";

const obtenerImagen = (nombre, tipo) => {
  const n = nombre
    .toLowerCase()
    .normalize("NFD") // elimina acentos
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .replace(/\s+/g, "_");

  const rutas = {
    caliente: {
      espresso: "/img/Cafe_fotos/BebidasCalientes/espresso.png",
      latte: "/img/Cafe_fotos/BebidasCalientes/cafe_latte.png",
      capuccino: "/img/Cafe_fotos/BebidasCalientes/cappuccino.png",
      cafe_negro: "/img/Cafe_fotos/BebidasCalientes/cafe_negro.png",
      cafe_leche: "/img/Cafe_fotos/BebidasCalientes/cafe_leche.png",
      manzanilla: "/img/Cafe_fotos/BebidasCalientes/te_manzanilla.png",
      te_verde: "/img/Cafe_fotos/BebidasCalientes/te_verde.png",
      cafe: "/img/Cafe_fotos/BebidasCalientes/cafe.png",
      mocca: "/img/Cafe_fotos/BebidasCalientes/mocaccino.png",
      chocolate: "/img/Cafe_fotos/BebidasCalientes/chocolate_caliente.png", // 🔥 añadido
    },

    fria: {
      cafe_frio: "/img/Cafe_fotos/BebidasFrias/cafre_frio.png",
      frappe: "/img/Cafe_fotos/BebidasFrias/frappe_cafe.png",
      batida_guineo: "/img/Cafe_fotos/BebidasFrias/batida_guineo.png",
      jugo_naranja: "/img/Cafe_fotos/BebidasFrias/jugo_naranja.png",
      agua: "/img/Cafe_fotos/BebidasFrias/agua_natural.png",
      batida_fresa: "/img/Cafe_fotos/BebidasFrias/batida_fresa.png",
      refresco: "/img/Cafe_fotos/BebidasFrias/refresco_negro.png",
      limonada: "/img/Cafe_fotos/BebidasFrias/limonadas.png",
      cerveza: "/img/Cafe_fotos/BebidasFrias/cerverza.png",
    },

    empanada: {
      pollo: "/img/Cafe_fotos/Empanadas/empanada_pollo.png",
      pizza: "/img/Cafe_fotos/Empanadas/empanada_pizza.png",
      queso: "/img/Cafe_fotos/Empanadas/Empanadas_queso.png",
      carne: "/img/Cafe_fotos/Empanadas/empanada_carne.png",
      jamon_queso: "/img/Cafe_fotos/Empanadas/empanada_jamon_y_queso.png",
      atun: "/img/Cafe_fotos/Empanadas/empanada_atun.png",
      maiz_res: "/img/Cafe_fotos/Empanadas/empanada_maíz_res.png",
      pollo_queso: "/img/Cafe_fotos/Empanadas/empanada_pollo_queso.png",
      yuca: "/img/Cafe_fotos/Empanadas/empanada_yuca.png",
    },

    panaderia: {
      croissant: "/img/Cafe_fotos/Panaderia/croissants.png",
      pan_agua: "/img/Cafe_fotos/Panaderia/pan_agua.png",
      integral: "/img/Cafe_fotos/Panaderia/pan_integral.png",
      muffin: "/img/Cafe_fotos/Panaderia/muffin.png",
      baguette: "/img/Cafe_fotos/Panaderia/baguette.png",
      pan_ajo: "/img/Cafe_fotos/Panaderia/pan_ajo.png",
      pan_avena: "/img/Cafe_fotos/Panaderia/pan_avena.png",
      centeno: "/img/Cafe_fotos/Panaderia/pan_centeno.png",
      pepin: "/img/Cafe_fotos/Panaderia/pan_pepin.png",
      pita: "/img/Cafe_fotos/Panaderia/pan_pita.png",
    },

    reposteria: {
      dona_fresa: "/img/Cafe_fotos/Reposteria/dona_fresa.png",
      dona_choco: "/img/Cafe_fotos/Reposteria/dona_chocolate.png", // 🔥 FIX
      brownie: "/img/Cafe_fotos/Reposteria/brownies.png",
      cheesecake: "/img/Cafe_fotos/Reposteria/cheesecake.png",
      galleta: "/img/Cafe_fotos/Reposteria/galletas.png", // 🔥 FIX
      churro: "/img/Cafe_fotos/Reposteria/churro.png", // 🔥 FIX
      cupcake: "/img/Cafe_fotos/Reposteria/cupcakes.png",
      tarta: "/img/Cafe_fotos/Reposteria/tarta_frutas.png", // 🔥 FIX
      tres_leches: "/img/Cafe_fotos/Reposteria/tres_leche.png",
      flan: "/img/Cafe_fotos/Reposteria/flan.png",
      fresa_crema: "/img/Cafe_fotos/Reposteria/fresa_con_crema.png",
      arroz_leche: "/img/Cafe_fotos/Reposteria/arroz_con_leche.png",
    },

    sandwich: {
      jamon_queso:
        "/img/Cafe_fotos/Sandwiches_y_wraps/sandwich_jamon_queso.png",
      wrap_pollo: "/img/Cafe_fotos/Sandwiches_y_wraps/wrap_pollo.png",
      club: "/img/Cafe_fotos/Sandwiches_y_wraps/sandwich_club.png",
      panini: "/img/Cafe_fotos/Sandwiches_y_wraps/panini_pollo.png",
      burrito: "/img/Cafe_fotos/Sandwiches_y_wraps/burritos_res.png",
      tacos: "/img/Cafe_fotos/Sandwiches_y_wraps/tacos.png",
      hotdog: "/img/Cafe_fotos/Sandwiches_y_wraps/hotdog.png",
    },
  };

  return rutas[tipo]?.[n] || "/img/default.png";
};

export const renderCategoria = (productos, categoria, selector, tipo) => {
  const container = document.querySelector(selector); // 🔥 PRIMERO

  if (!container) return;
  const filtrados = productos.filter((p) => p.categoria === categoria);
  if (filtrados.length === 0) {
    container.innerHTML = "<p style='color:white'>No hay productos</p>";
    return;
  }

  container.innerHTML = "";

  filtrados.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("item");

    const imagen = obtenerImagen(item.nombre, tipo);

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

    div.querySelector(".add-button").addEventListener("click", () => {
      agregarAlCarrito(item);
    });

    container.appendChild(div);
  });

  activarCarrusel(container, tipo);
};
const activarCarrusel = (container, tipo) => {
  const next = document.querySelector(`.next-${tipo}`);
  const prev = document.querySelector(`.prev-${tipo}`);

  if (!next || !prev) return;

  next.onclick = () => mover(container, 1);
  prev.onclick = () => mover(container, -1);
};

const mover = (container, direccion) => {
  const item = container.querySelector(".item");
  if (!item) return;

  const width = item.clientWidth + 20;

  container.scrollBy({
    left: width * direccion,
    behavior: "smooth",
  });
};
