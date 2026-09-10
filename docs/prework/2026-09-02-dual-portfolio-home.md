# Diseño técnico de la web de servicios digitales

## Status

Approved

## RFC

[Web de servicios digitales e identidad personal](../rfcs/2026-09-02-dual-portfolio-home.md), aprobada el 9 de septiembre de 2026.

Este pre-work cubre únicamente el primer incremento: la home comercial. La página «Quién soy» tendrá su propia definición de contenido y diseño antes de implementarse.

## Current state

Montes Lab es una SPA pública con React 19, TypeScript, Vite, React Router y Tailwind CSS. La ruta `/` renderiza un componente `Home` estático de una sola sección. `App.tsx` monta el mismo `Navbar` en la home y en los índices históricos; ese navbar enlaza Proyectos, Viajes, Ideas y Giras. Las páginas inmersivas ocultan el navbar mediante una lista de rutas.

Las rutas históricas deben permanecer registradas. No existe backend, API, servicio de formularios, gestión de secretos ni analítica. Tampoco hay componentes de formulario o pruebas de interfaz. Vitest está configurado para pruebas de módulos TypeScript en entorno Node. El título y la descripción global de `index.html` siguen siendo los valores iniciales de Vite; algunas páginas cambian `document.title` localmente.

La paleta compartida ofrece crema, tinta cálida, tierra y pasteles. La guía visual prefiere composición editorial, tipografía serif para títulos, sans del sistema para lectura, verde profundo para acciones y revisión a 1440, 390 y 320 px. El verde profundo recomendado todavía vive como valor local de un viaje y requiere un token semántico compartido si se usa en la home.

Hay cambios ajenos sin versionar en `AGENTS.md`, la guía visual, su skill, su registro de cambios y `docs/letras/`. Deben conservarse y quedar fuera de cualquier commit de este feature salvo autorización específica.

## Proposed design

Construir la home como una página comercial autocontenida bajo `src/pages/home/`, con contenido tipado separado de la composición y estilos locales. `src/pages/Home.tsx` quedará como punto de entrada o se convertirá en un re-export pequeño para evitar cambios innecesarios en el registro de ruta.

La página tendrá este orden semántico:

1. encabezado de marca con navegación por anclas a Servicios, Qué incluye y Contacto;
2. portada con la definición del servicio y acción principal hacia el formulario;
3. presentación comparativa de Web Esencial y Web Completa;
4. inclusiones compartidas;
5. complementos de reservas y WhatsApp, descritos con sus límites;
6. bloque de confianza basado solo en experiencia aprobada;
7. formulario breve y enlace alternativo a WhatsApp;
8. footer con marca, descripción breve, contacto y acceso a la información de privacidad necesaria.

La página «Quién soy» no tendrá enlace activo hasta que exista. No se mostrarán controles inertes ni destinos vacíos. Cuando se implemente, se añadirá a la navegación comercial mediante su ruta tipada.

El formulario solicitará nombre, correo, tipo de negocio y una descripción breve de la necesidad. Incluirá etiquetas visibles, ayuda breve, validación del navegador y mensajes de envío accesibles. La integración se hará mediante una petición directa a un endpoint de Basin configurable, sin SDK. El endpoint no es un secreto, pero se configurará por entorno para no dispersarlo por componentes. No se almacenarán envíos en este repositorio.

WhatsApp usará el número público aprobado `+57 300 654 9758` mediante un enlace `https://wa.me/573006549758` y un mensaje inicial codificado. Se abrirá como navegación externa con etiqueta explícita. No se añadirá un widget, seguimiento ni carga de scripts de Meta.

El SEO inicial combinará contenido visible semántico con metadatos estáticos adecuados para la ruta principal: un único H1 descriptivo, `title`, meta description, canonical, Open Graph y Twitter Card. La home incluirá datos estructurados JSON-LD limitados a hechos aprobados sobre Natalia y sus servicios, sin reseñas, dirección física, precios ni datos inventados. `robots.txt` y `sitemap.xml` se generarán cuando esté aprobado el dominio público definitivo. Los índices históricos no recibirán `noindex` en este alcance.

La versión española vivirá en `/` y la inglesa en `/en`. Ambas renderizarán la misma estructura desde contenido tipado por idioma. El selector cambiará a la URL equivalente y conservará el ancla activa cuando corresponda. No se redirigirá automáticamente según el navegador: una URL estable evita saltos inesperados y permite compartir e indexar cada idioma. Español será también `x-default`.

