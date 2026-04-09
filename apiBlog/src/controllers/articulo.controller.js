import { articulosModelo } from "../model/articulos.modelo.js";

const buildArticuloData = (body) => ({
  titulo: body.titulo,
  contenido: body.contenido,
  fecha: body.fecha,
  imagen: body.imagen,
});

const validarArticulo = (data) => {
  if (!data.titulo || !data.contenido || !data.fecha || !data.imagen) {
    throw new Error("Todos los campos son obligatorios: titulo, contenido, fecha e imagen");
  }
};

export const getArticulos = async (req, res) => {
  try {
    const result = await articulosModelo.findAll();
    res.json({ result });
  } catch (error) {
    res.status(500).json({ error: `Error al obtener los articulos: ${error.message}` });
  }
};

export const getArticuloById = async (req, res) => {
  try {
    const result = await articulosModelo.findById(req.params.id);

    if (!result) {
      return res.status(404).json({ error: "Articulo no encontrado" });
    }

    return res.json({ result });
  } catch (error) {
    return res
      .status(500)
      .json({ error: `Error al obtener el articulo: ${error.message}` });
  }
};

export const createArticulo = async (req, res) => {
  try {
    const data = buildArticuloData(req.body);
    validarArticulo(data);

    const result = await articulosModelo.create(data);
    res.status(201).json({
      message: "Articulo creado correctamente",
      id: result.insertId,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateArticulo = async (req, res) => {
  try {
    const data = buildArticuloData(req.body);
    validarArticulo(data);

    const result = await articulosModelo.update(req.params.id, data);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Articulo no encontrado" });
    }

    return res.json({ message: "Articulo actualizado correctamente" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const deleteArticulo = async (req, res) => {
  try {
    const result = await articulosModelo.delete(req.params.id);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Articulo no encontrado" });
    }

    return res.json({ message: "Articulo eliminado correctamente" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: `Error al eliminar el articulo: ${error.message}` });
  }
};
