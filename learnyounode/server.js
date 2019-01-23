const http=require('http')
const server=http.createServer((function(request,response)
{   response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.write("Hello World\n");
    response.end('BYE');
}));
server.listen(7000);
server.on('connection', ()=> {
    console.log('hello')
});