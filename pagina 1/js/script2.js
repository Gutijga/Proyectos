// Actividad B
function calcularSalario() {
    const horas = parseInt(document.getElementById('horas').value) || 0;
    let salario = horas <= 40 ? horas * 16000 : (40 * 16000) + ((horas - 40) * 25000);
    document.getElementById('resultadoB').textContent = `Salario Semanal: $${salario.toLocaleString()}`;
}
