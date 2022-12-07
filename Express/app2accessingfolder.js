const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.join(__dirname,'HtmlPages');
console.log(publicPath);
//app.use(express.static(publicPath));

app.set('view engine','ejs')

app.get('/aboutus',(_,resp)=>{
    resp.sendFile(`${publicPath}/aboutus.html`);
})

app.get('/profile',(_,resp)=>{
    const user={
        name:'Kabir',
        email:'Kabirpal53@gmail.com',
        city:'Jodhpur',
        skills:['python','java','javascript','html','css']
    }
    resp.render('profile',{user})
})

app.get('/home',(_,resp)=>{
    resp.sendFile(`${publicPath}/home.html`);
})

app.get('*',(_,resp)=>{
    resp.sendFile(`${publicPath}/index.html`);
})

app.listen(3000);