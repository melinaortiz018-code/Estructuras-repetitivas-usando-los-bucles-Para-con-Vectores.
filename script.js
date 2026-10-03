function validarNota(input) {
    let valor = parseFloat(input.value);
    if (valor > 10) {
        input.value = 10;
        valor = 10;
    } else if (valor < 0) {
        input.value = 0;
        valor = 0;
    }
    if (input.value === "") {
        input.className = "";
    } else if (valor == 10) {
        input.className = "excelente";
    } else if (valor >= 7) {
        input.className = "aprobado";
    } else {
        input.className = "reprobado";
    }
}
function procesarCalificaciones() {
    const notas = [];
    let suma = 0;
    let numAprobados = 0;
    let numReprobados = 0;
    const totalEstudiantes = 12;
    for (let i = 0; i < totalEstudiantes; i++) {
        let valorTexto = document.getElementById("n" + i).value;
        let nota;
        if (valorTexto === "") {
            nota = 0;
        } else {
            nota = parseFloat(valorTexto);
        }
        notas[i] = nota;
        suma = suma + nota;
        if (nota >= 7) {
            numAprobados = numAprobados + 1;
        } else {
            numReprobados = numReprobados + 1;
        }
    }
    let promedio = suma / totalEstudiantes;
    document.getElementById("promedio").innerHTML = "Promedio general: " + promedio.toFixed(2);
    document.getElementById("aprobados").innerHTML = "Aprobados: " + numAprobados;
    document.getElementById("reprobados").innerHTML = "Reprobados: " + numReprobados;
}
