export const giraInfo = {
  title: "Grecia 2026",
  subtitle: "Agrupación Iramawi",
  dates: "24 junio — 8 julio",
  location: "Grecia",
  airport: 'Aeropuerto de Atenas "Eleftherios Venizelos"',
  intro: "Agrupación Iramawi",
}

export const itinerary = [
  {
    type: "arrival",
    day: "24",
    month: "Jun",
    city: "Llegada a Atenas",
    date: "24 de junio de 2026",
    duration: "Mediodía",
    description:
      'Llegada al Aeropuerto de Atenas "Eleftherios Venizelos". Recogida y traslado.',
  },
  {
    type: "festival",
    day: "24",
    month: "Jun",
    city: "Volos",
    date: "24 de junio — 27 de junio, 2026",
    duration: "4 días",
    description: "Primer festival de la gira.",
  },
  {
    type: "festival",
    day: "28",
    month: "Jun",
    city: "Ioannina",
    date: "28 de junio — 1 de julio, 2026",
    duration: "4 días",
    description: "Segundo festival de la gira.",
  },
  {
    type: "festival",
    day: "02",
    month: "Jul",
    city: "Aigio — Patra",
    date: "2 de julio — 6 de julio, 2026",
    duration: "5 días",
    description: "Tercer festival de la gira.",
  },
  {
    type: "festival",
    day: "07",
    month: "Jul",
    city: "Monemvasi",
    date: "7 — 8 de julio, 2026",
    duration: "1 día",
    description: "Última ciudad de la gira.",
  },
  {
    type: "departure",
    day: "08",
    month: "Jul",
    city: "Regreso a Atenas",
    date: "8 de julio de 2026",
    duration: "Fin de gira",
    description: "Finalización de la gira y traslado al aeropuerto de Atenas.",
  },
]

export type SongAssignment = {
  role: string
  musician: string
}

export type SongDetail = {
  id: string
  name: string
  key?: string
  assignments: SongAssignment[]
}

export type MusicFrame = {
  id: string
  name: string
  shortDescription: string
  maxDuration: string
  uniform: string
  rider: string
  songs: SongDetail[]
}

