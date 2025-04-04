export default function About() {
    return(

      <section id="about" className="bg-gray-900 text-white pt-24 pb-20 min-h-screen flex items-center">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-blue-400">Sobre Mí</h2>
        <p className="text-lg mt-4">
          Soy un ingeniero en informática apasionado por el desarrollo de software y la creación de plataformas web eficientes.  
          Me especializo en el diseño, desarrollo y optimización de aplicaciones, así como en la gestión de bases de datos SQL y NoSQL.  
        </p>
        <p className="text-lg mt-2">
          También tengo conocimientos en ciencia de datos con Python, incluyendo análisis, modelado y predicción de datos.  
          Además, cuento con experiencia en desarrollo de aplicaciones móviles con Kotlin, aplicaciones en Java y C#, aunque en menor medida.  
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">

         <div className="flex flex-col items-center bg-blue-600 text-white py-3 px-4 rounded-lg w-24 h-24">
         <i className="devicon-javascript-plain text-3xl"></i>
            <span className="text-sm">JavaScript</span>
         </div>
         <div className="flex flex-col items-center bg-blue-600 text-white py-1 px-4 rounded-lg w-24 h-24">
         <i className="devicon-mongodb-plain text-2xl"></i>
            <span className="text-sm">Bases de datos NoSQL</span>
         </div>
         <div className="flex flex-col items-center bg-blue-600 text-white py-3 px-4 rounded-lg w-24 h-24">
         <i className="devicon-mysql-plain text-3xl"></i>
            <span className="text-sm">Bases de datos SQL</span>
         </div>
          <div className="flex flex-col items-center bg-blue-600 text-white py-3 px-4 rounded-lg w-24 h-24">
         <i className="devicon-github-original text-3xl"></i>
            <span className="text-sm">Git & Github</span>
         </div>
          <div className="flex flex-col items-center bg-blue-600 text-white py-3 px-4 rounded-lg w-24 h-24">
         <i className="devicon-java-plain text-3xl"></i>
            <span className="text-sm">Java</span>
         </div>
         <div className="flex flex-col items-center bg-blue-600 text-white py-3 px-4 rounded-lg w-24 h-24">
         <i className="devicon-python-plain text-3xl"></i>
            <span className="text-sm">Python</span>
         </div>
         <div className="flex flex-col items-center bg-blue-600 text-white py-3 px-4 rounded-lg w-24 h-24">
         <i className="devicon-csharp-plain text-3xl"></i>
            <span className="text-sm">C#</span>
         </div>
         <div className="flex flex-col items-center bg-blue-600 text-white py-3 px-4 rounded-lg w-24 h-24">
         <i className="devicon-ruby-plain text-3xl"></i>
            <span className="text-sm">Ruby</span>
         </div>
         <div className="flex flex-col items-center bg-blue-600 text-white py-3 px-4 rounded-lg w-24 h-24">
         <i className="devicon-kotlin-plain text-3xl"></i>
            <span className="text-sm">Kotlin</span>
         </div>
        </div>

        <div className="mt-6">
          <a 
            href="./Files/CV Francisco Javier Alcala Guzmán.pdf" 
            download
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </section>
    );
}  