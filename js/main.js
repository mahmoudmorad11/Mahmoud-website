//elements select
let menuToggler = document.querySelector(".navbar .toggler");
let menuClose = document.querySelector(".navbar .nav-links .close");
let aEls = document.querySelectorAll(".navbar .nav-links a");
let navLinks = document.querySelector(".navbar .nav-links");
let el = document.querySelector(".scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
let navBar = document.querySelector(".navbar");
let portfolioSec = document.querySelector(".portfolio");

// menu functionality
menuToggler.addEventListener("click", () => {
  navLinks.classList.add("open");
});
menuClose.addEventListener("click", () => {
  navLinks.classList.remove("open");
});
aEls.forEach((aEl) =>
  aEl.addEventListener("click", () => {
    navLinks.classList.remove("open");
  })
);

// change nav background
window.onscroll = () => {
  if (window.scrollY >= 100) {
    navBar.style.backgroundColor = "#003554";
  } else {
    navBar.style.backgroundColor = "transparent";
  }
};
