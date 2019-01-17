const prog= require('./10-catch');
describe('promise', () => {
    test('checking if promise gets rejected and gives 2', () => {
        expect.assertions(1);
        return expect(prog).resolves.toEqual(2);
    });
});