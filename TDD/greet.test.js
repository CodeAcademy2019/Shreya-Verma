const greet = require('./greet');
describe('greet', () => {
    test('should give Hello, <name>.', () => {
        expect(greet('Bob')).toBe('Hello, Bob.');
    });
    test('should give Hello, my friend', () => {
        expect(greet(null)).toBe('Hello, my friend.');
    });
    test('should give HELLO, <NAME>!', () => {
        expect(greet('JERRY')).toBe('HELLO JERRY!');
    });
    test('should give Hello, A and B.', () => {
        expect(greet('Jill', 'Jane')).toBe('Hello, Jill and Jane.');
    });
    test('should give Hello, A, B and C.', () => {
        expect(greet('Jill', 'Jane', 'Jack')).toBe('Hello, Jill, Jane and Jack.');
    });
    test('should give Hello, A and C. AND HELLO B!', () => {
        expect(greet("Amy", "BRIAN", "Charlotte")).toBe("Hello, Amy and Charlotte. AND HELLO BRIAN!");
    });
    test('should give Hello, A, D and C. AND HELLO B and E!', () => {
        expect(greet("Amy", "BRIAN", "Daisy", "EMILY", "Charlotte")).toBe("Hello, Amy, Daisy and Charlotte. AND HELLO BRIAN AND EMILY!");
    });
    test('should give Hello, B, C and D!', () => {
        expect(greet("Bob", "Charlie, Dianne")).toBe("Hello, Bob, Charlie, and Dianne.");
    });
});