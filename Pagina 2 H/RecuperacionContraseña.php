<?php
// Iniciar sesión
session_start();

// Conectar a la base de datos
$servername = "bqjf3srupsxxucsttyys-mysql.services.clever-cloud.com";  // Cambiar si es necesario
$username = "upbddwhlokxra7vz";         // Cambiar si es necesario
$password = "tbNW2DFcqEVI6AepS3Mu";     // Cambiar si es necesario
$dbname = "bqjf3srupsxxucsttyys";       // Nombre de la base de datos

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Verificar si se han enviado los datos
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $documento = $conn->real_escape_string($_POST['documento']);
    $nueva_contraseña = $conn->real_escape_string($_POST['contraseña']);
    $confirmar_contraseña = $conn->real_escape_string($_POST['confirmar_contraseña']);

    // Validar que las contraseñas coincidan
    if ($nueva_contraseña !== $confirmar_contraseña) {
        echo "<script>alert('La Contraseña no coinciden'); window.location.href='RecuContraseña.html';</script>";
        exit();
    }

    // Hashear la nueva contraseña
    $nueva_contraseña_hash = password_hash($nueva_contraseña, PASSWORD_DEFAULT);

    // Actualizar la contraseña en la base de datos
    $sql = "UPDATE usuarios SET contraseña='$nueva_contraseña_hash' WHERE documento='$documento'";

    if ($conn->query($sql) === TRUE) {
        echo "<script>alert('Contraseña Cambiada exitosamente'); window.location.href='iniciosesion.html';</script>";
    } else {
        echo "Error al cambiar la contraseña: " . $conn->error;
    }
}

// Cerrar la conexión
$conn->close();
?>
