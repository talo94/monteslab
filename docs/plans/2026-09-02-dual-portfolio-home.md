# Plan de implementación de la home de servicios digitales

## Status

Implemented and verified

## Inputs

- [RFC aprobado](../rfcs/2026-09-02-dual-portfolio-home.md).
- [Diseño técnico aprobado](../prework/2026-09-02-dual-portfolio-home.md).
- Alcance: home comercial pública en español e inglés, sin precios, página «Quién soy», creación de cuentas, preview remota ni publicación.

## TASK-1 · Contenido bilingüe y modelo de la home

- **Estado:** implementada y verificada.
- **Resultado:** fuente tipada única para los textos, servicios, inclusiones, navegación, formulario, footer, SEO y equivalencias de anclas en español e inglés.
- **Archivos:** nueva carpeta `src/pages/home/`, con `types.ts`, `content.ts`, `contact.ts` y pruebas junto a los módulos cuando corresponda.
- **Dependencias:** ninguna.
- **Trazabilidad:** AC-1–AC-5, AC-8–AC-12; TD-2–TD-4, TD-11–TD-13, TD-21, TD-22, TD-24–TD-26.
- **Trabajo:** transcribir la definición aprobada; modelar Web Esencial, Web Completa, inclusiones, reservas y WhatsApp sin precios ni condiciones abiertas. Redactar la versión inglesa con el mismo alcance y tono, sin ampliar promesas. Incluir títulos, descripciones, textos sociales, estados del formulario, texto breve de privacidad y mensaje de WhatsApp por idioma. Crear helpers puros para idioma, anclas, enlace `wa.me` y validación del formulario.
- **Pruebas y verificación:** comprobar claves completas y equivalentes, límites de uno/seis y cinco páginas, inclusiones exactas, ausencia de términos comerciales pendientes, número `573006549758`, URLs y mensajes codificados. Revisar ambas versiones en paralelo antes de cerrar la tarea.
- **Finalización:** cada texto visible o accesible proviene del diccionario correcto; no hay claves vacías, mezcla de idiomas, precios ni afirmaciones no aprobadas.

## TASK-2 · Entradas por idioma, rutas y SEO estático

- **Estado:** implementada y verificada.
- **Resultado:** `/` y `/en` entregan documentos HTML con idioma y metadatos propios y cargan la misma aplicación; las rutas históricas siguen funcionando.
- **Archivos:** `index.html`, nuevo `en/index.html`, `vite.config.ts`, `vercel.json`, `src/routes/routes.ts`, `src/App.tsx`, `public/robots.txt`, `public/sitemap.xml` y recurso social si se aprueba durante la implementación.
- **Dependencias:** TASK-1.
- **Trazabilidad:** AC-6, AC-10–AC-12; TD-1, TD-6, TD-10, TD-21–TD-25.
- **Trabajo:** registrar `/en`; configurar las dos entradas de Vite; definir `lang`, title, description, canonical, Open Graph, Twitter Card, alternates `es`/`en`/`x-default` y JSON-LD por entrada. Usar `https://monteslab.com/` y `https://monteslab.com/en`. Enrutar `/en` a su HTML y mantener el fallback SPA. Añadir sitemap y robots. No añadir `noindex` a las páginas históricas ni incluirlas en el sitemap nuevo.
- **Pruebas y verificación:** inspeccionar HTML fuente y salida de `dist`; probar `/`, `/en` y una muestra de rutas anteriores. Validar JSON-LD como JSON, URLs absolutas, alternates recíprocos y ausencia de dirección, precio, reseñas o ubicación inventada.
- **Finalización:** ambas entradas construidas contienen metadatos coherentes sin depender de ejecutar React y las rutas existentes conservan su contenido.

## TASK-3 · Recursos fotográficos e iconografía

- **Estado:** implementada y revisada manualmente.
- **Resultado:** dos fotografías optimizadas y una iconografía coherente con la dirección aprobada, listas para la home.
- **Archivos:** `src/assets/home/` o `public/images/home/`, `package.json` y lockfile para `lucide-react`; atribuciones o notas de procedencia solo si el recurso elegido las requiere.
- **Dependencias:** TASK-1.
- **Trazabilidad:** AC-5, AC-7, AC-9; TD-15, TD-18–TD-20.
- **Trabajo:** generar o seleccionar como recursos independientes las dos escenas aprobadas: revisión de wireframes/tablet y comprobación responsive en escritorio/teléfono. No recortar imágenes del mockup compuesto. Optimizar dimensiones y formato sin perder calidad, definir texto alternativo según su función y evitar logos o proyectos ficticios identificables. Instalar `lucide-react` y seleccionar iconos semánticos con importaciones estáticas.
- **Pruebas y verificación:** inspeccionar cada imagen a tamaño real, verificar peso y recortes de escritorio/móvil, ausencia de marcas y coherencia con trabajo web. Confirmar que la compilación solo incorpora iconos usados.
- **Finalización:** los recursos visuales funcionan en ambos formatos, no parecen cerámica ni testimonios de clientes y no introducen texto ilegible o información falsa.

