function toggleNav() {
  const nav = document.getElementById('siteNav');
  nav.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
