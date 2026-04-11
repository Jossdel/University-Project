import prisma from "../src/prismaClient.js";

async function main() {
  const existe = await prisma.producto.count();

  if (existe > 0) {
    console.log("Ya hay productos, no se inserto nada");
    return;
  }

  await prisma.producto.createMany({
    data: [
      // Bebidas calientes
      {
        nombre: "Cafe",
        precio: 100,
        stock: 50,
        categoria: "Bebidas calientes",
      },
      {
        nombre: "Cafe Negro",
        precio: 100,
        stock: 40,
        categoria: "Bebidas calientes",
      },
      {
        nombre: "Espresso",
        precio: 125,
        stock: 45,
        categoria: "Bebidas calientes",
      },
      {
        nombre: "Cafe Leche",
        precio: 100,
        stock: 45,
        categoria: "Bebidas calientes",
      },
      {
        nombre: "Capuccino",
        precio: 145,
        stock: 45,
        categoria: "Bebidas calientes",
      },
      {
        nombre: "Latte",
        precio: 145,
        stock: 45,
        categoria: "Bebidas calientes",
      },
      {
        nombre: "Mocca",
        precio: 150,
        stock: 45,
        categoria: "Bebidas calientes",
      },
      {
        nombre: "Chocolate",
        precio: 157,
        stock: 45,
        categoria: "Bebidas calientes",
      },
      {
        nombre: "Te Verde",
        precio: 90,
        stock: 40,
        categoria: "Bebidas calientes",
      },
      {
        nombre: "Manzanilla",
        precio: 90,
        stock: 40,
        categoria: "Bebidas calientes",
      },

      // Bebidas frias
      {
        nombre: "Cafe Frio",
        precio: 150,
        stock: 45,
        categoria: "Bebidas frias",
      },
      { nombre: "Frappe", precio: 190, stock: 45, categoria: "Bebidas frias" },
      {
        nombre: "Batida Fresa",
        precio: 185,
        stock: 45,
        categoria: "Bebidas frias",
      },
      {
        nombre: "Batida Guineo",
        precio: 185,
        stock: 45,
        categoria: "Bebidas frias",
      },
      {
        nombre: "Jugo Naranja",
        precio: 120,
        stock: 40,
        categoria: "Bebidas frias",
      },
      { nombre: "Agua", precio: 30, stock: 45, categoria: "Bebidas frias" },
      { nombre: "Refresco", precio: 30, stock: 40, categoria: "Bebidas frias" },
      {
        nombre: "Limonada",
        precio: 120,
        stock: 40,
        categoria: "Bebidas frias",
      },
      { nombre: "Cerveza", precio: 150, stock: 40, categoria: "Bebidas frias" },

      // Sandwiches
      {
        nombre: "Jamon Queso",
        precio: 180,
        stock: 15,
        categoria: "Sandwiches y wraps",
      },
      {
        nombre: "Wrap Pollo",
        precio: 180,
        stock: 40,
        categoria: "Sandwiches y wraps",
      },
      {
        nombre: "Club",
        precio: 220,
        stock: 25,
        categoria: "Sandwiches y wraps",
      },
      {
        nombre: "Panini",
        precio: 210,
        stock: 20,
        categoria: "Sandwiches y wraps",
      },
      {
        nombre: "Burrito",
        precio: 220,
        stock: 25,
        categoria: "Sandwiches y wraps",
      },
      {
        nombre: "Tacos",
        precio: 200,
        stock: 30,
        categoria: "Sandwiches y wraps",
      },
      {
        nombre: "Hotdog",
        precio: 120,
        stock: 30,
        categoria: "Sandwiches y wraps",
      },

      // Panaderia
      { nombre: "Croissant", precio: 160, stock: 40, categoria: "Panaderia" },
      { nombre: "Pan Agua", precio: 100, stock: 40, categoria: "Panaderia" },
      { nombre: "Integral", precio: 120, stock: 40, categoria: "Panaderia" },
      { nombre: "Muffin", precio: 125, stock: 40, categoria: "Panaderia" },
      { nombre: "Pan Ajo", precio: 130, stock: 30, categoria: "Panaderia" },
      { nombre: "Pan Avena", precio: 130, stock: 30, categoria: "Panaderia" },
      { nombre: "Centeno", precio: 140, stock: 30, categoria: "Panaderia" },
      { nombre: "Pepin", precio: 120, stock: 30, categoria: "Panaderia" },
      { nombre: "Pita", precio: 110, stock: 30, categoria: "Panaderia" },
      { nombre: "Baguette", precio: 180, stock: 25, categoria: "Panaderia" },

      // Reposteria
      { nombre: "Dona Fresa", precio: 155, stock: 40, categoria: "Reposteria" },
      { nombre: "Dona Choco", precio: 155, stock: 40, categoria: "Reposteria" },
      { nombre: "Brownie", precio: 140, stock: 40, categoria: "Reposteria" },
      { nombre: "Cheesecake", precio: 180, stock: 25, categoria: "Reposteria" },
      { nombre: "Galleta", precio: 50, stock: 40, categoria: "Reposteria" },
      { nombre: "Churro", precio: 120, stock: 40, categoria: "Reposteria" },
      { nombre: "Cupcake", precio: 130, stock: 40, categoria: "Reposteria" },
      { nombre: "Tarta", precio: 180, stock: 25, categoria: "Reposteria" },
      {
        nombre: "Tres Leches",
        precio: 180,
        stock: 25,
        categoria: "Reposteria",
      },
      { nombre: "Flan", precio: 120, stock: 30, categoria: "Reposteria" },
      {
        nombre: "Fresa Crema",
        precio: 140,
        stock: 30,
        categoria: "Reposteria",
      },
      {
        nombre: "Arroz Leche",
        precio: 100,
        stock: 30,
        categoria: "Reposteria",
      },

      // Empanadas
      { nombre: "Pollo", precio: 80, stock: 40, categoria: "Empanadas" },
      { nombre: "Pizza", precio: 80, stock: 40, categoria: "Empanadas" },
      { nombre: "Queso", precio: 80, stock: 40, categoria: "Empanadas" },
      { nombre: "Carne", precio: 85, stock: 40, categoria: "Empanadas" },
      { nombre: "Jamon Queso", precio: 85, stock: 40, categoria: "Empanadas" },
      { nombre: "Atun", precio: 80, stock: 40, categoria: "Empanadas" },
      { nombre: "Maiz Res", precio: 75, stock: 40, categoria: "Empanadas" },
      { nombre: "Pollo Queso", precio: 75, stock: 40, categoria: "Empanadas" },
      { nombre: "Yuca", precio: 80, stock: 40, categoria: "Empanadas" },
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
