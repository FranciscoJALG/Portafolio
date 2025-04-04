export default function Footer() {
    return (
      <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 text-center shadow-md z-10">
        <div className="container mx-auto flex flex-col items-center">
          {/* Nombre o logo */}
          <h2 className="text-lg font-bold">Mi Portafolio</h2>
  
          {/* Redes sociales */}
          <div className="flex space-x-4 mt-2">
            <a href="https://github.com/franciscojalg" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              GitHub
            </a>
            <a href="https://linkedin.com/in/francisco-javier-alcala-guzmán-693770325/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              LinkedIn
            </a>
          </div>
  
          {/* Derechos de autor */}
          <p className="text-sm mt-2">© 2024 Francisco Javier Alcala Guzmán. Todos los derechos reservados.</p>
        </div>
      </footer>
    );
  }
  