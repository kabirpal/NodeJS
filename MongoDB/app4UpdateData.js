const dbConnection = require('./mongodbConnect')

const updateData = async() =>{
    let data = await dbConnection();
    let result = await data.updateOne(
        {name:'Samsung S21 FE'},{ $set:{price:45999}}
    );
    console.log(result)

    if(result.matchedCount>0){
        console.log('Data has been updated')
    }
    else{
        console.log('Data cannot be added')
    }
}

updateData()