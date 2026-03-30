export const apiValues = async () => {
  let api = await fetch("http://localhost:3000/api/productos");

  const response = await api.json();

  return response;
};
apiValues();
