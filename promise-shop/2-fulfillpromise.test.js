const fulfillPromise= require('./2-fulfill-promise');
describe('promise', () => {
    xit('should resolve with "FULFILLED!"', () => {
        return expect(fulfillPromise).resolves.toEqual('FULFILLED!');
    });
    xit('should not resolve with anything other than "FULFILLED!"', () => {
        return expect(fulfillPromise).resolves.not.toEqual('ABC');
    });
    it('should not resolve with anything other than "FULFILLED!"', () => {
        return expect(fulfillPromise).resolves.toEqual('jhgs');
    });
});