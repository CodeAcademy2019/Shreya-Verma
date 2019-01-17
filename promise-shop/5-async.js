var promiseConstructor, promise;
var storeOutput=[]
var promiseExecute= (val) => {
    console.log(val);
    storeOutput.push(val);
}
const mainFunc= () => {
    promiseConstructor= (fulfill, reject) => {
        fulfill('PROMISE VALUE');
    };
    promise = new Promise(promiseConstructor);
    promise.then(promiseExecute);
    promiseExecute('MAIN PROGRAM');
}
mainFunc()
module.exports={promise, storeOutput};