Para que el SEO inglés no dependa solo de que un robot ejecute JavaScript, Vite generará dos documentos HTML de entrada: `index.html` y `en/index.html`. Cada uno tendrá `lang`, título, descripción, canonical, Open Graph, Twitter Card, `hreflang` y JSON-LD propios, y ambos cargarán la misma aplicación React. Las rutas históricas seguirán usando la entrada española. `sitemap.xml` incluirá las dos homes y `robots.txt` declarará el sitemap bajo `https://monteslab.com`.

La dirección visual aprobada conserva la estructura y barra del header, junto con el icono de Montes Lab, y usa un hero minimalista sin escritorio, plantas ni dibujos. Elimina frases manuscritas, montañas y anotaciones decorativas; reduce superficies; separa secciones mediante fondos crema y tierra, espacio y jerarquía tipográfica, sin contornos de tarjeta. No usa negro puro ni azul. La paleta aportada por Natalia usa Natural Linen `#D8CCBA`, Limestone Cream `#EEE8DC`, Sandy Taupe `#A99B88`, Sage `#A7AE98`, Olive `#777C5C` y Clay `#B77A61`. Se derivará una tinta oliva o café más oscura para texto cuando estos valores no alcancen contraste accesible. No se colocará verde sobre marrón claro cuando la combinación resulte confusa. Las fotografías aprobadas representan revisión de wireframes y comprobación responsive; deben mantenerse en composición y temática sin presentarlas como proyectos o clientes reales. Los iconos funcionales usan Lucide como propuesta, con trazo uniforme y color de la paleta.

## Affected areas

- `src/pages/Home.tsx` y nueva carpeta `src/pages/home/`: composición, contenido, formulario y estilos de la home.
- `src/App.tsx`: selección del encabezado comercial para `/` sin retirar las rutas históricas.
- `src/components/layout/`: nuevo encabezado comercial solo si la composición justifica reutilizarlo después; el navbar histórico no se ampliará con servicios.
- `src/styles/design-tokens.css`: posible token compartido para el verde profundo aprobado por la guía.
- `index.html` o lógica de página: título, descripción y metadatos básicos de la home.
- `en/index.html`: documento de entrada inglés con metadatos estáticos propios.
- `vite.config.ts`: dos entradas HTML de compilación.
- `vercel.json`: resolución explícita de `/en` hacia su documento generado, conservando el fallback SPA para las rutas existentes.
- `public/`: `robots.txt`, `sitemap.xml` e imagen social cuando se confirme el dominio y el recurso definitivo.
- Pruebas de contenido y validación pura; verificación de interfaz en navegador.
- `docs/architecture.md` y `docs/changes/`: actualización al implementar.

## Decisions

