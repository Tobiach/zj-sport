import { products } from '../data/products'

export default function Catalog({ onSelectProduct }) {
  return (
    <section id="catalogo" className="py-12 sm:py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 px-4">
          <span className="text-green-500 font-semibold text-xs uppercase tracking-widest">Catálogo</span>
          <h2 className="text-2xl sm:text-4xl font-black text-white mt-2">
            Todo lo que tu equipo necesita
          </h2>
          <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-lg mx-auto">
            Fabricado a pedido. Tu diseño, tu color, tu identidad.
          </p>
        </div>

        {/* Mobile: horizontal scroll carousel / Desktop: grid */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4 pb-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 sm:overflow-visible sm:pb-0 sm:px-4 lg:px-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group flex-shrink-0 w-[260px] snap-start sm:w-auto bg-[#0d0d0d] rounded-2xl overflow-hidden border border-white/5 hover:border-green-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/5 hover:-translate-y-1 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-44 sm:h-52 overflow-hidden flex-shrink-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
                {product.tag && (
                  <span className="absolute top-3 left-3 bg-green-500 text-black text-xs font-black px-2.5 py-1 rounded-full">
                    {product.tag}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 flex flex-col flex-1">
                <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 leading-tight">{product.name}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 flex-1">{product.description}</p>
                <button
                  onClick={() => onSelectProduct(product.name)}
                  className="w-full bg-green-500/10 hover:bg-green-500 border border-green-500/20 hover:border-transparent text-green-400 hover:text-black font-bold py-2.5 px-4 rounded-xl transition-all duration-200 text-sm"
                >
                  Pedir este producto
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile swipe hint */}
        <p className="text-center text-gray-700 text-xs mt-4 sm:hidden">
          ← Deslizá para ver más →
        </p>
      </div>
    </section>
  )
}
