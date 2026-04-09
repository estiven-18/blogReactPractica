import useFormulario from "../../hooks/useFormulario";

const FormularioBase = () => {
  //render visual

    const [formulario, obtenrDatos, cambiado] = useFormulario();
  



  return (
    <form onSubmit={obtenrDatos}
      className="mx-auto mt-6 max-w-lg space-y-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
      encType="multipart/form-data"
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
      </div>

      <div>
        <label
          htmlFor="imagen"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Imagen
        </label>
        <input
          id="imagen"
          name="imagen"
          type="file"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none file:mr-4 file:rounded-lg file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-white hover:file:bg-blue-700"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700"
      >
        Agregar
      </button>
    </form>
  );
};

export default FormularioBase;
