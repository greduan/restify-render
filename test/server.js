'use strict';

const restify = require('restify');
const render = require('..');

const server = restify.createServer();
server.use(render({
  engine: 'pug',
  dir: __dirname,
}));

server.get('/', function (req, res) {
  res.render('view.pug', { name: 'Jason' });
});

server.listen(8080, function () {
  console.log('listening on :8080');
});
