const fulfillPromise= require('./2-fulfill-promise');
describe('promise', () => {
    it('should resolve with "FULFILLED!"', () => {
        return expect(fulfillPromise).resolves.toEqual('FULFILLED!');
    });
    it('should not resolve with anything other than "FULFILLED!"', () => {
        return expect(fulfillPromise).resolves.not.toEqual('ABC');
    });
});