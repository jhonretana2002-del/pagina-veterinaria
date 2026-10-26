# Implementación por fases: especialidades veterinarias

## Objetivo

Agregar a la página de inicio un recorrido horizontal de especialidades con fotografías de perros y gatos. Cada tarjeta muestra el nombre de un área y revela un resumen al pasar el cursor, recibir foco con el teclado o tocarla.

## Alcance de esta maqueta

- Se incluyeron las **15 áreas** que aparecen en las dos referencias entregadas: prueba SDMA, radiología, nutrición, oftalmología, endoscopía, ortopedia, laboratorio clínico, cirugía general y especializada, dermatología, limpieza dental, cardiología, quirófano, ultrasonido, anestesia inhalatoria y monitoreo electrónico.
- Los resúmenes son **texto provisional para diseño**. No se verificó que la veterinaria ofrezca cada servicio ni se establecieron protocolos, precios o resultados clínicos.
- Las fotografías son **imágenes ilustrativas generadas para esta maqueta**. No representan al personal, los pacientes ni las instalaciones reales del comercio. Se usan 12 escenas distintas y algunas se repiten en áreas relacionadas.

## Decisión de interacción

Se integró [Embla Carousel Auto Scroll v8](https://www.embla-carousel.com/docs/v8/plugins/auto-scroll) en archivos locales del proyecto. Su desplazamiento continuo, bucle y opciones de pausa permiten el recorrido hacia la izquierda solicitado. La sección empieza a moverse cuando entra en pantalla y se detiene al pasar el cursor, enfocar una tarjeta o usar el botón **Pausar**. También tiene flechas y arrastre manual.

La preferencia de [movimiento reducido de MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion) se respeta: el movimiento automático permanece apagado y las tarjetas siguen disponibles mediante las flechas y el arrastre.

## Fase 1 — Contenido

- [x] Extraer los 15 nombres de las imágenes de referencia.
- [x] Redactar resúmenes breves y comprensibles para una maqueta.
- [x] Revisar que la descripción de SDMA sea general y coherente con la [información del fabricante](https://www.idexx.com/en/veterinary/reference-laboratories/sdma/).
- [ ] Confirmar con el comercio cuáles especialidades ofrece realmente.
- [ ] Aprobar nombres, resúmenes y terminología clínica con el equipo veterinario.

## Fase 2 — Diseño e imágenes

- [x] Mantener rojo, blanco, grises y beige, con tipografía redondeada y amigable (Fredoka y Nunito) y detalles sutiles de huellas.
- [x] Crear escenas ilustrativas que alternan gatos y perros.
- [x] Optimizar 12 fotografías para el sitio y guardarlas dentro del proyecto.
- [x] Indicar en la página que las imágenes son ilustrativas.
- [ ] Elegir o aportar fotografías reales si se desea mostrar personal, equipos o instalaciones.

## Fase 3 — Desarrollo

- [x] Añadir la sección de especialidades en la página de inicio.
- [x] Incorporar el recorrido continuo hacia la izquierda con bucle.
- [x] Mostrar el resumen al pasar el cursor, enfocar o tocar cada tarjeta.
- [x] Incluir flechas, arrastre y botón de pausa/reanudación.
- [x] Pausar el movimiento cuando la sección sale de pantalla o la pestaña no está visible.
- [x] Desactivar el movimiento automático para quien prefiera movimiento reducido.
- [x] Mantener los archivos de Embla en el proyecto, sin depender de una conexión a CDN al visitar la página.

## Fase 4 — Verificación

- [x] Comprobar que se renderizan las 15 tarjetas.
- [x] Comprobar el desplazamiento hacia la izquierda y configurar el bucle continuo.
- [x] Comprobar pausa, avance manual y apertura de un resumen.
- [x] Comprobar resumen con foco de teclado y tarjeta en móvil.
- [x] Revisar escritorio y móvil sin desbordamiento horizontal.
- [ ] Revisar la versión final en los navegadores y dispositivos que utilizará el comercio.
- [ ] Validar el comportamiento con una configuración real de movimiento reducido antes del lanzamiento.

## Fase 5 — Aprobación y publicación

- [ ] Aprobar la lista definitiva de especialidades y sus resúmenes.
- [ ] Aprobar el uso de las imágenes ilustrativas o sustituirlas por fotografías reales.
- [ ] Revisar cualquier texto médico adicional con el equipo veterinario.
- [ ] Publicar la página y hacer una revisión final del sitio en vivo.

## Extensión — Productos de la tienda

- [x] Colocar el carrusel de productos justo debajo de la historia del comercio.
- [x] Incorporar las cinco fotografías proporcionadas: Salmon Oil, Guardian, Hill's Prescription Diet, GroomCare y Groovy Sprinkles.
- [x] Mostrar una descripción breve en cada tarjeta y reutilizar el desplazamiento, las flechas y la pausa del carrusel de especialidades.
- [x] Mostrar un botón «Comprar» en cada tarjeta y una franja inferior con «Nuestros productos» como opciones visuales de la maqueta.
- [x] Revisar que las imágenes carguen y que las tarjetas no desborden en escritorio ni en móvil.
- [ ] Conectar los botones de compra y el catálogo cuando se defina la venta en línea.
- [ ] Confirmar disponibilidad, nombres y descripciones con el comercio antes de publicar.
- [ ] Revisar cualquier recomendación sobre productos de uso veterinario con el equipo profesional.

## Archivos principales

- `index.html`: estructura y ubicación de la sección.
- `styles.css`: tarjetas, resúmenes, controles y adaptación móvil.
- `script.js`: listas de especialidades y productos, interacción y configuración de Embla.
- `assets/producto-*.png`: fotografías de productos proporcionadas para esta maqueta.
- `assets/specialty-*.jpg`: fotografías ilustrativas.
- `assets/vendor/`: Embla Carousel v8.6.0 y su licencia.

## Conjunto de prompts de las imágenes

**Modo:** ImageGen integrado. Las imágenes originales se generaron como fotografías cuadradas y luego se optimizaron para el sitio.

**Base común del prompt:** “Professional editorial photograph, vertical-friendly square frame; realistic dog or cat and veterinary equipment; clean warm clinic with cream and gray palette, navy scrubs, subtle muted red detail, natural diffused light; subject centered for crop; no text, logos, watermark, blood, graphic procedures or visible brand names.”

**Variaciones de escena usadas:**

1. `specialty-cat-checkup.jpg`: veterinaria escuchando con estetoscopio a un gato atigrado durante una revisión.
2. `specialty-dog-radiology.jpg`: perro golden retriever en sala de diagnóstico con radiografía visible al fondo.
3. `specialty-dog-nutrition.jpg`: perro pequeño en consulta de alimentación con veterinaria y plato de comida.
4. `specialty-cat-ophthalmology.jpg`: revisión ocular cuidadosa de un gato blanco y gris con luz manual.
5. `specialty-cat-ultrasound.jpg`: ecografía abdominal de un gato blanco y negro con equipo visible.
6. `specialty-dog-dental.jpg`: revisión dental no invasiva de un perro blanco con espejo clínico.
7. `specialty-dog-orthopedics.jpg`: veterinaria examinando una pata y articulación de un perro marrón.
8. `specialty-cat-cardiology.jpg`: auscultación de un gato naranja y blanco junto a monitor cardiaco.
9. `specialty-dog-dermatology.jpg`: veterinaria revisando la piel de un perro de pelo corto con luz manual.
10. `specialty-dog-surgery.jpg`: equipo veterinario y perro en preparación quirúrgica, sin procedimiento invasivo.
11. `specialty-dog-endoscopy.jpg`: veterinaria con endoscopio y monitor junto a un perro en sala clínica.
12. `specialty-cat-laboratory.jpg`: gato gris junto a veterinaria, microscopio y muestra de laboratorio.
