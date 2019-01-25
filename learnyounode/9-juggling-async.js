const http = require('http');

const juggleAsync = () => {
  const urlArr = process.argv.slice(2);
  const contentArr = [];
  urlArr.forEach(() => {
    contentArr.push(null);
  });
  urlArr.forEach((url, index) => {
    http.get(url, (response) => {
      let content = '';
      response.setEncoding('utf-8');
      response.on('data', (data) => {
        content += data;
      });
      response.on('end', () => {
        contentArr[index] = content;
        if (contentArr.filter(val => val != null).length === urlArr.length) {
          contentArr.forEach((val) => {
            console.log(val);
          });
        }
      });
    });
  });
  return contentArr;
};
//juggleAsync();
module.exports = juggleAsync;
