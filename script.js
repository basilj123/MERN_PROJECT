const arr1 = ['a','b','c']
arr1.push('d')

const newArray = [...arr1,'d']
console.log(newArray);

function myFun(callback){
    console.log("Running");
    callback();
}

myFun(fun2);
function fun2(){
    console.log("Basil");   
}

//setTimeout & setInterval
const timer = setInterval(() => {
    console.log("Basil love Rosiya"); 
},2000);

setTimeout(() =>{
    clearInterval(timer);
    console.log("i love her a lot");  
},6100);


console.log("Text");
global.console.log("Text")
console.log(global);
console.log(__filename);
console.log(__dirname);

