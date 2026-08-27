# Auditoría del sitio actual y dirección del rediseño

## Resumen ejecutivo

El sitio actual comunica correctamente los roles de Jesús Rivas —empresario, autor, conferencista y mentor— y concentra biografía, empresas, galería, libros y contacto en una sola página. Su principal oportunidad no está en agregar contenido, sino en ordenar la historia para que el visitante entienda rápidamente qué valor ofrece Jesús, por qué confiar en él y cuál es la siguiente acción.

La nueva propuesta posiciona primero su visión: **tecnología con una dimensión humana para hacer crecer empresas**. Después presenta credenciales, áreas de impacto, ecosistema empresarial, libros y contacto.

## Hallazgos del sitio actual

### Información y arquitectura

- Navegación de una sola página con: ¿Quién soy?, Sobre mí, Cofundador, Galería, Libros, Contacto y Redes sociales.
- Hay duplicidad conceptual entre “¿Quién soy?” y “Sobre mí”.
- La propuesta comercial está repartida en la biografía; no existe una sección clara de servicios, audiencias o resultados.
- Empresas, libros y contacto están presentes, pero falta una conexión narrativa entre ellos.
- La galería de Instagram aporta cercanía, aunque interrumpe la ruta principal de conversión.

### Diseño visual

- Paleta dominante: azul marino `#01233a`, gris claro aproximado `#eceff1`, blanco y verde desaturado cercano a `#7db9a6`.
- Tipografías: Alata para titulares y DM Sans para texto.
- La portada utiliza un retrato recortado, un titular sobredimensionado “MI ESPACIO” y etiquetas “Empresario / Autor”.
- Las secciones alternan fondos claros y oscuros, con una estética sobria y corporativa.
- La identidad se siente profesional, aunque algunas decisiones —espaciado extremo, múltiples estilos de tarjeta y uso de iconos— reducen cohesión.

### Movimiento e interacción

- Pantalla de carga inicial de gran presencia.
- Animaciones flotantes en retrato y personaje, rebote en indicador de scroll y entradas por desplazamiento.
- Transiciones de aproximadamente 1 segundo en varios bloques.
- Carrusel de galería y tarjetas de libros con información adicional.
- El volumen de movimiento compite con la lectura y puede aumentar la percepción de espera.

### UX, accesibilidad y rendimiento

- Existen landmarks y textos alternativos en buena parte de la página.
- El menú móvil usa un diálogo y los campos del formulario tienen etiquetas visibles.
- Hay enlaces de privacidad sin destino real y una inconsistencia: el enlace rotulado “YouTube” apunta a TikTok.
- Algunas imágenes de gran resolución cargan sin `loading="lazy"`; la fotografía principal mide 1600 × 2133 px.
- La pantalla de carga retrasa la percepción de contenido útil.
- El mapa embebido y EmailJS añaden dependencias a la página principal.
- La gran cantidad de anclas en la navegación de escritorio aumenta carga cognitiva.

## Dirección de diseño propuesta

### Principios

1. **Una idea en la portada:** tecnología, estrategia y visión humana.
2. **Autoridad verificable:** trayectoria desde 2006, formación y rol de cofundador.
3. **Conversión sin fricción:** dos llamadas principales, conocer trayectoria y conversar.
4. **Narrativa editorial:** menos tarjetas inconexas y más ritmo entre titulares, fotografía y datos.
5. **Movimiento con propósito:** revelar jerarquía, nunca ocultar información crítica.

### Sistema visual

- Azul tinta `#071b2b`: confianza, tecnología y madurez.
- Marfil `#f3efe6`: calidez y contraste con el lenguaje tecnológico.
- Verde menta `#a8f48a`: innovación y llamada a la acción.
- Syne para titulares con personalidad editorial y Manrope para lectura clara.
- Fotografía en escala de grises o saturación contenida para unificar material de distintas sesiones.

### Nueva arquitectura

1. Portada con posicionamiento, presentación y CTA.
2. Trayectoria con biografía condensada y datos clave.
3. Áreas de impacto: estrategia, liderazgo y autoría.
4. Ecosistema empresarial.
5. Libros.
6. Contacto directo y redes.

## Referentes tomados como inspiración

- **Simon Sinek:** organización clara de ideas y libros alrededor de una misión central.
- **Gary Vaynerchuk:** separación explícita de sus distintos roles y empresas, con contenido como prueba de actividad.
- **Daniel Habif:** uso de cifras y logros para construir autoridad en el mercado hispanohablante.

La propuesta no replica sus estéticas; toma los patrones de posicionamiento claro, prueba social y rutas específicas de conversión.

## Recomendaciones para la siguiente iteración

- Validar con Jesús una sola propuesta de valor principal.
- Definir audiencias prioritarias: empresas, organizadores de eventos, emprendedores o medios.
- Incorporar testimonios y casos con resultados verificables.
- Crear una página “Conferencias” con temas, video reel, audiencias y formulario de booking.
- Añadir un media kit descargable y fotografías autorizadas.
- Definir integración de contacto con CRM y analítica respetuosa de privacidad.
- Ejecutar Lighthouse, pruebas con teclado, lector de pantalla y dispositivos reales antes de publicar.
