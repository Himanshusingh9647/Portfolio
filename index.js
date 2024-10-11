// Scroll Reveal Animation Initialization
document.addEventListener('DOMContentLoaded', () => {
  const sr = ScrollReveal({
    origin: 'top',
    distance: '20px',
    duration: 1000,
    delay: 200,
    easing: 'ease-out',
    reset: false, // Ensure animations only happen once
  });

  // Reveal animations
  sr.reveal('.hero-title', { delay: 300 });
  sr.reveal('.hero-cta', { delay: 500 });
  sr.reveal('.section-title', { interval: 200 });
  sr.reveal('.about-wrapper__image', { delay: 400 });
  sr.reveal('.about-wrapper__info', { delay: 500 });
  sr.reveal('.project-wrapper__text', { interval: 300 });
  sr.reveal('.project-wrapper__image', { delay: 600 });
  sr.reveal('.contact-wrapper__text', { delay: 400 });
});

// Smooth Scroll to Anchor Links
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
smoothScrollLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// Back-to-Top Button Smooth Scroll
const backToTopBtn = document.querySelector('.back-to-top');
if (backToTopBtn) {
  backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

// Lazy Loading Images for Better Performance
document.addEventListener('DOMContentLoaded', function () {
  const lazyImages = document.querySelectorAll('img');
  lazyImages.forEach((img) => {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.getAttribute('data-src');
            img.classList.add('fade-in');
            observer.unobserve(img);
          }
        });
      });
      observer.observe(img);
    } else {
      // Fallback if IntersectionObserver isn't supported
      img.src = img.getAttribute('data-src');
    }
  });
});

// Contact Section Form Submission (Optional Enhancement)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Logic for form validation and sending data can be added here
    alert('Thank you for reaching out! I will get back to you soon.');
    contactForm.reset(); // Clear form after submission
  });
}
