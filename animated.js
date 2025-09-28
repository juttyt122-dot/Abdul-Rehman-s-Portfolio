 // JS Scroll Animation
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top <= window.innerHeight * 0.85 && rect.bottom >= 0;
}

function revealOnScroll() {
  document.querySelectorAll('.scroll-3d').forEach(el => {
    if (isInViewport(el)) {
      el.classList.add('revealed');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


