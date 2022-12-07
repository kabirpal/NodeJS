const dbConnection = require('./mongodbConnect');

const deleteData = async ()=>{
    let data = await dbConnection();
    let result = await data.deleteOne({name:"Samsung S20 FE"})
    console.log(result)
}

deleteData();