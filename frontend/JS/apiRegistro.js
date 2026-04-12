const form = document.getElementById("formUsuario");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // 🚫 evita que la página se recargue

  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("http://localhost:3000/api/crear-usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre,
        apellido,
        email,
        password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error(data.error);
      alert(data.error);
      return;
    }

    console.log("Usuario creado:", data);
    alert("Usuario creado correctamente ✅");

    form.reset(); // limpia el formulario
  } catch (error) {
    console.error("Error:", error);
  }
});
