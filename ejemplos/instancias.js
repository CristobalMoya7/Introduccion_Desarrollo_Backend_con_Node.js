"use strict"; // Modo estricto

// Crear una funcion para usarla como constructor de objetos

function Fruta(nombre) {
    this.nombre = nombre;
    this.saluda = function() {console.log("Hola, soy " + this.nombre)}
}

const limon = new Fruta("Limon"); // Esto nos va a crear un objeto de tipo fruta y lo va a meter en la variable limon

console.log(limon);

limon.saluda()