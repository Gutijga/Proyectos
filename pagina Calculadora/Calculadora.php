
<?php
// Introducción: Este script PHP realiza la suma de dos números ingresados en un formulario HTML.
// Procesa la solicitud mediante el método POST, valida los datos, calcula la suma y muestra el resultado.

// Verificar si la solicitud se realizó a través del método POST
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Obtener valores enviados desde el formulario y convertirlos a números flotantes
      $numero1 = floatval($_POST['numero1']); // Primer número
      $numero2 = floatval($_POST['numero2']); // Segundo número
      $operacion= strval($_POST['operacion']);

    // Realizar la suma
    switch ($operacion) {
      case 'suma':
        $result = $numero1 + $numero2;
          break;
      case 'resta':
        $result = $numero1 - $numero2;
          break;
      case 'multiplicacion':
        $result = $numero1 * $numero2;
          break;
      case 'division':
        $result = $numero1 / $numero2;
      break;

}
?>