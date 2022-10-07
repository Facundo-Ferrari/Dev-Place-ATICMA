// Creo una variable para que el usuario eliga un numero

var numero = parseInt(prompt("Escribe un numero para saber si es primo "));

var esPrimo = true;

// Hago un "for" que determina si el numero es primo o no
for (let i = 2; i < numero / 2 ; i++) {
    if (numero % i === 0) {
        esPrimo = false;
    }
}
// Creo el mensaje que va a dar la maquina segun el resultado
if (esPrimo) {
    alert(numero + " es un numero primo.");
}
else {
  alert(numero + " no es un numero primo.");
}