# Diseño técnico: Eurotrip familia Fernández Bedoya

## Status

Approved

## RFC

[RFC aprobado](../rfcs/2026-09-08-eurotrip-fernandez-bedoya.md), incluidos los ajustes de Ryanair y el texto discreto de Eiffel.

## Current state

React 19, TypeScript, Vite y React Router. Las rutas se declaran en `src/routes/routes.ts` y se registran en `src/App.tsx`. El índice `src/pages/Viajes.tsx` solo contiene un título. La guía anterior vive en `src/pages/viajes/2026/EurotripFamiliar/` y utiliza componentes de `src/components/trip/`.

Los tipos actuales requieren subtotales, presupuestos y una lista cerrada de ciudades que no incluye Venecia. No representan bien la procedencia de horarios ni los tramos pendientes. `TripPageLayout` sí es reutilizable sin cambios. Los tokens existentes permiten una guía de fondo crema con acentos sobrios y tipografía del sistema. No hay archivos de pruebas ni script de test; `npm run check` ejecuta formato, lint y TypeScript, y `npm run build` añade compilación de producción.

## Proposed design

Página independiente en `src/pages/viajes/2026/EurotripFernandezBedoya/` y URL `/viajes/2026/eurotrip-fernandez-bedoya`. Portada editorial con nombre, fechas y recorrido, seguida de resumen, acceso por ciudades, itinerario completo, hoteles y traslados. Navegación mediante anclas nativas: todo el contenido estará disponible en el documento, sin pestañas que oculten días.

El itinerario será cronológico, con fechas absolutas y bloques por etapa: Valencia inicial, Lisboa, Fátima, Lisboa de regreso, París, Venecia, Roma y regreso Valencia/Madrid. Los enlaces de ciudades permitirán saltar a sus etapas; Lisboa y Valencia conservarán sus diferentes estancias. Tarjetas de hoteles y transportes usarán una columna en móvil y rejilla en escritorio. Las comparaciones cortas se mostrarán en tarjetas para evitar tablas anchas.

## Affected areas

- Nueva carpeta de la guía: página, componentes específicos, estilos locales y datos tipados.
- `src/routes/routes.ts`: nueva constante de ruta.
- `src/App.tsx`: registro de ruta y ocultación de navbar solo para esta guía, que tendrá regreso propio a Viajes.
- `src/pages/Viajes.tsx`: enlaces a ambas guías con etiquetas diferenciadas.
- Pruebas de integridad de datos y comprobación de navegación en navegador.
- Registro de cambios y actualización breve de arquitectura al implementar.

## Decisions

- **TD-1 / FR-1, FR-10:** Ruta independiente y enlace desde Viajes; la guía anterior no cambia ni comparte sus datos con la nueva.
- **TD-2 / FR-1, FR-2, FR-6:** Itinerario completo visible y anclas por etapa. Sin estado persistente, filtros, cookies, geolocalización ni inferencias de «dónde están ahora».
- **TD-3 / FR-3, FR-4, FR-5, FR-7:** Datos propios en módulos TypeScript. Tipos para etapa, día, actividad, hotel, traslado y fuente. IDs estables y fechas ISO; etiquetas de hora local explícitas. Actividades con título, hora o franja, notas y estado: documentado, plan o pendiente. Los horarios aportados por la usuaria se distinguen de billetes revisados en su procedencia, sin exponer lenguaje interno innecesario en la interfaz.
- **TD-4 / FR-4, FR-8:** Los trayectos principales constituyen una fuente de datos única, referenciada desde los días y el resumen. Valencia–Lisboa del 8 tiene salida 21:20, operador Ryanair y llegada desconocida. Los autobuses y regionales sugeridos nunca reciben número de servicio ni hora de salida confirmada por inferencia.
- **TD-5 / FR-7:** El contenido de Eiffel será exclusivamente «Visita y atardecer en la Torre Eiffel», a las 19:30. No almacenar detalles de acceso en los datos de la página, comentarios, atributos, metadatos, enlaces, presupuestos ni recursos públicos. No añadir etiquetas como «sorpresa» o pendientes que la revelen.
- **TD-6 / FR-3:** Generar enlaces Google Maps de búsqueda mediante `https://www.google.com/maps/search/?api=1&query=...`, con nombre y dirección del establecimiento codificados. Solo los seis alojamientos turísticos tendrán mapa. Sin iframes ni SDK: no son necesarios para el requisito y evitan carga externa al abrir la guía.
- **TD-7 / FR-9:** Cada coste identifica moneda EUR, base por persona o por tres viajeros y si es tarifa publicada o estimación. Fuentes externas con fecha de consulta 2026-09-08. Sin suma global de reservas, visitas opcionales y precios desconocidos. No extrapolar Uber desde el taxi.
- **TD-8 / AC-7:** Reutilizar `TripPageLayout` y tokens. Componentes locales para días y traslados, sin ampliar los tipos de la guía anterior. Encabezados semánticos, enlace para saltar al contenido, foco visible, navegación adaptable, `scroll-margin` para anclas y ausencia de movimiento indispensable. No simular tabs con enlaces ni depender solo del color para estados.
- **TD-9 / AC-8:** Añadir el mínimo arnés de pruebas con Vitest para importar directamente los módulos TypeScript. Casos de dominio: 19 fechas consecutivas, referencias válidas, seis hoteles y sus URLs, horarios aprobados, alternativas finales pendientes y denominaciones públicas discretas. Añadir script `test` e integrarlo en `check` para que lo ejecute CI sin modificar el flujo de despliegue.

