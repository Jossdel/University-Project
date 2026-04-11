import { Router } from "express";
import {
  crearProducto,
  eliminarProducto,
  obtenerProductos,
  eliminarTodosProductos,
} from "../controllers/producto.controller.js";
import { crearUsuario, loginUsuario } from "../controllers/users.controller.js";

const router = Router();

router.post("/crear-producto", crearProducto);
router.get("/productos", obtenerProductos);
router.delete("/eliminar-producto/:id", eliminarProducto);
router.delete("/eliminar-todos-productos", eliminarTodosProductos);
router.post("/crear-usuario", crearUsuario);
router.post("/login", loginUsuario);
export default router;
