const chainPromise= require('./7-chain-promise');
describe('promise1', () => {
    it('should get fulfilled with "Fulfilled 1"', () => {
        return expect(chainPromise.promise1).resolves.toEqual('Fulfilled 1');
    });
});
describe('promise2', () => {
    it('should get fulfilled with "Fulfilled 1 Fulfilled 2"', () => {
        return expect(chainPromise.promise2).resolves.toEqual('Fulfilled 1 Fulfilled 2');
    });
});


