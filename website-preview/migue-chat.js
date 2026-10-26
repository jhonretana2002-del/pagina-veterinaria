/* Conversation flow inspired by Peekobot (MIT): https://github.com/Peekobot/peekobot */
(() => {
  const launcher = document.querySelector('#migue-launcher');
  const widget = document.querySelector('.migue-widget');
  const panel = document.querySelector('#migue-panel');
  const closeButton = document.querySelector('#migue-close');
  const bark = document.querySelector('#migue-bark');
  const barkTitle = document.querySelector('#migue-bark-title');
  const messages = document.querySelector('#migue-messages');
  const form = document.querySelector('#migue-form');
  const input = document.querySelector('#migue-input');
  const phoneLink = 'tel:+50640814789';
  const mapsLink = 'https://www.google.com/maps/search/?api=1&query=La+Bodeguita+de+Mi+Mascota+Gravilias+Desamparados+Costa+Rica';

  const topics = [
    ['cita', 'Agendar cita'],
    ['ubicacion', 'Horario y ubicación'],
    ['medicamentos', 'Medicamentos'],
    ['faq', 'Preguntas frecuentes']
  ];

  const replies = {
    cita: {
      prompt: 'Quiero agendar una cita',
      text: '¡Con gusto! Llama a la sede de Gravilias para consultar disponibilidad y coordinar la cita de tu mascota.',
      links: [{ label: 'Llamar al 4081-4789', href: phoneLink }]
    },
    ubicacion: {
      prompt: '¿Cuál es el horario y dónde están?',
      text: 'Estamos en Gravilias, Desamparados. Los horarios pueden variar; llama antes de visitarnos para confirmarlos.',
      links: [
        { label: 'Ver ubicación en Google Maps', href: mapsLink, external: true },
        { label: 'Llamar a la sede', href: phoneLink }
      ]
    },
    medicamentos: {
      prompt: 'Tengo una consulta sobre medicamentos',
      text: 'No puedo revisar inventario, indicar tratamientos ni calcular dosis. Llama a la sede con el nombre exacto del medicamento y sigue la receta de tu veterinario.',
      links: [{ label: 'Consultar por teléfono', href: phoneLink }]
    },
    faq: {
      prompt: '¿Qué servicios y productos tienen?',
      text: 'En la página puedes conocer nuestras especialidades y algunos productos. Para precios o disponibilidad de un producto, lo mejor es llamar a la tienda.',
      links: [
        { label: 'Ver especialidades', href: '#especialidades' },
        { label: 'Ver productos', href: '#productos' },
        { label: 'Consultar disponibilidad', href: phoneLink }
      ]
    },
    otro: {
      prompt: '',
      text: 'Puedo orientarte sobre citas, ubicación, medicamentos, servicios y productos. Para una consulta clínica, comunícate directamente con el equipo veterinario.',
      links: [{ label: 'Llamar a la sede', href: phoneLink }]
    }
  };

  function scrollToLatest() {
    messages.scrollTop = messages.scrollHeight;
  }

  function addMessage(text, role) {
    const message = document.createElement('p');
    message.className = `migue-message migue-message-${role}`;
    message.textContent = text;
    messages.append(message);
    scrollToLatest();
  }

  function addLinks(links) {
    if (!links?.length) return;
    const row = document.createElement('div');
    row.className = 'migue-actions';
    links.forEach((item) => {
      const link = document.createElement('a');
      link.href = item.href;
      link.textContent = item.label;
      if (item.external) {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      }
      row.append(link);
    });
    messages.append(row);
    scrollToLatest();
  }

  function addTopicButtons() {
    const row = document.createElement('div');
    row.className = 'migue-topics';
    row.setAttribute('aria-label', 'Temas de ayuda');
    topics.forEach(([topic, label]) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.dataset.topic = topic;
      button.textContent = label;
      row.append(button);
    });
    messages.append(row);
    scrollToLatest();
  }

  function answerTopic(topic) {
    const reply = replies[topic] || replies.otro;
    addMessage(reply.prompt, 'user');
    addMessage(reply.text, 'bot');
    addLinks(reply.links);
    addTopicButtons();
  }

  function openChat() {
    panel.hidden = false;
    widget.classList.add('migue-chat-open');
    bark.hidden = true;
    launcher.classList.remove('migue-is-barking');
    barkTitle.textContent = 'Migue';
    launcher.setAttribute('aria-expanded', 'true');
    launcher.setAttribute('aria-label', 'Cerrar chat con Migue');
    input.focus();
  }

  function closeChat() {
    panel.hidden = true;
    widget.classList.remove('migue-chat-open');
    launcher.setAttribute('aria-expanded', 'false');
    launcher.setAttribute('aria-label', 'Abrir chat con Migue');
    launcher.focus();
  }

  function greetWithBark() {
    if (!panel.hidden) return;
    barkTitle.textContent = '¡LADRIDO!';
    bark.hidden = false;
    launcher.classList.add('migue-is-barking');
    window.setTimeout(() => {
      launcher.classList.remove('migue-is-barking');
      barkTitle.textContent = 'Migue';
    }, 1350);
  }

  window.setTimeout(greetWithBark, 420);

  launcher.addEventListener('click', () => {
    if (panel.hidden) openChat();
    else closeChat();
  });
  closeButton.addEventListener('click', closeChat);
  bark.querySelector('.migue-bark-dismiss').addEventListener('click', () => { bark.hidden = true; });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !panel.hidden) closeChat();
  });

  messages.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-topic]');
    if (!button) return;
    button.closest('.migue-topics').remove();
    answerTopic(button.dataset.topic);
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    input.value = '';
    messages.querySelectorAll('.migue-topics').forEach((row) => row.remove());
    const normalized = text.toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const topic = /medic|dosis|pastill|farmac|receta/.test(normalized) ? 'medicamentos'
      : /horar|abren|abierto|ubic|direccion|donde|llegar/.test(normalized) ? 'ubicacion'
        : /servici|producto|precio|alimento|especialidad/.test(normalized) ? 'faq'
          : /cita|agend|reserv|pedir hora/.test(normalized) ? 'cita' : 'otro';
    const reply = replies[topic] || replies.otro;
    addMessage(text, 'user');
    addMessage(reply.text, 'bot');
    addLinks(reply.links);
    addTopicButtons();
  });
})();
