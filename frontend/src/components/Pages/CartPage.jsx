// CartPage.jsx
import React from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CartPage = () => {

    const { cartItems, setCartItems, removeFromCart, updateQuantity } = useCart();

    const navigate = useNavigate();



    const handleCheckout = async () => {
        try {
            if (cartItems.length === 0) {
                alert("Cart is empty");
                return;
            }

            const mappedItems = cartItems.map(item => ({
                productId: item._id,
                title: item.title,
                brand: item.brand,
                color: item.color,
                price: item.price,
                discountedPrice: item.discountedPrice,
                quantity: item.quantity || 1,
                size: item.size ? item.size[0]?.name : null,
                imageUrl: item.imageUrl,
                topLevelCategory: item.topLavelCategory,
                secondLevelCategory: item.secondLavelCategory,
                thirdLevelCategory: item.thirdLavelCategory
            }));

            const totalAmount = mappedItems.reduce(
                (sum, item) => sum + (item.discountedPrice || item.price) * (item.quantity || 1),
                0
            );

            const response = await axios.post("http://localhost:8000/checkout", {
                items: mappedItems,
                totalAmount,
            });

            alert("Order placed successfully!");
            console.log(response.data);
        } catch (error) {
            console.error("Checkout error:", error);
        }
    };

    const incrementQuantity = (index) => {
        updateQuantity(index, (cartItems[index].quantity || 1) + 1);
    };

    const decrementQuantity = (index) => {
        if ((cartItems[index].quantity || 1) > 1) {
            updateQuantity(index, cartItems[index].quantity - 1);
        }
    };

    const removeItem = (index) => {
        removeFromCart(index);
    };


    if (cartItems.length === 0) {
        return <div className="p-10 text-center text-gray-500 text-lg">Your cart is empty</div>;
    }

    // Calculate total price
    const totalPrice = cartItems.reduce(
        (total, item) => total + (item.discountedPrice || item.price) * (item.quantity || 1),
        0
    );

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                    {cartItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between border p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.imageUrl}
                                    alt={item.title}
                                    className="w-24 h-24 object-cover rounded-lg"
                                />
                                <div>
                                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                                    <p className="text-gray-500">Brand: {item.brand}</p>
                                    <p className="text-green-600 font-semibold text-lg">
                                        ₹{item.discountedPrice} x{item.quantity || 1} pcs

                                    </p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <button
                                            onClick={() => decrementQuantity(index)}
                                            className="bg-gray-200 px-2 rounded hover:bg-gray-300"
                                        >
                                            -
                                        </button>
                                        <span>{item.quantity || 1}</span>
                                        <button
                                            onClick={() => incrementQuantity(index)}
                                            className="bg-gray-200 px-2 rounded hover:bg-gray-300"
                                        >
                                            +
                                        </button>
                                        <button
                                            onClick={() => removeItem(index)}
                                            className="ml-4 text-red-500 hover:text-red-700"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Cart Summary */}
                <div className="border p-6 rounded-lg shadow-md h-fit">
                    <h3 className="text-xl font-semibold mb-4 text-gray-700">Order Summary</h3>
                    <div className="flex justify-between mb-2">
                        <span className="text-gray-500">Items:</span>
                        <span className="font-semibold">{cartItems.length}</span>
                    </div>
                    <div className="flex justify-between mb-4">
                        <span className="text-gray-500">Total:</span>
                        <span className="font-bold text-lg text-green-600">₹{totalPrice}</span>
                    </div>
                    <button
                        onClick={handleCheckout}
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg shadow-md transition-colors duration-200"
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
