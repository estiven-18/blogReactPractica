import { Routes, Route, BrowserRouter } from "react-router-dom";
import Nav from "../components/layout/Nav";
import Header from "../components/layout/Header";
import Articulos from "../components/pages/Articulos";
import CrearArticulo from "../components/pages/CrearArticulo";
import SideBar from "../components/layout/SideBar";
import Footer from "../components/layout/Footer";

const Rutas = () => {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-white">
          <Header />
          <Nav />
          
          <div className="flex flex-1">
            <section className="flex-1">
              <Routes>
                <Route path="/" element={<Articulos />}> </Route>
                <Route path="/articulos" element={<Articulos />}> </Route>
                <Route path="/crear-articulo" element={<CrearArticulo />}> </Route>
              </Routes>
            </section>

            <aside className="w-64 shrink-0 pl-4">
              <SideBar />
            </aside>
          </div>
          
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default Rutas;
