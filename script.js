function consultarSaldo() {
    const saldos = [100, 250, 50, 1000, 75, 300, 500, 20, 800, 150];
    
    const cuentaInput = document.getElementById("numCuenta").value;
    const cuenta = parseInt(cuentaInput);
    
    const resultadoDiv = document.getElementById("resultado");
    if (cuenta >= 0 && cuenta < saldos.length) {
        resultadoDiv.style.backgroundColor = "#d4edda";
        resultadoDiv.style.color = "#155724";
        resultadoDiv.innerHTML = "Saldo de cuenta " + cuenta + ": $" + saldos[cuenta];
    } else {
        resultadoDiv.style.backgroundColor = "#f8d7da";
        resultadoDiv.style.color = "#721c24";
        resultadoDiv.innerHTML = "Error: La cuenta no existe.";
    }
}