export default function Contact() {
  return (
    <section id="contacto" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contacto</h2>
        <form className="max-w-lg mx-auto space-y-4">
          <input type="text" placeholder="Nombre" className="w-full p-3 border rounded" />
          <input type="email" placeholder="Correo" className="w-full p-3 border rounded" />
          <textarea placeholder="Mensaje" className="w-full p-3 border rounded h-32" />
          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded w-full">Enviar</button>
        </form>
      </div>
    </section>
  )
}
