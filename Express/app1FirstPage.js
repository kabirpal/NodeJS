const express = require('express')
const app = express()

app.get('',(req,res)=>{
    const value = req.query.name;
    res.send(`
    <h1>Hello this is my home page</h1>
    Welcome ${value}!`);
})

app.get('/about',(req,res)=>{
    res.send('This is about us');
})

app.get('')

app.listen(5001);