import { useState, useEffect } from "react";

const Articulos = () => {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    consumirApi();
  }, []);

  async function consumirApi() {
    const url = "https://blogreactpractica.onrender.com/articulos";
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
      <div className="grid grid-cols-4 gap-4 p-4">
        {articulos.length === 0 ? (
          <p className="col-span-4 text-[#4b4b4b]">
            No hay articulos para mostrar.
          </p>
        ) : (
          articulos.map((articulo) => (
            <article
              key={articulo.id}
              className="flex flex-col rounded-lg bg-white shadow-[0_4px_16px_rgba(0,0,0,0.12)] overflow-hidden"
            >
              <div className="h-32 w-full bg-gray-200">
                {articulo.imagen ? (
                  <img
                    src={articulo.imagen}
                    alt={articulo.titulo}
                    className="h-full w-full object-cover"
                  />
                ) : null}
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between text-[12px] text-[#afafaf] mb-2">
                  <span>#{articulo.id}</span>
                  {articulo.fecha ? (
                    <span>
                      {new Date(articulo.fecha).toLocaleDateString("es-ES")}
                    </span>
                  ) : null}
                </div>
                <h4 className="text-[20px] font-bold text-black mb-2 truncate">
                  {articulo.titulo}
                </h4>
                <p className="text-[14px] text-[#4b4b4b] line-clamp-3">
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
