const callback= (data) => { 
    console.log(data);
}
const getFile = (callback) => {
    const http=require('http')
    const fs=require('fs')
    const server=http.createServer((function(request,response)
    {   src= fs.createReadStream(process.argv[3]);
        src.pipe(response);
        // response.on('data', callback);
        // response.end();
    }));
    server.listen(process.argv[2]);
    //server.close();
};
getFile(callback);
module.exports=getFile;