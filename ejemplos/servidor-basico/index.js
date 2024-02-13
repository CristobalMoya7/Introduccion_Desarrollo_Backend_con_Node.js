// CREAR SERVIDOR HTTP
// Al hacer un commit no hay que subir la carpeta node_modules ya que son las librerias y cosas que añadamos

// Cargar la libreria http
const http = require("http");
const Chance = require("chance");

const chance = new Chance(); // Creamos una instancia de esa libreria

// Definir un servidor
const server = http.createServer(function(request, response) { // Cuando se ejecute una peticion http pasamos dentro de la funcion
    response.writeHead(200, { "content-type": "text/html"}); // Tiempo de respuesta y como sera el contenido, puede ser text/ plain,html
    response.end(`Wake up, <b>${chance.name()}</b>`); // Esto nos va a dar un nombre aleatorio cada vez que actualicemos ya que como bien sabemos, el chance son cosas aleatorias y como hemos puesto nombre.
})

// Arrancar el servidor
server.listen(1337, "127.0.0.1");

console.log("Servidor arrancado en http://127.0.0.1:1337");

// Para no tener que estar parando el servidor cada vez que hagamos un cambio instalamos nodemon desde npx nodemon index.js

// Lanzamos npm init -y. Esto es un fichero que contiene info de nuestro programa. Aqui se quedaran las librerias de terceros. Se pone el y para que ponga valores predeterminador
// y no nos lo pregunte todo

// Ejemplo de instalar libreria. npm install chance que es una libreria que genera cosas aleatorias.