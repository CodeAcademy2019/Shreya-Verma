const prog= require('./3-reject');
jest.useFakeTimers();
describe('promise', () => {
    test('checking if promise is "REJECTED!"', () => {
        expect.assertions(1);
        return expect(prog.promise).rejects.toEqual(new Error('REJECTED!'));
    });
});
describe('promise function', () => {
    test('checking if a() calls setTimeout in min 300 ms', () => {
        prog.a();
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 300);
    });
    test('checking if a() does not call setTimeout in min 350 ms', () => {
        prog.a();
        expect(setTimeout).not.toHaveBeenLastCalledWith(expect.any(Function), 350);
    });
});