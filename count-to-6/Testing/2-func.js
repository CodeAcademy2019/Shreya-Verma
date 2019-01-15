module.exports=(a) => {
    var s=`Hello, ${a}!
Your name lowercased is "${a.toLowerCase()}".`;
    console.log(s);
    return s;
}