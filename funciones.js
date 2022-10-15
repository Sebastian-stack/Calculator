var calculo = "";

function calculadora(numero) {
    calculo = calculo + numero;
    document.getElementById("Resul").innerHTML = calculo;
}

function Borrar() {
    calculo = "";
    document.getElementById("Resul").innerHTML = calculo;
}


function resultado() {
    let resultado = eval(calculo)
    document.getElementById("Resul").innerHTML = resultado
    calculo = "";
}