import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

const ProductDetail = () => {
    const location = useLocation();
    const { addToCart, cartItems } = useCart(); // also get cartItems to debug
    const product = location.state?.product; // get product from navigate()

    const navigate = useNavigate();

    const handleAddToCart = () => {
        if (!product) {
            console.error("No product found to add to cart!");
            return;
        }

        console.log("Product to add:", product); // Debug: check the product object
        console.log("Cart before add:", cartItems); // Debug: current cart state

        addToCart(product); // Add product to cart state

        console.log("Cart after add (note: state update is async):", cartItems);
        // This may still show old cart due to async state update, use useEffect to see updated state

        alert(`${product.title} is added to cart!`);
    };

    if (!product) {
        return <div className="p-5 text-center">No Product Data Found</div>;
    }

    return (
        <div className="container mx-auto p-6">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Product Image */}
                <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
                    <img
                        alt={product.title}
                        src={product.imageUrl}
                        className="row-span-2 aspect-3/4 size-full rounded-lg object-cover max-lg:hidden"
                    />
                </div>

                {/* Product Info */}
                <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
                    <p className="text-gray-500 mb-2">{product.brand}</p>
                    <p className="text-sm text-gray-600 mb-4">{product.description}</p>

                    {/* Pricing */}
                    <div className="flex items-center space-x-4 mb-4">
                        <p className="text-2xl font-semibold text-green-600">
                            ₹{product.discountedPrice}
                        </p>
                        <p className="line-through text-gray-500">₹{product.price}</p>
                        <p className="text-sm text-red-500">{product.discountPersent}% Off</p>
                    </div>

                    {/* Sizes */}
                    {product.size && product.size.length > 0 && (
                        <div className="mb-4">
                            <h3 className="font-semibold mb-2">Available Sizes:</h3>
                            <div className="flex gap-2">
                                {product.size.map((s, index) => (
                                    <span
                                        key={index}
                                        className="border px-3 py-1 rounded cursor-pointer hover:bg-gray-100"
                                    >
                                        {s.name} ({s.quantity})
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-4 mt-6">
                        <button
                            onClick={handleAddToCart}
                            className="px-6 py-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
