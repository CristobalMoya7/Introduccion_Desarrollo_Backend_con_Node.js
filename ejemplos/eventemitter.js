'use strict';

const EventEmitter = require('node:events'); // Libreria de node

const emisor = new EventEmitter();

emisor.on('llamada de teléfono', function(quienLlama) { // Con emisor.on nos "suscribimos" al emit. Es decir, cuando salta el evento de emisor.emit salta esta funcion
  if (quienLlama === 'hermana') {
    return // Como no ponemos nada la ignoramos, solo hace el brr brr
  }
  console.log('ring ring');
});

emisor.once('llamada de teléfono', function() { // El .once tambien se suscribe pero hace que solamente salte la primera vez
  console.log('brr brr');
});


emisor.emit('llamada de teléfono', 'hermana')
emisor.emit('llamada de teléfono', 'hermana')