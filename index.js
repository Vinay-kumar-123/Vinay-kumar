
window.onload = function() {
  if (window.location.hash) {
      window.location.href = window.location.origin + window.location.pathname;
  }
};

// const menuIcon = document.getElementById('menu-icon');
//     const navbar = document.querySelector('.navbar');
//     menuIcon.addEventListener('click', () => {
//       navbar.classList.toggle('active');
//     });

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".navbar a");

  
  menuIcon.addEventListener("click", function () {
      navbar.classList.toggle("active");
  });

  
  navLinks.forEach(link => {
      link.addEventListener("click", function () {
          navbar.classList.remove("active");
      });
  });
});

ScrollReveal({
  reset: true,
  distance: '70px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .contact-form, .project-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal(' .home-content h1,  .about-img', { origin: 'left' });
ScrollReveal().reveal(' .home-content p, .about-content', { origin: 'right' });

const typed = new Typed('.multiple-text' , {
  strings: ['Frontend Developer', 'MERN Stack Developer', 'YouTuber', 'AI AND ML Learner', 'Java Learner'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});
