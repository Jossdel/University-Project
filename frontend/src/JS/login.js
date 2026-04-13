const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = document.querySelector(".btn-login");

loginButton.addEventListener("click", async () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    console.log(data);

    if (!response.ok) {
      alert(data.error || "Error desconocido");
      return;
    }

    localStorage.setItem("token", data.token);

    window.location.href = "/index.html";
  } catch (error) {
    console.error("ERROR REAL:", error);
    alert(error.message);
  }
});
