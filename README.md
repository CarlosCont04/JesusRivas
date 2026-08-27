# Prototipo de rediseño — Jesús Rivas

Prototipo estático desarrollado con Astro, HTML5, CSS3 y TypeScript. Combina una narrativa comercial clara con una dirección editorial-tecnológica, un formulario con mapa, línea del tiempo y páginas legales preliminares.

## Ejecutar localmente

```bash
npm install
npm run dev
```

Para validar la versión de producción:

```bash
npm run build
npm run preview
```

## Estructura

- `src/pages/index.astro`: composición de la página principal.
- `src/pages/aviso-de-privacidad.astro` y `terminos.astro`: páginas legales preliminares.
- `src/components/`: una sección reutilizable por componente.
- `src/data/site.ts`: navegación, hitos, empresas y datos de contacto tipados.
- `src/layouts/`: metadatos y estructura base.
- `src/styles/global.css`: sistema visual, responsive y animaciones.
- `public/media/`: fotografías y portadas administrables con Git LFS.

## Git LFS

El archivo `.gitattributes` ya declara los formatos multimedia. En un repositorio nuevo:

```bash
git lfs install
git add .gitattributes public/media
```

## Consideraciones antes de producción

- Confirmar derechos y versiones maestras de todas las fotografías.
- Convertir imágenes finales a AVIF/WebP con tamaños responsive.
- Integrar el formulario con el CRM o proveedor de correo elegido.
- Sustituir el contenido preliminar de las páginas legales por textos jurídicos aprobados.
- Crear una página específica para conferencias/booking.
- Sustituir métricas provisionales únicamente por cifras validadas por Jesús Rivas.
