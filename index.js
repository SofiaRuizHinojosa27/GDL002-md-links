const fs = require('fs');

// module to read files
module.exports = (filePath, options) => {
 return new Promise((resolve, reject)=> {
   // Read file
   fs.readFile(filePath, function(err, data){
     if (err){
       return reject(err);
     }
     resolve(data.toString());
   });
 });
};
