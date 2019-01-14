const prog= require('./6-func');
describe('prog', () => {
    test('checking for negative numbers', () => {
        expect(prog([1, -1, 2])).toBe('The minimum of [1,-1,2] is -1');
    });
    test('checking for positive numbers', () => {
        expect(prog([2, 3, 1])).toBe('The minimum of [2,3,1] is 1');
    });
    test('checking for array of size 1', () => {
        expect(prog([1])).toBe('The minimum of [1] is 1');
    });
});