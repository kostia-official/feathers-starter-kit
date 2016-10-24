require('source-map-support').install();

const app = require('./app');
const debug = require('debug')('app');
const { port, host } = require('./helpers/config');
const server = app.listen(port);
app.setup(server);

server.on('listening', () => debug(`Server started on ${host}:${port}`));
