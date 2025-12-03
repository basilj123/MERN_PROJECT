//1.CommonJS (require/module.exports)
const {myFun1,myFun2} = require('./4.local_modules2');

myFun1('basil');
myFun2();


//2.ES Modules(import/export)
// import {add,multiply} from './4.local_modules2.js';

// console.log(add(5,3));
// console.log(multiply(5,3));


// //3.Import all from that file
// import * as utils from './4.local_modules2.js'
// console.log(utils.add(5,4));
// console.log(utils.multiply(5,4));



//Objects
// const {obj1} = require('./4.local_modules2.js')

// console.log(obj1.id);
// obj1.greet()