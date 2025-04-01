import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 fixed w-full top-0 shadow-md">
      <div className="px-8 flex justify-between items-center">
        {/* Logo o nombre */}
        <h1 className="text-xl font-bold">Mi Portafolio</h1>

        {/* Links de navegación */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/Portafolio/" className="hover:text-gray-300">Inicio</Link>
          </li>
          <li>
            <Link to="Portafolio/about" className="hover:text-gray-300">Sobre mí</Link>
          </li>
          <li>
            <Link to="Portafolio/projects" className="hover:text-gray-300">Proyectos</Link>
          </li>
          <li>
            <Link to="Portafolio/contact" className="hover:text-gray-300">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
