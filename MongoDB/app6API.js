const express = require('express');
const mongodbConnect = require('mongodb');
const dbConnect = require('./mongodbConnect');
const app = express();

app.use(express.json());

app.get('/', async (req,resp)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    resp.send(data)
})

app.post('/',async (req,resp)=>{
    let data = await dbConnect();
    let result = await data.insertOne(req.body)
    resp.send({result})
})

app.put('/',async (req,resp)=>{
    let data = await dbConnect();
    let result = await data.updateOne(
        {name:req.body.name},
        { $set: req.body}
    )
    resp.send({result:"updated"})
})

app.delete('/:id', async (req,resp)=>{
    const data = await dbConnect();
    const result = await data.deleteOne(
        {_id: new mongodbConnect.ObjectId(req.params.id)}
    )
    resp.send(result)
})

app.listen(5000)