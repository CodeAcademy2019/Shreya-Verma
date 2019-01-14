const prog= require('./1-func');
describe('prog', () => {
    test('should print a line to console', () => {
        expect(prog()).toBe('HELLO ES6');
    });
});