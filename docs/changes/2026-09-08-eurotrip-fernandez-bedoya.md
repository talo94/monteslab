# Guía Eurotrip familia Fernández Bedoya

## Resumen

Nueva guía pública en español para el 6–24 de septiembre de 2026, accesible desde Viajes. Reúne los 19 días, ciudades, seis hoteles con Google Maps, traslados, costes orientativos para tres personas, fuentes y datos pendientes.

## Documentación relacionada

- [RFC](../rfcs/2026-09-08-eurotrip-fernandez-bedoya.md)
- [Pre-work](../prework/2026-09-08-eurotrip-fernandez-bedoya.md)
- [Plan completado](../plans/2026-09-08-eurotrip-fernandez-bedoya.md)

## Implementación

Completadas TASK-1–TASK-6 y criterios AC-1–AC-8. Datos tipados independientes, navegación por anclas, presentación adaptable y acceso desde el índice junto a la guía anterior. Los horarios de los traslados tienen una única fuente. Los estados distinguen reservas, planes y pendientes.

Se incorporó Vitest al control de calidad existente. README, CONTRIBUTING y arquitectura documentan las pruebas, la ruta y el modelo de contenido. No se modificaron los datos de la guía anterior.

## Verificación

- `npm run check`: formato, ESLint, TypeScript y nueve pruebas aprobadas.
- `npm run build`: controles y compilación de producción aprobados.
- Prueba de mutación: cambiar temporalmente la salida de Ryanair hizo fallar la prueba correspondiente; tras restaurarla, las nueve pruebas pasaron.
- Navegador local: carga directa, regreso al índice y apertura de la guía anterior; 19 días, seis hoteles, destinos de anclas válidos y enlaces descriptivos.
- Revisión visual a 1440, 390 y 320 px, sin desbordamiento horizontal. Enlace de salto y activación de enlaces con teclado; ancla de hoteles visible bajo la navegación fija.
- Sin errores o avisos de consola durante la revisión. URLs Google Maps revisadas para los seis establecimientos.
- Revisión de código nuevo y salida de producción sin documentos originales, identificadores privados ni detalles excluidos detectados. `git diff --check` sin incidencias.

## Decisiones y límites

Se utilizó el navegador integrado de Codex al no estar disponible la CLI agent-browser. Los controles se ejecutaron con el runtime Node compatible incluido en el entorno. No hay desviaciones funcionales del plan.

La guía conserva como pendientes las confirmaciones de vuelos, servicios sugeridos, entrega anticipada de equipaje y tren final Valencia–Madrid. Las pruebas no validan disponibilidad o tarifas en tiempo real; las fuentes muestran fecha de consulta.

La usuaria autorizó crear el PR tras la verificación local. La rama se apoya en el PR #9 de controles de calidad, todavía abierto: este PR tiene como base `feature/new-singer` para aislar la guía. Tras integrar #9, debe dirigirse a `main` antes de integrar esta función. No se autoriza aquí el merge ni el despliegue manual. Los documentos ajenos no versionados se mantienen fuera del commit.
