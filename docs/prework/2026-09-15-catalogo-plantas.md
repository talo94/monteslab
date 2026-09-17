# Diseño técnico — Mis planticas

## Status

Approved

## RFC

RFC `docs/rfcs/2026-09-15-catalogo-plantas.md`, aprobado explícitamente mediante «aprobado» el 15 de septiembre de 2026.

## Current state

Montes Lab usa React 19, TypeScript, React Router y Vite. Las rutas están centralizadas en `src/routes/routes.ts` y registradas en `src/App.tsx`. El navbar se oculta para rutas concretas, por lo que las fichas necesitarán una comprobación de la sección completa. Hay Vitest y controles de formato, lint, tipos y compilación.

Vercel sirve la aplicación mediante una reescritura general a `index.html`, con entradas independientes para la home española e inglesa. Ese HTML incluye metadatos comerciales que no corresponden al catálogo. El sitemap incluye solo ambas homes. No hay autenticación ni servidor de datos.

La guía visual pide Inria Serif; la utilidad compartida de viajes todavía usa Source Serif 4. Las dos fuentes ya están cargadas. Hay cambios previos de documentación y skills en el árbol de trabajo: deben conservarse.

## Proposed design

Sección independiente bajo `src/pages/plantas/`, con catálogo, detalle, datos tipados y estilos locales. Rutas `/plantas` y `/plantas/:slug`, con enlaces nativos de React Router y regreso al catálogo. El catálogo ofrece además regreso a Montes Lab. Las fichas son páginas de lectura, sin modal ni editor.

Cuadrícula de tres columnas en escritorio, dos en anchos intermedios y una en móvil. Nombre, identificación breve y representación ilustrativa por tarjeta. En el detalle, identidad seguida de secciones completas, preservando los apartados particulares de cada planta. Las imágenes se guardan localmente y se pueden sustituir sin cambiar las fichas.

## Affected areas

- `src/pages/plantas/`: catálogo, ficha, layout local, datos, tipos, pruebas y CSS nuevos.
- `src/routes/routes.ts` y `src/App.tsx`: rutas de la sección y navegación propia, sin enlaces entrantes públicos.
- `public/plantas/`: imágenes provisionales optimizadas.
- `plantas/index.html`, `vite.config.ts`, `vercel.json`: entrada estática y reglas específicas para catálogo y descendientes.
- `src/styles/design-tokens.css`: token semántico para verde profundo. El CSS de Fernández Bedoya podrá apuntar al token conservando exactamente su color.
- `docs/architecture.md` y `docs/changes/2026-09-15-catalogo-plantas.md`: documentación de rutas, límites de acceso y verificación.

## Decisions

- **TD-1 / FR-1, FR-2, FR-8:** Rutas estables por nombre: elena, eva, matilda, fortuna, juana, olivia, perla, brownie, alba, lola y pepa. Un slug desconocido muestra «Planta no encontrada» y regreso. La comprobación de sección debe usar `/plantas` exacto o prefijo `/plantas/`, sin ocultar navegación en rutas ajenas de nombre parecido.
- **TD-2 / FR-3, FR-4:** Modelo `Plant` con slug, número, nombre, identificación completa, identificación corta para tarjeta, imagen, secciones y fuentes. Cada sección mantiene título e identificador estables y bloques de párrafos o listas; no imponer campos que el documento no contiene. Conservar el texto sustantivo y la incertidumbre. Mostrar las observaciones y planes como procedentes de la ficha original, con fecha de observación desconocida, sin deducirla de la fecha de importación.
- **TD-3 / FR-1, FR-3:** Un módulo de datos sirve al catálogo y al detalle, con carga diferida de la sección para no incorporar las fichas al paquete inicial de la home. Esto reduce carga, pero no protege datos. No incluir el DOCX ni archivos temporales en el sitio.
- **TD-4 / FR-5:** Añadir entrada HTML propia para plantas, con `robots=noindex, nofollow`, título del catálogo y metadatos ajenos a la home. Reescrituras específicas antes de la regla general y cabecera `X-Robots-Tag: noindex, nofollow` solo para `/plantas` y descendientes. Mantener el sitemap sin cambios. No bloquear rastreo mediante `robots.txt`, ya que impediría leer la instrucción noindex. Ninguna de estas medidas restringe acceso.
- **TD-5 / FR-2, FR-5, FR-7:** La sección maneja título de documento y meta robots también en navegación cliente, restaurando el estado previo al salir. La entrada específica evita heredar datos comerciales en accesos directos. Los detalles reciben título según la planta al renderizar; no se generan tarjetas sociales por planta. No añadir navegación desde la home o navbar público.
- **TD-6 / FR-6:** Usar ilustraciones botánicas provisionales locales, coherentes entre sí y claramente etiquetadas. No presentarlas como evidencia de identificación ni estado observado. Generar recursos durante implementación, sin datos personales en sus instrucciones. Dimensiones reservadas y carga diferida fuera del primer viewport; cada registro almacena su ruta para facilitar reemplazo por foto. Si la generación no está disponible, usar iconos botánicos de Lucide ya instalado como marcador explícito, sin bloquear lectura.
- **TD-7 / FR-7:** Reutilizar los tokens crema, tinta y superficies; añadir verde profundo compartido sin cambiar el aspecto de consumidores existentes. Usar Inria Serif localmente, con Georgia de respaldo, sin alterar la tipografía global. Texto de 16 px, etiquetas legibles, foco visible, enlace de salto, encabezados ordenados y áreas de pulsación cómodas. Ficha con contenido visible y sin acordeones obligatorios. Gestionar desplazamiento y foco al cambiar de ficha para navegación accesible.
- **TD-8 / FR-1–FR-8:** Reutilizar Vitest para integridad de datos y resolución de slugs; navegador para recorridos reales, historial, foco, metadatos y adaptación. No añadir backend, almacenamiento local, CMS ni librerías de UI.

