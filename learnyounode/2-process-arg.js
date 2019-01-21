const printSum = () => {
    const result = process.argv.slice(2).reduce((initial,val) => initial+Number(val), 0);
    console.log(result);
    return result;
}
printSum();
module.exports=printSum;