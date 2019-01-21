function callbackFunc(val) {
    console.log(val);
}
const getNewlines= (fileData) => {
    try {
        return fileData.split('\n').length-1;
    } catch (err) {
        return err.message;
    }
}
const printAsyncNewline = (callbackFunc) => {
    const fs = require('fs');
    fs.readFile(process.argv[2], 'utf-8', (err, fileContents) => {
        if (err) {
            throw err;
        } 
        else {
            const data=getNewlines(fileContents);
            callbackFunc(data);
        }
    });
}
printAsyncNewline(callbackFunc);
module.exports={printAsyncNewline, getNewlines};
// const printAsyncNewline = () => {
//     const fs = require('fs');
//     const promise=new Promise ((resolve, reject) => {
//         fs.readFile(process.argv[2], (err, fileContents) => {
//             if (err) {
//                 reject(err);
//             } 
//             else {
//                 resolve(((fileContents.toString()).split('\n')).length-1);
//             }
//         });
//     });
    
//     promise.then(console.log, console.log);
//     return promise;
// }
// module.exports=printAsyncNewline;