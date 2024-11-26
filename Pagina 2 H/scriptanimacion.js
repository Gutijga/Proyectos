document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const ANIMATION_DURATION = 10000; // Duración de la animación en milisegundos

    // Verificamos si la animación ya ha sido mostrada en la sesión actual
    if (!sessionStorage.getItem('animationShown')) {
        // Si no ha sido mostrada, mostramos la animación
        loader.style.opacity = 1;
        setTimeout(() => {
            loader.style.opacity = 0; // Ocultar el loader
            setTimeout(() => {
                window.location.href = 'index.html'; // Redirigir a la página principal
            }, 500); // Tiempo para que el loader se desvanezca
        }, ANIMATION_DURATION); // Duración total de la animación

        // Marcamos que la animación ha sido mostrada
        sessionStorage.setItem('animationShown', 'true');
    } else {
        // Si la animación ya ha sido mostrada, ocultamos el loader de inmediato
        loader.style.display = 'none';
        window.location.href = 'paginaprincipal.html'; // Redirigir a la página principal
    }
});

