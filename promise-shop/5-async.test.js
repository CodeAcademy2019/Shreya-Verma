const prog= require('./5-async');
console.log = jest.fn();
describe('promise', () => {
    test('checking if promise gets fulfilled and gives "PROMISE VALUE"', () => {
        expect.assertions(1);
        return expect(prog.promise).resolves.toEqual('PROMISE VALUE');
    });
});

describe('console.log', () => {
    test('checking if console.log is called with "MAIN PROGRAM" and then "PROMISE VALUE"', () => {
        prog.b();
        return (expect(console.log).toHaveBeenCalled() && expect(console.log).mock.calls== [['MAIN PROGRAM'],['PROMISE VALUE']]);
    });
    test('checking if console.log is not called with "PROMISE VALUE" and then "MAIN PROGRAM"', () => {
        prog.b();
        return (expect(console.log).toHaveBeenCalled() && expect(console.log).mock.calls== [['PROMISE VALUE'],['MAIN PROGRAM']]);
    });
});

