const asyncTest= require('./5-async');
describe('promise', () => {
    it('should resolve to "PROMISE VALUE"', () => {
        const result = asyncTest();
        return expect(result).resolves.toEqual(['MAIN PROGRAM','PROMISE VALUE']);
    });
});
describe('storeOutput', () => {
    xit('should give "MAIN PROGRAM" and "PROMISE VALUE" in order of print to console', () => {
        return expect(asyncTest.storeOutput).toEqual(['MAIN PROGRAM','PROMISE VALUE']);
    });
});