- **TD-1 / FR-1, FR-7:** Mantener `/` como ruta de la home comercial y conservar todas las rutas históricas. La home usará navegación propia por anclas, sin enlaces a Proyectos, Viajes, Ideas o Giras. El navbar histórico podrá seguir apareciendo al acceder directamente a sus índices; no aparecerá en la home.
- **TD-2 / FR-2, FR-3, FR-4, FR-8:** Guardar el contenido comercial estable en un módulo TypeScript tipado y renderizarlo con componentes específicos de la home. Esto permite revisar límites e inclusiones sin dispersarlos por JSX y evita crear una abstracción genérica antes de tener un segundo caso real.
- **TD-3 / FR-3, FR-10:** No modelar precios, permanencia ni soporte con valores temporales. Las modalidades comerciales incompletas no se enviarán al navegador en este incremento.
- **TD-4 / FR-5:** Usar formulario breve como acción principal y enlace `wa.me` como alternativa. Basin será el receptor propuesto para el primer caso: admite formularios HTML y AJAX sin backend propio, ofrece protección básica contra spam, restricción por dominio y un DPA. Se integrará directamente con su endpoint, sin cargar Basin JS. El enlace de WhatsApp dependerá de un número público aprobado.
- **TD-5 / FR-5, FR-9:** Validar en cliente solo formato y campos obligatorios; el servicio receptor será responsable del transporte y de medidas contra abuso. Mostrar estados enviando, enviado y error mediante una región de estado accesible, conservar los datos escritos si falla y no afirmar que llegó un mensaje hasta recibir respuesta satisfactoria.
- **TD-6 / FR-6:** Excluir «Quién soy» del primer incremento. No añadir una ruta, enlace o placeholder hasta trabajar esa página por separado.
- **TD-7 / FR-8, FR-9:** Aplicar la guía editorial con fondo crema, tinta cálida, títulos serif y oliva como acción. Usar Clay y tonos tierra con moderación y texto oscuro. Evitar negro puro, azul, animaciones indispensables, tarjetas anidadas y nuevas dependencias de fuentes.
- **TD-8 / FR-9:** Usar HTML semántico, anclas nativas, encabezados ordenados, campos con `label`, foco visible y errores asociados al campo. Respetar `prefers-reduced-motion` si se añade transición y mantener superficies táctiles cómodas.
- **TD-9 / AC-1, AC-2, AC-3, AC-8:** Añadir pruebas unitarias de los datos publicados y de las funciones puras de validación/construcción de contacto. Verificar la interacción completa y el layout en navegador, ya que el repositorio no incluye actualmente un entorno DOM de pruebas y añadirlo solo para replicar el marcado tendría poco valor.
- **TD-10 / AC-1, AC-7:** Definir título y descripción específicos para la home. No añadir analítica hasta acordar objetivos, proveedor y tratamiento de datos.
- **TD-11 / FR-5:** Pedir nombre, correo, tipo de negocio y mensaje; todos serán obligatorios salvo que las pruebas de contenido demuestren fricción innecesaria. No pedir teléfono en el formulario: WhatsApp ya ofrece esa vía alternativa y reducir datos simplifica el primer contacto.
- **TD-12 / FR-11:** Incluir un footer específico de la home con marca, una frase descriptiva, formulario/WhatsApp como vías de contacto y la información de privacidad aplicable. No enlazar las secciones históricas ni mostrar navegación futura inactiva.
- **TD-13 / FR-12:** Implementar SEO técnico inicial sin dependencia: HTML semántico, título propuesto «Diseño y desarrollo web para pequeños negocios | Natalia Montes», descripción propuesta «Diseño y desarrollo páginas web responsive para pequeños negocios y profesionales, con contacto, reservas online y SEO básico.», canonical, Open Graph, Twitter Card y JSON-LD. Canonical, sitemap, robots e imagen social final dependen del dominio público aprobado.
- **TD-14 / FR-9:** No usar negro puro ni bordes visibles para estructurar la home. Usar tinta cálida y verde oscuro con contraste comprobado; crear jerarquía mediante fondos planos suaves, espacio, tipografía y alineación. Reservar contornos para estados que los necesiten, como foco, error o controles de formulario.
- **TD-15 / FR-9:** Proponer `lucide-react` para iconos funcionales. Importar cada icono de forma estática, mantener un solo lenguaje de trazo y marcar como decorativos los que repitan una etiqueta visible. La dependencia solo se añadirá durante implementación después de aprobar el plan.
- **TD-16 / FR-9:** Conservar únicamente la estructura del header y el icono de Montes Lab. El hero será tipográfico y minimalista, sin escritorio, plantas, dibujos, frase manuscrita ni montañas. Eliminar azul, usar verde oliva y reservar las fotografías para dar ritmo a secciones posteriores.
- **TD-18 / FR-9:** Usar como paleta de la home `#D8CCBA`, `#EEE8DC`, `#A99B88`, `#A7AE98`, `#777C5C` y `#B77A61`, asignando roles semánticos durante implementación. Crear una tinta derivada más oscura, sin negro puro, para mantener contraste WCAG. Las imágenes aportadas como referencia no se publicarán como recursos de la web.
- **TD-19 / FR-9:** Las fotografías de la home comercial deben representar diseño y desarrollo web, revisión en distintos dispositivos o interacción digital. Evitar imágenes que se interpreten como taller de cerámica; esa dirección se reservará para «Quién soy».
- **TD-20 / FR-9:** Mantener la estructura y fotografías de la cuarta propuesta visual, aprobadas por Natalia. Aumentar únicamente la presencia de Clay `#B77A61` para reducir la sensación monocromática: usarlo en rótulos, acentos breves o una superficie puntual. Sobre Clay usar tinta café oscura o crema con contraste comprobado, nunca verde oliva.
- **TD-21 / FR-13, FR-14:** Usar `/` para español y `/en` para inglés. No detectar ni redirigir por idioma del navegador. El selector será un enlace normal entre URLs, identificará el idioma activo y conservará las anclas conocidas (`servicios/services`, `incluye/included`, `contacto/contact`) mediante un mapeo tipado.
- **TD-22 / FR-13, FR-14:** Mantener un único árbol de componentes y contenido tipado `es`/`en`, sin añadir una librería i18n para dos idiomas y una página. No construir claves dinámicas ni un sistema genérico antes de necesitar pluralización, carga remota o más dominios traducidos.
- **TD-23 / FR-12, FR-14:** Configurar Vite como aplicación multipágina con `index.html` y `en/index.html`, ambos cargando `src/main.tsx`. Esto entrega metadatos estáticos correctos para cada home sin migrar de framework ni añadir prerenderizado. React Router registrará `/` y `/en` con la misma página y resolverá el idioma desde la ruta.
- **TD-24 / FR-12, FR-14:** Usar canonical `https://monteslab.com/` para español y `https://monteslab.com/en` para inglés. Cada documento incluirá alternates `es`, `en` y `x-default`, `lang` coherente y texto social traducido. El JSON-LD usará «Natalia Montes», prestación remota sin dirección física y el mismo identificador estable en ambos idiomas.
- **TD-25 / FR-12:** Añadir `robots.txt` y `sitemap.xml` estáticos con ambas homes. No incluir las rutas históricas en el sitemap nuevo ni aplicarles `noindex`; su política de indexación se decidirá al trabajar la futura zona privada.
- **TD-26 / FR-13:** El formulario enviará un campo técnico de idioma para responder con contexto. Los mensajes de estado, validación, privacidad y el texto inicial de WhatsApp tendrán traducción propia. Basin seguirá usando un único endpoint mientras permita distinguir el idioma en el envío.
- **TD-27 / FR-9:** Tras la primera revisión manual, reducir la escala general y el espacio entre secciones. El hero debe permitir que la primera fotografía asome en una pantalla de escritorio habitual; el formulario debe usar etiquetas, campos y botón con peso regular. No incluir «Saber más» mientras no existan páginas o destinos que amplíen cada servicio.

