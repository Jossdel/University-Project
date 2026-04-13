import prisma from "../prismaClient.js";

export const getUser = async (req, res) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ error: "No autorizado" });
    }

    const usuario = await prisma.user.findUnique({
      where: { id: req.userId },
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
