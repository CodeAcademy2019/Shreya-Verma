const http = require('http');
const url = require('url');

const parsetime = (urlObj) => {
  const date = new Date(urlObj.query.iso);
  const dateObj = { 'hour': date.getHours(),
                    'minute': date.getMinutes(),
                    'second' : date.getSeconds()
                  } 
  return JSON.stringify(dateObj);
};
const unixtime = (urlObj) => {
  const date = new Date (urlObj.query.iso);
  const dateObj = { 'unixtime' : date.getTime()
                  }
  return JSON.stringify(dateObj);
};
const jsonTimeServer = () => {
  const server = http.createServer((function(request,response)
  { response.setHeader('Content-Type', 'text/plain');
    urlObj = url.parse(request.url, true);
    if (urlObj.pathname === '/api/parsetime'){
      response.write(parsetime(urlObj)); 
    } else if (urlObj.pathname ==='/api/unixtime'){
      response.write(unixtime(urlObj));
    }
    response.end(); 
  })).listen(process.argv[2]);
};
jsonTimeServer();
