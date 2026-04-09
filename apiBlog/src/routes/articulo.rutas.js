import { Router } from "express";
import {
  createArticulo,
  deleteArticulo,
  getArticuloById,
  getArticulos,
  updateArticulo,
} from "../controllers/articulo.controller.js";

const router = Router();

router.get("/articulos", getArticulos);
router.get("/articulos/:id", getArticuloById);
router.post("/articulos", createArticulo);
router.put("/articulos/:id", updateArticulo);
router.delete("/articulos/:id", deleteArticulo);

export default router;
