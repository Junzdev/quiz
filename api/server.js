const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const data = require('./db.json');

const router = jsonServer.router(data);

server.use(middlewares);
server.use(router);

server.listen(3000, () => {
 console.log('JSON Server is running');
});

module.exports = server;
