const Add= (str) => {
    const splitStr=str.split(',');
    const arr=splitStr.map((val)=>Number(val));
    return arr.reduce((initial, val)=>initial+=val, 0);
}
module.exports=Add;