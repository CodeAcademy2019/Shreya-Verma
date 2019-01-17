const parsePromised= (jsonObj) => {
    return new Promise((resolve, reject) => {
        try {
            resolve(JSON.parse(jsonObj));
        } catch(e) {
            reject(e.message)
        }
    });
}
var promise;
const b= (a) => { 
    promise=parsePromised(a);
    promise.then(console.log, console.log);
    return promise;
}
//b(process.argv[2]);
module.exports=b;