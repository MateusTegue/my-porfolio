import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export function Navegacion() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
<header className="fixed top-0 left-0 w-full h-16 z-50 bg-black shadow-md">
  <nav className="container mx-auto  text-white rounded-lg px-10 py-4 flex items-center justify-between">
    {/* Nombre de la página */}
    <Link to="/home">
    <h1 className="text-xl font-bold flex items-center gap-2">
  Mateus Tegue
  <a href="#">
    <svg className="h-8 w-8 text-white" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z"/>
      <path d="M18 15l-6-6l-6 6h12" transform="rotate(180 12 12)" />
    </svg>
  </a>
</h1>

    </Link>

    {/* Botón Menú Hamburguesa */}
    <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
      {menuOpen ? <X size={28} /> : <Menu size={28} />}
    </button>

    {/* Contenedor de los enlaces */}
    <div
      className={`lg:flex  ${
        menuOpen ? "block" : "hidden"
      } absolute top-16 left-0 w-full bg-black lg:static lg:bg-transparent lg:w-auto lg:block`}
    >
      <Link to="/projects" className="block text-lg font-semibold p-3 hover:text-blue-500">
        Proyectos
      </Link>
      <Link to="/formacion" className="block text-lg font-semibold p-3 hover:text-blue-500">
        Formacion
      </Link>
      <Link to="/postulaciones" className="block text-lg font-semibold p-3 hover:text-blue-500">
        postulaciones
      </Link>
      <Link to="/blog" className="block text-lg font-semibold p-3 hover:text-blue-500">
        Blog
      </Link>
    </div>
  </nav>
</header>
  );
}
