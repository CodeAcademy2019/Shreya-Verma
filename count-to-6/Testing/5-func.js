function prog(userArray){
    let obj={};
    [, obj.username, obj.email]=userArray;
    console.log(obj);
    return obj;
}
module.exports=prog;