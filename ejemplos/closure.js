"use strict";

//CLOSURE. Es crear una funcion dentro de otra con un return. Esto hace que esa funcion siempre tenga acceso al contexto de la otra funcion
// En ese caso tienen acceso a la variable numRuedas.
// Con eso podemos evitar el THIS!!!!!!!!!!!!

function creaVehiculo(nombre) {
    // contesto: nombre
    const numRuedas = 4;
    return {
        gerNombre: function() {return nombre; },
        setNombre: function(valor) { nombre = valor; },
        saluda: function() { console.log('Hola soy', nombre, 'y tengo', numRuedas, 'ruedas')}
  }
}

const mercedes = creaVehiculo("Mercedes");

console.log(mercedes)

console.log(mercedes.gerNombre());

mercedes.saluda();

setTimeout(mercedes.saluda, 2000);