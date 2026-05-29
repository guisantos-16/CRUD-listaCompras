const express = require('express');
const routerDelete = express.Router();
const authMiddleware = require('./auth');

const { apagarItem } = require('./controller.delete');

routerDelete.delete('/:id', authMiddleware, apagarItem);

module.exports = routerDelete;