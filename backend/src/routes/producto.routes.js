import { Router } from "express";
import {
  crearProducto,
  eliminarProducto,
  obtenerProductos,
  eliminarTodosProductos,
} from "../controllers/producto.controller.js";

const router = Router();

router.post("/crear-producto", crearProducto);
router.get("/productos", obtenerProductos);
router.delete("/eliminar-producto/:id", eliminarProducto);
router.delete("/eliminar-todos-productos", eliminarTodosProductos);
export default router;
