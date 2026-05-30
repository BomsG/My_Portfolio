import React, { useState, useCallback } from "react";
import CurtainLoader from "./components/CurtainLoader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Values from "./components/Values";
import Footer from "./components/Footer";
import { ContactSection } from "./components/Contact";

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isReady, setIsReady] = useState(false);

  const handleCurtainComplete = useCallback(() => {
    setIsReady(true);
  }, []);

  return (
    <>
      <CurtainLoader onComplete={handleCurtainComplete} />
      <div className="min-h-screen selection:bg-white selection:text-black overflow-x-hidden" style={{ background: "#111111" }}>
        <Navbar />
        <main>
          <Hero setActiveSection={setActiveSection} isReady={isReady} />
          <Skills />
          <Projects />
          <About />
          <Values />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
