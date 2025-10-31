import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { gsap } from "gsap";

const menuIcon = document.querySelector('.menu-icon');
const menuNav = document.querySelector('header nav');

function ouvreFermeMenu() {
  menuNav.classList.toggle('closed');
}

menuIcon.addEventListener('click', ouvreFermeMenu);


import './style.css'
