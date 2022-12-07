const dbConnection = require('./mongodbConnect');

//using then in promise
dbConnection().then((resp)=>{
    resp.find({brand:'Samsung'}).toArray().then((data)=>{
        //console.log(data);
    })
})


//using async and await
const mainData = async ()=>{
    let data = await dbConnection();
    data = await data.find().toArray();
    console.warn("Async and await",data);
}

mainData();