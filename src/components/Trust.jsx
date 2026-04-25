const stats = [
  { value: "+500", label: "Equipos equipados", icon: "🏆" },
  { value: "8+", label: "Años en el mercado", icon: "📅" },
  { value: "100%", label: "Fabricación personalizada", icon: "✂️" },
  { value: "GBA", label: "Producción en Buenos Aires", icon: "📍" },
]

const features = [
  "Sublimación total en todos los productos",
  "Sin mínimo de unidades obligatorio",
  "Asesoramiento en diseño incluido en cada pedido",
  "Trabajamos con clubes, colegios y empresas",
  "Atención personalizada de principio a fin",
  "Calidad y detalle garantizados desde 2016",
]

export default function Trust() {
  return (
    <section className="py-14 sm:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-gray-800/50 border border-gray-800 rounded-2xl p-6 text-center hover:border-green-500/20 transition-colors"
            >
              <p className="text-2xl mb-3">{stat.icon}</p>
              <p className="text-3xl font-black text-green-500">{stat.value}</p>
              <p className="text-gray-400 text-sm mt-1 leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-green-500 font-semibold text-sm uppercase tracking-widest">Por qué elegirnos</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-8 leading-tight">
              Calidad directa del fabricante, sin intermediarios
            </h2>
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md shadow-green-500/20">
                    <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-300 leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mt-6 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80"
              alt="Equipo deportivo"
              className="w-full h-64 sm:h-80 object-cover rounded-2xl border border-gray-800"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 sm:-bottom-5 sm:-left-5 bg-green-500 rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-xl">
              <p className="text-black font-black text-xl sm:text-2xl leading-none">2016</p>
              <p className="text-black/80 text-xs sm:text-sm font-semibold mt-0.5 sm:mt-1">Fabricando en GBA</p>
            </div>
            <div className="absolute top-4 right-4 sm:-top-5 sm:-right-5 bg-gray-800 border border-gray-700 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl">
              <p className="text-white font-black text-base sm:text-lg leading-none">100%</p>
              <p className="text-gray-400 text-xs mt-0.5 sm:mt-1">Personalizado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
