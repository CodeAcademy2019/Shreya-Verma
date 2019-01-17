const a= (fulfill, reject) => {
    setTimeout(() => fulfill('FULFILLED!'), 300);
};
const promise = new Promise(a);
promise.then(console.log);
module.exports={promise, a};
