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
    
      <div className="space-y-3 p-3">
        {articulos.length === 0 ? (
          <p className="text-sm text-gray-500">
            No hay articulos para mostrar.
          </p>
        ) : (
          articulos.map((articulo) => (
            <article
              key={articulo.id}
              className="flex gap-3 rounded-2xl border border-gray-200 bg-white p-3 shadow-sm"
            >
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-gray-200">
                {articulo.imagen ? (
                  <img
                    src={articulo.imagen}
                    alt={articulo.titulo}
                    className="h-full w-full object-cover"
                  />
                ) : null}
              </div>

              <div className="min-w-0 flex-1">
                <div className="mb-1 flex items-center justify-between gap-2 text-xs text-gray-500">
                  <span>Articulo #{articulo.id}</span>
                  {articulo.fecha ? (
                    <span>
                      {new Date(articulo.fecha).toLocaleDateString("es-ES")}
                    </span>
                  ) : null}
                </div>
                <h4 className="text-base font-semibold text-gray-900">
                  {articulo.titulo}
                </h4>
                <p className="mt-1 text-sm text-gray-600">
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
