const prog= require('./4-resolve-not-reject');
describe('promise', () => {
    test('checking if promise gets rejected and gives "I DID NOT FIRE"', () => {
        expect.assertions(1);
        return expect(prog.promise).rejects.toEqual(new Error('I DID NOT FIRE'));
    });
    test('checking if promise gets fulfilled and gives "I FIRED"', () => {
        expect.assertions(1);
        return expect(prog.promise).resolves.toEqual('I FIRED');
    });
});
