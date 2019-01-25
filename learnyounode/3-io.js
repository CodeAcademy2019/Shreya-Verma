const printNewline = () => {
    const fs=require('fs');
    const buf=fs.readFileSync(process.argv[2]);
    const str=(buf.toString()).split('\n');
    const result = str.length-1;
    console.log(result);
    return result;
}
printNewline();
module.exports=printNewline;