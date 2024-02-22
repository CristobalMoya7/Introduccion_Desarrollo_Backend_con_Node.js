var express = require('express');
var router = express.Router();
const { query, custom, validationResult } = require('express-validator'); // Para cargar la libreria y validar el Query y con custom y tambien cargamos validationResult

/* GET home page. */ //Esto es un MIDELWARE. Recibe una peticion para devolver otra o ninguna "NEXT()"
router.get('/', function(req, res, next) {

  const now = new Date();
  
  res.locals.esPar = (now.getSeconds() % 2) === 0; // Si la hora da 0 es par
  res.locals.segundoActual = now.getSeconds(); // Segundo actual
  res.locals.inyeccion = '<script>alert("inyectado!")</script>'

  res.locals.users = [
    { name: "Cristobal", age: 24},
    { name: "Cynthia", age: 19},
  ]

  res.render('index', { otraCosa: 'Express' });
});

// GET /parametro_en_ruta/54 Si queremos recibir una peticion GET en esta ruta:
// GET /parametro_en_ruta/54?talla=s&color=rojo
router.get('/parametro_en_ruta/:numero', (req, res, next) => { // En vez de poner el numero 54 ponemos una variable :numero
  const numero = req.params.numero;
  const talla = req.query.talla;
  const color = req.query.color;

  res.send('he recibido el número ' + numero + ', talla ' + talla + ' color ' + color);
});

// GET /parametro/opcional/:numero? OPCIONAL
router.get("/parametro/opcional/:numero?", (req, res, next) => { // Si ponemos la interrogacion le decimos que ese parametro(variable) es opcional 

  res.send("He recibido el numero opcional" + numero);
});

// Recibir parametros con filtro por Regex
router.get('/producto/:nombre/talla/:talla([0-9]+)/color/:color', (req, res, next) => { //[0-9]+ nos dice que solamente puede ser talla que tenga numeros de 0-9 con 1 o mas digitos
  const nombre = req.params.nombre;
  const talla = req.params.talla;
  const color = req.params.color;

  res.send(`Me pedíste ${nombre} talla ${talla} color ${color}`);
});

// POST /usuario
// Crear un usuario

router.post('/usuario', (req, res, next) => {
  console.log(req.body);

  const apiKey = req.get('api-key') // Esto nos va a devolver la API-KEY en caso de que nosotros pongamos alguna en POSTMAN
  console.log(apiKey)

  res.send('ok')
});

// GET /enquerystring?age=20 VALIDACION DE QUERY ````http://localhost:3000/enquerystring?age=2&talla=3´´´´
router.get('/enquerystring', [ // Para tener varios los metemos en una lista. Usamos query y custom
  query('age').isNumeric().withMessage('must be numeric'), // Aqui validamos que AGE sea un numero. el withMessage es el mensaje que saldra en caso de no ser numerico
  query('talla').custom(value => {
    if (value > 5) return true
    else return false;
  }).withMessage('Must be greater that 5')
], 
(req, res, next) => {
  validationResult(req).throw(); // Lanza una excepcion si hay errores de validacion
  
  res.send('ok');
});


module.exports = router;
