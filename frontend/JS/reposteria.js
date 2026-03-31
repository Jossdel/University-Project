import { apiValues } from "./api.js";

const obtenerReposteria = async () => {
  const productos = await apiValues();

  const postres = productos.filter(
    (producto) => producto.categoria === "Repostería",
  );
  console.log(postres);
  return postres;
};

obtenerReposteria();
