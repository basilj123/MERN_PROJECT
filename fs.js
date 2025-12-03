// import path from 'path';
const path = require('path');
// import fs from 'fs';
const fs = require('fs');


const folderPath1 = path.join(__dirname,'demo/folder')
console.log(folderPath1);

const filePath = path.join(folderPath1,'file.txt')
console.log(filePath);


fs.mkdir(folderPath1,{recursive: true},(err) =>{
    if(err) throw err
})

//create + Write file
fs.writeFileSync(filePath,"Hello Basil");

//Add more Text
fs.appendFileSync(filePath,"\nLearning fs modules");

//Read files
const data = fs.readFileSync(filePath,'utf-8')
console.log(data);

//Delete file
fs.unlinkSync(filePath)

//Delete folder
fs.rmSync(folderPath1,{recursive: true,force: true})