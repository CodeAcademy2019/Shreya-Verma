var a=process.argv.slice(2);
if (a.length===0){
    console.log(`The minimum of [${a}] is not defined`);
}
else {
    console.log(`The minimum of [${a}] is ${Math.min(...a)}`);
}