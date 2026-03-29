import prisma from "../prismaClient.js";

export const crearProducto = async (req, res) => {
  try {
    const { nombre, precio, stock, categoria } = req.body;

    // Validación básica
    if (!nombre || !precio || !stock || !categoria) {
      return res.status(400).json({ error: "Todos los campos son requeridos" });
    }

    // Normalizar nombre para evitar duplicados por mayúsculas/minúsculas
    const nombreNormalizado = nombre.trim().toLowerCase();

    // Verificar si ya existe
    const existeProducto = await prisma.producto.findFirst({
      where: {
        nombre: nombreNormalizado,
      },
    });

    if (existeProducto) {
      return res.status(400).json({ error: "El producto ya existe" });
    }

    // Crear producto
    const producto = await prisma.producto.create({
      data: {
        nombre: nombreNormalizado,
        precio,
        stock,
        categoria,
      },
    });

    res.status(201).json(producto);
  } catch (error) {
    console.error("Error al crear producto:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// ELIMINAR PRODUCTO
export const eliminarProducto = async (req, res) => {
  const Id = req.params.id;

  const existeProducto = await prisma.producto.findFirst({
    where: {
      id: Number(Id),
    },
  });

  if (existeProducto) {
    const productoEliminado = await prisma.producto.delete({
      where: {
        id: Number(Id),
      },
    });

    res.json({
      message: "The product has been deleted",
      productoEliminado,
    });
  } else {
    res.json({
      message: "Product does not exist",
    });
  }
};
export const eliminarTodosProductos = async (req, res) => {
  await prisma.producto.deleteMany();

  res.json({
    message: "All products have been deleted",
  });
};

export const descontarStock = async (req, res) => {
  try {
    const { productoId, cantidad } = req.body;

    const producto = await prisma.producto.update({
      where: { id: productoId },
      data: {
        stock: {
          decrement: cantidad,
        },
      },
    });

    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const obtenerProductos = async (req, res) => {
  const productos = await prisma.producto.findMany();
  res.json(productos);
};
