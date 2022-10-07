 //Creo una variable que genere un numero aleatorio del 0 hasta 1000
 var aleatorio = Math.round(Math.random()*1000);

//Creo una variable para que el usuario pueda ingresar un numero del 0 1000.
 var elejido = parseInt(prompt("Escriba un numero del 0 al 1000"))
 var contador = 3;
 var intento = 1;

// El usuario probara numeros y se le dira si acerto o no con el numero aleatorio
 while(intento < contador) {
    if(elejido == aleatorio) {
      console.log(" Genial lograste adivinar, tu numero es " + elejido +  " y el numero de la consola es " + aleatorio);
      break;
    }
    else if(elejido < aleatorio) {
      console.log(" tu numero es menor" + " el numero de la consola es " + aleatorio);
      break;
  }
  else if(elejido > aleatorio) {
    console.log(" tu numero es mayor" + " el numero de la consola es " + aleatorio);
    break;
  }
 }