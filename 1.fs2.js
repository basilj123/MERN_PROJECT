// //1.older version
// const path = require('path');
// const fs = require('fs');

// const folderPath2 = path.join(__dirname,'folder_2');
// console.log('folder path:',folderPath2);
// const filePath2 = path.join(folderPath2,'file.text')
// console.log('file path',filePath2);


//2.new version - ES module
import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const folderPath = path.join(__dirname,'folder_1');
console.log('folder path:',folderPath);
const filePath = path.join(folderPath,'file.txt');
console.log('file path',filePath);


//1.Create folder
// //1.1 Asynchronous
// fs.mkdir(folderPath,{recursive: true},(err) =>{
//     if(err) console.error(err)
//     else console.log('1.Folder created successfully');
// })

// //1.2 Synchronous
// fs.mkdirSync(folderPath,{recursive: true});
// console.log("1.Folder Created");

//1.3 Promises (modern)
await fsPromises.mkdir(folderPath,{recursive: true});
console.log("1.Folder Created");



//2.Create & Write a file
// //2.1 Asynchronous
// fs.writeFile(filePath,'Hello Basil',(err) =>{
//     if(err) console.error(err)
//     else console.log("2.File Written");
// });

// //2.2 Synchronous
// fs.writeFileSync(filePath,"Hai Basil");
// console.log("2.File Written");

//2.3 Promises (modern)
await fsPromises.writeFile(filePath,"Hello Basil")
console.log("2.File written");



//3.Append to a file
// // 3.1 Asynchronous
// fs.appendFile(filePath,"\nLearning fs Modules",(err) =>{
//     if(err) console.error(err)
//     else console.log("3.Text Appended!");   
// })

// //3.2 Synchronous
// fs.appendFileSync(filePath,"\nLearning fs-Modules")
// console.log("3.Text Appended!");

//3.3 Promises (modern)
await fsPromises.appendFile(filePath,"\nLearning fs modules")
console.log("3.Text Appended!");



//4.Read File
//4.1 Asynchronous
// fs.readFile(filePath,"utf-8",(err,data) =>{
//     if(err) console.error(err)
//     else console.log("File Content:\n",data);  
// });

// //4.2 Synchronous
// const data = fs.readFileSync(filePath,'utf-8');
// console.log("File content:\n",data);

//4.3 Promises (modern)
const data1 = await fsPromises.readFile(filePath,'utf-8')
console.log("File-Content:\n",data1);



//5.Delete File
//5.1 Asynchronous
// fs.unlink(filePath,(err) =>{
//     if(err) console.error(err)
//     else console.log("File Deleted");   
// });

// //5.2 Synchronous
// fs.unlinkSync(filePath)
// console.log("File Deleted");

// //5.3 Promises (modern)
// await fsPromises.unlink(filePath)
// console.log("File deleted");



//6.Read folder Contents
//6.1 Asynchronous
// fs.readdir(folderPath,(err,files) =>{
//     if(err) console.error(err)
//     else console.log("Folder Contents:\n",files); 
// })

// //6.2 Synchronous
// const file = fs.readdirSync(folderPath)
// console.log("Folder Contents:\n",file);

//6.3 Promises (modern)
const file1 = await fsPromises.readdir(folderPath);
console.log("Folder Content:\n",file1);



//7.Remove Folder
//7.1 Asynchronous
// fs.rm(folderPath,{recursive: true},(err) =>{
//     if(err) console.error(err)
//     else console.log("Folder Removed");
// });

//7.2 Synchronous
// fs.rmSync(folderPath,{recursive: true});
// console.log("Folder removed");

//7.3 Promises (modern)
// await fsPromises.rm(folderPath,{recursive: true});
// console.log("Folder Removed");



//8.Check if folder/file Exists
//8.1 Asynchronous
// fs.access(folderPath,fs.constants.F_OK,(err) =>{
//     if(err){
//         console.log("Folder does not exist");  
//     }else{
//         console.log("Folder exists");   
//     }
// });

// fs.access(filePath,fs.constants.F_OK,(err) =>{
//     if(err){
//         console.log("File does not exist");   
//     }else{
//         console.log("File exist");
//     }  
// });

//8.2 Synchronous
// if(fs.existsSync(folderPath)){
//     console.log("Folder Exist");
// }else{
//     console.log("Folder does not exist");   
// }

// if(fs.existsSync(filePath)){
//     console.log("File Exist");  
// }else{
//     console.log("File does not exist");   
// }

//8.3 Promises (modern)
try{
    await fsPromises.access(folderPath)
    console.log("Folder exist"); 
}catch{
    console.log("Folder does not exist");   
}

try{
    await fsPromises.access(filePath)
    console.log("File exist");   
}catch{
    console.log("File does not exist");   
}