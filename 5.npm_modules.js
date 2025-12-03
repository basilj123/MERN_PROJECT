//npm/third party package - install from npmjs.com
const cc = require('cli-color');
const uc = require('upper-case')


//module/package 
//1.cli-color - [Terminal - npm i cli-color]
console.log("Hello World");
console.log(cc.yellow.underline("Hello World"));


//2. upper-case - [Terminal - npm i upper-case]
console.log("Hai Universe");
console.log(uc.upperCase("hai Universessss"));


//3.How to create our own module/Package
//Terminal - npm init


//4.nodemon - Auto Run [Install globally]
//Terminal - npm install -g nodemon [we use -g to install globally]
//How to active nodemon - nodemon (filename) 
//How to deactivate nodemon (autorun) - ctrl+c


//How to uninstall modules/Packages
//Terminal - npm uninstall (module name)