const a= (fulfill, reject) => {
    fulfill('I FIRED');
    reject(new Error('I DID NOT FIRE'));
};
const promise = new Promise(a);
const onRejected= (error) => {
    console.log(error.message)
}
promise.then(console.log, onRejected);
module.exports={promise, a};