const alwaysThrows= () => {
    throw new Error('OH NOES');
}
const iterate= (arg) => {
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
                    .catch((e)=>console.log(e.message));
const b=()=> { 
    return promise;
}
module.exports={b, alwaysThrows, iterate, promise}