## Alternatives considered

- Clonar la guía anterior: descartado porque fuerza presupuestos y pestañas innecesarios y arrastra contenido de otro viaje.
- Cambiar todos los tipos y componentes compartidos: descartado por riesgo y alcance; solo se reutilizan primitivas compatibles.
- Pestañas por ciudad: ahorran espacio visible, pero complican búsqueda, accesibilidad y consulta de etapas repetidas; se prefieren anclas.
- Mapas embebidos y API de rutas: más carga y dependencias para una necesidad cubierta por enlaces.
- Backend o CMS: no se necesita edición remota ni información en vivo.
- Pruebas basadas en texto del archivo fuente: no verifican el modelo importado; se prefiere un arnés pequeño compatible con TypeScript.

## Data and privacy

Transcribir únicamente contenido autorizado; no copiar archivos de Downloads ni documentos personales del repositorio. Sin códigos de reserva, PIN, datos individuales de pasajeros, contacto privado ni enlaces autenticados. La estancia familiar se limita a Valencia. El título de documento identifica la guía, sin localización actual.

La futura revisión incluirá el código nuevo y la salida de producción para detectar filtraciones de datos excluidos o detalles de Eiffel. Los PDF no serán recursos de la web. Los enlaces externos usan etiquetas comprensibles y `rel="noreferrer"` si abren otra pestaña.

## Testing strategy

- Pruebas de integridad del contenido y de las referencias entre días, hoteles y traslados.
- Aserciones específicas de Ryanair 21:20, Fátima 19:15/21:30, título público de Eiffel 19:30, Mestre 08:34 y Coliseo 17:30 con bloque de Foro–Palatino de al menos tres horas y descanso previo.
- Comprobar que los precios de comparación indican su base y que el vuelo de Lisboa–París sigue pendiente.
- Navegador: enlace desde Viajes, carga de URL directa, vuelta al índice, anclas por etapa, título, foco y navegación por teclado. Revisar la guía anterior como regresión de rutas.
- Verificación visual en móvil de 390 px y escritorio de 1440 px, sin desbordamiento ni contenido tapado por navegación; examinar también ajuste a 320 px.
- Ejecutar `npm run check` y `npm run build`; registrar comandos y resultados reales. Los tiempos reales, disponibilidad de billetes, precios variables y llegada de vehículos no se pueden verificar con pruebas del sitio.

## Delivery and rollback

Implementar únicamente después del plan aprobado, manteniendo aislados los cambios de esta guía. No hacer commit, PR o despliegue sin la autorización correspondiente. En caso de retirada, quitar su enlace del índice y su registro de ruta, y revertir únicamente sus archivos y cambios asociados. La guía anterior permanece intacta. No hay migraciones de datos ni servicios externos que revertir.

## Risks

- El vuelo del 12 sigue sin aeropuerto ni llegada: no garantizar la conexión con Versalles.
- Maletas anticipadas, servicio regional a Mestre y tren final siguen pendientes; conservar las advertencias útiles.
- Tarifas, celebraciones y horarios pueden cambiar: mostrar fecha de consulta y fuentes, sin prometer actualización automática.
- Día de París extenso antes de vuelo temprano: conservar pausas y visitas opcionales.
- Preservar los documentos ajenos no versionados de `docs/letras/` y el RFC de portada existente.

## Open questions

No quedan decisiones de producto bloqueantes. Confirmaciones de viaje pendientes se representan como datos incompletos, sin retrasar la guía. La versión compatible del arnés se resolverá contra Node/Vite instalados durante la implementación.

## Approval

RFC aprobado por la usuaria con sus dos ajustes incorporados. Diseño técnico aprobado en la conversación mediante «perfecto, implementemos esto». El plan fue aprobado posteriormente y la implementación está completada.
