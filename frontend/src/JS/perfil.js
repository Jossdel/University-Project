const perfilIcon = document.querySelector(".perfil-icon");

perfilIcon.addEventListener("click", async (e) => {
  e.stopPropagation();

  console.log("CLICK OK");

  let panel = document.querySelector(".perfil-panel");

  // Toggle inmediato (antes del fetch)
  if (panel) {
    panel.remove();
    return;
  }

  try {
    const res = await fetch("http://localhost:3000/api/user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (!res.ok) {
      console.error("Error en fetch:", res.status);
      return;
    }

    const usuario = await res.json();
    console.log("USUARIO FRONT:", usuario);

    // Crear panel
    panel = document.createElement("div");
    panel.classList.add("perfil-panel");
    panel.textContent = `${usuario.avatar}`;
    panel.innerHTML = `
      <div class="perfil-header">
        <img  src="${usuario.avatar || "/img/default.png"}" alt="avatar">
       
        <h3>${usuario.nombre}</h3>
        <p>${usuario.email}</p>
        <br>
        <p class="btn-logout"> Cerrar sesión</p>
      </div>
    `;

    document.body.appendChild(panel);

    const rect = perfilIcon.getBoundingClientRect();
    panel.style.top = rect.bottom + 10 + "px";
    panel.style.right = window.innerWidth - rect.right + "px";

    panel.querySelector(".btn-logout").addEventListener("click", () => {
      // 🔥 borrar token
      localStorage.removeItem("token");

      // opcional: borrar avatar
      const img = document.getElementById("avatar-img");
      if (img) img.src = "/img/default.png";

      // cerrar panel
      panel.remove();

      // redirigir al login
      window.location.href = "/login.html";
    });
  } catch (error) {
    console.error("ERROR FRONT:", error);
  }
});

// cerrar afuera
document.addEventListener("click", (e) => {
  const panel = document.querySelector(".perfil-panel");

  if (panel && !panel.contains(e.target) && !perfilIcon.contains(e.target)) {
    panel.remove();
  }
});
