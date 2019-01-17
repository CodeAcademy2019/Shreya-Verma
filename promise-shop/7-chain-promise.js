/*const first=()=>{
    return Promise.resolve('Fulfilled 1');
}
const second=(arg)=>{
    return arg+' Fulfilled 2';
}
*/
promise1= first();
promise2=promise1.then((arg) => second(arg));
promise2.then(console.log);

module.exports={promise1, promise2};