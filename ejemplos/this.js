"use strict";

function Fruta(nombre) {
    this.nombre = nombre;
    this.saluda = function(saludo) {console.log(saludo,", soy " + this.nombre)}
}

const limon = new Fruta("Limon");

// This de arriba. JS busca el primer punto a la izquierda de los parentesis de ejecucion que seria el punto de limon.saluda
// Y lo que haya a la izquierda de ese punto se usa como this.
// En ese caso el this seria limon que es una const que hemos creado arriba.

limon.saluda("Hola") // Sin timeout

// En estos dos casos de abajo como no hay punto no hay this y entonces falla
// Para solucionarlo 
// En este caso podemos poner el bind y dentro le ponemos que queremos que sea el this, en este caso el limon
setTimeout(limon.saluda.bind(limon, "Hello"), 2000);

// En este caso igual que arriba, ponemos el bind
const saludoLimon = limon.saluda.bind(limon);
saludoLimon();

// Si quiero invocar ese this con otra cosa:
// Aqui usamos el metodo call, que sirve para los que tienen metodos adicionales. Tienen que ir separador por ,

const coche = {
    nombre: "Mercedes"
}

limon.saluda.call(coche, "Bonjour");

// Tambien se usa apply, es igual que call pero en este caso no van separados con ,

limon.saluda.apply(coche, ["Bonjour"]);
