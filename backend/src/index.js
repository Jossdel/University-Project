import express from "express";
import productoRoutes from "./routes/producto.routes.js";
// import pedidoRoutes from "./routes/pedido.routes.js";

import cors from "cors";
cors();
const app = express();
app.use(express.json());

app.use("/api/productos", productoRoutes);
// app.use("/api/pedidos", pedidoRoutes);
app.get("/", (req, res) => {
  return res.send("<h1>Hola Server</h1>");
});

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});
