const http = require('http')

//```````````````````Write a fuction~~~~~~~~~~~~

// function dataCall(request, resp){
//     resp.write("<h1>Hello World2!</h1>");
//     resp.end();
// }


//~~~~~~~~~~~~~Using arrow function

//const dataCall = (req, resp)=>resp.write("<h1>Hello World#</h1>")

//http.createServer(dataCall).listen(4500);

http.createServer((req,resp)=>{
    resp.write('<h1>Hello world</h1>');
    resp.end();
}).listen(4500);