## Alternatives considered

- Reutilizar el navbar actual en la home: mantiene consistencia superficial, pero promociona secciones que deben salir del recorrido comercial.
- Eliminar el navbar histórico de toda la aplicación: supera el alcance y empeora la navegación de páginas que siguen siendo públicas.
- Crear ya un sistema de páginas comerciales reutilizable: anticipa necesidades sin un segundo caso validado y contradice el orden acordado.
- Implementar un backend propio para contacto: ofrece control, pero añade despliegue, correo, abuso y observabilidad antes de validar la oferta.
- Usar un enlace `mailto:` como formulario: evita proveedores, pero depende del cliente de correo del visitante y no ofrece confirmación fiable.
- Integrar un widget de WhatsApp: añade scripts externos y seguimiento para una necesidad cubierta por un enlace.
- Añadir «Quién soy» vacía o como ancla provisional: crea una promesa sin contenido; se incorporará cuando la página esté definida.
- Usar dibujos manuales como recurso repetido: aportan personalidad, pero cargan la composición y compiten con la información; se eliminan de las secciones inferiores.
- Mantener tarjetas con contorno para cada bloque: facilita agrupar, pero fragmenta demasiado la página; se prefieren bandas, fondos suaves y espacio.
- Mantener el azul suave: la combinación con la tinta café no representa la dirección buscada; se retira de la home comercial.
- Usar verde sobre marrón claro: no ofrece la limpieza visual deseada; se usarán fondos crema o tinta cálida según contraste.
- Detectar el idioma del navegador y redirigir: puede ayudar en una primera visita, pero hace menos predecible la URL raíz y complica pruebas y preferencias; se prefiere selección explícita.
- Añadir una librería de i18n ahora: resolvería casos futuros, pero añade API y configuración sin necesidad para dos diccionarios estáticos; se reevaluará al incorporar «Quién soy» u otros idiomas.
- Cambiar a SSR o a otro framework por SEO: mejora la generación dinámica a gran escala, pero no se justifica para dos variantes estáticas de una sola home; dos entradas HTML cubren el requisito actual.
- Depender de metadatos añadidos por React: es sencillo, pero los robots que no ejecuten JavaScript recibirían metadatos españoles en `/en`; se prefieren documentos HTML separados.

## Data and privacy

