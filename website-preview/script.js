const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
  mobileNav.hidden = isOpen;
});

mobileNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileNav.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menú');
  });
});

const specialties = [
  { id: 'sdma', title: 'Prueba SDMA', summary: 'Análisis de apoyo para valorar la salud renal de perros y gatos.', image: 'specialty-cat-checkup.jpg' },
  { id: 'radiologia', title: 'Radiología', summary: 'Imágenes que ayudan a explorar huesos y estructuras internas.', image: 'specialty-dog-radiology.jpg' },
  { id: 'nutricion', title: 'Nutrición', summary: 'Orientación alimentaria adaptada a su edad y necesidades.', image: 'specialty-dog-nutrition.jpg' },
  { id: 'oftalmologia', title: 'Oftalmología', summary: 'Valoración de los ojos y de posibles cambios en la visión.', image: 'specialty-cat-ophthalmology.jpg' },
  { id: 'endoscopia', title: 'Endoscopía', summary: 'Exploración interna mediante una cámara especializada.', image: 'specialty-dog-endoscopy.jpg' },
  { id: 'ortopedia', title: 'Ortopedia', summary: 'Evaluación de huesos, articulaciones y movilidad.', image: 'specialty-dog-orthopedics.jpg' },
  { id: 'laboratorio', title: 'Laboratorio clínico', summary: 'Análisis de muestras que complementan la evaluación clínica.', image: 'specialty-cat-laboratory.jpg' },
  { id: 'cirugia', title: 'Cirugía general y especializada', summary: 'Procedimientos quirúrgicos según la valoración veterinaria.', image: 'specialty-dog-surgery.jpg' },
  { id: 'dermatologia', title: 'Dermatología', summary: 'Evaluación de la piel, el pelaje y las molestias cutáneas.', image: 'specialty-dog-dermatology.jpg' },
  { id: 'dental', title: 'Limpieza dental', summary: 'Cuidado profesional para dientes y encías.', image: 'specialty-dog-dental.jpg' },
  { id: 'cardiologia', title: 'Cardiología', summary: 'Evaluación del corazón y su funcionamiento.', image: 'specialty-cat-cardiology.jpg' },
  { id: 'quirofano', title: 'Quirófano', summary: 'Área equipada para intervenciones veterinarias.', image: 'specialty-dog-surgery.jpg' },
  { id: 'ultrasonido', title: 'Ultrasonido', summary: 'Imágenes en tiempo real para apoyar la evaluación interna.', image: 'specialty-cat-ultrasound.jpg' },
  { id: 'anestesia', title: 'Anestesia inhalatoria', summary: 'Técnica de anestesia empleada en procedimientos indicados.', image: 'specialty-dog-surgery.jpg' },
  { id: 'monitoreo', title: 'Monitoreo electrónico', summary: 'Seguimiento de signos vitales con equipos especializados.', image: 'specialty-cat-cardiology.jpg' }
];

const specialtySection = document.querySelector('.specialties-section');
const specialtyTrack = specialtySection.querySelector('.specialty-track');

specialties.forEach((specialty, index) => {
  const slide = document.createElement('article');
  slide.className = 'specialty-slide';
  slide.innerHTML =
    '<button class="specialty-card" type="button" aria-expanded="false" aria-describedby="specialty-summary-' + specialty.id + '">' +
      '<img src="assets/' + specialty.image + '" alt="" loading="' + (index < 4 ? 'eager' : 'lazy') + '">' +
      '<span class="specialty-shade" aria-hidden="true"></span>' +
      '<span class="specialty-reveal-shade" aria-hidden="true"></span>' +
      '<span class="specialty-number" aria-hidden="true">' + String(index + 1).padStart(2, '0') + ' / ' + specialties.length + '</span>' +
      '<span class="specialty-plus" aria-hidden="true">+</span>' +
      '<span class="specialty-content">' +
        '<span class="specialty-title">' + specialty.title + '</span>' +
        '<span class="specialty-summary" id="specialty-summary-' + specialty.id + '">' + specialty.summary + '</span>' +
      '</span>' +
    '</button>';
  const button = slide.querySelector('button');
  button.setAttribute('aria-label', specialty.title + ', mostrar resumen');
  button.addEventListener('click', () => {
    const willOpen = !button.classList.contains('is-open');
    specialtyTrack.querySelectorAll('.specialty-card.is-open').forEach((openCard) => {
      openCard.classList.remove('is-open');
      openCard.setAttribute('aria-expanded', 'false');
      openCard.setAttribute('aria-label', openCard.querySelector('.specialty-title').textContent + ', mostrar resumen');
    });
    button.classList.toggle('is-open', willOpen);
    button.setAttribute('aria-expanded', String(willOpen));
    button.setAttribute('aria-label', specialty.title + (willOpen ? ', ocultar resumen' : ', mostrar resumen'));
  });
  specialtyTrack.append(slide);
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  specialtyTrack.querySelectorAll('.specialty-card.is-open').forEach((card) => {
    card.classList.remove('is-open');
    card.setAttribute('aria-expanded', 'false');
    card.setAttribute('aria-label', card.querySelector('.specialty-title').textContent + ', mostrar resumen');
  });
});