export const musicFrames: MusicFrame[] = [
  {
    id: "tolima",
    name: "Cuadro Andino 1 Tolima",
    shortDescription: "Repertorio de raíz andina colombiana — región del Tolima.",
    maxDuration: "Pendiente por definir",
    uniform: "Pendiente por definir",
    rider: "Pendiente por definir",
    songs: [
      {
        id: "busca-ruidos",
        name: "Busca Ruidos",
        key: "G / Gm",
        assignments: [
          { role: "Guitarra", musician: "Cristian" },
          { role: "Tambora", musician: "Sebastian" },
          { role: "Bajo", musician: "Por definir" },
          { role: "Percusión menor", musician: "Talo" },
          { role: "Clarinete", musician: "Jose Luis" },
          { role: "Tiple", musician: "Orlando" },
        ],
      },
      {
        id: "ojo-al-toro",
        name: "Ojo al Toro",
        key: "Dm",
        assignments: [
          { role: "Guitarra", musician: "Cristian" },
          { role: "Tambora", musician: "Sebastian" },
          { role: "Bajo", musician: "Por definir" },
          { role: "Percusión menor", musician: "Talo" },
          { role: "Clarinete", musician: "Jose Luis" },
          { role: "Tiple", musician: "Orlando" },
        ],
      },
      {
        id: "como-para-desenguayabar",
        name: "Como para desenguayabar",
        assignments: [
          { role: "Guitarra", musician: "Cristian" },
          { role: "Tambora", musician: "Sebastian" },
          { role: "Bajo", musician: "Por definir" },
          { role: "Percusión menor", musician: "Melissa" },
          { role: "Clarinete", musician: "Jose Luis" },
          { role: "Tiple", musician: "Orlando" },
        ],
      },
      {
        id: "san-pedro-espinal",
        name: "San Pedro en el Espinal",
        key: "Gm",
        assignments: [
          { role: "Guitarra", musician: "Cristian" },
          { role: "Tambora", musician: "Sebastian" },
          { role: "Bajo", musician: "Por definir" },
          { role: "Percusión menor", musician: "Talo" },
          { role: "Clarinete", musician: "Jose Luis" },
          { role: "Tiple", musician: "Orlando" },
        ],
      },
      {
        id: "garzon-yo-soy-de-ti",
        name: "Garzón, yo soy de ti",
        key: "Am",
        assignments: [
          { role: "Guitarra", musician: "Cristian" },
          { role: "Tambora", musician: "Sebastian" },
          { role: "Bajo", musician: "Por definir" },
          { role: "Percusión menor", musician: "Talo" },
          { role: "Clarinete", musician: "Jose Luis" },
          { role: "Tiple", musician: "Orlando" },
        ],
      },
    ],
  },
  {
    id: "antioquia",
    name: "Cuadro Andino 2 Antioquia",
    shortDescription: "Repertorio inspirado en músicas tradicionales antioqueñas.",
    maxDuration: "Pendiente por definir",
    uniform: "Pendiente por definir",
    rider: "Pendiente por definir",
    songs: [
      {
        id: "conjuro",
        name: "Conjuro",
        key: "Am",
        assignments: [
          { role: "Voz", musician: "Orlando" },
          { role: "Tambora", musician: "Sebastian" },
          { role: "Bajo", musician: "Por definir" },
          { role: "Percusión menor", musician: "Jose Luis" },
          { role: "Percusión menor", musician: "Talo" },
          { role: "Tiple", musician: "Orlando" },
        ],
      },
      {
        id: "kikiriqui",
        name: "El Kikiriquí",
        key: "Gm",
        assignments: [
          { role: "Voz", musician: "Orlando" },
          { role: "Tambora", musician: "Sebastian" },
          { role: "Bajo", musician: "Por definir" },
          { role: "Percusión menor", musician: "Jose Luis" },
          { role: "Percusión menor", musician: "Talo" },
          { role: "Tiple", musician: "Orlando" },
        ],
      },
      {
        id: "negro-picante",
        name: "Negro Picante",
        key: "Am",
        assignments: [
          { role: "Voz", musician: "Orlando" },
          { role: "Tambora", musician: "Sebastian" },
          { role: "Bajo", musician: "Por definir" },
          { role: "Percusión menor", musician: "Jose Luis" },
          { role: "Percusión menor", musician: "Talo" },
          { role: "Tiple", musician: "Orlando" },
        ],
      },
      {
        id: "carrataplan",
        name: "Carrataplan",
        key: "Em",
        assignments: [
          { role: "Voz", musician: "Orlando" },
          { role: "Tambora", musician: "Sebastian" },
          { role: "Bajo", musician: "Por definir" },
          { role: "Percusión menor", musician: "Jose Luis" },
          { role: "Percusión menor", musician: "Talo" },
          { role: "Tiple", musician: "Orlando" },
        ],
      },
      {
        id: "pasillo-voliao",
        name: "Pasillo Voliao",
        key: "Am",
        assignments: [
          { role: "Voz", musician: "Por definir" },
          { role: "Tambora", musician: "Sebastian" },
          { role: "Bajo", musician: "Por definir" },
          { role: "Clarinete", musician: "Jose Luis" },
          { role: "Percusión menor", musician: "Talo" },
          { role: "Tiple", musician: "Orlando" },
        ],
      },
    ],
  },
  {
    id: "costa-atlantica",
    name: "Cuadro Costa Atlántica",
    shortDescription: "Repertorio con sonoridades del Caribe colombiano.",
    maxDuration: "Pendiente por definir",
    uniform: "Pendiente por definir",
    rider: "Pendiente por definir",
    songs: [
      {
        id: "mata-de-azar",
        name: "Mata de Azar de la India",
        key: "Bullerengue",
        assignments: [
          { role: "Voz", musician: "Talo" },
          { role: "Tambora", musician: "Sebastian" },
          { role: "Alegre", musician: "Por definir" },
          { role: "Llamador", musician: "Orlando" },
          { role: "Percusión menor (Coros)", musician: "Jose Luis" },
          { role: "Percusión menor (Coros)", musician: "Cristian" },
        ],
      },
      {
        id: "solo-cumbia-hombres",
        name: "Solo Cumbia de Hombres",
        assignments: [
          { role: "Voz", musician: "Talo" },
          { role: "Tambora", musician: "Sebastian" },
          { role: "Alegre", musician: "Por definir" },
          { role: "Llamador", musician: "Orlando" },
          { role: "Percusión menor (Coros)", musician: "Jose Luis" },
          { role: "Percusión menor (Coros)", musician: "Cristian" },
        ],
      },
      {
        id: "juliana",
        name: "Juliana",
        key: "Cumbia",
        assignments: [
          { role: "Voz", musician: "Talo" },
          { role: "Tambora", musician: "Sebastian" },
          { role: "Alegre", musician: "Por definir" },
          { role: "Llamador", musician: "Orlando" },
          { role: "Clarinete", musician: "Jose Luis" },
          { role: "Percusión menor (Coros)", musician: "Cristian" },
        ],
      },
      {
        id: "la-bruja",
        name: "La Bruja",
        assignments: [
          { role: "Voz", musician: "Talo" },
          { role: "Tambora", musician: "Sebastian" },
          { role: "Alegre", musician: "Por definir" },
          { role: "Llamador", musician: "Orlando" },
          { role: "Percusión menor (Coros)", musician: "Jose Luis" },
          { role: "Percusión menor (Coros)", musician: "Cristian" },
        ],
      },
      {
        id: "mapale",
        name: "Mapalé",
        key: "Espíritu del agua · Vamos a bailar un mapalé · Prende la vela",
        assignments: [
          { role: "Voz", musician: "Talo" },
          { role: "Tambora", musician: "Sebastian" },
          { role: "Alegre", musician: "Por definir" },
          { role: "Llamador", musician: "Orlando" },
          { role: "Clarinete", musician: "Jose Luis" },
          { role: "Percusión menor (Coros)", musician: "Cristian" },
        ],
      },
    ],
  },
  {
    id: "costa-pacifica",
    name: "Cuadro Costa Pacífica",
    shortDescription: "Repertorio con ritmos y sonoridades del Pacífico colombiano.",
    maxDuration: "Pendiente por definir",
    uniform: "Pendiente por definir",
    rider: "Pendiente por definir",
    songs: [
      {
        id: "el-birimbi",
        name: "El Birimbi",
        assignments: [
          { role: "Voz", musician: "Talo" },
          { role: "Tambora", musician: "Sebastian" },
          { role: "Redoblante", musician: "Por definir" },
          { role: "Platillos", musician: "Orlando" },
          { role: "Clarinete", musician: "Jose Luis" },
          { role: "Percusión menor", musician: "Cristian" },
        ],
      },
      {
        id: "manteca-de-iguana",
        name: "Manteca de Iguana",
        assignments: [
          { role: "Voz", musician: "Talo" },
          { role: "Tambora", musician: "Sebastian" },
          { role: "Redoblante", musician: "Por definir" },
          { role: "Platillos", musician: "Orlando" },
          { role: "Clarinete", musician: "Jose Luis" },
          { role: "Percusión menor", musician: "Cristian" },
        ],
      },
      {
        id: "tazquero",
        name: "Tazquero",
        assignments: [
          { role: "Voz", musician: "Talo" },
          { role: "Tambora", musician: "Sebastian" },
          { role: "Alegre", musician: "Por definir" },
          { role: "Percusión menor", musician: "Orlando" },
          { role: "Percusión menor", musician: "Jose Luis" },
          { role: "Percusión menor", musician: "Cristian" },
        ],
      },
    ],
  },
]

export const instruments = [
  "Tambora",
  "Llamador",
  "Clarinete",
  "Alegre",
  "Redoblante",
  "Platillos",
  "Bajo",
  "Guitarra",
  "Tiple",
  "Percusión menor",
  "Maracas",
]

export const musicians = [
  {
    name: "Talo, Natalia Montes",
    instruments: "Voz y percusión menor",
    initials: "TA",
  },
  {
    name: "Cristian Velandia",
    instruments: "Guitarra y percusión menor",
    initials: "CV",
  },
  {
    name: "Jose Luis Rodriguez",
    instruments: "Clarinete y percusión menor",
    initials: "JR",
  },
  {
    name: "Sebastian Rodríguez",
    instruments: "Tambora",
    initials: "SR",
  },
  {
    name: "Por confirmar",
    instruments: "Bajo, alegre y redoblante",
    initials: "—",
  },
]
