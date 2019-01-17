const prog= require('./11-multi-promises');
describe('promise', () => {
    test('checking if promise gets resolved', () => {
        expect.assertions(1);
        return expect(prog).resolves.toEqual(['hey', 'delilah']);
    });
});