import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import About from "./components/about";
import Language from "./components/Language";
import Sosmed from "./components/ContactSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/footer";


function App() {
  return (
    <div className="bg-white text-black font-sans">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Language />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
