import prisma from "../prismaClient.js";

export const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await prisma.user.findUnique({
      where: { id: Number(id) },
    });
    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.json(usuario);
  } catch (error) {
    console.error("Error al obtener el usuario:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
