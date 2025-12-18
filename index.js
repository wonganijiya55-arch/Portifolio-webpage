// Guarded form handler: only attach if a demo form with id exists
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const nameField = document.getElementById('name');
    const name = nameField ? nameField.value : 'there';
    alert("Thanks for reaching out, " + name + "! I’ll get back to you soon.");
    this.reset();
  });
}

// Mobile menu toggle
const menu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
if (menu && navLinks) {
  menu.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}
