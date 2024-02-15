'use strict';

const EventEmitter = require('node:events');

function Persona(nombre) {
  this.nombre = nombre;
  // this.saluda = function() { console.log('Hola soy', this.nombre); }
}

const pepe = new Persona('Pepe');
const luis = new Persona('Luis');

Persona.prototype.saluda = function() { console.log('Hola soy', this.nombre); }

pepe.saluda();
luis.saluda();

// Herencia simple

// Quiero hacer un tipo de Objetos llamado Agente que herede de Persona

function Agente(nombre) {
  // heredar el constructor de las personas
  // ejecutar el constructor de las personas con mi this
  Persona.call(this, nombre);
}

// heredar las propiedades de las personas
// Agente.prototype = Object.create(Persona.prototype);
// Agente.prototype.constructor = Agente;
Object.setPrototypeOf(Agente.prototype, Persona.prototype);

const smith = new Agente('Smith');
smith.saluda();

// Object.assign(Agente.prototype, new EventEmitter());
Object.assign(Agente.prototype, EventEmitter.prototype);

// console.log(Agente.prototype)

smith.on('volando', function() {
  console.log('Smith está volando');
});

smith.emit('volando');