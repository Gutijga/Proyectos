<?php
// Conexión a la base de datos con PDO
$servername = "bqjf3srupsxxucsttyys-mysql.services.clever-cloud.com";  // Cambiar si es necesario
$username = "upbddwhlokxra7vz";         // Cambiar si es necesario
$password = "tbNW2DFcqEVI6AepS3Mu";     // Cambiar si es necesario
$dbname = "bqjf3srupsxxucsttyys";       // Nombre de la base de datos

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Error de conexión: " . $e->getMessage());
}

// Recibir los datos del formulario
$documento = $_POST['documento'];
$contraseña = $_POST['contraseña'];

// Consulta para verificar si el documento existe
$sql = "SELECT * FROM usuarios WHERE documento = :documento";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':documento', $documento);
$stmt->execute();
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$user) {
    // Si no se encuentra el documento
    echo "<script>alert('No se encontró el número de documento.'); window.location.href='iniciosesion.html';</script>";
} else {
    // Verificar la contraseña (asegúrate de usar password_hash en el registro)
    if (password_verify($contraseña, $user['contraseña'])) {
        // Si el documento y la contraseña son correctos
        echo "<script>alert('Bienvenido al equipo de orientación'); window.location.href='bienvenido.php';</script>";
    } else {
        // Si la contraseña es incorrecta
        echo "<script>alert('Contraseña incorrecta.'); window.location.href='iniciosesion.html';</script>";
    }
}
?>
