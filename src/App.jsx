import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Resume from "./sections/Resume";
import Awards from "./sections/Awards";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0c0c0e] text-gray-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Awards />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
