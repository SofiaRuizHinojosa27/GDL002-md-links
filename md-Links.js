const fs = require('fs');
const path = require('path');
const pathFile = process.argv[2];
const mdLinks = require("./index");
const fileContent = mdLinks(pathFile, null);

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
},

//First read the file
fileContent: fileContent.then(
   (data)=> { // On Success
    console.log("Links encontrados:");
    getLinks(data);
   },
   (err)=> { // On Error
       console.error(err);
   }
 ),

//function that extracts the links
getLinks: function(data) {
    const mdLinkRgEx = /\[(.+?)\]\((.+?\))/g;
    const mdLinkRgEx2 = /\[(.+?)\]\((.+?)\)/;
    let allLinks = data.match(mdLinkRgEx);
    let htmlLinks = [];
  for (var x in allLinks) {
    let grpdDta = mdLinkRgEx2.exec(allLinks[x]);
    let grupoData = {
        href: grpdDta[2], //es la posición donde empieza el link
        text: grpdDta[1],
        file: pathFile
   };
    htmlLinks.push(grupoData);
  }
    console.log(htmlLinks.length);
    console.log(htmlLinks);
    return (htmlLinks);

}

};
