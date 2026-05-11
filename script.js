
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


// Inicializar EmailJS
emailjs.init("jrslXejCzh2SMVsPe");

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    const templateParams = {
        nombre: form.querySelector('[name="nombre"]').value,
        email: form.querySelector('[name="email"]').value,
        telefono: form.querySelector('[name="telefono"]').value,
        proyecto: form.querySelector('[name="proyecto"]').value,
        zona: form.querySelector('[name="zona"]').value,
        mensaje: form.querySelector('[name="mensaje"]').value
    };

    console.log(templateParams);

    emailjs.send(
        "service_dw8j612",
        "template_55y1agb",
        templateParams
    )
    .then(() => {

        document.getElementById("popupMensaje").style.display = "flex";

        form.reset();

    })
    .catch((error) => {

        console.log(error);

        alert("Error al enviar.");

    });

});


function cerrarPopup() {
    document.getElementById("popupMensaje").style.display = "none";
}

const data = new FormData(form);

for (let pair of data.entries()) {
    console.log(pair[0], pair[1]);
}

