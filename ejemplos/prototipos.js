"use strict"

// En este caso para que la funcion de this.saluda no se ejecute todas las veces que tenga un nombre lo ponemos de la siguiente manera
// Usamos prototipe!!!!!. Siempre apunta a quien hereda

function Persona(nombre) {
    this.nombre = nombre;
    // this.saluda = function() {console.log("Hola, soy ", this.nombre);}
}

const cristobal = new Persona("Cristobal");
const cynthia = new Persona("Cynthia");

Persona.prototype.saluda = function() {console.log("Hola, soy ", this.nombre);}

cristobal.saluda();
cynthia.saluda();

// Herencia simple ------------ Hereda de un ancestro

// Quiero hacer un tipo de Objetos llamado Agente que herede de Persona

function Agente(nombre) {
    // heredar el constructor de las personas
    // Ejecutar el constructor de las personas con mi this
    Persona.call(this, nombre);
}

// heredar las propiedades/metodos de las personas
// Se hereda con setPrototypeOf, primero ponemos donde queremos que vaya y despues lo que heredamos
Object.setPrototypeOf(Agente.prototype, Persona.prototype);

const smith = new Agente("Smith");
smith.saluda();

// Herencia múltiple ------------ Hereda de varios ancestros, en este caso de personas y superheroes

// Quiero que los agentes hereden tanto de las personas como de los superheroes

function Superheroe() {
    this.vuela = function() { console.log(this.nombre, 'vuela')}
  }
  
  // copiar todas las propiedades de los Superheroes al prototipo de los agentes. En este caso los Agentes ya heredan de Personas. Usamos Object.assign.
  //Eso hace que se copien las propiedades. Como siempre primero ponemos el destino donde van las propiedades y despues de donde se heredan
  Object.assign(Agente.prototype, new Superheroe());
  
  smith.vuela();
  
  console.log(smith);
  console.log(Agente.prototype);
  console.log(smith instanceof Persona)
  console.log(smith instanceof Agente)
  console.log(smith instanceof Superheroe)