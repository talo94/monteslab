# Eurotrip familia Fernández Bedoya

## Status

Approved

## Summary

Crear una guía web en español del viaje familiar del 6 al 24 de septiembre de 2026. El itinerario está aprobado en la conversación; la página debe reunir resumen, ciudades, planificación diaria, hoteles con Google Maps y traslados para tres adultos.

## Context

La guía Eurotrip familiar existente sirve como referencia funcional, pero corresponde a otro viaje. La nueva página tendrá identidad propia y contenido independiente. El índice actual de Viajes todavía no ofrece navegación a las guías.

## Goals

- Consultar desde el móvil qué hacer cada día y cómo llegar.
- Encontrar rápidamente alojamiento, horarios importantes y tiempo libre.
- Distinguir reservas documentadas, planes aprobados y datos pendientes.
- Conservar las recomendaciones de transporte y sus precios orientativos para tres personas.

## Non-goals

- Comprar entradas, reservar transportes o contactar alojamientos.
- Subir los PDF originales o publicar sus localizadores.
- Autenticación, seguimiento de ubicación, precios en vivo o edición de reservas.
- Cambiar el itinerario aprobado o rediseñar las otras guías.
- Publicar un presupuesto total que incluya importes todavía desconocidos.

## Audience and privacy

Guía pública para la familia Fernández Bedoya, útil también como referencia de viaje. La petición de crear la web con el itinerario y hoteles enlazados expresa autorización para incluir el nombre familiar, las fechas planificadas y los establecimientos turísticos. No se mostrarán nombres individuales de pasajeros, contactos privados, dirección de Natalia, ubicación en tiempo real, documentos personales, códigos QR, PIN, localizadores ni enlaces privados de confirmación. Las estancias particulares se resumirán como «Valencia · estancia familiar», sin mapa ni dirección.

## User experience

Entrada desde Viajes a una portada con el nombre del viaje, fechas y secuencia de destinos. Navegación clara a resumen, ciudades, hoteles y traslados. Cada día tendrá bloques horarios legibles, actividad, indicación de tiempo libre y notas prácticas breves. Los hoteles mostrarán nombre, ciudad, fechas de estancia y enlace descriptivo a Google Maps. Los datos por confirmar tendrán una indicación textual visible. El aspecto puede diferir de la guía anterior; se priorizan lectura móvil, contraste y acceso rápido sobre elementos decorativos.

## Functional requirements

