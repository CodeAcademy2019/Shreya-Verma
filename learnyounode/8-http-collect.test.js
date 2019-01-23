const httpCollect= require('./8-http-collect');
describe('httpCollect()', () => {
    it ('should receive info from http URL', (done) => {
        function callbackF(data){
            expect(data).toEqual('Hello World\nBYE');
            done();
        }
        process.argv = ['node', '8-http-collect.js','http://localhost:7000'];
        httpCollect(callbackF);
    });    
    it ('should not receive anything other than info from http URL', (done) => {
        function callbackF(data){
            expect(data).not.toEqual('hello world\nBYE');
            done();
        }
        process.argv = ['node', '8-http-collect.js','http://localhost:7000'];
        httpCollect(callbackF);
    });    
});
