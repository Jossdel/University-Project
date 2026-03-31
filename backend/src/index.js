import express from "express";
import productoRoutes from "./routes/producto.routes.js";
import cors from "cors";
// import pedidoRoutes from "./routes/pedido.routes.js";
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", productoRoutes);
// app.use("/api/pedidos", pedidoRoutes);

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});
