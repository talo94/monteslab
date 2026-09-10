# Web de servicios digitales e identidad personal

Estado: Approved

## Summary

Reorientar Montes Lab para que su home presente los servicios digitales de Natalia a pequeños negocios y profesionales. La identidad dual de ingeniera y artista deja de ser la estructura de la home y pasa a una sección pública «Quién soy». La propia Montes Lab será el primer caso real para validar un proceso repetible antes de extraer plantillas o automatizaciones.

## Context

La home actual solo describe Montes Lab como un espacio para ideas, viajes y proyectos. No explica la nueva oferta comercial ni facilita que un posible cliente entienda qué puede contratar.

La definición aprobada del negocio es:

> Diseño y desarrollo páginas web para pequeños negocios y profesionales que necesitan presentar sus servicios y facilitar el contacto con sus clientes. También integro reservas online y, cuando aporta valor, asistentes sencillos de WhatsApp.

La propuesta se apoya en 10 años de experiencia en desarrollo de software, más de 6 con React y el uso actual de desarrollo asistido por IA y vibe coding. Natalia quiere una comunicación directa, cercana y sin autoelogios ni frases grandilocuentes.

## Goals

- Explicar con claridad qué servicio ofrece Natalia, a quién y para qué.
- Facilitar que un posible cliente entienda los dos alcances iniciales y pueda iniciar una conversación.
- Presentar reservas externas como complemento y WhatsApp como capacidad posible cuando aporte valor, sin prometer un alcance todavía abierto.
- Incorporar «Quién soy», conectando la experiencia profesional de Natalia con su faceta artística, centrada actualmente en cerámica en torno.
- Usar Montes Lab como primer caso real para aprender y documentar un proceso de entrega repetible.
- Publicar la experiencia comercial inicial en español e inglés para atender clientes remotos sin limitar la oferta a un país.

## Non-goals

- Crear una tienda, contratación o pago online.
- Publicar precios, permanencia, minutos de soporte, titularidad contractual o condiciones aún no aprobadas.
- Cerrar ahora el alcance técnico o comercial de los asistentes de WhatsApp.
- Construir una plataforma de automatización, una arquitectura genérica de agentes o un repositorio plantilla antes de validar Montes Lab.
- Crear ahora la página CV, autenticación o una zona privada.
- Retirar o proteger las páginas existentes; seguirán accesibles por URL, sin promoción desde la nueva navegación pública.

## Audience and privacy

La audiencia principal son pequeños negocios y profesionales que necesitan presentar sus servicios y facilitar el contacto con sus clientes. El servicio se presta de forma remota sin limitarse a España o Colombia. La web debe poder evaluarse sin conocimientos técnicos tanto en español como en inglés.

La web es pública. Solo se publicarán datos profesionales y vías de contacto seleccionadas por Natalia. No se publicarán datos privados, contratos, documentos fuente, credenciales ni datos de terceros. Las páginas existentes continúan públicas aunque no estén enlazadas; ocultarlas de la navegación no constituye una medida de privacidad.

## User experience

La home empieza por la necesidad del cliente y la oferta. En una lectura breve debe quedar claro qué crea Natalia, para quién, qué incluye de forma general, cómo iniciar el contacto y quién está detrás del servicio.

La oferta se presenta inicialmente con dos alcances:

- **Web Esencial:** una página con hasta seis secciones.
- **Web Completa:** hasta cinco páginas.

Ambas incluyen diseño y desarrollo responsive, vía de contacto, ajuste del contenido aportado por el cliente, SEO básico, dos rondas de cambios y publicación. La integración con un servicio externo de reservas se ofrece como complemento.

Existen dos modalidades comerciales internas, todavía sin precios ni condiciones definitivas: pago único por creación y dominio con entrega al cliente; o creación reducida, primer año de dominio incluido y mensualidad con permanencia, con alojamiento gestionado por Natalia. La renovación del dominio se presupuestará aparte o reflejará su coste real. Estas modalidades no se publicarán como ofertas contratables hasta cerrar sus condiciones.

«Quién soy» presentará brevemente la experiencia profesional, la condición de mujer en tecnología, el uso de herramientas de IA y la faceta creativa de Natalia. La cerámica se mostrará como afición reciente y aprendizaje, con fotografías propias cuando estén seleccionadas. El tono será directo, cercano, sobrio y basado en hechos.

