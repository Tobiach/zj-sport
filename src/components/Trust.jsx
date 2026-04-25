import { useEffect, useRef, useState } from 'react'
import { useReveal } from '../hooks/useReveal'

function AnimatedCounter({ value }) {
  const [display, setDisplay] = useState('0')
  const ref = useRef(null)
  const triggered = useRef(false)

  useEffect(() => {
    const numeric = parseInt(value.replace(/\D/g, ''))
    if (!numeric) { setDisplay(value); return }
    const prefix = value.startsWith('+') ? '+' : ''
    const suffix = value.replace(/^[+\d]+/, '')

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !triggered.current) {
        triggered.current = true
        let start = null
        const duration = 1800
        const tick = (ts) => {
          if (!start) start = ts
          const progress = Math.min((ts - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setDisplay(`${prefix}${Math.round(eased * numeric)}${suffix}`)
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        obs.unobserve(ref.current)
      }
    }, { threshold: 0.5 })

    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [value])

  return <span ref={ref}>{display}</span>
}

const stats = [
  { value: "+500", label: "Equipos equipados", icon: "🏆" },
  { value: "8+",   label: "Años de experiencia", icon: "📅" },
  { value: "100%", label: "Personalización",      icon: "✂️" },
  { value: "GBA",  label: "Producción local",     icon: "📍" },
]

const features = [
  "Sublimación total en todos los productos",
  "Sin mínimo de unidades obligatorio",
  "Asesoramiento en diseño sin costo extra",
  "Para clubes, colegios y empresas",
  "Atención directa de principio a fin",
]

export default function Trust() {
  const titleRef = useReveal()
  const statsRef = useReveal()
  const featuresRef = useReveal()
  const imageRef = useReveal()

  return (
    <section className="py-16 sm:py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div ref={titleRef} className="reveal text-center mb-12">
          <span className="text-blue-500 font-semibold text-xs uppercase tracking-widest">Por qué elegirnos</span>
          <h2 className="text-2xl sm:text-4xl font-black text-white mt-2">
            Calidad directa del fabricante
          </h2>
        </div>

        {/* Stats grid */}
        <div ref={statsRef} className="reveal grid grid-cols-2 sm:grid-cols-4 gap-3 mb-14">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#0d0d0d] border border-white/5 hover:border-blue-500/20 rounded-2xl p-5 sm:p-7 text-center group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5"
            >
              <p className="text-2xl sm:text-3xl mb-2">{stat.icon}</p>
              <p
                className="text-2xl sm:text-4xl font-black text-transparent bg-clip-text leading-none"
                style={{ backgroundImage: 'linear-gradient(135deg, #3b82f6, #93c5fd)' }}
              >
                <AnimatedCounter value={stat.value} />
              </p>
              <p className="text-gray-500 text-xs sm:text-sm mt-2 leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Features + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <div ref={featuresRef} className="reveal">
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-4">
                  <span className="w-6 h-6 bg-blue-500/10 border border-blue-500/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div ref={imageRef} className="reveal relative hidden lg:block">
            <div className="absolute -inset-4 bg-blue-600/5 rounded-3xl blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80"
              alt="Equipo deportivo"
              className="relative w-full h-80 object-cover rounded-2xl border border-white/5"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 to-transparent rounded-2xl" />
            <div className="absolute bottom-5 left-5 bg-blue-600 rounded-xl px-5 py-3 shadow-2xl shadow-blue-600/40">
              <p className="text-white font-black text-xl leading-none">2016</p>
              <p className="text-white/70 text-xs font-semibold mt-0.5">Fabricando en GBA</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
