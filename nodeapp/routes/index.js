var express = require('express');
var router = express.Router();

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

module.exports = router;
