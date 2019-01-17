const parsePromised= (jsonObj) => {
    return new Promise((resolve, reject) => {
        try {
            resolve(JSON.parse(jsonObj));
        } catch(promiseError) {
            reject(promiseError.message)
        }
    });
}
var promise;
const mainFunc= (jsonObject) => { 
    promise=parsePromised(jsonObject);
    promise.then(console.log, console.log);
    return promise;
}
mainFunc(process.argv[2]);
module.exports=mainFunc;