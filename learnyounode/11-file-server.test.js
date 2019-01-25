const getClient = require('./7-http-client');

describe('getFile()', () => {
  it('should send file contents at http URL', (done) => {
    function callbackF(data) {
      expect(data).toEqual('A\nB\nC');
      done();
    }
    process.argv = ['node', '7-http-client.js', 'http://localhost:7000'];
    getClient(callbackF);
  });
  it('should not send anything other than file contents at http URL', (done) => {
    function callbackF(data) {
      expect(data).not.toEqual('a\nb\nc');
      done();
    }
    process.argv = ['node', '7-http-client.js', 'http://localhost:7000'];
    getClient(callbackF);
  });
});
