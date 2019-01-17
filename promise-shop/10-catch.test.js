const catchTest= require('./10-catch');
describe('catch', ()=> {
    it('should be able to catch error', () => {
        return catchTest.promise.catch(errorPromise => {
            return expect(errorPromise).toEqual('OH NOES')
        });
    });    
});
describe('storeOutput array', ()=> {
    it('should give output in order of print to console', () => {
            return expect(catchTest.storeOutput).toEqual([1, 2, 3, 4, 5, 'OH NOES']);
    });    
});
describe('alwaysThrow()', ()=> {
    it('should throw error', () => {
        return expect(catchTest.alwaysThrows).toThrowError('OH NOES');
    });
});
describe('iterate()', ()=> {
    it('should increment passed number', () => {
            return expect(catchTest.iterate(1)).toEqual(2);
    });    
});