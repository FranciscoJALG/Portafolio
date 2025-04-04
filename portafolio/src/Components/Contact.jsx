import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="flex flex-col min-h-screen items-center justify-between bg-gray-100 pt-24">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Contacto</h2>

      {/* Formulario de contacto */}
      <form action="https://formspree.io/f/mdkewejv" method="POST" className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg"
      onSubmit={(e) => {setTimeout(() => e.target.reset(), 1000); }}>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Nombre</label>
          <input type="text" name="nombre" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tu nombre" required />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Email</label>
          <input type="email" name="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tu correo" required />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Mensaje</label>
          <textarea name="mensaje" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Escribe tu mensaje..." rows="4" required></textarea>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition">
          Enviar
        </button>
      </form>


      {/* Redes sociales */}
      <div className="mt-6 flex space-x-6 text-gray-600">
        <a href="https://github.com/franciscojalg" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
          <FaGithub size={30} />
        </a>
        <a href="https://linkedin.com/in/francisco-javier-alcala-guzmán-693770325/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
          <FaLinkedin size={30} />
        </a>
        <a href="mailto:francisco.j.alcala.guz@gmail.com?subject=Contacto%20desde%20tu%20portafolio&body=Hola,%20quiero%20contactarte!" className="hover:text-gray-900">
          <FaEnvelope size={30} />
        </a>
        <a href="https://wa.me/5213411780393?text=Hola,%20quiero%20contactarte!" 
          target="_blank" rel="noopener noreferrer"
          className="hover:text-green-900">
          <FaWhatsapp size={30} />
        </a>

      </div>
      <div className="text-center mt-4 text-gray-700">
        <p>📍 <strong>Ubicación:</strong> México | Disponible para trabajo remoto y presencial</p>
        <p>⏳ <strong>Disponibilidad:</strong> Tiempo completo</p>
      </div>

    </section>
  );
}
