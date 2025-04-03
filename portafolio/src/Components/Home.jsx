import {Link} from "react-router-dom"

export default function Home() {
   return(
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center pt-0">
      <h1 className="text-4xl font-bold">Hola soy<span className="text-blue-400"> Francisco Javier Alcala Guzmán</span></h1>
      <p className="text-2xl font-bold text-blue-300">Ingeniero en Informática especializado en el desarrollo de software y plataformas web. Cuento con experiencia en diseño, creación y optimización de bases de datos SQL y NoSQL,
         brindando soluciones eficientes y escalables.
      </p>
      <div className="mt-6">
        <Link 
          to="./projects" 
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
        >
          Ver Proyectos
        </Link>
        
        <Link 
          to="./contact" 
          className="ml-4 border border-white text-white py-2 px-4 rounded-lg hover:bg-white hover:text-gray-900 transition duration-300"
        >
          Contáctame
        </Link>
      </div>
    </section>

   )
}