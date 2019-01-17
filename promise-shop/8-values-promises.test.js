const prog= require('./8-values-promises');
describe('promise1', () => {
    test('checking if promise1 gets fulfilled and gives "MANHATTAN"', () => {
        expect.assertions(1);
        return expect(prog.promise1).resolves.toEqual('MANHATTAN');
    });
});
describe('promise2', () => {
    test('checking if promise2 gets fulfilled and gives "DR. MANHATTAN"', () => {
        expect.assertions(1);
        return expect(prog.promise2).resolves.toEqual('DR. MANHATTAN');
    });
});
