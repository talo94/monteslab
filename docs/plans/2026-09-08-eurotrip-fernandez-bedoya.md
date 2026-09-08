# Plan: Eurotrip familia Fernández Bedoya

## Status

Completed

## Inputs

- [RFC aprobado](../rfcs/2026-09-08-eurotrip-fernandez-bedoya.md).
- [Diseño técnico aprobado](../prework/2026-09-08-eurotrip-fernandez-bedoya.md).
- Alcance: guía pública independiente en español, sin compras, publicación remota ni cambios a la guía anterior.

## TASK-1 · Modelo y contenido del viaje

- Estado: completada.
- Resultado: fuente tipada y única para las 19 fechas, etapas, actividades, seis hoteles, traslados, precios y fuentes.
- Archivos: nueva carpeta `src/pages/viajes/2026/EurotripFernandezBedoya/data/`, con `types.ts`, `itinerary.ts`, `hotels.ts`, `transfers.ts` y `sources.ts`.
- Dependencias: ninguna.
- Trazabilidad: AC-1–AC-5, AC-8; TD-2–TD-7.
- Trabajo: transcribir el itinerario aprobado; enlazar cada día con sus transportes y alojamiento por ID; conservar tiempos libres y alternativas. Incluir Ryanair a las 21:20 el 8 y únicamente «Visita y atardecer en la Torre Eiffel» a las 19:30 el 14. Mantener estados y procedencia, precios por persona o por tres, fuentes y fechas de consulta. No copiar los PDF ni sus identificadores.
- Verificación y documentación: revisar los datos contra el RFC y la conversación; preparar casos de prueba para TASK-4. Documentar cualquier dato sin confirmar en el contenido correspondiente.
- Finalización: cada fecha del 6 al 24 está representada una vez, los seis hoteles tienen búsquedas Google Maps correctas y no hay detalles excluidos ni horarios inventados.

## TASK-2 · Página y presentación adaptable

- Estado: completada.
- Resultado: guía completa con portada, resumen, etapas, días, hoteles y traslados; navegación nativa por anclas y regreso a Viajes.
- Archivos: `src/pages/viajes/2026/EurotripFernandezBedoya/EurotripFernandezBedoya.tsx`, componentes locales y `eurotrip-fernandez-bedoya.css` cuando haga falta.
- Dependencias: TASK-1.
- Trazabilidad: AC-1–AC-5, AC-7, AC-8; TD-2–TD-8.
- Trabajo: reutilizar `TripPageLayout` y tokens; usar encabezados semánticos, enlaces descriptivos, foco visible, estados textuales, tarjetas adaptables y margen de desplazamiento para anclas. Mostrar todo el itinerario sin pestañas, mapa embebido ni seguimiento de ubicación. Definir título de documento propio y restaurarlo al salir.
- Verificación y documentación: revisar legibilidad de horas, referencias de transporte y distinción de planes; documentar estructura final en TASK-6. Verificación de navegador en TASK-5.
- Finalización: página renderiza todos los datos sin duplicar horarios de transporte; es consultable con teclado y no revela información excluida en ningún atributo o dato del cliente.

## TASK-3 · Rutas y acceso desde Viajes

- Estado: completada.
- Resultado: nueva guía accesible desde el índice y por URL directa.
- Archivos: `src/routes/routes.ts`, `src/App.tsx`, `src/pages/Viajes.tsx`.
- Dependencias: TASK-2.
- Trazabilidad: AC-6, AC-7; TD-1, TD-8.
- Trabajo: añadir `/viajes/2026/eurotrip-fernandez-bedoya`; registrar el componente y su navegación propia. Añadir al índice enlaces diferenciados a las dos guías con fechas y destinos, conservando la guía anterior.
- Verificación y documentación: probar apertura directa, entrada desde índice y regreso, además de la ruta anterior; registrar ruta en arquitectura durante TASK-6.
- Finalización: ambos viajes se abren correctamente desde Viajes y la nueva guía permite volver al índice.

## TASK-4 · Pruebas automatizadas de integridad

