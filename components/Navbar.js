import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-xl font-bold">OnDev Systems</Link>
        <ul className="hidden md:flex space-x-4">
          <li>
            <a href="#inicio" className="hover:text-blue-600">Inicio</a>
          </li>
          <li>
            <a href="#servicios" className="hover:text-blue-600">Servicios</a>
          </li>
          <li>
            <a href="#portafolio" className="hover:text-blue-600">Portafolio</a>
          </li>
          <li>
            <a href="#nosotros" className="hover:text-blue-600">Nosotros</a>
          </li>
          <li>
            <a href="#contacto" className="hover:text-blue-600">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
