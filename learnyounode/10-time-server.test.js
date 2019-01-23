const timeServerMain= require('./10-time-server');
describe('timeServer()', () => {
    it ('should write date time to server socket', (done) => {
        function callbackF(data){//, done){
            expect(data).toEqual('abc')//timeServerMain.createDate());
            //done();
        }
        process.argv = ['node', '10-time-server.js',7000];
        timeServerMain.timeServer(callbackF);
        done();
    });    
});
