const prevButton = document.querySelector('.carrusel-prev');
const nextButton = document.querySelector('.carrusel-next');
const items = document.querySelector('.carrusel-items');
let index = 0;

function showSlide(n) {
    const totalItems = document.querySelectorAll('.carrusel-item').length;
    if (n >= totalItems) index = 0;
    else if (n < 0) index = totalItems - 1;
    else index = n;
    items.style.transform = `translateX(-${index * 100}%)`;
}

prevButton.addEventListener('click', () => showSlide(index - 1));
nextButton.addEventListener('click', () => showSlide(index + 1));

// Optional: auto-slide
setInterval(() => showSlide(index + 1), 3000); // Cambia de imagen cada 3 segundos
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});


window.addEventListener('load', function() {
    // Ocultar el loader después de 3 segundos
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
        
        // Redirigir a la página principal después de que termine el loader
        window.location.href ="paginaprincipal.html"; // Cambia "pagina_principal.html" por la URL a la que quieras redirigir
    }, 3000); // 3 segundos de duración de la animación de carga
});

function showForm() {
    document.getElementById("assistant-form").style.display = "block";
}

function closeForm() {
    document.getElementById("assistant-form").style.display = "none";
}
