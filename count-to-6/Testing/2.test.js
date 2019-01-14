const prog= require('./2-func');
const a=`Hello, BLAIR!
Your name lowercased is "blair".`;
const b=`Hello, Chuck!
Your name lowercased is "chuck".`;
const c=`Hello, chuck!
Your name lowercased is "chuck".`;
describe('prog', () => {
    test('checking for full uppercase', () => {
        expect(prog("BLAIR")).toBe(a);
    });
    test('checking for capitalized word', () => {
        expect(prog("Chuck")).toBe(b);
    });
    test('checking for full lowercase', () => {
        expect(prog("chuck")).toBe(c);
    });
});