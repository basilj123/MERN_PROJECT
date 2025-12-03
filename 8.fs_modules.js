const path = require('path');
const fs = require('fs');

const folderPath = path.join(__dirname,'folder1');
const filePath = path.join(folderPath,'file.txt');

// Promises - Best fs Modules Version
const fsPromises = require('fs').promises;

async function fsModules(){
    //1.Create a Folder - mkdir [promise]
    await fsPromises.mkdir(folderPath,{recursive:true});
    console.log('Folder Created');

    //2.Create a File & Write Text - writeFile [promise]
    await fsPromises.writeFile(filePath,'Basil luv Rosiya & Sandra');
    console.log('File Created & Written Text');

    //3.Add More Text into That File - appendFile [promise]
    await fsPromises.appendFile(filePath,'\n Also love Anju');
    console.log('New Text Added');

    //4.Read File Contents - readFile [promise]
    const data1 = await fsPromises.readFile(filePath,'utf-8')
    console.log('File Contents:\n',data1);

    //5.Read Folder Contents - readdir [promise]
    const data2 = await fsPromises.readdir(folderPath,'utf-8');
    console.log('Folder Content:\n',data2);  

    // //6.Delete File - unlink [promise]
    // await fsPromises.unlink(filePath,{recursive:true});
    // console.log('File Deleted');
   
    // //7.Remove Folder - rm [promise]
    // await fsPromises.rm(folderPath,{recursive:true});
    // console.log('Folder Removed');
    
    //8.Check File/Folder Exist - access [promise]
    //Folder case
    try{
        await fsPromises.access(folderPath);
        console.log('Folder Exist');    
    }catch{
        console.log('Folder Does not exist');  
    }

    //File case
    try{
        await fsPromises.access(filePath);
        console.log('File Exist');   
    }catch{
        console.log('File Does not Exist');    
    }

    // 9.Rename File - rename [promise]
    try{
      const newFilePath = path.join(folderPath,'newFile.txt')
      await fsPromises.rename(filePath,newFilePath)
            console.log('File Renamed');   
    }catch(err){
        console.error('Error While Renaming',err)
    }

    //10.Rename Folder - rename [promise]
    try{
        const newFolderPath = path.join(__dirname,'newFolder');
        await fsPromises.rename(folderPath,newFolderPath);
        console.log('Folder Renamed');  
    }catch(err){
        console.error('Error While Renaming',err);
    }
}

fsModules();




// // //1.Create a folder
// //1.1 Asynchronous - most used
// // fs.mkdir(folderPath,{recursive:true},(err) =>{
// //    if(err) console.error(err);
// //    else console.log('1.Folder created'); 
// // });

// // //1.2 Synchronous 
// //fs.mkdirSync(folderPath,{recursive:true});
// //console.log('1.folder created');



// // //2.Create & write a file
// //2.1 Asynchronous
// // fs.writeFile(filePath,'Hello from node js',(err) =>{
// //     if(err) console.error(err);
// //     else console.log('File Created & written'); 
// // });

// // //2.2 Synchronous
// //fs.writeFileSync(filePath,'Basil From kochi');
// //console.log('file created & written');



// // //3.Append a file
// //3.1 Asynchronous
// // fs.appendFile(filePath,'\nBasil luv Rosiya',(err) =>{
// //     if(err) console.error(err);
// //     else console.log('Text Added'); 
// // });

// // //3.2 Synchronous
// fs.appendFileSync(filePath,new Date().getDate().toLocaleString());
// console.log('New Text Added');



// // //4.Read a file
// // 4.1 Asynchronous
// // fs.readFile(filePath,'utf-8',(err,data) =>{
// //     if(err) console.error(err);
// //     else console.log(data);  
// // });

// // //4.2 Synchronous
// //const data = fs.readFileSync(filePath,'utf-8')
// //console.log(data);



// // //5.Read Folder Content
// //5.1 Asynchronous
// // fs.readdir(folderPath,'utf-8',(err,data) =>{
// //     if(err) console.error(err);
// //     else console.log(data); 
// // });

// // //5.2 Synchronous
// //const data1 = fs.readdirSync(folderPath,'utf-8');
// //console.log(data1);



// //6.Rename File
// //6.1 Asynchronous
// // fs.rename(newFile,filePath,(err) =>{
//     if(err) console.error(err);
//     else console.log('File Renamed');  
// })

// //6.Delete File
// //6.1 Asynchronous
// fs.unlink(filePath,(err) =>{
//     if(err) console.error(err);
//     else console.log('File Deleted');  
// });



// //7.Remove Folder 
// //7.1 Asynchronous
// fs.rm(folderPath,{recursive:true},(err) =>{
//     if(err) console.error(err);
//     else console.log('Folder Removed');   
// })



// //8.File/Folder Exist or not
// //8.1 Asynchronous
// //Folder case
// fs.access(folderPath,fs.constants.F_OK,(err) =>{
//     if(err){
//         console.log('Folder does not exist');   
//     }
//     else{
//         console.log('Folder Exist');    
//     }   
// });

// //File case
// fs.access(filePath,fs.constants.F_OK,(err) =>{
//     if(err){
//         console.log('File Does not exist');
//     }
//     else{
//         console.log('File Exist');   
//     }
// });