- **FR-1:** Mostrar resumen del 6 al 24 de septiembre de 2026: Valencia, Lisboa, Fátima, Lisboa, París, Venecia, Roma, Valencia y Madrid/Cali.
- **FR-2:** Mostrar todos los días, incluidos los días libres y las alternativas del tren Valencia–Madrid del 23 o 24, sin presentar ninguna como reservada.
- **FR-3:** Incorporar los seis alojamientos: Pensao Nova Goa (8–10), Nossa Senhora de Lurdes (10–11), Apartamento Pensamento 4 (11–12), ibis budget Paris Porte de Vincennes (12–15), B&B Exclusive (15–16) y Le Vie del Vaticano Guest House (16–18), cada uno con Google Maps.
- **FR-4:** Incluir los transportes documentados: Madrid–Valencia del 6, 19:30–21:24; Orly–Marco Polo del 15, 07:40–09:20; Mestre–Termini del 16, 08:34–12:04. Añadir Valencia–Lisboa del 8 a las 21:20 con Ryanair, Fiumicino–Valencia del 18 a las 19:40 y Madrid–Cali del 24 a las 12:00 como horarios aportados por la usuaria.
- **FR-5:** Mantener pendientes la llegada Valencia–Lisboa del 8, vuelo Lisboa–París del 12 aproximadamente a las 06:00 con aeropuerto y llegada desconocidos, llegada a Valencia del 18 y compra del tren final.
- **FR-6:** Incorporar las actividades aprobadas: Oceanogràfic y Ciudad de las Artes el 8; paseo por Lisboa el 9; Santuario y Aljustrel el 10, misa en español 19:15 y rosario con procesión eucarística 21:30; regreso a Lisboa el 11; Versalles el 12 a las 13:00; Disney el 13; Louvre exterior, Tullerías, Madeleine, Arco, Trocadéro y «Visita y atardecer en la Torre Eiffel» el 14 a las 19:30; Venecia el 15; San Pedro el 16; Foro–Palatino 10:30–14:00 y Coliseo 17:30 el 17; centro histórico de Roma y aeropuerto el 18.
- **FR-7:** Diferenciar las entradas documentadas a Versalles y Coliseo del plan de Disney, cuyo billete no se ha aportado. Para Eiffel usar únicamente «Visita y atardecer en la Torre Eiffel», como plan, sin revelar detalles de acceso ni incluir pistas sobre una sorpresa en textos, notas, accesibilidad, enlaces o datos enviados al navegador. La visita nocturna del sábado a Eiffel es opcional.
- **FR-8:** Mostrar recomendaciones prácticas: bus Lisboa–Fátima ida y vuelta con horarios sugeridos; aeropuerto de Venecia–Piazzale Roma–hotel; regional Santa Lucia–Mestre antes del tren reservado; consignas en Roma; alternativas bus/tren/taxi a Fiumicino y taxi/transporte público desde Orly o CDG. No inventar cotizaciones de Uber ni horarios de servicios no seleccionados.
- **FR-9:** Mostrar costes comparables con unidad explícita (persona o grupo de tres), fecha de consulta y enlaces oficiales. Conservar límites de la información: celebraciones sujetas a cambios, equipaje anticipado sin confirmar, reliquia de Madeleine sin exposición confirmada y transporte a Versalles condicionado al vuelo.
- **FR-10:** La guía será alcanzable desde el índice de Viajes y tendrá una ruta clara de regreso. La guía familiar anterior conservará su contenido.

## Acceptance criteria

- **AC-1 / FR-1, FR-2, FR-6:** Se pueden consultar los 19 días del 6 al 24 y distinguir actividades, descansos y tiempo libre.
- **AC-2 / FR-3:** Los seis hoteles tienen un enlace a Google Maps que identifica el establecimiento y la ciudad correctos.
- **AC-3 / FR-4, FR-5, FR-7:** Ninguna hora aproximada, alternativa de transporte ni entrada no aportada aparece como reserva documentada.
- **AC-4 / FR-6:** El 10 figura rosario y procesión eucarística; el 14 figura «Visita y atardecer en la Torre Eiffel» a las 19:30, sin detalles de acceso; el 17 incluye al menos tres horas de Foro–Palatino y pausa antes del Coliseo.
- **AC-5 / FR-8, FR-9:** Los traslados incluyen origen, destino, opción recomendada, alternativas relevantes y pendientes; los precios indican a cuántas personas corresponden.
- **AC-6 / FR-10:** Desde Viajes se abre la nueva guía y desde ella se puede volver; la anterior sigue funcionando.
- **AC-7:** Lectura y navegación utilizables en móvil y escritorio, enlaces y controles accesibles con teclado, título de documento específico y sin desbordamiento horizontal de la página.
- **AC-8:** No se incorporan documentos originales ni datos privados excluidos. Pasan las comprobaciones del repositorio y la compilación de producción.

## Constraints

El sitio es público y no tiene autenticación. Los horarios turísticos provienen del análisis de reservas y fuentes consultadas el 8 de septiembre de 2026; las propuestas deben conservar su carácter orientativo. La implementación respetará la arquitectura y los tokens existentes, sin imponer la apariencia de la guía anterior.

## Open questions

No hay preguntas de producto que impidan revisar este alcance. Los datos de viaje pendientes se mostrarán como tales y podrán completarse posteriormente; no bloquean la creación de la página.

## Approval

- Itinerario aprobado explícitamente por la usuaria en la conversación.
- Creación de la web solicitada el 8 de septiembre de 2026.
- RFC aprobado explícitamente por la usuaria, con dos ajustes incorporados: Valencia–Lisboa a las 21:20 con Ryanair y descripción discreta de la visita a Eiffel.
- Pre-work y plan aprobados posteriormente en la conversación; implementación completada.
