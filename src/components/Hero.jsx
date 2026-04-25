// VIDEO: reemplazá VIDEO_ID por el ID de YouTube que quieras usar como fondo.
// Ejemplo: si el link es youtube.com/watch?v=ABC123, ponés "ABC123"
// Video ideal: https://www.youtube.com/watch?v=KCFcNXcRY_E (fútbol entrenamiento)
const YT_VIDEO_ID = "KCFcNXcRY_E"

export default function Hero({ onArmarPedido }) {
  const stats = [
    { number: "+500", label: "Equipos" },
    { number: "8+", label: "Años" },
    { number: "100%", label: "Personalizado" },
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* BASE: animated gradient — siempre visible, garantiza look premium */}
      <div className="absolute inset-0 hero-gradient" />

      {/* VIDEO LAYER: YouTube iframe en modo background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${YT_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${YT_VIDEO_ID}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=0`}
          title="background"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: 'max(100vw, 177.78vh)',
            height: 'max(56.25vw, 100vh)',
            border: 'none',
          }}
          allow="autoplay; encrypted-media"
          frameBorder="0"
        />
      </div>

      {/* VIDEO LAYER MOBILE: imagen de fondo + gradient animado visible */}
      <div className="absolute inset-0 sm:hidden">
        <img
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80"
          alt=""
          className="w-full h-full object-cover object-center opacity-30"
        />
      </div>

      {/* Overlays de profundidad */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-28 sm:pb-24 w-full">
        <div className="max-w-xl">

          <div className="inline-flex items-center gap-2 border border-green-500/25 bg-green-500/8 text-green-400 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
            Fabricación personalizada desde 2016
          </div>

          <h1 className="text-[2.25rem] sm:text-5xl lg:text-[3.75rem] font-black text-white leading-[1.08] mb-5 tracking-tight">
            Indumentaria deportiva{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #22c55e 0%, #86efac 100%)' }}
            >
              personalizada
            </span>{' '}
            para tu equipo
          </h1>

          <p className="text-sm sm:text-lg text-gray-300 leading-relaxed mb-8 max-w-md">
            Conjuntos, camisetas, camperas y accesorios. Diseño único, atención directa por WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onArmarPedido}
              className="bg-green-500 hover:bg-green-400 text-black font-black px-7 py-4 rounded-2xl text-base transition-all active:scale-95 hover:scale-[1.03] hover:shadow-2xl hover:shadow-green-500/40 flex items-center justify-center gap-2.5"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Armar pedido por WhatsApp
            </button>

            <a
              href="#catalogo"
              className="border border-white/15 hover:border-green-500/40 text-white/80 hover:text-white font-bold px-7 py-4 rounded-2xl text-base transition-all hover:bg-white/5 flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              Ver productos
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 sm:gap-10 mt-10 pt-8 border-t border-white/8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(135deg, #22c55e, #86efac)' }}
                >
                  {stat.number}
                </p>
                <p className="text-gray-500 text-xs mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-30">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-white" />
      </div>
    </section>
  )
}
