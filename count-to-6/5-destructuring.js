let userArray = process.argv.slice(2);
[, username, email]=userArray;
let obj={ username: username||'',
        email: email||''};
console.log(obj);
