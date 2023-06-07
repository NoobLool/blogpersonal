function iniciar(){
    var resultados = document.getElementById("resultados");
    var campoNumero = document.getElementById("campoNumero");
    var boton = document.getElementById("calcular");

    boton.addEventListener("click", redondear, false);
}

function redondear(){
    redondearAEntero(campoNumero.value);
    redondearADecimas(campoNumero.value);
    redondearACentesimas(campoNumero.value);
    redondearAMilesimas(campoNumero.value);
}

function redondearAEntero(numero){
    resultados.innerHTML = "<br>Entero &rArr; " + (Math.round(numero));
}

function redondearADecimas(numero){
    resultados.innerHTML += "<br>Decimas &rArr; " + (Math.round(numero * 10 + .5) / 10);
}

function redondearACentesimas(numero){
    resultados.innerHTML += "<br>Centesimas &rArr; " + (Math.round(numero * 100 + .5) / 100);
}

function redondearAMilesimas(numero){
    resultados.innerHTML += "<br>Milesimas &rArr; " + (Math.round(numero * 1000 + .5) / 1000);
}

window.addEventListener("load", iniciar, false);