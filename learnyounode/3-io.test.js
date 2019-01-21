const printNewline = require('./3-io');
describe('printNewline()', () => {
    it ('should print number of newlines in file to console', () => {
        process.argv = ['node', '3-io.js', 'io-test1.txt'];
        return expect(printNewline()).toEqual(2);
    });
    it ('should print 0 newlines in file with no newlines to console', () => {
        process.argv = ['node', '3-io.js', 'io-test2.txt'];
        return expect(printNewline()).toEqual(0);
    });
});