const mongoose = require('mongoose');
require('dotenv').config();

const host = process.env.MONGO_DB_HOST;
const port = process.env.MONGO_DB_PORT;
mongoose.connect(`mongodb://${host}:${port}/clients`, {
  useNewUrlParser: true
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on('connected', () => {
  console.log('Mongoose default connection is open');
})

db.on('error', err => {
  console.error(`Mongoose default connection has occured \n ${err}`);
})

db.on('disconnected', () => {
  console.log('Mongoose default connection is disconnected');
})

process.on('SIGINT', () => {
  db.close(() => {
    console.log('Mongoose default connection is disconnected due to application termination');
  });
  process.exit(0);
})

module.exports = mongoose;