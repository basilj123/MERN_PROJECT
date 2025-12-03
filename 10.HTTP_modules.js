const http = require('http');
const url = require('url')

const server = http.createServer((req,res) =>{
    // console.log(req.url);
    // if(req.url === 'favicon.ico') return res.end ()
    const rUrl = url.parse(req.url,true).pathname;
    if(rUrl == '/'){
        res.write("Home Page");
        res.end();
    }
    else if(rUrl == '/about'){
        res.write("About Page");
        res.end();
    }
    else if(rUrl == '/contact'){
        res.write("Contact Page");
        res.end();
    } 
})
server.listen(8085)
