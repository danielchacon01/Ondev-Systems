const data = [
  { title: 'Desarrollo Web', description: 'Sitios modernos y optimizados.' },
  { title: 'Integración de IA', description: 'Automatiza y mejora procesos.' },
  { title: 'Marketing Digital', description: 'Estrategias para aumentar tu alcance.' }
]

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Servicios</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {data.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
