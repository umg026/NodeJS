const fs = require("fs");
const os = require("os")

console.log(os.cpus().length); // check cpus thred length

// Blocking          sync call ....
const result = fs.readFileSync("./index.html", "utf-8")
console.log(result);



//Non-Blocking       async call..
console.log("1");
fs.readFile("test.txt","utf-8",(err, result)=>{
    console.log(result);
})
console.log("2");
