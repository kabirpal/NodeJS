const dbConnection = require('./mongodbConnect');

const insert = async()=>{
    const db = await dbConnection();
    const result = await db.insertMany([
        {name:'Samsung S20 FE', brand: 'Samsung', price: 36999},
        {name:'Samsung S21 FE', brand: 'Samsung', price: 56999},
    ]
    )
    if(result.acknowledged){
        console.log('Data has been inserted successfully');
    }
    else{
        console.log('Data cannot be added');
    }
}

insert();