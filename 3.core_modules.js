const http = require("http");

//How to Create Server
http
  .createServer((req, res) => {
    res.write("Hello from HTTP Module");
    res.end();
  })
  .listen("8081");

//Some core modules/built in modules
const path = require('path');
const fs = require('fs');
const isPromises = require('fs/promises');
// const http = require('http');
const {fileURLToPath} = require('url');
