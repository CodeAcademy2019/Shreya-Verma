function greet(name) {
    if (arguments.length>1) {
        var temp=Object.values(arguments);
        var upper=[];
        var lower=[];
        temp.forEach((a) => {
            if (a.split("").every((b) => b === b.toUpperCase())) {
                upper.push(a);
            }
            else {
                lower.push(a);
            }
        });
        var s="";
        if (lower.length>1) {
            s+="Hello, "+lower.slice(0, -1).reduce((r, a)=>r+=(", "+a))+" and "+lower[lower.length-1]+".";
        }
        else if (lower.length===1){
            s+=greet(...lower);
        }
        if (upper.length>1) {
            s+=" AND HELLO "+upper.slice(0, -1).reduce((r, a)=>r+=(", "+a))+" AND "+upper[upper.length-1]+"!";
        }
        else if (upper.length===1){
            s+=(" AND "+greet(...upper));
        }
        console.log(s);
        return s;
    }
    if (name===null) {
        console.log("Hello, my friend.");
        return "Hello, my friend.";
    }
    if (Array.isArray(name)) {
        name=name[0];
    }
    if (name.split("").every((a) => a === a.toUpperCase())) {
        console.log("HELLO "+name+"!");
        return "HELLO "+name+"!";        
    }
    console.log("Hello, "+name+".");
    return "Hello, "+name+".";
 }
 module.exports=greet;