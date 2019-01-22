function callbackF(arr) {
    arr.forEach((val)=>console.log(val));
}
const path = require('path');
const filterExt= (list) => list.filter((element) => path.extname(element)==='.'+process.argv[3]);
const filterLs = (callbackFunc) => {
    const fs = require('fs');
    fs.readdir(process.argv[2], (err, list) => {
        if (err) {
            throw err;
        }
        callbackFunc(filterExt(list));
    });
}
//filterLs(callbackF);
module.exports={filterLs, filterExt};