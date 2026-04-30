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
        className="mx-auto mt-6 max-w-lg space-y-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
      >
        <div>
          <label
            htmlFor="titulo"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Titulo
          </label>
          <input
            id="titulo"
            name="titulo"
            type="text"
            placeholder="Escribe el titulo"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
            onChange={cambiado}
          />
          {errores.titulo && (
            <p className="mt-1 text-sm text-red-500">{errores.titulo}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="entrada"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Entrada
          </label>
          <textarea
            id="contenido"
            name="contenido"
            rows="4"
            placeholder="Escribe el contenido"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
            onChange={cambiado}
          ></textarea>
          {errores.contenido && (
            <p className="mt-1 text-sm text-red-500">{errores.contenido}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="imagen"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Imagen (URL)
          </label>
          <input
            id="imagen"
            name="imagen"
            type="url"
            placeholder="https://ejemplo.com/imagen.jpg"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
            onChange={cambiado}
          />
          {errores.imagen && (
            <p className="mt-1 text-sm text-red-500">{errores.imagen}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="fecha"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Fecha
          </label>
          <input
            id="fecha"
            name="fecha"
            type="date"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
            onChange={cambiado}
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-gray-600 px-4 py-2 font-semibold text-white transition hover:bg-gray-700"
        >
          Agregar
        </button>
      </form>

      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h3 className="mb-4 text-lg font-semibold">
              ¿Confirmar creación del post?
            </h3>
            <div className="flex gap-3">
              <button
                onClick={() => setModalVisible(false)}
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Cancelar
              </button>
              <button
                onClick={confirmarCreacion}
                className="flex-1 rounded-lg bg-gray-600 px-4 py-2 font-semibold text-white hover:bg-gray-700"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}

      {modalExito && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h3 className="mb-4 text-lg font-semibold text-green-600">
              ¡Post creado correctamente!
            </h3>
            <p className="text-gray-600">Redireccionando al inicio...</p>
          </div>
        </div>
      )}
    </>
  );
};

export default FormularioBase;
