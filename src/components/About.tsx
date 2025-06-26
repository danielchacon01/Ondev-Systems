export default function About() {
  return (
    <section id="nosotros" className="py-20 bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Sobre Nosotros</h2>
        <div className="flex flex-col items-center md:flex-row md:space-x-8">
          <img src="https://via.placeholder.com/300x200?text=Equipo" alt="Equipo" className="rounded mb-6 md:mb-0" />
          <div className="text-left space-y-4 max-w-xl">
            <p><strong>Misión:</strong> Potenciar negocios con tecnología de vanguardia.</p>
            <p><strong>Visión:</strong> Ser líderes en innovación digital a nivel global.</p>
            <p><strong>Valores:</strong> Compromiso, excelencia y trabajo en equipo.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