La home comercial debe priorizar claridad y confianza dentro de la dirección editorial cálida de Montes Lab. La portada será minimalista, conservará el icono de Montes Lab y no usará dibujos decorativos. No utilizará negro puro, azul ni bordes visibles como recurso principal de separación. La paleta aprobada parte de Natural Linen `#D8CCBA`, Limestone Cream `#EEE8DC`, Sandy Taupe `#A99B88`, Sage `#A7AE98`, Olive `#777C5C` y Clay `#B77A61`; se permitirá una tinta más oscura derivada de esos tonos cuando sea necesaria para contraste accesible. Clay tendrá presencia visible en acentos o una superficie puntual para evitar un resultado monocromático, siempre con texto café oscuro o crema. El texto y los botones evitarán combinaciones de verde sobre marrón claro. Las fotografías aprobadas aportarán ritmo en secciones posteriores y mostrarán revisión de wireframes y responsive, sin simular clientes inexistentes.

## Functional requirements

- FR-1: La ruta principal debe presentar la oferta de servicios antes que el contenido personal o las secciones históricas.
- FR-2: La home debe incluir la definición aprobada del servicio o una redacción equivalente validada por Natalia.
- FR-3: La home debe distinguir Web Esencial y Web Completa con los límites e inclusiones aprobados, sin precios no aprobados.
- FR-4: Reservas debe aparecer como complemento y los asistentes sencillos de WhatsApp como posibilidad sujeta a necesidad y alcance.
- FR-5: La home debe ofrecer un formulario breve como acción principal y WhatsApp como alternativa visible.
- FR-6: Debe existir una sección o destino público «Quién soy» con la experiencia profesional y la faceta artística de Natalia.
- FR-7: La nueva navegación no debe enlazar ideas, viajes, giras ni las páginas históricas de proyectos. Sus URLs deben seguir funcionando.
- FR-8: El contenido debe permanecer en español y usar el tono aprobado.
- FR-9: La experiencia debe funcionar en móvil y escritorio, con navegación por teclado, foco visible, etiquetas comprensibles y contraste suficiente.
- FR-10: Las modalidades comerciales solo podrán publicarse cuando estén aprobadas sus condiciones.
- FR-11: La home debe incluir un footer con marca, resumen breve, vías de contacto y la información legal o de privacidad necesaria.
- FR-12: La home debe incluir SEO básico desde la primera versión: contenido semántico, título y descripción específicos, metadatos sociales y preparación para indexación con URL canónica.
- FR-13: La home debe estar disponible en español e inglés mediante URLs diferenciadas e indexables y un selector de idioma accesible.
- FR-14: Cada versión debe declarar su idioma, enlazar sus alternativas para buscadores y mantener el mismo alcance funcional sin mezclar idiomas en una misma página.

## Acceptance criteria

- AC-1 (FR-1, FR-2): Al entrar, una persona identifica qué ofrece Natalia, a quién se dirige y qué problema resuelve sin navegar a otra página.
- AC-2 (FR-3): La web diferencia Web Esencial y Web Completa y muestra sus inclusiones sin inventar precios, plazos ni soporte.
- AC-3 (FR-4): Reservas aparece como complemento y WhatsApp no se presenta como incluido por defecto ni con alcance indefinido.
- AC-4 (FR-5): El formulario solicita solo los datos necesarios, comunica su resultado y ofrece WhatsApp como alternativa con una etiqueta clara.
- AC-5 (FR-6, FR-8): «Quién soy» presenta experiencia y cerámica con voz directa, sin logros, métricas o trayectoria artística no validados.
- AC-6 (FR-7): La home y la nueva navegación no enlazan las secciones históricas; sus rutas directas siguen funcionando.
- AC-7 (FR-9): A 320 px, 390 px y escritorio, el contenido conserva su orden, no desborda horizontalmente y los controles muestran foco.
- AC-8 (FR-10): La versión pública no contiene precios ni condiciones comerciales pendientes de aprobación.
- AC-9 (FR-11): El footer cierra la página con información útil y no enlaza las secciones históricas.
- AC-10 (FR-12): El documento publicado tiene un único H1 descriptivo, título y descripción propios, metadatos sociales válidos y URL canónica correspondiente al dominio aprobado.
- AC-11 (FR-13, FR-14): Se puede cambiar entre español e inglés conservando la sección equivalente; cada URL tiene textos, metadatos, `lang`, canonical y `hreflang` coherentes.
- AC-12 (FR-13): El selector de idioma funciona con teclado, identifica el idioma activo y no depende de detección automática para acceder a una versión.

## Constraints

