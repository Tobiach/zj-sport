import { useState, useEffect, useCallback, useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import { products } from '../data/products'

const AUTOPLAY_MS = 4500

export default function ProductCarousel({ onSelectProduct }) {
  const titleRef = useReveal()
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [touchStart, setTouchStart] = useState(null)
  const timerRef = useRef(null)

  const total = products.length

  const goTo = useCallback((idx) => {
    setCurrent(((idx % total) + total) % total)
  }, [total])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(next, AUTOPLAY_MS)
    return () => clearInterval(timerRef.current)
  }, [next, paused])

  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX)
  const handleTouchEnd = (e) => {
    if (touchStart === null) return
    const delta = touchStart - e.changedTouches[0].clientX
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev()
    setTouchStart(null)
  }

  const product = products[current]

  return (
    <section
      id="carrusel"
      className="py-16 sm:py-24 bg-gray-950 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div ref={titleRef} className="reveal text-center mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-2 text-blue-500 font-semibold text-xs uppercase tracking-widest mb-3">
            <span className="w-6 h-px bg-blue-500/50" />
            Nuestros productos
            <span className="w-6 h-px bg-blue-500/50" />
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-1">
            Todo lo que tu equipo necesita
          </h2>
          <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-lg mx-auto">
            Fabricado a pedido. Tu diseño, tu color, tu identidad.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative rounded-3xl overflow-hidden bg-[#0d0d0d] border border-white/5 shadow-2xl shadow-blue-500/5"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slides */}
          <div className="relative">
            {products.map((p, i) => (
              <div
                key={p.id}
                className={`transition-opacity duration-700 ${i === current ? 'opacity-100 relative' : 'opacity-0 absolute inset-0 pointer-events-none'}`}
              >
                <div className="flex flex-col md:flex-row min-h-[420px] md:min-h-[500px]">

                  {/* Image */}
                  <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden flex-shrink-0">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d0d0d] hidden md:block" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] to-transparent md:hidden" />
                    {p.tag && (
                      <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-black px-3 py-1.5 rounded-full shadow-lg shadow-blue-600/40">
                        {p.tag}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-center px-8 py-8 md:py-12 md:pl-10 md:pr-12">
                    <span className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-3">
                      Producto {i + 1} / {total}
                    </span>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                      {p.name}
                    </h3>
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
                      {p.description}
                    </p>
                    <button
                      onClick={() => onSelectProduct(p.name)}
                      className="self-start bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/30 text-sm md:text-base"
                    >
                      Pedir este producto →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrow buttons */}
          <button
            onClick={prev}
            aria-label="Anterior"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-blue-600 border border-white/10 hover:border-blue-500 text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Siguiente"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-blue-600 border border-white/10 hover:border-blue-500 text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
          >
            ›
          </button>

          {/* Progress bar */}
          {!paused && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/5">
              <div
                key={`${current}-${paused}`}
                className="h-full bg-blue-500"
                style={{ animation: `progress ${AUTOPLAY_MS}ms linear forwards` }}
              />
            </div>
          )}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {products.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Ir al slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-8 h-2 bg-blue-500'
                  : 'w-2 h-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Slide titles strip */}
        <div className="flex gap-2 mt-4 overflow-x-auto scrollbar-hide justify-center flex-wrap">
          {products.map((p, i) => (
            <button
              key={p.id}
              onClick={() => goTo(i)}
              className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap ${
                i === current
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/5 text-gray-500 hover:bg-white/10 hover:text-gray-300'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

      </div>

      <style>{`
        @keyframes progress {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>
    </section>
  )
}
