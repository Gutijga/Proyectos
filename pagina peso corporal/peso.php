<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    // Recibir datos del formulario
    $nombre = htmlspecialchars($_POST['nombre']);
    $apellido = htmlspecialchars($_POST['apellido']);
    $telefono = htmlspecialchars($_POST['telefono']);
    $talla = floatval($_POST['talla']); // Talla en cm
    $peso = floatval($_POST['Peso']);   // Peso en kg

    // Convertir talla de cm a metros
    $talla_metros = $talla / 100;

    // Calcular el IMC
    $imc = 0; // Valor por defecto en caso de errores
    if ($talla_metros > 0) { // Evitar división entre cero
        $imc = $peso / ($talla_metros ** 2); // Fórmula del IMC
    }

    // Clasificación del IMC
    $clasificacion = "";
    if ($imc < 18.5) {
        $clasificacion = "Bajo peso";
    } elseif ($imc >= 18.5 && $imc <= 24.9) {
        $clasificacion = "Peso normal";
    } elseif ($imc >= 25 && $imc <= 29.9) {
        $clasificacion = "Sobrepeso";
    } elseif ($imc >= 30) {
        $clasificacion = "Obesidad";
    }

    // Mostrar los resultados
    echo "<!DOCTYPE html>";
    echo "<html lang='es'>";
    echo "<head><title>Peso Corporal</title></head>";
    echo "<body style='font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;'>";
    echo "<div style='max-width: 400px; margin: auto; background: white; padding: 20px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);'>";

    // Título del resultado
    echo "<h2>Resultados del cálculo</h2>";

    // Mostrar los valores recibidos
    echo "<p><strong>Nombre:</strong> $nombre</p>";
    echo "<p><strong>Apellido:</strong> $apellido</p>";
    echo "<p><strong>Teléfono:</strong> $telefono</p>";
    echo "<p><strong>Talla (cm):</strong> $talla</p>";
    echo "<p><strong>Peso (kg):</strong> $peso</p>";

    // Mostrar el resultado del IMC y su clasificación
    echo "<p><strong>IMC:</strong> " . round($imc, 2) . "</p>";
    echo "<p><strong>Clasificación:</strong> $clasificacion</p>";

    // Botón para regresar al formulario
    echo "<a href='index.html' style='display: inline-block; margin-top: 20px; text-decoration: none; color: white; background-color: #007BFF; padding: 10px 20px; border-radius: 5px;'>Volver</a>";
    echo "</div>";
    echo "</body>";
    echo "</html>";
} else {
    echo "Acceso no permitido";
}
?>
