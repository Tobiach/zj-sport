import { useState, useEffect } from 'react'
import { buildWhatsAppMessage } from '../utils/whatsapp'
import { products } from '../data/products'

const initialForm = {
  name: '',
  product: '',
  quantity: '',
  sizes: '',
  colors: '',
  team: '',
  customization: '',
  date: '',
  notes: '',
}

const Field = ({ label, required, error, children }) => (
  <div>
    <label className="block text-sm font-semibold text-gray-300 mb-2">
      {label}{' '}
      {required && <span className="text-green-500">*</span>}
    </label>
    {children}
    {error && <p className="text-red-400 text-xs mt-1.5">{error}</p>}
  </div>
)

const inputClass = (hasError) =>
  `w-full bg-gray-800 border ${
    hasError ? 'border-red-500/70' : 'border-gray-700 focus:border-green-500'
  } text-white rounded-xl px-4 py-3 focus:outline-none transition-colors placeholder-gray-600 text-sm`

export default function OrderForm({ selectedProduct, formRef }) {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  useEffect(() => {
    if (selectedProduct) {
      setForm((prev) => ({ ...prev, product: selectedProduct }))
    }
  }, [selectedProduct])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Ingresá tu nombre'
    if (!form.product.trim()) next.product = 'Seleccioná un producto'
    if (!form.quantity.trim()) next.quantity = 'Indicá la cantidad'
    return next
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    window.open(buildWhatsAppMessage(form), '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 6000)
  }

  return (
    <section id="pedido" ref={formRef} className="py-20 bg-gray-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-green-500 font-semibold text-sm uppercase tracking-widest">Pedido</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">
            Armá tu pedido
          </h2>
          <p className="text-gray-400 mt-4">
            Completá los datos y el mensaje se arma solo para enviarte a WhatsApp.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="bg-gray-900 rounded-2xl border border-gray-800 p-6 sm:p-8 space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="Tu nombre" required error={errors.name}>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Ej: Martín García"
                className={inputClass(errors.name)}
              />
            </Field>

            <Field label="Producto" required error={errors.product}>
              <select
                name="product"
                value={form.product}
                onChange={handleChange}
                className={inputClass(errors.product)}
              >
                <option value="">Seleccioná un producto</option>
                {products.map((p) => (
                  <option key={p.id} value={p.name}>{p.name}</option>
                ))}
                <option value="Otro / consulta general">Otro / consulta general</option>
              </select>
            </Field>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="Cantidad" required error={errors.quantity}>
              <input
                type="text"
                name="quantity"
                value={form.quantity}
                onChange={handleChange}
                placeholder="Ej: 15 unidades"
                className={inputClass(errors.quantity)}
              />
            </Field>

            <Field label="Talles">
              <input
                type="text"
                name="sizes"
                value={form.sizes}
                onChange={handleChange}
                placeholder="Ej: 3 S · 5 M · 4 L · 3 XL"
                className={inputClass(false)}
              />
            </Field>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="Colores">
              <input
                type="text"
                name="colors"
                value={form.colors}
                onChange={handleChange}
                placeholder="Ej: Verde y blanco"
                className={inputClass(false)}
              />
            </Field>

            <Field label="Nombre del equipo o club">
              <input
                type="text"
                name="team"
                value={form.team}
                onChange={handleChange}
                placeholder="Ej: Club Atlético Los Pinos"
                className={inputClass(false)}
              />
            </Field>
          </div>

          <Field label="Número o nombre en la prenda">
            <input
              type="text"
              name="customization"
              value={form.customization}
              onChange={handleChange}
              placeholder="Ej: Números del 1 al 15, nombres en la espalda"
              className={inputClass(false)}
            />
          </Field>

          <Field label="¿Para cuándo lo necesitás?">
            <input
              type="text"
              name="date"
              value={form.date}
              onChange={handleChange}
              placeholder="Ej: Para el 15 de mayo"
              className={inputClass(false)}
            />
          </Field>

          <Field label="Observaciones">
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              rows={3}
              placeholder="Cualquier detalle adicional: logo, escudo, diseño, referencia de colores..."
              className={`${inputClass(false)} resize-none`}
            />
          </Field>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-4 px-8 rounded-xl text-lg transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-green-500/25 flex items-center justify-center gap-3 mt-2"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Enviar pedido por WhatsApp
          </button>

          {sent && (
            <div className="bg-green-500/10 border border-green-500/30 text-green-400 rounded-xl p-4 text-center text-sm font-medium">
              ¡Listo! Se abrió WhatsApp con tu pedido armado.
            </div>
          )}

          <p className="text-gray-600 text-xs text-center pt-1">
            Al hacer click se abre WhatsApp con el resumen de tu pedido. Sin compromiso.
          </p>
        </form>
      </div>
    </section>
  )
}
