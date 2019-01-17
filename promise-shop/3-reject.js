const a= (fulfill, reject) => {
    setTimeout(() => reject(new Error('REJECTED!')), 300);
};
const promise = new Promise(a);
const onReject= (error) => {
    console.log(error.message)
}
promise.then(null, onReject);
module.exports={promise, a};