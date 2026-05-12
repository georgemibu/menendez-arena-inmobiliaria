const proyectos = [
  {
    titulo: "Remodelación Integral Hurlingham",
    ubicacion: "Hurlingham, Buenos Aires",
    superficie: "45m2",
    duracion: "8 semanas",
    estado: "Finalizado",
    descripcion:
      "Casa de 5 ambientes sin uso hace 10 años. Reconstrucción total.",
    tags: ["Piscina", "Parrilla", "Pileta"],
    antes: "img/antes-1.jpg",
    despues: "img/despues-1.jpg"
  },

  {
    titulo: "Casa Moderna Nordelta",
    ubicacion: "Nordelta, Buenos Aires",
    superficie: "120m2",
    duracion: "16 semanas",
    estado: "Finalizado",
    descripcion:
      "Construcción completa de vivienda unifamiliar.",
    tags: ["Quincho", "Pileta", "Jardín"],
    antes: "img/antes-2.jpg",
    despues: "img/despues-2.jpg"
  },

    {
    titulo: "Casa Moderna Pilar",
    ubicacion: "Nordelta, Buenos Aires",
    superficie: "140m2",
    duracion: "26 semanas",
    estado: "Finalizado",
    descripcion:
      "Construcción completa de vivienda unifamiliar.",
    tags: ["Quincho", "Pileta", "Jardín"],
    antes: "img/antes-2.jpg",
    despues: "img/despues-2.jpg"
  },

    {
    titulo: "Casa Moderna Nordelta",
    ubicacion: "Nordelta, Buenos Aires",
    superficie: "120m2",
    duracion: "16 semanas",
    estado: "Finalizado",
    descripcion:
      "Construcción completa de vivienda unifamiliar.",
    tags: ["Quincho", "Pileta", "Jardín"],
    antes: "img/antes-2.jpg",
    despues: "img/despues-2.jpg"
  }

];


const slider = document.getElementById("projectsSlider");

proyectos.forEach((proyecto) => {

    const card = document.createElement("article");

    card.classList.add("projects-card");

    card.innerHTML = `
    
        <div class="projects-card__images">

            <div class="projects-card__image-wrapper">
                <span class="projects-card__badge">
                    Antes
                </span>

                <img src="${proyecto.antes}" alt="">
            </div>

            <div class="projects-card__image-wrapper">
                <span class="projects-card__badge projects-card__badge--after">
                    Después
                </span>

                <img src="${proyecto.despues}" alt="">
            </div>

        </div>

        <div class="projects-card__content">

            <h3 class="projects-card__title">
                ${proyecto.titulo}
            </h3>

            <p class="projects-card__location">
                ${proyecto.ubicacion}
            </p>

            <div class="projects-card__stats">

                <div>
                    <strong>${proyecto.superficie}</strong>
                    <span>Superficie</span>
                </div>

                <div>
                    <strong>${proyecto.duracion}</strong>
                    <span>Duración</span>
                </div>

                <div>
                    <strong>${proyecto.estado}</strong>
                    <span>Estado</span>
                </div>

            </div>

            <div class="projects-card__description">

                <h4>
                    Tipo de Proyecto
                </h4>

                <p>
                    ${proyecto.descripcion}
                </p>

            </div>

            <div class="projects-card__tags">

                ${proyecto.tags.map(tag =>
                    `<span>${tag}</span>`
                ).join("")}

            </div>

        </div>

    `;

    slider.appendChild(card);

});

const sliderContainer = document.getElementById("projectsSlider");

const prevBtn = document.getElementById("prevProject");
const nextBtn = document.getElementById("nextProject");

nextBtn.addEventListener("click", () => {

    sliderContainer.scrollBy({
        left: 560,
        behavior: "smooth"
    });

});

prevBtn.addEventListener("click", () => {

    sliderContainer.scrollBy({
        left: -560,
        behavior: "smooth"
    });

});