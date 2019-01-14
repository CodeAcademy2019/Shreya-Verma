const greet = require('./greet');
describe('greet', () => {
    test('checking if output of greet() function is "Hello, <name>." for <name>', () => {
        expect(greet('Bob')).toBe('Hello, Bob.');
    });
    test('checking if output of greet() function is "Hello, my friend" for null', () => {
        expect(greet(null)).toBe('Hello, my friend.');
    });
    test('checking if output of greet() function is "HELLO, <NAME>!" for <NAME>', () => {
        expect(greet('JERRY')).toBe('HELLO JERRY!');
    });
    test('checking if output of greet() function is "Hello, A and B." for A and B', () => {
        expect(greet('Jill', 'Jane')).toBe('Hello, Jill and Jane.');
    });
    test('checking if output of greet() function is "Hello, A, B and C." for A, B and C', () => {
        expect(greet('Jill', 'Jane', 'Jack')).toBe('Hello, Jill, Jane and Jack.');
    });
    test('checking if output of greet() function is "Hello, A and C. AND HELLO B!" for capitalized A and C and uppercase B', () => {
        expect(greet("Amy", "BRIAN", "Charlotte")).toBe("Hello, Amy and Charlotte. AND HELLO BRIAN!");
    });
    test('checking if output of greet() function is "Hello, A, D and C. AND HELLO B and E!" for capitalized A, D and C and uppercase B and E', () => {
        expect(greet("Amy", "BRIAN", "Daisy", "EMILY", "Charlotte")).toBe("Hello, Amy, Daisy and Charlotte. AND HELLO BRIAN AND EMILY!");
    });
    test('checking if output of greet() function is "Hello, B and C, D." for B and C, D', () => {
        expect(greet("Bob", "Charlie, Dianne")).toBe("Hello, Bob and Charlie, Dianne.");
    });
});