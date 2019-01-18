const qhttp= require('q-io/http');
const mainFunc= (link) => {
    return qhttp.read(link)
                    .then((userID)=>qhttp.read('http://localhost:7001/'+userID))
                    .then((jsonObjString)=>JSON.parse(jsonObjString))
                    .then((jsonObj)=>console.log(jsonObj))
                    .catch(promiseError=>console.log(promiseError));
}
promise= mainFunc('http://localhost:7000')
module.exports=mainFunc;