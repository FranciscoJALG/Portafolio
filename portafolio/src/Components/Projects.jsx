import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Sistema de Predicción de Inventarios",
    description: "Aplicación web para predecir la demanda de productos en farmacias usando Machine Learning.",
    image: "/images/inventarios.png", // Reemplaza con la imagen de tu proyecto
    tech: ["Python", "Flask", "SQL Server", "Holt-Winters"],
    github: "https://github.com/tuusuario/inventarios",
    demo: "https://inventarios-demo.vercel.app",
  },
  {
    title: "Aplicación de Pedidos en Equipo",
    description: "Plataforma colaborativa para gestionar pedidos en equipo, desarrollada con MERN Stack.",
    image: "/images/pedidos.png",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/tuusuario/pedidos",
    demo: "https://pedidos-app.vercel.app",
  },
  {
    title: "Aplicación Para analisis de informacion de archivos csv",
    description: "Aplicacion web desarrollada con python y flask para el analisis de archivos csv",
    image: "./images/Portada_Data_Analizer.png",
    tech: ["Python", "Flask", "Bootstrap."],
    github: "https://github.com/FranciscoJALG/Data-analizer",
    demo: "https://data-analizer-1.onrender.com",
  },
  
  
];

export default function Projects() {
  return (
<section id="projects" className="scroll-mt-24 px-6 bg-gray-100 min-h-[calc(100vh-8rem)] py-10">
       <h2 className="text-3xl font-bold text-center mb-8">Mis Proyectos</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <img src={project.image} alt={project.title} className="rounded-lg mb-4 w-full h-48 object-cover"/>
            <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
            <p className="text-gray-700 my-2">{project.description}</p>

            <div className="flex flex-wrap gap-2 my-2">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">{tech}</span>
              ))}
            </div>

            <div className="flex justify-between mt-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-900 hover:text-blue-600">
                <FaGithub className="mr-2"/> Código
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-900 hover:text-blue-600">
                <FaExternalLinkAlt className="mr-2"/> Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
