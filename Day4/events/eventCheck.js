const EventEmitter = require('events');
class MyEmitter extends EventEmitter{}
const myEmitter= new MyEmitter();

myEmitter.on('greet',(data)=>{
    console.log("Hello "+data +". You are wlcome here!")
})

//triggering event
myEmitter.emit('greet',"yubi");
