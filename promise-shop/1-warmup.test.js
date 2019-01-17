const tryingSetTimeout= require('./1-warm-up');
jest.useFakeTimers();
describe('timeoutTest())', ()=> {
    it('should call setTimeout in min 300 ms', () => {
        tryingSetTimeout.timeoutTest();
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 300);
    });
    it('should not call setTimeout in min 350 ms', () => {
        tryingSetTimeout.timeoutTest();
        expect(setTimeout).not.toHaveBeenLastCalledWith(expect.any(Function), 350);
    });
});

describe('executeOnTimeout()', ()=> {
    it('should print "TIMED OUT!"', () => {
        expect(tryingSetTimeout.executeOnTimeout()).toEqual('TIMED OUT!');
    });
});