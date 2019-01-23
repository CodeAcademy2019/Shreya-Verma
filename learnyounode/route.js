var http = require('http');
var server=http.createServer((function(request,response)
{   response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    if (request.url === '/hello'){
      response.write('Hello'); 
    } else if (request.url ==='/world'){
      response.write('World'); 
    }
    response.end(); 
})).listen(7000);
server.on('connection', ()=> {
    console.log('hello')
});
