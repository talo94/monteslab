# Excluir artefactos generados por Vercel

## Resumen

Se excluye `.vercel/` de Git, Prettier y ESLint para que los archivos generados durante el despliegue no se evalúen como código fuente. Se mantienen los controles de calidad existentes.

## Alcance

Corrección de configuración mediante la vía corta de mantenimiento; no requiere RFC, pre-work ni plan. No modifica features ni documentos personales.

## Verificación

Las exclusiones pasan las comprobaciones con `git check-ignore`, `prettier.getFileInfo` y `ESLint.isPathIgnored`. También se comprobó que `vercel.json` permanece incluido en Prettier.

`npm run build` pasó, incluyendo Prettier, ESLint, TypeScript y compilación de producción.

## Limitaciones

El log original también señalaba `vercel.json`. Este archivo versionado sigue sujeto a Prettier; excluir `.vercel/` no excluye `vercel.json`. El siguiente despliegue debe confirmar si persiste ese aviso.
