const getClient= require('./7-http-client');
describe('getClient()', () => {
    it ('should receive info from http URL', (done) => {
        function callbackF(data){
            expect(data).toEqual('Hello World\n');
            done();
        }
        process.argv = ['node', '7-http-client.js', 'http://localhost:7000'];
        getClient(callbackF);
    });    
    it ('should not receive anything other than info from http URL', (done) => {
        function callbackF(data){
            expect(data).not.toEqual('hello world\n');
            done();
        }
        process.argv = ['node', '7-http-client.js', 'http://localhost:7000'];
        getClient(callbackF);
    });    
});
