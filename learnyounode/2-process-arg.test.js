const printSum = require('./2-process-arg');
describe('printSum()', () => {
    it ('should print sum of 2 numbers to console', () => {
        process.argv = ['node', '2-process-arg.js', 1, 2];
        return expect(printSum()).toEqual(3);
    });
    it ('should print sum of 3 numbers to console', () => {
        process.argv = ['node', '2-process-arg.js', 1, 2, 3];
        return expect(printSum()).toEqual(6);
    });
    it ('should print sum of 0 numbers to console', () => {
        process.argv = ['node', '2-process-arg.js'];
        return expect(printSum()).toEqual(0);
    });
});