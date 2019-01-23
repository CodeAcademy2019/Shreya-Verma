const http = require('http');
const callback = (res) => {
    console.log(res.length);
    console.log(res);
}
const httpCollect= (callback) => {
    http.get(process.argv[2], (request) => {
        var result = '';
        request.setEncoding('utf8');
        request.on('data', data => {
            result += data;
        });
        request.on('end', () => {
            callback(result);
        });    
    });
};
//httpCollect(callback);
module.exports = httpCollect; 
//WITH bl
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