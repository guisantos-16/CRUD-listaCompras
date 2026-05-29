const express = require('express');
const routerGet = express.Router();
const authMiddleware = require('./auth');

const {
    mostrarProduto
} = require('./controller.get');

routerGet.get('/:id', authMiddleware, mostrarProduto);
routerGet.get('/', authMiddleware, mostrarProduto);

module.exports = routerGet;