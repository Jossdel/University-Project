document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.getElementById("crPw");
  const eyeBtn = document.getElementById("crEyeBtn");
  const submitBtn = document.getElementById("crSubmit");
  const nombre = document.getElementById("crNombre");
  const apellido = document.getElementById("crApellido");
  const email = document.getElementById("crEmail");
  const toast = document.getElementById("crToast");
  const lbl = document.getElementById("crStrLbl");

  const bars = ["cb1", "cb2", "cb3", "cb4"].map((id) =>
    document.getElementById(id),
  );

  // 👁 Mostrar / ocultar password
  eyeBtn.addEventListener("click", () => {
    passwordInput.type =
      passwordInput.type === "password" ? "text" : "password";
  });

  // 🔐 Fortaleza contraseña
  passwordInput.addEventListener("input", () => {
    const val = passwordInput.value;

    bars.forEach((b) => {
      b.style.opacity = "0.2";
      b.style.background = "";
    });

    if (!val) {
      lbl.textContent = "";
      return;
    }

    let score = 0;
    if (val.length >= 8) score++;
    if (/[A-Z]/.test(val)) score++;
    if (/[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;

    const labels = ["", "Débil", "Regular", "Buena", "Fuerte"];
    const colors = ["", "#c0392b", "#d4820a", "#8a7a2e", "#5a7a2e"];

    bars.forEach((bar, i) => {
      if (i < score) {
        bar.style.opacity = "1";
        bar.style.background = colors[score];
      }
    });

    lbl.textContent = labels[score];
    lbl.style.color = colors[score];
  });

  // 🚀 REGISTRO (ÚNICO EVENTO)
  submitBtn.addEventListener("click", async () => {
    const n = nombre.value.trim();
    const a = apellido.value.trim();
    const e = email.value.trim();
    const p = passwordInput.value;

    if (!n || !a || !e || !p) {
      alert("Completa todos los campos");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: n,
          apellido: a,
          email: e.toLowerCase(),
          password: p,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Error al registrar");
        return;
      }

      // 🎉 éxito
      toast.classList.add("cr-toast--show");

      setTimeout(() => {
        window.location.href = "/src/assets/login.html";
      }, 2000);
    } catch (error) {
      console.error(error);
      alert("Error de conexión con el servidor");
    }
  });
});
