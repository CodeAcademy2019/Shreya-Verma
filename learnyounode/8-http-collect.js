const http = require('http');

// eslint-disable-next-line no-unused-vars
const callback = (res) => {
  console.log(res.length);
  console.log(res);
};
const httpCollect = (callbackF) => {
  http.get(process.argv[2], (response) => {
    let result = '';
    response.setEncoding('utf8');
    response.on('data', (data) => {
      result += data;
    });
    response.on('end', () => {
      callbackF(result);
    });
  });
};
httpCollect(callback);
module.exports = httpCollect;
// WITH bl
// const http = require('http');
// const bl = require('bl')
// const httpCollect= () => {
//     http.get(process.argv[2], (response) => {
//       response.pipe(bl((err, data) => {
//         if (err) {
//           console.log(err);
//         }
//         data = data.toString();
//         console.log(data.length);
//         console.log(data);
//       }));
//     });
// };
// httpCollect()
