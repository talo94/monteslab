# Mis planticas — catálogo estático

## Summary

Once plantas en `/plantas` con fichas completas, acceso por enlace y sin entrada desde la home. Estilo editorial de Montes Lab e ilustraciones provisionales.

## References

- [RFC](../rfcs/2026-09-15-catalogo-plantas.md)
- [Diseño técnico](../prework/2026-09-15-catalogo-plantas.md)
- [Plan](../plans/2026-09-15-catalogo-plantas.md)

## Implemented tasks

TASK-1–TASK-7: contenido, ilustraciones, interfaz, rutas, pruebas, revisión y documentación.

## Key decisions or deviations

- Texto completo del documento, con incertidumbres y contexto temporal conservados. «Fuentes consultadas» aparece como «Fuentes de la ficha».
- Atlas botánico generado compartido: descarga única aproximada de 2,2 MB. Las celdas se muestran sin modificar el original y cada planta admite una imagen independiente.
- Ilustraciones aproximadas, sin representar estado real ni confirmar identificación. Las flores y frutos ilustrados del cafeto no implican que Brownie los tenga.
- Regreso a home mediante navegación de documento para restaurar sus metadatos.
- Noindex no proporciona autenticación.
- El atlas vive en `public/images/plantas/` para evitar que las reescrituras de páginas bajo `/plantas/` intercepten sus imágenes.
- Agent-browser no estaba instalado; se usó Playwright con Chrome local sin añadir dependencias al proyecto.
- Comprobaciones estáticas de archivos fuera de las pruebas TypeScript para conservar su configuración de navegador.

## Tests and verification

- `npm run build` incluye `npm run check`: formato, ESLint, tipos y 18 pruebas en cuatro archivos aprobados.
- Integridad de once registros, slugs y fuentes; particularidades de Olivia, Alba y Lola e identificaciones provisionales.
- Comparación del texto extraído: todos los párrafos y URLs conservados; DOCX ausente de la salida.
- Chrome: once recorridos catálogo–ficha–catálogo; recarga, historial, slug inexistente y activación por teclado.
- Capturas a 1440, 390 y 320 px, sin desbordamiento; inspección visual de catálogo y ficha. Tamaño raíz al 200 % sin desbordamiento (no sustituye todas las configuraciones de zoom del navegador).
- Sin errores JavaScript en los recorridos. Home sin enlaces a plantas ni meta noindex.
- Entrada de producción con noindex, sin JSON-LD comercial; sitemap intacto.

## Documentation updated

Arquitectura, plan y este registro. RFC y diseño técnico conservan sus aprobaciones.

## Known limitations

Acceso sin sesión para quien tenga el enlace. Observaciones del 13 de septiembre de 2026, sin actualización automática. Ilustraciones provisionales. Cabeceras HTTP y reescrituras de Vercel pendientes de comprobar en un despliegue autorizado; entrega local únicamente.

## Follow-ups

Sustituir ilustraciones por fotos cuando se aporten. No se han hecho commits, PR ni despliegue.

## Corrección de fechas

Por confirmación de la usuaria, el documento se fecha el 13 de septiembre de 2026. Se convierten ayer, hoy, compras y observaciones anteriores y seguimientos anclados al documento. Se mantienen aproximaciones y los intervalos generales de cuidado; no se afirma que las acciones se hayan realizado.
