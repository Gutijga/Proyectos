// Validaciones básicas en JavaScript
document.getElementById('sum-form').addEventListener('submit', function (e) {
    // Obtener valores de los campos
    const numero1 = document.getElementById('numero1').value.trim();
    const numero2 = document.getElementById('numero2').value.trim();
    const errorMessage = document.getElementById('error-message');

    // Validar campos vacíos
    if (numero1 === '' || numero2 === '') {
        e.preventDefault(); // Detener el envío
        errorMessage.textContent = "Por favor, completa ambos campos.";
        errorMessage.style.display = "block"; // Mostrar mensaje de error
    } 
    // Validar si los valores son números
    else if (isNaN(numero1) || isNaN(numero2)) {
        e.preventDefault(); // Detener el envío
        errorMessage.textContent = "Ambos valores deben ser números.";
        errorMessage.style.display = "block"; // Mostrar mensaje de error
    } 
    // Validación exitosa
    else {
        errorMessage.style.display = "none"; // Ocultar mensaje de error
    }
});