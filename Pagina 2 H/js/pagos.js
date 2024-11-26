const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const carousel = document.querySelector('.carousel-vertical');
const slides = document.querySelectorAll('.carousel-slide');
const slideCount = slides.length;
let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateY(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slideCount - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < slideCount - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});

// Automatic sliding every 7 seconds (adjusted for better visibility)
setInterval(() => {
    nextButton.click();
}, 7000);

// Initial call
updateCarousel();
