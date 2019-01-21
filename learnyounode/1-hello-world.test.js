const print = require('./1-hello-world');
describe('print()', () => {
    it ('should print "HELLO WORLD" to console', () => {
        return expect(print()).toEqual('HELLO WORLD');
    });
    it ('should not print anything other than "HELLO WORLD" to console', () => {
        return expect(print()).not.toEqual('hello world');
    });
});