const prog= require('./7-chain-promise');
describe('promise1', () => {
    test('checking if promise1 gets fulfilled and gives "Fulfilled 1"', () => {
        expect.assertions(1);
        return expect(prog.promise1).resolves.toEqual('Fulfilled 1');
    });
});
describe('promise2', () => {
    test('checking if promise2 gets fulfilled and gives "Fulfilled 1 Fulfilled 2"', () => {
        expect.assertions(1);
        return expect(prog.promise2).resolves.toEqual('Fulfilled 1 Fulfilled 2');
    });
});


