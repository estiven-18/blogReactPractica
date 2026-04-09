//esto es para hacer las ruts de la aip
import { Router } from "express";

//esto es para importar el controlador de persona de cada endpoint
import * as personaController from "../controllers/persona.controller.js";

//definimos las rutas de cada endpoint
const router = Router();

router.get("/ciudadanos", personaController.getCiudadanos);
router.get("/ciudadanos/:id", personaController.getCiudadanoById);
router.post("/ciudadanos", personaController.createCiudadano);
router.delete("/ciudadanos/:id", personaController.deleteCiudadano);
router.put("/ciudadanos/:id", personaController.updateCiudadano);

// se exporta el router para usarlo en app.js
export default router;