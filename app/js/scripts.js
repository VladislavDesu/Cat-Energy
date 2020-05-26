var header = document.querySelector(".header");
var toggle = header.querySelector(".header__toggle");
var navigation = header.querySelector(".main-nav");

toggle.addEventListener("click", function(event) {
    event.preventDefault();
    navigation.classList.toggle("main-nav--closed");
    toggle.classList.toggle("header__toggle--closed");
});
