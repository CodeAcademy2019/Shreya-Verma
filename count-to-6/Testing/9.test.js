const prog= require('./9-func');
describe('prog', () => {
    test('passing without default argument', () => {
        expect(prog("Hello")).toBe("Hello!!!!!");
    });
    test('passing with both arguments', () => {
        expect(prog("Hi", 4)).toBe("Hi!!!!");
    });
});