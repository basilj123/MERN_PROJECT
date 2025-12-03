//Middleware
const express = require('express');
const app = express();

const {Token} = require('./middleware/token.js')
const {Validation} = require('./middleware/validation.js')

const middleware = [Token,Validation];

app.use(DateGenerator);

app.get('/profile',middleware,(req,res) =>{
    console.log('User Logged');
    res.send('<h1> Success </h1>');
});

app.get('/',(req,res) =>{
    console.log("Home Page");
    res.send('<h1> Home </h1>');
});

function DateGenerator(req,res,next){
    console.log(new Date());   
    next();
}

const PORT = process.env.PORT || 3005;
app.listen(PORT,() => console.log(`Server Running on ${PORT}`));