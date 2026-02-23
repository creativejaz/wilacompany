console.log("main.js loaded!");

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  // toggle instead of add
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active"); // optional: animate hamburger to X
});