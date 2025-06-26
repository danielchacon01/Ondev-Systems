export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} OnDev Systems</p>
        <div className="flex space-x-4">
          <a href="#inicio" className="hover:text-white">Inicio</a>
          <a href="#servicios" className="hover:text-white">Servicios</a>
          <a href="#portafolio" className="hover:text-white">Portafolio</a>
          <a href="#nosotros" className="hover:text-white">Nosotros</a>
          <a href="#contacto" className="hover:text-white">Contacto</a>
        </div>
      </div>
    </footer>
  )
}
