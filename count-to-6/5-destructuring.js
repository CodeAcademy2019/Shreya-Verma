let userArray = process.argv.slice(2);
let obj={};
[, obj.username, obj.email]=userArray;
console.log(obj);