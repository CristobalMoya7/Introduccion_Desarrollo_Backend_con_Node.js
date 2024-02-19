
console.log("inicializo la calculadora")

module.exports = {
    suma: function(a, b) {
    return a + b
    },
    resta: function(a, b) {
        return a - b
    } 
}

// Se puede hacer asi, en dos module.export, como uno prefiera, hay mil formas.
// Hay que saber que el module.export exporta una funcion
// Tambien se puede poner module.sumar, restar pero no se puede poner export = function(a, b)...
// Lo mejor es siempre poner module.export
// Podemos encontrar un monton de modulos en npmjs.com