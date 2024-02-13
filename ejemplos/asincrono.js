// EJERCICIO:

// Hacer una función que reciba un texto y tras 2 segundos lo escriba en la consola. La llamaremos esribeTras2Segundos

"use strict";

function esribeTras2Segundos(texto) {
    setTimeout(() => {
        console.log(texto);
    }, 2000);
}

esribeTras2Segundos("Texto");

// Llamarla dos veces (texto1 y texto2). Deben salir los textos con sus pausas correspondientes. Al final escribir en la consola "Fin". 
// Llamada1 - 2 secs. - texto1 - llamada2 - 2 secs. - texto2 - Fin

function esribeTras2Segundos1(texto, callback) {
    setTimeout(() => {
        console.log(texto);
        callback();
    }, 2000);
}

esribeTras2Segundos1("Texto1", function() {
    esribeTras2Segundos1("Texto2", function () {
        console.log("Fin")
    });
});

// Bucle para que aparezca un numero n de veces

function escribeTras2Segundos2(texto, callback) {
    setTimeout(() => {
      console.log(texto);
      callback();
    }, 2000);
  }
  
  function serie(n, fn, callback) {
    if (n == 0) {
      // termino el bucle
      callback();
      return;
    }
    n = n - 1;
    fn('texto' + n, function() {
      serie(n, fn, callback)
    })
  }
  
  serie(5, escribeTras2Segundos2, function() {
    console.log('fin');
  })