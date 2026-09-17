# Plan de implementación — Mis planticas

## Status

Completed

## Inputs

- [RFC aprobado](../rfcs/2026-09-15-catalogo-plantas.md).
- [Diseño técnico aprobado](../prework/2026-09-15-catalogo-plantas.md).
- Documento fuente: «Mis plantas fichas de cuidado.docx», proporcionado por la usuaria.
- Guía visual: `docs/design-guide.md` y skill `monteslab-visual-design`.

Alcance: catálogo estático de 11 plantas y sus fichas, accesible por enlace y sin acceso desde la home. Entrega local revisable. No incluye publicación, autenticación ni edición de contenido.

## TASK-1 · Contenido completo y modelo de fichas

- Estado: completada.
- Resultado: fuente única tipada de las 11 plantas, en su orden original.
- Archivos: nuevos `src/pages/plantas/types.ts` y `src/pages/plantas/data.ts`; extracción temporal del documento fuera del repositorio.
- Dependencias: ninguna.
- Trazabilidad: AC-1, AC-3, AC-6; TD-2, TD-3.
- Trabajo: definir identificación completa y breve, nombre, slug, número, imagen provisional, secciones y fuentes. Transcribir párrafos y listas sin perder información ni imponer secciones ausentes. Conservar dudas de identificación y causa, contexto temporal y notas de Piña. No deducir fechas de observación o compra.
- Verificación y documentación: comparar las 11 fichas con el documento, comprobando especialmente Olivia en agua, revisión de sustrato y raíces de Alba y recuperación de volumen de Lola. Documentar procedencia y fecha de observación desconocida en el modelo y texto visible correspondiente.
- Finalización: aparecen Elena, Eva, Matilda, Fortuna, Juana, Olivia, Perla, Brownie, Alba, Lola y Pepa; contenido y fuentes completos, sin incluir el DOCX en recursos públicos.

## TASK-2 · Ilustraciones provisionales

- Estado: completada.
- Resultado: representaciones coherentes y reemplazables por fotografías.
- Archivos: nuevos recursos en `public/plantas/` y referencias en `src/pages/plantas/data.ts`.
- Dependencias: TASK-1 para identificación y correspondencia.
- Trazabilidad: AC-1, AC-5; TD-6.
- Trabajo: generar ilustraciones botánicas con fondo y tratamiento compatibles con la guía visual, sin información personal en las instrucciones. Optimizar recursos, reservar dimensiones y definir etiquetas de imagen ilustrativa. Si la generación no está disponible, aplicar el marcador botánico Lucide aprobado y etiquetarlo claramente.
- Verificación y documentación: revisar que las representaciones no se presentan como fotos reales ni como confirmación de especies dudosas; comprobar correspondencia, carga y dimensiones. Registrar la alternativa utilizada y dejar las rutas de recursos en los datos para reemplazarlos después.
- Finalización: cada planta tiene una representación provisional que carga y no depende de URLs externas inventadas o inestables.

## TASK-3 · Catálogo y fichas con el estilo de Montes Lab

- Estado: completada.
- Resultado: catálogo visual y detalle de lectura completa, adaptables y utilizables con teclado.
- Archivos: nuevos `src/pages/plantas/PlantCatalog.tsx`, `PlantDetail.tsx`, `PlantLayout.tsx` y `plantas.css`; `src/styles/design-tokens.css`; referencia de acento en `src/pages/viajes/2026/EurotripFernandezBedoya/eurotrip-fernandez-bedoya.css`.
- Dependencias: TASK-1; TASK-2 antes de la verificación final de imágenes.
- Trazabilidad: AC-1, AC-2, AC-3, AC-5; TD-1, TD-2, TD-6, TD-7.
- Trabajo: cuadrícula de tres, dos o una columna según anchura; tarjetas con nombre, identificación e imagen. Ficha con todos sus apartados visibles, fuentes y regreso al catálogo. Catálogo con regreso a Montes Lab. Reutilizar tokens crema y tinta; extraer verde profundo a token compartido sin cambiar su color. Inria Serif local y cuerpo de 16 px. Añadir encabezados semánticos, salto al contenido, foco visible y gestión de foco/desplazamiento al navegar. Crear estado «Planta no encontrada» con salida clara.
- Verificación y documentación: comprobar lectura de contenido largo, orden de encabezados, contraste y navegación sin ratón. Documentar estructura final durante TASK-7.
- Finalización: las 11 fichas se representan desde los datos sin contenido duplicado ni controles simulados; no hay cambios visuales ajenos a la sección.

## TASK-4 · Rutas, entrada HTML y no indexación

- Estado: completada.
- Resultado: acceso directo y recarga de catálogo y fichas, sin enlaces públicos de entrada.
- Archivos: `src/routes/routes.ts`, `src/App.tsx`, nuevo `plantas/index.html`, `vite.config.ts`, `vercel.json` y manejo de metadatos en el layout de plantas.
- Dependencias: TASK-3.
- Trazabilidad: AC-2, AC-4, AC-6; TD-1, TD-3, TD-4, TD-5.
- Trabajo: registrar `/plantas` y `/plantas/:slug` con carga diferida y navegación propia, delimitando correctamente el prefijo. Añadir entrada Vite específica con metadatos del catálogo y meta robots. Configurar reescrituras antes de la regla general y cabecera `X-Robots-Tag` para raíz y descendientes. Manejar título de ficha y meta robots en navegación cliente y restaurarlos al salir. Mantener home, navbar público, sitemap y robots.txt sin enlaces o reglas nuevas para descubrir el catálogo.
- Verificación y documentación: revisar raíz, barra final, detalles, slug desconocido, recarga y regreso a ambas homes. Comprobar HTML generado, límites de las reglas y restauración de metadatos. Registrar que noindex no equivale a autenticación y que la cabecera real requiere verificar un despliegue posteriormente autorizado.
- Finalización: los accesos directos sirven la entrada correcta; la sección no hereda metadatos comerciales ni introduce noindex en la home.

