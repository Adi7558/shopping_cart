// src/components/Pages/CartContext.js
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Add item to cart
    const addToCart = (product) => {
        const productWithQuantity = { ...product, quantity: 1 };
        setCartItems((prev) => [...prev, productWithQuantity]);
        console.log("Product added to cart:", productWithQuantity);
    };

    // Remove item by index
    const removeFromCart = (index) => {
        setCartItems((prev) => prev.filter((_, i) => i !== index));
    };

    // Update quantity of a specific item
    const updateQuantity = (index, quantity) => {
        setCartItems((prev) => {
            const updated = [...prev];
            updated[index].quantity = Math.max(1, quantity); // minimum 1
            return updated;
        });
    };

    // Optional: Clear the entire cart
    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                setCartItems,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart, // you can remove this if not used
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
