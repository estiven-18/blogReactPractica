import useFormulario from "../../hooks/useFormulario";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormularioBase = () => {
  const navigate = useNavigate();
  const [formulario, obtenrDatos, cambiado] = useFormulario();
  const [errores, setErrores] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [modalExito, setModalExito] = useState(false);

  const validarCampos = () => {
    const nuevosErrores = {};
    if (!formulario.titulo?.trim()) {
      nuevosErrores.titulo = "El título es obligatorio";
    }
    if (!formulario.contenido?.trim()) {
      nuevosErrores.contenido = "El contenido es obligatorio";
    }
    if (!formulario.imagen?.trim()) {
      nuevosErrores.imagen = "La imagen (URL) es obligatoria";
    }
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarCampos()) {
      setModalVisible(true);
    }
  };

  const confirmarCreacion = async () => {
    setModalVisible(false);
    const exito = await obtenrDatos();
    if (exito !== false) {
      setModalExito(true);
      setTimeout(() => {
        setModalExito(false);
        navigate("/");
      }, 1500);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-6 max-w-lg space-y-4 rounded-lg bg-white p-6 shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
      >
        <div>
          <label
            htmlFor="titulo"
            className="mb-2 block text-[14px] font-medium text-black"
          >
            Título
          </label>
          <input
            id="titulo"
            name="titulo"
            type="text"
            placeholder="Escribe el título"
            className="w-full rounded-lg border border-black px-4 py-3 text-black outline-none focus:ring-2 focus:ring-white"
            onChange={cambiado}
          />
          {errores.titulo && (
            <p className="mt-1 text-[12px] text-red-500">{errores.titulo}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="entrada"
            className="mb-2 block text-[14px] font-medium text-black"
          >
            Contenido
          </label>
          <textarea
            id="contenido"
            name="contenido"
            rows="4"
            placeholder="Escribe el contenido"
            className="w-full rounded-lg border border-black px-4 py-3 text-black outline-none focus:ring-2 focus:ring-white"
            onChange={cambiado}
          ></textarea>
          {errores.contenido && (
            <p className="mt-1 text-[12px] text-red-500">{errores.contenido}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="imagen"
            className="mb-2 block text-[14px] font-medium text-black"
          >
            Imagen (URL)
          </label>
          <input
            id="imagen"
            name="imagen"
            type="url"
            placeholder="https://ejemplo.com/imagen.jpg"
            className="w-full rounded-lg border border-black px-4 py-3 text-black outline-none focus:ring-2 focus:ring-white"
            onChange={cambiado}
          />
          {errores.imagen && (
            <p className="mt-1 text-[12px] text-red-500">{errores.imagen}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="fecha"
            className="mb-2 block text-[14px] font-medium text-black"
          >
            Fecha (opcional)
          </label>
          <input
            id="fecha"
            name="fecha"
            type="date"
            className="w-full rounded-lg border border-black px-4 py-3 text-black outline-none focus:ring-2 focus:ring-white"
            onChange={cambiado}
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-full bg-black px-6 py-3 font-medium text-white hover:bg-[#e2e2e2] hover:text-black transition"
        >
          Agregar
        </button>
      </form>

      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="rounded-lg bg-white p-6 shadow-[0_4px_16px_rgba(0,0,0,0.16)]">
            <h3 className="mb-4 text-[20px] font-bold text-black">
              ¿Confirmar creación del post?
            </h3>
            <div className="flex gap-3">
              <button
                onClick={() => setModalVisible(false)}
                className="flex-1 rounded-full border border-black px-6 py-3 text-black hover:bg-[#e2e2e2]"
              >
                Cancelar
              </button>
              <button
                onClick={confirmarCreacion}
                className="flex-1 rounded-full bg-black px-6 py-3 font-medium text-white hover:bg-[#e2e2e2] hover:text-black"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}

      {modalExito && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="rounded-lg bg-white p-6 shadow-[0_4px_16px_rgba(0,0,0,0.16)]">
            <h3 className="mb-4 text-[20px] font-bold text-black">
              ¡Post creado correctamente!
            </h3>
            <p className="text-[#4b4b4b]">Redireccionando al inicio...</p>
          </div>
        </div>
      )}
    </>
  );
};

export default FormularioBase;
