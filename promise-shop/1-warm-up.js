const timeoutPrint='TIMED OUT!'
const executeOnTimeout=()=>{ 
    console.log(timeoutPrint); 
    return timeoutPrint;
}
const timeoutTest=()=> { 
    setTimeout(executeOnTimeout, 300);
}
timeoutTest();
module.exports={timeoutTest, executeOnTimeout};