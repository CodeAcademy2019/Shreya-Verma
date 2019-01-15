var average=(...args) => {
    var a;
    if (args.length===0) {
        a=0;
    }
    else {
        a=args.reduce((res, a)=> res+=a, 0)/args.length;
    }
    console.log(`Average of ${args} is ${a}`);
    return a;
};
module.exports = average