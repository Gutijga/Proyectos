// Actividad C
function ordenarNumeros() {
    const num1 = parseFloat(document.getElementById('numero1').value) || 0;
    const num2 = parseFloat(document.getElementById('numero2').value) || 0;
    const numerosOrdenados = [num1, num2].sort((a, b) => a - b);
    document.getElementById('resultadoC').textContent = `Números en orden: ${numerosOrdenados.join(', ')}`;
}