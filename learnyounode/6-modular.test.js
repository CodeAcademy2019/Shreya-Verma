const filterFiles = require('./newModule.js');
describe('callbackFunc()', () => {
    it ('should receive array of files with required extension txt', (done) => {
        function callbackF(data1, data2){
            expect(data2).toEqual(['io-test1.txt','io-test2.txt']);
            done();
        }
        filterFiles.filterLs('./', 'txt',callbackF);
    });    
    it ('should receive array of files with required extension json', (done) => {
        function callbackFunc(data1, data2){
            expect(data2).toEqual(['package.json']);
            done();
        }
        filterFiles.filterLs('./', 'json',callbackFunc);
    });
});
describe('filterExt()', () => {
    it ('should give array of files with required extension', () => {
        return expect(filterFiles.filterExt(['1-hello-world.js', 'abc.txt', '1-hello-world.test.js'], 'js')).toEqual(['1-hello-world.js', '1-hello-world.test.js']);
    });    
    it ('should give array of files with required extension', () => {
       return expect(filterFiles.filterExt(['1-hello-world.js', 'abc.txt', '1-hello-world.test.js'], 'txt')).toEqual(['abc.txt']);
   });    
});