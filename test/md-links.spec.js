const index= require('../md-links.js');
// const mdLinks = require('../');
//
//
// describe('mdLinks', () => {
//
//   it('should...', () => {
//     console.log('FIX ME!');
//   });
//
// });

describe ("pathCheck", ()=>{
  it("should return false", ()=>{
    expect(md-links.pathCheck()).toBe(false);
  });
  it("should return true", ()=>{
    expect(md-links.pathCheck("./README.md")).toBe(true);
});
});

describe( "pathExist", ()=>{
  it("should be false", () =>{
    expect(md-links.pathExist("./README.txt")).toBe(false);
  });
it("Should be true", ()=>{
  expect(md-links.pathExist("./README.md")).toBe(true);
});
});

// describe("pathAbsolute", ()=>{
//   it("should return true", ()=>{
//     expect(index.pathAbsolute("")).toBe(true);
//   });
// });



describe ("pathMD", ()=>{
  it("should be true",()=>{
    expect(md-links.pathMD("./README.md")).toBe(true);
  });
  it("should return false", ()=>{
    expect(md-links.pathMD("./index.js")).toBe(false);
});

});
// describe ("pathDirectory", ()=>{
//   it("Should be a directory",()=>{
//     expect(index.pathDirectory("/Users/srh_1/Desktop/GDL002-md-links/test"‪)).toBe(true);
//   });
//   it("should be a file",()=>{
//     expect(index.pathDirectory("../GDL002-md-links/index.js")).toBe(false);
//   })
// });
