# Home bilingüe de servicios digitales

## Summary

La entrada pública de Montes Lab presenta los servicios de diseño y desarrollo web de Natalia Montes en español e inglés. La nueva home conserva las rutas históricas sin enlazarlas, ofrece Web Esencial y Web Completa, explica las inclusiones y complementos, facilita contacto por formulario o WhatsApp e incorpora SEO internacional estático.

## Related documents

- [RFC](../rfcs/2026-09-02-dual-portfolio-home.md)
- [Pre-work](../prework/2026-09-02-dual-portfolio-home.md)
- [Plan](../plans/2026-09-02-dual-portfolio-home.md)

## Implemented tasks

- Contenido tipado y equivalente para español e inglés.
- Rutas `/` y `/en` con dos entradas HTML de Vite y metadatos específicos.
- Navegación comercial por anclas y selector explícito de idioma.
- Diseño responsive basado en la paleta aprobada, sin negro puro, azul ni bordes decorativos.
- Dos fotografías generadas para revisión de wireframes y responsive, optimizadas a WebP.
- Iconos Lucide importados individualmente.
- Formulario accesible preparado para un endpoint de Basin y WhatsApp con el número aprobado.
- Footer comercial, sitemap, robots y JSON-LD.
- Pruebas unitarias de contenido, rutas de idioma, anclas y WhatsApp añadidas y verificadas mediante el control compartido del repositorio.

## Key decisions and deviations

- La página «Quién soy» queda fuera de este incremento y no aparece como enlace inactivo.
- Español usa `/` y funciona como `x-default`; inglés usa `/en`. No hay redirección automática por idioma.
- Se usan dos HTML de entrada para entregar SEO por idioma sin migrar de framework.
- No se añadió una librería i18n: dos diccionarios tipados cubren el alcance actual.
- El formulario no simula un envío cuando falta `VITE_CONTACT_FORM_ENDPOINT`; muestra un mensaje y mantiene WhatsApp disponible.
- Basin no fue creado ni activado. No se desplegó preview ni producción.
- La implementación se realizó sin levantar el proyecto ni ejecutar controles desde Codex, por petición de Natalia. Antes del PR, Natalia completó la revisión manual y confirmó que `npm run check` y `npm run build` terminaron correctamente.
- La primera revisión manual pidió una escala más compacta. Un primer ajuste resultó demasiado sutil, por lo que la segunda iteración redujo de forma más marcada la altura y el título del hero, la imagen principal, los títulos secundarios, las fichas, las fotografías y la separación vertical entre bloques. También se aligeraron las etiquetas, campos y botón del formulario. Los enlaces «Saber más» del mockup no se implementaron porque no existe todavía un destino útil para ellos.
- La revisión del contacto confirmó que WhatsApp debe ser la acción principal por ser el canal más habitual. Se convirtió en un botón Olive de mayor presencia y el envío del formulario pasó a Clay. Los campos usan una superficie Linen más marcada, sin borde ni línea permanente; al navegar con teclado, una línea inferior Clay indica el foco sin envolver todo el campo.
- En el hero, WhatsApp aparece antes que el acceso al formulario. Ambos controles comparten ancho, altura y forma de píldora; WhatsApp conserva el relleno Olive como acción principal y «Cuéntame tu proyecto» usa un contorno Olive sobre fondo transparente.
- Todos los CTA usan forma de píldora, contenido centrado en ambos ejes y peso tipográfico 400. Los dos CTA del hero conservan el mismo ancho, reducido a 17 rem para evitar que dominen la portada.
- El botón «Enviar consulta» usa texto Cream sobre Clay. En Complementos, el título usa Cream y la descripción Linen sobre la superficie Clay; su acceso a WhatsApp se presenta como enlace de texto, sin fondo ni borde. Los demás CTA de WhatsApp conservan el relleno Olive.
- La serif inicial, Source Serif 4, se percibió demasiado pesada y contrastada. Se sustituyó por Inria Serif, disponible bajo SIL Open Font License 1.1; después de probar el peso 300, se cambió a 400 para su comparación visual. Antic Didone también se evaluó, pero se dejó fuera de esta iteración porque solo ofrece peso 400 y presenta mayor contraste entre trazos.

## Tests and verification

Se añadieron pruebas para paridad de contenido, límites de servicios, ausencia de condiciones comerciales pendientes, número y URL de WhatsApp, selección de idioma y conservación de anclas. Natalia confirmó que `npm run check` y `npm run build` terminaron correctamente.

Natalia completó y aprobó la revisión manual de la home. La recepción real mediante Basin queda pendiente hasta configurar el servicio en un incremento posterior.

## Documentation updated

- Arquitectura: home comercial, entradas bilingües, navegación y contacto.
- Este registro: paleta, composición, fotografía, tipografía, CTA, Clay, Olive y Lucide.
- RFC, pre-work y plan: alcance, decisiones y estado de ejecución.

## Known limitations

- El formulario no enviará hasta configurar `VITE_CONTACT_FORM_ENDPOINT` con un endpoint real de Basin.
- No existe todavía una imagen social para Open Graph.
- «Quién soy», precios, casos reales y modalidades comerciales detalladas pertenecen a incrementos posteriores.
- La instalación se ejecutó con Node 20.19.6 y mostró una advertencia porque el repositorio y Vitest requieren Node 22.12 o superior. Las comprobaciones deben ejecutarse con una versión compatible.

## Follow-ups

1. Crear Basin y probar recepción en una preview solo con autorización explícita.
2. Diseñar e implementar las páginas «Saber más» de Web Esencial y Web Completa como incremento separado.
3. Crear una imagen social para Open Graph.
4. Registrar aprendizajes antes de extraer cualquier plantilla o automatización.
