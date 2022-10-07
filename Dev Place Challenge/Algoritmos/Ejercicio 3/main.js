var  ingresar = parseInt(prompt("Ingrese valor hora "));
var  ingresar2 = prompt("Nombre del empleado ");
var  ingresar3 = parseInt(prompt("¿Cuantos años lleva en la empresa? "));
var  ingresar4 = parseInt(prompt("¿Cuantas horas trabaja por mes? "));
var  h2 = document.querySelector("h2");
 
// Tomo el dato "ingresar", le multiplico "ingresar4", para calcular el valor hora por cantidad de horas trabajadas
var calculo = ingresar * ingresar4;

// Creo "calculo2" que multiplica "var calculo" * 30
var calculo2 = calculo * 30;

// Si la antiguedad en la empresa es mayor o igual a 10, hago la cuenta con la "var calculo2"
if(ingresar3 >= 10) {
   h2.textContent = ingresar2 + " tiene " + ingresar3 + " años de antiguedad " + " y su total es " + calculo2 + " pesos"
}

// Si es menor a 10, hago la cuenta con la "var calculo"
else {
  h2.textContent = ingresar2 + " tiene " + ingresar3 + " años de antiguedad " + " y su total es " + calculo + " pesos"
}