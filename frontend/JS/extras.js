import { apiValues } from "./api.js";

const obtenerExtras = async () => {
  const productos = await apiValues();

  const extra = productos.filter((producto) => producto.categoria === "Extras");
  console.log(extra);
  return extra;
};

obtenerEmpanadas();
