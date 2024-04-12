const fs =require("fs");

// sync call
fs.writeFileSync("./test.txt", "this is file system, hellow world")
//== if we chnage in this that file over-ride to current file

// async call
fs.writeFile("test.txt","hellow this is async func",(err)=>{})


// we can read our files
const res = fs.readFileSync("index.html","utf-8")
console.log(res);

//== u used sync then wo apko ek var me dal ke de deta hai. Async fun me result ko return karna padta hai.


fs.readFile("index.html","utf-8", (err, res1)=>{
  if (err) {
    console.log("error", err);
  }
  else {
    console.log(res1);

  }
})


// the main diifence between sync and async is that
//  sync result ko return kar deta hai aur async expect karta hai callback function jis se wo error handel kar sakta hai.


// append file

fs.appendFileSync("./test.txt", `${new Date().getTime().toString()}\n`)