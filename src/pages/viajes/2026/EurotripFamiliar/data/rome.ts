import type { CityTab } from "@/components/trip"
import { d, r } from "./helpers"

export const romeCity: CityTab = {
  id: "rome",
  label: "Roma",
  cover: {
    gradient: "rome",
    tag: "Italia",
    title: "Roma",
    description:
      "Roma final del viaje: historia, Vaticano con misa y cúpula, atardeceres bonitos y una escapada a Asís.",
  },
  snapshot: [
    { label: "8 may", value: "llegada 11:15" },
    { label: "10 may", value: "misa + Regina Caeli" },
    { label: "11 may", value: "Asís" },
    { label: "€135–212", value: "aprox. por persona" },
  ],
  itinerary: [
    d(
      "r8",
      "8 mayo · llegada + Trastevere + Trevi de noche",
      [
        r(
          "11:15–15:30",
          "Llegada + check-in",
          "€0",
          "Via Portuense queda bien conectada por Trastevere."
        ),
        r("16:00–17:00", "Pantheon", "€0", "Tarde agradable sin correr."),
        r(
          "17:00",
          "Fontana di Trevi",
          "€0",
          "Si podemos entrar ok, sino volvemos el 11 por la mañana."
        ),
        r(
          "18:00",
          "Campo de' Fiori y Piazza Navona",
          "€0",
          "Mejor ver la fuente tarde para evitar aglomeración."
        ),
      ],
      "Subtotal del día: €0"
    ),
    d(
      "r9",
      "09 mayo · Asís",
      [
        r("06:52–09:06", "Tren Roma → Asís", "€15", "Pendiente el bus."),
        r(
          "10:00–17:00",
          "Basílica San Francesco + Santa Chiara + pueblo",
          "€0",
          "Día redondo y distinto a Roma."
        ),
        r("18:12–21:00", "Vuelta a Roma", "€14", "Pendiente el bus."),
      ],
      "Subtotal del día: €35–60"
    ),
    d(
      "r10",
      "10 mayo · Vaticano",
      [
        r(
          "08:00",
          "Entrada a San Pedro + fila",
          "€0",
          "Ir con margen para seguridad y para subir sin afán."
        ),
        r("09:00", "Misa", "€0", "Misa en el altar de la Cátedra."),
        r("12:00", "Regina Caeli", "€0", "Momento central del domingo."),
        r(
          "13:30–15:00",
          "Cúpula del Vaticano",
          "€22",
          "Subida reservada/organizada."
        ),
        r("15:30–16:30", "Almuerzo", "€16", "Buena pausa en la zona."),
        r(
          "17:00–18:30",
          "Castel Sant'Angelo",
          "€16",
          "Buena continuación; ajusta hora según reservas del día."
        ),
      ],
      "Subtotal del día: €54"
    ),
    d(
      "r11",
      "11 mayo · Coliseo + Foro + Pantheon",
      [
        r(
          "9:00 - 10:00",
          "Fontana di Trevi",
          "€2",
          "Suele haber fila para entrar."
        ),
        r(
          "11:00–12:30",
          "Piazza Venezia + Campidoglio",
          "€0",
          "Opcional este día, si hay tiempo."
        ),
        r("12:00 - 13:00", "Almuerzo", "€5", "Entradas compradas."),
        r("14:00–16:00", "Foro + Palatino", "€18", "Reservada."),
        r("16:45–18:00", "Coliseo", "€18", "Reservada."),
      ],
      "Subtotal del día: €23"
    ),
    d(
      "r12",
      "12 mayo · Museos Vaticanos + salida",
      [
        r(
          "09:00 - 11:00",
          "Piazza Venezia + Campidoglio",
          "€0",
          "Opcional antes del check-out."
        ),
        r(
          "13:00–16:00",
          "Museos Vaticanos + Sixtina",
          "€25",
          "Reservar primera franja."
        ),
        r(
          "18:00–18:30",
          "Salida al aeropuerto",
          "€0",
          "Vuelo 21:24 desde Fiumicino; llegada 23:35 a Valencia."
        ),
      ],
      "Subtotal del día: €25"
    ),
  ],
  checklist: [
    "Coliseo",
    "Foro + Palatino",
    "Pantheon",
    "Basílica de San Pedro",
    "Cúpula del Vaticano",
    "Regina Caeli",
    "Castel Sant'Angelo",
    "Museos Vaticanos",
    "Capilla Sixtina",
    "Asís",
  ],
  budget: [
    { label: "Pantheon", amount: "€5" },
    { label: "Coliseo + Foro + Palatino", amount: "€18" },
    { label: "Cúpula del Vaticano", amount: "€22" },
    { label: "Castel Sant'Angelo", amount: "€16" },
    { label: "Museos Vaticanos + reserva", amount: "€25" },
    { label: "Transporte urbano", amount: "€12–20" },
    { label: "Tren a Asís", amount: "€30" },
    { label: "Total estimado", amount: "€135–212" },
  ],
  map: {
    embedUrl:
      "https://maps.google.com/maps?q=Pantheon%20Rome%20Colosseum%20St%20Peter's%20Basilica%20Trevi%20Fountain%20Castel%20Sant'Angelo&z=12&output=embed",
    links: [
      {
        href: "https://www.google.com/maps/dir/?api=1&destination=Colosseum+Rome",
        label: "Abrir ruta al Coliseo",
      },
      {
        href: "https://www.google.com/maps/dir/?api=1&destination=St+Peter%27s+Basilica",
        label: "Abrir ruta al Vaticano",
      },
      {
        href: "https://www.google.com/maps/dir/?api=1&destination=Assisi",
        label: "Abrir ruta a Asís",
      },
    ],
  },
}
