const promise= require('./4-resolve-not-reject');
describe('promise', () => {
    it('should get resolved with "I FIRED"', () => {
        return expect(promise).resolves.toEqual('I FIRED');
    });
    it('should get not get resolved with anything other than "I FIRED"', () => {
        return expect(promise).resolves.not.toEqual('ABC');
    });
});
