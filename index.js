const fs = require("fs");
const path= require("path");

module.exports =  {

//with this function we make sure that the user has entered a path and has not left it empty
pathCheck: function(pathfile){
  if(pathfile == undefined){
    return false
  }
  else{
    return true
}
},

//with this function we check if the entered path exists
pathExist: function(pathfile){
  if (fs.existsSync(pathfile)){
    return true;
  }
  else{
    return false;
  }
},

// pathAbsolute: function(pathfile){
//   if(path.isAbsolute(pathfile)){
//     return true;
//   }
//   else{
//     return false;
//   }
//   },

// With this function we find out if the path is inside a directory
pathDirectory: function(pathfile){
  if (fs.statSync(pathfile).isDirectory()){
    return true;
  } else{
    return false;
  }
},

// With this function we verify that the path contains a file with MD extension
pathMD: function(pathfile){
  if(path.win32.extname(pathfile) === ".md"){
    return true;
  }
  else{
    return false;
  }
}

};
