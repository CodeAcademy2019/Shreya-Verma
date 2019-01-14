const prog= require('./8-func');
describe('prog', () => {
    test('checking for midpoint of two positive numbers', () => {
        expect(prog(1, 2)).toBe(1.5);
    });
    test('checking for midpoint with negative number', () => {
        expect(prog(2, -3)).toBe(-0.5);
    });
});