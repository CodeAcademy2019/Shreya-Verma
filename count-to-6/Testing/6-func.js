function prog(a) {
    var s=`The minimum of [${a}] is ${Math.min(...a)}`;
    console.log(s);
    return (s);
}
module.exports=prog;