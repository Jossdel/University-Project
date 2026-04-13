export const apiValues = async () => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/src/assets/login.html";
      return [];
    }

    const res = await fetch("http://localhost:3000/api/productos", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status === 401) {
      console.warn("Token inválido o expirado");

      localStorage.removeItem("token");
      window.location.href = "/src/assets/login.html";

      return [];
    }

    if (!res.ok) {
      throw new Error("Error en la petición");
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};
