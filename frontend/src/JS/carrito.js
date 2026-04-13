export let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

export const agregarAlCarrito = (producto) => {
  const existe = carrito.find((item) => item.nombre === producto.nombre);

  if (existe) {
    existe.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  guardarCarrito();
  actualizarCarrito();
};

const guardarCarrito = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

export const actualizarCarrito = () => {
  const lista = document.getElementById("lista-carrito");
  const total = document.getElementById("total");
  const contador = document.getElementById("contador");

  if (!lista) return;

  lista.innerHTML = "";

  let sumaTotal = 0;
  let totalItems = 0;

  carrito.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("item-carrito");

    sumaTotal += item.precio * item.cantidad;
    totalItems += item.cantidad;

    // =========================
    // CONTENIDO CON CONTROLES
    // =========================
    div.innerHTML = `
      <span>${item.nombre}</span>

      <div class="controles-cantidad">
        <button class="disminuir">-</button>
        <span>${item.cantidad}</span>
        <button class="aumentar">+</button>
      </div>

      <span>RD$ ${item.precio * item.cantidad}</span>
      <span class="eliminar">x</span>
    `;

    // ELIMINAR COMPLETO
    div.querySelector(".eliminar").addEventListener("click", () => {
      carrito = carrito.filter((p) => p.nombre !== item.nombre);

      guardarCarrito();
      actualizarCarrito();
    });

    // =========================
    // AUMENTAR
    // =========================
    div.querySelector(".aumentar").addEventListener("click", () => {
      item.cantidad++;

      guardarCarrito();
      actualizarCarrito();
    });

    // =========================
    // DISMINUIR
    // =========================
    div.querySelector(".disminuir").addEventListener("click", () => {
      if (item.cantidad > 1) {
        item.cantidad--;
      } else {
        carrito = carrito.filter((p) => p.nombre !== item.nombre);
      }

      guardarCarrito();
      actualizarCarrito();
    });

    lista.appendChild(div);
  });

  total.textContent = `Total: RD$ ${sumaTotal}`;

  if (contador) {
    contador.textContent = totalItems;
  }

  // BOTONES
  const buttonComprar = document.createElement("button");
  buttonComprar.id = "btn-comprar";
  buttonComprar.textContent = "Comprar";

  const buttonCancelar = document.createElement("button");
  buttonCancelar.id = "btn-cancelar";
  buttonCancelar.textContent = "Cancelar";

  const botonesPadres = document.createElement("div");
  botonesPadres.classList.add("botones-carrito");

  botonesPadres.appendChild(buttonComprar);
  botonesPadres.appendChild(buttonCancelar);

  // FOOTER FIJO
  const panel = document.getElementById("carritoPanel");

  const viejoFooter = document.querySelector(".footer-fix");
  if (viejoFooter) viejoFooter.remove();

  const footer = document.createElement("div");
  footer.classList.add("footer-fix");

  footer.appendChild(total);
  footer.appendChild(botonesPadres);

  panel.appendChild(footer);
};

/* EVENTOS */
document.addEventListener("click", (e) => {
  const panel = document.getElementById("carritoPanel");

  if (e.target.id === "btn-comprar") {
    if (carrito.length === 0) {
      alert("El carrito está vacío");
      return;
    }

    alert("Compra realizada con éxito");

    carrito = [];
    guardarCarrito();
    actualizarCarrito();

    panel.classList.remove("activo");
  }

  if (e.target.id === "btn-cancelar") {
    panel.classList.remove("activo");
  }
});

actualizarCarrito();

document.addEventListener("DOMContentLoaded", () => {
  const icono = document.querySelector(".carrito");
  const panel = document.getElementById("carritoPanel");

  if (!icono || !panel) return;

  icono.addEventListener("click", () => {
    panel.classList.toggle("activo");
  });
});