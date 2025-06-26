import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'OnDev Systems',
  description: 'Soluciones digitales para tu negocio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="pt-16">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
