export default function Hero() {
  return (
    <section id="inicio" className="h-screen flex items-center justify-center text-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-700/20 via-transparent to-transparent animate-pulse" />
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Impulsamos negocios con soluciones digitales personalizadas.</h1>
        <p className="max-w-2xl mx-auto mb-8 text-lg md:text-xl text-gray-300">Somos expertos en desarrollo web, software a medida, integración de inteligencia artificial y marketing digital.</p>
        <a href="#contacto" className="px-6 py-3 bg-teal-500 rounded text-white hover:bg-teal-600">Solicitar propuesta</a>
      </div>
    </section>
  );
}
