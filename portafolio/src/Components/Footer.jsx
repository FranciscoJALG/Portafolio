export default function Footer() {
    return (
      <footer className="w-full bg-gray-800 text-white py-4 text-center mt-auto">
        <div className="container mx-auto flex flex-col items-center">
          {/* Nombre o logo */}
          <h2 className="text-lg font-bold">Mi Portafolio</h2>
  
          {/* Redes sociales */}
          <div className="flex space-x-4 mt-2">
            <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/tuusuario/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              LinkedIn
            </a>
          </div>
  
          {/* Derechos de autor */}
          <p className="text-sm mt-2">© 2024 Tu Nombre. Todos los derechos reservados.</p>
        </div>
      </footer>
    );
  }
  