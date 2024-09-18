// Add background color change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Smooth scroll effect
  document.querySelectorAll('.nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  
  // Mobile menu toggle functionality
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
  
  // Change text color on hover for nav links
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('mouseover', function() {
      this.style.color = '#FFC107'; // Yellow color on hover
    });
    
    link.addEventListener('mouseout', function() {
      this.style.color = ''; // Reset to default color when not hovering
    });
  });
  