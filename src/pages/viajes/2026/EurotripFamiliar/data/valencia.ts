import type { CityTab } from "@/components/trip"
import { d, r } from "./helpers"

export const valenciaCity: CityTab = {
  id: "valencia",
  label: "Valencia",
  cover: {
    gradient: "valencia",
    tag: "España",
    title: "Valencia",
    description:
      "Bloques suaves antes del viaje y planes más wow después, para aprovechar que probablemente venga el novio de tu hermana. Pensado para combinar turismo con trabajo desde las 16:00.",
  },
  snapshot: [
    { label: "27–28 abr", value: "pre-viaje" },
    { label: "13–15 may", value: "post-viaje" },
    { label: "4pm", value: "hora ideal para volver a trabajar" },
    {
      label: "€35–95",
      value: "presupuesto estimado por persona sin / con Oceanogràfic",
    },
  ],
  itinerary: [
    d(
      "v26",
      "26 abril · llegada",
      [
        r(
          "21:00+",
          "Recoger en estación + ir a casa",
          "€0",
          "Noche de descanso, sin más planes."
        ),
      ],
      "Subtotal del día: €0"
    ),
    d(
      "v27",
      "27 abril · centro histórico",
      [
        r(
          "09:30",
          "Salida de casa",
          "€0",
          "Ideal moverse en metro/EMT al centro."
        ),
        r(
          "10:00–12:00",
          "Catedral + museo + Miguelete",
          "€13",
          "Buen bloque cultural principal."
        ),
        r(
          "12:15–13:00",
          "Plaza de la Virgen + paseo",
          "€0",
          "Fotos y ambiente."
        ),
        r(
          "13:00–14:00",
          "Mercado Central y almuerzo",
          "€0",
          "Plan cómodo y cercano."
        ),
        r(
          "14:15–15:15",
          "Café de las Horas",
          "€9–14",
          "Agua de Valencia y momento lindo."
        ),
        r(
          "16:00",
          "Vuelta a casa / café para trabajar",
          "€0",
          "Bloque respetando la jornada laboral."
        ),
      ],
      "Subtotal del día: €22–27"
    ),
    d(
      "v28",
      "28 abril · mañana ligera + vuelo",
      [
        r(
          "10:00–12:00",
          "Paseo corto por Turia o café brunch",
          "€0",
          "Sin sobrecargar antes del vuelo."
        ),
        r("12:30–14:00", "Almuerzo", "€0", "Regresar a casa con calma."),
        r(
          "14:00–18:00",
          "Maletas + descanso",
          "€0",
          "Salir hacia el aeropuerto con margen."
        ),
      ],
      "Subtotal del día: €0"
    ),
    d(
      "v13",
      "13 mayo · recuperación",
      [
        r("Mañana", "Descanso en casa", "€0", "Después del viaje largo."),
        r(
          "Mediodía",
          "Paseo suave por Turia",
          "€0",
          "Ideal si quieren airearse."
        ),
        r("Noche", "Cena relajada", "€0", "Sin turismo fuerte."),
      ],
      "Subtotal del día: €0"
    ),
    d(
      "v14",
      "14 mayo · playa + paella",
      [
        r(
          "10:30–13:30",
          "Malvarrosa / paseo marítimo",
          "€0",
          "Mejor si hace sol."
        ),
        r(
          "13:30–15:30",
          "Paella",
          "€0",
          "Plan top para hacer con el novio también."
        ),
        r("16:00", "Trabajo", "€0", "Vuelta a casa o café."),
      ],
      "Subtotal del día: €0"
    ),
    d(
      "v15",
      "15 mayo · Ciudad de las Artes",
      [
        r(
          "10:00–13:30",
          "Ciudad de las Artes y las Ciencias (exterior)",
          "€0",
          "Plan wow para hacer en grupo."
        ),
        r("13:30–15:00", "Almuerzo por la zona", "€0", "Fórum / zona cercana."),
        r(
          "15:00–15:45",
          "Opcional Oceanogràfic",
          "€36–43 opcional",
          "Solo si queréis convertirlo en plan largo."
        ),
        r("16:00", "Trabajo", "€0", "Volver a casa o a un café tranquilo."),
      ],
      "Subtotal del día: €0–43"
    ),
    d(
      "v16",
      "16 mayo · salida mamá",
      [
        r(
          "Todo el día",
          "Casa + aeropuerto",
          "€0",
          "Día de cierre sin turismo."
        ),
      ],
      "Subtotal del día: €0"
    ),
  ],
  checklist: [
    "Catedral de Valencia",
    "Miguelete",
    "Mercado Central",
    "Café de las Horas",
    "Agua de Valencia",
    "Jardín del Turia",
    "Malvarrosa",
    "Paella junto al mar",
    "Ciudad de las Artes",
    "Oceanogràfic opcional",
  ],
  budget: [
    { label: "Catedral + museo", amount: "€10" },
    { label: "Miguelete", amount: "€3" },
    { label: "Agua de Valencia", amount: "€9–14" },
    { label: "Transporte urbano total", amount: "€8–15" },
    { label: "Oceanogràfic (opcional)", amount: "€36–43" },
    { label: "Total estimado", amount: "€35–95" },
  ],
  map: {
    embedUrl:
      "https://maps.google.com/maps?q=Valencia%20Cathedral%20Mercado%20Central%20Caf%C3%A9%20de%20las%20Horas%20Ciudad%20de%20las%20Artes%20Malvarrosa&z=12&output=embed",
    links: [
      {
        href: "https://www.google.com/maps/dir/?api=1&destination=Valencia+Cathedral",
        label: "Abrir puntos en Google Maps",
      },
    ],
    callout:
      "Para poner una ruta personalizada con varias paradas: crea un mapa en Google My Maps, añade capas por día y luego reemplaza este iframe por el enlace de inserción que te da My Maps. Así podrás mostrar rutas exactas y colores por jornada.",
  },
}
