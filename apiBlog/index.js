import app from "./app.js";
import dotenv from "dotenv";
// estoo es para variebles de enotrno
dotenv.config();


const PORT = process.env.APP_PORT || 3000;
//esto es para iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});