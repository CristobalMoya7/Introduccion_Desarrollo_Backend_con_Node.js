"use strict";
// Aunque ya hicimos un servidor, normalmente vamos a iniciar los servidores con express

// npm init -y para crear al package
// npm install express para instalar express
// Express usa closure y no this ya que no usa el new

// Cargar la libreria express
const express = require("express");

// Crear la aplicacion
const app = express();

// Añadir una ruta
app.get("/", (request, responde, next) =>{
    responde.send("Hola");
})

// Arrancar el servidor
app.listen(8080, () => {
    console.log("Servidor HTTP arrancado en http://127.0.0.1:8080");
})