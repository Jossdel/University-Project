import axios from "axios";

const form = document.getElementById("formUsuario");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // capturar datos del formulario
  const datos = {
    nombre: document.getElementById("nombre").value,
    apellido: document.getElementById("apellido").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  };

  try {
    const response = await axios.post(
      "http://localhost:3000/api/crear-usuario",
      datos
    );

    console.log("Usuario creado:", response.data);
    alert("Usuario creado correctamente");

    form.reset();

  } catch (error) {
    console.error("Error:", error);
    alert("Error al crear usuario");
  }
});