const products = [
  { title: 'Aceite de salmón', summary: 'Pets Eat! en presentaciones original y con CBD.', image: 'producto-salmon-oil.png', alt: 'Botellas de Salmon Oil Pets Eat! en la tienda' },
  { title: 'Guardian', summary: 'Presentaciones para perros de distintos tamaños. Consulta la opción adecuada en tienda.', image: 'producto-guardian.png', alt: 'Cajas de Guardian para perros en varios tamaños' },
  { title: "Hill's Prescription Diet", summary: 'Alimentos de prescripción para necesidades nutricionales específicas, con orientación veterinaria.', image: 'producto-hills.png', alt: "Bolsas de alimento Hill's Prescription Diet" },
  { title: 'GroomCare', summary: 'Producto Toque de Brillo para el cuidado del pelaje de las mascotas.', image: 'producto-groomcare.png', alt: 'Botellas de GroomCare Toque de Brillo' },
  { title: 'Groovy Sprinkles', summary: 'Bocadillos tipo jerky de pollo y cerdo para perros y gatos.', image: 'producto-groovy.png', alt: 'Frascos Groovy Sprinkles de pollo y cerdo' }
];

const productSection = document.querySelector('.products-section');
const productTrack = productSection.querySelector('.product-track');

products.forEach((product, index) => {
  const slide = document.createElement('article');
  slide.className = 'specialty-slide product-slide';
  slide.innerHTML =
    '<div class="product-card">' +
      '<div class="product-media"><img src="assets/' + product.image + '" alt="' + product.alt + '" loading="' + (index < 3 ? 'eager' : 'lazy') + '"></div>' +
      '<div class="product-info">' +
        '<span class="product-number">' + String(index + 1).padStart(2, '0') + ' / ' + String(products.length).padStart(2, '0') + '</span>' +
        '<h3>' + product.title + '</h3>' +
        '<p>' + product.summary + '</p>' +
        '<div class="product-action"><button class="product-buy" type="button" disabled aria-label="Comprar ' + product.title + ', opción de maqueta">Comprar <span aria-hidden="true">↗</span></button></div>' +
      '</div>' +
    '</div>';
  productTrack.append(slide);
});

function initCarousel(section, label) {
  if (typeof EmblaCarousel !== 'function' || typeof EmblaCarouselAutoScroll !== 'function') return;
  const viewport = section.querySelector('.specialty-viewport');
  const autoScroll = EmblaCarouselAutoScroll({
    speed: 0.85,
    startDelay: 700,
    direction: 'forward',
    playOnInit: false,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
    stopOnFocusIn: true
  });
  const carousel = EmblaCarousel(viewport, { loop: true, align: 'start', dragFree: true }, [autoScroll]);
  const motion = carousel.plugins().autoScroll;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const controls = section.querySelector('.specialty-controls');
  const pauseButton = section.querySelector('.specialty-pause');
  let manuallyPaused = false;
  let sectionVisible = !('IntersectionObserver' in window);

  section.classList.add('is-enhanced');
  controls.hidden = false;
  section.querySelector('.specialty-prev').addEventListener('click', () => carousel.scrollPrev());
  section.querySelector('.specialty-next').addEventListener('click', () => carousel.scrollNext());

  const syncMotion = () => {
    pauseButton.hidden = reduceMotion.matches;
    if (manuallyPaused || reduceMotion.matches || document.hidden || !sectionVisible) motion.stop();
    else motion.play();
    pauseButton.setAttribute('aria-pressed', String(manuallyPaused));
    pauseButton.setAttribute('aria-label', (manuallyPaused ? 'Reanudar' : 'Pausar') + ' recorrido de ' + label);
    pauseButton.innerHTML = manuallyPaused ? 'REANUDAR <span aria-hidden="true">▶</span>' : 'PAUSAR <span aria-hidden="true">Ⅱ</span>';
  };

  pauseButton.addEventListener('click', () => {
    manuallyPaused = !manuallyPaused;
    syncMotion();
  });
  carousel.on('autoScroll:play', () => {
    if (manuallyPaused || reduceMotion.matches || document.hidden || !sectionVisible) motion.stop();
  });
  document.addEventListener('visibilitychange', syncMotion);
  reduceMotion.addEventListener('change', syncMotion);
  syncMotion();
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      sectionVisible = entries[0].isIntersecting;
      syncMotion();
    }, { threshold: 0.2 });
    observer.observe(section);
  }
}

initCarousel(specialtySection, 'especialidades');
initCarousel(productSection, 'productos');
