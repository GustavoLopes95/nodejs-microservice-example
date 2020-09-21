const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const db = require('./services/database');

require('./controllers/userController')(app);
const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);

module.exports = app;