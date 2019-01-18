const promise= require('./11-multi-promises');
describe('promise', () => {
    it('should resolve with arguments from both promises', () => {
        return expect(promise).resolves.toEqual(['hey', 'delilah']);
    });
    it('should not resolve with anything other than arguments from both promises', () => {
        return expect(promise).resolves.not.toEqual(['abc', 'delilah']);
    });
});