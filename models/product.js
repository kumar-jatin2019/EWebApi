const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({

    name: { type: String, required: true },
    price: { type: Number, required: true },
    productId:{type:String, require: true},
    quantity:{type:Number, required: true}, 
    description:{type:String},
    thumbnail:{type:String}
});

// Create and export the Product model based on the schema
const Products  = mongoose.model("product", productSchema);

module.exports = Products;