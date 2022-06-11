// ------------------------------------------------------------------------------- Header

let header = document.querySelector(".header");
let logoLight = document.querySelector(".logo-light");
let logoDark = document.querySelector(".logo-dark");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);

  if (header.className === "header") {
    logoDark.classList.add("hidden");
    logoLight.classList.remove("hidden");
  } else if (header.className === "header sticky") {
    logoDark.classList.remove("hidden");
    logoLight.classList.add("hidden");
  }
});

let pageLoad = performance.getEntriesByType("navigation")[0];

if (pageLoad.type === "reload" || pageLoad.type === "navigate") {
  logoDark.classList.add("hidden");
}

// ------------------------------------------------------------------------------- Hamburger Menu
let burger = document.querySelector(".hamburger");
let burgerFirstLine = document.querySelector(".hamburger-lines:first-child");
let burgerSecondLine = document.querySelector(" .hamburger-lines:nth-child(2)");
let burgerThirdLine = document.querySelector(".hamburger-lines:last-child");
let nav = document.querySelector(".header__nav--links");

burger.addEventListener("click", function () {
  burgerFirstLine.classList.toggle("line-1");
  burgerSecondLine.classList.toggle("line-2");
  burgerThirdLine.classList.toggle("line-3");

  nav.classList.toggle("block");
  nav.classList.toggle("visible");
});

// ------------------------------------------------------------------------------- Swiper JS
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  effect: "cards",

  // pagination
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },

  // Navigation Arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
