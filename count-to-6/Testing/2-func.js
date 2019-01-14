function prog(a) {
    var s=`Hello, ${a}!
Your name lowercased is "${a.toLowerCase()}".`;
    console.log(s);
    return s;
}
module.exports=prog;