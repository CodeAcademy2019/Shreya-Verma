const prog= require('./5-async');
describe('promise', () => {
    it('should resolve to "PROMISE VALUE"', () => {
        return expect(prog.promise).resolves.toEqual('PROMISE VALUE');
    });
});
describe('storeOutput', () => {
    it('should give "MAIN PROGRAM" and "PROMISE VALUE" in order of print to console', () => {
        return expect(prog.storeOutput).toEqual(['MAIN PROGRAM','PROMISE VALUE']);
    });
});

