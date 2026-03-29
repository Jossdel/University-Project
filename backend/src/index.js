import express from "express";
import productoRoutes from "./routes/producto.routes.js";
// import pedidoRoutes from "./routes/pedido.routes.js";

import cors from "cors";
cors();
const app = express();
app.use(express.json());

app.use("/api", productoRoutes);
// app.use("/api/pedidos", pedidoRoutes);

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});
