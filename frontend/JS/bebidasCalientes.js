import { apiValues } from "./api.js";

const obtenerBebidasCalientes = async () => {
  const productos = await apiValues();

  const hotdrinks = productos.filter(
    (producto) => producto.categoria === "Bebidas calientes",
  );

  console.log(hotdrinks);
};

obtenerBebidasCalientes();
