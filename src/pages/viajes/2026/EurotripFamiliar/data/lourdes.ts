import type { CityTab } from "@/components/trip"
import { d, r } from "./helpers"

export const lourdesCity: CityTab = {
  id: "lourdes",
  label: "Lourdes",
  cover: {
    gradient: "lourdes",
    tag: "Francia",
    title: "Lourdes",
    description:
      "Una parada contemplativa, con una estructura diaria muy clara: gruta, rosario, procesión eucarística, procesión mariana y tiempo para comprender la historia de Bernadette.",
  },
  snapshot: [
    { label: "5 may", value: "llegada nocturna" },
    { label: "6 may", value: "día espiritual fuerte" },
    { label: "7 may", value: "misa + opción externa" },
    { label: "€25–70", value: "aprox. por persona" },
  ],
  itinerary: [
    d(
      "lo5",
      "5 mayo · llegada",
      [
        r(
          "22:00+",
          "Llegada a Lourdes + check-in",
          "€0",
          "Paseo corto nocturno solo si hay energía."
        ),
      ],
      "Subtotal del día: €0"
    ),
    d(
      "lo6",
      "6 mayo · santuario + Bernadette",
      [
        r(
          "Mañana",
          "Gruta + santuario + velas",
          "€0",
          "Tiempo de recogimiento."
        ),
        r(
          "Mediodía",
          "Huellas de Bernadette",
          "€0",
          "Moulin de Boly, Cachot y lugares clave."
        ),
        r("15:00", "Rosario en la Gruta", "€0", "Muy recomendado."),
        r(
          "17:00",
          "Procesión eucarística",
          "€0",
          "Con bendición de los enfermos."
        ),
        r("21:00", "Procesión mariana de antorchas", "€0", "Imperdible."),
      ],
      "Subtotal del día: €0"
    ),
    d(
      "lo7",
      "7 mayo · misa + opción A/B/C",
      [
        r("09:30", "Misa", "€0", "Buen punto de inicio."),
        r(
          "Tarde A",
          "Santuario con calma",
          "€0",
          "Repetir gruta, capillas, tiendas religiosas."
        ),
        r(
          "Tarde B",
          "Pic du Jer",
          "€11–15 opcional",
          "Si hace bueno y apetece una vista panorámica."
        ),
        r(
          "Tarde C",
          "Château Fort",
          "€8–9 opcional",
          "Si queréis una visita cultural corta."
        ),
        r(
          "21:00",
          "Procesión mariana",
          "€0",
          "Se puede repetir, merece la pena."
        ),
      ],
      "Subtotal del día: €0–15 o €0–9 según opción"
    ),
    d(
      "lo8",
      "8 mayo · salida a Roma",
      [
        r(
          "Muy temprano",
          "Traslado al aeropuerto",
          "€10–25",
          "Mejor taxi o traslado reservado."
        ),
      ],
      "Subtotal del día: €10–25"
    ),
  ],
  checklist: [
    "Gruta de Massabielle",
    "Santuario",
    "Rosario 15:00",
    "Procesión eucarística 17:00",
    "Procesión mariana 21:00",
    "Huellas de Bernadette",
    "Moulin de Boly",
    "Cachot",
    "Pic du Jer opcional",
    "Château Fort opcional",
  ],
  budget: [
    { label: "Santuario, rosario, procesiones", amount: "€0" },
    { label: "Pic du Jer (opcional)", amount: "€11–15" },
    { label: "Château Fort (opcional)", amount: "€8–9" },
    { label: "Taxi / shuttle aeropuerto", amount: "€6–25" },
    { label: "Total estimado", amount: "€25–70" },
  ],
  map: {
    embedUrl:
      "https://maps.google.com/maps?q=Sanctuary%20of%20Our%20Lady%20of%20Lourdes%20Grotto%20of%20Massabielle%20Pic%20du%20Jer%20Chateau%20Fort%20Lourdes&z=14&output=embed",
    links: [
      {
        href: "https://www.google.com/maps/dir/?api=1&destination=Sanctuary+of+Our+Lady+of+Lourdes",
        label: "Abrir ruta al santuario",
      },
    ],
  },
}
