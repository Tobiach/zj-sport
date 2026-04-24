import { WHATSAPP_NUMBER } from '../utils/whatsapp'

const WaIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export default function Contact() {
  const quickMessage = encodeURIComponent(
    "Hola, quiero consultar sobre indumentaria deportiva personalizada para mi equipo."
  )

  return (
    <section id="contacto" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-green-500 font-semibold text-sm uppercase tracking-widest">Contacto</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">
            Estamos para ayudarte
          </h2>
          <p className="text-gray-400 mt-4">
            Respondemos rápido. No tenés que esperar para arrancar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gray-900 hover:bg-green-500 border border-gray-800 hover:border-green-500 rounded-2xl p-6 text-center transition-all duration-300"
          >
            <div className="w-12 h-12 bg-green-500/10 group-hover:bg-black/20 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors">
              <WaIcon className="w-6 h-6 text-green-500 group-hover:text-black" />
            </div>
            <h3 className="font-bold text-white group-hover:text-black mb-1 transition-colors">WhatsApp</h3>
            <p className="text-gray-400 group-hover:text-black/70 text-sm transition-colors">Respuesta en minutos</p>
          </a>

          <a
            href="https://instagram.com/eze_medias_sport"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-pink-500/40 rounded-2xl p-6 text-center transition-all duration-300"
          >
            <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>
            <h3 className="font-bold text-white mb-1">@eze_medias_sport</h3>
            <p className="text-gray-400 text-sm">Seguinos en Instagram</p>
          </a>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-white mb-1">González Catán</h3>
            <p className="text-gray-400 text-sm">Pje. Trujillo, B1759</p>
            <p className="text-gray-400 text-sm">Buenos Aires, Argentina</p>
            <div className="mt-3 inline-flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              Lun–Vie · 9:00 a 18:00
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500/10 via-green-500/5 to-transparent border border-green-500/20 rounded-2xl p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
            ¿Tenés un equipo que vestir?
          </h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
            Contanos qué necesitás y te armamos una propuesta sin compromiso. Atención directa, sin burocracia, precio justo.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${quickMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-green-500/25"
          >
            <WaIcon className="w-5 h-5" />
            Hablar con nosotros ahora
          </a>
          <p className="text-gray-600 text-sm mt-4">
            También podés escribirnos a{' '}
            <a href="mailto:eg892742@gmail.com" className="text-gray-500 hover:text-green-500 transition-colors">
              eg892742@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
