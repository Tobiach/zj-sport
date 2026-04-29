export const WHATSAPP_NUMBER = '5492914679090'

export const buildReservaMessage = (form) => {
  const lines = [
    '¡Hola! Quiero consultar disponibilidad:',
    '',
    `🏡 *Cabaña:* ${form.cabana || 'A definir'}`,
    `📅 *Fecha ingreso:* ${form.ingreso}`,
    `📅 *Fecha egreso:* ${form.egreso}`,
    `👥 *Personas:* ${form.personas}`,
    form.mascotas ? `🐾 *Mascotas:* ${form.mascotas}` : null,
    `👤 *Nombre:* ${form.nombre}`,
    form.notas ? `📝 *Consulta:* ${form.notas}` : null,
  ].filter(Boolean).join('\n')

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`
}

export const whatsappLink = (msg = '¡Hola! Quiero consultar disponibilidad en Cabañas Rayun.') =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
