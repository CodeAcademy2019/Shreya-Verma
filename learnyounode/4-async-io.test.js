const printAsync = require('./4-async-io');
describe('callbackFunc()', () => {
    it ('should receive 0 newlines in file with no newlines to console', () => {
        process.argv = ['node', '4-async-io.js', 'io-test2.txt'];
        function callbackFunc(data){
            expect(data).toEqual(0);
            //done();
        }
        printAsync.printAsyncNewline(callbackFunc);
    });    
    it ('should receive number of newlines in file', () => {
        process.argv = ['node', '4-async-io.js', 'io-test1.txt'];
        function callbackFunc(data){
            expect(data).toEqual(2);
            //done();
        }
        printAsync.printAsyncNewline(callbackFunc);
    });   
});
describe('getNewlines()', () => {
    it ('should give 0 newlines for string with no newlines', () => {
        return expect(printAsync.getNewlines('A')).toEqual(0);
    });    
    it ('should give number of newlines in string', () => {
        return expect(printAsync.getNewlines('A\nB\nC')).toEqual(2);
    });   
});