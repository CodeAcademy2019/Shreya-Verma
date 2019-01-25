const http = require('http');
const map = require('through2-map');
const upperCaser = () => {
  http.createServer((request, response) => {
    if (request.method === 'POST') {
      request.pipe(map(chunk => chunk.toString().toUpperCase()))
        .pipe(response);
    }
  }).listen(process.argv[2]);
};
upperCaser();
module.exports = upperCaser;
