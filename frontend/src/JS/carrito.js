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

    div.innerHTML = `
      <span>${item.nombre} x${item.cantidad}</span>
      <span>RD$ ${item.precio * item.cantidad}</span>
      <span class="eliminar">x</span>
    `;

    div.querySelector(".eliminar").addEventListener("click", () => {
      carrito = carrito.filter((p) => p.nombre !== item.nombre);

      guardarCarrito();
      actualizarCarrito();
    });

    lista.appendChild(div);
  });

  total.textContent = `Total: RD$ ${sumaTotal}`;

  if (contador) {
    contador.textContent = totalItems;
  }

  // 🔥 BOTONES BIEN HECHOS
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

  lista.appendChild(botonesPadres);
};

/* EVENTOS */
document.addEventListener("click", (e) => {
  const panel = document.getElementById("carritoPanel");

  if (e.target.id === "btn-comprar") {
    if (carrito.length === 0) {
      alert("El carrito está vacío 🛒");
      return;
    }

    alert("Compra realizada con éxito ✅");

    carrito = [];
    guardarCarrito();
    actualizarCarrito();

    panel.classList.remove("activo"); // 🔥 cierra después de comprar
  }

  if (e.target.id === "btn-cancelar") {
    panel.classList.remove("activo"); // 🔥 SOLO CIERRA
  }
});

actualizarCarrito();
