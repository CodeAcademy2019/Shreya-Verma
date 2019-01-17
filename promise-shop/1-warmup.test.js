const prog= require('./1-warm-up');
jest.useFakeTimers();
describe('a()', ()=> {
    test('checking if a() calls setTimeout in min 300 ms', () => {
        prog.a();
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 300);
    });
    test('checking if a() does not call setTimeout in min 350 ms', () => {
        prog.a();
        expect(setTimeout).not.toHaveBeenLastCalledWith(expect.any(Function), 350);
    });
});

describe('c()', ()=> {
    test('checking if c() prints "TIMED OUT!"', () => {
        expect(prog.c()).toEqual('TIMED OUT!');
    });
});