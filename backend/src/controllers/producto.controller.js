export const crearProducto = async (req, res) => {
  try {
    const { nombre, descripcion, precio, categoria } = req.body;

    const producto = await prisma.producto.create({
      data: { nombre, descripcion, precio, categoria },
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
