function html(...args) {
    var safe={"'": '&apos;', '"': '&quot;', '<': "&lt;", ">": "&gt;", "&": "&amp;"};
    var b=args.slice(1).map((a) => a.replace(/"|'|<|>|&/g, (c) => safe[c]));
    var c=args[0].reduce((r, a, i)=>r+=(b[i-1]+a));
    console.log(`${args} 
${c}`);
    return c;
}
module.exports=html