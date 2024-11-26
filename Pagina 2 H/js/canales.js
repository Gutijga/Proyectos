document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.carousel-vertical');
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;
    const totalSlides = slides.length;
    const slideHeight = slides[0].clientHeight;
  
    // Función para cambiar de imagen
    function changeSlide(index) {
      if (index < 0) {
        currentSlide = totalSlides - 1;
      } else if (index >= totalSlides) {
        currentSlide = 0;
      } else {
        currentSlide = index;
      }
      carousel.style.transform = `translateY(-${currentSlide * slideHeight}px)`;
    }
  
    // Cambiar de imagen automáticamente cada 10 segundos
    let autoSlide = setInterval(() => {
      changeSlide(currentSlide + 1);
    }, 10000);
  
    // Botones de navegación
    document.querySelector('.carousel-prev').addEventListener('click', function () {
      changeSlide(currentSlide - 1);
      resetAutoSlide();
    });
  
    document.querySelector('.carousel-next').addEventListener('click', function () {
      changeSlide(currentSlide + 1);
      resetAutoSlide();
    });
  
    // Reiniciar el temporizador de cambio automático
    function resetAutoSlide() {
      clearInterval(autoSlide);
      autoSlide = setInterval(() => {
        changeSlide(currentSlide + 1);
      }, 10000);
    }
  
    // Asegurar que la altura del carrusel se ajusta al tamaño de los slides
    window.addEventListener('resize', () => {
      const newSlideHeight = slides[0].clientHeight;
      carousel.style.transform = `translateY(-${currentSlide * newSlideHeight}px)`;
    });
  });
  