import { useReveal } from '../hooks/useReveal'

const reviews = [
  {
    name: "Maximiliano Torres",
    role: "DT Club Atlético Palermo Sur",
    text: "Pedimos 20 conjuntos para la temporada y quedaron increíbles. El diseño fue exactamente lo que queríamos, rápido y sin vueltas. Los pibes están re contentos.",
    stars: 5,
    sport: "Fútbol",
  },
  {
    name: "Luciana Méndez",
    role: "Coordinadora deportiva, Colegio San Martín",
    text: "Equipamos a todos nuestros equipos escolares con Z&J Sport. La atención por WhatsApp fue buenísima — siempre respondían al toque y nos guiaron en el diseño.",
    stars: 5,
    sport: "Multi-deporte",
  },
  {
    name: "Rodrigo Vega",
    role: "Capitán Club de Básquet Los Andes",
    text: "Calidad real de fabricante, no de revendedor. Probé otras marcas y la diferencia es grande. Los vuelvo a elegir sin dudarlo.",
    stars: 5,
    sport: "Básquet",
  },
]

const Stars = ({ count }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
)

export default function Testimonials() {
  const ref = useReveal()

  return (
    <section className="py-16 sm:py-24 bg-[#080808] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div ref={ref} className="reveal text-center mb-12">
          <span className="text-blue-500 font-semibold text-xs uppercase tracking-widest">Testimonios</span>
          <h2 className="text-2xl sm:text-4xl font-black text-white mt-2">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-md mx-auto">
            Más de 500 equipos en GBA confían en nosotros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <TestimonialCard key={review.name} review={review} delay={i} />
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6 sm:gap-10 pt-10 border-t border-white/5">
          {[
            { icon: "⚡", text: "Respuesta en minutos" },
            { icon: "🏆", text: "+500 equipos equipados" },
            { icon: "📍", text: "Producción en GBA" },
            { icon: "✅", text: "Sin mínimo de unidades" },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-gray-500 text-sm">
              <span>{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ review, delay }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className={`reveal reveal-d${delay + 1} group bg-[#0d0d0d] border border-white/5 hover:border-blue-500/20 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1`}
    >
      <Stars count={review.stars} />

      <p className="text-gray-300 text-sm leading-relaxed mt-4 mb-5">
        &ldquo;{review.text}&rdquo;
      </p>

      <div className="flex items-center gap-3 pt-4 border-t border-white/5">
        <div className="w-9 h-9 rounded-full bg-blue-600/20 border border-blue-600/30 flex items-center justify-center flex-shrink-0">
          <span className="text-blue-400 font-black text-sm">{review.name[0]}</span>
        </div>
        <div className="min-w-0">
          <p className="text-white text-sm font-bold leading-tight truncate">{review.name}</p>
          <p className="text-gray-600 text-xs truncate">{review.role}</p>
        </div>
        <span className="ml-auto text-xs text-blue-600/60 font-semibold bg-blue-600/10 px-2 py-0.5 rounded-full flex-shrink-0">
          {review.sport}
        </span>
      </div>
    </div>
  )
}
