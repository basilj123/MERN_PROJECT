// //1.CommonJS (require/module.exports)
// //Normal function
function myFun1(name){
    console.log(`Welcome to node.js: ${name}`);   
};

//Anonymous function
const myFun2 = function(){
    console.log("Welcome to real world");  
}

module.exports = { myFun1, myFun2}



//2.ES Modules(import/export)
// export function add(a,b){
//     return a+b;
// }

// export function multiply(a,b){
//     return a*b;
// }


//Objects
// const obj1 = {
//     name: "Basil",
//     id: 101,
//     greet: function(){
//         console.log(`hi,Iam ${this.name} & my Id is ${this.id}`);  
//     }
// }

// module.exports = {obj1};