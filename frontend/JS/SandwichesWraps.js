import { apiValues } from "./api.js";

const obtenerSandwichesWraps = async () => {
  const productos = await apiValues();

  const coldDrinks = productos.filter(
    (producto) => producto.categoria === "Sandwiches y wraps",
  );
  console.log(coldDrinks);
  return coldDrinks;
};

obtenerSandwichesWraps();
