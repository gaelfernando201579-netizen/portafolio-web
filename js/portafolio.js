// 1. Modo claro / oscuro (se recuerda en localStorage)
const raiz = document.documentElement;
const btnTema = document.getElementById('tema-btn');

btnTema.addEventListener('click', () => {
  const oscuro = raiz.classList.toggle('dark');
  try {
    localStorage.setItem('tema', oscuro ? 'dark' : 'light');
  } catch (e) {
    // Ignorar si el almacenamiento local no está disponible
  }
});

// 2. Menú móvil
const btnMenu = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

btnMenu.addEventListener('click', () => {
  const abierto = menu.classList.toggle('hidden') === false;
  btnMenu.setAttribute('aria-expanded', abierto);
});

// 3. Enlace activo según la página actual
const actual = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('[data-nav]').forEach((a) => {
  if (a.getAttribute('href') === actual) {
    a.classList.add('text-neutral-900', 'dark:text-white');
    a.setAttribute('aria-current', 'page');
  }
});