## TASK-4 · Estructura visual responsive y navegación comercial

- **Estado:** implementada y revisada manualmente.
- **Resultado:** home completa con header, hero, fotografías, servicios, inclusiones, complementos, experiencia, contacto y footer según la propuesta aprobada.
- **Archivos:** `src/pages/Home.tsx`, componentes y CSS bajo `src/pages/home/`, `src/styles/design-tokens.css`; `src/components/layout/` solo si una primitiva tiene reutilización real.
- **Dependencias:** TASK-1–TASK-3.
- **Trazabilidad:** AC-1–AC-3, AC-5–AC-9, AC-11, AC-12; TD-1, TD-2, TD-6–TD-8, TD-12, TD-14–TD-22.
- **Trabajo:** implementar un único H1, navegación por anclas, selector `ES · EN`, hero tipográfico, dos secciones fotográficas, servicios sin tarjetas con borde, lista de inclusiones, bloque Clay, experiencia, contacto y footer. Crear tokens semánticos desde la paleta aprobada y una tinta derivada sin negro. Sobre Clay usar combinaciones que superen contraste; reservar oliva para acciones sobre fondos claros. Omitir navegación histórica y «Quién soy». Conservar ancla equivalente al cambiar de idioma.
- **Pruebas y verificación:** revisar orden semántico, destino de anclas, idioma activo, foco, texto alternativo, `aria-current`, zoom y layouts a 320, 390 y 1440 px. Medir contraste real de texto, botones, foco y errores.
- **Finalización:** la página reproduce estructura, fotografías y balance Clay aprobados; es usable con teclado, no desborda y no contiene negro, azul, dibujos manuales ni bordes decorativos.

## TASK-5 · Formulario de contacto y WhatsApp

- **Estado:** implementada y revisada con el estado sin configurar; Basin queda pendiente para otro incremento.
- **Resultado:** formulario bilingüe accesible preparado para Basin y enlace de WhatsApp funcional con estados claros.
- **Archivos:** `src/pages/home/ContactForm.tsx`, helpers y estilos locales, tipos de entorno Vite si se configura `VITE_CONTACT_FORM_ENDPOINT`.
- **Dependencias:** TASK-1, TASK-4.
- **Trazabilidad:** AC-4, AC-7, AC-8, AC-11; TD-4, TD-5, TD-11, TD-12, TD-14, TD-26.
- **Trabajo:** implementar nombre, correo, tipo de negocio y mensaje; etiquetas, ayuda, errores asociados, estado enviando/enviado/error y región viva. Enviar también idioma. Integrar mediante endpoint configurable sin SDK y conservar datos ante fallo. Si no hay endpoint local, usar un adaptador inyectable de prueba y mostrar un error honesto al intentar enviar, sin simular recepción. Añadir enlaces `wa.me` con mensajes traducidos y texto de privacidad provisional marcado para revisión antes de activar Basin.
- **Pruebas y verificación:** pruebas puras de validación y construcción de payload; navegador para campos, errores, doble envío, foco, estado, fallo de red, conservación de datos y apertura de WhatsApp. La recepción real queda para la activación de Basin.
- **Finalización:** los estados locales son correctos, el enlace de WhatsApp usa el número aprobado y ningún envío se presenta como recibido sin respuesta satisfactoria.

## TASK-6 · Cobertura automatizada y controles de regresión

- **Estado:** implementada y verificada mediante `npm run check` y `npm run build`, ejecutados por Natalia.
- **Resultado:** pruebas significativas para contenido, contacto, i18n, SEO y build integradas en el control existente.
- **Archivos:** pruebas `*.test.ts` junto a los módulos de home y un script de verificación de HTML generado solo si las aserciones no caben de forma clara en Vitest; `package.json` únicamente si hace falta exponer un comando.
- **Dependencias:** TASK-1–TASK-5.
- **Trazabilidad:** AC-1–AC-6, AC-8, AC-10–AC-12; TD-3–TD-5, TD-9, TD-21–TD-26.
- **Trabajo:** cubrir paridad bilingüe, límites e inclusiones, términos excluidos, helpers de idioma/anclas, validación y payload, WhatsApp, JSON-LD y metadatos de ambas entradas. Añadir una comprobación de que la build produce los dos HTML. No crear pruebas que solo reproduzcan literalmente el JSX.
- **Pruebas y verificación:** demostrar que las pruebas fallan ante una clave inglesa ausente, un precio introducido, un canonical incorrecto y un número de WhatsApp alterado; revertir esas mutaciones. Ejecutar la suite completa.
- **Finalización:** la suite detecta los riesgos de contenido y arquitectura definidos y pasa sin debilitar controles existentes.

