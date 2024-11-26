function togglePasswordVisibility() {
    const passwordInput = document.getElementById("Contrasena");
    const passwordIcon = document.getElementById("password-icon");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";  // Mostrar contraseña
        passwordIcon.classList.remove("fa-eye");
        passwordIcon.classList.add("fa-eye-slash"); // Cambiar icono
    } else {
        passwordInput.type = "password";  // Ocultar contraseña
        passwordIcon.classList.remove("fa-eye-slash");
        passwordIcon.classList.add("fa-eye"); // Cambiar icono
    }
}