const services = [
  {
    title: 'Desarrollo Web',
    desc: 'Sitios y aplicaciones web modernos y escalables.',
    icon: (
      <svg className="w-12 h-12 text-teal-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 3.75h15m-15 3h15M9 9.75v10.5m6-10.5v10.5M3.75 20.25h16.5" />
      </svg>
    ),
  },
  {
    title: 'Integración de IA',
    desc: 'Soluciones inteligentes para optimizar procesos.',
    icon: (
      <svg className="w-12 h-12 text-teal-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 4.75a4.75 4.75 0 11-2 0m2 0v14.5m-2-14.5v14.5M6 9.75h12M6 14.25h12" />
      </svg>
    ),
  },
  {
    title: 'Marketing Digital',
    desc: 'Estrategias para aumentar tu visibilidad y ventas.',
    icon: (
      <svg className="w-12 h-12 text-teal-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.5l16.5 7.5-16.5 7.5v-15z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Servicios</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map(({ title, desc, icon }) => (
            <div key={title} className="p-6 rounded-lg bg-gradient-to-b from-gray-900 to-gray-800 shadow hover:shadow-teal-500/40 transition">
              <div className="mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
