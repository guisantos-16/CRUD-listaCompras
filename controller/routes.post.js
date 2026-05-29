const express = require('express');
const routerPost = express.Router();
const authMiddleware = require('./auth');

const {
    criarProduto
} = require('./controller.post');

routerPost.post('/', authMiddleware, criarProduto); 

module.exports = routerPost;