import { products } from '../data/products'

export default function Catalog({ onSelectProduct }) {
  return (
    <section id="catalogo" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-green-500 font-semibold text-sm uppercase tracking-widest">Catálogo</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">
            Todo lo que tu equipo necesita
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto leading-relaxed">
            Cada prenda fabricada a pedido, con tu diseño y colores. Sin mínimos impuestos, sin stock genérico.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-green-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/5 hover:-translate-y-1"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
                {product.tag && (
                  <span className="absolute top-3 left-3 bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {product.tag}
                  </span>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">{product.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{product.description}</p>

                <button
                  onClick={() => onSelectProduct(product.name)}
                  className="w-full bg-green-500/10 hover:bg-green-500 border border-green-500/30 hover:border-transparent text-green-400 hover:text-black font-semibold py-3 px-4 rounded-xl transition-all duration-200 text-sm"
                >
                  Pedir este producto →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
