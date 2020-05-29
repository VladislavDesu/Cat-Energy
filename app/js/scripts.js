var nav = document.querySelector(".main-nav");
var toggle = nav.querySelector(".main-nav__toggle");
var slide = document.querySelector(".expamples__slide");
var slideImg = slide.querySelectorAll(".examples__slide-img");
var sliderCheckbox = slide.querySelector(".examples__slider-checkbox");

toggle.addEventListener("click", function(event) {
    event.preventDefault();
    nav.classList.toggle("main-nav--closed");
});

sliderCheckbox.addEventListener("click", function(event) {
    event.preventDefault();
    sliderCheckbox.classList.toggle("examples__slider-checkbox--checked");
    slideImg[0].classList.toggle("examples__slide-img--show");
    slideImg[1].classList.toggle("examples__slide-img--show");
});
