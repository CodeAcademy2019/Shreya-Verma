const promiseConstructor= (fulfill, reject) => {
    setTimeout(() => fulfill('FULFILLED!'), 300);
};
const promise = new Promise(promiseConstructor);
promise.then(console.log);
module.exports=promise;
