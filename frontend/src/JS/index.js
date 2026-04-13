import { apiValues } from "./api.js";
import { renderCategoria } from "./render.js";
document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "/src/assets/login.html";
  }
  // 👇 aquí sigue tu código normal
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
