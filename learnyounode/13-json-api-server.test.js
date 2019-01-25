// const http = require('http');

// describe('jsonApiServer()', () => {
//   it('server should send back post request content in uppercase', (done) => {
//     function callbackF(data) {
//       console.log(data);
//       expect(data.toString()).toEqual({"hour":17,"minute":40,"second":15});
//       done();
//     }
//     const req = http.request({
//       host: '127.0.0.1',
//       port: 7000,
//       path: '/api/parsetime?iso=2013-08-10T12:10:15.474Z'
//     }, (response) => {
//       response.setEncoding('utf8');
//       response.on('data', callbackF);
//       response.on('error', console.log);
//     });
//     req.write();
//     req.end();
//   });
//   xit('server should not send back anything other than post request content in uppercase', (done) => {
//     function callbackF(data) {
//       console.log(data);
//       expect(data).not.toEqual('hello');
//       done();
//     }
//     const req = http.request({
//       host: '127.0.0.1',
//       port: 7000,
//       method: 'POST',
//     }, (response) => {
//       response.setEncoding('utf8');
//       response.on('data', callbackF);
//       response.on('error', console.log);
//     });
//     req.write('hello');
//   });
// });
