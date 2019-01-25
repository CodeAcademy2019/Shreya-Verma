const net = require('net');
const timeServerMain = require('./10-time-server');
describe('checking time server', () => {
  it('should receive date from port', (done) => {
    function callbackF(data) {
      console.log(data.toString());
      expect(data.toString()).toEqual(timeServerMain.createDate());
      done();
    }
    const client = net.connect(7000);
    client.on('data', callbackF);
  });
  it('should not receive anything other than date from port', (done) => {
    function callbackF(data) {
      console.log(data.toString());
      expect(data.toString()).not.toEqual('sdhcvdsv');
      done();
    }
    const client = net.connect(7000);
    client.on('data', callbackF);
  });
});
