// This file is just a collection of prefabricated component connections.
// It is recommended to create a separate file in the components folder and connect everything there

// Determining the operating system on mobile
// import { mobileCheck } from "./functions/mobile-check";
// console.log(mobileCheck())

// Screen Width Determination
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Throttling functions
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Fix fullscreen blocks
// import './functions/fix-fullheight';

// Burdger menu
// import { burger } from './functions/burger';

// Disable scrolling (do not forget to call the function)
// import { disableScroll } from './functions/disable-scroll';

// Enable scrolling (do not forget to call the function)
// import { enableScroll } from './functions/enable-scroll';

// Get site header height (do not forget to call the function)
// import { getHeaderHeight } from './functions/header-height';

// The custom scroll plugin
// import 'simplebar';

// The custom scroll plugin
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Swiper slider
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";

// Start slider
Swiper.use([Navigation, Pagination, Autoplay]);
const startSwiper = new Swiper(".start-slider", {
  slidesPerView: "auto",
  loop: true,
  initialSlide: 1,
  navigation: {
    nextEl: ".start-slider__next",
  },
  pagination: {
    el: ".start-slider__pagination",
    bulletClass: "start-slider__bullet",
    bulletActiveClass: "start-slider__bullet--active",
    renderBullet: function (index) {
      return `<div class="start-slider__bullet">0${index + 1}</div>`;
    },
  },
});

const testimonialsSwiper = new Swiper(".testimonials__slider", {
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 20,
  speed: 500,
  autoplay: {
    delay: 5000,
  },
  loop: true,
  pagination: {
    el: ".testimonials__slider-pagination",
    type: "bullets",
    clickable: true,
  },
});

// Animations on scroll
// import AOS from 'aos';
// AOS.init();

// Block parallax on scroll
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Smooth scrolling to anchors
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// swipe events on mobile
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Sending happened, here you can write any actions');
// };

// validateForms('.form-1', rules1, afterForm);

import { card } from "../js/functions/card-rotate";

// Timer
import { time } from "./functions/timer";
// Accordion
import { accordion } from "./functions/accordion";
