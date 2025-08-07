document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      alert('Navigating to ' + link.textContent.trim() + ' page!');
    });
  });
});
