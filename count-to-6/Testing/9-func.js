module.exports=(str, l=str.length) => {
    var a= str + "!".repeat(l);
    console.log(`${str} becomes ${a}`);
    return a;
}