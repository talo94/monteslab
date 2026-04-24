import type { CityTab } from "@/components/trip";
import { d, r } from "./helpers";

export const parisCity: CityTab = {
  id: "paris",
  label: "París",
  cover: {
    gradient: "paris",
    tag: "Francia",
    title: "París",
    description:
      "París sin Louvre, pero con los grandes momentos: Notre-Dame, Torre Eiffel de noche y de día, un día entero en Versalles y un bloque de Montmartre con free tour opcional.",
  },
  snapshot: [
    { label: "2 may", value: "llegada 09:25" },
    { label: "3 may", value: "Versalles" },
    { label: "4 may", value: "Montmartre + Torre de día" },
    { label: "€95–160", value: "aprox. por persona" },
  ],
  itinerary: [
    d(
      "p2",
      "2 mayo · Île de la Cité + Eiffel de noche",
      [
        r("09:25–12:30", "Llegada + traslado + dejar maletas", "€0", "Hotel no tan céntrico, moverse en metro."),
        r("14:00–16:00", "Notre-Dame + Île de la Cité", "€0", "Paseo inicial muy París."),
        r("17:30–21:00", "Torre Eiffel + Sena", "€23–36", "Solo jardines, no hay entradas."),
      ],
      "Subtotal del día: €23–36",
    ),
    d(
      "p3",
      "3 mayo · Versalles",
      [
        r("08:00", "Salida", "€0", "RER con tiempo."),
        r("09:00–14:00", "Palacio de Versalles", "€35", "Día completo, ir muy temprano."),
        r("14:00–15:30", "Jardines", "€0", "Buen cierre antes de volver."),
        r("18:00", "Regreso y cena tranquila", "€0", "Jornada intensa."),
      ],
      "Subtotal del día: €21",
    ),
    d(
      "p4",
      "4 mayo · Montmartre + Torre de día",
      [
        r("10:00–12:30", "Montmartre + Sacré-Cœur", "€0", "Barrio con más encanto."),
        r("15:00–16:30", "Trocadéro + Torre Eiffel de día", "€0", "Así la ven también con buena luz."),
        r("17:00–19:00", "Free tour opcional o Sena", "€0–15 propina opcional", "Centro histórico o tour de Montmartre."),
      ],
      "Subtotal del día: €0–15",
    ),
    d(
      "p5",
      "5 mayo · mañana libre + salida",
      [
        r("10:30–15:30", "Le Marais / paseo final", "€0", "Último bloque sin prisas."),
        r("17:30", "Regreso al hotel", "€0", "Recoger equipaje."),
        r("18:30", "Salida al aeropuerto", "€0", "Vuelo 20:40."),
      ],
      "Subtotal del día: €0",
    ),
  ],
  checklist: [
    "Notre-Dame",
    "Île de la Cité",
    "Torre Eiffel de noche",
    "Torre Eiffel de día",
    "Trocadéro",
    "Versalles",
    "Montmartre",
    "Sacré-Cœur",
    "Le Marais",
    "Free tour opcional",
  ],
  budget: [
    { label: "Torre Eiffel", amount: "€14–36" },
    { label: "Versalles", amount: "€21–32" },
    { label: "Metro / RER", amount: "€20–35" },
    { label: "Free tour (propina)", amount: "€10–15" },
    { label: "Total estimado", amount: "€95–160" },
  ],
  map: {
    embedUrl:
      "https://maps.google.com/maps?q=Eiffel%20Tower%20Notre-Dame%20Cathedral%20Paris%20Montmartre%20Palace%20of%20Versailles&z=11&output=embed",
    links: [
      { href: "https://www.google.com/maps/dir/?api=1&destination=Eiffel+Tower", label: "Abrir ruta a la Torre Eiffel" },
      { href: "https://www.google.com/maps/dir/?api=1&destination=Palace+of+Versailles", label: "Abrir ruta a Versalles" },
    ],
  },
};
