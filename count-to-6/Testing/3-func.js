function prog(inputs){
    var result = inputs.map(x=>x.charAt(0))
                        .reduce((x, y)=>x+y);
    console.log(`[${inputs}] becomes "${result}"`);
    return `[${inputs}] becomes "${result}"`;
}
module.exports=prog;