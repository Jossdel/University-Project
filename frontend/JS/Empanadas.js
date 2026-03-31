import { apiValues } from "./api.js";

const obtenerEmpanadas = async () => {
  const productos = await apiValues();

  const empanadas = productos.filter(
    (producto) => producto.categoria === "Empanadas",
  );
  console.log(empanadas);
  return empanadas;
};

obtenerEmpanadas();
