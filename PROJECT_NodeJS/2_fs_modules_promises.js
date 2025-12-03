const fsPromises = require('fs').promises;

//PROMISES - (MODERN)
//1.Create a new Folder
async function createFolder(){
    try{
        await fsPromises.mkdir('./NewFolder',{});
        console.log('Folder Created Sucessfully');  
    }catch(err){
        console.error('Error While Creating folder',err.message);  
    }
}


//2.Create a new File & Write Content
async function writeFile(){
    try{
        await fsPromises.writeFile('./newFolder/newFile.txt','Hello from Server Side\n');
        console.log('File Created & Text Added');
    }catch(err){
        console.error('Error While Adding Text',err.message);
    }
}


//3.Append new Text (If the file does'nt exist,it created a new file & add Text)
async function appendFile(){
    try{
        await fsPromises.appendFile('./NewFolder/newFile.txt','I am a future Developer');
        console.log('New Text Added');  
    }catch(err){
        console.error('Error While Adding new Text',err.message)
    }
};


//4.Read a File
async function readFile(){
    try{
        const data = await fsPromises.readFile('./NewFolder/newFile.txt','utf8');
        console.log(`File Content:\n${data}`);  
    }catch(err){
        console.error('Error While Reading File',err.message)
    }
};


//5.Read folder Contents
async function readFolder(){
    try{
        const data2 = await fsPromises.readdir('../PROJECT_NodeJS','utf-8');
        console.log('Folder Contents:\n',data2);
    }catch(err){
        console.error('Error While Reading Folder',err.message)
    } 
};


//6.File exist or not
async function fileExist(){
    try{
        await fsPromises.access('./NewFolder/newFile.txt');
        console.log('File Exist')
    }catch(err){
        console.error('File Does not exist',err.message)
    }
};


//7.Folder exist or not
async function folderExist(){
    try{
        await fsPromises.access('./NewFolder');
        console.log('Folder Exist')
    }catch(err){
        console.error('Folder does not exist',err.message)
    }
};


//8.Copy File
async function copyFile(){
    try{
        const copy = await fsPromises.copyFile('./NewFolder/newFile.txt','copyfile.txt');
        console.log('File Copied');
    }catch(err){
        console.error('Error While Copying File',err.message)
    }
};


//9.Rename File
async function fileRename(){
    try{
        await fsPromises.rename('./NewFolder/newFile.txt','./NewFolder/newFile2.txt');
        console.log('File Renamed');
    }catch(err){
        console.error('Error While Renaming file',err.message)
    }
};


//10.Delete File
async function deleteFile(){
    try{
        await fsPromises.unlink('./NewFolder/newFile2.txt');
        console.error('File Deleted');
    }catch(err){
        console.error('Error While Deleting file',err.message)
    }
};


//11.Delete Folder
async function deleteFolder(){
    try{
        await fsPromises.rmdir('./NewFolder',{});
        console.error('Folder Deleted');
    }catch(err){
        console.error('Error While Deleting folder',err.message)
    }
};


async function main(){
    try{
        await createFolder();
        await writeFile();
        await appendFile();
        await readFile();
        await readFolder();
        await fileExist();
        await folderExist();
        await copyFile();
        await fileRename();
        await deleteFile();
        await deleteFolder();    
    }catch(err){
        console.error('Error:',err.message)
    }
};

main();