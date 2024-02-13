// Son instrucciones que ponemos despues de otra instruccion.

"use strict"

function suma(a, b, instrucciones) {
    const resultado = a + b;
    instrucciones(resultado);
}

suma(2, 5, function(resultado) {
    console.log(resultado);
})

// Asincronas

// Podriamos poner aqui debajo otra funcion en caso de que la de arriba tardase un tiempo y mientras la de arriba se ejecuta se ejecuta tambien la de abajo.
