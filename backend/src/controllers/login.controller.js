import prisma from "../prismaClient.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
export const loginUsuario = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({
        error: "Email y contraseña son requeridos",
      });
    }

    const emailNormalizado = email.trim().toLowerCase();

    const usuario = await prisma.user.findUnique({
      where: { email: emailNormalizado },
    });

    if (!usuario) {
      return res.status(400).json({ error: "Credenciales inválidas" });
    }

    // Verificar password
    const passwordValida = await argon2.verify(usuario.password, password);

    if (!passwordValida) {
      return res.status(400).json({ error: "Credenciales inválidas" });
    }
    const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    //  Respuesta sin password
    return res
      .status(200)
      .json({ token }, console.log("LOGIN SECRET:", process.env.JWT_SECRET));
  } catch (error) {
    console.error("ERROR LOGIN:", error);
    return res.status(500).json({ error: "Error al iniciar sesión" });
  }
};
