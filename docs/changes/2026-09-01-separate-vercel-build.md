# Separar controles de calidad y compilación de Vercel

## Resumen

El despliegue seguía fallando por el formato de `vercel.json`, mientras GitHub CI pasaba sobre el mismo commit. Se separa la compilación de despliegue de las comprobaciones completas del repositorio, sin excluir `vercel.json` de Prettier.

## Cambios

- `build` mantiene Prettier, ESLint, TypeScript y Vite para CI y trabajo local.
- `build:vercel` ejecuta TypeScript y Vite únicamente.
- `vercel.json` selecciona explícitamente `npm run build:vercel`.
- El hook pre-commit y GitHub Actions mantienen sus controles sin cambios.

## Verificación

`npm run build`, `npm run build:vercel` y `git diff --check` pasan localmente. Ambos builds generan los mismos archivos de producción. El nuevo despliegue se verificará tras subir el commit. El origen exacto de la diferencia de formato en Vercel no se ha determinado; no se atribuye a una modificación específica del archivo.

## Alcance y límites

Corrección de mantenimiento autorizada, sin RFC retroactivo ni cambios funcionales. La protección de `main` debe exigir `quality-and-build`; un despliegue exitoso de Vercel no sustituye la validación de GitHub. No se modifican permisos ni reglas remotas.
