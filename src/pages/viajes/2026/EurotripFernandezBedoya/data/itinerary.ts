import type { Activity, Stage } from "./types"
const a = (
  id: string,
  time: string,
  title: string,
  note?: string,
  status: Activity["status"] = "plan"
): Activity => ({ id, time, title, note, status })
const free = (id: string, time = "Resto del día"): Activity => ({
  id,
  time,
  title: "Tiempo libre",
  status: "plan",
  kind: "libre",
  note: "Un espacio para descansar o decidir juntos sobre la marcha.",
})
const rest = (id: string, time: string, note?: string): Activity => ({
  id,
  time,
  title: "Pausa y descanso",
  note,
  status: "plan",
  kind: "descanso",
})
export const stages: Stage[] = [
  {
    id: "valencia-inicio",
    city: "Valencia",
    country: "España",
    dates: "6–8 sep",
    accent: "gold",
    intro:
      "El viaje empieza en familia. Unos días para reencontrarse, bajar el ritmo y asomarse al Mediterráneo.",
    tips: [
      "Las horas indicadas son locales. Lisboa y Fátima tienen una hora menos que Valencia, París y Roma.",
    ],
    sourceIds: [],
    days: [
      {
        date: "2026-09-06",
        title: "Bienvenidos a Valencia",
        overnight: "Valencia · estancia familiar",
        transferIds: ["mad-vlc"],
        activities: [
          a(
            "bienvenida",
            "Al llegar",
            "Llegada y descanso",
            "Traslado desde la estación y comienzo de la estancia familiar."
          ),
        ],
      },
      {
        date: "2026-09-07",
        title: "Un día en familia",
        overnight: "Valencia · estancia familiar",
        transferIds: [],
        activities: [free("valencia-libre", "Todo el día")],
      },
      {
        date: "2026-09-08",
        title: "Entre el mar y la arquitectura",
        hotelId: "lisboa-nova",
        transferIds: ["vlc-lis"],
        activities: [
          free("valencia-manana", "Mañana"),
          a(
            "oceanografic",
            "Tarde",
            "Oceanogràfic y Ciudad de las Artes y las Ciencias",
            "Ajustar la duración al traslado al aeropuerto y dejar tiempo para recoger las maletas."
          ),
          a(
            "aeropuerto-valencia",
            "Antes del vuelo",
            "Recoger equipaje y salir al aeropuerto",
            "Calcular el margen según tráfico, equipaje y condiciones de Ryanair."
          ),
        ],
      },
    ],
  },
  {
    id: "lisboa",
    city: "Lisboa",
    country: "Portugal",
    dates: "9 sep",
    accent: "sage",
    intro:
      "Plazas luminosas, cafés y calles que bajan hasta el Tajo. Un paseo autoguiado de Baixa a Alfama, con tiempo para detenerse.",
    tips: [
      "Recorrido orientativo de 6–7 km con cuestas y pausas. Si pesan las piernas, subir en taxi o Bolt a Portas do Sol después de comer y recorrer Alfama bajando.",
      "No es un tour reservado: pueden seguir el paseo a su ritmo. Las visitas interiores dependen del horario y de posibles entradas.",
    ],
    sourceIds: ["lisboa"],
    days: [
      {
        date: "2026-09-09",
        title: "Lisboa, paso a paso",
        hotelId: "lisboa-nova",
        transferIds: [],
        activities: [
          a(
            "rossio",
            "09:00–10:00",
            "Praça da Figueira, Rossio y São Domingos"
          ),
          a(
            "carmo",
            "10:00–11:15",
            "Santa Justa por fuera y Largo do Carmo",
            "Subir andando sin depender de la cola del elevador."
          ),
          a(
            "chiado",
            "11:15–12:15",
            "Chiado y Praça Luís de Camões",
            "Bertrand, exterior de A Brasileira y paseo por el barrio."
          ),
          rest("lisboa-comida", "12:15–13:30", "Almuerzo y descanso en Baixa."),
          a(
            "comercio",
            "13:30–14:30",
            "Rua Augusta, Praça do Comércio y el Tajo"
          ),
          a(
            "alfama",
            "14:30–16:00",
            "Sé, Santa Luzia y Portas do Sol",
            "Miradores y vistas sobre Alfama."
          ),
          a("alfama-bajada", "16:00–17:00", "Bajada por las calles de Alfama"),
          free("lisboa-tarde", "Desde 17:00"),
        ],
      },
    ],
  },
  {
    id: "fatima",
    city: "Fátima",
    country: "Portugal",
    dates: "10 sep",
    accent: "sage",
    intro:
      "Un día para el Santuario, las historias de los pastorcitos y la oración compartida al caer la noche.",
    tips: [
      "El jueves se mantiene el rosario; la procesión es eucarística. El programa habitual de verano puede cambiar por celebraciones especiales.",
      "Para Aljustrel, taxi de ida y vuelta y paseo entre las casas. Añadir Valinhos solo si el ritmo lo permite; no hace falta completar todo el vía crucis.",
      "Las casas publican horario 09:00–13:00 y 14:00–18:00 en una comunicación antigua: reconfirmar en el Santuario.",
    ],
    sourceIds: ["fatima", "casas"],
    days: [
      {
        date: "2026-09-10",
        title: "El Santuario y los pastorcitos",
        hotelId: "fatima",
        transferIds: ["lis-fat"],
        activities: [
          a(
            "fatima-maletas",
            "09:30–10:00",
            "Llegada y dejar maletas",
            "Objetivo de llegada según el autobús elegido. Custodia pendiente de confirmar.",
            "pendiente"
          ),
          a(
            "santuario",
            "10:00–12:15",
            "Capilla de las Apariciones y Basílica del Rosario",
            "Visitar las sepulturas de los pastorcitos y recorrer el recinto."
          ),
          rest("fatima-comida", "12:15–13:15", "Almuerzo."),
          a("trinidad", "13:15–14:00", "Basílica de la Santísima Trinidad"),
          a(
            "aljustrel",
            "14:00–16:30",
            "Aljustrel: las casas de los pastorcitos",
            "Casa de Lucía, casa de Francisco y Jacinta y Pozo del Arneiro. Valinhos opcional."
          ),
          rest(
            "fatima-descanso",
            "16:30–18:30",
            "Regreso al hotel, check-in y descanso."
          ),
          a(
            "misa",
            "19:15",
            "Misa en español",
            "Llegar hacia las 18:50 a la Capilla de las Apariciones. Horario del programa de verano."
          ),
          rest("fatima-cena", "20:00–21:00", "Cena cerca del Santuario."),
          a(
            "rosario",
            "21:30",
            "Rosario y procesión eucarística",
            "Volver al recinto hacia las 21:15. Los jueves cambia la procesión; el rosario se mantiene."
          ),
        ],
      },
    ],
  },
  {
    id: "lisboa-regreso",
    city: "Lisboa, de vuelta",
    country: "Portugal",
    dates: "11 sep",
    accent: "sage",
    intro:
      "Una última tarde portuguesa, sin prisas. Recoger recuerdos, cenar temprano y preparar el salto a París.",
    tips: [
      "Dejar preparado el traslado al aeropuerto de madrugada. La salida del vuelo es aproximada y necesita confirmación.",
    ],
    sourceIds: [],
    days: [
      {
        date: "2026-09-11",
        title: "Regreso y tarde tranquila",
        hotelId: "lisboa-pensamento",
        transferIds: ["fat-lis"],
        activities: [
          free("fatima-manana", "Antes de salir"),
          a("lisboa-checkin", "Desde 15:00", "Entrada al alojamiento"),
          free("lisboa-final", "Tarde"),
          rest(
            "lisboa-noche",
            "Noche",
            "Cena temprana y preparar equipaje para el vuelo madrugador."
          ),
        ],
      },
    ],
  },
  {
    id: "paris",
    city: "París",
    country: "Francia",
    dates: "12–14 sep",
    accent: "blue",
    intro:
      "Jardines de palacio, un día de magia y un paseo por los grandes clásicos. París se disfruta también desde una silla al sol.",
    tips: [
      "El 12 depende del aeropuerto y la llegada del vuelo. Dejar maletas en el hotel aún no está confirmado; la entrada de Versalles a las 13:00 es el compromiso fijo.",
      "Disney: día aprobado, entrada, parque y horarios pendientes de incorporar.",
      "La Madeleine abre entre semana 09:30–19:00. No está confirmada la exposición de la reliquia para veneración el día 14.",
      "Metro y recorridos sujetos al estado del servicio. Billete Metro–Tren–RER publicado: 2,55 € por persona y viaje; no confundir con el billete aeroportuario de 14 €.",
      "El día 15 el avión sale de Orly a las 07:40. Dejar el equipaje preparado y organizar el traslado temprano.",
    ],
    sourceIds: ["madeleine", "ratp", "paris"],
    days: [
      {
        date: "2026-09-12",
        title: "Una tarde en Versalles",
        hotelId: "paris",
        transferIds: ["lis-par"],
        activities: [
          a(
            "paris-maletas",
            "Al llegar",
            "Aeropuerto → hotel → Versalles",
            "Comprobar si el vuelo permite pasar por el hotel y llegar a tiempo. No se garantiza esta conexión.",
            "pendiente"
          ),
          a(
            "versalles",
            "13:00",
            "Palacio de Versalles",
            "Entrada A, Pabellón Dufour. Entrada documentada; conservar el resto de la tarde para la visita.",
            "documentado"
          ),
          a("versalles-jardines", "Tarde", "Jardines y paseo por Versalles"),
          free("paris-sabado", "Al regresar"),
          a(
            "eiffel-opcional",
            "Opcional",
            "Paseo nocturno junto a la Torre Eiffel",
            "Solo si hay ganas y tiempo; se puede dejar para el lunes."
          ),
        ],
      },
      {
        date: "2026-09-13",
        title: "Un día de magia en Disney",
        hotelId: "paris",
        transferIds: [],
        activities: [
          a(
            "disney",
            "Todo el día",
            "Disney",
            "Organizar ida y vuelta según el parque y los horarios de las entradas. Día previsto, sin billete incorporado."
          ),
          rest("disney-noche", "Al regresar", "Descanso en el hotel."),
        ],
      },
      {
        date: "2026-09-14",
        title: "Los clásicos, de este a oeste",
        hotelId: "paris",
        transferIds: [],
        activities: [
          a(
            "louvre",
            "09:00–10:00",
            "Louvre por fuera",
            "Cour Carrée y pirámide, sin entrar al museo."
          ),
          a("tullerias", "10:00–11:00", "Jardín de las Tullerías"),
          a("concorde", "11:00–11:30", "Concorde y Rue Royale"),
          a("madeleine", "11:30–12:15", "Iglesia de La Madeleine"),
          rest("paris-comida", "12:15–13:30", "Almuerzo."),
          a(
            "metro-arco",
            "13:30–14:00",
            "Metro hasta el Arco del Triunfo",
            "Caminar a Concorde. Línea 1 hacia La Défense hasta Charles de Gaulle–Étoile."
          ),
          a(
            "arco",
            "14:00–15:00",
            "Arco del Triunfo y Campos Elíseos",
            "Exterior y paseo corto."
          ),
          a(
            "metro-trocadero",
            "15:00–15:30",
            "Metro 6 a Trocadéro",
            "Dirección Nation; bajar en Trocadéro."
          ),
          a(
            "trocadero",
            "15:30–17:00",
            "Trocadéro y paseo hacia la Torre",
            "Mirador, jardines y puente de Iéna."
          ),
          rest(
            "paris-pausa",
            "17:00–18:30",
            "Tiempo para sentarse y comer algo."
          ),
          free("paris-atardecer", "18:30–19:30"),
          a("eiffel", "19:30", "Visita y atardecer en la Torre Eiffel"),
          rest(
            "paris-regreso",
            "Después",
            "Regreso al hotel. Mañana toca madrugar."
          ),
        ],
      },
    ],
  },
  {
    id: "venecia",
    city: "Venecia",
    country: "Italia",
    dates: "15 sep",
    accent: "rose",
    intro:
      "Puentes, pequeñas plazas y el agua como camino. Un día para descubrir lo imprescindible y dejarse llevar por el Gran Canal.",
    tips: [
      "Recorrido sugerido: hotel → Frari → Rialto → San Marcos → Puente de los Suspiros → Riva degli Schiavoni. Regresar por el Gran Canal en vaporetto, según servicio.",
      "Góndola: tarifa municipal diurna 90 € por embarcación, 30 minutos; al compartir entre tres, 30 € por persona. Desde las 19:00: 110 € por 35 minutos.",
      "Vaporetto: billete de 75 min, 9,50 € por persona (28,50 € para tres). Pase de 24 h: 25 € por persona (75 € para tres). Para solo uno o dos trayectos, comparar billetes sueltos.",
      "No añadir Murano y Burano con una sola noche. La góndola y el vaporetto son alternativas; no hay paseo reservado.",
    ],
    sourceIds: ["gondola", "actv"],
    days: [
      {
        date: "2026-09-15",
        title: "Un día entre canales",
        hotelId: "venecia",
        transferIds: ["par-ven"],
        activities: [
          a(
            "venecia-maletas",
            "Al llegar",
            "Traslado al hotel y dejar maletas",
            "Custodia antes de las 14:00 pendiente de confirmar.",
            "pendiente"
          ),
          a("frari", "Final de la mañana", "Campo y exterior de los Frari"),
          rest(
            "venecia-comida",
            "Mediodía",
            "Almuerzo y pausa tras el madrugón."
          ),
          a("venecia-checkin", "Desde 14:00", "Check-in y descanso breve"),
          a("rialto", "Tarde", "Rialto y Gran Canal"),
          a(
            "sanmarcos",
            "Tarde",
            "Plaza de San Marcos",
            "Basílica y Palacio Ducal por fuera. Entrar a la basílica requiere concretar entrada y horario."
          ),
          a(
            "suspiros",
            "Tarde",
            "Puente de los Suspiros y Riva degli Schiavoni",
            "Vista del puente desde Ponte della Paglia y paseo junto al agua."
          ),
          a(
            "barco",
            "Antes de cenar",
            "Venecia desde el agua",
            "Elegir góndola diurna antes de las 19:00 o vaporetto por el Gran Canal. Bajada de regreso según servicio, por ejemplo San Tomà."
          ),
          rest(
            "venecia-cena",
            "Noche",
            "Cena y descanso. Acordar salida temprana del alojamiento."
          ),
        ],
      },
    ],
  },
  {
    id: "roma",
    city: "Roma",
    country: "Italia",
    dates: "16–18 sep",
    accent: "gold",
    intro:
      "Tres capítulos para la ciudad eterna: San Pedro, la Roma antigua y las plazas del centro. Con buenas pausas entre historia y paseo.",
    tips: [
      "San Pedro: entrada gratuita sin reserva obligatoria, con control de seguridad. Prever cola y 1–2 horas dentro; vestir con hombros y rodillas cubiertos. Acceso sujeto a celebraciones.",
      "Coliseo: conservar las entradas y documentación necesarias fuera de esta guía. Foro–Palatino se visita en un único acceso; no salir a comer para intentar volver a entrar.",
      "Arlù, Borgo Pio 135, es una opción de cena cerca de San Pedro. Presupuesto orientativo 30–40 € por persona según consumo; reserva pendiente.",
      "Panteón: tarifa general publicada de 7 € por adulto desde julio de 2026. Trevi: 2 € para el perímetro interior; vista desde la plaza superior gratuita.",
      "Consignas: elegir tamaño y horas reales al reservar. El precio «desde» del proveedor no equivale a una jornada completa.",
    ],
    sourceIds: ["sanpedro", "arlu", "pantheon", "trevi", "consigna"],
    days: [
      {
        date: "2026-09-16",
        title: "San Pedro y una mesa en Borgo Pio",
        hotelId: "roma",
        transferIds: ["ven-mestre", "ven-rom"],
        activities: [
          a(
            "roma-maletas",
            "12:15–13:15",
            "Termini → alojamiento y maletas",
            "Metro A hasta Cipro. Si no hay custodia, usar consigna cerca del Vaticano."
          ),
          rest("roma-almuerzo", "13:15–14:15", "Almuerzo sencillo."),
          a(
            "sanpedro",
            "14:30–17:00",
            "Plaza y Basílica de San Pedro",
            "Tiempo para seguridad y recorrido interior. Sin Museos Vaticanos."
          ),
          a(
            "santangelo",
            "17:00–18:00",
            "Castel Sant’Angelo por fuera y su puente",
            "Pasear por Via della Conciliazione hasta el río."
          ),
          a(
            "borgo",
            "18:30–20:00",
            "Cena en Borgo Pio",
            "Arlù es una opción para reservar. Si hay que recoger maletas de una consigna, hacerlo antes de regresar al hotel."
          ),
        ],
      },
      {
        date: "2026-09-17",
        title: "Entre el Foro y el Coliseo",
        hotelId: "roma",
        transferIds: [],
        activities: [
          a(
            "campidoglio",
            "09:00–10:00",
            "Piazza Venezia y Campidoglio",
            "Exteriores y vistas."
          ),
          a("foro-acceso", "10:00–10:30", "Acceso al Foro y controles"),
          {
            ...a(
              "foro",
              "10:30–14:00",
              "Foro Romano y Palatino",
              "Tres horas y media para Vía Sacra, templos, zona del Senado y miradores. Horario de visita propuesto con la entrada del conjunto."
            ),
            start: "10:30",
            end: "14:00",
          },
          rest("monti-comer", "14:00–15:30", "Almuerzo sentado en Monti."),
          rest(
            "roma-pausa",
            "15:30–16:30",
            "Tiempo libre sin otra visita obligatoria."
          ),
          a(
            "constantino",
            "16:30–17:15",
            "Exterior del Coliseo y Arco de Constantino"
          ),
          a("coliseo-acceso", "17:15", "Presentarse en la entrada del Coliseo"),
          a(
            "coliseo",
            "17:30–18:45",
            "Coliseo",
            "Entrada documentada a las 17:30; duración indicada de visita: 75 minutos.",
            "documentado"
          ),
          free("roma-noche", "Después de la visita"),
        ],
      },
      {
        date: "2026-09-18",
        title: "Plazas, fuentes y un hasta pronto",
        overnight: "Valencia · estancia familiar",
        transferIds: ["rom-vlc"],
        activities: [
          a(
            "roma-consigna",
            "08:30–09:30",
            "Salida y consigna",
            "Acordar salida antes de las 09:00 si es necesaria. Via della Vite 42 para taxi; Termini si eligen bus o tren."
          ),
          a("espana", "09:30–10:00", "Plaza de España"),
          a("trevi", "10:00–10:45", "Fontana di Trevi"),
          a(
            "ignazio",
            "11:00–11:30",
            "Iglesia de Sant’Ignazio",
            "Según disponibilidad de acceso."
          ),
          a(
            "pantheon",
            "11:45–12:30",
            "Panteón",
            "Entrada por concretar si desean visitar el interior."
          ),
          a("navona", "12:30–13:15", "Piazza Navona"),
          rest("roma-ultima-comida", "13:15–14:30", "Almuerzo y descanso."),
          a(
            "roma-recoger",
            "14:30–15:30",
            "Tiempo libre y recoger maletas",
            "Si eligen bus, estar listos en Termini sobre las 15:00 y reajustar el paseo."
          ),
          a(
            "fiumicino",
            "Sobre 16:00",
            "Salida hacia Fiumicino",
            "Hora orientativa para taxi; objetivo de llegada 17:00–17:15. Elegir un servicio anterior si viajan en bus."
          ),
        ],
      },
    ],
  },
  {
    id: "regreso",
    city: "Valencia y regreso",
    country: "España → Colombia",
    dates: "19–24 sep",
    accent: "gold",
    intro:
      "Días abiertos para disfrutar en familia, antes de poner rumbo a casa. El último tramo a Madrid sigue por decidir.",
    tips: [
      "Decidir entre viajar a Madrid el 23 y dormir allí o viajar el 24 temprano. No dar por garantizada la conexión tren–avión sin comprobar los horarios.",
    ],
    sourceIds: [],
    days: [
      ...[19, 20, 21, 22].map((n) => ({
        date: `2026-09-${n}`,
        title: "Valencia, sin prisa",
        overnight: "Valencia · estancia familiar",
        transferIds: [],
        activities: [free(`valencia-${n}`, "Todo el día")],
      })),
      {
        date: "2026-09-23",
        title: "Valencia o una noche en Madrid",
        overnight: "Valencia o Madrid · por decidir",
        transferIds: ["vlc-mad"],
        activities: [
          a(
            "madrid-opciones",
            "Por decidir",
            "Elegir cómo llegar a Madrid",
            "Tren hoy y noche en Madrid, o permanecer en Valencia y comprobar el tren temprano del día 24.",
            "pendiente"
          ),
          free("valencia-23", "Según la opción elegida"),
        ],
      },
      {
        date: "2026-09-24",
        title: "Rumbo a Cali",
        overnight: "Según el vuelo",
        transferIds: ["vlc-mad", "mad-clo"],
        activities: [
          a(
            "madrid-aeropuerto",
            "Antes del vuelo",
            "Traslado al aeropuerto de Madrid",
            "Desde el alojamiento en Madrid o desde la estación si viajan ese día. Terminal y margen por confirmar.",
            "pendiente"
          ),
        ],
      },
    ],
  },
]
export const days = stages.flatMap((s) => s.days)
export function formatDate(
  date: string,
  options: Intl.DateTimeFormatOptions = { day: "numeric", month: "short" }
) {
  return new Intl.DateTimeFormat("es-ES", {
    ...options,
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`))
}
