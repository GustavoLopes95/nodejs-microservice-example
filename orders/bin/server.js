const app = require('../src/app');
const http = require('http');
const debug = require('debug')('nodestr:server');

function normalizePort(value) {
  const port = parseInt(value, 10);

  if(isNaN(port)) {
    return value;
  }

  if(port >= 0) {
    return port;
  }

  return false;
}

const port = normalizePort(process.env.PORT || 3002);
app.set('port', port);

function onError(error) { 
  if(error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  switch (error.code) {
    case 'EACCESS':
      console.error(`${bind} requires elevanted privileges`);
      process.exit(1);

    case 'EADDRRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
  
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind  = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
}

const server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log(`Api is alive on ${port}`);
