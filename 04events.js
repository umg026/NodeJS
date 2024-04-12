const events = require("events")
const eventEmitter = new events.EventEmitter();


const myfunction = function abc() {
    console.log("hellow events called success");
}

eventEmitter.on("click", myfunction); // one typeof AddEventListner 
eventEmitter.emit("click") // for fire events.

// events emmiter e nodeJs nu built-in module hai jo events ko handel karne ke liye hota hai.



eventEmitter.on("click1", ()=>{
    setTimeout(()=>{
        console.log("1");
    },1000)
})

eventEmitter.on("click1", ()=>{
        console.log("10");
})

eventEmitter.on("click1", ()=>{
    setTimeout(()=>{
        console.log("10000");
    },100)
})
eventEmitter.emit("click1");