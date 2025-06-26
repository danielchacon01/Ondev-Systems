export default function Contact() {
  return (
    <section id="contacto" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-6">Contacto</h2>
          <form className="space-y-4 bg-white text-gray-800 p-6 rounded">
            <input type="text" placeholder="Nombre" className="w-full p-2 border rounded" />
            <input type="email" placeholder="Correo" className="w-full p-2 border rounded" />
            <textarea placeholder="Mensaje" className="w-full p-2 border rounded h-32" />
            <button type="submit" className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600">Enviar</button>
          </form>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-lg">Ubicación:</p>
          <p className="text-teal-400 font-semibold">Laredo, Texas</p>
        </div>
      </div>
    </section>
  );
}
