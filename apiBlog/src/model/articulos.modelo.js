import { db } from "./bd.js";

export const articulosModelo = {
  findAll: async () => {
    const sql = "SELECT * FROM articulos ORDER BY id DESC";
    const [rows] = await db.query(sql);
    return rows;
  },

  findById: async (id) => {
    const sql = "SELECT * FROM articulos WHERE id = ?";
    const [rows] = await db.query(sql, [id]);
    return rows[0] ?? null;
  },

  create: async (data) => {
    const sql =
      "INSERT INTO articulos (titulo, contenido, fecha, imagen) VALUES (?, ?, ?, ?)";
    const [result] = await db.query(sql, [
      data.titulo,
      data.contenido,
      data.fecha,
      data.imagen,
    ]);
    return result;
  },

  update: async (id, data) => {
    const sql =
      "UPDATE articulos SET titulo = ?, contenido = ?, fecha = ?, imagen = ? WHERE id = ?";
    const [result] = await db.query(sql, [
      data.titulo,
      data.contenido,
      data.fecha,
      data.imagen,
      id,
    ]);
    return result;
  },

  delete: async (id) => {
    const sql = "DELETE FROM articulos WHERE id = ?";
    const [result] = await db.query(sql, [id]);
    return result;
  },
};
