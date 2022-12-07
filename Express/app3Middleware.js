const express = require('express');
const reqAge = require('./Middleware/middleware')
const app = express();
const route = express.Router();

// const reqAge = (req, resp, next)=>{
//     //console.log('age filter')
//     if(!req.query.age){
//         resp.send('Please Enter your age');
//     }
//     else if( req.query.age<18){
//         resp.send('Your age is enough to access the Page')
//     }
//     else{
//         next();
//     }
    
// }

//app.use(reqAge)  First way to add the middleware route
// second way it to add the middleware route to particular routes only



route.use(reqAge);
app.get('/',(req,resp)=>{
    resp.send('Welcome to homepage');
})

route.get('/user', (req,resp)=>{
    resp.send('Welcome to user page');
})


app.get('/contact', (req,resp)=>{
    resp.send('Welcome to contact page');
})

route.get('/login', (req,resp)=>{
    resp.send('Welcome to login page');
})

app.use('/',route);
app.listen(3500);