## TASK-7 · Revisión visual, accesibilidad, privacidad y activación pendiente

- **Estado:** completada y aprobada por Natalia; activación de Basin aplazada.
- **Resultado:** home local revisada de extremo a extremo y lista para conectar a servicios externos cuando Natalia lo autorice.
- **Archivos o subsistema:** aplicación local, salida de producción, recursos, DOM, enlaces y configuración de entorno.
- **Dependencias:** TASK-4–TASK-6.
- **Trazabilidad:** AC-1–AC-12; TD-5, TD-8–TD-10, TD-14, TD-18–TD-26.
- **Trabajo:** probar español e inglés a 320, 390 y 1440 px; recorrido completo con teclado, zoom, foco, anclas, selector, formulario, WhatsApp, fotografías, footer y rutas históricas. Revisar consola y red. Auditar textos y salida construida para detectar datos privados, precios, condiciones no aprobadas, endpoints personales o afirmaciones falsas. Comparar visualmente con el mockup aprobado y corregir diferencias materiales.
- **Pruebas y verificación:** documentar resultados reales. Basin, texto final de privacidad, recepción en preview y traducción final serán una lista concreta para revisión; no crear cuenta ni desplegar en esta tarea.
- **Finalización:** no quedan defectos locales de comportamiento, legibilidad, accesibilidad o privacidad; cualquier dependencia externa está identificada sin fingir que fue probada.

## TASK-8 · Documentación, calidad y entrega local

- **Estado:** completada; controles y revisión visual confirmados por Natalia.
- **Resultado:** implementación local trazable con registro de decisiones, verificaciones y aprendizajes del primer caso real.
- **Archivos:** `docs/changes/2026-09-02-dual-portfolio-home.md`, `docs/architecture.md`, este plan y, si procede, `docs/design-guide.md` para preferencias visuales duraderas sin duplicar especificaciones.
- **Dependencias:** TASK-1–TASK-7.
- **Trazabilidad:** AC-1–AC-12; TD-1–TD-26.
- **Trabajo:** registrar comportamiento final, estructura bilingüe, SEO, formulario configurable, recursos, decisiones visuales y pendientes de activación. Documentar tiempos, decisiones repetidas, pasos manuales y dificultades que puedan informar la futura extracción de plantilla, sin crearla todavía. Marcar tareas completadas solo con evidencia.
- **Pruebas y verificación:** ejecutar `npm run check` y `npm run build`; revisar diff y estado Git; confirmar que no se incluyen `dist/`, documentos personales, el mockup compuesto ni cambios ajenos. Mostrar la home local para revisión de Natalia.
- **Finalización:** controles pasan, existe el registro de cambios y la home local está lista para revisión. No hacer commit, PR, crear cuentas, desplegar ni publicar. Como recomendación futura, usar un commit enfocado `feat:` cuando se autorice.

## Traceability

| Criterio                                   | Tareas                                 |
| ------------------------------------------ | -------------------------------------- |
| AC-1 · Oferta, audiencia y problema        | TASK-1, TASK-4, TASK-6, TASK-7, TASK-8 |
| AC-2 · Dos servicios sin invenciones       | TASK-1, TASK-4, TASK-6, TASK-7, TASK-8 |
| AC-3 · Límites de reservas y WhatsApp      | TASK-1, TASK-4, TASK-6, TASK-7         |
| AC-4 · Formulario y alternativa WhatsApp   | TASK-1, TASK-5–TASK-8                  |
| AC-5 · Voz y experiencia verificable       | TASK-1, TASK-3, TASK-4, TASK-7, TASK-8 |
| AC-6 · Navegación nueva y rutas históricas | TASK-2, TASK-4, TASK-6–TASK-8          |
| AC-7 · Responsive y accesibilidad          | TASK-3–TASK-5, TASK-7, TASK-8          |
| AC-8 · Sin condiciones no aprobadas        | TASK-1, TASK-5–TASK-8                  |
| AC-9 · Footer útil                         | TASK-4, TASK-7, TASK-8                 |
| AC-10 · SEO básico                         | TASK-1, TASK-2, TASK-6–TASK-8          |
| AC-11 · Paridad y SEO bilingüe             | TASK-1, TASK-2, TASK-4–TASK-8          |
| AC-12 · Selector accesible y explícito     | TASK-1, TASK-2, TASK-4, TASK-6–TASK-8  |

## Approval

RFC, pre-work y plan fueron aprobados explícitamente por Natalia. La implementación se realizó sin levantar el servidor ni ejecutar controles desde Codex. Natalia completó la revisión manual y confirmó antes del PR que `npm run check` y `npm run build` terminaron correctamente.
