module.exports= (userArray) => {
    [, username, email]=userArray;
    let obj={ username: username||'',
              email: email||''};
    console.log(obj);
    return obj;
}
