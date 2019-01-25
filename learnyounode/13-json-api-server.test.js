const http = require('http');

describe('jsonApiServer()', () => {
  it('server should send back hour minute second object', (done) => {
    function callbackF(data) {
      console.log(data);
      expect(JSON.parse(data)).toEqual({"hour":17,"minute":40,"second":15});
      done();
    }
    const req = http.request({
      method: 'GET',
      host: '127.0.0.1',
      port: 7000,
      path: '/api/parsetime?iso=2013-08-10T12:10:15.474Z'
    }, (response) => {
      response.setEncoding('utf8');
      response.on('data', callbackF);
      response.on('error', console.log);
    });
    req.end();
  });
  it('server should send back unixtime object', (done) => {
    function callbackF(data) {
      console.log(data);
      expect(JSON.parse(data)).toEqual({"unixtime":1376136615474});
      done();
    }
    const req = http.request({
      method: 'GET',
      host: '127.0.0.1',
      port: 7000,
      path: '/api/unixtime?iso=2013-08-10T12:10:15.474Z'
    }, (response) => {
      response.setEncoding('utf8');
      response.on('data', callbackF);
      response.on('error', console.log);
    });
    req.end();
  });
});