## TASK-5 · Pruebas automatizadas de integridad y navegación

- Estado: completada.
- Resultado: cobertura de errores relevantes con Vitest ya instalado, sin añadir infraestructura innecesaria.
- Archivos: nuevos `src/pages/plantas/data.test.ts` y pruebas de resolución de rutas o helpers dentro de la misma sección cuando corresponda.
- Dependencias: TASK-1, TASK-4.
- Trazabilidad: AC-1, AC-2, AC-3, AC-4, AC-6; TD-1–TD-5, TD-8.
- Trabajo: verificar 11 registros, orden y slugs únicos, campos y secciones válidos, enlaces de fuentes, recursos existentes y resolución de planta desconocida. Cubrir diferencias de cuidado de Olivia, apartados especiales de Alba y Lola y conservación de identificaciones provisionales. Comprobar el límite exacto de sección para evitar afectar rutas de nombre parecido. Revisar configuración de noindex y entrada de producción con comprobaciones dirigidas.
- Verificación y documentación: ejecutar pruebas; evitar aserciones que solo copien todo el texto o dependan de detalles irrelevantes de implementación. Dejar los flujos de navegador y restauración de metadatos a TASK-6; registrar la cobertura y sus límites.
- Finalización: pruebas pasan y cubren integridad y errores de resolución relevantes; los controles existentes continúan funcionando.

## TASK-6 · Revisión de experiencia, accesibilidad y privacidad

- Estado: completada.
- Resultado: página local revisada a 1440, 390 y 320 px y con zoom al 200 %.
- Subsistema: navegador, rutas nuevas, recursos, salida de producción y regresión de homes.
- Dependencias: TASK-2–TASK-5.
- Trazabilidad: AC-1–AC-6; TD-1–TD-8.
- Trabajo: recorrer catálogo → cada ficha → catálogo; comprobar acceso directo, recarga, historial, slug inexistente y salida a home. Verificar teclado, foco, salto al contenido, imágenes y títulos. Revisar párrafos largos, ausencia de desplazamiento horizontal y controles cómodos. Confirmar metadatos después de navegar y ausencia de enlaces nuevos desde home/navbar/sitemap. Revisar que no se publica el DOCX ni información personal no autorizada, y que no se afirma que la sección está protegida.
- Verificación y documentación: inspección visual y comprobaciones de navegador; registrar resultados concretos, limitaciones y cualquier comprobación diferida de cabeceras en Vercel. Corregir fallos y repetir solo recorridos afectados. La revisión no incluye nuevas recomendaciones botánicas ni veterinarias.
- Finalización: catálogo y fichas son legibles y navegables, no hay errores propios de la sección ni contenido excluido en los recursos entregados.

## TASK-7 · Documentación, controles y entrega local

- Estado: completada.
- Resultado: implementación revisable con evidencia y documentación actualizada.
- Archivos: `docs/architecture.md`, nuevo `docs/changes/2026-09-15-catalogo-plantas.md` y este plan.
- Dependencias: TASK-1–TASK-6.
- Trazabilidad: AC-1–AC-6; TD-1–TD-8.
- Trabajo: documentar rutas, modelo estático, procedencia de contenido, reemplazo de ilustraciones y límite de privacidad. Registrar verificaciones y decisiones finales; marcar tareas completas solo con evidencia. Ejecutar `npm run check` y `npm run build` sobre el estado final; revisar diff y preservar cambios previos de la usuaria. Abrir la página local en Codex y entregar el enlace revisable.
- Verificación y documentación: guardar resultados reales de controles y revisión; si aparece un fallo previo ajeno, identificarlo sin atribuirlo a esta sección ni ocultarlo.
- Finalización: controles aprobados o bloqueos concretos informados, registro de cambios completo y catálogo local accesible. No realizar commit, PR ni despliegue en esta fase. Un futuro commit `feat:` centrado en el catálogo es una recomendación, no una acción automática.

## Traceability

| Criterio                                   | Tareas                                         |
| ------------------------------------------ | ---------------------------------------------- |
| AC-1 · Once plantas y nombres correctos    | TASK-1, TASK-2, TASK-3, TASK-5, TASK-6, TASK-7 |
| AC-2 · Fichas, acceso directo y regreso    | TASK-3, TASK-4, TASK-5, TASK-6, TASK-7         |
| AC-3 · Fidelidad al documento              | TASK-1, TASK-3, TASK-5, TASK-6, TASK-7         |
| AC-4 · Acceso por enlace y no indexación   | TASK-4, TASK-5, TASK-6, TASK-7                 |
| AC-5 · Ilustraciones, adaptación y teclado | TASK-2, TASK-3, TASK-6, TASK-7                 |
| AC-6 · Calidad y registro                  | TASK-1, TASK-4, TASK-5, TASK-6, TASK-7         |

## Approval

RFC y diseño técnico aprobados explícitamente. Plan aprobado explícitamente mediante «aprobado» el 15 de septiembre de 2026. Implementación completada y verificada localmente; evidencia en el registro de cambios.

## Actualización de fechas aprobada

La usuaria confirmó el 13 de septiembre de 2026 como fecha del documento y autorizó convertir las referencias relativas. Esta decisión sustituye la anterior ausencia de fecha: ayer corresponde al 12 de septiembre; las referencias aproximadas conservan su incertidumbre. Los intervalos de cuidados que dependen de una acción futura no se convierten en fechas fijas.
