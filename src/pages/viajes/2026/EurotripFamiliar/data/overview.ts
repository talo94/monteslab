import type { FlightRow, HotelRow } from "@/components/trip"

export const keyFlights: FlightRow[] = [
  {
    date: "26 abr",
    title: "MAD · Valencia",
    detail: "Llegada!!",
    tag: "local",
  },
  {
    date: "28 abr",
    title: "Valencia → Lisboa",
    detail: "Vuelo 21:00 · llegada 22:20",
    tag: "confirmado",
  },
  {
    date: "2 may",
    title: "Lisboa → París",
    detail: "Vuelo 05:55 · llegada 09:25",
    tag: "confirmado",
  },
  {
    date: "5 may",
    title: "París → Lourdes",
    detail: "Vuelo 20:40 · llegada 22:00 aprox. · aeropuerto por confirmar",
    tag: "confirmado",
  },
  {
    date: "8 may",
    title: "Lourdes → Roma",
    detail: "Vuelo 09:20 · llegada 11:15",
    tag: "confirmado",
  },
  {
    date: "12 may",
    title: "Roma (Fiumicino) → Valencia",
    detail: "Vuelo 21:24 · llegada 23:35",
    tag: "confirmado",
  },
  {
    date: "16 may",
    title: "Valencia · salida mamá",
    detail: "Día de casa + aeropuerto",
    tag: "local",
  },
]

export const hotels: HotelRow[] = [
  {
    flag: "🇵🇹",
    name: "Goodnight Hostel",
    address: "Rua dos Correeiros 113, 2nd · Lisboa",
    mapUrl: "https://maps.app.goo.gl/822SDA1MYhA3NyXUA",
    tag: "28 abr y 1 may",
  },
  {
    flag: "🇵🇹",
    name: "Fátima",
    address: "R. de Nossa Sra. de Lourdes 8, 2495-422 Fátima, Portugal",
    mapUrl: "https://maps.app.goo.gl/ydhRznMUWUSZAW2z5",
    tag: "28-1 may",
  },
  {
    flag: "🇫🇷",
    name: "ibis budget Paris Porte de Vincennes",
    address: "2 avenue Leon Gaumont · París",
    mapUrl: "https://maps.app.goo.gl/qEaWXZHjkiob5SpG6",
    tag: "2–5 may",
  },
  {
    flag: "🇫🇷",
    name: "Central Studio Lourdes",
    address: "29 Rue du Bourg · Lourdes",
    mapUrl: "https://maps.app.goo.gl/TGzwayVyBEPCmZda8",
    tag: "5–8 may",
  },
  {
    flag: "🇮🇹",
    name: "TIBERIVS Home",
    address: "Via Portuense 153 · Roma",
    mapUrl: "https://maps.app.goo.gl/QoR1afu26EFoDjbJ9",
    tag: "8–12 may",
  },
]

export const totalBudget = {
  summary: "€300–555",
  description:
    "Incluye actividades, entradas y transporte local estimado. No incluye vuelos, hospedaje ni comidas, y puede subir o bajar según opciones como Oceanogràfic, free tours o actividades opcionales.",
}
