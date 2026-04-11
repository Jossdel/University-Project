import axios from "axios";

export const apiValues = async () => {
  try {

    const response = await axios.post(
      "http://localhost:3000/api/crear-usuario"
    );

    return response.data;

  } catch (error) {
    console.error("Error:", error);
  }
};

apiValues();