const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cart', { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;