// Validaciones básicas en JavaScript
document.getElementById('sum-form').addEventListener('submit', function (e) {
    // Obtener valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const talla = document.getElementById('talla').value.trim();
    const Peso = document.getElementById('Peso').value.trim();
    const errorMessage = document.getElementById('error-message');

    // Validar campos vacíos
    if (nombre === '' || apellido === '' || telefono === '' || talla === '' || Peso === '') {
        e.preventDefault(); // Detener el envío
        errorMessage.textContent = "Por favor, completa los campos.";
        errorMessage.style.display = "block"; // Mostrar mensaje de error
    } 
    // Validar si los valores son números
    // Validación exitosa
    else {
        errorMessage.style.display = "none"; // Ocultar mensaje de error
    }
});