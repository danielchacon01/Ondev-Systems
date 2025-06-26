const projects = [
  {
    title: 'Proyecto 1',
    image: 'https://via.placeholder.com/600x400?text=Proyecto+1',
  },
  {
    title: 'Proyecto 2',
    image: 'https://via.placeholder.com/600x400?text=Proyecto+2',
  },
  {
    title: 'Proyecto 3',
    image: 'https://via.placeholder.com/600x400?text=Proyecto+3',
  },
];

export default function Portfolio() {
  return (
    <section id="portafolio" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Portafolio</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map(({ title, image }) => (
            <div key={title} className="group rounded overflow-hidden shadow-lg relative">
              <img src={image} alt={title} className="object-cover w-full h-64 group-hover:scale-105 transition-transform" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <span className="text-white font-semibold text-lg">{title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
