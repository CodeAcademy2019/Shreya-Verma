const prog= require('./4-func');
test('checking text printed by setImmediate on console', () => {
        expect(prog.kick()).toEqual('Ouch!');
});