## Alternatives considered

- Modal de ficha: descartado porque dificulta enlace directo, historial y lectura extensa.
- Una sola página con las 11 fichas completas: hace más lenta la consulta visual solicitada.
- Solo meta robots insertado con JavaScript: insuficiente como única medida para accesos directos; se prefiere entrada HTML y cabecera HTTP.
- Login o contraseña: fuera del alcance aprobado de esta versión.
- CMS y base de datos: no aportan utilidad a esta primera versión estática.
- Reutilizar el layout de viaje entero: acoplaría la nueva sección a un dominio distinto; se reutilizan estilo y tokens.

## Data and privacy

Publicar solo contenido autorizado de las fichas, incluidas sus notas de convivencia con Piña. Las recomendaciones se transcriben como contenido del documento, sin añadir diagnósticos ni certificaciones de seguridad. Los enlaces de fuentes se conservan y se identifican por entidad o título. No añadir dirección del hogar, contacto privado ni localización precisa. Las imágenes no muestran el hogar real.

No ofrecer promesas de privacidad: las rutas y los recursos son accesibles sin sesión. La no indexación requiere comprobación de la respuesta desplegada y no garantiza retirada inmediata si una URL ya fue indexada.

## Testing strategy

- Integridad: exactamente 11 plantas, slugs únicos, nombres y orden esperados, secciones no vacías, referencias de imagen existentes y fuentes válidas. Casos específicos para cultivo en agua de Olivia, revisión de Alba y reproducción de Lola; identificaciones provisionales conservadas.
- Comparación editorial de las 11 fichas con el documento, incluido seguimiento, fuentes y expresiones temporales. No sustituir esta comparación por pruebas que solo repliquen el contenido.
- Navegador: catálogo → ficha → catálogo, enlaces directos y recarga, atrás/adelante, slug inexistente, teclado, título y meta robots. Comprobar que salir a la home restaura sus metadatos.
- Revisar 1440, 390 y 320 px y zoom 200 %, ausencia de desbordamiento, carga de ilustraciones y lectura de párrafos largos.
- Comprobar salida de producción: entrada plantas incluida y sin metadatos comerciales, ausencia de DOCX, sitemap sin rutas nuevas y home sin enlaces al catálogo. Verificar alcance de reescrituras y cabeceras; los encabezados de Vercel se comprueban en un despliegue cuando se autorice.
- Ejecutar `npm run check` y `npm run build`; registrar resultados reales y cualquier limitación de entorno.

## Delivery and rollback

La fase actual solo documenta decisiones. Tras aprobar este diseño se prepara el plan; la implementación comienza cuando ese plan esté aprobado. Entrega inicial local y revisable; conservar el flujo de PR y CI existente para publicación, sin desplegar por esta aprobación técnica.

No requiere migración. Para retirar la sección, revertir únicamente sus rutas, entrada HTML, reglas de Vercel, assets y código asociado; conservar cambios ajenos. Si un token compartido sigue en uso, mantenerlo o revertir simultáneamente su referencia preservando el color anterior.

## Risks

- Las rutas ocultas no son privadas: limitación aceptada en el RFC.
- Las observaciones del documento envejecen; no presentarlas como estado actual automático.
- La entrada Vite y las reglas Vercel deben cubrir la raíz y los detalles sin afectar las homes.
- Las ilustraciones no permiten confirmar especies dudosas; etiquetarlas como provisionales.
- Cambios previos del repositorio no pertenecen a esta entrega y deben preservarse.

## Open questions

No hay decisiones técnicas bloqueantes pendientes. La disponibilidad de generación de imágenes se resolverá durante implementación con la alternativa indicada en TD-6.

## Approval

RFC aprobado. Diseño técnico aprobado explícitamente por la usuaria mediante «aprobado» el 15 de septiembre de 2026. La implementación queda pendiente de la aprobación del plan.

## Actualización de fechas aprobada

La usuaria confirmó el 13 de septiembre de 2026 como fecha del documento y autorizó convertir las referencias relativas. Esta decisión sustituye la anterior ausencia de fecha: ayer corresponde al 12 de septiembre; las referencias aproximadas conservan su incertidumbre. Los intervalos de cuidados que dependen de una acción futura no se convierten en fechas fijas.
