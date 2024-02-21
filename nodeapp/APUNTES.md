
Primero instalamos el generador de apps, en este caso primero iniciamos
npm express-generator -h Para ver las ayudas y iniciar el motor de vista que queramos, en este caso el ejs

Ponemos:
npm express-generator --ejs y el nombre de la carpeta, en este caso nodeapp

Segundo:
cd nodeapp y entramos en la carpeta

Tercero:
npm install para instalar las dependencias necesarias que pone en el package.json automaticamente generado

Cuarto:
SET DEBUG=nodeapp:* & npm start Para iniciar la app. Esto solo se pondra en modo desarrollo ya que es un modo de depuracion!! Podemos usarlo para encontrar los bugs. Lo ponemos en el dev de nodemon

Quinto: 
Accedemos con http://127.0.0.1:3000/ o con localhost:3000

------------------------

- npm start iniciaria lo que tenemos en start, que en este caso esta en packaje.json
- npm run dev seria para iniciarlo con el dev creado en packaje.json y tenemos que instalar npm i nodemon --save-dev. Lo instalamos asi para que no lo   instala como dependencias habituales, lo instala como devDependencias ya que nodemon luego cuando la app este lista no nos hara falta para lanzarlo.

Para hacer estandar el debug ya que en linux el comando no es igual installamos npm install cross-env y delante del dev ponemos cross-env

--------------------

Para usar otro puerto ponemos SET PORT=3001 & npm start o bien lo cambiamos desde la variable de bin/www que viene por defecto 3000
Tambien podemos cambiarlo en el package.json

----------

Existen variables para que nuestras librerias sepan si estan en produccion o en desarrollo. Es importante que las librerias que usemos funcionen igual en produccion y en desarrollo

NODE_ENV=production

Lo mejor es usarlo en produccion. Esto lo ponemos en el start o en el dev de package.json
- "dev": "cross-env NODEAPP_ENV=development DEBUG=nodeapp:* nodemon ./bin/www"
En el start lo pongo como production para tener 2 ejemplos:
- "start": "cross-env NODEAPP_ENV=production node ./bin/www",

Ejemplo: Si estamos creando una app que manda email podemos poner que el developmen no los mande y en production si para que asi cuando estemos creando la app no este mandando correos a lo loco

# Vulneralibidad

Para ver las vulnavilidades usamos
npm audit

En este caso tenemos una en las versiones menores a la 3.1.7, podemos instalar la mas reciente con:
npm instal ejs@latest Ejs es la libreria que tenemos

------------------------

npm repo nombre de la libreria, en este caso morgan y npm nos abrira la libreria en google

----------------------

Existe la libreria ejs-lint que nos dara ayudas para no meter mucho codigo en las vistas. Lo mejor es meter el menor codigo posible como el esPar