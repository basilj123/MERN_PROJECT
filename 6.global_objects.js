//Some Global Object/function - No need to import/install.

console.log("Node JS");
// console.clear();
console.log(__filename);
console.log(__dirname);
const path = require('path');
// setInterval();
// setTimeout();
// clearInterval();
// clearTimeout();

// setTimeout(() =>{
//     console.log("Hello New World");  
// },5000)


const si = setInterval(() =>{
    console.log("Node JS"); 
},2000);

const st = setTimeout(() =>{
    clearInterval(si);
    console.log("Execution Ended!"); 
},6100);

clearTimeout(st);
