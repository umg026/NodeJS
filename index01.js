const http = require("http")
const fs = require("fs")
var url = require('url');


// const server = http.createServer((req,res)=>{
//     console.log(req.headers);
//     res.end("hellow from this server , this server is created by umang");
// });
// server.listen(1000,()=>console.log("server started "));


// ========= Example 2 =====================

// http.createServer((req,res)=>{
//     var q = url.parse(req.url, true).query;
//   var txt = q.year + " " + q.month;
//   res.end(txt);

// }).listen(2609,()=>console.log("server started umang"));



// ============== Example 3 ==========================================

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.method} ${req.url} New req recived\n`;
  const myUrl = url.parse(req.url, true);

  fs.appendFile("server.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        if (req.method === "GET") res.end("homepage");
        break;

      case "/about":
        const userName = myUrl.query.myname;
        res.end(`hi , ${userName}`)
        break;

      case "/about":
        const search = myUrl.query.search_query;
        res.end("Here is your search history is :" + search)
        break;

      default:
        break;
    }
  })
})
myServer.listen(2609,()=>console.log("server started umang"))