Los campos del formulario deben limitarse a información necesaria para responder. Antes de activarlo se definirá el texto visible sobre qué datos se envían, a quién y con qué finalidad, enlazando una política si el proveedor o el tratamiento lo exige. No se solicitarán presupuestos, credenciales, documentos ni datos sensibles en el primer contacto.

El proveedor del formulario será un encargado externo y debe conocerse antes de publicar para revisar destino de datos, protección contra abuso, retención y requisitos legales aplicables. No se guardarán mensajes en `localStorage`, logs del navegador ni archivos del repositorio.

El número de WhatsApp quedará necesariamente expuesto en el enlace público. Natalia debe aprobar qué número utiliza. El texto inicial no incluirá datos del visitante más allá de lo que este decida enviar al abrir WhatsApp.

## Testing strategy

- Vitest: límites e inclusiones exactos de ambos servicios; ausencia de precios y condiciones no aprobadas; construcción segura del enlace de WhatsApp; reglas puras de validación.
- Navegador local: navegación por anclas, orden de tabulación, etiquetas, errores, estados del formulario, enlace de WhatsApp y conservación de contenido ante error.
- Responsive: inspección a 1440, 390 y 320 px, zoom, contenido largo, foco, contraste y ausencia de desbordamiento horizontal.
- Rutas: carga directa de `/` y regresión manual de los índices y páginas históricas.
- Metadatos: título y descripción de la home.
- i18n: paridad estructural entre diccionarios, ausencia de claves vacías, selector entre rutas y mapeo de anclas en ambos sentidos.
- Build: comprobar que `dist/index.html` y `dist/en/index.html` contienen `lang`, canonical, alternates y metadatos correspondientes antes de ejecutar la aplicación.
- SEO: validar `robots.txt`, sitemap, JSON-LD y ausencia de precios, ubicación física o afirmaciones no aprobadas.
- Calidad: `npm run check` y `npm run build` antes de considerar completa la implementación.
- Integración: en preview, enviar un mensaje de prueba al endpoint seleccionado y comprobar recepción real antes de publicar.

## Delivery and rollback

Implementar únicamente tras aprobar este pre-work y un plan posterior. La preview puede desplegarse solo con autorización y configuración de contacto de prueba. La publicación en producción requiere autorización explícita.

El cambio no migra datos. Para retirarlo se restaura el componente y la selección de navbar anteriores, se eliminan los archivos específicos de la home y se revierte la configuración del formulario. Las rutas históricas permanecen intactas durante implementación y rollback.

## Risks

- Un formulario público puede recibir spam; el proveedor y su protección deben evaluarse antes de activarlo.
- El endpoint y el número son públicos por naturaleza; no deben confundirse con secretos de servidor.
- La promesa de asistentes de WhatsApp puede interpretarse como incluida; el contenido debe mantenerla condicionada a que aporte valor y a definir alcance.
- Sin casos de clientes todavía, la experiencia profesional debe aportar confianza sin inventar testimonios o resultados.
- Cambiar el navbar global por accidente podría alterar páginas históricas; la selección debe ser explícita por ruta.
- El formulario puede funcionar localmente y fallar por CORS o configuración de dominio; se exige prueba de recepción en preview.

## Open questions

No quedan decisiones técnicas bloqueantes para preparar el plan o implementar y revisar localmente.

Antes de probar una preview o publicar se deberá crear y configurar el formulario de Basin, aprobar el texto de privacidad asociado, aprobar el mensaje inicial de WhatsApp y revisar la traducción inglesa final. Son datos de activación y revisión, no cambios de arquitectura.

Los plazos comerciales, casos iniciales, modalidades detalladas y contenido de «Quién soy» no bloquean este primer incremento porque no se publicarán todavía.

## Approval

Natalia aprobó este diseño técnico el 9 de septiembre de 2026, incluyendo Basin mientras pueda usarse gratuitamente y adaptarse al diseño. También aprobó el número público de WhatsApp, pidió incorporar SEO desde la primera versión y confirmó la presencia de un footer.

Esta aprobación autoriza preparar el plan y la propuesta visual. No autoriza todavía la implementación, la creación de cuentas externas, la preview ni la publicación.

Natalia aprobó el dominio `monteslab.com`, el nombre público «Natalia Montes», el alcance remoto global, español e inglés como idiomas iniciales y la dirección visual con su ajuste Clay. Aprobó explícitamente esta solución técnica multilingüe el 10 de septiembre de 2026 y autorizó avanzar al plan. La aprobación no autoriza todavía implementación, creación de cuentas, preview ni publicación.
