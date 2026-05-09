
new Swiper(".galeria-mobile", {

    slidesPerView: 1,
    spaceBetween: 20,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }

});

const hamburger = document.getElementById("hamburger");

const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


