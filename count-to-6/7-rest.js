module.exports = function average(...args) {
    return args.reduce((res, a)=> res+=a, 0)/args.length;
};