<?php
// Configuración de la conexión a la base de datos
$servername = "bqjf3srupsxxucsttyys-mysql.services.clever-cloud.com";  // Cambiar si es necesario
$username = "upbddwhlokxra7vz";         // Cambiar si es necesario
$password = "tbNW2DFcqEVI6AepS3Mu";     // Cambiar si es necesario
$dbname = "bqjf3srupsxxucsttyys";       // Nombre de la base de datos

// Crear conexión
$conexion = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}

// Obtener datos del formulario
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$documento = $_POST['Documento'];
$contraseña = password_hash($_POST['contraseña'], PASSWORD_DEFAULT); // Hash de la contraseña

// Preparar y ejecutar la consulta
$sql = "INSERT INTO usuarios (nombre, correo, documento, contraseña) VALUES (?, ?, ?, ?)";
$stmt = $conexion->prepare($sql);

if ($stmt === false) {
    die("Error en la preparación de la consulta: " . $conexion->error);
}

$stmt->bind_param("ssss", $nombre, $correo, $documento, $contraseña);

if ($stmt->execute()) {
    echo "<script>
                alert('Registro exitoso');
                window.location.href = 'iniciosesion.html'; // Cambia a la página que desees
              </script>";
} else {
    echo "Error: " . $stmt->error;
}

// Cerrar la conexión
$stmt->close();
$conexion->close();
?>
