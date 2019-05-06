const fs = require('fs');
const path = require('path');
const pathFile = process.argv[2];
const mdLinks = require("./index");
const fileContent = mdLinks(pathFile, null);

//with this function we make sure that the user has entered a path and has not left it empty
function pathCheck (pathFile) {
  if(pathFile != undefined) {
      console.log("true");
      return true
  }
  else {
      return false
  }
};

// with this function we check if the entered path exists
function pathExists (pathFile) {
    if(fs.existsSync(pathFile)){
        console.log("true")
        return true
    } else {
        console.log("false");
        return false
    }
  };

// // With this function we find out if the path is inside a directory
function pathDirectory (pathFile){
    if(fs.statSync(pathFile).isDirectory()){
      return true
    } else{
      return false
    }
};

// // With this function we verify that the path contains a file with MD extension
function pathMD (pathFile){
        if (path.win32.extname(pathFile) === ".md") {
            return true
        } else {
            return false
        }
  };


//Read file
 fileContent.then(
   (data)=> { // On Success
    console.log("Links encontrados:");
    getLinks(data);
   },
   (err)=> { // On Error
       console.error(err);
   }
  );

//Fuction that extracts the links inside of file
function getLinks(data) {
    const mdLinkRgEx = /\[(.+?)\]\((.+?\))/g;
    const mdLinkRgEx2 = /\[(.+?)\]\((.+?)\)/;
    let allLinks = data.match(mdLinkRgEx);
    let htmlLinks = [];
  for (var x in allLinks) {
    let grpdDta = mdLinkRgEx2.exec(allLinks[x]);
    let grupoData = {
        href: grpdDta[2], //is the position where the link starts
        text: grpdDta[1],
        file: pathFile
   };
    htmlLinks.push(grupoData);
  }
    console.log(htmlLinks.length);
    console.log(htmlLinks);
    return (htmlLinks);

};

module.exports = {
  "pathCheck": pathCheck,
  "pathExists": pathExists,
  "pathDirectory": pathDirectory,
  "pathMD": pathMD,
  "getLinks": getLinks,
  "fileContent": fileContent,
};
