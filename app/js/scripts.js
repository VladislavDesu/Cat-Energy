var nav = document.querySelector(".main-nav");
var toggle = nav.querySelector(".main-nav__toggle");
var slider = document.querySelector(".expamples__slider");
var imgSlider = slider.querySelectorAll(".examples__img");
var sliderChecked = slider.querySelector(".examples__slide-checkbox");

toggle.addEventListener("click", function(event) {
    event.preventDefault();
    nav.classList.toggle("main-nav--closed");
});

sliderChecked.addEventListener("click", function(event) {
    event.preventDefault();
    sliderChecked.classList.toggle("examples__slide-checkbox--checked");
    imgSlider[0].classList.toggle("examples__img--show");
    imgSlider[1].classList.toggle("examples__img--show");
});
