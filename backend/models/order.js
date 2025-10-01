const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    items: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
            title: { type: String, required: true },
            brand: String,
            color: String,
            price: { type: Number, required: true },
            discountedPrice: Number,
            quantity: { type: Number, default: 1 },
            size: String,
            imageUrl: String,
            topLevelCategory: String,
            secondLevelCategory: String,
            thirdLevelCategory: String,
        },
    ],
    totalAmount: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
