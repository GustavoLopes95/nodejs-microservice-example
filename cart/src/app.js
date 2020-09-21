const express = require('express');
const bodyParse = require('body-parse');

const app = express();
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extend: false }));

const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);

module.exports = app;