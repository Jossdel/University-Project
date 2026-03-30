import { apiValues } from "./api.js";

const obtenerBebidasFrias = async () => {
  const productos = await apiValues();

  const coldDrinks = productos.filter(
    (producto) => producto.categoria === "Bebidas frías",
  );
  console.log(coldDrinks);
  return coldDrinks;
};

obtenerBebidasFrias();
