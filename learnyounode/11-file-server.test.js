const getFile= require('./11-file-server.js');
describe('getFile()', () => {
    it ('should receive info from http URL', (done) => {
        function callbackF(data){
            console.log(data);
            expect(data).toEqual('A\nB\nC');
        }
        process.argv = ['node', '11-file-server.js',7000,'io-test1.txt'];
        getFile(callbackF);
        done();
    });    
    it ('should receive not receive anything other than info from http URL', (done) => {
        function callbackF(data){
            expect(data).not.toEqual('a\nb\nc');
    
        }
        process.argv = ['node', '11-file-server.js',7000,'io-test1.txt'];
        getFile(callbackF);
        done();
    });    
});