- La aplicación existente es una SPA pública en React, Vite y TypeScript. Las decisiones técnicas se definirán después de aprobar este RFC.
- LinkedIn es una fuente para contrastar la trayectoria, pero su contenido aún no se ha incorporado ni validado.
- Hay fotografías de cerámica, pero no se han proporcionado ni seleccionado para publicación.
- Las páginas históricas y sus rutas deben conservarse.
- El dominio aprobado es `monteslab.com` y el nombre público es «Natalia Montes». La prestación se comunica como remota y sin ubicación comercial restringida.
- Primero se reutilizará la base actual. Repositorios independientes, plantillas, agentes y automatización se evaluarán después de completar y validar esta web.
- Los cambios ajenos y documentos personales del repositorio deben conservarse y no se publicarán por asociación.

## Delivery workflow for this first case

Este recorrido define el orden de producto y validación. No sustituye el plan técnico requerido tras aprobar el RFC y el pre-work.

1. **Contenido:** cerrar la acción de contacto, reunir experiencia verificable, seleccionar proyectos y escoger fotografías públicas. Redactar sin precios pendientes.
2. **Diseño:** definir jerarquía, navegación y adaptación desde la guía visual; revisar primero la home comercial y después «Quién soy».
3. **Implementación:** construir incrementos pequeños sobre la aplicación existente, manteniendo las rutas anteriores.
4. **Preview:** ejecutar controles y revisar localmente en móvil y escritorio antes de compartir una preview privada.
5. **Revisión:** recoger cambios, verificar el contacto y confirmar que no se filtró información privada o comercial no aprobada.
6. **Publicación:** publicar solo con autorización explícita y tras superar los controles del repositorio.
7. **Aprendizajes:** registrar tiempos, decisiones repetidas, fallos y pasos manuales.
8. **Extracción posterior:** con Montes Lab validada, decidir qué componentes, estructura, instrucciones de agentes y automatizaciones demostraron ser reutilizables.

## First implementable increment

Una vez aprobado este RFC y completadas las etapas técnicas, el primer incremento será una home comercial estática y responsive con:

- presentación del servicio y audiencia;
- Web Esencial y Web Completa sin precios;
- complemento de reservas y mención prudente de WhatsApp;
- acción de contacto aprobada;
- navegación nueva sin enlaces a las secciones históricas, conservando sus rutas.

Este incremento valida el mensaje principal y el recorrido de contacto. La página y el acceso a «Quién soy», los casos, las modalidades detalladas y las fotografías finales se incorporarán después.

## Available client information

- Definición literal del negocio y audiencia inicial.
- Alcance de Web Esencial y Web Completa, inclusiones y reservas como complemento.
- Dos modalidades comerciales, todavía sin condiciones publicables.
- Experiencia declarada: 10 años en desarrollo, más de 6 con React, mujer en tecnología y trabajo actual con IA y vibe coding.
- Faceta artística: seis meses de cerámica en torno, además de lettering, caligrafía, acuarela y estampados.
- Preferencias de voz y dirección cromática.

## Open questions

- ¿Qué plazo orientativo puede comunicarse para cada web, si se quiere mostrar alguno?
- ¿Qué proyectos o trabajos se pueden publicar como evidencia inicial? Montes Lab puede figurar como primer caso cuando esté terminada.
- «Quién soy» será una página independiente que se diseñará e implementará en un incremento posterior.
- Antes de publicar las modalidades: aprobar precios, permanencia, titularidad de dominio y repositorio, soporte, cancelación, renovación y responsabilidades de alojamiento.
- Para ampliar el contenido personal: validar la experiencia de LinkedIn y seleccionar fotografías de cerámica autorizadas.
- Aprobar las versiones finales en español e inglés antes de publicarlas; la traducción debe conservar el tono directo y no ampliar las promesas comerciales.

## Approval

Natalia ha aprobado la definición literal del negocio, el público inicial, la estructura de Web Esencial y Web Completa, sus inclusiones generales, reservas como complemento, las dos modalidades como estructura todavía incompleta, el traslado del modo dual a «Quién soy» y Montes Lab como primer caso antes de extraer una plantilla.

Natalia aprobó explícitamente la versión anterior del RFC el 9 de septiembre de 2026. El 10 de septiembre solicitó ampliar el primer incremento a español e inglés, confirmó `monteslab.com`, «Natalia Montes» y una prestación remota global, y ajustó la dirección visual.

Natalia aprobó explícitamente la revisión multilingüe y la dirección visual final el 10 de septiembre de 2026. Esta aprobación autoriza completar el pre-work técnico; no autoriza todavía la implementación ni la publicación.
