
import prisma from "../src/prismaClient.js";
async function main() {
  const existe = await prisma.producto.count();

  if (existe > 0) {
    console.log("Ya hay productos, no se insertó nada");
    return;
  }

  await prisma.producto.createMany({
    data: [
      // Bebidas calientes
      {
        nombre: "café",
        precio: 100,
        stock: 50,
        categoria: "Bebidas calientes",
      },
      {
        nombre: "café negro",
        precio: 100,
        stock: 40,
        categoria: "Bebidas calientes",
      },
      {
        nombre: "café espresso",
        precio: 125,
        stock: 45,
        categoria: "Bebidas calientes",
      },
      {
        nombre: "café con leche",
        precio: 100,
        stock: 45,
        categoria: "Bebidas calientes",
      },
      {
        nombre: "cappuccino",
        precio: 145,
        stock: 45,
        categoria: "Bebidas calientes",
      },
      {
        nombre: "latte",
        precio: 145,
        stock: 45,
        categoria: "Bebidas calientes",
      },
      {
        nombre: "mocaccino",
        precio: 150,
        stock: 45,
        categoria: "Bebidas calientes",
      },
      {
        nombre: "chocolate caliente",
        precio: 157,
        stock: 45,
        categoria: "Bebidas calientes",
      },
      {
        nombre: "té verde",
        precio: 90,
        stock: 40,
        categoria: "Bebidas calientes",
      },
      {
        nombre: "té de manzanilla",
        precio: 90,
        stock: 40,
        categoria: "Bebidas calientes",
      },

      // Bebidas frías
      {
        nombre: "café frío",
        precio: 150,
        stock: 45,
        categoria: "Bebidas frías",
      },
      {
        nombre: "frappé de café",
        precio: 190,
        stock: 45,
        categoria: "Bebidas frías",
      },
      {
        nombre: "batida de fresa",
        precio: 185,
        stock: 45,
        categoria: "Bebidas frías",
      },
      {
        nombre: "batida de guineo",
        precio: 185,
        stock: 45,
        categoria: "Bebidas frías",
      },
      {
        nombre: "jugo de naranja",
        precio: 120,
        stock: 40,
        categoria: "Bebidas frías",
      },
      {
        nombre: "agua natural",
        precio: 30,
        stock: 45,
        categoria: "Bebidas frías",
      },
      {
        nombre: "refresco negro",
        precio: 30,
        stock: 40,
        categoria: "Bebidas frías",
      },

      // Sandwiches
      {
        nombre: "sandwich de jamón y queso",
        precio: 180,
        stock: 15,
        categoria: "Sandwiches y wraps",
      },
      {
        nombre: "wrap de pollo",
        precio: 180,
        stock: 40,
        categoria: "Sandwiches y wraps",
      },
      {
        nombre: "sandwich club",
        precio: 220,
        stock: 25,
        categoria: "Sandwiches y wraps",
      },
      {
        nombre: "panini de pollo",
        precio: 210,
        stock: 20,
        categoria: "Sandwiches y wraps",
      },

      // Panadería
      { nombre: "croissants", precio: 160, stock: 40, categoria: "Panadería" },
      { nombre: "pan de agua", precio: 100, stock: 40, categoria: "Panadería" },
      {
        nombre: "pan integral",
        precio: 120,
        stock: 40,
        categoria: "Panadería",
      },
      { nombre: "muffins", precio: 125, stock: 40, categoria: "Panadería" },

      // Repostería
      {
        nombre: "dona de fresa",
        precio: 155,
        stock: 40,
        categoria: "Repostería",
      },
      {
        nombre: "dona de chocolate",
        precio: 155,
        stock: 40,
        categoria: "Repostería",
      },
      { nombre: "brownies", precio: 140, stock: 40, categoria: "Repostería" },
      { nombre: "cheesecake", precio: 180, stock: 25, categoria: "Repostería" },
      { nombre: "galletas", precio: 50, stock: 40, categoria: "Repostería" },

      // Empanadas
      {
        nombre: "empanada de pollo",
        precio: 80,
        stock: 40,
        categoria: "Empanadas",
      },
      {
        nombre: "empanada de pizza",
        precio: 80,
        stock: 40,
        categoria: "Empanadas",
      },
      {
        nombre: "empanada de queso",
        precio: 80,
        stock: 40,
        categoria: "Empanadas",
      },

      // Extras
      { nombre: "papas fritas", precio: 100, stock: 30, categoria: "Extras" },
      { nombre: "yogurt natural", precio: 90, stock: 20, categoria: "Extras" },
      { nombre: "granola", precio: 110, stock: 20, categoria: "Extras" },
    ],
  });
}

main()
  .then(() => {
    console.log("Seed ejecutado");
    prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
  });