- Estado: completada.
- Resultado: pruebas de dominio ejecutadas por el control de calidad existente.
- Archivos: `package.json`, archivo de bloqueo existente y `src/pages/viajes/2026/EurotripFernandezBedoya/data/itinerary.test.ts`; configuración mínima de Vitest solo si es necesaria.
- Dependencias: TASK-1, TASK-3.
- Trazabilidad: AC-1–AC-6, AC-8; TD-3–TD-7, TD-9.
- Trabajo: instalar versión de Vitest compatible con Node/Vite del repositorio; añadir `test` e integrarlo en `check`. Comprobar continuidad y unicidad de fechas, referencias válidas, hoteles/mapas, horarios críticos, bloque Foro–Palatino de al menos tres horas con pausa posterior, regreso final pendiente, unidades y fuentes de costes. Comprobar denominación discreta de Eiffel en el contenido público, sin introducir el detalle privado en mensajes de prueba.
- Verificación y documentación: ejecutar pruebas y comprobar que fallan ante una alteración temporal de un horario crítico o una referencia inválida; revertir esa alteración. Documentar el comando nuevo en TASK-6.
- Finalización: pruebas pasan y cubren errores de contenido relevantes; `check` las ejecuta sin cambiar la política de despliegue.

## TASK-5 · Revisión en navegador, accesibilidad y privacidad

- Estado: completada.
- Resultado: navegación y lectura verificadas en móvil y escritorio, con revisión del contenido enviado al cliente.
- Archivos o subsistema: nueva guía, índice, rutas y salida de producción; herramientas de navegador disponibles.
- Dependencias: TASK-2, TASK-3, TASK-4.
- Trazabilidad: AC-2, AC-3, AC-6–AC-8; TD-1, TD-5, TD-6, TD-8.
- Trabajo: revisar a 390 y 1440 px, además de ajuste a 320 px; comprobar anclas, título, recorrido de teclado, foco visible, etiquetas de enlaces y ausencia de desbordamiento horizontal. Verificar que ningún encabezado queda tapado. Revisar integridad de URLs de los seis hoteles. Confirmar que código, DOM y recursos de producción no contienen documentos originales, datos privados o detalles excluidos de Eiffel.
- Verificación y documentación: guardar resultados y limitaciones reales en TASK-6; corregir defectos dentro del alcance y repetir solo comprobaciones afectadas. Las pruebas del navegador no confirman tarifas o disponibilidad real de proveedores.
- Finalización: flujos índice–guía–índice y guía anterior funcionan; no hay errores de consola propios de la página, desbordamiento ni filtraciones detectadas.

## TASK-6 · Documentación y entrega verificada

- Estado: completada.
- Resultado: trabajo completo con registro durable y controles aprobados.
- Archivos: `docs/changes/2026-09-08-eurotrip-fernandez-bedoya.md`, `docs/architecture.md`, este plan y documentación de comandos relevante.
- Dependencias: TASK-1–TASK-5.
- Trazabilidad: AC-1–AC-8; TD-1–TD-9.
- Trabajo: registrar resumen, enlaces a RFC/pre-work/plan, decisiones finales, verificaciones realizadas, datos pendientes y limitaciones. Documentar nueva ruta, modelo de contenido y comando de pruebas. Marcar tareas completadas únicamente con evidencia.
- Verificación: ejecutar `npm run check` y `npm run build` sobre el estado final; revisar diff y estado Git sin incluir archivos ajenos ni generados. Mostrar la página en el navegador local de Codex y comunicar resultado y pendientes.
- Finalización: controles pasan, registro de cambios existe y la usuaria dispone de una página local revisable. No hacer commit, PR ni despliegue en este paso. Como recomendación futura, mantener cambios en un commit enfocado `feat:` cuando se autorice.

## Traceability

| Criterio                             | Tareas                                 |
| ------------------------------------ | -------------------------------------- |
| AC-1 · Días y actividades            | TASK-1, TASK-2, TASK-4, TASK-6         |
| AC-2 · Hoteles y mapas               | TASK-1, TASK-2, TASK-4, TASK-5, TASK-6 |
| AC-3 · Estados y pendientes          | TASK-1, TASK-2, TASK-4, TASK-5, TASK-6 |
| AC-4 · Horarios y descansos críticos | TASK-1, TASK-2, TASK-4, TASK-6         |
| AC-5 · Transportes y precios         | TASK-1, TASK-2, TASK-4, TASK-6         |
| AC-6 · Navegación y regresión        | TASK-3, TASK-4, TASK-5, TASK-6         |
| AC-7 · Adaptación y accesibilidad    | TASK-2, TASK-3, TASK-5, TASK-6         |
| AC-8 · Privacidad y calidad          | TASK-1, TASK-2, TASK-4, TASK-5, TASK-6 |

## Approval

RFC y diseño técnico aprobados. Plan aprobado explícitamente mediante «perfecto, continuemos». Implementación completada y verificada. La usuaria autorizó posteriormente crear el PR.
