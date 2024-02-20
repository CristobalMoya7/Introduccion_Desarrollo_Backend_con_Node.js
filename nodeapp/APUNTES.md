
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