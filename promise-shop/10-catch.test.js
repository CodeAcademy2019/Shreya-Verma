const prog= require('./10-catch');
describe('catch', ()=> {
    test('checking if promise gets caught', () => {
        return prog.b().catch(e => {
            return expect(e).toEqual('OH NOES')
        });
    });    
});

describe('alwaysThrow', ()=> {
    test('checking if alwaysThrows() throws error', () => {
        return expect(prog.alwaysThrows).toThrowError('OH NOES');
    });
});
describe('iterate', ()=> {
    test('checking if iterate() is working', () => {
            return expect(prog.iterate(1)).toEqual(2);
    });    
});