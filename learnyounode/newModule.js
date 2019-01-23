
const path = require('path');
const filterExt= (list, ext) => list.filter((element) => path.extname(element)==='.'+ext);
const filterLs = (filePath, ext, callback) => {
  const fs = require('fs');
  fs.readdir(filePath, (err, list) => {
      if (err) {
        return callback(err);
      }
      callback(null, filterExt(list, ext));
  });
}
module.exports={filterLs, filterExt};