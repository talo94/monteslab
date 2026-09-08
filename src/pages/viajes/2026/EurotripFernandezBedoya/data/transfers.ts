import type { Transfer, Cost } from "./types"
const cost = (label: string, amount: number, sourceId: string): Cost => ({
  label,
  amount,
  basis: "grupo de tres",
  kind: "tarifa publicada",
  sourceId,
})
export const transfers: Transfer[] = [
  {
    id: "mad-vlc",
    date: "2026-09-06",
    title: "Madrid → Valencia",
    time: "19:30 → 21:24",
    operator: "iryo",
    status: "documentado",
    provenance: "billete",
    detail:
      "Madrid-Chamartín → Valencia-Joaquín Sorolla. Inicio de la estancia familiar.",
    options: [],
  },
  {
    id: "vlc-lis",
    date: "2026-09-08",
    title: "Valencia → Lisboa",
    time: "Salida 21:20",
    operator: "Ryanair",
    status: "plan",
    provenance: "familia",
    detail:
      "Hora de llegada pendiente. Reservar margen para recoger equipaje y trasladarse al aeropuerto después del Oceanogràfic.",
    options: [
      "Consultar el billete para el cierre de facturación y embarque. Portugal tiene una hora menos que España.",
      "Al llegar a Lisboa, comparar taxi y Bolt/Uber al alojamiento; no hay cotización cerrada.",
    ],
  },
  {
    id: "lis-fat",
    date: "2026-09-10",
    title: "Lisboa → Fátima",
    time: "Buscar salida 07:30–08:30",
    status: "pendiente",
    provenance: "propuesta",
    detail:
      "Autobús directo, buscando llegar sobre 09:00–10:00. La franja propuesta no es un servicio reservado.",
    options: [
      "Comparar Rede Expressos y FlixBus. FlixBus anuncia trayectos desde 1 h 20 min, según servicio y tráfico.",
      "Sete Rios: metro azul desde Rossio hasta Jardim Zoológico. Comprobar la parada exacta: terminal y parada frente al zoo son diferentes.",
      "Si el billete sale de Oriente, dirigirse a esa estación. No confundir el lugar de salida.",
      "Desde la terminal de Fátima, prever unos 15–20 min andando con equipaje hasta el alojamiento y confirmar custodia anticipada.",
      "Provisión orientativa para los tres: 60–90 € por ida y vuelta, sin accesos a estaciones. No es una cotización para estas fechas.",
    ],
    sourceIds: ["flix", "rede"],
  },
  {
    id: "fat-lis",
    date: "2026-09-11",
    title: "Fátima → Lisboa",
    time: "Buscar salida 11:00–12:00",
    status: "pendiente",
    provenance: "propuesta",
    detail:
      "Regreso en autobús directo. Elegir servicio y precio antes de viajar; dejar una tarde tranquila en Lisboa.",
    options: [
      "Recoger maletas, llegar con margen al terminal de Fátima y comprobar si el destino en Lisboa es Sete Rios u Oriente.",
      "El alojamiento permite entrada desde las 15:00. Acordar la salida de madrugada del día siguiente.",
    ],
    sourceIds: ["flix", "rede"],
  },
  {
    id: "lis-par",
    date: "2026-09-12",
    title: "Lisboa → París",
    time: "Sobre 06:00 · por confirmar",
    status: "pendiente",
    provenance: "familia",
    detail:
      "Faltan aeropuerto, vuelo y hora de llegada. No se puede asegurar todavía el margen para Versalles a las 13:00.",
    options: [
      "Si llegan a Orly: taxi oficial a París, margen derecha, 45 € por coche; transporte público 42 € para tres.",
      "Si llegan a CDG: taxi oficial 56 € por coche; transporte público 42 € para tres. Beauvais requiere otro cálculo.",
      "Orly en transporte público: línea 14 a Gare de Lyon, línea 1 hacia Château de Vincennes hasta Saint-Mandé y caminar.",
      "CDG: RER B a Châtelet–Les Halles, línea 1 hasta Saint-Mandé y caminar. Comprobar servicio antes de salir.",
      "Comparar la cotización real de Uber con estas tarifas. Soportes de billetes y suplementos de reserva de taxi, si proceden, son adicionales.",
      "Hotel → Versalles: confirmar guarda de maletas y calcular el recorrido con RATP según la llegada. Elegir conexión a Versailles Château Rive Gauche y caminar al palacio; no hay itinerario de transporte cerrado.",
    ],
    costs: [
      cost("Transporte público desde Orly o CDG", 42, "paris"),
      cost("Taxi oficial desde Orly", 45, "taxiParis"),
      cost("Taxi oficial desde CDG", 56, "taxiParis"),
    ],
    sourceIds: ["ratp"],
  },
  {
    id: "par-ven",
    date: "2026-09-15",
    title: "París-Orly → Venecia",
    time: "07:40 → 09:20",
    operator: "easyJet · EJU4871",
    status: "documentado",
    provenance: "billete",
    detail:
      "Orly 1 → Marco Polo. Cierre de entrega de equipaje 07:00 y de puerta 07:10: son límites, no horas recomendadas de llegada.",
    options: [
      "Organizar taxi desde el hotel de madrugada y apuntar a estar en Orly sobre 05:40. Confirmar recogida y suplemento de reserva.",
      "Marco Polo → Piazzale Roma: ACTV línea 5 por 30 € los tres o ATVO exprés por 36 € los tres; ATVO anuncia unos 20 min, sin contar esperas.",
      "Piazzale Roma → B&B: prever 15–25 min a pie con puentes y maletas. Los taxis de carretera no llegan a la puerta del alojamiento.",
    ],
    costs: [
      cost("ACTV Aerobus · aeropuerto a Venecia", 30, "actv"),
      cost("ATVO exprés · aeropuerto a Venecia", 36, "atvo"),
    ],
    sourceIds: ["taxiParis"],
  },
  {
    id: "ven-mestre",
    date: "2026-09-16",
    title: "Hotel → Venezia Mestre",
    time: "Salir del hotel 06:45–07:00",
    status: "pendiente",
    provenance: "propuesta",
    detail:
      "El tren a Roma sale de Mestre. Primero hay que salir de la isla: este traslado no está incluido automáticamente en el billete de Roma.",
    options: [
      "Acordar salida anticipada. Caminar 20–30 min con equipaje a Venezia Santa Lucia.",
      "Elegir un regional Santa Lucia → Mestre con llegada antes de las 08:00; trayecto habitual de unos 10–12 min. Servicio y tarifa pendientes.",
      "En Mestre, consultar el andén del Frecciarossa y embarcar con margen.",
    ],
    sourceIds: ["trenitalia"],
  },
  {
    id: "ven-rom",
    date: "2026-09-16",
    title: "Venezia Mestre → Roma Termini",
    time: "08:34 → 12:04",
    operator: "Frecciarossa 9466",
    status: "documentado",
    provenance: "billete",
    detail:
      "Al llegar, metro A hacia Battistini, bajar en Cipro y caminar al alojamiento para dejar equipaje, si lo autorizan.",
    options: [
      "Billete urbano ATAC: 1,50 € por persona, 4,50 € para tres; soporte de compra, si corresponde, aparte.",
      "Si el hotel no guarda maletas, valorar una consigna cerca del Vaticano, como Via Germanico 20. Cotizar según tamaño y horas.",
    ],
    costs: [cost("Metro urbano al alojamiento", 4.5, "atac")],
    sourceIds: ["consigna"],
  },
  {
    id: "rom-vlc",
    date: "2026-09-18",
    title: "Roma-Fiumicino → Valencia",
    time: "Salida 19:40",
    status: "plan",
    provenance: "familia",
    detail:
      "Hora de llegada a Valencia pendiente. Objetivo de llegada a Fiumicino: 17:00–17:15, ajustando a las condiciones del billete.",
    options: [
      "Recomendación con tres personas y equipaje: taxi desde el centro, dentro de las murallas aurelianas, por 55 € por coche. Salida orientativa sobre las 16:00, ajustada al tráfico.",
      "Más económico: SIT Bus Shuttle, 21 € los tres, más llegar a la parada. Recoger maletas sobre las 15:00 y seleccionar servicio con llegada prevista antes de las 17:00.",
      "Leonardo Express: Termini → Fiumicino en 32 min, 42 € para tres, más desplazamiento hasta Termini.",
      "Uber requiere cotización real: comparar el total con 55 € del taxi oficial. Los importes no incluyen consigna.",
      "Consigna: Via della Vite 42 para paseo y taxi desde el centro; Via Milazzo 20 A si eligen bus o tren desde Termini. Comprobar capacidad y coste por horas.",
    ],
    costs: [
      cost("SIT Bus Shuttle", 21, "sit"),
      cost("Leonardo Express", 42, "leonardo"),
      cost("Taxi oficial desde el centro", 55, "taxiRoma"),
    ],
    sourceIds: ["consigna"],
  },
  {
    id: "vlc-mad",
    date: "2026-09-23",
    title: "Valencia → Madrid",
    time: "23 o 24 sep · por decidir",
    status: "pendiente",
    provenance: "propuesta",
    detail:
      "Dos alternativas abiertas. Ningún tren ni alojamiento de Madrid está reservado en esta guía.",
    options: [
      "Opción A: tren el 23 y noche en Madrid; faltan servicio y alojamiento.",
      "Opción B: tren el 24 sobre las 06:00, propuesto por la familia. Comprobar que existe y calcular llegada, estación, traslado al aeropuerto y margen antes del vuelo.",
      "No se garantiza la conexión del mismo día sin confirmar los horarios y la terminal.",
    ],
  },
  {
    id: "mad-clo",
    date: "2026-09-24",
    title: "Madrid → Cali",
    time: "Salida 12:00",
    status: "plan",
    provenance: "familia",
    detail:
      "Hora aportada por la familia. Billete, terminal, compañía y llegada pendientes de incorporar.",
    options: [
      "Ajustar traslado al aeropuerto y antelación a las condiciones del vuelo internacional.",
    ],
  },
]
export const transferById = Object.fromEntries(transfers.map((t) => [t.id, t]))
