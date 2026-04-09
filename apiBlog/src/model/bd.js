import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

let cnx;

try {
  cnx = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,

    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
  const conexion = await cnx.getConnection();

  console.log("Conexión a la base de datos establecida");
} catch (error) {
  console.error("Error al conectar a la base de datos:", error);
}

// se exporta la conexión para usarla en los controladores
export const db = cnx;
export { cnx };
