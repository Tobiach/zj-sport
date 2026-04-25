const stats = [
  { value: "+500", label: "Equipos equipados", icon: "🏆" },
  { value: "8+", label: "Años de experiencia", icon: "📅" },
  { value: "100%", label: "Personalización", icon: "✂️" },
  { value: "GBA", label: "Producción local", icon: "📍" },
]

const features = [
  "Sublimación total en todos los productos",
  "Sin mínimo de unidades obligatorio",
  "Asesoramiento en diseño sin costo extra",
  "Para clubes, colegios y empresas",
  "Atención directa de principio a fin",
]

export default function Trust() {
  return (
    <section className="py-12 sm:py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 sm:mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#0d0d0d] border border-white/5 rounded-2xl p-4 sm:p-6 text-center"
            >
              <p className="text-xl sm:text-2xl mb-2">{stat.icon}</p>
              <p
                className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #22c55e, #86efac)' }}
              >
                {stat.value}
              </p>
              <p className="text-gray-500 text-xs sm:text-sm mt-1 leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Features + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <span className="text-green-500 font-semibold text-xs uppercase tracking-widest">Por qué elegirnos</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-2 mb-6 leading-tight">
              Calidad directa del fabricante
            </h2>
            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image hidden on mobile to cut scroll */}
          <div className="relative hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80"
              alt="Equipo deportivo"
              className="w-full h-72 object-cover rounded-2xl border border-white/5"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent rounded-2xl" />
            <div className="absolute bottom-5 left-5 bg-green-500 rounded-xl px-5 py-3 shadow-xl">
              <p className="text-black font-black text-xl leading-none">2016</p>
              <p className="text-black/80 text-xs font-semibold mt-0.5">Fabricando en GBA</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
