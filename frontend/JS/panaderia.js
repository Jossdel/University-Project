import { apiValues } from "./api.js";

const obtenerPanaderia = async () => {
  const productos = await apiValues();

  const panes = productos.filter(
    (producto) => producto.categoria === "Panadería",
  );
  console.log(panes);
  return panes;
};

obtenerPanaderia();
