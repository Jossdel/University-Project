import { apiValues } from "./api.js";
import { renderCategoria } from "./render.js";
document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "/src/assets/login.html";
  }
  // aquí sigue tu código normal
});
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const productos = (await apiValues()) || [];
    if (!Array.isArray(productos)) {
      console.error("Productos inválidos");
      return;
    }
    if (productos.length === 0) {
      console.warn("No hay productos para mostrar");
    }
    renderCategoria(
      productos,
      "Bebidas calientes",
      ".container-bebida-caliente",
      "caliente",
    );
    renderCategoria(
      productos,
      "Bebidas frias",
      ".container-bebida-fria",
      "fria",
    );
    renderCategoria(productos, "Empanadas", ".container-empanadas", "empanada");
    renderCategoria(
      productos,
      "Panaderia",
      ".container-panaderia",
      "panaderia",
    );
    renderCategoria(
      productos,
      "Reposteria",
      ".container-reposteria",
      "reposteria",
    );
    renderCategoria(
      productos,
      "Sandwiches y wraps",
      ".container-sandwiches",
      "sandwich",
    );
  } catch (error) {
    console.error(error);
  }
});
const cargarAvatar = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const usuario = await res.json();

    const img = document.getElementById("avatar-img");

    img.src = usuario.avatar || "/img/default.png";
  } catch (error) {
    console.error("Error cargando avatar:", error);
  }
};

// Ejecutar al iniciar
cargarAvatar();
