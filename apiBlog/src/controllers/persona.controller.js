//importamos para usar el modeo de correto 
import { personasModelo } from "../model/personas.modelo.js";   

//eto lo que hace es devolver el rusultado de cada consulta en json 
export const getCiudadanos = async (req, res) => {
    try {
        const result = await personasModelo.findAll();
        res.json({result});
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los ciudadanos"+error 
        });
    }
};

export const getCiudadanoById = async (req, res) => {
    try {
        const result = await personasModelo.findById(req.params.id);
        res.json({result});
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el ciudadano"+error 
        });
    }
};

export const createCiudadano = async (req, res) => {
    try {
        const data ={
            nombre: req.body.nombre,
            email: req.body.email,
            telefono: req.body.telefono
        }
        const result = await personasModelo.create(data);
        res.json({result});
    } catch (error) {
        res.status(500).json({ error: "Error al crear el ciudadano"+error 
        });
    }
};

export const deleteCiudadano = async (req, res) => {
    try {
        const result = await personasModelo.delete(req.params.id); 
        res.json({result});
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar el ciudadano"+error 
        });
    }
};

export const updateCiudadano = async (req, res) => { 
    try {
        const data ={
            nombre: req.body.nombre,
            email: req.body.email,
            telefono: req.body.telefono
        }
        const result = await personasModelo.update(req.params.id, data); 
        res.json({result});
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar el ciudadano"+error 
        });
    }
};   