import { useState, useEffect } from "react";

const Articulos = () => {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    consumirApi();
  }, []);

  async function consumirApi() {
    const url = "http://localhost:3000/articulos";
    const peticion = await fetch(url, { method: "GET" });
    const datos = await peticion.json();

    if (Array.isArray(datos.result)) {
      setArticulos(datos.result);
    } else if (Array.isArray(datos.articulos)) {
      setArticulos(datos.articulos);
    }
  }

  return (
    <>
      <div className="grid grid-cols-4 gap-4 p-3">
        {articulos.length === 0 ? (
          <p className="col-span-4 text-sm text-gray-500">
            No hay articulos para mostrar.
          </p>
        ) : (
          articulos.map((articulo) => (
            <article
              key={articulo.id}
              className="flex flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
            >
              <div className="h-32 w-full overflow-hidden rounded-lg bg-gray-200 mb-3">
                {articulo.imagen ? (
                  <img
                    src={articulo.imagen}
                    alt={articulo.titulo}
                    className="h-full w-full object-cover"
                  />
                ) : null}
              </div>
              
              <div className="flex flex-col min-w-0">
                <div className="flex items-center justify-between gap-2 text-xs text-gray-500 mb-1">
                  <span>#{articulo.id}</span>
                  {articulo.fecha ? (
                    <span>
                      {new Date(articulo.fecha).toLocaleDateString("es-ES")}
                    </span>
                  ) : null}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 truncate mb-1">
                  {articulo.titulo}
                </h4>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {articulo.contenido}
                </p>
              </div>
            </article>
          ))
        )}
      </div>
    </>
  );
};

export default Articulos;
