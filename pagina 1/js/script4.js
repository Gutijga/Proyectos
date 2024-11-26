// Actividad D
function gestionarCuenta() {
    const saldoInicial = parseFloat(document.getElementById('saldoInicial').value) || 0;
    const consignacion = parseFloat(document.getElementById('consignacion').value) || 0;
    const retiro = parseFloat(document.getElementById('retiro').value) || 0;
    const saldoFinal = saldoInicial + consignacion - retiro;

    if (saldoFinal >= 0) {
        document.getElementById('resultadoD').textContent = `Operación exitosa. Nuevo saldo: $${saldoFinal.toLocaleString()}`;
    } else {
        document.getElementById('resultadoD').textContent = `Saldo insuficiente. Saldo actual: $${saldoInicial.toLocaleString()}`;
    }
}