const express = require('express');
const app = express();
const path = require('path');

// app.use(express.static(path.join(__dirname,'views')));
app.use(express.static('views'));

// app.get('/',(req,res) =>{
//     // res.json("<h1> Home </h1>") - json
//     // res.send("<h1> Home </h1>") // html
//     // res.status(200) // Default status value

//     //read File using express
//     res.sendFile(path.join(__dirname,'views','index.html'))
// });

// app.get('/contact',(req,res) =>{
//     // res.send("<h1> Contact </h1>")
//     res.sendFile(path.join(__dirname,'views','contact.html'))
// });

app.use((req,res) =>{
    res.status(404).send("<h1> 404 </h1>")
});

const PORT = process.env.PORT || 3005
app.listen(PORT,() => console.log(`Server Running on ${PORT}`));