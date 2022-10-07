// Importo datos del index.html

var contra1 = document.querySelector(".password");
var contra2 = document.querySelector(".password2");
var lugar = document.querySelector(".contra2")
var boton = document.querySelector(".boton");
var boton2 = document.querySelector(".boton2");
var texto = document.querySelector(".texto");
var todo = document.querySelector(".todo");

// Creo funcion, uso alert hasta que el usuario conteste
function aparecerGuardar() {
  if (contra1.value == "" ) {
    alert("Ingrese su contraseña");
  }
  else if (contra1.value == contra1.value ) {
    lugar.classList.replace("contra2","contra2-total");
  }
}

// creo 2 variables y 1 function
var  prueba = 1;
var max = 4;
function comprobar(){
  
while(prueba < max ){
// Feliciamos con un alert en caso de haber coincidido la contra
if (contra1.value == contra2.value) {
    alert("Felicitaciones,recordás tu contraseña");
    todo.classList.replace("todo","todo-opacity");
    texto.classList.replace("texto","texto-bien");
    texto.textContent = "Gracias por participar";
       break;
}
// En caso de no coincidir, cedemos 3 intentos
else {
    alert("prueba  " + prueba + " de 3" );
    prueba++ 
    break
}
}

// Si falla los 3 intentos, mandamos un alert
if(prueba == max) {
    alert("Tenes que ejercitar la memoria"  );
    todo.classList.replace("todo","todo-opacity");
    texto.classList.replace("texto","texto-mal");
    texto.textContent = "vuelva a intentarlo ;)"; 
}
}

  contra1.focus();
  contra2.focus();

boton.onclick = aparecerGuardar;
boton2.onclick = comprobar;