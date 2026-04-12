export const apiValues = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/productos");

    return response.json();
  } catch (error) {
    console.error("Error:", error);
  }
};

apiValues();
