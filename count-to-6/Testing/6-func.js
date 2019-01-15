module.exports=(a) => {
    var s;
    if (a.length===0){
        s=`The minimum of [${a}] is not defined`;
    }
    else {
        s=`The minimum of [${a}] is ${Math.min(...a)}`;
    }
    console.log(s);
    return (s);
}