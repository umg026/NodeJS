const express = require("express");
const app = express();


app.get("/", (req, res)=>{
    res.send("hellow this page is HOME PAGE")
})

app.get("/about", (req,res)=>{
    res.send("hellow from ABOUT PAGE" + "hey" + req.query.name);
})
app.all("/",(req, res)=>{
    res.send("I am Boos")
})

app.listen(8000, ()=>console.log("Server started"));


// This Is node js way to listen ports
// const myServer = http.createServer(app)

// myServer.listen(8080, ()=> console.log("server started"));