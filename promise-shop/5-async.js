var a, promise;
const b= () => {
    a= (fulfill, reject) => {
        fulfill('PROMISE VALUE');
    };
    promise = new Promise(a);
    promise.then(console.log);
    console.log('MAIN PROGRAM');
}
b()
module.exports={promise, a, b};