import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full fixed top-0 left-0 bg-white shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo dan Judul */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-8 w-8 object-contain" />
          <h1 className="text-xl font-bold font-poppins">Furious.EXE</h1>
        </div>

        {/* Menu Desktop */}
       <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#" className="hover:text-gray-500 transition">Home</a>
          <a href="#about" className="hover:text-gray-500 transition">Tentang</a>
          <a href="#bahasa" className="hover:text-gray-500 transition">Bahasa</a>
          <a href="#contact" className="hover:text-gray-500 transition">Kontak & Social Media</a>
        </nav>

        {/* Hamburger Button */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          <span className="text-2xl">&#9776;</span>
        </button>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 bg-white">
          <a href="#" className="block py-2">Home</a>
          <a href="#about" className="block py-2">Tentang</a>
          <a href="#bahasa" className="block py-2">Bahasa</a>
          <a href="#social-media" className="block py-2">Sosial Media</a>
          <a href="#contact" className="block py-2">Kontak</a>
        </div>
      )}
    </header>
  );
}
