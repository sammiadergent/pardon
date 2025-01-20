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

