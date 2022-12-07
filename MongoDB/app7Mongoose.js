const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/e-comm')

const productSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price:Number
});

const saveDatainDB = async ()=>{
    const Product = mongoose.model('products',productSchema);
    let data = new Product({name:'Nothing Phone', brand: "Nothing", price: 32000});
    const result = await data.save();
    console.log(result)
}

const updateDatainDb = async()=>{
    const Product = mongoose.model('products',productSchema);
    let data = await Product.updateOne({name:'Nothing Phone'},{$set:{price:29999}})
    console.log(data)
}

const deleteDataInDb = async()=>{
    const Product = mongoose.model('products',productSchema);
    let data = await Product.deleteOne({name:'Nothing Phone'});
    console.log(data);
}

const fetchDataFromDb = async()=>{
    const Product = mongoose.model('products',productSchema);
    let data = await Product.find();
    console.log(data)
}

//deleteDataInDb();
//updateDatainDb();
//saveDatainDB();
fetchDataFromDb();

