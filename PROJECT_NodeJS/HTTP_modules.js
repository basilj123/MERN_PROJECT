const http = require('http');
const PORT = process.env.PORT || 8003

const server = http.createServer((req,res) =>{
    res.writeHead(200,'Content-Type : text/html')
    res.end('<h1> Hello from Server Side </h1>')
});

server.listen(PORT,() => console.log(`Server Running on ${PORT}`));