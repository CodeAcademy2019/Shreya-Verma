const route = require('./route');
const juggleAsync = require('./9-juggling-async');

describe('juggleAsync()', () => {
  it('should receive info array from http URLs', (done) => {
    const callbackF = (data) => {
      expect(data).toEqual(['Hello\nhello', 'World\nworld', 'Bye\nbye']);
      done();
    }; 
    process.argv = ['node', '9-juggling-async.js', 'http://localhost:7000/hello', 'http://localhost:7000/world', 'http://localhost:7000/bye'];
    juggleAsync(callbackF);
  });
  it('should receive not receive anything other info from http URLs', (done) => {
    const callbackF = (data) => {
      expect(data).not.toEqual([null, null, null]);
      done();
    }; 
    process.argv = ['node', '9-juggling-async.js', 'http://localhost:7000/hello', 'http://localhost:7000/world', 'http://localhost:7000/bye'];
    juggleAsync(callbackF);
  });
});
