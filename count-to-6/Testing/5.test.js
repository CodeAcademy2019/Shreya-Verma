const prog= require('./5-func');
describe('prog', () => {
    test('checking for standard user array', () => {
        expect(prog([1, "ABC", "ABC@gmail.com"])).toEqual({username: "ABC", email: "ABC@gmail.com"});
    });
    test('checking for user array with null at index 0', () => {
        expect(prog([null, "def", "def@gmail.com"])).toEqual({username: "def", email: "def@gmail.com"});
    });
    test('checking for large user array', () => {
        expect(prog([null, "def", "def@gmail.com", "122009", "9003873143"])).toEqual({username: "def", email: "def@gmail.com"});
    });
});