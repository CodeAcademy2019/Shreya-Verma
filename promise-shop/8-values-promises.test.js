const valuesPromises= require('./8-values-promises');
describe('promise1', () => {
    it('should get fulfilled with "MANHATTAN"', () => {
        return expect(valuesPromises.promise1).resolves.toEqual('MANHATTAN');
    });
});
describe('promise2', () => {
    it('should get fulfilled with "DR. MANHATTAN"', () => {
        return expect(valuesPromises.promise2).resolves.toEqual('DR. MANHATTAN');
    });
});
