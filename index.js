// Simple form alert – replace with email service later
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thanks for reaching out, " + document.getElementById("name").value + "! I’ll get back to you soon.");
  this.reset(); // clears the form
});
  const menu = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');

  menu.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  //End of initial javascript//
//Start of curriculum vitae js file//

