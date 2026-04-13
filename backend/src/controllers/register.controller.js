import prisma from "../prismaClient.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

// REGISTRO
export const crearUsuario = async (req, res) => {
  const { nombre, apellido, email, password } = req.body || {};

  try {
    if (!nombre || !apellido || !email || !password) {
      return res.status(400).json({ error: "Todos los campos son requeridos" });
    }

    const nombreNormalizado = nombre.trim().toLowerCase();
    const apellidoNormalizado = apellido.trim().toLowerCase();
    const emailNormalizado = email.trim().toLowerCase();

    // Validar si existe por email
    const existeUsuario = await prisma.user.findUnique({
      where: { email: emailNormalizado },
    });

    if (existeUsuario) {
      return res.status(400).json({ error: "El usuario ya existe" });
    }

    //  Hash de contraseña
    const passwordHash = await argon2.hash(password);

    //  Avatar automático
    const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
      nombreNormalizado + " " + apellidoNormalizado,
    )}&background=random&color=fff`;

    // Crear usuario
    const nuevoUsuario = await prisma.user.create({
      data: {
        nombre: nombreNormalizado,
        apellido: apellidoNormalizado,
        email: emailNormalizado,
        password: passwordHash,
        avatar: avatarUrl,
      },
    });

    // 🔒 No enviar password
    return res.status(201).json({
      id: nuevoUsuario.id,
      nombre: nuevoUsuario.nombre,
      email: nuevoUsuario.email,
      avatar: nuevoUsuario.avatar,
    });
  } catch (error) {
    return res.status(500).json({ error: "Error al crear el usuario" });
  }
};
