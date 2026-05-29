const express = require('express');
const routerPut = express.Router();

const authMiddleware = require('./auth');
const atualizarProduto = require('../controller/controller.update');

routerPut.put('/:id', authMiddleware, atualizarProduto);

module.exports = routerPut;