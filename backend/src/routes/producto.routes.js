import { Router } from "express";
import {
  crearProducto,
  obtenerProductos,
} from "../controllers/producto.controller.js";

const router = Router();

router.post("/crear-producto", crearProducto);
router.get("/productos", obtenerProductos);

export default router;
