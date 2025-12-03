const express = require('express');
const app = express();
const PORT = process.env.PORT || 6002
const mongoose = require('mongoose');

let users;
async function userDatabase(){
    try{
        await mongoose.connect('mongodb://localhost:27017/myDatabase');
        users = await mongoose.connection.db.collection('user').find({}).toArray();
        console.log(users);  
    } catch(err){
        console.error(err);
    } finally{
        await mongoose.disconnect();
    }
}

userDatabase();
app.get('/',(req,res) =>{
    res.send(users);
})

app.listen(PORT,() => console.log(`Server running on PORT: ${PORT}`));


// mongodb+srv://basilj400:<db_password>@cluster0.2yhqgc0.mongodb.net/

