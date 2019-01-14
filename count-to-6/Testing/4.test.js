const prog= require('./4-func');
describe('prog', () => {
    test('checking text printed by setImmediate on console', () => {
        expect(prog.kick()).toBe('Ouch!');
    });
});