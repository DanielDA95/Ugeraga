document.addEventListener('DOMContentLoaded', () => {

    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector(".close");
    
    // Seleccionamos TODAS las imágenes que tengan la clase 'gallery-image'
    const galleryImages = document.querySelectorAll('.gallery-image');

    // Función para abrir modal
    const openModal = (e) => {
        if (!modal) return; // Seguridad si no hay modal
        const img = e.target;
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
    };

    // Función para cerrar modal
    const closeModal = () => {
        if (modal) modal.style.display = "none";
    };

    // Asignamos el evento CLICK a cada imagen de la galería
    galleryImages.forEach(img => {
        img.addEventListener('click', openModal);
    });

    // Evento para cerrar con la X
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Evento para cerrar haciendo click fuera de la imagen (fondo oscuro)
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    // Accesibilidad: Cerrar con tecla ESC
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

    /* =========================================
       2. LÓGICA DE CATEGORÍAS (PESTAÑAS)
       =========================================
       (Solo se ejecuta si existen elementos de categoría)
    */
    window.showCategory = function(categoryId) {
        const contents = document.getElementsByClassName('category-content');
        const selectedCategory = document.getElementById(categoryId);

        if (contents.length > 0) {
            // Ocultar todos
            Array.from(contents).forEach(content => {
                content.style.display = 'none';
            });
            // Mostrar seleccionado
            if (selectedCategory) {
                selectedCategory.style.display = 'block';
            }
        }
    };

    const carouselStates = {
        carousel1: 0, carousel2: 0, carousel3: 0, carousel4: 0,
        carousel5: 0, carousel6: 0, carousel7: 0, carousel8: 0,
        carousel9: 0, carousel10: 0,
    };

    // Hacemos la función global (window) porque probablemente la llames desde botones en HTML
    // NOTA: Lo ideal sería migrar esto a EventListeners también en el futuro.
    window.moveSlide = function(n, carouselId) {
        const carouselContainer = document.getElementById(carouselId);
        if (!carouselContainer) return; // Evita errores si el carrusel no existe en esta página

        const slides = carouselContainer.querySelector('.carousel-slide');
        if (!slides) return;

        const totalSlides = slides.children.length;
        const currentSlide = carouselStates[carouselId];

        if (n === 1 && currentSlide < totalSlides - 1) {
            carouselStates[carouselId]++;
        } else if (n === -1 && currentSlide > 0) {
            carouselStates[carouselId]--;
        }

        slides.style.transform = `translateX(-${carouselStates[carouselId] * 100}%)`;
    };
});
