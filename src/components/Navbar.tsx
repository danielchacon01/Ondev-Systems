'use client';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors ${scrolled ? 'bg-gray-900/90' : 'bg-transparent'}`}> 
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-bold text-xl">OnDev Systems</div>
        <ul className="hidden md:flex space-x-6">
          <li><a href="#inicio" className="hover:text-teal-400">Inicio</a></li>
          <li><a href="#servicios" className="hover:text-teal-400">Servicios</a></li>
          <li><a href="#portafolio" className="hover:text-teal-400">Portafolio</a></li>
          <li><a href="#nosotros" className="hover:text-teal-400">Nosotros</a></li>
          <li><a href="#contacto" className="hover:text-teal-400">Contacto</a></li>
        </ul>
        <a href="#contacto" className="ml-4 px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600">Agendar llamada</a>
      </div>
    </nav>
  );
}
