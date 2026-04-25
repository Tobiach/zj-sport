// ⚠️ REEMPLAZAR con el número real de WhatsApp (código país + número, sin +, sin espacios)
// Ejemplo Argentina: 5491112345678
export const WHATSAPP_NUMBER = "5491134552996"

export const buildWhatsAppMessage = (form) => {
  const lines = [
    "Hola, quiero hacer un pedido personalizado:",
    "",
    `📋 *Nombre:* ${form.name}`,
    `👕 *Producto:* ${form.product}`,
    `🔢 *Cantidad:* ${form.quantity}`,
    form.sizes    ? `📏 *Talles:* ${form.sizes}`    : null,
    form.colors   ? `🎨 *Colores:* ${form.colors}`  : null,
    form.team     ? `🏟️ *Equipo/Club:* ${form.team}` : null,
    form.customization ? `✍️ *Personalización:* ${form.customization}` : null,
    form.date     ? `📅 *Fecha estimada:* ${form.date}` : null,
    form.notes    ? `📝 *Observaciones:* ${form.notes}` : null,
  ].filter(Boolean).join("\n")

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`
}
