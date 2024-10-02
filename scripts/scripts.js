let currentSlide = 0;

function moveSlide(n) {
    const slides = document.querySelector('.carousel-slide');
    const totalSlides = slides.children.length;
    currentSlide = (currentSlide + n + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
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

