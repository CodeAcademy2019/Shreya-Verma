const http = require('http');

describe('httpUppercaser()', () => {
  it('server should send back post request content in uppercase', (done) => {
    function callbackF(data) {
      console.log(data);
      expect(data).toEqual('HELLO');
      done();
    }
    const req = http.request({
      host: '127.0.0.1',
      port: 7000,
      method: 'POST',
    }, (response) => {
      response.setEncoding('utf8');
      response.on('data', callbackF);
      response.on('error', console.log);
    });
    req.write('hello');
  });
  it('server should not send back anything other than post request content in uppercase', (done) => {
    function callbackF(data) {
      console.log(data);
      expect(data).not.toEqual('hello');
      done();
    }
    const req = http.request({
      host: '127.0.0.1',
      port: 7000,
      method: 'POST',
    }, (response) => {
      response.setEncoding('utf8');
      response.on('data', callbackF);
      response.on('error', console.log);
    });
    req.write('hello');
  });
});
