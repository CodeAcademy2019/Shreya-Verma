const prog= require('./9-throw-error');
describe('promise', () => {
    test('checking if promise gets resolved and gives JSON', () => {
       expect.assertions(1);;
        return expect(prog('{"Name":"Shreya","Age":21}')).resolves.toEqual({"Name":"Shreya","Age":21});
    });
    test('checking if promise gets rejected and gives error message', () => {
        expect.assertions(1);
        return expect(prog({"Name":"Shreya"})).rejects.toEqual('Unexpected token o in JSON at position 1');
    });
});
