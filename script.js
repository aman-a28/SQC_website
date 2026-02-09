/* Glow cursor */
const glow = document.getElementById('glow');
document.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

/* Chi-Chi interaction */
const dog = document.getElementById('dog');
dog.addEventListener('click', () => {
  dog.classList.toggle('active');
});