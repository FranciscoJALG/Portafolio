import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import aboutMe from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import './App.css';

function App() {
  return (
   <Router>
      <div className="flex flex-col min-h-screen bg-gray-900">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-10">
          <Routes>
            <Route path="/Portafolio/" element={<Home />} />
            <Route path="Portafolio/About" element={<aboutMe />} />
            <Route path="Portafolio/Projects" element={<Projects />} />
            <Route path="Portafolio/Contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
   </Router>
  );
}

export default App
