export default function Footer() {
  return (
    <footer className="bg-gray-950 py-8 text-center text-sm">
      <div className="space-x-4 mb-4">
        <a href="#inicio" className="hover:text-teal-400">Inicio</a>
        <a href="#servicios" className="hover:text-teal-400">Servicios</a>
        <a href="#portafolio" className="hover:text-teal-400">Portafolio</a>
        <a href="#nosotros" className="hover:text-teal-400">Nosotros</a>
        <a href="#contacto" className="hover:text-teal-400">Contacto</a>
      </div>
      <div className="space-x-4 mb-4">
        <a href="#" className="hover:text-teal-400">Twitter</a>
        <a href="#" className="hover:text-teal-400">LinkedIn</a>
        <a href="#" className="hover:text-teal-400">GitHub</a>
      </div>
      <p className="text-gray-400">© OnDev Systems 2025</p>
    </footer>
  );
}
