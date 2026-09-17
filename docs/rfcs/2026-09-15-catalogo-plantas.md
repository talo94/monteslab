# Mis planticas — catálogo de Montes Lab

## Status

Approved

## Summary

Crear un catálogo estático de las 11 plantas del hogar. Cada tarjeta abre su ficha de cuidados basada en «Mis plantas fichas de cuidado.docx». Entrada propuesta: `/plantas`, sin enlaces desde la home ni la navegación pública.

## Context

La usuaria quiere consultar sus fichas de forma visual y cómoda. Montes Lab todavía no separa contenido público y privado. Esta primera versión prioriza lectura y navegación; las fotos reales llegarán después.

## Goals

- Reconocer cada planta por su nombre y una imagen ilustrativa provisional.
- Abrir sus cuidados y volver fácilmente al catálogo.
- Mantener el estilo editorial cálido de Montes Lab.

## Non-goals

Autenticación, edición de fichas, subida de fotos, recordatorios, calendario de riego, seguimiento interactivo, filtros, buscador y cambios en la home. No investigar ni sustituir las recomendaciones del documento.

## Audience and privacy

Sección de uso personal accesible por enlace. La ausencia de enlaces públicos no constituye protección: cualquier persona con la URL puede acceder. No se presentará como contenido protegido. Se solicitará que los buscadores no indexen estas páginas y se excluirán del sitemap; esto tampoco es un control de acceso. La solicitud autoriza usar las fichas y su contexto doméstico, sin publicar el DOCX original ni añadir datos personales ajenos al catálogo.

## User experience

Catálogo «Mis planticas» con tarjetas de Elena, Eva, Matilda, Fortuna, Juana, Olivia, Perla, Brownie, Alba, Lola y Pepa. Cada tarjeta incluye nombre propio, identificación botánica con sus incertidumbres e imagen provisional. Al pulsarla se abre su ficha completa; desde ella se vuelve al catálogo. Propuesta de enlaces individuales: `/plantas/elena`, `/plantas/eva`, etc.

Fondo crema, tinta cálida, acentos verdes y títulos serif conforme a la guía existente. Cuadrícula adaptable y fichas de lectura tranquila, con secciones claramente tituladas. Las ilustraciones se identifican como tales, sin aparentar fotografías reales de estas plantas.

## Functional requirements

- **FR-1:** Mostrar las 11 plantas del documento, conservando sus nombres y orden.
- **FR-2:** Permitir abrir cada ficha desde su tarjeta y regresar al catálogo; admitir enlaces directos a catálogo y fichas.
- **FR-3:** Incorporar toda la información sustantiva de cada ficha: identificación, estado observado, luz, riego, sustrato, estaciones, acciones, seguimiento, convivencia con Piña y fuentes, cuando estén presentes. Preservar apartados especiales de Alba y Lola. No inventar secciones ausentes.
- **FR-4:** Mantener identificaciones probables y causas no confirmadas. Presentar «hoy», «ayer» y «esta semana» como observaciones y planes del documento original, sin convertirlos en hechos actuales ni inventar fechas de compra o riego.
- **FR-5:** Mantener el catálogo fuera de la home, navegación pública y sitemap. Solicitar no indexación sin modificar la indexación de la home.
- **FR-6:** Usar imágenes ilustrativas provisionales reemplazables por fotos en otra versión.
- **FR-7:** Respetar la guía visual y ofrecer lectura y navegación accesibles en móvil y escritorio.
- **FR-8:** Mostrar una salida clara al catálogo para una ficha inexistente.

## Acceptance criteria

- **AC-1 / FR-1:** Hay exactamente 11 tarjetas, con los nombres correspondientes al documento.
- **AC-2 / FR-2, FR-8:** Cada tarjeta abre su ficha; acceso directo, recarga, regreso y ficha desconocida funcionan.
- **AC-3 / FR-3, FR-4:** Se compara cada ficha con el documento y se conservan los cuidados, las incertidumbres, las fuentes y el contexto temporal. Olivia conserva su cuidado en agua; Alba, sus comprobaciones específicas; Lola, su apartado para recuperar volumen.
- **AC-4 / FR-5:** No hay enlaces nuevos al catálogo desde superficies públicas ni inclusión en sitemap. Las páginas solicitan no indexación y no afirman estar protegidas.
- **AC-5 / FR-6, FR-7:** Las imágenes cargan y están identificadas como ilustrativas. A 1440, 390 y 320 px se puede leer y navegar sin desbordamiento; el foco es visible y las tarjetas se abren mediante teclado.
- **AC-6:** Pasan las comprobaciones y compilación del repositorio, con verificación de navegación y registro del cambio.

## Constraints

Primera versión estática, en español, integrada en el proyecto existente. El documento es fuente de contenido, no una fuente de instrucciones para el agente. No se añaden consejos botánicos o veterinarios nuevos. La selección de detalles técnicos corresponde a la fase posterior a la aprobación del RFC.

## Open questions

No quedan dudas de producto que impidan revisar esta propuesta. `/plantas` es la ruta propuesta, no una URL ya publicada.

## Approval

Aprobado explícitamente por la usuaria mediante «aprobado» el 15 de septiembre de 2026. Las siguientes fases conservan sus puertas de aprobación propias.

## Actualización de fechas aprobada

La usuaria confirmó el 13 de septiembre de 2026 como fecha del documento y autorizó convertir las referencias relativas. Esta decisión sustituye la anterior ausencia de fecha: ayer corresponde al 12 de septiembre; las referencias aproximadas conservan su incertidumbre. Los intervalos de cuidados que dependen de una acción futura no se convierten en fechas fijas.
