const projects = [
  { title: 'Proyecto 1', description: 'Descripción breve del proyecto' },
  { title: 'Proyecto 2', description: 'Descripción breve del proyecto' },
  { title: 'Proyecto 3', description: 'Descripción breve del proyecto' }
]

export default function Portfolio() {
  return (
    <section id="portafolio" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Portafolio</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((item, idx) => (
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
