const promiseResolved=Promise.resolve('FULFILLED');
promiseResolved.then(console.log);
const promiseRejected=Promise.reject('REJECTED!');
promiseRejected.catch(console.log);
module.exports={promiseResolved,promiseRejected};

