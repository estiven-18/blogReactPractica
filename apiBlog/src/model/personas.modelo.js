import { db } from "./bd.js";

// se hace un objeto de funciones 
export const personasModelo = {
  //cada funcion hace la consulta y debyelve el resultado
  findAll: async () => {
    const sql = "SELECT * FROM personas";
    const [rows] = await db.query(sql);
    return rows;
  },

    findById: async (id) => {
    const sql = "SELECT * FROM personas WHERE id = ?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },

    create: async (data) => {
        const sql = "INSERT INTO personas (nombre, email, telefono) VALUES (?, ?, ?)";
        const [rows] = await db.query(sql, [data.nombre, data.email, data.telefono]);
        return rows;
    },

    delete: async (id) => {
        const sql = "DELETE FROM personas WHERE id = ?";
        const [rows] = await db.query(sql, [id]);
        return rows;
    },

    update: async (id, data) => {
        const sql = "UPDATE personas SET nombre = ?, email = ?, telefono = ? WHERE id = ?";
        const [rows] = await db.query(sql, [data.nombre, data.email, data.telefono, id]);
        return rows;
    }
};
