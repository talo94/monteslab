import type { Source } from "./types"
const checked = "2026-09-08"
export const sources: Record<string, Source> = {
  fatima: {
    label: "Santuario de Fátima · celebraciones",
    url: "https://www.fatima.pt/pt/news/santuario-inicia-horario-de-verao-2026",
    checked,
  },
  casas: {
    label: "Aljustrel · casas de los pastorcitos",
    url: "https://www.fatima.pt/pt/news/casas-dos-pastorinhos-em-aljustrel-com-novo-horario-de-visita-2018-12-24",
    checked,
  },
  lisboa: {
    label: "Visit Lisboa · Alfama",
    url: "https://www.visitlisboa.com/pt-pt/locais/alfama",
    checked,
  },
  flix: {
    label: "FlixBus · Lisboa–Fátima",
    url: "https://www.flixbus.pt/percursos-autocarros/lisboa-fatima",
    checked,
  },
  rede: {
    label: "Rede Expressos · buscar autobuses",
    url: "https://rede-expressos.pt/",
    checked,
  },
  paris: {
    label: "Île-de-France Mobilités · tarifas",
    url: "https://www.iledefrance-mobilites.fr/tarifs-titre-de-transport-en-commun-2026",
    checked,
  },
  taxiParis: {
    label: "Service Public · taxis de París",
    url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F22127",
    checked,
  },
  madeleine: {
    label: "La Madeleine · visita",
    url: "https://lamadeleineparis.fr/sanctuaire/",
    checked,
  },
  ratp: {
    label: "RATP · líneas y estado del servicio",
    url: "https://www.ratp.fr/vos-lignes",
    checked,
  },
  actv: {
    label: "ACTV · transporte en Venecia",
    url: "https://actv.avmspa.it/en/content/venice-urban-services-0",
    checked,
  },
  atvo: {
    label: "ATVO · aeropuerto–Piazzale Roma",
    url: "https://www.atvo.it/assets/bus_routes/035_01.02.26-.pdf",
    checked,
  },
  gondola: {
    label: "Venecia · tarifas de góndola",
    url: "https://www.comune.venezia.it/it/node/16768",
    checked,
  },
  trenitalia: {
    label: "Trenitalia · buscar trenes",
    url: "https://www.trenitalia.com/en.html",
    checked,
  },
  sanpedro: {
    label: "Basílica de San Pedro · visita",
    url: "https://www.basilicasanpietro.va/es/help/la-basilica",
    checked,
  },
  arlu: {
    label: "Arlù · restaurante en Borgo Pio",
    url: "https://www.turismoroma.it/it/accoglienza/arlu-s-pietro",
    checked,
  },
  consigna: {
    label: "Stow Your Bags · consignas de Roma",
    url: "https://www.stowyourbags.com/en/shop/rome/",
    checked,
  },
  pantheon: {
    label: "Panteón · entrada oficial",
    url: "https://direzionemuseiroma.cultura.gov.it/pantheon/",
    checked,
  },
  trevi: {
    label: "Fontana di Trevi · acceso",
    url: "https://fontanaditrevi.roma.it/",
    checked,
  },
  leonardo: {
    label: "Leonardo Express · tren a Fiumicino",
    url: "https://www.trenitalia.com/en/connections/leonardo-express.html",
    checked,
  },
  sit: {
    label: "SIT Bus Shuttle · autobús a Fiumicino",
    url: "https://www.sitbusshuttle.com/en/stops-and-timetables/",
    checked,
  },
  taxiRoma: {
    label: "Aeropuerto de Roma · taxis",
    url: "https://www.adr.it/web/aeroporti-di-roma-en/pax-fco-taxi",
    checked,
  },
  atac: {
    label: "ATAC · transporte de Roma",
    url: "https://www.atac.roma.it/biglietti-e-abbonamenti",
    checked,
  },
}
