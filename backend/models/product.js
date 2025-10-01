const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    brand: String,
    color: String,
    discountedPrice: Number,
    price: { type: Number, required: true },
    discountPersent: Number,
    imageUrl: String,
    size: [
        {
            name: String,
            quantity: Number
        }
    ],
    quantity: Number,
    topLavelCategory: String,
    secondLavelCategory: String,
    thirdLavelCategory: String,
    description: String
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
