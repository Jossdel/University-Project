import { Router } from "express";
const router = Router();
import {
  crearProducto,
  eliminarProducto,
  obtenerProductos,
  eliminarTodosProductos,
} from "../controllers/producto.controller.js";
import { crearUsuario } from "../controllers/register.controller.js";
// import { authMiddleware } from "../middlewares/login.middleware.js";
import { loginUsuario } from "../controllers/login.controller.js";
import { getUser } from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/login.middleware.js";
//ROUTES
router.post("/crear-producto", crearProducto);
router.get("/productos", authMiddleware, obtenerProductos);
router.delete("/eliminar-producto/:id", eliminarProducto);
router.delete("/eliminar-todos-productos", eliminarTodosProductos);
router.post("/register", crearUsuario);
router.post("/login", loginUsuario);
router.get("/user", authMiddleware, getUser);

export default router;
