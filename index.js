const fs = require("fs");
const path= require("path");

module.exports =  {

pathCheck: function(pathfile){
  if(pathfile == undefined){
    return false
  }
  else{
    return true
}
},

pathExist: function(pathfile){
  if (fs.existsSync(pathfile)){
    return true;
  }
  else{
    return false;
  }
},

// pathDirectory: function(pathfile){
//   if (fs.statSync(pathfile).isDirectory()){
//     return true;
//   } else{
//     return false;
//   }
// },

pathMD: function(pathfile){
  if(path.extname(pathfile) === ".md"){
    return true;
  }
  else{
    return false;
  }
}

// pathAbsolute: function(pathfile){
//   if(path.isAbsolute(pathfile)){
//     return true;
//   }
//   else{
//     return false;
//   }
//   }
};
