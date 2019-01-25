const http = require('http');

const server = http.createServer(((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  if (request.url === '/hello') {
    response.write('Hello\n');
    response.write('hello');
  } else if (request.url === '/world') {
    response.write('World\n');
    response.write('world');
  } else if (request.url === '/bye') {
    response.write('Bye\n');
    response.write('bye');
  }
})).listen(7000);
