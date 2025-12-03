const path = require('path');
// import path from 'path'

//1.Current Path
console.log(__filename);
console.log(__dirname);
console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.join(__filename,'folder'));
console.log(path.join(__filename,'folder','file.txt'));
console.log(path.parse(__filename));
console.log(path.parse(__filename).base);
console.log(path.parse(__filename).ext);
console.log(path.parse(__filename).dir);
console.log(path.parse(__filename).name);
console.log(path.parse(__filename).root);
console.log('---------------');


//2.Create a Path
const p = '/Home/Users/MERN/Node/folder_1/file_1.txt';
console.log(p);
console.log(path.basename(p));
console.log(path.dirname(p));
console.log(path.extname(p));
console.log(path.join(p,'folder_2','file_2.txt'));
console.log(path.parse(p));
console.log(path.parse(p).base);
console.log(path.parse(p).ext);
console.log(path.parse(p).dir);
console.log(path.parse(p).name);
console.log(path.parse(p).root);



