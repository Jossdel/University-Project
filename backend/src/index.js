import express from "express";
import routes from "./routes/routes.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

// import pedidoRoutes from "./routes/pedido.routes.js";
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", routes);
// app.use("/api/pedidos", pedidoRoutes);

app.listen(3000 || process.env.PORT, () => {
  console.log("Servidor en http://localhost:3000");
});
