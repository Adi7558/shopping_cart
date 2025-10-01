const mongoose = require("mongoose");
const initdata = require("./mens_kurta");
const productList = require("../models/product");
const MONGO_URL = "mongodb://127.0.0.1:27017/shopping_cart";



main().then(() => {
    console.log("Connected db Successfully");
}).catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await productList.deleteMany({});
    await productList.insertMany(initdata.mens_kurta);
    console.log("Data was Initialized");
}

initDB();