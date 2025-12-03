const http = require('http');

const server = http.createServer((req,res) =>{
     res.end("Hello");
}).listen(5000);


