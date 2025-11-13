import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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

const swiperProduit = new Swiper(".produit", {
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
const boutonDessus = document.getElementById("boutonDessus");
const boutonDos = document.getElementById("boutonDos");

if (boutonCote && boutonDessus && boutonDos) {
  boutonCote.addEventListener("click", () => {
    swiperProduit.slideToLoop(0);
  });

  boutonDessus.addEventListener("click", () => {
    swiperProduit.slideToLoop(1);
  });

  boutonDos.addEventListener("click", () => {
    swiperProduit.slideToLoop(2);
  });
}


const title = document.querySelector(".title");

gsap.to(title, {
  scrollTrigger: {
    trigger: '.title',
    start: "top center",
    end: "bottom top",
    scrub: 1,

    toggleActions: "play none none reverse"
  },
  y: 200,
  ease: 'expo.out',
  duration: 3,
  opacity: 0.8,
  delay: 0.3,
});