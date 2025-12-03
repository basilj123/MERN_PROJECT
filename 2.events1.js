// const EventEmitter = require('events')
import EventEmitter from 'events'

const emitter = new EventEmitter()

emitter.on("message",(data) =>{
    // console.log(data);  
    console.log(data.text); 
});

emitter.on("logout",(data) =>{
    console.log(data.text);
})


emitter.emit("message",{text: "User Logged in",userId: 1});
emitter.emit("message",{text: "User went to about page"});
emitter.emit("message",{text: "User went to contact page"});

emitter.emit("logout",{text: "User Logged out",userId: 1});