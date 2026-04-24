import type { UtilityNote } from "@/components/trip";

export const utilityNotes: UtilityNote[] = [
  {
    id: "1",
    title: "1. Cómo meter rutas exactas",
    body: "Lo ideal es crear un mapa en Google My Maps con una capa por ciudad y otra por día. Luego usa “Compartir” → “Insertar en mi sitio” y reemplaza cada iframe. Así tendrás puntos, colores, comentarios y rutas reales.",
  },
  {
    id: "2",
    title: "2. Qué pulir después",
    body: "Antes de cerrar la versión final, conviene añadir transporte exacto desde cada alojamiento, horarios de trenes/buses elegidos y links oficiales de compra para las entradas con franja horaria.",
  },
  {
    id: "3",
    title: "3. Qué ya quedó bien armado",
    body: "La estructura general del viaje, el orden lógico de las visitas, el reparto de energía y el balance entre lo turístico, lo espiritual y lo familiar.",
  },
];

export const footerNote =
  "Diseñado como guía visual de viaje. Datos y horarios sensibles revisados en fuentes oficiales antes de esta versión: Vaticano, Coliseo, Pantheon, Versalles, Lourdes, Fátima, Oceanogràfic y Catedral de Valencia.";
