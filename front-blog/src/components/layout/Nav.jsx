import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-40 flex justify-center bg-white py-3 border-b border-black/10">
      <ul className="flex gap-3">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive 
                ? "block bg-black text-white px-6 py-3 rounded-full font-medium"
                : "block bg-[#efefef] text-black px-6 py-3 rounded-full font-medium hover:bg-[#e2e2e2]"
            }
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/articulos" 
            className={({ isActive }) => 
              isActive 
                ? "block bg-black text-white px-6 py-3 rounded-full font-medium"
                : "block bg-[#efefef] text-black px-6 py-3 rounded-full font-medium hover:bg-[#e2e2e2]"
            }
          >
            Artículos
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/crear-articulo" 
            className={({ isActive }) => 
              isActive 
                ? "block bg-black text-white px-6 py-3 rounded-full font-medium"
                : "block bg-[#efefef] text-black px-6 py-3 rounded-full font-medium hover:bg-[#e2e2e2]"
            }
          >
            Crear Artículo
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
