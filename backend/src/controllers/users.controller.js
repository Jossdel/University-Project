import prisma from "../prismaClient.js";
import argon2 from "argon2";

export const crearUsuario = async (req, res) => {
  const { nombre, apellido, email, password } = req.body;

  try {
    if (!nombre || !apellido || !email || !password) {
      return res.status(400).json({ error: "Todos los campos son requeridos" });
    }

    const nombreNormalizado = nombre.trim().toLowerCase();
    const apellidoNormalizado = apellido.trim().toLowerCase();
    const emailNormalizado = email.trim().toLowerCase();

    const existeUsuario = await prisma.user.findUnique({
      where: { email: emailNormalizado },
    });

    if (existeUsuario) {
      return res.status(400).json({ error: "El usuario ya existe" });
    }

    const passwordHash = await argon2.hash(password);

    const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
      nombreNormalizado + " " + apellidoNormalizado,
    )}&background=random&color=fff`;

    const nuevoUsuario = await prisma.user.create({
      data: {
        nombre: nombreNormalizado,
        apellido: apellidoNormalizado,
        email: emailNormalizado,
        password: passwordHash,
        avatar: avatarUrl,
      },
    });

    return res.status(201).json(nuevoUsuario);
  } catch (error) {
    return res.status(500).json({ error: "Error al crear el usuario" });
  }
};

// LOGIN
const loginUsuario = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Email y contraseña son requeridos" });
    }

    const emailNormalizado = email.trim().toLowerCase();

    const usuario = await prisma.user.findUnique({
      where: { email: emailNormalizado },
    });

    if (!usuario) {
      return res.status(400).json({ error: "Credenciales inválidas" });
    }

    const passwordValida = await argon2.verify(usuario.password, password);

    if (!passwordValida) {
      return res.status(400).json({ error: "Credenciales inválidas" });
    }

    return res.status(200).json({
      message: "Login exitoso",
      usuario: {
        id: usuario.id,
        nombre: usuario.nombre,
        email: usuario.email,
        avatar: usuario.avatar,
      },
    });
  } catch (error) {
    return res.status(500).json({ error: "Error al iniciar sesión" });
  }
};
