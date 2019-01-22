const filterFiles = require('./5-filter-ls');
describe('callbackFunc()', () => {
    it ('should receive array of files with required extension', (done) => {
        function callbackF(data){
            expect(data).toEqual(['io-test1.txt','io-test2.txt']);
            done();
        }
        process.argv = ['node', '5-filter-ls.js', './', 'txt'];
        filterFiles.filterLs(callbackF);
    });    
    it ('should receive array of files with required extension', (done) => {
        process.argv = ['node', '5-filter-ls.js', './', 'js'];
        function callbackFunc(data){
            expect(data).toEqual(["1-hello-world.js", "1-hello-world.test.js", "2-process-arg.js", "2-process-arg.test.js", "3-io.js", "3-io.test.js", "4-async-io.js", "4-async-io.test.js", "5-filter-ls.js", "5-filter-ls.test.js"]);
            done();
        }
        filterFiles.filterLs(callbackFunc);
    });
});
describe('filterExt()', () => {
    it ('should give array of files with required extension', () => {
         process.argv = ['node', '5-filter-ls.js', './', 'js'];
        return expect(filterFiles.filterExt(['1-hello-world.js', 'abc.txt', '1-hello-world.test.js'])).toEqual(['1-hello-world.js', '1-hello-world.test.js']);
    });    
    it ('should give array of files with required extension', () => {
        process.argv = ['node', '5-filter-ls.js', './', 'txt'];
       return expect(filterFiles.filterExt(['1-hello-world.js', 'abc.txt', '1-hello-world.test.js'])).toEqual(['abc.txt']);
   });    
});