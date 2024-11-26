// Seleccionamos todos los botones con clase 'month-button'
document.querySelectorAll('.month-button').forEach(button => {
    button.addEventListener('click', () => {
        const month = button.getAttribute('data-month');
        const popup = document.getElementById('popup');
        const pdfViewer = document.getElementById('pdf-viewer');

        // Establecemos la ruta al PDF correspondiente
        pdfViewer.src = `pdfs/${month}.pdf`; // Asegúrate de tener los PDFs en la carpeta 'pdfs'

        // Mostramos el popup
        popup.classList.add('show');
    });
});

// Función para cerrar el popup
document.querySelector('.close-btn').addEventListener('click', () => {
    const popup = document.getElementById('popup');
    const pdfViewer = document.getElementById('pdf-viewer');

    // Ocultamos el popup y reseteamos el src del PDF
    popup.classList.remove('show');
    pdfViewer.src = '';
});
