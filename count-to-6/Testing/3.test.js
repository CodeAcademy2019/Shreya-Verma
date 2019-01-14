const prog= require('./3-func');
describe('prog', () => {
    test('checking for array of size=1', () => {
        expect(prog(["ab"])).toBe('[ab] becomes "a"');
    });    
    test('checking for array of size=2 with upper/lowercases', () => {
        expect(prog(["ab", "CD"])).toBe('[ab,CD] becomes "aC"');
    });
    test('checking for array of size >2 with upper/lowercases', () => {
        expect(prog(["BLAIR", "Chuck", "vanessa"])).toBe('[BLAIR,Chuck,vanessa] becomes "BCv"');
    });
});