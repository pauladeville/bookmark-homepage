const burger = document.getElementById("burger");
const nav = document.getElementById("menu");
const socialIcons = document.getElementById("social");
burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  socialIcons.classList.toggle("active");
});
