var header = document.querySelector(".header");
var toggle = header.querySelector(".header__toggle");
var navigation = header.querySelector(".main-nav");
var slider = document.querySelector(".expamples__slider");
var imgSlider = slider.querySelectorAll(".examples__img");
var sliderChecked = slider.querySelector(".examples__slide-checkbox");

toggle.addEventListener("click", function(event) {
    event.preventDefault();
    navigation.classList.toggle("main-nav--closed");
    toggle.classList.toggle("header__toggle--closed");
});

sliderChecked.addEventListener("click", function(event) {
    event.preventDefault();
    sliderChecked.classList.toggle("examples__slide-checkbox--checked");
    imgSlider[0].classList.toggle("examples__img--show");
    imgSlider[1].classList.toggle("examples__img--show");
});
