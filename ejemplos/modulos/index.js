"use strict"

const calculadora = require("./calculadora");
const suma = require("./calculadora");
// Esto aunque lo ponga mas veces solo lo inicializa una vez ya que lo guarda en memoria

console.log(calculadora.resta(5, 2));
console.log(calculadora.suma(5, 2));
