// const colors = require('colors');
// console.log('Hello World'.blue);

const data = require('./data');
const http = require('http')
http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'application/json'});
    resp.write(JSON.stringify(data));
    resp.end()
}).listen(3000)