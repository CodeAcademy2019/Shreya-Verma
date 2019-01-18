//TESTING
/*var getPromise1= () => new Promise((resolve, reject) => resolve('hey'));
var getPromise2= () => new Promise((resolve, reject) => resolve('delilah'));*/
const all= (promise1, promise2)=> {
    var counter=0;
    var resolved=false;
    var arr=[];
    return new Promise((resolve, reject) => {
        const intfunc=(val)=> { 
            if (resolved===true){
                return;
            }
            arr[counter]=val
            ++counter;
            if (counter==2) {
                resolved =true;
                resolve(arr);
            }
        };
        const onReject=(e) => {
            resolved=true;
            reject(e);
        }
        promise1.then(intfunc, onReject);
        promise2.then(intfunc, onReject);
    });
}
const promise= all(getPromise1(), getPromise2())
                .then((val) => { 
                    console.log(val);
                    return val;
                });
module.exports=promise;