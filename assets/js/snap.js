const collapse = document.querySelector("nav");
const navToggle = document.querySelector(".hamburger");

const Menu = () => {
  collapse.classList.toggle("active");
};
navToggle.addEventListener("click", Menu);
