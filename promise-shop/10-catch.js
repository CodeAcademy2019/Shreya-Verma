var storeOutput=[];
const alwaysThrows= () => {
    throw new Error('OH NOES');
}
const iterate= (arg) => {
    storeOutput.push(arg);
    console.log(arg);
    return arg+1;
}
const promise= Promise.resolve(iterate(1))
                    .then(iterate)
                    .then(iterate)
                    .then(iterate)
                    .then(iterate)
                    .then(alwaysThrows)
                    .then(iterate)
                    .then(iterate)
                    .then(iterate)
                    .then(iterate)
                    .then(iterate)
                    .catch((promiseError)=> {
                        storeOutput.push('OH NOES');
                        console.log(promiseError.message)
                    });

module.exports={alwaysThrows, iterate, promise, storeOutput}