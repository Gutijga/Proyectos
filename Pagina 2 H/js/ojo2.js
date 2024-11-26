
document.querySelector('form').addEventListener('submit', function(event) {
    var password = document.getElementById('contraseña').value;
    var confirmPassword = document.getElementById('confirmar_contraseña').value;

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
        event.preventDefault(); // Detiene el envío del formulario
    }
});
