import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { gsap } from "gsap";

const menuIcon = document.querySelector('.menu-icon');
const menuNav = document.querySelector('header nav');

function ouvreFermeMenu() {
  menuNav.classList.toggle('closed');
}

menuIcon.addEventListener('click', ouvreFermeMenu);

import './style.css';

const swiper = new Swiper(".swiper", {
  loop: true,
  spaceBetween: 30,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const boutonCote = document.getElementById("boutonCote");
boutonCote.addEventListener("click", () => {
  swiper.slideToLoop(0);
});

const boutonDessus = document.getElementById("boutonDessus");
boutonDessus.addEventListener("click", () => {
  swiper.slideToLoop(1);
});

const boutonDos = document.getElementById("boutonDos");
boutonDos.addEventListener("click", () => {
  swiper.slideToLoop(2);
});
