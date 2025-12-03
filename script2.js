console.log(__filename);
console.log(__dirname);


const path = require("path");
// console.log(path);
const fs = require("fs")
// console.log(fs);
console.log(path.basename(__filename)); //only file name
console.log(path.extname(__filename)); //only extension name
console.log(path.dirname(__filename)); //only directory
console.log(path.parse(__filename));
console.log(path.parse(__filename).base);
console.log(path.parse(__filename).ext);
console.log(path.parse(__filename).dir);
console.log(path.parse(__filename).name);
console.log(path.parse(__filename).root);

// console.log(path.join(__dirname,"api","script2.js"));

fs.mkdir(path.join(__dirname,"/api2/api3/index.html"),{},(err) => {
    if(err) throw err;
});





