const throwError= require('./9-throw-error');
describe('promise', () => {
    it('should get resolved and gives JSON', () => {
        return expect(throwError('{"Name":"Shreya","Age":21}')).resolves.toEqual({"Name":"Shreya","Age":21});
    });
    it('should get rejected and give error message', () => {
        return expect(throwError({"Name":"Shreya"})).rejects.toEqual('Unexpected token o in JSON at position 1');
    });
});
