const path = require('path');

console.log(__filename);
console.log(__dirname);

//1.PATH
//1.1 path.join
const folderPath1 = path.join("folder_1","file.text")
console.log(folderPath1);

const folderPath2 = path.join(__dirname, "folder_1","file.text");
console.log(folderPath2);
console.log('------------------');


//1.2 path.resolve
const folderPath3 = path.resolve("folder_1","file.text")
console.log(folderPath3);
console.log('------------------');


//1.3 path.basename
const folderPath4 = path.basename(__filename);
console.log(folderPath4);
console.log(path.basename('C:/Users/basil/OneDrive/Desktop/Node/folder_1/file.text'));
console.log('------------------');


//1.3 path.extname
const folderPath5 = path.extname(__filename)
console.log(folderPath5);
console.log(path.extname('C:/Users/basil/OneDrive/Desktop/Node/folder_1/file.text'));
console.log('------------------');


//1.3 path.dirname
const folderPath6 = path.dirname(__filename)
console.log(folderPath6);
console.log(path.dirname('C:/Users/basil/OneDrive/Desktop/Node/folder_1/file.text'));
console.log('------------------');


//1.3 path.parse
const folderPath7 = path.parse(__filename)
console.log(folderPath7);
console.log(path.parse(__filename).base);
console.log(path.parse(__filename).ext);
console.log(path.parse(__filename).dir);
console.log(path.parse(__filename).name);
console.log(path.parse(__filename).root);

const folderPath8 = path.parse(__dirname)
console.log(folderPath8);


