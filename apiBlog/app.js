import express from "express";
import cors from "cors";

import articuloRoutes from "./src/routes/articulo.rutas.js";


const app = express();
//esto es para que no haya problemas con el cors
app.use(cors());
//esto para que entienda json
app.use(express.json());
//esto para que entida la url 
app.use("/", articuloRoutes);
//y se exporta pra usarla en index
export default app;