import { useState } from "react";

const useFormulario = (objetoDatos = {}) => {

    const [formulario, setFormulario] = useState(objetoDatos);

    const obtenrDatos = async () => {
      const datosAEnviar = {
        titulo: formulario.titulo,
        contenido: formulario.contenido,
        imagen: formulario.imagen,
      };
      
      if (formulario.fecha) {
        datosAEnviar.fecha = formulario.fecha;
      } else {
        const ahora = new Date();
        datosAEnviar.fecha = ahora.toISOString().split('T')[0];
      }
     
      try {
        const peticion = await fetch("https://blogreactpractica.onrender.com/articulos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(datosAEnviar)
        });
        
        const resultado = await peticion.json();
        
        if (!peticion.ok) {
          throw new Error(resultado.error || 'Error al crear el articulo');
        }
        
        return true;
      } catch (error) {
        console.error('Error:', error);
        alert('Error al crear el articulo: ' + error.message);
        return false;
      }
    };

   const cambiado = ({target}) => {
     const {name, value} = target;
     setFormulario({
         ...formulario,
         [name]: value
     });
   };
    return [formulario, obtenrDatos, cambiado];
}
 
export default useFormulario;