const prog= require('./2-fulfill-promise');
jest.useFakeTimers();
describe('promise', () => {
    test('checking if promise is "FULFILLED!"', () => {
        expect.assertions(1);
        return expect(prog.promise).resolves.toEqual('FULFILLED!');
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