import type { HeroConfig } from "@/components/trip"

export const eurotripHero: HeroConfig = {
  title: "Eurotrip 2026",
  subtitle: "Guía aesthetic · Valencia, Lisboa, Fátima, París, Lourdes y Roma",
  eyebrow: "Primavera 2026 · plan familiar",
  description:
    "Una ruta que llevábamos años imaginando en familia: mi papá, mi mamá, mi hermana y yo. Ahora la recorremos juntas, con el mismo deseo de antes, sabiendo que quien ya no camina a nuestro lado es quien, en el fondo, la encendió.",
  primaryCta: { href: "#overview", label: "Ver visión general" },
  secondaryCta: { href: "#cities", label: "Abrir itinerarios" },
  kpis: [
    { value: "6", label: "destinos del viaje" },
    { value: "20", label: "días planeados" },
    { value: "5", label: "alojamientos principales" },
    { value: "∞", label: "momentos memorables" },
  ],
  postcards: [
    {
      id: "valencia",
      gradient: "valencia",
      cityLabel: "Inicio",
      title: "Valencia",
      descriptionParts: [
        { text: "Casa, Catedral, Agua de Valencia, Playa, " },
        { text: "Ciudad de las Artes", pendingLink: true },
      ],
    },
    {
      id: "lisboa",
      gradient: "lisboa",
      cityLabel: "Portugal",
      title: "Lisboa + Fátima",
      descriptionParts: [
        { text: "centro histórico, " },
        { text: "Santuario", pendingLink: true },
        { text: " y velas" },
      ],
    },
    {
      id: "paris",
      gradient: "paris",
      cityLabel: "Francia",
      title: "París",
      descriptionParts: [{ text: "Torre Eiffel, Notre-Dame, Versalles, " }],
    },
    {
      id: "lourdes",
      gradient: "lourdes",
      cityLabel: "Espiritual",
      title: "Lourdes",
      descriptionParts: [{ text: "Gruta, Procesiones, Bernadette" }],
    },
    {
      id: "rome",
      gradient: "rome",
      cityLabel: "Gran cierre",
      title: "Roma",
      descriptionParts: [
        { text: "Vaticano, " },
        { text: "Pantheon", pendingLink: true },
        { text: ", " },
        { text: "Coliseo", pendingLink: true },
        { text: ", " },
        { text: "Asís", pendingLink: true },
      ],
      wide: true,
    },
  ],
}

export const topNav = [
  { id: "overview", label: "Resumen" },
  { id: "cities", label: "Ciudades" },
  { id: "notes", label: "Notas útiles" },
] as const
