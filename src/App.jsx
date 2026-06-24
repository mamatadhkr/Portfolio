import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Leadership from "./components/Leadership";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-gradient-to-b from-white via-sky-50 to-white text-black scroll-smooth min-h-screen">
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Experience />
      <Leadership />
      <Projects />
      <Research />
      <Contact />
      <Footer />
    </div>
  );
}