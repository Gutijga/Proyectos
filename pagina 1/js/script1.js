// Actividad A
function determinarAprobacion() {
    const nota1 = parseFloat(document.getElementById('nota1').value) || 0;
    const nota2 = parseFloat(document.getElementById('nota2').value) || 0;
    const nota3 = parseFloat(document.getElementById('nota3').value) || 0;
    const promedio = (nota1 + nota2 + nota3) / 3;
    const resultado = promedio >= 4 ? "Aprobado" : "Reprobado";
    document.getElementById('resultadoA').textContent = `Promedio: ${promedio.toFixed(2)} - Resultado: ${resultado}`;
}
 