document.getElementById('year').textContent = new Date().getFullYear();

const menuBtn = document.querySelector('.menu-btn');
const links = document.querySelector('.links');
menuBtn.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); observer.unobserve(e.target); } });
}, { threshold: 0.15 });
document.querySelectorAll('.card, .step, .stats div').forEach(el => { el.classList.add('reveal'); observer.observe(el); });

document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(e.target);
  const subject = encodeURIComponent('Consulta: ' + data.get('servicio'));
  const body = encodeURIComponent(`Nombre: ${data.get('nombre')}\nCorreo: ${data.get('email')}\n\n${data.get('mensaje')}`);
  window.location.href = `mailto:contacto@nooki.com?subject=${subject}&body=${body}`;
  document.getElementById('form-msg').textContent = '¡Gracias! Abriendo tu correo para enviar el mensaje.';
  e.target.reset();
});
