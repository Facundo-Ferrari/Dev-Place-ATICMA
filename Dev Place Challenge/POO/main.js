class Password {
    constructor(longitud, contrasena) {
      this.longitud = longitud;
      this.contrasena = contrasena;
    }
    esFuerte() {}
    generarPassword() {
      let numeros = "0,1,2,3,4,5,6,7,8,9";
      let letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let caracteres = "!@#$&*><";
      let suma = numeros + letras + caracteres;
      const crearPassword = (longitud) => {
        let password = "";
        for (let i = 0; i < longitud; i++) {
          let random = Math.floor(Math.random() * suma.length);
          password += suma.charAt(random);
        }
      };
    }
  }