document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = contactForm.querySelector("input[type='text']").value.trim();
    const email = contactForm.querySelector("input[type='email']").value.trim();
    const message = contactForm.querySelector("textarea").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    alert("Thank you, " + name + "! Your message has been sent.");
    contactForm.reset();
  });

const hamburger = document.getElementById('hamburger');
const overlay = document.getElementById('overlay');
const sidemenu = document.getElementById('sidemenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  sidemenu.classList.toggle('open');
  overlay.classList.toggle('show');
});

overlay.addEventListener('click', () => {
  hamburger.classList.remove('open');
  sidemenu.classList.remove('open');
  overlay.classList.remove('show');
});


