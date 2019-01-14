module.exports = function average(...args) {
    var a=args.reduce((res, a)=> res+=a, 0)/args.length;
    console.log(`Average of ${args} is ${a}`);
    return a;
};