export type ScriptSection = {
  id: string
  label: string
  lines: string[]
  highlight?: boolean
}

export const pageInfo = {
  title: "Futura chica Aussie",
  subtitle: "Guión · TikTok",
  tagline: "Melena nómada, rutina fácil ✨",
}

export const scriptSections: ScriptSection[] = [
  {
    id: "hook",
    label: "Apertura",
    lines: ["¿Por qué debería ser la futura chica Aussie?"],
    highlight: true,
  },
  {
    id: "hair",
    label: "El pelo",
    lines: ["¡Porque tengo una cantidad ridícula de cabello!"],
  },
  {
    id: "problem",
    label: "El problema",
    lines: [
      "Soy nómada digital y entre los cambios de país, de agua y de productos, mi pelo se volvió seco, difícil de manejar y eterno de desenredar.",
    ],
  },
  {
    id: "discovery",
    label: "El descubrimiento",
    lines: ["Hasta que encontré Aussie.", "Y de verdad me cambió la rutina."],
  },
  {
    id: "transformation",
    label: "La transformación",
    lines: ["Pasé de tardar casi una hora desenredándome a solo unos minutos."],
  },
  {
    id: "travel",
    label: "Siempre conmigo",
    lines: [
      "Así que ahora, no importa si estoy en España, Italia o explorando un país nuevo.",
      "Hay tres cosas que siempre viajan conmigo:",
    ],
  },
  {
    id: "closing",
    label: "Cierre",
    lines: [
      "Por eso quiero ser la futura chica Aussie: para seguir recorriendo el mundo juntas... y demostrar que hasta esta gran melena puede ser fácil de cuidar sin importar donde esté.",
    ],
    highlight: true,
  },
]

export const travelEssentials = [
  { id: "passport", emoji: "🛂", label: "mi pasaporte" },
  { id: "laptop", emoji: "💻", label: "mi computador" },
  { id: "aussie", emoji: "💜", label: "Aussie" },
]
