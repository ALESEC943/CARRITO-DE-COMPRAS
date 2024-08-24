const express = require('express');
const config = require('./config.js');

const clientes = require ('./rutas')

const app = express();
// CONFIGURACION
app.set('port', config.app.port)
//RUTAS
app.use ('/api/clientes',clientes)
module.exports = app;

