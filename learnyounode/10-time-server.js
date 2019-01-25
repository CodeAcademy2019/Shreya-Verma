const net = require('net');

const addZero = (val) => {
  if (val < 10) {
    return `0${val}`;
  }
  return val;
};
const callback = (res) => {
  console.log(res);
};
const createDate = () => {
  const date = new Date();
  const data = `${date.getFullYear()}-${
    addZero(date.getMonth() + 1)}-${
    addZero(date.getDate())} ${
    addZero(date.getHours())}:${
    addZero(date.getMinutes())}\n`;
  //console.log('data', data);
  return data;
};
const timeServer = (callbackF) => {
  let data;
  const server = net.createServer((socket) => {
    data = createDate();
    socket.write(data);
    //socket.end();
  });
  server.listen(7000);
  //server.close();
};
//timeServer(callback);

module.exports = { timeServer, createDate };
