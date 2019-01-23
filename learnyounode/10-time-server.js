const net = require('net');
const addZero = (val) => {
    if (val<10){
        return '0'+val;
    }
    return val;
};
const callback = (res) => {
    console.log(res);
}
const createDate = () => {
    date = new Date();
    data = date.getFullYear() + '-' +
            addZero(date.getMonth() + 1) + '-' +    
            addZero(date.getDate()) + ' ' + 
            addZero(date.getHours()) + ':' +
            addZero(date.getMinutes()) + '\n';
    return data;
}
const timeServer = (callback) => {
    var data;
    const server = net.createServer((socket) => {
        data=createDate()
        socket.write(data);
        socket.on('data', callback);
        socket.end();
    });
    server.listen(process.argv[2]);
    //server.close();
};
timeServer(callback);
module.exports = {timeServer, createDate};