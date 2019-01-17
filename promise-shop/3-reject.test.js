const rejectTestPromise= require('./3-reject');
describe('promise', () => {
    it('should reject with Error "REJECTED!"', () => {
        expect(rejectTestPromise).rejects.toEqual(new Error('REJECTED!'));
    });
    it('should not reject with anything other than Error "REJECTED!"', () => {
        expect(rejectTestPromise).rejects.not.toEqual('REJECTED!');
    });
});
