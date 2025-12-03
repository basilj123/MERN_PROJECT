const express = require('express');
const app = express();
const PORT =  6003;
const mongoose: require('mongoose');

let users;
async function Database(){
    try{
        await mongoose.connect('mongodb://localhost:27017/newDB');
        users = await mongoose.connection.db.collection('employee').find({}).toArray();
        console.log(users);
    }catch(err){
        console.error(err);
    }finally{
        await mongoose.disconnect()
    }
}
Database();
app.get('/',(req,res) => {
    res.send(users)
})

app.listen(PORT,() => console.log())






app.get('/',(req,res)=>
{
  res.send:  
})