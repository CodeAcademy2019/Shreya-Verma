const b='TIMED OUT!'
const c=()=>{ 
    console.log(b); 
    return b;
}
const a=()=> { 
    setTimeout(c, 300);
}
a();
module.exports={a, c};