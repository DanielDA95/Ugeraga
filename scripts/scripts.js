// Creamos un objeto para almacenar el estado de cada carrusel
const carouselStates = {
    carousel1: 0,
    carousel2: 0,
    carousel3: 0,
    carousel4: 0,
    carousel5: 0,
    carousel6: 0,
    carousel7: 0,
    carousel8: 0,
    carousel9: 0,
    carousel10: 0,
};

function moveSlide(n, carouselId) {
    const slides = document.querySelector(`#${carouselId} .carousel-slide`);
    const totalSlides = slides.children.length;
    const currentSlide = carouselStates[carouselId];

    // Si n es 1 (avanzar) y no estamos en la última imagen
    if (n === 1 && currentSlide < totalSlides - 1) {
        carouselStates[carouselId]++;
    }
    // Si n es -1 (retroceder) y no estamos en la primera imagen
    else if (n === -1 && currentSlide > 0) {
        carouselStates[carouselId]--;
    }

    // Desplaza el carrusel a la imagen actual
    slides.style.transform = `translateX(-${carouselStates[carouselId] * 100}%)`;
}


function showCategory(categoryId) {
    // Oculta todas las secciones
    var contents = document.getElementsByClassName('category-content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }
    
    // Muestra la sección seleccionada
    var selectedCategory = document.getElementById(categoryId);
    if (selectedCategory) {
        selectedCategory.style.display = 'block';
    }
}
//Script de imagenes index galeria.
function openModal(imgElement) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = imgElement.src;
    captionText.innerHTML = imgElement.alt; // Muestra la descripción de la imagen
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}
// Añadir accesibilidad para cerrar modales con "Esc"
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});