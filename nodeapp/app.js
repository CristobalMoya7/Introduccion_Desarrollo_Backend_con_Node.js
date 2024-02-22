var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express(); // Crea la app de express

// view engine setup
app.set('views', path.join(__dirname, 'views')); // Dice que las vistas estan en la carpeta view
app.set('view engine', 'ejs'); // Le dice a la app de express que el motor de vista que estoy usando es ejs

/*
* Middlewares / Todo lo de abajo son Middlewares
*/

app.locals.title = "Nodeapp"; // El locals dice que en todas las plantillas este este titulo de Nodeapp, pero no puede estar puesto en el index el otro titulo!!

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // El path.join hace que sea multiplataforma tanto en linux/mac/windows ya que las direcciones son diferentes en cada uno

// ERROR CREADO POR NOSOTROS!!!!
app.get("/sacaerror", (req, res, next) => {
  const error = new Error("Error fatal creado");
  error.status = 401
  next(error) // Este next error hace que salte todos los Middlewares y vaya al err de abajo
})

/*
// Ejemplo de un Middlewares que atiende a la ruta prueba y devuelve una respuesta
app.get("/prueba", (req, res, next) => {
  // res.send("Pagina de prueba");
  console.log("Peticion", req.hostname); // req.hostname Esto es un ejemplo
  next() // Este next hace que cuando se ejecute ese Middlewares sigan ejecutandose los demas ya que no se ejecutan dos a la vez
}) // Si no ponemos el next se quedara cargando internet constantemente
*/

app.use('/', require('./routes/index')); // El "/" significa que seria el localhost:0000 principal. Como ha iniciadp este Middlewares no ejecuta los de abajo.
app.use('/users', require('./routes/users')); // El "/user" significa que seria el localhost:0000/user

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // errores de validacion
  if (err.array) {
    const errInfo = err.array ({})[0];
    console.log(errInfo);
    err.message = `Not valid - ${errInfo.type} ${errInfo.path} in ${errInfo.location} ${errInfo.msg}`;
    err.status = 422; // Ponemos que es un error de tipo 422
  }

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
