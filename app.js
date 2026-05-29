const express = require('express');
const post = require('./controller/routes.post');
const get = require('./controller/routes.get');
const del = require('./controller/routes.delete');
const up = require('./controller/routes.update');

const app = express();

app.use(express.json());
app.use('/lista', post);
app.use('/lista', get);
app.use('/lista', del);
app.use('/lista', up);

module.exports = app;