import type { CityTab } from "@/components/trip"
import { d, r } from "./helpers"

export const lisboaCity: CityTab = {
  id: "lisboa",
  label: "Lisboa + Fátima",
  cover: {
    gradient: "lisboa",
    tag: "Portugal",
    title: "Lisboa + Fátima",
    description:
      "Entrada suave en Lisboa, experiencia espiritual en Fátima y regreso con medio día flexible en la capital. Incluye la opción de free tour corto o paseo libre por Alfama.",
  },
  snapshot: [
    { label: "28 abr", value: "llegada nocturna" },
    { label: "29 abr–1 may", value: "base en Fátima" },
    { label: "1 may", value: "Lisboa express" },
    { label: "€65–145", value: "aprox. por persona" },
  ],
  itinerary: [
    d(
      "l28",
      "28 abril · llegada a Lisboa",
      [
        r("22:20", "Llegada a Lisboa", "€0", "Ir directo al hostel."),
        r(
          "23:15–00:00",
          "Traslado al Goodnight Hostel",
          "€10–15",
          "Uber/Bolt es lo más cómodo a esa hora."
        ),
      ],
      "Subtotal del día: €10–15"
    ),
    d(
      "l29",
      "29 abril · Lisboa → Fátima",
      [
        r("08:00", "Desayuno", "€0", "Salida tranquila."),
        r(
          "09:00–11:00",
          "Bus a Fátima",
          "€5–15",
          "Rede Expressos/FlixBus según horario."
        ),
        r(
          "12:00",
          "Check-in / almuerzo",
          "€0",
          "Después, primer contacto con el santuario."
        ),
        r(
          "Tarde",
          "Capilla de las Apariciones + basílicas",
          "€0",
          "Paseo espiritual y ubicación."
        ),
        r(
          "Noche",
          "Procesión de velas",
          "€0",
          "Si os apetece, es una experiencia preciosa."
        ),
      ],
      "Subtotal del día: €5–15"
    ),
    d(
      "l30",
      "30 abril · Fátima completo",
      [
        r(
          "Mañana",
          "Misa + Santuario",
          "€0",
          "Día con intención espiritual, sin prisa."
        ),
        r(
          "Mediodía",
          "Recorrido del recinto",
          "€0",
          "Basilica of the Rosary, Basilica of the Holy Trinity, plaza."
        ),
        r("Noche", "Procesión opcional", "€0", "Dejar margen para descansar."),
      ],
      "Subtotal del día: €0"
    ),
    d(
      "l1",
      "1 mayo · regreso a Lisboa",
      [
        r("09:00–11:00", "Bus a Lisboa", "€5–15", "Elegir uno no muy tarde."),
        r("12:00", "Dejar maletas", "€0", "Check-in o guarda equipaje."),
        r(
          "14:30–16:30",
          "Opción A · free tour corto",
          "€0–15 propina opcional",
          "Baixa/Chiado/Alfama."
        ),
        r(
          "14:30–19:00",
          "Opción B · paseo libre",
          "€0",
          "Baixa, Sé, miradores, Alfama y cena temprana."
        ),
        r(
          "22:00",
          "Dormir temprano",
          "€0",
          "Vuelo muy madrugador al día siguiente."
        ),
      ],
      "Subtotal del día: €5–30"
    ),
    d(
      "l2",
      "2 mayo · vuelo a París",
      [
        r(
          "03:00–03:30",
          "Salida al aeropuerto",
          "€10–15",
          "Uber/Bolt recomendado."
        ),
      ],
      "Subtotal del día: €10–15"
    ),
  ],
  checklist: [
    "Goodnight Hostel",
    "Baixa",
    "Sé de Lisboa",
    "Alfama",
    "Mirador Santa Luzia",
    "Santuario de Fátima",
    "Capilla de las Apariciones",
    "Basílica del Rosario",
    "Basílica de la Trinidad",
    "Procesión de velas",
  ],
  budget: [
    { label: "Uber aeropuerto Lisboa", amount: "€10–15" },
    { label: "Bus Lisboa ↔ Fátima", amount: "€10–30" },
    { label: "Free tour Lisboa (propina)", amount: "€10–15" },
    { label: "Transporte urbano Lisboa", amount: "€5–10" },
    { label: "Entradas principales", amount: "€0" },
    { label: "Total estimado", amount: "€65–145" },
  ],
  map: {
    embedUrl:
      "https://maps.google.com/maps?q=Goodnight%20Hostel%20Lisbon%20Alfama%20Lisbon%20Cathedral%20Fatima%20Sanctuary&z=8&output=embed",
    links: [
      {
        href: "https://www.google.com/maps/search/?api=1&query=Goodnight+Hostel+Lisbon",
        label: "Abrir mapa de puntos",
      },
      {
        href: "https://www.google.com/maps/dir/?api=1&destination=Sanctuary+of+Fatima",
        label: "Abrir ruta a Fátima",
      },
    ],
    callout:
      "En la versión final puedes pegar aquí una ruta de My Maps con dos capas: Lisboa y Fátima. Si quieres usar free tour, añade el punto de encuentro oficial cuando lo elijas para que quede integrado.",
  },
}
