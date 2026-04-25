const steps = [
  {
    number: "01",
    title: "Elegís el producto",
    description: "Camisetas, conjuntos, camperas o accesorios. Todo personalizable.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Completás los detalles",
    description: "Talle, color, cantidad, nombre del equipo y personalización.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Coordinamos por WhatsApp",
    description: "Confirmamos precio, plazo y detalles finales del diseño.",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-12 sm:py-20 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-8 sm:mb-12">
          <span className="text-blue-600 font-semibold text-xs uppercase tracking-widest">Proceso</span>
          <h2 className="text-2xl sm:text-4xl font-black text-white mt-2">
            Pedir es simple
          </h2>
        </div>

        {/* Mobile: compact numbered list / Desktop: 3 cards */}
        <div className="sm:hidden space-y-3">
          {steps.map((step) => (
            <div key={step.number} className="flex items-start gap-4 bg-[#0d0d0d] border border-white/5 rounded-2xl p-4">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 text-white shadow-lg shadow-blue-600/20">
                {step.icon}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-blue-600/50 text-xs font-black">{step.number}</span>
                  <h3 className="text-white font-bold text-sm">{step.title}</h3>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: 3 cards */}
        <div className="hidden sm:grid grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden sm:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-blue-600/30 to-transparent z-0 -translate-x-8" />
              )}
              <div className="bg-[#0d0d0d] border border-white/5 hover:border-blue-600/20 rounded-2xl p-8 text-center transition-all duration-300 relative z-10 group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl text-white mb-5 shadow-xl shadow-blue-600/20 group-hover:shadow-blue-600/30 transition-shadow">
                  <svg className="w-7 h-7" fill={step.number === "03" ? "currentColor" : "none"} stroke={step.number === "03" ? "none" : "currentColor"} viewBox="0 0 24 24">
                    {step.icon.props.children}
                  </svg>
                </div>
                <p className="text-blue-600/20 font-black text-6xl absolute top-4 right-5 select-none">{step.number}</p>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
