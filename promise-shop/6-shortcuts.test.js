const shortcuts= require('./6-shortcuts');
describe('promiseResolved', () => {
    it('should get resolved with "FULFILLED"', () => {
        return expect(shortcuts.promiseResolved).resolves.toEqual('FULFILLED');
    });
});    
describe('promiseRejected', () => {
    it('should get rejected with "REJECTED!"', () => {
        return expect(shortcuts.promiseRejected).rejects.toEqual('REJECTED!');
    });
});