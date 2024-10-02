let currentSlide = 0;

function moveSlide(n) {
    const slides = document.querySelector('.carousel-slide');
    const totalSlides = slides.children.length;

    // Actualiza el slide actual
    currentSlide += n;

    // Si estamos en el último slide, vuelve al primero
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    // Si estamos en el primero y nos movemos hacia atrás, vuelve al último
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    // Mueve las diapositivas
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}
