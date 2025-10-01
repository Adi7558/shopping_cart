const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Product = require("./models/product");
const Order = require("./models/order");

const MONGO_URL = "mongodb://127.0.0.1:27017/shopping_cart";

// Middleware
app.use(cors());
app.use(express.json());

// Connect DB
main().then(() => {
    console.log(" Connected to DB Successfully");
}).catch((err) => {
    console.log(" DB Connection Error:", err);
});
async function main() {
    await mongoose.connect(MONGO_URL);
}

// ---------- Test Route ----------
app.get("/testingList", async (req, res) => {
    const productListing = new Product({
        tittle: "Shirt",
        price: 200,
        imageUrl: "",
    });

    await productListing.save();
    console.log(" Sample product was saved");
    res.send("Successful Testing");
});


// READ all products
app.get("/productListing", async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch products" });
    }
});


// ---------- Orders (Checkout) ----------
app.post("/checkout", async (req, res) => {
    try {
        const { items, totalAmount } = req.body;

        if (!items || items.length === 0) {
            return res.status(400).json({ error: "Cart is empty" });
        }

        // Create and save new order
        const newOrder = new Order({
            items,
            totalAmount,
        });

        await newOrder.save();

        console.log("🛒 New Order Saved:", newOrder);

        return res.json({ message: "✅ Order placed successfully", order: newOrder });
    } catch (err) {
        console.error("Checkout error:", err);
        res.status(500).json({ error: "Something went wrong while saving order" });
    }
});

// ---------- Root ----------
app.get("/", (req, res) => {
    res.send("Hello it's me root! ");
});

// ---------- Start Server ----------
app.listen(8000, () => {
    console.log(" Server is running at http://localhost:8000");
});
