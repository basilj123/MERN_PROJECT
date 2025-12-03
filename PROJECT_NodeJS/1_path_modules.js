const path = require('path');

//1.__filename
console.log(__filename);
console.log('---------------');

//2.__dirname
console.log(__dirname);
console.log('---------------');

//3.path.dirname(path)
console.log(path.dirname(__filename));
console.log(path.dirname('/Home/User/Basil/folder1/file1.jpeg'));
console.log('---------------');

//4.path.basename(path)
console.log(path.basename(__filename));
console.log(path.basename('/Home/User/Basil/folder1/file1.jpeg'));
console.log('---------------');

//5.path.extname(path)
console.log(path.extname(__filename));
console.log(path.extname('/Home/User/Basil/folder1/file1.jpeg'));
console.log('---------------');

//6.path.join(path)
console.log(path.join(__dirname,'folder1','file1.txt'));
console.log(path.join('Home','Basil','file1.jpeg'));
console.log('---------------');

//7.path.resolve(path)
console.log(path.resolve('folder2','file2.txt'));
console.log(path.resolve('Home','Basil','file2.jpeg'));
console.log('---------------');

//8.path.parse(path)
console.log(path.parse(__filename));
console.log(path.parse(__filename).dir);
console.log(path.parse(__filename).base);
console.log(path.parse(__filename).ext);
console.log(path.parse(__filename).name);
console.log(path.parse(__filename).root);
console.log('---------------');

//9.path.format(object)
const format = path.format({
    dir: __dirname,
    name: 'newFile',
    ext: '.txt'
});
console.log(format);
