const prog= require('./6-shortcuts');
describe('promiseResolved', () => {
    test('checking if promiseResolved gets fulfilled and gives "FULFILLED"', () => {
        expect.assertions(1);
        return expect(prog.promiseResolved).resolves.toEqual('FULFILLED');
    });
});
describe('promiseRejected', () => {
    test('checking if promiseRejected gets rejected and gives "REJECTED!"', () => {
        expect.assertions(1);
        return expect(prog.promiseRejected).rejects.toEqual('REJECTED!');
    });
});