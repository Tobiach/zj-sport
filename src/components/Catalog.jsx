import { useReveal } from '../hooks/useReveal'
import { products } from '../data/products'

function ProductCard({ product, onSelect, delay }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className={`reveal reveal-d${Math.min(delay + 1, 4)} group flex-shrink-0 w-[280px] snap-start sm:w-auto bg-[#0d0d0d] rounded-2xl overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all duration-400 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1.5 flex flex-col`}
    >
      {/* Image */}
      <div className="relative h-52 sm:h-60 overflow-hidden flex-shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/20 to-transparent" />

        {/* Tag */}
        {product.tag && (
          <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-black px-3 py-1 rounded-full shadow-lg shadow-blue-600/40">
            {product.tag}
          </span>
        )}

        {/* Hover CTA overlay */}
        <div className="absolute inset-0 bg-blue-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={() => onSelect(product.name)}
            className="bg-blue-600 hover:bg-blue-500 text-white font-black px-6 py-3 rounded-xl text-sm transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 shadow-xl shadow-blue-600/40"
          >
            Pedir ahora →
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-bold text-white mb-2 leading-tight">{product.name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{product.description}</p>
        <button
          onClick={() => onSelect(product.name)}
          className="w-full bg-transparent hover:bg-blue-600 border border-blue-500/30 hover:border-transparent text-blue-400 hover:text-white font-bold py-2.5 px-4 rounded-xl transition-all duration-200 text-sm group-hover:bg-blue-600 group-hover:border-transparent group-hover:text-white"
        >
          Pedir este producto
        </button>
      </div>
    </div>
  )
}

export default function Catalog({ onSelectProduct }) {
  const titleRef = useReveal()

  return (
    <section id="catalogo" className="py-16 sm:py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto">

        <div ref={titleRef} className="reveal text-center mb-10 sm:mb-14 px-4">
          <span className="inline-flex items-center gap-2 text-blue-500 font-semibold text-xs uppercase tracking-widest mb-3">
            <span className="w-6 h-px bg-blue-500/50" />
            Catálogo
            <span className="w-6 h-px bg-blue-500/50" />
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-1">
            Todo lo que tu equipo necesita
          </h2>
          <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-lg mx-auto">
            Fabricado a pedido. Tu diseño, tu color, tu identidad.
          </p>
        </div>

        {/* Mobile: horizontal carousel / Desktop: grid */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4 pb-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 sm:overflow-visible sm:pb-0 sm:px-4 lg:px-8">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} onSelect={onSelectProduct} delay={i} />
          ))}
        </div>

        <p className="text-center text-gray-700 text-xs mt-5 sm:hidden tracking-wider">
          ← deslizá para ver más →
        </p>
      </div>
    </section>
  )
}
