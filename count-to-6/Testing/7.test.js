const prog= require('./7-func');
describe('prog', () => {
    test('checking average of 2 arguments', () => {
        expect(prog(1, 2)).toBe(1.5);
    });
    test('checking average of >2 arguments', () => {
        expect(prog(2, 3, 1)).toBe(2);
    });
});