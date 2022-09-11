/* MOBILE NAV */
const burger = document.getElementById("burger");
const nav = document.getElementById("menu");
const socialIcons = document.getElementById("social");
burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  socialIcons.classList.toggle("active");
});
/* SLIDESHOW FEATURES*/
let slideIndex = 0;
function currentSlide(n) {
  showSlide((slideIndex = n));
}
function showSlide(slideIndex) {
  let slides = document.getElementsByClassName("slider__slide");
  let links = document.getElementsByClassName("slider__links");
  for (let slide of slides) {
    slide.classList.remove("shown");
  }
  slides[slideIndex].classList.add("shown");
  for (let link of links){
    link.classList.remove("active");
  }
  links[slideIndex].classList.add("active");
}
showSlide(slideIndex);
/* ACCORDION FAQ */
const questions = document.getElementsByClassName("accordion__question");
for(let question of questions){
  question.addEventListener("click", () => {
    question.classList.toggle("active");
    let answer = question.nextElementSibling;
    if(answer.style.maxHeight){
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
    
  })
}
