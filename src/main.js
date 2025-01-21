import './style.css';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1, // Toon één slide per keer
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

document.addEventListener('DOMContentLoaded', () => {
  const fadeInElements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active'); // active triggert de fade-in
        obs.unobserve(entry.target); // Element hoeft niet opnieuw geobserveerd te worden
      }
    });
  }, {
    threshold: 0.1
  });

  fadeInElements.forEach(el => observer.observe(el));
});

