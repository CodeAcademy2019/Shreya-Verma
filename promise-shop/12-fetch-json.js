const qhttp= require('q-io/http');
const mainFunc= (link) => {
    return qhttp.read(link)//'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')//'http://localhost:12364')
                    .then((jsonObjString)=>JSON.parse(jsonObjString))
                    .then((jsonObj)=>{ 
                        console.log(jsonObj);
                        return jsonObj;
                    })
                    .catch(promiseError=>console.log(promiseError.message));
}
const promise= mainFunc('http://localhost:1337')
module.exports=mainFunc;
     