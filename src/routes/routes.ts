export const routes = {
  plantas: "/plantas",
  planta: "/plantas/:slug",
  home: "/",
  homeEn: "/en",
  proyectos: "/proyectos",
  viajes: "/viajes",
  ideas: "/ideas",
  giras: "/giras",
  grecia2026: "/giras/2026/grecia",
  grecia2026Letras: "/giras/2026/grecia/letras",
  eurotripFernandezBedoya2026: "/viajes/2026/eurotrip-fernandez-bedoya",
  eurotripFamiliar2026: "/viajes/2026/eurotrip-familiar",
  aussieGirl: "/ideas/aussie-girl",
} as const

export const isPlantPath = (pathname: string) =>
  pathname === routes.plantas || pathname.startsWith(`${routes.plantas}/`)
