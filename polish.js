// Give visitors a clear indication of their location without adding visual noise.
const currentPath = location.pathname.replace(/\/+$/, '/') || '/';
document.querySelectorAll('.desktop-nav a, .mobile-menu nav a').forEach(link => {
  if (link.getAttribute('href') === currentPath) link.setAttribute('aria-current', 'page');
});

// The mobile menu should always be dismissible using the keyboard.
document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  const menu = document.getElementById('mobileMenu');
  if (menu.hidden) return;
  menu.hidden = true;
  const button = document.getElementById('menuButton');
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-label', 'Open menu');
  document.body.style.overflow = '';
  button.focus();
});
